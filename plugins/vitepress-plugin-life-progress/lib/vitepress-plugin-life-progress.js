import { defineComponent as x, ref as y, computed as a, onUnmounted as S, openBlock as r, createElementBlock as u, createElementVNode as m, Fragment as k, renderList as F, unref as v, normalizeStyle as _, toDisplayString as g, createCommentVNode as M, onMounted as V, createVNode as B, render as J } from "vue";
const P = { class: "life-progress" }, A = { class: "month" }, T = { class: "day" }, $ = /* @__PURE__ */ x({
  __name: "template",
  props: {
    customEventName: null
  },
  setup(e) {
    const n = e, o = y(!1), h = (t = !0) => o.value = t, d = ["Led", "Úno", "Bře", "Dub", "Kvě", "Čvn", "Čvc", "Srp", "Zář", "Říj", "Lis", "Pro"], f = () => new Date(), N = (t, s) => new Date(t, s, 0).getDate(), i = y(f()), D = a(() => i.value.getFullYear()), l = a(() => i.value.getMonth()), w = a(() => i.value.getDate()), L = a(() => N(D.value, l.value)), b = a(() => d.map((t, s) => ({
      name: t,
      width: s < l.value ? 100 : s === l.value ? w.value / L.value * 100 : 0
    }))), E = (t) => h(t.detail);
    return window.addEventListener(n.customEventName, E), S(() => {
      window.removeEventListener(n.customEventName, E);
    }), (t, s) => (r(), u("div", P, [
      m("ul", null, [
        (r(!0), u(k, null, F(v(b), (c, C) => (r(), u("li", { key: c }, [
          m("span", {
            class: "filler",
            style: _({
              width: `${c.width}%`
            })
          }, null, 4),
          C === v(l) ? (r(), u("div", {
            key: 0,
            style: _({
              opacity: o.value ? 1 : 0,
              width: `${c.width}%`
            }),
            class: "label-box"
          }, [
            m("span", A, g(c.name), 1),
            m("span", T, g(v(w)), 1)
          ], 4)) : M("", !0)
        ]))), 128))
      ])
    ]));
  }
});
const p = "vitepress-life-progress", z = () => {
  const e = document.getElementsByClassName("VPNav")[0], n = B($, {
    customEventName: p
  }), o = document.createElement("div");
  e.appendChild(o), J(n, o);
  const d = n.component.proxy;
  return {
    mountEl: e,
    vm: d
  };
}, O = (e) => {
  e.addEventListener("mouseenter", () => window.dispatchEvent(new CustomEvent(p, { detail: !0 }))), e.addEventListener("mouseleave", () => window.dispatchEvent(new CustomEvent(p, { detail: !1 })));
}, Y = () => {
  typeof window > "u" || V(() => {
    const { mountEl: e } = z();
    O(e);
  });
};
export {
  Y as default
};
//# sourceMappingURL=vitepress-plugin-life-progress.js.map
