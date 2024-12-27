import re
import tkinter as tk
from tkinter import simpledialog, messagebox

# Globální nastavení
show_separator_dialog = False

def merge_files(separator):
    file1_name = 'prelozit.txt'
    file2_name = 'prelozeno.txt'
    output_file_name = 'merged_output.txt'
    
    try:
        with open(file1_name, 'r', encoding='utf-8') as file1, open(file2_name, 'r', encoding='utf-8') as file2, open(output_file_name, 'w', encoding='utf-8') as output_file:
            for line1, line2 in zip(file1, file2):
                merged_line = f"{line1.strip()}{separator}{line2.strip()}"
                output_file.write(merged_line + "\n")
        messagebox.showinfo("Hotovo", f"Soubory {file1_name} a {file2_name} byly úspěšně spojeny do {output_file_name}.")
    except Exception as e:
        messagebox.showerror("Chyba", f"Nastala chyba: {e}")

def split_file(separator):
    input_file_name = 'merged_input.txt'
    output_file1_name = 'prelozit.txt'
    output_file2_name = 'prelozeno.txt'
    
    try:
        with open(input_file_name, 'r', encoding='utf-8') as input_file, \
             open(output_file1_name, 'w', encoding='utf-8') as output_file1, \
             open(output_file2_name, 'w', encoding='utf-8') as output_file2:

            for line in input_file:
                line = line.replace(r'\=', 'TEMP')
                if separator in line:
                    text1, text2 = line.strip().split(separator, 1)
                    text1 = text1.replace('TEMP', r'\=')
                    text2 = text2.replace('TEMP', r'\=')
                    output_file1.write(text1 + "\n")
                    output_file2.write(text2 + "\n")
        messagebox.showinfo("Hotovo", f"Soubor {input_file_name} byl úspěšně rozdělen do {output_file1_name} a {output_file2_name}.")
    except Exception as e:
        messagebox.showerror("Chyba", f"Nastala chyba: {e}")

def ask_separator(action):
    global show_separator_dialog
    if show_separator_dialog:
        separator = simpledialog.askstring("Zadejte oddělovač", "Zadejte oddělovač (např. = nebo :)")
        if separator:
            action(separator)
        else:
            messagebox.showwarning("Varování", "Oddělovač nebyl zadán. Akce zrušena.")
    else:
        action("=")  # Výchozí oddělovač

def main():
    def show_main_menu():
        clear_window()
        label = tk.Label(root, text="Vyberte akci, kterou chcete provést:", font=("Arial", 12))
        label.pack(pady=10)

        merge_button = tk.Button(root, text="Spojit soubory", command=lambda: ask_separator(merge_files), **button_style)
        merge_button.pack(pady=5)

        split_button = tk.Button(root, text="Rozdělit soubor", command=lambda: ask_separator(split_file), **button_style)
        split_button.pack(pady=5)

        settings_button = tk.Button(root, text="Nastavení", command=show_settings_menu, **button_style)
        settings_button.pack(pady=5)

        exit_button = tk.Button(root, text="Ukončit", command=root.quit, bg="#580000", fg="white", width="35", font=("Arial", 12))
        exit_button.pack(pady=20)

        footer_label = tk.Label(root, text="Made by: MikeCZ with ChatGPT", font=("Arial", 10), fg="gray")
        footer_label.pack(pady=10)

    def show_settings_menu():
        clear_window()
        label = tk.Label(root, text="Nastavení", font=("Arial", 14, "bold"))
        label.pack(pady=10)

        settings_frame = tk.Frame(root)
        settings_frame.pack(pady=10)

        settings_label = tk.Label(settings_frame, text="Dialog oddělovače:", font=("Arial", 12))
        settings_label.pack(side="left", padx=5)

        def toggle_separator_dialog():
            global show_separator_dialog
            show_separator_dialog = not show_separator_dialog
            update_toggle_button()

        def update_toggle_button():
            if show_separator_dialog:
                toggle_button.config(text="Zapnuto", bg="green", fg="white", width="15")
            else:
                toggle_button.config(text="Vypnuto", bg="gray", fg="white", width="15")

        toggle_button = tk.Button(settings_frame, text="", command=toggle_separator_dialog, **button_style)
        toggle_button.pack(side="left", padx=5)
        update_toggle_button()

        back_button = tk.Button(root, text="Zpět", command=show_main_menu, bg="#580000", fg="white", width="35", font=("Arial", 12))
        back_button.pack(pady=85)

    def clear_window():
        for widget in root.winfo_children():
            widget.destroy()

    root = tk.Tk()
    root.title("XUnity.StringProcessor")
    root.geometry("400x300")
    root.resizable(False, False)  # Zabránit změně velikosti okna

    button_style = {
        "bg": "#5094fa",
        "fg": "white",
        "activebackground": "#4682B4",
        "activeforeground": "white",
        "font": ("Arial", 12),
        "width": 35,
    }

    show_main_menu()
    root.mainloop()

if __name__ == "__main__":
    main()
