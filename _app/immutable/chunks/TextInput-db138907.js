import { S as SvelteComponent, i as init, s as safe_not_equal, U as svg_element, t as text, V as claim_svg_element, a as children, h as claim_text, d as detach, g as insert_hydration, Q as append_hydration, j as set_data, C as assign, b as attr, W as set_svg_attributes, z as get_spread_update, E as noop, F as compute_rest_props, H as exclude_internal_props, e as element, k as space, c as claim_element, m as claim_space, L as toggle_class, q as transition_in, M as update_slot_base, N as get_all_dirty_from_scope, O as get_slot_changes, o as transition_out, n as group_outros, p as check_outros, w as create_component, x as claim_component, y as mount_component, B as destroy_component, P as set_attributes, aa as set_input_value, R as listen, T as run_all, G as compute_slots, a2 as getContext, a1 as createEventDispatcher, K as create_slot, I as bubble, J as binding_callbacks } from "./index-f6cf4e8a.js";
function create_if_block$3(ctx) {
  let title_1;
  let t;
  return {
    c() {
      title_1 = svg_element("title");
      t = text(ctx[1]);
    },
    l(nodes) {
      title_1 = claim_svg_element(nodes, "title", {});
      var title_1_nodes = children(title_1);
      t = claim_text(title_1_nodes, ctx[1]);
      title_1_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, title_1, anchor);
      append_hydration(title_1, t);
    },
    p(ctx2, dirty) {
      if (dirty & 2)
        set_data(t, ctx2[1]);
    },
    d(detaching) {
      if (detaching)
        detach(title_1);
    }
  };
}
function create_fragment$3(ctx) {
  let svg;
  let path0;
  let path1;
  let if_block = ctx[1] && create_if_block$3(ctx);
  let svg_levels = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 32 32" },
    { fill: "currentColor" },
    { preserveAspectRatio: "xMidYMid meet" },
    { width: ctx[0] },
    { height: ctx[0] },
    ctx[2],
    ctx[3]
  ];
  let svg_data = {};
  for (let i = 0; i < svg_levels.length; i += 1) {
    svg_data = assign(svg_data, svg_levels[i]);
  }
  return {
    c() {
      svg = svg_element("svg");
      if (if_block)
        if_block.c();
      path0 = svg_element("path");
      path1 = svg_element("path");
      this.h();
    },
    l(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        xmlns: true,
        viewBox: true,
        fill: true,
        preserveAspectRatio: true,
        width: true,
        height: true
      });
      var svg_nodes = children(svg);
      if (if_block)
        if_block.l(svg_nodes);
      path0 = claim_svg_element(svg_nodes, "path", { d: true });
      children(path0).forEach(detach);
      path1 = claim_svg_element(svg_nodes, "path", {
        fill: true,
        d: true,
        "data-icon-path": true,
        opacity: true
      });
      children(path1).forEach(detach);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path0, "d", "M16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14C30,8.3,23.7,2,16,2z M14.9,8h2.2v11h-2.2V8z M16,25	c-0.8,0-1.5-0.7-1.5-1.5S15.2,22,16,22c0.8,0,1.5,0.7,1.5,1.5S16.8,25,16,25z");
      attr(path1, "fill", "none");
      attr(path1, "d", "M17.5,23.5c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5S15.2,22,16,22	C16.8,22,17.5,22.7,17.5,23.5z M17.1,8h-2.2v11h2.2V8z");
      attr(path1, "data-icon-path", "inner-path");
      attr(path1, "opacity", "0");
      set_svg_attributes(svg, svg_data);
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      if (if_block)
        if_block.m(svg, null);
      append_hydration(svg, path0);
      append_hydration(svg, path1);
    },
    p(ctx2, [dirty]) {
      if (ctx2[1]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$3(ctx2);
          if_block.c();
          if_block.m(svg, path0);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { viewBox: "0 0 32 32" },
        { fill: "currentColor" },
        { preserveAspectRatio: "xMidYMid meet" },
        dirty & 1 && { width: ctx2[0] },
        dirty & 1 && { height: ctx2[0] },
        dirty & 4 && ctx2[2],
        dirty & 8 && ctx2[3]
      ]));
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
      if (if_block)
        if_block.d();
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  let labelled;
  let attributes;
  const omit_props_names = ["size", "title"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  $$self.$$set = ($$new_props) => {
    $$invalidate(5, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("size" in $$new_props)
      $$invalidate(0, size = $$new_props.size);
    if ("title" in $$new_props)
      $$invalidate(1, title = $$new_props.title);
  };
  $$self.$$.update = () => {
    $$invalidate(4, labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title);
    $$invalidate(2, attributes = {
      "aria-hidden": labelled ? void 0 : true,
      role: labelled ? "img" : void 0,
      focusable: Number($$props["tabindex"]) === 0 ? true : void 0
    });
  };
  $$props = exclude_internal_props($$props);
  return [size, title, attributes, $$restProps, labelled];
}
class WarningFilled extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, { size: 0, title: 1 });
  }
}
function create_if_block$2(ctx) {
  let title_1;
  let t;
  return {
    c() {
      title_1 = svg_element("title");
      t = text(ctx[1]);
    },
    l(nodes) {
      title_1 = claim_svg_element(nodes, "title", {});
      var title_1_nodes = children(title_1);
      t = claim_text(title_1_nodes, ctx[1]);
      title_1_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, title_1, anchor);
      append_hydration(title_1, t);
    },
    p(ctx2, dirty) {
      if (dirty & 2)
        set_data(t, ctx2[1]);
    },
    d(detaching) {
      if (detaching)
        detach(title_1);
    }
  };
}
function create_fragment$2(ctx) {
  let svg;
  let path0;
  let path1;
  let path2;
  let if_block = ctx[1] && create_if_block$2(ctx);
  let svg_levels = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 32 32" },
    { fill: "currentColor" },
    { preserveAspectRatio: "xMidYMid meet" },
    { width: ctx[0] },
    { height: ctx[0] },
    ctx[2],
    ctx[3]
  ];
  let svg_data = {};
  for (let i = 0; i < svg_levels.length; i += 1) {
    svg_data = assign(svg_data, svg_levels[i]);
  }
  return {
    c() {
      svg = svg_element("svg");
      if (if_block)
        if_block.c();
      path0 = svg_element("path");
      path1 = svg_element("path");
      path2 = svg_element("path");
      this.h();
    },
    l(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        xmlns: true,
        viewBox: true,
        fill: true,
        preserveAspectRatio: true,
        width: true,
        height: true
      });
      var svg_nodes = children(svg);
      if (if_block)
        if_block.l(svg_nodes);
      path0 = claim_svg_element(svg_nodes, "path", {
        fill: true,
        d: true,
        "data-icon-path": true
      });
      children(path0).forEach(detach);
      path1 = claim_svg_element(svg_nodes, "path", { d: true });
      children(path1).forEach(detach);
      path2 = claim_svg_element(svg_nodes, "path", { d: true });
      children(path2).forEach(detach);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path0, "fill", "none");
      attr(path0, "d", "M16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Zm-1.125-5h2.25V12h-2.25Z");
      attr(path0, "data-icon-path", "inner-path");
      attr(path1, "d", "M16.002,6.1714h-.004L4.6487,27.9966,4.6506,28H27.3494l.0019-.0034ZM14.875,12h2.25v9h-2.25ZM16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Z");
      attr(path2, "d", "M29,30H3a1,1,0,0,1-.8872-1.4614l13-25a1,1,0,0,1,1.7744,0l13,25A1,1,0,0,1,29,30ZM4.6507,28H27.3493l.002-.0033L16.002,6.1714h-.004L4.6487,27.9967Z");
      set_svg_attributes(svg, svg_data);
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      if (if_block)
        if_block.m(svg, null);
      append_hydration(svg, path0);
      append_hydration(svg, path1);
      append_hydration(svg, path2);
    },
    p(ctx2, [dirty]) {
      if (ctx2[1]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$2(ctx2);
          if_block.c();
          if_block.m(svg, path0);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { viewBox: "0 0 32 32" },
        { fill: "currentColor" },
        { preserveAspectRatio: "xMidYMid meet" },
        dirty & 1 && { width: ctx2[0] },
        dirty & 1 && { height: ctx2[0] },
        dirty & 4 && ctx2[2],
        dirty & 8 && ctx2[3]
      ]));
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
      if (if_block)
        if_block.d();
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let labelled;
  let attributes;
  const omit_props_names = ["size", "title"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  $$self.$$set = ($$new_props) => {
    $$invalidate(5, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("size" in $$new_props)
      $$invalidate(0, size = $$new_props.size);
    if ("title" in $$new_props)
      $$invalidate(1, title = $$new_props.title);
  };
  $$self.$$.update = () => {
    $$invalidate(4, labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title);
    $$invalidate(2, attributes = {
      "aria-hidden": labelled ? void 0 : true,
      role: labelled ? "img" : void 0,
      focusable: Number($$props["tabindex"]) === 0 ? true : void 0
    });
  };
  $$props = exclude_internal_props($$props);
  return [size, title, attributes, $$restProps, labelled];
}
class WarningAltFilled extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { size: 0, title: 1 });
  }
}
function create_if_block$1(ctx) {
  let title_1;
  let t;
  return {
    c() {
      title_1 = svg_element("title");
      t = text(ctx[1]);
    },
    l(nodes) {
      title_1 = claim_svg_element(nodes, "title", {});
      var title_1_nodes = children(title_1);
      t = claim_text(title_1_nodes, ctx[1]);
      title_1_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, title_1, anchor);
      append_hydration(title_1, t);
    },
    p(ctx2, dirty) {
      if (dirty & 2)
        set_data(t, ctx2[1]);
    },
    d(detaching) {
      if (detaching)
        detach(title_1);
    }
  };
}
function create_fragment$1(ctx) {
  let svg;
  let path;
  let if_block = ctx[1] && create_if_block$1(ctx);
  let svg_levels = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 32 32" },
    { fill: "currentColor" },
    { preserveAspectRatio: "xMidYMid meet" },
    { width: ctx[0] },
    { height: ctx[0] },
    ctx[2],
    ctx[3]
  ];
  let svg_data = {};
  for (let i = 0; i < svg_levels.length; i += 1) {
    svg_data = assign(svg_data, svg_levels[i]);
  }
  return {
    c() {
      svg = svg_element("svg");
      if (if_block)
        if_block.c();
      path = svg_element("path");
      this.h();
    },
    l(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        xmlns: true,
        viewBox: true,
        fill: true,
        preserveAspectRatio: true,
        width: true,
        height: true
      });
      var svg_nodes = children(svg);
      if (if_block)
        if_block.l(svg_nodes);
      path = claim_svg_element(svg_nodes, "path", { d: true });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path, "d", "M30 28.6L3.4 2 2 3.4l10.1 10.1L4 21.6V28h6.4l8.1-8.1L28.6 30 30 28.6zM9.6 26H6v-3.6l7.5-7.5 3.6 3.6L9.6 26zM29.4 6.2L29.4 6.2l-3.6-3.6c-.8-.8-2-.8-2.8 0l0 0 0 0-8 8 1.4 1.4L20 8.4l3.6 3.6L20 15.6l1.4 1.4 8-8C30.2 8.2 30.2 7 29.4 6.2L29.4 6.2zM25 10.6L21.4 7l3-3L28 7.6 25 10.6z");
      set_svg_attributes(svg, svg_data);
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      if (if_block)
        if_block.m(svg, null);
      append_hydration(svg, path);
    },
    p(ctx2, [dirty]) {
      if (ctx2[1]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$1(ctx2);
          if_block.c();
          if_block.m(svg, path);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { viewBox: "0 0 32 32" },
        { fill: "currentColor" },
        { preserveAspectRatio: "xMidYMid meet" },
        dirty & 1 && { width: ctx2[0] },
        dirty & 1 && { height: ctx2[0] },
        dirty & 4 && ctx2[2],
        dirty & 8 && ctx2[3]
      ]));
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
      if (if_block)
        if_block.d();
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let labelled;
  let attributes;
  const omit_props_names = ["size", "title"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  $$self.$$set = ($$new_props) => {
    $$invalidate(5, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("size" in $$new_props)
      $$invalidate(0, size = $$new_props.size);
    if ("title" in $$new_props)
      $$invalidate(1, title = $$new_props.title);
  };
  $$self.$$.update = () => {
    $$invalidate(4, labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title);
    $$invalidate(2, attributes = {
      "aria-hidden": labelled ? void 0 : true,
      role: labelled ? "img" : void 0,
      focusable: Number($$props["tabindex"]) === 0 ? true : void 0
    });
  };
  $$props = exclude_internal_props($$props);
  return [size, title, attributes, $$restProps, labelled];
}
class EditOff extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { size: 0, title: 1 });
  }
}
const get_labelText_slot_changes_1 = (dirty) => ({});
const get_labelText_slot_context_1 = (ctx) => ({});
const get_labelText_slot_changes = (dirty) => ({});
const get_labelText_slot_context = (ctx) => ({});
function create_if_block_10(ctx) {
  let div;
  let t;
  let current;
  let if_block0 = ctx[9] && create_if_block_12(ctx);
  let if_block1 = !ctx[20] && ctx[6] && create_if_block_11(ctx);
  return {
    c() {
      div = element("div");
      if (if_block0)
        if_block0.c();
      t = space();
      if (if_block1)
        if_block1.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      if (if_block0)
        if_block0.l(div_nodes);
      t = claim_space(div_nodes);
      if (if_block1)
        if_block1.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      toggle_class(div, "bx--text-input__label-helper-wrapper", true);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (if_block0)
        if_block0.m(div, null);
      append_hydration(div, t);
      if (if_block1)
        if_block1.m(div, null);
      current = true;
    },
    p(ctx2, dirty) {
      if (ctx2[9]) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty[0] & 512) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_12(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(div, t);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (!ctx2[20] && ctx2[6]) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block_11(ctx2);
          if_block1.c();
          if_block1.m(div, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
    }
  };
}
function create_if_block_12(ctx) {
  let label;
  let current;
  const labelText_slot_template = ctx[26].labelText;
  const labelText_slot = create_slot(labelText_slot_template, ctx, ctx[25], get_labelText_slot_context);
  const labelText_slot_or_fallback = labelText_slot || fallback_block_1(ctx);
  return {
    c() {
      label = element("label");
      if (labelText_slot_or_fallback)
        labelText_slot_or_fallback.c();
      this.h();
    },
    l(nodes) {
      label = claim_element(nodes, "LABEL", { for: true });
      var label_nodes = children(label);
      if (labelText_slot_or_fallback)
        labelText_slot_or_fallback.l(label_nodes);
      label_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(label, "for", ctx[7]);
      toggle_class(label, "bx--label", true);
      toggle_class(label, "bx--visually-hidden", ctx[10]);
      toggle_class(label, "bx--label--disabled", ctx[5]);
      toggle_class(label, "bx--label--inline", ctx[16]);
      toggle_class(label, "bx--label--inline--sm", ctx[2] === "sm");
      toggle_class(label, "bx--label--inline--xl", ctx[2] === "xl");
    },
    m(target, anchor) {
      insert_hydration(target, label, anchor);
      if (labelText_slot_or_fallback) {
        labelText_slot_or_fallback.m(label, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (labelText_slot) {
        if (labelText_slot.p && (!current || dirty[0] & 33554432)) {
          update_slot_base(labelText_slot, labelText_slot_template, ctx2, ctx2[25], !current ? get_all_dirty_from_scope(ctx2[25]) : get_slot_changes(labelText_slot_template, ctx2[25], dirty, get_labelText_slot_changes), get_labelText_slot_context);
        }
      } else {
        if (labelText_slot_or_fallback && labelText_slot_or_fallback.p && (!current || dirty[0] & 512)) {
          labelText_slot_or_fallback.p(ctx2, !current ? [-1, -1] : dirty);
        }
      }
      if (!current || dirty[0] & 128) {
        attr(label, "for", ctx2[7]);
      }
      if (dirty[0] & 1024) {
        toggle_class(label, "bx--visually-hidden", ctx2[10]);
      }
      if (dirty[0] & 32) {
        toggle_class(label, "bx--label--disabled", ctx2[5]);
      }
      if (dirty[0] & 65536) {
        toggle_class(label, "bx--label--inline", ctx2[16]);
      }
      if (dirty[0] & 4) {
        toggle_class(label, "bx--label--inline--sm", ctx2[2] === "sm");
      }
      if (dirty[0] & 4) {
        toggle_class(label, "bx--label--inline--xl", ctx2[2] === "xl");
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(labelText_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(labelText_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(label);
      if (labelText_slot_or_fallback)
        labelText_slot_or_fallback.d(detaching);
    }
  };
}
function fallback_block_1(ctx) {
  let t;
  return {
    c() {
      t = text(ctx[9]);
    },
    l(nodes) {
      t = claim_text(nodes, ctx[9]);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 512)
        set_data(t, ctx2[9]);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block_11(ctx) {
  let div;
  let t;
  return {
    c() {
      div = element("div");
      t = text(ctx[6]);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      t = claim_text(div_nodes, ctx[6]);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      toggle_class(div, "bx--form__helper-text", true);
      toggle_class(div, "bx--form__helper-text--disabled", ctx[5]);
      toggle_class(div, "bx--form__helper-text--inline", ctx[16]);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 64)
        set_data(t, ctx2[6]);
      if (dirty[0] & 32) {
        toggle_class(div, "bx--form__helper-text--disabled", ctx2[5]);
      }
      if (dirty[0] & 65536) {
        toggle_class(div, "bx--form__helper-text--inline", ctx2[16]);
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_if_block_9(ctx) {
  let label;
  let label_class_value;
  let current;
  const labelText_slot_template = ctx[26].labelText;
  const labelText_slot = create_slot(labelText_slot_template, ctx, ctx[25], get_labelText_slot_context_1);
  const labelText_slot_or_fallback = labelText_slot || fallback_block(ctx);
  return {
    c() {
      label = element("label");
      if (labelText_slot_or_fallback)
        labelText_slot_or_fallback.c();
      this.h();
    },
    l(nodes) {
      label = claim_element(nodes, "LABEL", { for: true, class: true });
      var label_nodes = children(label);
      if (labelText_slot_or_fallback)
        labelText_slot_or_fallback.l(label_nodes);
      label_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(label, "for", ctx[7]);
      attr(label, "class", label_class_value = ctx[16] && !!ctx[2] && `bx--label--inline--${ctx[2]}`);
      toggle_class(label, "bx--label", true);
      toggle_class(label, "bx--visually-hidden", ctx[10]);
      toggle_class(label, "bx--label--disabled", ctx[5]);
      toggle_class(label, "bx--label--inline", ctx[16]);
    },
    m(target, anchor) {
      insert_hydration(target, label, anchor);
      if (labelText_slot_or_fallback) {
        labelText_slot_or_fallback.m(label, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (labelText_slot) {
        if (labelText_slot.p && (!current || dirty[0] & 33554432)) {
          update_slot_base(labelText_slot, labelText_slot_template, ctx2, ctx2[25], !current ? get_all_dirty_from_scope(ctx2[25]) : get_slot_changes(labelText_slot_template, ctx2[25], dirty, get_labelText_slot_changes_1), get_labelText_slot_context_1);
        }
      } else {
        if (labelText_slot_or_fallback && labelText_slot_or_fallback.p && (!current || dirty[0] & 512)) {
          labelText_slot_or_fallback.p(ctx2, !current ? [-1, -1] : dirty);
        }
      }
      if (!current || dirty[0] & 128) {
        attr(label, "for", ctx2[7]);
      }
      if (!current || dirty[0] & 65540 && label_class_value !== (label_class_value = ctx2[16] && !!ctx2[2] && `bx--label--inline--${ctx2[2]}`)) {
        attr(label, "class", label_class_value);
      }
      if (dirty[0] & 65540) {
        toggle_class(label, "bx--label", true);
      }
      if (dirty[0] & 66564) {
        toggle_class(label, "bx--visually-hidden", ctx2[10]);
      }
      if (dirty[0] & 65572) {
        toggle_class(label, "bx--label--disabled", ctx2[5]);
      }
      if (dirty[0] & 65540) {
        toggle_class(label, "bx--label--inline", ctx2[16]);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(labelText_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(labelText_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(label);
      if (labelText_slot_or_fallback)
        labelText_slot_or_fallback.d(detaching);
    }
  };
}
function fallback_block(ctx) {
  let t;
  return {
    c() {
      t = text(ctx[9]);
    },
    l(nodes) {
      t = claim_text(nodes, ctx[9]);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 512)
        set_data(t, ctx2[9]);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block_8(ctx) {
  let warningfilled;
  let current;
  warningfilled = new WarningFilled({
    props: { class: "bx--text-input__invalid-icon" }
  });
  return {
    c() {
      create_component(warningfilled.$$.fragment);
    },
    l(nodes) {
      claim_component(warningfilled.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(warningfilled, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(warningfilled.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(warningfilled.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(warningfilled, detaching);
    }
  };
}
function create_if_block_7(ctx) {
  let warningaltfilled;
  let current;
  warningaltfilled = new WarningAltFilled({
    props: {
      class: "bx--text-input__invalid-icon\n            bx--text-input__invalid-icon--warning"
    }
  });
  return {
    c() {
      create_component(warningaltfilled.$$.fragment);
    },
    l(nodes) {
      claim_component(warningaltfilled.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(warningaltfilled, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(warningaltfilled.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(warningaltfilled.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(warningaltfilled, detaching);
    }
  };
}
function create_if_block_6(ctx) {
  let editoff;
  let current;
  editoff = new EditOff({
    props: { class: "bx--text-input__readonly-icon" }
  });
  return {
    c() {
      create_component(editoff.$$.fragment);
    },
    l(nodes) {
      claim_component(editoff.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(editoff, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(editoff.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(editoff.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(editoff, detaching);
    }
  };
}
function create_if_block_5(ctx) {
  let hr;
  return {
    c() {
      hr = element("hr");
      this.h();
    },
    l(nodes) {
      hr = claim_element(nodes, "HR", {});
      this.h();
    },
    h() {
      toggle_class(hr, "bx--text-input__divider", true);
    },
    m(target, anchor) {
      insert_hydration(target, hr, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(hr);
    }
  };
}
function create_if_block_4(ctx) {
  let div;
  let t;
  return {
    c() {
      div = element("div");
      t = text(ctx[12]);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { id: true });
      var div_nodes = children(div);
      t = claim_text(div_nodes, ctx[12]);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "id", ctx[19]);
      toggle_class(div, "bx--form-requirement", true);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 4096)
        set_data(t, ctx2[12]);
      if (dirty[0] & 524288) {
        attr(div, "id", ctx2[19]);
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_if_block_3(ctx) {
  let div;
  let t;
  return {
    c() {
      div = element("div");
      t = text(ctx[14]);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { id: true });
      var div_nodes = children(div);
      t = claim_text(div_nodes, ctx[14]);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "id", ctx[18]);
      toggle_class(div, "bx--form-requirement", true);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 16384)
        set_data(t, ctx2[14]);
      if (dirty[0] & 262144) {
        attr(div, "id", ctx2[18]);
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_if_block_2(ctx) {
  let div;
  let t;
  return {
    c() {
      div = element("div");
      t = text(ctx[6]);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      t = claim_text(div_nodes, ctx[6]);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      toggle_class(div, "bx--form__helper-text", true);
      toggle_class(div, "bx--form__helper-text--disabled", ctx[5]);
      toggle_class(div, "bx--form__helper-text--inline", ctx[16]);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 64)
        set_data(t, ctx2[6]);
      if (dirty[0] & 32) {
        toggle_class(div, "bx--form__helper-text--disabled", ctx2[5]);
      }
      if (dirty[0] & 65536) {
        toggle_class(div, "bx--form__helper-text--inline", ctx2[16]);
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_if_block_1(ctx) {
  let div;
  let t;
  return {
    c() {
      div = element("div");
      t = text(ctx[12]);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { id: true });
      var div_nodes = children(div);
      t = claim_text(div_nodes, ctx[12]);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "id", ctx[19]);
      toggle_class(div, "bx--form-requirement", true);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 4096)
        set_data(t, ctx2[12]);
      if (dirty[0] & 524288) {
        attr(div, "id", ctx2[19]);
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_if_block(ctx) {
  let div;
  let t;
  return {
    c() {
      div = element("div");
      t = text(ctx[14]);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { id: true });
      var div_nodes = children(div);
      t = claim_text(div_nodes, ctx[14]);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "id", ctx[18]);
      toggle_class(div, "bx--form-requirement", true);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 16384)
        set_data(t, ctx2[14]);
      if (dirty[0] & 262144) {
        attr(div, "id", ctx2[18]);
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_fragment(ctx) {
  let div2;
  let t0;
  let t1;
  let div1;
  let div0;
  let t2;
  let t3;
  let t4;
  let input;
  let input_data_invalid_value;
  let input_aria_invalid_value;
  let input_data_warn_value;
  let input_aria_describedby_value;
  let t5;
  let t6;
  let t7;
  let div0_data_invalid_value;
  let div0_data_warn_value;
  let t8;
  let t9;
  let t10;
  let current;
  let mounted;
  let dispose;
  let if_block0 = ctx[16] && create_if_block_10(ctx);
  let if_block1 = !ctx[16] && (ctx[9] || ctx[24].labelText) && create_if_block_9(ctx);
  let if_block2 = ctx[11] && create_if_block_8();
  let if_block3 = !ctx[11] && ctx[13] && create_if_block_7();
  let if_block4 = ctx[17] && create_if_block_6();
  let input_levels = [
    {
      "data-invalid": input_data_invalid_value = ctx[11] || void 0
    },
    {
      "aria-invalid": input_aria_invalid_value = ctx[11] || void 0
    },
    {
      "data-warn": input_data_warn_value = ctx[13] || void 0
    },
    {
      "aria-describedby": input_aria_describedby_value = ctx[11] ? ctx[19] : ctx[13] ? ctx[18] : void 0
    },
    { disabled: ctx[5] },
    { id: ctx[7] },
    { name: ctx[8] },
    { placeholder: ctx[3] },
    { required: ctx[15] },
    { readOnly: ctx[17] },
    ctx[23]
  ];
  let input_data = {};
  for (let i = 0; i < input_levels.length; i += 1) {
    input_data = assign(input_data, input_levels[i]);
  }
  let if_block5 = ctx[20] && create_if_block_5();
  let if_block6 = ctx[20] && !ctx[16] && ctx[11] && create_if_block_4(ctx);
  let if_block7 = ctx[20] && !ctx[16] && ctx[13] && create_if_block_3(ctx);
  let if_block8 = !ctx[11] && !ctx[13] && !ctx[20] && !ctx[16] && ctx[6] && create_if_block_2(ctx);
  let if_block9 = !ctx[20] && ctx[11] && create_if_block_1(ctx);
  let if_block10 = !ctx[20] && !ctx[11] && ctx[13] && create_if_block(ctx);
  return {
    c() {
      div2 = element("div");
      if (if_block0)
        if_block0.c();
      t0 = space();
      if (if_block1)
        if_block1.c();
      t1 = space();
      div1 = element("div");
      div0 = element("div");
      if (if_block2)
        if_block2.c();
      t2 = space();
      if (if_block3)
        if_block3.c();
      t3 = space();
      if (if_block4)
        if_block4.c();
      t4 = space();
      input = element("input");
      t5 = space();
      if (if_block5)
        if_block5.c();
      t6 = space();
      if (if_block6)
        if_block6.c();
      t7 = space();
      if (if_block7)
        if_block7.c();
      t8 = space();
      if (if_block8)
        if_block8.c();
      t9 = space();
      if (if_block9)
        if_block9.c();
      t10 = space();
      if (if_block10)
        if_block10.c();
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", {});
      var div2_nodes = children(div2);
      if (if_block0)
        if_block0.l(div2_nodes);
      t0 = claim_space(div2_nodes);
      if (if_block1)
        if_block1.l(div2_nodes);
      t1 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {});
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { "data-invalid": true, "data-warn": true });
      var div0_nodes = children(div0);
      if (if_block2)
        if_block2.l(div0_nodes);
      t2 = claim_space(div0_nodes);
      if (if_block3)
        if_block3.l(div0_nodes);
      t3 = claim_space(div0_nodes);
      if (if_block4)
        if_block4.l(div0_nodes);
      t4 = claim_space(div0_nodes);
      input = claim_element(div0_nodes, "INPUT", {
        "data-invalid": true,
        "aria-invalid": true,
        "data-warn": true,
        "aria-describedby": true,
        id: true,
        name: true,
        placeholder: true
      });
      t5 = claim_space(div0_nodes);
      if (if_block5)
        if_block5.l(div0_nodes);
      t6 = claim_space(div0_nodes);
      if (if_block6)
        if_block6.l(div0_nodes);
      t7 = claim_space(div0_nodes);
      if (if_block7)
        if_block7.l(div0_nodes);
      div0_nodes.forEach(detach);
      t8 = claim_space(div1_nodes);
      if (if_block8)
        if_block8.l(div1_nodes);
      t9 = claim_space(div1_nodes);
      if (if_block9)
        if_block9.l(div1_nodes);
      t10 = claim_space(div1_nodes);
      if (if_block10)
        if_block10.l(div1_nodes);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(input, input_data);
      toggle_class(input, "bx--text-input", true);
      toggle_class(input, "bx--text-input--light", ctx[4]);
      toggle_class(input, "bx--text-input--invalid", ctx[11]);
      toggle_class(input, "bx--text-input--warn", ctx[13]);
      toggle_class(input, "bx--text-input--sm", ctx[2] === "sm");
      toggle_class(input, "bx--text-input--xl", ctx[2] === "xl");
      attr(div0, "data-invalid", div0_data_invalid_value = ctx[11] || void 0);
      attr(div0, "data-warn", div0_data_warn_value = ctx[13] || void 0);
      toggle_class(div0, "bx--text-input__field-wrapper", true);
      toggle_class(div0, "bx--text-input__field-wrapper--warning", !ctx[11] && ctx[13]);
      toggle_class(div1, "bx--text-input__field-outer-wrapper", true);
      toggle_class(div1, "bx--text-input__field-outer-wrapper--inline", ctx[16]);
      toggle_class(div2, "bx--form-item", true);
      toggle_class(div2, "bx--text-input-wrapper", true);
      toggle_class(div2, "bx--text-input-wrapper--inline", ctx[16]);
      toggle_class(div2, "bx--text-input-wrapper--light", ctx[4]);
      toggle_class(div2, "bx--text-input-wrapper--readonly", ctx[17]);
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      if (if_block0)
        if_block0.m(div2, null);
      append_hydration(div2, t0);
      if (if_block1)
        if_block1.m(div2, null);
      append_hydration(div2, t1);
      append_hydration(div2, div1);
      append_hydration(div1, div0);
      if (if_block2)
        if_block2.m(div0, null);
      append_hydration(div0, t2);
      if (if_block3)
        if_block3.m(div0, null);
      append_hydration(div0, t3);
      if (if_block4)
        if_block4.m(div0, null);
      append_hydration(div0, t4);
      append_hydration(div0, input);
      if (input.autofocus)
        input.focus();
      ctx[36](input);
      set_input_value(input, ctx[0]);
      append_hydration(div0, t5);
      if (if_block5)
        if_block5.m(div0, null);
      append_hydration(div0, t6);
      if (if_block6)
        if_block6.m(div0, null);
      append_hydration(div0, t7);
      if (if_block7)
        if_block7.m(div0, null);
      append_hydration(div1, t8);
      if (if_block8)
        if_block8.m(div1, null);
      append_hydration(div1, t9);
      if (if_block9)
        if_block9.m(div1, null);
      append_hydration(div1, t10);
      if (if_block10)
        if_block10.m(div1, null);
      current = true;
      if (!mounted) {
        dispose = [
          listen(input, "input", ctx[37]),
          listen(input, "change", ctx[22]),
          listen(input, "input", ctx[21]),
          listen(input, "keydown", ctx[31]),
          listen(input, "keyup", ctx[32]),
          listen(input, "focus", ctx[33]),
          listen(input, "blur", ctx[34]),
          listen(input, "paste", ctx[35]),
          listen(div2, "click", ctx[27]),
          listen(div2, "mouseover", ctx[28]),
          listen(div2, "mouseenter", ctx[29]),
          listen(div2, "mouseleave", ctx[30])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (ctx2[16]) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty[0] & 65536) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_10(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(div2, t0);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (!ctx2[16] && (ctx2[9] || ctx2[24].labelText)) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty[0] & 16843264) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_9(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div2, t1);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
      if (ctx2[11]) {
        if (if_block2) {
          if (dirty[0] & 2048) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block_8();
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(div0, t2);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, () => {
          if_block2 = null;
        });
        check_outros();
      }
      if (!ctx2[11] && ctx2[13]) {
        if (if_block3) {
          if (dirty[0] & 10240) {
            transition_in(if_block3, 1);
          }
        } else {
          if_block3 = create_if_block_7();
          if_block3.c();
          transition_in(if_block3, 1);
          if_block3.m(div0, t3);
        }
      } else if (if_block3) {
        group_outros();
        transition_out(if_block3, 1, 1, () => {
          if_block3 = null;
        });
        check_outros();
      }
      if (ctx2[17]) {
        if (if_block4) {
          if (dirty[0] & 131072) {
            transition_in(if_block4, 1);
          }
        } else {
          if_block4 = create_if_block_6();
          if_block4.c();
          transition_in(if_block4, 1);
          if_block4.m(div0, t4);
        }
      } else if (if_block4) {
        group_outros();
        transition_out(if_block4, 1, 1, () => {
          if_block4 = null;
        });
        check_outros();
      }
      set_attributes(input, input_data = get_spread_update(input_levels, [
        (!current || dirty[0] & 2048 && input_data_invalid_value !== (input_data_invalid_value = ctx2[11] || void 0)) && { "data-invalid": input_data_invalid_value },
        (!current || dirty[0] & 2048 && input_aria_invalid_value !== (input_aria_invalid_value = ctx2[11] || void 0)) && { "aria-invalid": input_aria_invalid_value },
        (!current || dirty[0] & 8192 && input_data_warn_value !== (input_data_warn_value = ctx2[13] || void 0)) && { "data-warn": input_data_warn_value },
        (!current || dirty[0] & 796672 && input_aria_describedby_value !== (input_aria_describedby_value = ctx2[11] ? ctx2[19] : ctx2[13] ? ctx2[18] : void 0)) && {
          "aria-describedby": input_aria_describedby_value
        },
        (!current || dirty[0] & 32) && { disabled: ctx2[5] },
        (!current || dirty[0] & 128) && { id: ctx2[7] },
        (!current || dirty[0] & 256) && { name: ctx2[8] },
        (!current || dirty[0] & 8) && { placeholder: ctx2[3] },
        (!current || dirty[0] & 32768) && { required: ctx2[15] },
        (!current || dirty[0] & 131072) && { readOnly: ctx2[17] },
        dirty[0] & 8388608 && ctx2[23]
      ]));
      if (dirty[0] & 1 && input.value !== ctx2[0]) {
        set_input_value(input, ctx2[0]);
      }
      toggle_class(input, "bx--text-input", true);
      toggle_class(input, "bx--text-input--light", ctx2[4]);
      toggle_class(input, "bx--text-input--invalid", ctx2[11]);
      toggle_class(input, "bx--text-input--warn", ctx2[13]);
      toggle_class(input, "bx--text-input--sm", ctx2[2] === "sm");
      toggle_class(input, "bx--text-input--xl", ctx2[2] === "xl");
      if (ctx2[20]) {
        if (if_block5)
          ;
        else {
          if_block5 = create_if_block_5();
          if_block5.c();
          if_block5.m(div0, t6);
        }
      } else if (if_block5) {
        if_block5.d(1);
        if_block5 = null;
      }
      if (ctx2[20] && !ctx2[16] && ctx2[11]) {
        if (if_block6) {
          if_block6.p(ctx2, dirty);
        } else {
          if_block6 = create_if_block_4(ctx2);
          if_block6.c();
          if_block6.m(div0, t7);
        }
      } else if (if_block6) {
        if_block6.d(1);
        if_block6 = null;
      }
      if (ctx2[20] && !ctx2[16] && ctx2[13]) {
        if (if_block7) {
          if_block7.p(ctx2, dirty);
        } else {
          if_block7 = create_if_block_3(ctx2);
          if_block7.c();
          if_block7.m(div0, null);
        }
      } else if (if_block7) {
        if_block7.d(1);
        if_block7 = null;
      }
      if (!current || dirty[0] & 2048 && div0_data_invalid_value !== (div0_data_invalid_value = ctx2[11] || void 0)) {
        attr(div0, "data-invalid", div0_data_invalid_value);
      }
      if (!current || dirty[0] & 8192 && div0_data_warn_value !== (div0_data_warn_value = ctx2[13] || void 0)) {
        attr(div0, "data-warn", div0_data_warn_value);
      }
      if (dirty[0] & 10240) {
        toggle_class(div0, "bx--text-input__field-wrapper--warning", !ctx2[11] && ctx2[13]);
      }
      if (!ctx2[11] && !ctx2[13] && !ctx2[20] && !ctx2[16] && ctx2[6]) {
        if (if_block8) {
          if_block8.p(ctx2, dirty);
        } else {
          if_block8 = create_if_block_2(ctx2);
          if_block8.c();
          if_block8.m(div1, t9);
        }
      } else if (if_block8) {
        if_block8.d(1);
        if_block8 = null;
      }
      if (!ctx2[20] && ctx2[11]) {
        if (if_block9) {
          if_block9.p(ctx2, dirty);
        } else {
          if_block9 = create_if_block_1(ctx2);
          if_block9.c();
          if_block9.m(div1, t10);
        }
      } else if (if_block9) {
        if_block9.d(1);
        if_block9 = null;
      }
      if (!ctx2[20] && !ctx2[11] && ctx2[13]) {
        if (if_block10) {
          if_block10.p(ctx2, dirty);
        } else {
          if_block10 = create_if_block(ctx2);
          if_block10.c();
          if_block10.m(div1, null);
        }
      } else if (if_block10) {
        if_block10.d(1);
        if_block10 = null;
      }
      if (dirty[0] & 65536) {
        toggle_class(div1, "bx--text-input__field-outer-wrapper--inline", ctx2[16]);
      }
      if (dirty[0] & 65536) {
        toggle_class(div2, "bx--text-input-wrapper--inline", ctx2[16]);
      }
      if (dirty[0] & 16) {
        toggle_class(div2, "bx--text-input-wrapper--light", ctx2[4]);
      }
      if (dirty[0] & 131072) {
        toggle_class(div2, "bx--text-input-wrapper--readonly", ctx2[17]);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(if_block1);
      transition_in(if_block2);
      transition_in(if_block3);
      transition_in(if_block4);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      transition_out(if_block2);
      transition_out(if_block3);
      transition_out(if_block4);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div2);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      if (if_block2)
        if_block2.d();
      if (if_block3)
        if_block3.d();
      if (if_block4)
        if_block4.d();
      ctx[36](null);
      if (if_block5)
        if_block5.d();
      if (if_block6)
        if_block6.d();
      if (if_block7)
        if_block7.d();
      if (if_block8)
        if_block8.d();
      if (if_block9)
        if_block9.d();
      if (if_block10)
        if_block10.d();
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let isFluid;
  let errorId;
  let warnId;
  const omit_props_names = [
    "size",
    "value",
    "placeholder",
    "light",
    "disabled",
    "helperText",
    "id",
    "name",
    "labelText",
    "hideLabel",
    "invalid",
    "invalidText",
    "warn",
    "warnText",
    "ref",
    "required",
    "inline",
    "readonly"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  const $$slots = compute_slots(slots);
  let { size = void 0 } = $$props;
  let { value = "" } = $$props;
  let { placeholder = "" } = $$props;
  let { light = false } = $$props;
  let { disabled = false } = $$props;
  let { helperText = "" } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { name = void 0 } = $$props;
  let { labelText = "" } = $$props;
  let { hideLabel = false } = $$props;
  let { invalid = false } = $$props;
  let { invalidText = "" } = $$props;
  let { warn = false } = $$props;
  let { warnText = "" } = $$props;
  let { ref = null } = $$props;
  let { required = false } = $$props;
  let { inline = false } = $$props;
  let { readonly = false } = $$props;
  const ctx = getContext("Form");
  const dispatch = createEventDispatcher();
  function parse(raw) {
    if ($$restProps.type !== "number")
      return raw;
    return raw != "" ? Number(raw) : null;
  }
  const onInput = (e) => {
    $$invalidate(0, value = parse(e.target.value));
    dispatch("input", value);
  };
  const onChange = (e) => {
    dispatch("change", parse(e.target.value));
  };
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseover_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseenter_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keydown_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keyup_handler(event) {
    bubble.call(this, $$self, event);
  }
  function focus_handler(event) {
    bubble.call(this, $$self, event);
  }
  function blur_handler(event) {
    bubble.call(this, $$self, event);
  }
  function paste_handler(event) {
    bubble.call(this, $$self, event);
  }
  function input_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      ref = $$value;
      $$invalidate(1, ref);
    });
  }
  function input_input_handler() {
    value = this.value;
    $$invalidate(0, value);
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(23, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("size" in $$new_props)
      $$invalidate(2, size = $$new_props.size);
    if ("value" in $$new_props)
      $$invalidate(0, value = $$new_props.value);
    if ("placeholder" in $$new_props)
      $$invalidate(3, placeholder = $$new_props.placeholder);
    if ("light" in $$new_props)
      $$invalidate(4, light = $$new_props.light);
    if ("disabled" in $$new_props)
      $$invalidate(5, disabled = $$new_props.disabled);
    if ("helperText" in $$new_props)
      $$invalidate(6, helperText = $$new_props.helperText);
    if ("id" in $$new_props)
      $$invalidate(7, id = $$new_props.id);
    if ("name" in $$new_props)
      $$invalidate(8, name = $$new_props.name);
    if ("labelText" in $$new_props)
      $$invalidate(9, labelText = $$new_props.labelText);
    if ("hideLabel" in $$new_props)
      $$invalidate(10, hideLabel = $$new_props.hideLabel);
    if ("invalid" in $$new_props)
      $$invalidate(11, invalid = $$new_props.invalid);
    if ("invalidText" in $$new_props)
      $$invalidate(12, invalidText = $$new_props.invalidText);
    if ("warn" in $$new_props)
      $$invalidate(13, warn = $$new_props.warn);
    if ("warnText" in $$new_props)
      $$invalidate(14, warnText = $$new_props.warnText);
    if ("ref" in $$new_props)
      $$invalidate(1, ref = $$new_props.ref);
    if ("required" in $$new_props)
      $$invalidate(15, required = $$new_props.required);
    if ("inline" in $$new_props)
      $$invalidate(16, inline = $$new_props.inline);
    if ("readonly" in $$new_props)
      $$invalidate(17, readonly = $$new_props.readonly);
    if ("$$scope" in $$new_props)
      $$invalidate(25, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & 128) {
      $$invalidate(19, errorId = `error-${id}`);
    }
    if ($$self.$$.dirty[0] & 128) {
      $$invalidate(18, warnId = `warn-${id}`);
    }
  };
  $$invalidate(20, isFluid = !!ctx && ctx.isFluid);
  return [
    value,
    ref,
    size,
    placeholder,
    light,
    disabled,
    helperText,
    id,
    name,
    labelText,
    hideLabel,
    invalid,
    invalidText,
    warn,
    warnText,
    required,
    inline,
    readonly,
    warnId,
    errorId,
    isFluid,
    onInput,
    onChange,
    $$restProps,
    $$slots,
    $$scope,
    slots,
    click_handler,
    mouseover_handler,
    mouseenter_handler,
    mouseleave_handler,
    keydown_handler,
    keyup_handler,
    focus_handler,
    blur_handler,
    paste_handler,
    input_binding,
    input_input_handler
  ];
}
class TextInput extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {
      size: 2,
      value: 0,
      placeholder: 3,
      light: 4,
      disabled: 5,
      helperText: 6,
      id: 7,
      name: 8,
      labelText: 9,
      hideLabel: 10,
      invalid: 11,
      invalidText: 12,
      warn: 13,
      warnText: 14,
      ref: 1,
      required: 15,
      inline: 16,
      readonly: 17
    }, null, [-1, -1]);
  }
}
export { TextInput as T };
