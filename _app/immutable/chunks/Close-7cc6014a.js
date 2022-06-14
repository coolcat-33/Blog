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
import { w as writable } from "./index-58edbb8c.js";
import { S as SvelteComponent, i as init, s as safe_not_equal, l as empty, g as insert_hydration, E as noop, d as detach, F as compute_rest_props, C as assign, H as exclude_internal_props, I as bubble, e as element, c as claim_element, a as children, P as set_attributes, L as toggle_class, R as listen, z as get_spread_update, T as run_all, t as text, h as claim_text, Q as append_hydration, n as group_outros, o as transition_out, p as check_outros, q as transition_in, G as compute_slots, Z as getContext, J as binding_callbacks, j as set_data, K as create_slot, k as space, w as create_component, m as claim_space, x as claim_component, y as mount_component, M as update_slot_base, N as get_all_dirty_from_scope, O as get_slot_changes, B as destroy_component, A as get_spread_object, U as svg_element, V as claim_svg_element, b as attr, W as set_svg_attributes } from "./index-2a8915ed.js";
const user = writable({ userLoggedIn: false });
function create_else_block$1(ctx) {
  let div;
  let mounted;
  let dispose;
  let div_levels = [ctx[2]];
  let div_data = {};
  for (let i = 0; i < div_levels.length; i += 1) {
    div_data = assign(div_data, div_levels[i]);
  }
  return {
    c() {
      div = element("div");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      children(div).forEach(detach);
      this.h();
    },
    h() {
      set_attributes(div, div_data);
      toggle_class(div, "bx--skeleton", true);
      toggle_class(div, "bx--btn", true);
      toggle_class(div, "bx--btn--field", ctx[1] === "field");
      toggle_class(div, "bx--btn--sm", ctx[1] === "small");
      toggle_class(div, "bx--btn--lg", ctx[1] === "lg");
      toggle_class(div, "bx--btn--xl", ctx[1] === "xl");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (!mounted) {
        dispose = [
          listen(div, "click", ctx[7]),
          listen(div, "mouseover", ctx[8]),
          listen(div, "mouseenter", ctx[9]),
          listen(div, "mouseleave", ctx[10])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      set_attributes(div, div_data = get_spread_update(div_levels, [dirty & 4 && ctx2[2]]));
      toggle_class(div, "bx--skeleton", true);
      toggle_class(div, "bx--btn", true);
      toggle_class(div, "bx--btn--field", ctx2[1] === "field");
      toggle_class(div, "bx--btn--sm", ctx2[1] === "small");
      toggle_class(div, "bx--btn--lg", ctx2[1] === "lg");
      toggle_class(div, "bx--btn--xl", ctx2[1] === "xl");
    },
    d(detaching) {
      if (detaching)
        detach(div);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block$2(ctx) {
  let a;
  let t_value = "";
  let t;
  let a_rel_value;
  let mounted;
  let dispose;
  let a_levels = [
    { href: ctx[0] },
    {
      rel: a_rel_value = ctx[2].target === "_blank" ? "noopener noreferrer" : void 0
    },
    { role: "button" },
    ctx[2]
  ];
  let a_data = {};
  for (let i = 0; i < a_levels.length; i += 1) {
    a_data = assign(a_data, a_levels[i]);
  }
  return {
    c() {
      a = element("a");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      a = claim_element(nodes, "A", { href: true, rel: true, role: true });
      var a_nodes = children(a);
      t = claim_text(a_nodes, t_value);
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(a, a_data);
      toggle_class(a, "bx--skeleton", true);
      toggle_class(a, "bx--btn", true);
      toggle_class(a, "bx--btn--field", ctx[1] === "field");
      toggle_class(a, "bx--btn--sm", ctx[1] === "small");
      toggle_class(a, "bx--btn--lg", ctx[1] === "lg");
      toggle_class(a, "bx--btn--xl", ctx[1] === "xl");
    },
    m(target, anchor) {
      insert_hydration(target, a, anchor);
      append_hydration(a, t);
      if (!mounted) {
        dispose = [
          listen(a, "click", ctx[3]),
          listen(a, "mouseover", ctx[4]),
          listen(a, "mouseenter", ctx[5]),
          listen(a, "mouseleave", ctx[6])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      set_attributes(a, a_data = get_spread_update(a_levels, [
        dirty & 1 && { href: ctx2[0] },
        dirty & 4 && a_rel_value !== (a_rel_value = ctx2[2].target === "_blank" ? "noopener noreferrer" : void 0) && { rel: a_rel_value },
        { role: "button" },
        dirty & 4 && ctx2[2]
      ]));
      toggle_class(a, "bx--skeleton", true);
      toggle_class(a, "bx--btn", true);
      toggle_class(a, "bx--btn--field", ctx2[1] === "field");
      toggle_class(a, "bx--btn--sm", ctx2[1] === "small");
      toggle_class(a, "bx--btn--lg", ctx2[1] === "lg");
      toggle_class(a, "bx--btn--xl", ctx2[1] === "xl");
    },
    d(detaching) {
      if (detaching)
        detach(a);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment$2(ctx) {
  let if_block_anchor;
  function select_block_type(ctx2, dirty) {
    if (ctx2[0])
      return create_if_block$2;
    return create_else_block$1;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
    },
    p(ctx2, [dirty]) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  const omit_props_names = ["href", "size"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { href = void 0 } = $$props;
  let { size = "default" } = $$props;
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
  function click_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  function mouseover_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  function mouseenter_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(2, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("href" in $$new_props)
      $$invalidate(0, href = $$new_props.href);
    if ("size" in $$new_props)
      $$invalidate(1, size = $$new_props.size);
  };
  return [
    href,
    size,
    $$restProps,
    click_handler,
    mouseover_handler,
    mouseenter_handler,
    mouseleave_handler,
    click_handler_1,
    mouseover_handler_1,
    mouseenter_handler_1,
    mouseleave_handler_1
  ];
}
class ButtonSkeleton extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { href: 0, size: 1 });
  }
}
const get_default_slot_changes = (dirty) => ({ props: dirty[0] & 512 });
const get_default_slot_context = (ctx) => ({ props: ctx[9] });
function create_else_block(ctx) {
  let button;
  let t;
  let switch_instance;
  let current;
  let mounted;
  let dispose;
  let if_block = ctx[8] && create_if_block_4(ctx);
  const default_slot_template = ctx[19].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[18], null);
  var switch_value = ctx[2];
  function switch_props(ctx2) {
    return {
      props: {
        "aria-hidden": "true",
        class: "bx--btn__icon",
        "aria-label": ctx2[3]
      }
    };
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props(ctx));
  }
  let button_levels = [ctx[9]];
  let button_data = {};
  for (let i = 0; i < button_levels.length; i += 1) {
    button_data = assign(button_data, button_levels[i]);
  }
  return {
    c() {
      button = element("button");
      if (if_block)
        if_block.c();
      t = space();
      if (default_slot)
        default_slot.c();
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", {});
      var button_nodes = children(button);
      if (if_block)
        if_block.l(button_nodes);
      t = claim_space(button_nodes);
      if (default_slot)
        default_slot.l(button_nodes);
      if (switch_instance)
        claim_component(switch_instance.$$.fragment, button_nodes);
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(button, button_data);
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      if (if_block)
        if_block.m(button, null);
      append_hydration(button, t);
      if (default_slot) {
        default_slot.m(button, null);
      }
      if (switch_instance) {
        mount_component(switch_instance, button, null);
      }
      if (button.autofocus)
        button.focus();
      ctx[33](button);
      current = true;
      if (!mounted) {
        dispose = [
          listen(button, "click", ctx[24]),
          listen(button, "mouseover", ctx[25]),
          listen(button, "mouseenter", ctx[26]),
          listen(button, "mouseleave", ctx[27])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (ctx2[8]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block_4(ctx2);
          if_block.c();
          if_block.m(button, t);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty[0] & 262144)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[18], !current ? get_all_dirty_from_scope(ctx2[18]) : get_slot_changes(default_slot_template, ctx2[18], dirty, null), null);
        }
      }
      const switch_instance_changes = {};
      if (dirty[0] & 8)
        switch_instance_changes["aria-label"] = ctx2[3];
      if (switch_value !== (switch_value = ctx2[2])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx2));
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, button, null);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
      set_attributes(button, button_data = get_spread_update(button_levels, [dirty[0] & 512 && ctx2[9]]));
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(button);
      if (if_block)
        if_block.d();
      if (default_slot)
        default_slot.d(detaching);
      if (switch_instance)
        destroy_component(switch_instance);
      ctx[33](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block_2(ctx) {
  let a;
  let t;
  let switch_instance;
  let current;
  let mounted;
  let dispose;
  let if_block = ctx[8] && create_if_block_3(ctx);
  const default_slot_template = ctx[19].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[18], null);
  var switch_value = ctx[2];
  function switch_props(ctx2) {
    return {
      props: {
        "aria-hidden": "true",
        class: "bx--btn__icon",
        "aria-label": ctx2[3]
      }
    };
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props(ctx));
  }
  let a_levels = [ctx[9]];
  let a_data = {};
  for (let i = 0; i < a_levels.length; i += 1) {
    a_data = assign(a_data, a_levels[i]);
  }
  return {
    c() {
      a = element("a");
      if (if_block)
        if_block.c();
      t = space();
      if (default_slot)
        default_slot.c();
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      this.h();
    },
    l(nodes) {
      a = claim_element(nodes, "A", {});
      var a_nodes = children(a);
      if (if_block)
        if_block.l(a_nodes);
      t = claim_space(a_nodes);
      if (default_slot)
        default_slot.l(a_nodes);
      if (switch_instance)
        claim_component(switch_instance.$$.fragment, a_nodes);
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(a, a_data);
    },
    m(target, anchor) {
      insert_hydration(target, a, anchor);
      if (if_block)
        if_block.m(a, null);
      append_hydration(a, t);
      if (default_slot) {
        default_slot.m(a, null);
      }
      if (switch_instance) {
        mount_component(switch_instance, a, null);
      }
      ctx[32](a);
      current = true;
      if (!mounted) {
        dispose = [
          listen(a, "click", ctx[20]),
          listen(a, "mouseover", ctx[21]),
          listen(a, "mouseenter", ctx[22]),
          listen(a, "mouseleave", ctx[23])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (ctx2[8]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block_3(ctx2);
          if_block.c();
          if_block.m(a, t);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty[0] & 262144)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[18], !current ? get_all_dirty_from_scope(ctx2[18]) : get_slot_changes(default_slot_template, ctx2[18], dirty, null), null);
        }
      }
      const switch_instance_changes = {};
      if (dirty[0] & 8)
        switch_instance_changes["aria-label"] = ctx2[3];
      if (switch_value !== (switch_value = ctx2[2])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx2));
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, a, null);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
      set_attributes(a, a_data = get_spread_update(a_levels, [dirty[0] & 512 && ctx2[9]]));
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(a);
      if (if_block)
        if_block.d();
      if (default_slot)
        default_slot.d(detaching);
      if (switch_instance)
        destroy_component(switch_instance);
      ctx[32](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block_1(ctx) {
  let current;
  const default_slot_template = ctx[19].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[18], get_default_slot_context);
  return {
    c() {
      if (default_slot)
        default_slot.c();
    },
    l(nodes) {
      if (default_slot)
        default_slot.l(nodes);
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty[0] & 262656)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[18], !current ? get_all_dirty_from_scope(ctx2[18]) : get_slot_changes(default_slot_template, ctx2[18], dirty, get_default_slot_changes), get_default_slot_context);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_if_block$1(ctx) {
  let buttonskeleton;
  let current;
  const buttonskeleton_spread_levels = [
    { href: ctx[7] },
    { size: ctx[1] },
    ctx[10],
    {
      style: ctx[8] && "width: 3rem;"
    }
  ];
  let buttonskeleton_props = {};
  for (let i = 0; i < buttonskeleton_spread_levels.length; i += 1) {
    buttonskeleton_props = assign(buttonskeleton_props, buttonskeleton_spread_levels[i]);
  }
  buttonskeleton = new ButtonSkeleton({ props: buttonskeleton_props });
  buttonskeleton.$on("click", ctx[28]);
  buttonskeleton.$on("mouseover", ctx[29]);
  buttonskeleton.$on("mouseenter", ctx[30]);
  buttonskeleton.$on("mouseleave", ctx[31]);
  return {
    c() {
      create_component(buttonskeleton.$$.fragment);
    },
    l(nodes) {
      claim_component(buttonskeleton.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(buttonskeleton, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const buttonskeleton_changes = dirty[0] & 1410 ? get_spread_update(buttonskeleton_spread_levels, [
        dirty[0] & 128 && { href: ctx2[7] },
        dirty[0] & 2 && { size: ctx2[1] },
        dirty[0] & 1024 && get_spread_object(ctx2[10]),
        dirty[0] & 256 && {
          style: ctx2[8] && "width: 3rem;"
        }
      ]) : {};
      buttonskeleton.$set(buttonskeleton_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(buttonskeleton.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(buttonskeleton.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(buttonskeleton, detaching);
    }
  };
}
function create_if_block_4(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text(ctx[3]);
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", {});
      var span_nodes = children(span);
      t = claim_text(span_nodes, ctx[3]);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      toggle_class(span, "bx--assistive-text", true);
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 8)
        set_data(t, ctx2[3]);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_if_block_3(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text(ctx[3]);
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", {});
      var span_nodes = children(span);
      t = claim_text(span_nodes, ctx[3]);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      toggle_class(span, "bx--assistive-text", true);
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 8)
        set_data(t, ctx2[3]);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_fragment$1(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$1, create_if_block_1, create_if_block_2, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[5])
      return 0;
    if (ctx2[4])
      return 1;
    if (ctx2[7] && !ctx2[6])
      return 2;
    return 3;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let hasIconOnly;
  let buttonProps;
  const omit_props_names = [
    "kind",
    "size",
    "expressive",
    "isSelected",
    "icon",
    "iconDescription",
    "tooltipAlignment",
    "tooltipPosition",
    "as",
    "skeleton",
    "disabled",
    "href",
    "tabindex",
    "type",
    "ref"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  const $$slots = compute_slots(slots);
  let { kind = "primary" } = $$props;
  let { size = "default" } = $$props;
  let { expressive = false } = $$props;
  let { isSelected = false } = $$props;
  let { icon = void 0 } = $$props;
  let { iconDescription = void 0 } = $$props;
  let { tooltipAlignment = "center" } = $$props;
  let { tooltipPosition = "bottom" } = $$props;
  let { as = false } = $$props;
  let { skeleton = false } = $$props;
  let { disabled = false } = $$props;
  let { href = void 0 } = $$props;
  let { tabindex = "0" } = $$props;
  let { type = "button" } = $$props;
  let { ref = null } = $$props;
  const ctx = getContext("ComposedModal");
  function click_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  function mouseover_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  function mouseenter_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  function click_handler_2(event) {
    bubble.call(this, $$self, event);
  }
  function mouseover_handler_2(event) {
    bubble.call(this, $$self, event);
  }
  function mouseenter_handler_2(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler_2(event) {
    bubble.call(this, $$self, event);
  }
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
  function a_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      ref = $$value;
      $$invalidate(0, ref);
    });
  }
  function button_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      ref = $$value;
      $$invalidate(0, ref);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(10, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("kind" in $$new_props)
      $$invalidate(11, kind = $$new_props.kind);
    if ("size" in $$new_props)
      $$invalidate(1, size = $$new_props.size);
    if ("expressive" in $$new_props)
      $$invalidate(12, expressive = $$new_props.expressive);
    if ("isSelected" in $$new_props)
      $$invalidate(13, isSelected = $$new_props.isSelected);
    if ("icon" in $$new_props)
      $$invalidate(2, icon = $$new_props.icon);
    if ("iconDescription" in $$new_props)
      $$invalidate(3, iconDescription = $$new_props.iconDescription);
    if ("tooltipAlignment" in $$new_props)
      $$invalidate(14, tooltipAlignment = $$new_props.tooltipAlignment);
    if ("tooltipPosition" in $$new_props)
      $$invalidate(15, tooltipPosition = $$new_props.tooltipPosition);
    if ("as" in $$new_props)
      $$invalidate(4, as = $$new_props.as);
    if ("skeleton" in $$new_props)
      $$invalidate(5, skeleton = $$new_props.skeleton);
    if ("disabled" in $$new_props)
      $$invalidate(6, disabled = $$new_props.disabled);
    if ("href" in $$new_props)
      $$invalidate(7, href = $$new_props.href);
    if ("tabindex" in $$new_props)
      $$invalidate(16, tabindex = $$new_props.tabindex);
    if ("type" in $$new_props)
      $$invalidate(17, type = $$new_props.type);
    if ("ref" in $$new_props)
      $$invalidate(0, ref = $$new_props.ref);
    if ("$$scope" in $$new_props)
      $$invalidate(18, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & 1) {
      if (ctx && ref) {
        ctx.declareRef(ref);
      }
    }
    if ($$self.$$.dirty[0] & 4) {
      $$invalidate(8, hasIconOnly = icon && !$$slots.default);
    }
    $$invalidate(9, buttonProps = __spreadProps(__spreadValues({
      type: href && !disabled ? void 0 : type,
      tabindex,
      disabled: disabled === true ? true : void 0,
      href,
      "aria-pressed": hasIconOnly && kind === "ghost" && !href ? isSelected : void 0
    }, $$restProps), {
      class: [
        "bx--btn",
        expressive && "bx--btn--expressive",
        (size === "small" && !expressive || size === "sm" && !expressive || size === "small" && !expressive) && "bx--btn--sm",
        size === "field" && !expressive || size === "md" && !expressive && "bx--btn--md",
        size === "field" && "bx--btn--field",
        size === "small" && "bx--btn--sm",
        size === "lg" && "bx--btn--lg",
        size === "xl" && "bx--btn--xl",
        kind && `bx--btn--${kind}`,
        disabled && "bx--btn--disabled",
        hasIconOnly && "bx--btn--icon-only",
        hasIconOnly && "bx--tooltip__trigger",
        hasIconOnly && "bx--tooltip--a11y",
        hasIconOnly && tooltipPosition && `bx--btn--icon-only--${tooltipPosition}`,
        hasIconOnly && tooltipAlignment && `bx--tooltip--align-${tooltipAlignment}`,
        hasIconOnly && isSelected && kind === "ghost" && "bx--btn--selected",
        $$restProps.class
      ].filter(Boolean).join(" ")
    }));
  };
  return [
    ref,
    size,
    icon,
    iconDescription,
    as,
    skeleton,
    disabled,
    href,
    hasIconOnly,
    buttonProps,
    $$restProps,
    kind,
    expressive,
    isSelected,
    tooltipAlignment,
    tooltipPosition,
    tabindex,
    type,
    $$scope,
    slots,
    click_handler_1,
    mouseover_handler_1,
    mouseenter_handler_1,
    mouseleave_handler_1,
    click_handler_2,
    mouseover_handler_2,
    mouseenter_handler_2,
    mouseleave_handler_2,
    click_handler,
    mouseover_handler,
    mouseenter_handler,
    mouseleave_handler,
    a_binding,
    button_binding
  ];
}
class Button extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {
      kind: 11,
      size: 1,
      expressive: 12,
      isSelected: 13,
      icon: 2,
      iconDescription: 3,
      tooltipAlignment: 14,
      tooltipPosition: 15,
      as: 4,
      skeleton: 5,
      disabled: 6,
      href: 7,
      tabindex: 16,
      type: 17,
      ref: 0
    }, null, [-1, -1]);
  }
}
function create_if_block(ctx) {
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
function create_fragment(ctx) {
  let svg;
  let path;
  let if_block = ctx[1] && create_if_block(ctx);
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
      attr(path, "d", "M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z");
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
          if_block = create_if_block(ctx2);
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
function instance($$self, $$props, $$invalidate) {
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
class Close extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { size: 0, title: 1 });
  }
}
export { Button as B, Close as C, user as u };
