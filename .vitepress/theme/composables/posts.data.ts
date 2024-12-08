import { basename } from "path";
import { createContentLoader } from "vitepress";

interface Post {
  title: string;
  url: string;
  date: string;
}

declare const data: Post[];

export { data };

export default createContentLoader("novinky/*-*.md", {
  transform(raw): Post[] {
    return raw
      .map(({ url, frontmatter }) => ({
        title:  frontmatter.title,
        url,
        date: Intl.DateTimeFormat("cs").format(new Date(frontmatter.date))
      }))
      .sort((a, b) => a.title.localeCompare(b));
  }
});
