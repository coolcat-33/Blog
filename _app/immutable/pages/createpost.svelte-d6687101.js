var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { S as SvelteComponent, i as init, a8 as not_equal, l as empty, g as insert_hydration, e as element, c as claim_element, a as children, d as detach, b as attr, L as toggle_class, Q as append_hydration, R as listen, E as noop, a9 as destroy_each, a1 as createEventDispatcher, v as onMount, J as binding_callbacks, t as text, h as claim_text, j as set_data, T as run_all, s as safe_not_equal, w as create_component, x as claim_component, y as mount_component, q as transition_in, o as transition_out, B as destroy_component, n as group_outros, p as check_outros, aa as onDestroy, D as tick, _ as bind, k as space, m as claim_space, Y as add_flush_callback } from "../chunks/index-fe8f50da.js";
import "../chunks/HeaderSearch.svelte_svelte_type_style_lang-50804c02.js";
import { i as icons, d as delegate, v as visit$1, w as wordCount, a as debounce$2, c as createCodeMirror, t as throttle, g as getBuiltinActions, V as Viewer, f as findStartIndex, h as handleImageUpload, b as createEditorUtils, T as TextInput } from "../chunks/viewer-72edec5c.js";
import "../chunks/index-8a7c489c.js";
function get_each_context$2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[21] = list[i];
  child_ctx[23] = i;
  return child_ctx;
}
function get_each_context_1$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[21] = list[i];
  child_ctx[23] = i;
  return child_ctx;
}
function create_else_block(ctx) {
  let div0;
  let t0_value = ctx[2].write + "";
  let t0;
  let div1;
  let t1_value = ctx[2].preview + "";
  let t1;
  let mounted;
  let dispose;
  return {
    c() {
      div0 = element("div");
      t0 = text(t0_value);
      div1 = element("div");
      t1 = text(t1_value);
      this.h();
    },
    l(nodes) {
      div0 = claim_element(nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, t0_value);
      div0_nodes.forEach(detach);
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      t1 = claim_text(div1_nodes, t1_value);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "bytemd-toolbar-tab");
      toggle_class(div0, "bytemd-toolbar-tab-active", ctx[1] !== "preview");
      attr(div1, "class", "bytemd-toolbar-tab");
      toggle_class(div1, "bytemd-toolbar-tab-active", ctx[1] === "preview");
    },
    m(target, anchor) {
      insert_hydration(target, div0, anchor);
      append_hydration(div0, t0);
      insert_hydration(target, div1, anchor);
      append_hydration(div1, t1);
      if (!mounted) {
        dispose = [
          listen(div0, "click", ctx[15]),
          listen(div1, "click", ctx[16])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 4 && t0_value !== (t0_value = ctx2[2].write + ""))
        set_data(t0, t0_value);
      if (dirty & 2) {
        toggle_class(div0, "bytemd-toolbar-tab-active", ctx2[1] !== "preview");
      }
      if (dirty & 4 && t1_value !== (t1_value = ctx2[2].preview + ""))
        set_data(t1, t1_value);
      if (dirty & 2) {
        toggle_class(div1, "bytemd-toolbar-tab-active", ctx2[1] === "preview");
      }
    },
    d(detaching) {
      if (detaching)
        detach(div0);
      if (detaching)
        detach(div1);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block_1$2(ctx) {
  let each_1_anchor;
  let each_value_1 = ctx[3];
  let each_blocks = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1$1(get_each_context_1$1(ctx, each_value_1, i));
  }
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    l(nodes) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_hydration(target, each_1_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 8) {
        each_value_1 = ctx2[3];
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1$1(ctx2, each_value_1, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_1$1(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value_1.length;
      }
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_if_block_2(ctx) {
  let div;
  let raw_value = ctx[21].icon + "";
  let div_class_value;
  let div_bytemd_tippy_path_value;
  return {
    c() {
      div = element("div");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true, "bytemd-tippy-path": true });
      var div_nodes = children(div);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", div_class_value = ["bytemd-toolbar-icon", tippyClass].join(" "));
      attr(div, "bytemd-tippy-path", div_bytemd_tippy_path_value = ctx[23]);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      div.innerHTML = raw_value;
    },
    p(ctx2, dirty) {
      if (dirty & 8 && raw_value !== (raw_value = ctx2[21].icon + ""))
        div.innerHTML = raw_value;
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_each_block_1$1(ctx) {
  let if_block_anchor;
  let if_block = ctx[21].handler && create_if_block_2(ctx);
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (ctx2[21].handler) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block_2(ctx2);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_if_block$3(ctx) {
  let div;
  let raw_value = ctx[21].icon + "";
  let div_class_value;
  let div_bytemd_tippy_path_value;
  return {
    c() {
      div = element("div");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true, "bytemd-tippy-path": true });
      var div_nodes = children(div);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", div_class_value = ["bytemd-toolbar-icon", tippyClass, tippyClassRight].join(" "));
      attr(div, "bytemd-tippy-path", div_bytemd_tippy_path_value = ctx[23]);
      toggle_class(div, "bytemd-toolbar-icon-active", ctx[21].active);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      div.innerHTML = raw_value;
    },
    p(ctx2, dirty) {
      if (dirty & 32 && raw_value !== (raw_value = ctx2[21].icon + ""))
        div.innerHTML = raw_value;
      if (dirty & 32) {
        toggle_class(div, "bytemd-toolbar-icon-active", ctx2[21].active);
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_each_block$2(ctx) {
  let if_block_anchor;
  let if_block = !ctx[21].hidden && create_if_block$3(ctx);
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (!ctx2[21].hidden) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$3(ctx2);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_fragment$5(ctx) {
  let div2;
  let div0;
  let div1;
  let mounted;
  let dispose;
  function select_block_type(ctx2, dirty) {
    if (ctx2[0])
      return create_if_block_1$2;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  let each_value = ctx[5];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
  }
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      if_block.c();
      div1 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      if_block.l(div0_nodes);
      div0_nodes.forEach(detach);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div1_nodes);
      }
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "bytemd-toolbar-left");
      attr(div1, "class", "bytemd-toolbar-right");
      attr(div2, "class", "bytemd-toolbar");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      if_block.m(div0, null);
      append_hydration(div2, div1);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div1, null);
      }
      ctx[17](div2);
      if (!mounted) {
        dispose = listen(div2, "click", ctx[7]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(div0, null);
        }
      }
      if (dirty & 32) {
        each_value = ctx2[5];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$2(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$2(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div1, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div2);
      if_block.d();
      destroy_each(each_blocks, detaching);
      ctx[17](null);
      mounted = false;
      dispose();
    }
  };
}
const tippyClass = "bytemd-tippy";
const tippyClassRight = "bytemd-tippy-right";
const tippyPathKey = "bytemd-tippy-path";
function instance$5($$self, $$props, $$invalidate) {
  let tocActive;
  let helpActive;
  let writeActive;
  let previewActive;
  let rightActions;
  const dispatch = createEventDispatcher();
  let toolbar;
  let { context } = $$props;
  let { split } = $$props;
  let { activeTab } = $$props;
  let { fullscreen: fullscreen2 } = $$props;
  let { sidebar } = $$props;
  let { locale } = $$props;
  let { actions } = $$props;
  function getPayloadFromElement(e) {
    var _a, _b;
    const paths = (_b = (_a = e.getAttribute(tippyPathKey)) == null ? void 0 : _a.split("-")) == null ? void 0 : _b.map((x) => parseInt(x, 10));
    if (!paths)
      return;
    let item = {
      title: "",
      handler: {
        type: "dropdown",
        actions: e.classList.contains(tippyClassRight) ? rightActions : actions
      }
    };
    paths == null ? void 0 : paths.forEach((index2) => {
      var _a2;
      if (((_a2 = item.handler) == null ? void 0 : _a2.type) === "dropdown") {
        item = item.handler.actions[index2];
      }
    });
    return { paths, item };
  }
  let delegateInstance;
  function init2() {
    delegateInstance = delegate(toolbar, {
      target: `.${tippyClass}`,
      onCreate({ setProps, reference }) {
        const payload = getPayloadFromElement(reference);
        if (!payload)
          return;
        const { item, paths } = payload;
        const { handler } = item;
        if (!handler)
          return;
        if (handler.type === "action") {
          setProps({
            content: item.title,
            onHidden(ins) {
              ins.destroy();
            }
          });
        } else if (handler.type === "dropdown") {
          const dropdown = document.createElement("div");
          dropdown.classList.add("bytemd-dropdown");
          if (item.title) {
            const dropdownTitle = document.createElement("div");
            dropdownTitle.classList.add("bytemd-dropdown-title");
            dropdownTitle.appendChild(document.createTextNode(item.title));
            dropdown.appendChild(dropdownTitle);
          }
          handler.actions.forEach((subAction, i) => {
            var _a;
            const dropdownItem = document.createElement("div");
            dropdownItem.classList.add("bytemd-dropdown-item");
            dropdownItem.setAttribute(tippyPathKey, [...paths, i].join("-"));
            if (((_a = subAction.handler) == null ? void 0 : _a.type) === "dropdown") {
              dropdownItem.classList.add(tippyClass);
            }
            if (reference.classList.contains(tippyClassRight)) {
              dropdownItem.classList.add(tippyClassRight);
            }
            dropdownItem.innerHTML = `${subAction.icon ? `<div class="bytemd-dropdown-item-icon">${subAction.icon}</div>` : ""}<div class="bytemd-dropdown-item-title">${subAction.title}</div>`;
            dropdown.appendChild(dropdownItem);
          });
          setProps({
            allowHTML: true,
            showOnCreate: true,
            theme: "light-border",
            placement: "bottom-start",
            interactive: true,
            interactiveDebounce: 50,
            arrow: false,
            offset: [0, 4],
            content: dropdown.outerHTML,
            onHidden(ins) {
              ins.destroy();
            },
            onCreate(ins) {
              [...ins.popper.querySelectorAll(".bytemd-dropdown-item")].forEach((el, i) => {
                var _a;
                const actionHandler = (_a = handler.actions[i]) == null ? void 0 : _a.handler;
                if ((actionHandler == null ? void 0 : actionHandler.type) === "action") {
                  const { mouseenter, mouseleave } = actionHandler;
                  if (mouseenter) {
                    el.addEventListener("mouseenter", () => {
                      mouseenter(context);
                    });
                  }
                  if (mouseleave) {
                    el.addEventListener("mouseleave", () => {
                      mouseleave(context);
                    });
                  }
                }
              });
            }
          });
        }
      }
    });
  }
  onMount(() => {
    init2();
  });
  function handleClick(e) {
    var _a, _b;
    const target = e.target.closest(`[${tippyPathKey}]`);
    if (!target)
      return;
    const handler = (_b = (_a = getPayloadFromElement(target)) == null ? void 0 : _a.item) == null ? void 0 : _b.handler;
    if ((handler == null ? void 0 : handler.type) === "action") {
      handler.click(context);
    }
    delegateInstance == null ? void 0 : delegateInstance.destroy();
    init2();
  }
  const click_handler = () => dispatch("tab", "write");
  const click_handler_1 = () => dispatch("tab", "preview");
  function div2_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      toolbar = $$value;
      $$invalidate(4, toolbar);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("context" in $$props2)
      $$invalidate(8, context = $$props2.context);
    if ("split" in $$props2)
      $$invalidate(0, split = $$props2.split);
    if ("activeTab" in $$props2)
      $$invalidate(1, activeTab = $$props2.activeTab);
    if ("fullscreen" in $$props2)
      $$invalidate(9, fullscreen2 = $$props2.fullscreen);
    if ("sidebar" in $$props2)
      $$invalidate(10, sidebar = $$props2.sidebar);
    if ("locale" in $$props2)
      $$invalidate(2, locale = $$props2.locale);
    if ("actions" in $$props2)
      $$invalidate(3, actions = $$props2.actions);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1024) {
      $$invalidate(14, tocActive = sidebar === "toc");
    }
    if ($$self.$$.dirty & 1024) {
      $$invalidate(13, helpActive = sidebar === "help");
    }
    if ($$self.$$.dirty & 2) {
      $$invalidate(12, writeActive = activeTab === "write");
    }
    if ($$self.$$.dirty & 2) {
      $$invalidate(11, previewActive = activeTab === "preview");
    }
    if ($$self.$$.dirty & 31237) {
      $$invalidate(5, rightActions = [
        {
          title: tocActive ? locale.closeToc : locale.toc,
          icon: icons.toc,
          handler: {
            type: "action",
            click() {
              dispatch("click", "toc");
            }
          },
          active: tocActive
        },
        {
          title: helpActive ? locale.closeHelp : locale.help,
          icon: icons.help,
          handler: {
            type: "action",
            click() {
              dispatch("click", "help");
            }
          },
          active: helpActive
        },
        {
          title: writeActive ? locale.exitWriteOnly : locale.writeOnly,
          icon: icons.left,
          handler: {
            type: "action",
            click() {
              dispatch("tab", "write");
            }
          },
          active: writeActive,
          hidden: !split
        },
        {
          title: previewActive ? locale.exitPreviewOnly : locale.previewOnly,
          icon: icons.right,
          handler: {
            type: "action",
            click() {
              dispatch("tab", "preview");
            }
          },
          active: previewActive,
          hidden: !split
        },
        {
          title: fullscreen2 ? locale.exitFullscreen : locale.fullscreen,
          icon: fullscreen2 ? icons.fullscreenOff : icons.fullscreenOn,
          handler: {
            type: "action",
            click() {
              dispatch("click", "fullscreen");
            }
          }
        },
        {
          title: locale.source,
          icon: icons.source,
          handler: {
            type: "action",
            click() {
              window.open("https://github.com/bytedance/bytemd");
            }
          }
        }
      ]);
    }
  };
  return [
    split,
    activeTab,
    locale,
    actions,
    toolbar,
    rightActions,
    dispatch,
    handleClick,
    context,
    fullscreen2,
    sidebar,
    previewActive,
    writeActive,
    helpActive,
    tocActive,
    click_handler,
    click_handler_1,
    div2_binding
  ];
}
class Toolbar extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$5, create_fragment$5, not_equal, {
      context: 8,
      split: 0,
      activeTab: 1,
      fullscreen: 9,
      sidebar: 10,
      locale: 2,
      actions: 3
    });
  }
}
function get_each_context$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[10] = list[i];
  child_ctx[12] = i;
  return child_ctx;
}
function create_each_block$1(ctx) {
  let li;
  let t_value = ctx[10].text + "";
  let t;
  let li_class_value;
  let li_style_value;
  let mounted;
  let dispose;
  function click_handler() {
    return ctx[8](ctx[12]);
  }
  return {
    c() {
      li = element("li");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      li = claim_element(nodes, "LI", { class: true, style: true });
      var li_nodes = children(li);
      t = claim_text(li_nodes, t_value);
      li_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(li, "class", li_class_value = `bytemd-toc-${ctx[10].level}`);
      attr(li, "style", li_style_value = `padding-left:${(ctx[10].level - ctx[3]) * 16 + 8}px`);
      toggle_class(li, "bytemd-toc-active", ctx[4] === ctx[12]);
      toggle_class(li, "bytemd-toc-first", ctx[10].level === ctx[3]);
    },
    m(target, anchor) {
      insert_hydration(target, li, anchor);
      append_hydration(li, t);
      if (!mounted) {
        dispose = listen(li, "click", click_handler);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & 4 && t_value !== (t_value = ctx[10].text + ""))
        set_data(t, t_value);
      if (dirty & 4 && li_class_value !== (li_class_value = `bytemd-toc-${ctx[10].level}`)) {
        attr(li, "class", li_class_value);
      }
      if (dirty & 12 && li_style_value !== (li_style_value = `padding-left:${(ctx[10].level - ctx[3]) * 16 + 8}px`)) {
        attr(li, "style", li_style_value);
      }
      if (dirty & 20) {
        toggle_class(li, "bytemd-toc-active", ctx[4] === ctx[12]);
      }
      if (dirty & 12) {
        toggle_class(li, "bytemd-toc-first", ctx[10].level === ctx[3]);
      }
    },
    d(detaching) {
      if (detaching)
        detach(li);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$4(ctx) {
  let div;
  let h22;
  let t_value = ctx[0].toc + "";
  let t;
  let ul2;
  let each_value = ctx[2];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
  }
  return {
    c() {
      div = element("div");
      h22 = element("h2");
      t = text(t_value);
      ul2 = element("ul");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      h22 = claim_element(div_nodes, "H2", {});
      var h2_nodes = children(h22);
      t = claim_text(h2_nodes, t_value);
      h2_nodes.forEach(detach);
      ul2 = claim_element(div_nodes, "UL", {});
      var ul_nodes = children(ul2);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(ul_nodes);
      }
      ul_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "bytemd-toc");
      toggle_class(div, "bytemd-hidden", !ctx[1]);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, h22);
      append_hydration(h22, t);
      append_hydration(div, ul2);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ul2, null);
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & 1 && t_value !== (t_value = ctx2[0].toc + ""))
        set_data(t, t_value);
      if (dirty & 60) {
        each_value = ctx2[2];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$1(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$1(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(ul2, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      if (dirty & 2) {
        toggle_class(div, "bytemd-hidden", !ctx2[1]);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_each(each_blocks, detaching);
    }
  };
}
function instance$4($$self, $$props, $$invalidate) {
  let { hast } = $$props;
  let { currentBlockIndex } = $$props;
  let { locale } = $$props;
  let { visible } = $$props;
  const dispatch = createEventDispatcher();
  let items;
  let minLevel = 6;
  let currentHeadingIndex = 0;
  function stringifyHeading(e) {
    let result = "";
    visit$1(e, (node) => {
      if (node.type === "text") {
        result += node.value;
      }
    });
    return result;
  }
  const click_handler = (index2) => {
    dispatch("click", index2);
  };
  $$self.$$set = ($$props2) => {
    if ("hast" in $$props2)
      $$invalidate(6, hast = $$props2.hast);
    if ("currentBlockIndex" in $$props2)
      $$invalidate(7, currentBlockIndex = $$props2.currentBlockIndex);
    if ("locale" in $$props2)
      $$invalidate(0, locale = $$props2.locale);
    if ("visible" in $$props2)
      $$invalidate(1, visible = $$props2.visible);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 204) {
      (() => {
        $$invalidate(2, items = []);
        $$invalidate(4, currentHeadingIndex = 0);
        hast.children.filter((v) => v.type === "element").forEach((node, index2) => {
          if (node.tagName[0] === "h" && !!node.children.length) {
            const i = Number(node.tagName[1]);
            $$invalidate(3, minLevel = Math.min(minLevel, i));
            items.push({ level: i, text: stringifyHeading(node) });
          }
          if (currentBlockIndex >= index2) {
            $$invalidate(4, currentHeadingIndex = items.length - 1);
          }
        });
      })();
    }
  };
  return [
    locale,
    visible,
    items,
    minLevel,
    currentHeadingIndex,
    dispatch,
    hast,
    currentBlockIndex,
    click_handler
  ];
}
class Toc extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$4, not_equal, {
      hast: 6,
      currentBlockIndex: 7,
      locale: 0,
      visible: 1
    });
  }
}
function create_if_block_1$1(ctx) {
  let span;
  let t_value = ctx[2].limited + "";
  let t;
  return {
    c() {
      span = element("span");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, t_value);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "bytemd-status-error");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & 4 && t_value !== (t_value = ctx2[2].limited + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_if_block$2(ctx) {
  let label;
  let input;
  let t_value = ctx[2].sync + "";
  let t;
  let mounted;
  let dispose;
  return {
    c() {
      label = element("label");
      input = element("input");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      label = claim_element(nodes, "LABEL", {});
      var label_nodes = children(label);
      input = claim_element(label_nodes, "INPUT", { type: true });
      t = claim_text(label_nodes, t_value);
      label_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(input, "type", "checkbox");
      input.checked = ctx[1];
    },
    m(target, anchor) {
      insert_hydration(target, label, anchor);
      append_hydration(label, input);
      append_hydration(label, t);
      if (!mounted) {
        dispose = listen(input, "change", ctx[8]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 2) {
        input.checked = ctx2[1];
      }
      if (dirty & 4 && t_value !== (t_value = ctx2[2].sync + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(label);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$3(ctx) {
  let div2;
  let div0;
  let span0;
  let t0_value = ctx[2].words + "";
  let t0;
  let t1;
  let strong0;
  let t2;
  let span1;
  let t3_value = ctx[2].lines + "";
  let t3;
  let t4;
  let strong1;
  let t5;
  let div1;
  let span2;
  let t6_value = ctx[2].top + "";
  let t6;
  let mounted;
  let dispose;
  let if_block0 = ctx[3] && create_if_block_1$1(ctx);
  let if_block1 = ctx[0] && create_if_block$2(ctx);
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      span0 = element("span");
      t0 = text(t0_value);
      t1 = text(": ");
      strong0 = element("strong");
      t2 = text(ctx[5]);
      span1 = element("span");
      t3 = text(t3_value);
      t4 = text(": ");
      strong1 = element("strong");
      t5 = text(ctx[4]);
      if (if_block0)
        if_block0.c();
      div1 = element("div");
      if (if_block1)
        if_block1.c();
      span2 = element("span");
      t6 = text(t6_value);
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      span0 = claim_element(div0_nodes, "SPAN", {});
      var span0_nodes = children(span0);
      t0 = claim_text(span0_nodes, t0_value);
      t1 = claim_text(span0_nodes, ": ");
      strong0 = claim_element(span0_nodes, "STRONG", {});
      var strong0_nodes = children(strong0);
      t2 = claim_text(strong0_nodes, ctx[5]);
      strong0_nodes.forEach(detach);
      span0_nodes.forEach(detach);
      span1 = claim_element(div0_nodes, "SPAN", {});
      var span1_nodes = children(span1);
      t3 = claim_text(span1_nodes, t3_value);
      t4 = claim_text(span1_nodes, ": ");
      strong1 = claim_element(span1_nodes, "STRONG", {});
      var strong1_nodes = children(strong1);
      t5 = claim_text(strong1_nodes, ctx[4]);
      strong1_nodes.forEach(detach);
      span1_nodes.forEach(detach);
      if (if_block0)
        if_block0.l(div0_nodes);
      div0_nodes.forEach(detach);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      if (if_block1)
        if_block1.l(div1_nodes);
      span2 = claim_element(div1_nodes, "SPAN", {});
      var span2_nodes = children(span2);
      t6 = claim_text(span2_nodes, t6_value);
      span2_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "bytemd-status-left");
      attr(div1, "class", "bytemd-status-right");
      attr(div2, "class", "bytemd-status");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      append_hydration(div0, span0);
      append_hydration(span0, t0);
      append_hydration(span0, t1);
      append_hydration(span0, strong0);
      append_hydration(strong0, t2);
      append_hydration(div0, span1);
      append_hydration(span1, t3);
      append_hydration(span1, t4);
      append_hydration(span1, strong1);
      append_hydration(strong1, t5);
      if (if_block0)
        if_block0.m(div0, null);
      append_hydration(div2, div1);
      if (if_block1)
        if_block1.m(div1, null);
      append_hydration(div1, span2);
      append_hydration(span2, t6);
      if (!mounted) {
        dispose = listen(span2, "click", ctx[9]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & 4 && t0_value !== (t0_value = ctx2[2].words + ""))
        set_data(t0, t0_value);
      if (dirty & 32)
        set_data(t2, ctx2[5]);
      if (dirty & 4 && t3_value !== (t3_value = ctx2[2].lines + ""))
        set_data(t3, t3_value);
      if (dirty & 16)
        set_data(t5, ctx2[4]);
      if (ctx2[3]) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_1$1(ctx2);
          if_block0.c();
          if_block0.m(div0, null);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (ctx2[0]) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block$2(ctx2);
          if_block1.c();
          if_block1.m(div1, span2);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (dirty & 4 && t6_value !== (t6_value = ctx2[2].top + ""))
        set_data(t6, t6_value);
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div2);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      mounted = false;
      dispose();
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  let words2;
  let lines2;
  let { showSync } = $$props;
  let { value } = $$props;
  let { syncEnabled } = $$props;
  let { locale } = $$props;
  let { islimited } = $$props;
  const dispatch = createEventDispatcher();
  const change_handler = () => dispatch("sync", !syncEnabled);
  const click_handler = () => dispatch("top");
  $$self.$$set = ($$props2) => {
    if ("showSync" in $$props2)
      $$invalidate(0, showSync = $$props2.showSync);
    if ("value" in $$props2)
      $$invalidate(7, value = $$props2.value);
    if ("syncEnabled" in $$props2)
      $$invalidate(1, syncEnabled = $$props2.syncEnabled);
    if ("locale" in $$props2)
      $$invalidate(2, locale = $$props2.locale);
    if ("islimited" in $$props2)
      $$invalidate(3, islimited = $$props2.islimited);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 128) {
      $$invalidate(5, words2 = wordCount(value));
    }
    if ($$self.$$.dirty & 128) {
      $$invalidate(4, lines2 = value.split("\n").length);
    }
  };
  return [
    showSync,
    syncEnabled,
    locale,
    islimited,
    lines2,
    words2,
    dispatch,
    value,
    change_handler,
    click_handler
  ];
}
class Status extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, {
      showSync: 0,
      value: 7,
      syncEnabled: 1,
      locale: 2,
      islimited: 3
    });
  }
}
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[5] = list[i];
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[5] = list[i];
  return child_ctx;
}
function create_if_block_1(ctx) {
  let li;
  let div0;
  let raw_value = ctx[5].icon + "";
  let div1;
  let t0_value = ctx[5].title + "";
  let t0;
  let div2;
  let code2;
  let t1_value = ctx[5].cheatsheet + "";
  let t1;
  return {
    c() {
      li = element("li");
      div0 = element("div");
      div1 = element("div");
      t0 = text(t0_value);
      div2 = element("div");
      code2 = element("code");
      t1 = text(t1_value);
      this.h();
    },
    l(nodes) {
      li = claim_element(nodes, "LI", {});
      var li_nodes = children(li);
      div0 = claim_element(li_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      div0_nodes.forEach(detach);
      div1 = claim_element(li_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      t0 = claim_text(div1_nodes, t0_value);
      div1_nodes.forEach(detach);
      div2 = claim_element(li_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      code2 = claim_element(div2_nodes, "CODE", {});
      var code_nodes = children(code2);
      t1 = claim_text(code_nodes, t1_value);
      code_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      li_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "bytemd-help-icon");
      attr(div1, "class", "bytemd-help-title");
      attr(div2, "class", "bytemd-help-content");
    },
    m(target, anchor) {
      insert_hydration(target, li, anchor);
      append_hydration(li, div0);
      div0.innerHTML = raw_value;
      append_hydration(li, div1);
      append_hydration(div1, t0);
      append_hydration(li, div2);
      append_hydration(div2, code2);
      append_hydration(code2, t1);
    },
    p(ctx2, dirty) {
      if (dirty & 4 && raw_value !== (raw_value = ctx2[5].icon + ""))
        div0.innerHTML = raw_value;
      if (dirty & 4 && t0_value !== (t0_value = ctx2[5].title + ""))
        set_data(t0, t0_value);
      if (dirty & 4 && t1_value !== (t1_value = ctx2[5].cheatsheet + ""))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (detaching)
        detach(li);
    }
  };
}
function create_each_block_1(ctx) {
  let if_block_anchor;
  let if_block = ctx[5].cheatsheet && create_if_block_1(ctx);
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (ctx2[5].cheatsheet) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block_1(ctx2);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_if_block$1(ctx) {
  let li;
  let div0;
  let raw_value = ctx[5].icon + "";
  let div1;
  let t0_value = ctx[5].title + "";
  let t0;
  let div2;
  let kbd;
  let t1_value = ctx[5].handler.shortcut + "";
  let t1;
  return {
    c() {
      li = element("li");
      div0 = element("div");
      div1 = element("div");
      t0 = text(t0_value);
      div2 = element("div");
      kbd = element("kbd");
      t1 = text(t1_value);
      this.h();
    },
    l(nodes) {
      li = claim_element(nodes, "LI", {});
      var li_nodes = children(li);
      div0 = claim_element(li_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      div0_nodes.forEach(detach);
      div1 = claim_element(li_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      t0 = claim_text(div1_nodes, t0_value);
      div1_nodes.forEach(detach);
      div2 = claim_element(li_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      kbd = claim_element(div2_nodes, "KBD", {});
      var kbd_nodes = children(kbd);
      t1 = claim_text(kbd_nodes, t1_value);
      kbd_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      li_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "bytemd-help-icon");
      attr(div1, "class", "bytemd-help-title");
      attr(div2, "class", "bytemd-help-content");
    },
    m(target, anchor) {
      insert_hydration(target, li, anchor);
      append_hydration(li, div0);
      div0.innerHTML = raw_value;
      append_hydration(li, div1);
      append_hydration(div1, t0);
      append_hydration(li, div2);
      append_hydration(div2, kbd);
      append_hydration(kbd, t1);
    },
    p(ctx2, dirty) {
      if (dirty & 4 && raw_value !== (raw_value = ctx2[5].icon + ""))
        div0.innerHTML = raw_value;
      if (dirty & 4 && t0_value !== (t0_value = ctx2[5].title + ""))
        set_data(t0, t0_value);
      if (dirty & 4 && t1_value !== (t1_value = ctx2[5].handler.shortcut + ""))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (detaching)
        detach(li);
    }
  };
}
function create_each_block(ctx) {
  let if_block_anchor;
  let if_block = ctx[5].handler && ctx[5].handler.type === "action" && ctx[5].handler.shortcut && create_if_block$1(ctx);
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (ctx2[5].handler && ctx2[5].handler.type === "action" && ctx2[5].handler.shortcut) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$1(ctx2);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_fragment$2(ctx) {
  let div;
  let h20;
  let t0_value = ctx[0].cheatsheet + "";
  let t0;
  let ul0;
  let h21;
  let t1_value = ctx[0].shortcuts + "";
  let t1;
  let ul1;
  let each_value_1 = ctx[2];
  let each_blocks_1 = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  let each_value = ctx[2];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      div = element("div");
      h20 = element("h2");
      t0 = text(t0_value);
      ul0 = element("ul");
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].c();
      }
      h21 = element("h2");
      t1 = text(t1_value);
      ul1 = element("ul");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      h20 = claim_element(div_nodes, "H2", {});
      var h20_nodes = children(h20);
      t0 = claim_text(h20_nodes, t0_value);
      h20_nodes.forEach(detach);
      ul0 = claim_element(div_nodes, "UL", {});
      var ul0_nodes = children(ul0);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].l(ul0_nodes);
      }
      ul0_nodes.forEach(detach);
      h21 = claim_element(div_nodes, "H2", {});
      var h21_nodes = children(h21);
      t1 = claim_text(h21_nodes, t1_value);
      h21_nodes.forEach(detach);
      ul1 = claim_element(div_nodes, "UL", {});
      var ul1_nodes = children(ul1);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(ul1_nodes);
      }
      ul1_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "bytemd-help");
      toggle_class(div, "bytemd-hidden", !ctx[1]);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, h20);
      append_hydration(h20, t0);
      append_hydration(div, ul0);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].m(ul0, null);
      }
      append_hydration(div, h21);
      append_hydration(h21, t1);
      append_hydration(div, ul1);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ul1, null);
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & 1 && t0_value !== (t0_value = ctx2[0].cheatsheet + ""))
        set_data(t0, t0_value);
      if (dirty & 4) {
        each_value_1 = ctx2[2];
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks_1[i]) {
            each_blocks_1[i].p(child_ctx, dirty);
          } else {
            each_blocks_1[i] = create_each_block_1(child_ctx);
            each_blocks_1[i].c();
            each_blocks_1[i].m(ul0, null);
          }
        }
        for (; i < each_blocks_1.length; i += 1) {
          each_blocks_1[i].d(1);
        }
        each_blocks_1.length = each_value_1.length;
      }
      if (dirty & 1 && t1_value !== (t1_value = ctx2[0].shortcuts + ""))
        set_data(t1, t1_value);
      if (dirty & 4) {
        each_value = ctx2[2];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(ul1, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      if (dirty & 2) {
        toggle_class(div, "bytemd-hidden", !ctx2[1]);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_each(each_blocks_1, detaching);
      destroy_each(each_blocks, detaching);
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let items;
  let { actions } = $$props;
  let { locale } = $$props;
  let { visible } = $$props;
  function flatItems(actions2) {
    let items2 = [];
    actions2.forEach((action) => {
      const { handler, cheatsheet: cheatsheet2 } = action;
      if ((handler == null ? void 0 : handler.type) === "dropdown") {
        items2.push(...flatItems(handler.actions));
      }
      if (cheatsheet2) {
        items2.push(action);
      }
    });
    return items2;
  }
  $$self.$$set = ($$props2) => {
    if ("actions" in $$props2)
      $$invalidate(3, actions = $$props2.actions);
    if ("locale" in $$props2)
      $$invalidate(0, locale = $$props2.locale);
    if ("visible" in $$props2)
      $$invalidate(1, visible = $$props2.visible);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 8) {
      $$invalidate(2, items = flatItems(actions));
    }
  };
  return [locale, visible, items, actions];
}
class Help extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { actions: 3, locale: 0, visible: 1 });
  }
}
const bold = "Bold";
const boldText = "bold text";
const cheatsheet = "Markdown Cheatsheet";
const closeHelp = "Close help";
const closeToc = "Close table of contents";
const code = "Code";
const codeBlock = "Code block";
const codeLang = "lang";
const codeText = "code";
const exitFullscreen = "Exit fullscreen";
const exitPreviewOnly = "Exit preview only";
const exitWriteOnly = "Exit write only";
const fullscreen = "Fullscreen";
const h1 = "Heading 1";
const h2 = "Heading 2";
const h3 = "Heading 3";
const h4 = "Heading 4";
const h5 = "Heading 5";
const h6 = "Heading 6";
const headingText = "heading";
const help = "Help";
const hr = "Horizontal rule";
const image = "Image";
const imageAlt = "alt";
const imageTitle = "title";
const italic = "Italic";
const italicText = "italic text";
const limited = "The maximum character limit has been reached";
const lines = "Lines";
const link = "Link";
const linkText = "link text";
const ol = "Ordered list";
const olItem = "item";
const preview = "Preview";
const previewOnly = "Preview only";
const quote = "Quote";
const quotedText = "quoted text";
const shortcuts = "Shortcuts";
const source = "Source code";
const sync = "Scroll sync";
const toc = "Table of contents";
const top = "Scroll to top";
const ul = "Unordered list";
const ulItem = "item";
const words = "Words";
const write = "Write";
const writeOnly = "Write only";
var en = {
  bold,
  boldText,
  cheatsheet,
  closeHelp,
  closeToc,
  code,
  codeBlock,
  codeLang,
  codeText,
  exitFullscreen,
  exitPreviewOnly,
  exitWriteOnly,
  fullscreen,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  headingText,
  help,
  hr,
  image,
  imageAlt,
  imageTitle,
  italic,
  italicText,
  limited,
  lines,
  link,
  linkText,
  ol,
  olItem,
  preview,
  previewOnly,
  quote,
  quotedText,
  shortcuts,
  source,
  sync,
  toc,
  top,
  ul,
  ulItem,
  words,
  write,
  writeOnly
};
function create_if_block(ctx) {
  let viewer;
  let current;
  viewer = new Viewer({
    props: {
      value: ctx[15],
      plugins: ctx[1],
      sanitize: ctx[2]
    }
  });
  viewer.$on("hast", ctx[34]);
  return {
    c() {
      create_component(viewer.$$.fragment);
    },
    l(nodes) {
      claim_component(viewer.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(viewer, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const viewer_changes = {};
      if (dirty[0] & 32768)
        viewer_changes.value = ctx2[15];
      if (dirty[0] & 2)
        viewer_changes.plugins = ctx2[1];
      if (dirty[0] & 4)
        viewer_changes.sanitize = ctx2[2];
      viewer.$set(viewer_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(viewer.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(viewer.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(viewer, detaching);
    }
  };
}
function create_fragment$1(ctx) {
  let div5;
  let toolbar;
  let div4;
  let div0;
  let div0_style_value;
  let div1;
  let div1_style_value;
  let div3;
  let div2;
  let raw_value = icons.close + "";
  let help2;
  let toc2;
  let status;
  let current;
  let mounted;
  let dispose;
  toolbar = new Toolbar({
    props: {
      context: ctx[9],
      split: ctx[10],
      activeTab: ctx[7],
      sidebar: ctx[8],
      fullscreen: ctx[14],
      locale: ctx[11],
      actions: ctx[20]
    }
  });
  toolbar.$on("key", ctx[30]);
  toolbar.$on("tab", ctx[31]);
  toolbar.$on("click", ctx[32]);
  let if_block = !ctx[3] && create_if_block(ctx);
  help2 = new Help({
    props: {
      locale: ctx[11],
      actions: ctx[20],
      visible: ctx[8] === "help"
    }
  });
  toc2 = new Toc({
    props: {
      hast: ctx[17],
      locale: ctx[11],
      currentBlockIndex: ctx[19],
      visible: ctx[8] === "toc"
    }
  });
  toc2.$on("click", ctx[37]);
  status = new Status({
    props: {
      locale: ctx[11],
      showSync: !ctx[3] && ctx[10],
      value: ctx[15],
      syncEnabled: ctx[16],
      islimited: ctx[0].length > ctx[4]
    }
  });
  status.$on("sync", ctx[38]);
  status.$on("top", ctx[39]);
  return {
    c() {
      div5 = element("div");
      create_component(toolbar.$$.fragment);
      div4 = element("div");
      div0 = element("div");
      div1 = element("div");
      if (if_block)
        if_block.c();
      div3 = element("div");
      div2 = element("div");
      create_component(help2.$$.fragment);
      create_component(toc2.$$.fragment);
      create_component(status.$$.fragment);
      this.h();
    },
    l(nodes) {
      div5 = claim_element(nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      claim_component(toolbar.$$.fragment, div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      div0 = claim_element(div4_nodes, "DIV", { class: true, style: true });
      children(div0).forEach(detach);
      div1 = claim_element(div4_nodes, "DIV", { class: true, style: true });
      var div1_nodes = children(div1);
      if (if_block)
        if_block.l(div1_nodes);
      div1_nodes.forEach(detach);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div2_nodes.forEach(detach);
      claim_component(help2.$$.fragment, div3_nodes);
      claim_component(toc2.$$.fragment, div3_nodes);
      div3_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      claim_component(status.$$.fragment, div5_nodes);
      div5_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "bytemd-editor");
      attr(div0, "style", div0_style_value = ctx[21].edit);
      attr(div1, "class", "bytemd-preview");
      attr(div1, "style", div1_style_value = ctx[21].preview);
      attr(div2, "class", "bytemd-sidebar-close");
      attr(div3, "class", "bytemd-sidebar");
      toggle_class(div3, "bytemd-hidden", ctx[8] === false);
      attr(div4, "class", "bytemd-body");
      attr(div5, "class", "bytemd");
      toggle_class(div5, "bytemd-split", ctx[10] && ctx[7] === false);
      toggle_class(div5, "bytemd-fullscreen", ctx[14]);
    },
    m(target, anchor) {
      insert_hydration(target, div5, anchor);
      mount_component(toolbar, div5, null);
      append_hydration(div5, div4);
      append_hydration(div4, div0);
      ctx[33](div0);
      append_hydration(div4, div1);
      if (if_block)
        if_block.m(div1, null);
      ctx[35](div1);
      append_hydration(div4, div3);
      append_hydration(div3, div2);
      div2.innerHTML = raw_value;
      mount_component(help2, div3, null);
      mount_component(toc2, div3, null);
      mount_component(status, div5, null);
      ctx[40](div5);
      current = true;
      if (!mounted) {
        dispose = listen(div2, "click", ctx[36]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      const toolbar_changes = {};
      if (dirty[0] & 512)
        toolbar_changes.context = ctx2[9];
      if (dirty[0] & 1024)
        toolbar_changes.split = ctx2[10];
      if (dirty[0] & 128)
        toolbar_changes.activeTab = ctx2[7];
      if (dirty[0] & 256)
        toolbar_changes.sidebar = ctx2[8];
      if (dirty[0] & 16384)
        toolbar_changes.fullscreen = ctx2[14];
      if (dirty[0] & 2048)
        toolbar_changes.locale = ctx2[11];
      if (dirty[0] & 1048576)
        toolbar_changes.actions = ctx2[20];
      toolbar.$set(toolbar_changes);
      if (!current || dirty[0] & 2097152 && div0_style_value !== (div0_style_value = ctx2[21].edit)) {
        attr(div0, "style", div0_style_value);
      }
      if (!ctx2[3]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty[0] & 8) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div1, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (!current || dirty[0] & 2097152 && div1_style_value !== (div1_style_value = ctx2[21].preview)) {
        attr(div1, "style", div1_style_value);
      }
      const help_changes = {};
      if (dirty[0] & 2048)
        help_changes.locale = ctx2[11];
      if (dirty[0] & 1048576)
        help_changes.actions = ctx2[20];
      if (dirty[0] & 256)
        help_changes.visible = ctx2[8] === "help";
      help2.$set(help_changes);
      const toc_changes = {};
      if (dirty[0] & 131072)
        toc_changes.hast = ctx2[17];
      if (dirty[0] & 2048)
        toc_changes.locale = ctx2[11];
      if (dirty[0] & 524288)
        toc_changes.currentBlockIndex = ctx2[19];
      if (dirty[0] & 256)
        toc_changes.visible = ctx2[8] === "toc";
      toc2.$set(toc_changes);
      if (dirty[0] & 256) {
        toggle_class(div3, "bytemd-hidden", ctx2[8] === false);
      }
      const status_changes = {};
      if (dirty[0] & 2048)
        status_changes.locale = ctx2[11];
      if (dirty[0] & 1032)
        status_changes.showSync = !ctx2[3] && ctx2[10];
      if (dirty[0] & 32768)
        status_changes.value = ctx2[15];
      if (dirty[0] & 65536)
        status_changes.syncEnabled = ctx2[16];
      if (dirty[0] & 17)
        status_changes.islimited = ctx2[0].length > ctx2[4];
      status.$set(status_changes);
      if (dirty[0] & 1152) {
        toggle_class(div5, "bytemd-split", ctx2[10] && ctx2[7] === false);
      }
      if (dirty[0] & 16384) {
        toggle_class(div5, "bytemd-fullscreen", ctx2[14]);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(toolbar.$$.fragment, local);
      transition_in(if_block);
      transition_in(help2.$$.fragment, local);
      transition_in(toc2.$$.fragment, local);
      transition_in(status.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(toolbar.$$.fragment, local);
      transition_out(if_block);
      transition_out(help2.$$.fragment, local);
      transition_out(toc2.$$.fragment, local);
      transition_out(status.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div5);
      destroy_component(toolbar);
      ctx[33](null);
      if (if_block)
        if_block.d();
      ctx[35](null);
      destroy_component(help2);
      destroy_component(toc2);
      destroy_component(status);
      ctx[40](null);
      mounted = false;
      dispose();
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let mergedLocale;
  let actions;
  let split;
  let styles;
  let context;
  let { value = "" } = $$props;
  let { plugins = [] } = $$props;
  let { sanitize } = $$props;
  let { mode = "auto" } = $$props;
  let { previewDebounce = 300 } = $$props;
  let { placeholder } = $$props;
  let { editorConfig } = $$props;
  let { locale } = $$props;
  let { uploadImages } = $$props;
  let { overridePreview } = $$props;
  let { maxLength = Infinity } = $$props;
  const dispatch = createEventDispatcher();
  let root;
  let editorEl;
  let previewEl;
  let containerWidth = Infinity;
  let codemirror;
  let editor;
  let activeTab;
  let fullscreen2 = false;
  let sidebar = false;
  let cbs = [];
  let keyMap = {};
  function on() {
    cbs = plugins.map((p) => {
      var _a;
      return (_a = p.editorEffect) == null ? void 0 : _a.call(p, context);
    });
    keyMap = {};
    actions.forEach(({ handler }) => {
      if ((handler == null ? void 0 : handler.type) === "action" && handler.shortcut) {
        keyMap[handler.shortcut] = () => {
          handler.click(context);
        };
      }
    });
    editor.addKeyMap(keyMap);
  }
  function off() {
    cbs.forEach((cb) => cb && cb());
    editor == null ? void 0 : editor.removeKeyMap(keyMap);
  }
  let debouncedValue = value;
  const setDebouncedValue = debounce$2((value2) => {
    $$invalidate(15, debouncedValue = value2);
    overridePreview == null ? void 0 : overridePreview(previewEl, { value: debouncedValue, plugins, sanitize });
  }, previewDebounce);
  let syncEnabled = true;
  let editCalled = false;
  let previewCalled = false;
  let editPs;
  let previewPs;
  let hast = { type: "root", children: [] };
  let vfile;
  let currentBlockIndex = 0;
  onMount(async () => {
    $$invalidate(29, codemirror = createCodeMirror());
    $$invalidate(6, editor = codemirror(editorEl, __spreadProps(__spreadValues({
      value,
      mode: "yaml-frontmatter",
      lineWrapping: true,
      tabSize: 8,
      indentUnit: 4,
      extraKeys: {
        Enter: "newlineAndIndentContinueMarkdownList"
      }
    }, editorConfig), {
      placeholder
    })));
    editor.addKeyMap({
      Tab: "indentMore",
      "Shift-Tab": "indentLess"
    });
    editor.on("change", () => {
      dispatch("change", { value: editor.getValue() });
    });
    const updateBlockPositions = throttle(() => {
      editPs = [];
      previewPs = [];
      const scrollInfo = editor.getScrollInfo();
      const body = previewEl.childNodes[0];
      if (!(body instanceof HTMLElement))
        return;
      const leftNodes = hast.children.filter((v) => v.type === "element");
      const rightNodes = [...body.childNodes].filter((v) => v instanceof HTMLElement);
      for (let i = 0; i < leftNodes.length; i++) {
        const leftNode = leftNodes[i];
        const rightNode = rightNodes[i];
        if (!leftNode.position) {
          continue;
        }
        const left = editor.heightAtLine(leftNode.position.start.line - 1, "local") / (scrollInfo.height - scrollInfo.clientHeight);
        const right = (rightNode.offsetTop - body.offsetTop) / (previewEl.scrollHeight - previewEl.clientHeight);
        if (left >= 1 || right >= 1) {
          break;
        }
        editPs.push(left);
        previewPs.push(right);
      }
      editPs.push(1);
      previewPs.push(1);
    }, 1e3);
    const editorScrollHandler = () => {
      if (overridePreview)
        return;
      if (!syncEnabled)
        return;
      if (previewCalled) {
        previewCalled = false;
        return;
      }
      updateBlockPositions();
      const info = editor.getScrollInfo();
      const leftRatio = info.top / (info.height - info.clientHeight);
      const startIndex = findStartIndex(leftRatio, editPs);
      const rightRatio = (leftRatio - editPs[startIndex]) * (previewPs[startIndex + 1] - previewPs[startIndex]) / (editPs[startIndex + 1] - editPs[startIndex]) + previewPs[startIndex];
      previewEl.scrollTo(0, rightRatio * (previewEl.scrollHeight - previewEl.clientHeight));
      editCalled = true;
    };
    const previewScrollHandler = () => {
      if (overridePreview)
        return;
      updateBlockPositions();
      $$invalidate(19, currentBlockIndex = findStartIndex(previewEl.scrollTop / (previewEl.scrollHeight - previewEl.offsetHeight), previewPs));
      if (!syncEnabled)
        return;
      if (editCalled) {
        editCalled = false;
        return;
      }
      const rightRatio = previewEl.scrollTop / (previewEl.scrollHeight - previewEl.clientHeight);
      const startIndex = findStartIndex(rightRatio, previewPs);
      const leftRatio = (rightRatio - previewPs[startIndex]) * (editPs[startIndex + 1] - editPs[startIndex]) / (previewPs[startIndex + 1] - previewPs[startIndex]) + editPs[startIndex];
      if (isNaN(leftRatio)) {
        return;
      }
      const info = editor.getScrollInfo();
      editor.scrollTo(0, leftRatio * (info.height - info.clientHeight));
      previewCalled = true;
    };
    editor.on("scroll", editorScrollHandler);
    previewEl.addEventListener("scroll", previewScrollHandler, { passive: true });
    const handleImages = async (e, itemList) => {
      if (!uploadImages)
        return;
      const files = Array.from(itemList != null ? itemList : []).map((item) => {
        if (item.type.startsWith("image/")) {
          return item.getAsFile();
        }
      }).filter((f) => f != null);
      if (files.length) {
        e.preventDefault();
        await handleImageUpload(context, uploadImages, files);
      }
    };
    editor.on("drop", async (_, e) => {
      var _a;
      handleImages(e, (_a = e.dataTransfer) == null ? void 0 : _a.items);
    });
    editor.on("paste", async (_, e) => {
      var _a;
      handleImages(e, (_a = e.clipboardData) == null ? void 0 : _a.items);
    });
    new ResizeObserver((entries) => {
      $$invalidate(28, containerWidth = entries[0].contentRect.width);
    }).observe(root, {
      box: "border-box"
    });
  });
  onDestroy(off);
  const key_handler = (e) => {
    editor.setOption("keyMap", e.detail);
    editor.focus();
  };
  const tab_handler = (e) => {
    const v = e.detail;
    if (split) {
      $$invalidate(7, activeTab = activeTab === v ? false : v);
    } else {
      $$invalidate(7, activeTab = v);
    }
    if (activeTab === "write") {
      tick().then(() => {
        editor && editor.focus();
      });
    }
  };
  const click_handler = (e) => {
    switch (e.detail) {
      case "fullscreen":
        $$invalidate(14, fullscreen2 = !fullscreen2);
        break;
      case "help":
        $$invalidate(8, sidebar = sidebar === "help" ? false : "help");
        break;
      case "toc":
        $$invalidate(8, sidebar = sidebar === "toc" ? false : "toc");
        break;
    }
  };
  function div0_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      editorEl = $$value;
      $$invalidate(12, editorEl);
    });
  }
  const hast_handler = (e) => {
    $$invalidate(17, hast = e.detail.hast);
    $$invalidate(18, vfile = e.detail.file);
  };
  function div1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      previewEl = $$value;
      $$invalidate(13, previewEl);
    });
  }
  const click_handler_1 = () => {
    $$invalidate(8, sidebar = false);
  };
  const click_handler_2 = (e) => {
    const headings = previewEl.querySelectorAll("h1,h2,h3,h4,h5,h6");
    headings[e.detail].scrollIntoView();
  };
  const sync_handler = (e) => {
    $$invalidate(16, syncEnabled = e.detail);
  };
  const top_handler = () => {
    editor.scrollTo(null, 0);
    previewEl.scrollTo({ top: 0 });
  };
  function div5_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      root = $$value;
      $$invalidate(5, root);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("plugins" in $$props2)
      $$invalidate(1, plugins = $$props2.plugins);
    if ("sanitize" in $$props2)
      $$invalidate(2, sanitize = $$props2.sanitize);
    if ("mode" in $$props2)
      $$invalidate(22, mode = $$props2.mode);
    if ("previewDebounce" in $$props2)
      $$invalidate(23, previewDebounce = $$props2.previewDebounce);
    if ("placeholder" in $$props2)
      $$invalidate(24, placeholder = $$props2.placeholder);
    if ("editorConfig" in $$props2)
      $$invalidate(25, editorConfig = $$props2.editorConfig);
    if ("locale" in $$props2)
      $$invalidate(26, locale = $$props2.locale);
    if ("uploadImages" in $$props2)
      $$invalidate(27, uploadImages = $$props2.uploadImages);
    if ("overridePreview" in $$props2)
      $$invalidate(3, overridePreview = $$props2.overridePreview);
    if ("maxLength" in $$props2)
      $$invalidate(4, maxLength = $$props2.maxLength);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & 67108864) {
      $$invalidate(11, mergedLocale = __spreadValues(__spreadValues({}, en), locale));
    }
    if ($$self.$$.dirty[0] & 134219778) {
      $$invalidate(20, actions = getBuiltinActions(mergedLocale, plugins, uploadImages));
    }
    if ($$self.$$.dirty[0] & 272629760) {
      $$invalidate(10, split = mode === "split" || mode === "auto" && containerWidth >= 800);
    }
    if ($$self.$$.dirty[0] & 1024) {
      ((_) => {
        if (split)
          $$invalidate(7, activeTab = false);
      })();
    }
    if ($$self.$$.dirty[0] & 1408) {
      $$invalidate(21, styles = (() => {
        let edit;
        let preview2;
        if (split && activeTab === false) {
          if (sidebar) {
            edit = `width:calc(50% - ${sidebar ? 140 : 0}px)`;
            preview2 = `width:calc(50% - ${sidebar ? 140 : 0}px)`;
          } else {
            edit = "width:50%";
            preview2 = "width:50%";
          }
        } else if (activeTab === "preview") {
          edit = "display:none";
          preview2 = `width:calc(100% - ${sidebar ? 280 : 0}px)`;
        } else {
          edit = `width:calc(100% - ${sidebar ? 280 : 0}px)`;
          preview2 = "display:none";
        }
        return { edit, preview: preview2 };
      })());
    }
    if ($$self.$$.dirty[0] & 536871008) {
      $$invalidate(9, context = (() => {
        const context2 = __spreadValues({
          codemirror,
          editor,
          root
        }, createEditorUtils(codemirror, editor));
        return context2;
      })());
    }
    if ($$self.$$.dirty[0] & 1) {
      setDebouncedValue(value);
    }
    if ($$self.$$.dirty[0] & 65) {
      if (editor && value !== editor.getValue()) {
        editor.setValue(value);
      }
    }
    if ($$self.$$.dirty[0] & 66) {
      if (editor && plugins) {
        off();
        tick().then(() => {
          on();
        });
      }
    }
  };
  return [
    value,
    plugins,
    sanitize,
    overridePreview,
    maxLength,
    root,
    editor,
    activeTab,
    sidebar,
    context,
    split,
    mergedLocale,
    editorEl,
    previewEl,
    fullscreen2,
    debouncedValue,
    syncEnabled,
    hast,
    vfile,
    currentBlockIndex,
    actions,
    styles,
    mode,
    previewDebounce,
    placeholder,
    editorConfig,
    locale,
    uploadImages,
    containerWidth,
    codemirror,
    key_handler,
    tab_handler,
    click_handler,
    div0_binding,
    hast_handler,
    div1_binding,
    click_handler_1,
    click_handler_2,
    sync_handler,
    top_handler,
    div5_binding
  ];
}
class Editor extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, not_equal, {
      value: 0,
      plugins: 1,
      sanitize: 2,
      mode: 22,
      previewDebounce: 23,
      placeholder: 24,
      editorConfig: 25,
      locale: 26,
      uploadImages: 27,
      overridePreview: 3,
      maxLength: 4
    }, null, [-1, -1]);
  }
}
var index = /* @__PURE__ */ (() => '.CodeMirror{font-family:monospace;height:300px;color:#000;direction:ltr}.CodeMirror-lines{padding:4px 0}.CodeMirror pre.CodeMirror-line,.CodeMirror pre.CodeMirror-line-like{padding:0 4px}.CodeMirror-scrollbar-filler,.CodeMirror-gutter-filler{background-color:#fff}.CodeMirror-gutters{border-right:1px solid #ddd;background-color:#f7f7f7;white-space:nowrap}.CodeMirror-linenumber{padding:0 3px 0 5px;min-width:20px;text-align:right;color:#999;white-space:nowrap}.CodeMirror-guttermarker{color:#000}.CodeMirror-guttermarker-subtle{color:#999}.CodeMirror-cursor{border-left:1px solid black;border-right:none;width:0}.CodeMirror div.CodeMirror-secondarycursor{border-left:1px solid silver}.cm-fat-cursor .CodeMirror-cursor{width:auto;border:0!important;background:#7e7}.cm-fat-cursor div.CodeMirror-cursors{z-index:1}.cm-fat-cursor .CodeMirror-line::selection,.cm-fat-cursor .CodeMirror-line>span::selection,.cm-fat-cursor .CodeMirror-line>span>span::selection{background:transparent}.cm-fat-cursor .CodeMirror-line::-moz-selection,.cm-fat-cursor .CodeMirror-line>span::-moz-selection,.cm-fat-cursor .CodeMirror-line>span>span::-moz-selection{background:transparent}.cm-fat-cursor{caret-color:transparent}@-moz-keyframes blink{50%{background-color:transparent}}@-webkit-keyframes blink{50%{background-color:transparent}}@keyframes blink{50%{background-color:transparent}}.cm-tab{display:inline-block;text-decoration:inherit}.CodeMirror-rulers{position:absolute;left:0;right:0;top:-50px;bottom:0;overflow:hidden}.CodeMirror-ruler{border-left:1px solid #ccc;top:0;bottom:0;position:absolute}.cm-s-default .cm-header{color:#00f}.cm-s-default .cm-quote{color:#090}.cm-negative{color:#d44}.cm-positive{color:#292}.cm-header,.cm-strong{font-weight:700}.cm-em{font-style:italic}.cm-link{text-decoration:underline}.cm-strikethrough{text-decoration:line-through}.cm-s-default .cm-keyword{color:#708}.cm-s-default .cm-atom{color:#219}.cm-s-default .cm-number{color:#164}.cm-s-default .cm-def{color:#00f}.cm-s-default .cm-variable-2{color:#05a}.cm-s-default .cm-variable-3,.cm-s-default .cm-type{color:#085}.cm-s-default .cm-comment{color:#a50}.cm-s-default .cm-string{color:#a11}.cm-s-default .cm-string-2{color:#f50}.cm-s-default .cm-meta,.cm-s-default .cm-qualifier{color:#555}.cm-s-default .cm-builtin{color:#30a}.cm-s-default .cm-bracket{color:#997}.cm-s-default .cm-tag{color:#170}.cm-s-default .cm-attribute{color:#00c}.cm-s-default .cm-hr{color:#999}.cm-s-default .cm-link{color:#00c}.cm-s-default .cm-error,.cm-invalidchar{color:red}.CodeMirror-composing{border-bottom:2px solid}div.CodeMirror span.CodeMirror-matchingbracket{color:#0b0}div.CodeMirror span.CodeMirror-nonmatchingbracket{color:#a22}.CodeMirror-matchingtag{background:rgba(255,150,0,.3)}.CodeMirror-activeline-background{background:#e8f2ff}.CodeMirror{position:relative;overflow:hidden;background:white}.CodeMirror-scroll{overflow:scroll!important;margin-bottom:-50px;margin-right:-50px;padding-bottom:50px;height:100%;outline:none;position:relative;z-index:0}.CodeMirror-sizer{position:relative;border-right:50px solid transparent}.CodeMirror-vscrollbar,.CodeMirror-hscrollbar,.CodeMirror-scrollbar-filler,.CodeMirror-gutter-filler{position:absolute;z-index:6;display:none;outline:none}.CodeMirror-vscrollbar{right:0;top:0;overflow-x:hidden;overflow-y:scroll}.CodeMirror-hscrollbar{bottom:0;left:0;overflow-y:hidden;overflow-x:scroll}.CodeMirror-scrollbar-filler{right:0;bottom:0}.CodeMirror-gutter-filler{left:0;bottom:0}.CodeMirror-gutters{position:absolute;left:0;top:0;min-height:100%;z-index:3}.CodeMirror-gutter{white-space:normal;height:100%;display:inline-block;vertical-align:top;margin-bottom:-50px}.CodeMirror-gutter-wrapper{position:absolute;z-index:4;background:none!important;border:none!important}.CodeMirror-gutter-background{position:absolute;top:0;bottom:0;z-index:4}.CodeMirror-gutter-elt{position:absolute;cursor:default;z-index:4}.CodeMirror-gutter-wrapper ::selection{background-color:transparent}.CodeMirror-gutter-wrapper ::-moz-selection{background-color:transparent}.CodeMirror-lines{cursor:text;min-height:1px}.CodeMirror pre.CodeMirror-line,.CodeMirror pre.CodeMirror-line-like{-moz-border-radius:0;-webkit-border-radius:0;border-radius:0;border-width:0;background:transparent;font-family:inherit;font-size:inherit;margin:0;white-space:pre;word-wrap:normal;line-height:inherit;color:inherit;z-index:2;position:relative;overflow:visible;-webkit-tap-highlight-color:transparent;-webkit-font-variant-ligatures:contextual;font-variant-ligatures:contextual}.CodeMirror-wrap pre.CodeMirror-line,.CodeMirror-wrap pre.CodeMirror-line-like{word-wrap:break-word;white-space:pre-wrap;word-break:normal}.CodeMirror-linebackground{position:absolute;left:0;right:0;top:0;bottom:0;z-index:0}.CodeMirror-linewidget{position:relative;z-index:2;padding:.1px}.CodeMirror-rtl pre{direction:rtl}.CodeMirror-code{outline:none}.CodeMirror-scroll,.CodeMirror-sizer,.CodeMirror-gutter,.CodeMirror-gutters,.CodeMirror-linenumber{-moz-box-sizing:content-box;box-sizing:content-box}.CodeMirror-measure{position:absolute;width:100%;height:0;overflow:hidden;visibility:hidden}.CodeMirror-cursor{position:absolute;pointer-events:none}.CodeMirror-measure pre{position:static}div.CodeMirror-cursors{visibility:hidden;position:relative;z-index:3}div.CodeMirror-dragcursors,.CodeMirror-focused div.CodeMirror-cursors{visibility:visible}.CodeMirror-selected{background:#d9d9d9}.CodeMirror-focused .CodeMirror-selected{background:#d7d4f0}.CodeMirror-crosshair{cursor:crosshair}.CodeMirror-line::selection,.CodeMirror-line>span::selection,.CodeMirror-line>span>span::selection{background:#d7d4f0}.CodeMirror-line::-moz-selection,.CodeMirror-line>span::-moz-selection,.CodeMirror-line>span>span::-moz-selection{background:#d7d4f0}.cm-searching{background-color:#ffa;background-color:#ff06}.cm-force-border{padding-right:.1px}@media print{.CodeMirror div.CodeMirror-cursors{visibility:hidden}}.cm-tab-wrap-hack:after{content:""}span.CodeMirror-selectedtext{background:none}.tippy-box[data-animation=fade][data-state=hidden]{opacity:0}[data-tippy-root]{max-width:calc(100vw - 10px)}.tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;white-space:normal;outline:0;transition-property:transform,visibility,opacity}.tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;transform-origin:center top}.tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;transform-origin:center bottom}.tippy-box[data-placement^=left]>.tippy-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;transform-origin:center left}.tippy-box[data-placement^=right]>.tippy-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;transform-origin:center right}.tippy-box[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{width:16px;height:16px;color:#333}.tippy-arrow:before{content:"";position:absolute;border-color:transparent;border-style:solid}.tippy-content{position:relative;padding:5px 9px;z-index:1}.tippy-box[data-theme~=light-border]{background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,8,16,.15);color:#333;box-shadow:0 4px 14px -2px #00081014}.tippy-box[data-theme~=light-border]>.tippy-backdrop{background-color:#fff}.tippy-box[data-theme~=light-border]>.tippy-arrow:after,.tippy-box[data-theme~=light-border]>.tippy-svg-arrow:after{content:"";position:absolute;z-index:-1}.tippy-box[data-theme~=light-border]>.tippy-arrow:after{border-color:transparent;border-style:solid}.tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-arrow:before{border-top-color:#fff}.tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-arrow:after{border-top-color:#00081033;border-width:7px 7px 0;top:17px;left:1px}.tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-svg-arrow>svg{top:16px}.tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-svg-arrow:after{top:17px}.tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-arrow:before{border-bottom-color:#fff;bottom:16px}.tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-arrow:after{border-bottom-color:#00081033;border-width:0 7px 7px;bottom:17px;left:1px}.tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-svg-arrow>svg{bottom:16px}.tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-svg-arrow:after{bottom:17px}.tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-arrow:before{border-left-color:#fff}.tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-arrow:after{border-left-color:#00081033;border-width:7px 0 7px 7px;left:17px;top:1px}.tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-svg-arrow>svg{left:11px}.tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-svg-arrow:after{left:12px}.tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-arrow:before{border-right-color:#fff;right:16px}.tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-arrow:after{border-width:7px 7px 7px 0;right:17px;top:1px;border-right-color:#00081033}.tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-svg-arrow>svg{right:11px}.tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-svg-arrow:after{right:12px}.tippy-box[data-theme~=light-border]>.tippy-svg-arrow{fill:#fff}.tippy-box[data-theme~=light-border]>.tippy-svg-arrow:after{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCA2czEuNzk2LS4wMTMgNC42Ny0zLjYxNUM1Ljg1MS45IDYuOTMuMDA2IDggMGMxLjA3LS4wMDYgMi4xNDguODg3IDMuMzQzIDIuMzg1QzE0LjIzMyA2LjAwNSAxNiA2IDE2IDZIMHoiIGZpbGw9InJnYmEoMCwgOCwgMTYsIDAuMikiLz48L3N2Zz4=);background-size:16px 6px;width:16px;height:6px}.bytemd{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;color:#24292e;border:1px solid #e1e4e8;background-color:#fff;height:300px}.bytemd *{box-sizing:border-box}.bytemd-hidden{display:none!important}.bytemd .CodeMirror-scroll,.bytemd .CodeMirror-sizer,.bytemd .CodeMirror-gutter,.bytemd .CodeMirror-gutters,.bytemd .CodeMirror-linenumber{box-sizing:content-box}.bytemd .CodeMirror,.bytemd code,.bytemd kbd{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace}.bytemd-toolbar{padding:4px 12px;border-bottom:1px solid #e1e4e8;background-color:#fafbfc;user-select:none;overflow:hidden}.bytemd-toolbar-left{float:left}.bytemd-toolbar-right{float:right}.bytemd-toolbar-tab{display:inline-block;cursor:pointer;padding-left:8px;padding-right:8px;line-height:24px;font-size:14px}.bytemd-toolbar-tab-active{color:#0366d6}.bytemd-toolbar-icon{display:inline-block;vertical-align:top;cursor:pointer;border-radius:4px;margin-left:6px;margin-right:6px}.bytemd-toolbar-icon svg,.bytemd-toolbar-icon img{display:block;padding:4px;width:24px;height:24px}.bytemd-toolbar-icon:hover{background-color:#e1e4e8}.bytemd-toolbar-icon-active{color:#0366d6}.bytemd-toolbar .tippy-content{padding-left:0;padding-right:0}.bytemd-dropdown{max-height:300px;overflow:auto;font-size:14px}.bytemd-dropdown-title{margin:0 12px;font-weight:500;border-bottom:1px solid #e1e4e8;line-height:32px;color:#444d56}.bytemd-dropdown-item{padding:4px 12px;height:32px;cursor:pointer}.bytemd-dropdown-item:hover{background-color:#f6f8fa}.bytemd-dropdown-item-icon{display:inline-block}.bytemd-dropdown-item-icon svg{display:block;padding:4px;width:24px;height:24px}.bytemd-dropdown-item-title{display:inline-block;line-height:24px;vertical-align:top}.bytemd-body{height:calc(100% - 58px);overflow:auto}.bytemd-editor{display:inline-block;vertical-align:top;height:100%;overflow:hidden}.bytemd-editor .CodeMirror{height:100%;font-size:14px;line-height:1.5}.bytemd-editor .CodeMirror pre.CodeMirror-placeholder{color:#959da5}.bytemd-editor .CodeMirror .CodeMirror-lines{max-width:800px;margin:0 auto;padding:16px 0}.bytemd-editor .CodeMirror pre.CodeMirror-line,.bytemd-editor .CodeMirror pre.CodeMirror-line-like{padding:0 4%}.bytemd-preview{display:inline-block;vertical-align:top;height:100%;overflow:auto}.bytemd-preview .markdown-body{max-width:800px;margin:0 auto;padding:16px 4%}.bytemd-sidebar{display:inline-block;vertical-align:top;height:100%;overflow:auto;font-size:16px;border-left:1px solid #e1e4e8;width:280px;position:relative;padding:0 16px}.bytemd-sidebar-close{position:absolute;padding:16px;top:0;right:0;cursor:pointer}.bytemd-sidebar-close:hover{color:#0366d6}.bytemd-sidebar h2{font-size:16px;font-weight:600;margin:32px 0 16px}.bytemd-sidebar ul{padding-left:0;color:#959da5}.bytemd-help{font-size:13px}.bytemd-help ul{line-height:20px}.bytemd-help ul svg{width:16px;height:16px;display:block}.bytemd-help ul div{display:inline-block;vertical-align:top}.bytemd-help li{list-style:none;margin-bottom:12px}.bytemd-help-icon{padding:2px 0}.bytemd-help-title{padding-left:8px}.bytemd-help-content{float:right;font-size:12px}.bytemd-toc li{list-style:none;margin-bottom:4px;font-size:14px;line-height:2;cursor:pointer;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.bytemd-toc-active{color:#0366d6;background-color:#f6f8fa}.bytemd-toc-first{font-weight:500}.bytemd-status{font-size:12px;line-height:24px;border-top:1px solid #e1e4e8;user-select:none}.bytemd-status-left{float:left}.bytemd-status-left span{padding-left:16px}.bytemd-status-left strong{font-weight:600}.bytemd-status-right{float:right}.bytemd-status-right label,.bytemd-status-right span{margin-right:16px;cursor:pointer}.bytemd-status-right span:hover{color:#0366d6}.bytemd-status-right input{vertical-align:middle;margin-right:3px}.bytemd-status-error{color:#d73a49}.bytemd-fullscreen.bytemd{position:fixed;left:0;right:0;top:0;bottom:0;border:none;height:100vh!important}.bytemd-split .bytemd-preview{border-left:1px solid #e1e4e8}.tippy-box{font-size:12px}\n')();
function create_fragment(ctx) {
  let textinput;
  let updating_value;
  let t0;
  let br;
  let t1;
  let editor;
  let updating_value_1;
  let t2;
  let current;
  function textinput_value_binding(value) {
    ctx[2](value);
  }
  let textinput_props = {
    required: true,
    labelText: "Add Title",
    placeholder: "Add a title to your post",
    size: "xl"
  };
  if (ctx[0].title !== void 0) {
    textinput_props.value = ctx[0].title;
  }
  textinput = new TextInput({ props: textinput_props });
  binding_callbacks.push(() => bind(textinput, "value", textinput_value_binding));
  function editor_value_binding(value) {
    ctx[3](value);
  }
  let editor_props = {};
  if (ctx[0].post !== void 0) {
    editor_props.value = ctx[0].post;
  }
  editor = new Editor({ props: editor_props });
  binding_callbacks.push(() => bind(editor, "value", editor_value_binding));
  editor.$on("change", ctx[1]);
  return {
    c() {
      create_component(textinput.$$.fragment);
      t0 = space();
      br = element("br");
      t1 = space();
      create_component(editor.$$.fragment);
      t2 = text("\n\n\nHint: Don't know how to use Markdown Syntax? Click on the box with the question mark icon on the top right to see the Markdown Cheatsheet.");
    },
    l(nodes) {
      claim_component(textinput.$$.fragment, nodes);
      t0 = claim_space(nodes);
      br = claim_element(nodes, "BR", {});
      t1 = claim_space(nodes);
      claim_component(editor.$$.fragment, nodes);
      t2 = claim_text(nodes, "\n\n\nHint: Don't know how to use Markdown Syntax? Click on the box with the question mark icon on the top right to see the Markdown Cheatsheet.");
    },
    m(target, anchor) {
      mount_component(textinput, target, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, br, anchor);
      insert_hydration(target, t1, anchor);
      mount_component(editor, target, anchor);
      insert_hydration(target, t2, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const textinput_changes = {};
      if (!updating_value && dirty & 1) {
        updating_value = true;
        textinput_changes.value = ctx2[0].title;
        add_flush_callback(() => updating_value = false);
      }
      textinput.$set(textinput_changes);
      const editor_changes = {};
      if (!updating_value_1 && dirty & 1) {
        updating_value_1 = true;
        editor_changes.value = ctx2[0].post;
        add_flush_callback(() => updating_value_1 = false);
      }
      editor.$set(editor_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(textinput.$$.fragment, local);
      transition_in(editor.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(textinput.$$.fragment, local);
      transition_out(editor.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(textinput, detaching);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(br);
      if (detaching)
        detach(t1);
      destroy_component(editor, detaching);
      if (detaching)
        detach(t2);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { newPost } = $$props;
  function handleChange(e) {
    $$invalidate(0, newPost.post = e.detail.value, newPost);
  }
  function textinput_value_binding(value) {
    if ($$self.$$.not_equal(newPost.title, value)) {
      newPost.title = value;
      $$invalidate(0, newPost);
    }
  }
  function editor_value_binding(value) {
    if ($$self.$$.not_equal(newPost.post, value)) {
      newPost.post = value;
      $$invalidate(0, newPost);
    }
  }
  $$self.$$set = ($$props2) => {
    if ("newPost" in $$props2)
      $$invalidate(0, newPost = $$props2.newPost);
  };
  return [newPost, handleChange, textinput_value_binding, editor_value_binding];
}
class Createpost extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { newPost: 0 });
  }
}
export { Createpost as default };
