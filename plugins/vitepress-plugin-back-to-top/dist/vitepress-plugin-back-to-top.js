import { defineComponent as _, ref as m, computed as h, onMounted as f, openBlock as d, createBlock as w, Transition as v, withCtx as T, unref as k, createElementBlock as g, createCommentVNode as y, pushScopeId as b, popScopeId as x, createElementVNode as a, render as B, h as C } from "vue";
const E = (e) => (b("data-v-09295527"), e = e(), x(), e), I = /* @__PURE__ */ E(() => /* @__PURE__ */ a("svg", {
  class: "icon-top",
  viewBox: "0 0 512 512",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  stroke: "currentColor",
  "stroke-width": "0",
  "stroke-linecap": "butt",
  "stroke-linejoin": "miter"
}, [
  /* @__PURE__ */ a("path", { d: "M256 421.6c-18.1 0-33.2-6.8-42.9-10.9-5.4-2.3-11.3 1.8-10.9 7.6l3.5 51c.2 3.1 3.8 4.7 6.3 2.8l14.5-11c1.8-1.4 4.5-.9 5.7 1l20.5 32.1c1.5 2.4 5.1 2.4 6.6 0l20.5-32.1c1.2-1.9 3.9-2.4 5.7-1l14.5 11c2.5 1.9 6.1.3 6.3-2.8l3.5-51c.4-5.8-5.5-10-10.9-7.6-9.8 4.1-24.8 10.9-42.9 10.9z M397.7 293.1l-48-49.1c0-158-93.2-228-93.2-228s-94.1 70-94.1 228l-48 49.1c-1.8 1.8-2.6 4.5-2.2 7.1L130.6 412c.9 5.7 7.1 8.5 11.8 5.4l67.1-45.4s20.7 20 47.1 20c26.4 0 46.1-20 46.1-20l67.1 45.4c4.6 3.1 10.8.3 11.8-5.4l18.5-111.9c.2-2.6-.6-5.2-2.4-7zM256.5 192c-17 0-30.7-14.3-30.7-32s13.8-32 30.7-32c17 0 30.7 14.3 30.7 32s-13.7 32-30.7 32z" })
], -1)), S = [
  I
], L = /* @__PURE__ */ _({
  __name: "back-to-top",
  props: {
    threshold: { default: 300 }
  },
  setup(e) {
    const t = e, o = m(0), c = h(() => o.value > t.threshold);
    f(() => {
      o.value = n(), window.addEventListener(
        "scroll",
        u(() => {
          o.value = n();
        }, 100)
      );
    });
    function n() {
      return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    }
    function p() {
      window.scrollTo({ top: 0, behavior: "smooth" }), o.value = 0;
    }
    function u(r, s = 100) {
      let l;
      return (...i) => {
        clearTimeout(l), l = setTimeout(() => {
          r.apply(null, i);
        }, s);
      };
    }
    return (r, s) => (d(), w(v, { name: "fade" }, {
      default: T(() => [
        k(c) ? (d(), g("div", {
          key: 0,
          class: "go-to-top",
          onClick: p
        }, S)) : y("", !0)
      ]),
      _: 1
    }));
  }
});
const M = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [c, n] of t)
    o[c] = n;
  return o;
}, N = /* @__PURE__ */ M(L, [["__scopeId", "data-v-09295527"]]), V = (e) => {
  typeof window > "u" || window.addEventListener("load", () => {
    const t = document.createElement("div");
    document.body.appendChild(t), B(
      C(N, {
        threshold: e == null ? void 0 : e.threshold
      }),
      t
    );
  });
};
export {
  V as default
};
