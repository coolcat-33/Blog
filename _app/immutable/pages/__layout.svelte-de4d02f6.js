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
import { S as SvelteComponent, i as init, s as safe_not_equal, l as empty, g as insert_hydration, n as group_outros, o as transition_out, p as check_outros, q as transition_in, d as detach, F as compute_rest_props, G as compute_slots, C as assign, H as exclude_internal_props, I as bubble, J as binding_callbacks, K as create_slot, e as element, c as claim_element, a as children, L as toggle_class, M as update_slot_base, N as get_all_dirty_from_scope, O as get_slot_changes, k as space, m as claim_space, P as set_attributes, Q as append_hydration, R as listen, z as get_spread_update, T as run_all, w as create_component, x as claim_component, y as mount_component, B as destroy_component, U as svg_element, t as text, V as claim_svg_element, h as claim_text, j as set_data, b as attr, W as set_svg_attributes, E as noop, X as add_render_callback, Y as add_flush_callback, Z as component_subscribe, _ as bind, $ as create_bidirectional_transition, a0 as stop_propagation, a1 as createEventDispatcher, a2 as getContext, v as onMount, a3 as query_selector_all, a4 as src_url_equal, a5 as set_store_value } from "../chunks/index-7843d973.js";
import { u as user } from "../chunks/HeaderSearch.svelte_svelte_type_style_lang-a4bfa871.js";
import { B as Button } from "../chunks/Button-60074b90.js";
import { C as Close } from "../chunks/Close-d809ac48.js";
import { w as writable } from "../chunks/index-dfa38e18.js";
import { c as client } from "../chunks/singletons-d1fb5791.js";
const get_icon_slot_changes_1 = (dirty) => ({});
const get_icon_slot_context_1 = (ctx) => ({});
const get_icon_slot_changes$1 = (dirty) => ({});
const get_icon_slot_context$1 = (ctx) => ({});
function create_else_block$2(ctx) {
  let a;
  let t;
  let a_rel_value;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[10].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[9], null);
  let if_block = !ctx[3] && (ctx[8].icon || ctx[4]) && create_if_block_2$1(ctx);
  let a_levels = [
    {
      rel: a_rel_value = ctx[7].target === "_blank" ? "noopener noreferrer" : void 0
    },
    { href: ctx[2] },
    ctx[7]
  ];
  let a_data = {};
  for (let i = 0; i < a_levels.length; i += 1) {
    a_data = assign(a_data, a_levels[i]);
  }
  return {
    c() {
      a = element("a");
      if (default_slot)
        default_slot.c();
      t = space();
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes) {
      a = claim_element(nodes, "A", { rel: true, href: true });
      var a_nodes = children(a);
      if (default_slot)
        default_slot.l(a_nodes);
      t = claim_space(a_nodes);
      if (if_block)
        if_block.l(a_nodes);
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(a, a_data);
      toggle_class(a, "bx--link", true);
      toggle_class(a, "bx--link--disabled", ctx[5]);
      toggle_class(a, "bx--link--inline", ctx[3]);
      toggle_class(a, "bx--link--visited", ctx[6]);
      toggle_class(a, "bx--link--sm", ctx[1] === "sm");
      toggle_class(a, "bx--link--lg", ctx[1] === "lg");
    },
    m(target, anchor) {
      insert_hydration(target, a, anchor);
      if (default_slot) {
        default_slot.m(a, null);
      }
      append_hydration(a, t);
      if (if_block)
        if_block.m(a, null);
      ctx[20](a);
      current = true;
      if (!mounted) {
        dispose = [
          listen(a, "click", ctx[15]),
          listen(a, "mouseover", ctx[16]),
          listen(a, "mouseenter", ctx[17]),
          listen(a, "mouseleave", ctx[18])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 512)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[9], !current ? get_all_dirty_from_scope(ctx2[9]) : get_slot_changes(default_slot_template, ctx2[9], dirty, null), null);
        }
      }
      if (!ctx2[3] && (ctx2[8].icon || ctx2[4])) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 280) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_2$1(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(a, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      set_attributes(a, a_data = get_spread_update(a_levels, [
        (!current || dirty & 128 && a_rel_value !== (a_rel_value = ctx2[7].target === "_blank" ? "noopener noreferrer" : void 0)) && { rel: a_rel_value },
        (!current || dirty & 4) && { href: ctx2[2] },
        dirty & 128 && ctx2[7]
      ]));
      toggle_class(a, "bx--link", true);
      toggle_class(a, "bx--link--disabled", ctx2[5]);
      toggle_class(a, "bx--link--inline", ctx2[3]);
      toggle_class(a, "bx--link--visited", ctx2[6]);
      toggle_class(a, "bx--link--sm", ctx2[1] === "sm");
      toggle_class(a, "bx--link--lg", ctx2[1] === "lg");
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(a);
      if (default_slot)
        default_slot.d(detaching);
      if (if_block)
        if_block.d();
      ctx[20](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block$9(ctx) {
  let p;
  let t;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[10].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[9], null);
  let if_block = !ctx[3] && (ctx[8].icon || ctx[4]) && create_if_block_1$2(ctx);
  let p_levels = [ctx[7]];
  let p_data = {};
  for (let i = 0; i < p_levels.length; i += 1) {
    p_data = assign(p_data, p_levels[i]);
  }
  return {
    c() {
      p = element("p");
      if (default_slot)
        default_slot.c();
      t = space();
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      if (default_slot)
        default_slot.l(p_nodes);
      t = claim_space(p_nodes);
      if (if_block)
        if_block.l(p_nodes);
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(p, p_data);
      toggle_class(p, "bx--link", true);
      toggle_class(p, "bx--link--disabled", ctx[5]);
      toggle_class(p, "bx--link--inline", ctx[3]);
      toggle_class(p, "bx--link--visited", ctx[6]);
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      if (default_slot) {
        default_slot.m(p, null);
      }
      append_hydration(p, t);
      if (if_block)
        if_block.m(p, null);
      ctx[19](p);
      current = true;
      if (!mounted) {
        dispose = [
          listen(p, "click", ctx[11]),
          listen(p, "mouseover", ctx[12]),
          listen(p, "mouseenter", ctx[13]),
          listen(p, "mouseleave", ctx[14])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 512)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[9], !current ? get_all_dirty_from_scope(ctx2[9]) : get_slot_changes(default_slot_template, ctx2[9], dirty, null), null);
        }
      }
      if (!ctx2[3] && (ctx2[8].icon || ctx2[4])) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 280) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_1$2(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(p, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      set_attributes(p, p_data = get_spread_update(p_levels, [dirty & 128 && ctx2[7]]));
      toggle_class(p, "bx--link", true);
      toggle_class(p, "bx--link--disabled", ctx2[5]);
      toggle_class(p, "bx--link--inline", ctx2[3]);
      toggle_class(p, "bx--link--visited", ctx2[6]);
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(p);
      if (default_slot)
        default_slot.d(detaching);
      if (if_block)
        if_block.d();
      ctx[19](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block_2$1(ctx) {
  let div;
  let current;
  const icon_slot_template = ctx[10].icon;
  const icon_slot = create_slot(icon_slot_template, ctx, ctx[9], get_icon_slot_context_1);
  const icon_slot_or_fallback = icon_slot || fallback_block_1$1(ctx);
  return {
    c() {
      div = element("div");
      if (icon_slot_or_fallback)
        icon_slot_or_fallback.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      if (icon_slot_or_fallback)
        icon_slot_or_fallback.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      toggle_class(div, "bx--link__icon", true);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (icon_slot_or_fallback) {
        icon_slot_or_fallback.m(div, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (icon_slot) {
        if (icon_slot.p && (!current || dirty & 512)) {
          update_slot_base(icon_slot, icon_slot_template, ctx2, ctx2[9], !current ? get_all_dirty_from_scope(ctx2[9]) : get_slot_changes(icon_slot_template, ctx2[9], dirty, get_icon_slot_changes_1), get_icon_slot_context_1);
        }
      } else {
        if (icon_slot_or_fallback && icon_slot_or_fallback.p && (!current || dirty & 16)) {
          icon_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(icon_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(icon_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (icon_slot_or_fallback)
        icon_slot_or_fallback.d(detaching);
    }
  };
}
function fallback_block_1$1(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value = ctx[4];
  function switch_props(ctx2) {
    return {};
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props());
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l(nodes) {
      if (switch_instance)
        claim_component(switch_instance.$$.fragment, nodes);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }
      insert_hydration(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (switch_value !== (switch_value = ctx2[4])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = new switch_value(switch_props());
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(switch_instance_anchor);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function create_if_block_1$2(ctx) {
  let div;
  let current;
  const icon_slot_template = ctx[10].icon;
  const icon_slot = create_slot(icon_slot_template, ctx, ctx[9], get_icon_slot_context$1);
  const icon_slot_or_fallback = icon_slot || fallback_block$4(ctx);
  return {
    c() {
      div = element("div");
      if (icon_slot_or_fallback)
        icon_slot_or_fallback.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      if (icon_slot_or_fallback)
        icon_slot_or_fallback.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      toggle_class(div, "bx--link__icon", true);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (icon_slot_or_fallback) {
        icon_slot_or_fallback.m(div, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (icon_slot) {
        if (icon_slot.p && (!current || dirty & 512)) {
          update_slot_base(icon_slot, icon_slot_template, ctx2, ctx2[9], !current ? get_all_dirty_from_scope(ctx2[9]) : get_slot_changes(icon_slot_template, ctx2[9], dirty, get_icon_slot_changes$1), get_icon_slot_context$1);
        }
      } else {
        if (icon_slot_or_fallback && icon_slot_or_fallback.p && (!current || dirty & 16)) {
          icon_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(icon_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(icon_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (icon_slot_or_fallback)
        icon_slot_or_fallback.d(detaching);
    }
  };
}
function fallback_block$4(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value = ctx[4];
  function switch_props(ctx2) {
    return {};
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props());
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l(nodes) {
      if (switch_instance)
        claim_component(switch_instance.$$.fragment, nodes);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }
      insert_hydration(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (switch_value !== (switch_value = ctx2[4])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = new switch_value(switch_props());
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(switch_instance_anchor);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function create_fragment$j(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$9, create_else_block$2];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[5])
      return 0;
    return 1;
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
    p(ctx2, [dirty]) {
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
function instance$j($$self, $$props, $$invalidate) {
  const omit_props_names = ["size", "href", "inline", "icon", "disabled", "visited", "ref"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  const $$slots = compute_slots(slots);
  let { size = void 0 } = $$props;
  let { href = void 0 } = $$props;
  let { inline = false } = $$props;
  let { icon = void 0 } = $$props;
  let { disabled = false } = $$props;
  let { visited = false } = $$props;
  let { ref = null } = $$props;
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
  function p_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      ref = $$value;
      $$invalidate(0, ref);
    });
  }
  function a_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      ref = $$value;
      $$invalidate(0, ref);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(7, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("size" in $$new_props)
      $$invalidate(1, size = $$new_props.size);
    if ("href" in $$new_props)
      $$invalidate(2, href = $$new_props.href);
    if ("inline" in $$new_props)
      $$invalidate(3, inline = $$new_props.inline);
    if ("icon" in $$new_props)
      $$invalidate(4, icon = $$new_props.icon);
    if ("disabled" in $$new_props)
      $$invalidate(5, disabled = $$new_props.disabled);
    if ("visited" in $$new_props)
      $$invalidate(6, visited = $$new_props.visited);
    if ("ref" in $$new_props)
      $$invalidate(0, ref = $$new_props.ref);
    if ("$$scope" in $$new_props)
      $$invalidate(9, $$scope = $$new_props.$$scope);
  };
  return [
    ref,
    size,
    href,
    inline,
    icon,
    disabled,
    visited,
    $$restProps,
    $$slots,
    $$scope,
    slots,
    click_handler,
    mouseover_handler,
    mouseenter_handler,
    mouseleave_handler,
    click_handler_1,
    mouseover_handler_1,
    mouseenter_handler_1,
    mouseleave_handler_1,
    p_binding,
    a_binding
  ];
}
class Link extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$j, create_fragment$j, safe_not_equal, {
      size: 1,
      href: 2,
      inline: 3,
      icon: 4,
      disabled: 5,
      visited: 6,
      ref: 0
    });
  }
}
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function slide(node, { delay = 0, duration = 400, easing = cubicOut } = {}) {
  const style = getComputedStyle(node);
  const opacity = +style.opacity;
  const height = parseFloat(style.height);
  const padding_top = parseFloat(style.paddingTop);
  const padding_bottom = parseFloat(style.paddingBottom);
  const margin_top = parseFloat(style.marginTop);
  const margin_bottom = parseFloat(style.marginBottom);
  const border_top_width = parseFloat(style.borderTopWidth);
  const border_bottom_width = parseFloat(style.borderBottomWidth);
  return {
    delay,
    duration,
    easing,
    css: (t) => `overflow: hidden;opacity: ${Math.min(t * 20, 1) * opacity};height: ${t * height}px;padding-top: ${t * padding_top}px;padding-bottom: ${t * padding_bottom}px;margin-top: ${t * margin_top}px;margin-bottom: ${t * margin_bottom}px;border-top-width: ${t * border_top_width}px;border-bottom-width: ${t * border_bottom_width}px;`
  };
}
function create_if_block$8(ctx) {
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
function create_fragment$i(ctx) {
  let svg;
  let path;
  let if_block = ctx[1] && create_if_block$8(ctx);
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
      attr(path, "d", "M4 6H28V8H4zM4 24H28V26H4zM4 12H28V14H4zM4 18H28V20H4z");
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
          if_block = create_if_block$8(ctx2);
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
function instance$i($$self, $$props, $$invalidate) {
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
class Menu extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$i, create_fragment$i, safe_not_equal, { size: 0, title: 1 });
  }
}
const shouldRenderHamburgerMenu = writable(false);
function create_fragment$h(ctx) {
  let button;
  let switch_instance;
  let current;
  let mounted;
  let dispose;
  var switch_value = ctx[0] ? ctx[4] : ctx[3];
  function switch_props(ctx2) {
    return { props: { size: 20 } };
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props());
  }
  let button_levels = [
    { type: "button" },
    { title: ctx[2] },
    { "aria-label": ctx[2] },
    ctx[5]
  ];
  let button_data = {};
  for (let i = 0; i < button_levels.length; i += 1) {
    button_data = assign(button_data, button_levels[i]);
  }
  return {
    c() {
      button = element("button");
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", {
        type: true,
        title: true,
        "aria-label": true
      });
      var button_nodes = children(button);
      if (switch_instance)
        claim_component(switch_instance.$$.fragment, button_nodes);
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(button, button_data);
      toggle_class(button, "bx--header__action", true);
      toggle_class(button, "bx--header__menu-trigger", true);
      toggle_class(button, "bx--header__menu-toggle", true);
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      if (switch_instance) {
        mount_component(switch_instance, button, null);
      }
      if (button.autofocus)
        button.focus();
      ctx[7](button);
      current = true;
      if (!mounted) {
        dispose = [
          listen(button, "click", ctx[6]),
          listen(button, "click", ctx[8])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (switch_value !== (switch_value = ctx2[0] ? ctx2[4] : ctx2[3])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = new switch_value(switch_props());
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, button, null);
        } else {
          switch_instance = null;
        }
      }
      set_attributes(button, button_data = get_spread_update(button_levels, [
        { type: "button" },
        (!current || dirty & 4) && { title: ctx2[2] },
        (!current || dirty & 4) && { "aria-label": ctx2[2] },
        dirty & 32 && ctx2[5]
      ]));
      toggle_class(button, "bx--header__action", true);
      toggle_class(button, "bx--header__menu-trigger", true);
      toggle_class(button, "bx--header__menu-toggle", true);
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(button);
      if (switch_instance)
        destroy_component(switch_instance);
      ctx[7](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$h($$self, $$props, $$invalidate) {
  const omit_props_names = ["ariaLabel", "isOpen", "iconMenu", "iconClose", "ref"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { ariaLabel = void 0 } = $$props;
  let { isOpen = false } = $$props;
  let { iconMenu = Menu } = $$props;
  let { iconClose = Close } = $$props;
  let { ref = null } = $$props;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function button_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      ref = $$value;
      $$invalidate(1, ref);
    });
  }
  const click_handler_1 = () => $$invalidate(0, isOpen = !isOpen);
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(5, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("ariaLabel" in $$new_props)
      $$invalidate(2, ariaLabel = $$new_props.ariaLabel);
    if ("isOpen" in $$new_props)
      $$invalidate(0, isOpen = $$new_props.isOpen);
    if ("iconMenu" in $$new_props)
      $$invalidate(3, iconMenu = $$new_props.iconMenu);
    if ("iconClose" in $$new_props)
      $$invalidate(4, iconClose = $$new_props.iconClose);
    if ("ref" in $$new_props)
      $$invalidate(1, ref = $$new_props.ref);
  };
  return [
    isOpen,
    ref,
    ariaLabel,
    iconMenu,
    iconClose,
    $$restProps,
    click_handler,
    button_binding,
    click_handler_1
  ];
}
class HamburgerMenu extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$h, create_fragment$h, safe_not_equal, {
      ariaLabel: 2,
      isOpen: 0,
      iconMenu: 3,
      iconClose: 4,
      ref: 1
    });
  }
}
const get_platform_slot_changes = (dirty) => ({});
const get_platform_slot_context = (ctx) => ({});
const get_skip_to_content_slot_changes = (dirty) => ({});
const get_skip_to_content_slot_context = (ctx) => ({});
function create_if_block_1$1(ctx) {
  let hamburgermenu;
  let updating_isOpen;
  let current;
  function hamburgermenu_isOpen_binding(value) {
    ctx[19](value);
  }
  let hamburgermenu_props = {
    iconClose: ctx[8],
    iconMenu: ctx[7]
  };
  if (ctx[0] !== void 0) {
    hamburgermenu_props.isOpen = ctx[0];
  }
  hamburgermenu = new HamburgerMenu({ props: hamburgermenu_props });
  binding_callbacks.push(() => bind(hamburgermenu, "isOpen", hamburgermenu_isOpen_binding));
  return {
    c() {
      create_component(hamburgermenu.$$.fragment);
    },
    l(nodes) {
      claim_component(hamburgermenu.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(hamburgermenu, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const hamburgermenu_changes = {};
      if (dirty & 256)
        hamburgermenu_changes.iconClose = ctx2[8];
      if (dirty & 128)
        hamburgermenu_changes.iconMenu = ctx2[7];
      if (!updating_isOpen && dirty & 1) {
        updating_isOpen = true;
        hamburgermenu_changes.isOpen = ctx2[0];
        add_flush_callback(() => updating_isOpen = false);
      }
      hamburgermenu.$set(hamburgermenu_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(hamburgermenu.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(hamburgermenu.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(hamburgermenu, detaching);
    }
  };
}
function create_if_block$7(ctx) {
  let span;
  let t0;
  let t1;
  return {
    c() {
      span = element("span");
      t0 = text(ctx[3]);
      t1 = text("\xA0");
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", {});
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, ctx[3]);
      t1 = claim_text(span_nodes, "\xA0");
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      toggle_class(span, "bx--header__name--prefix", true);
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t0);
      append_hydration(span, t1);
    },
    p(ctx2, dirty) {
      if (dirty & 8)
        set_data(t0, ctx2[3]);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function fallback_block$3(ctx) {
  let t;
  return {
    c() {
      t = text(ctx[4]);
    },
    l(nodes) {
      t = claim_text(nodes, ctx[4]);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 16)
        set_data(t, ctx2[4]);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment$g(ctx) {
  let header;
  let t0;
  let t1;
  let a;
  let t2;
  let t3;
  let current;
  let mounted;
  let dispose;
  add_render_callback(ctx[18]);
  const skip_to_content_slot_template = ctx[16]["skip-to-content"];
  const skip_to_content_slot = create_slot(skip_to_content_slot_template, ctx, ctx[15], get_skip_to_content_slot_context);
  let if_block0 = (ctx[11] && ctx[9] < ctx[6] || ctx[5]) && create_if_block_1$1(ctx);
  let if_block1 = ctx[3] && create_if_block$7(ctx);
  const platform_slot_template = ctx[16].platform;
  const platform_slot = create_slot(platform_slot_template, ctx, ctx[15], get_platform_slot_context);
  const platform_slot_or_fallback = platform_slot || fallback_block$3(ctx);
  let a_levels = [{ href: ctx[2] }, ctx[12]];
  let a_data = {};
  for (let i = 0; i < a_levels.length; i += 1) {
    a_data = assign(a_data, a_levels[i]);
  }
  const default_slot_template = ctx[16].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[15], null);
  return {
    c() {
      header = element("header");
      if (skip_to_content_slot)
        skip_to_content_slot.c();
      t0 = space();
      if (if_block0)
        if_block0.c();
      t1 = space();
      a = element("a");
      if (if_block1)
        if_block1.c();
      t2 = space();
      if (platform_slot_or_fallback)
        platform_slot_or_fallback.c();
      t3 = space();
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      header = claim_element(nodes, "HEADER", { "aria-label": true });
      var header_nodes = children(header);
      if (skip_to_content_slot)
        skip_to_content_slot.l(header_nodes);
      t0 = claim_space(header_nodes);
      if (if_block0)
        if_block0.l(header_nodes);
      t1 = claim_space(header_nodes);
      a = claim_element(header_nodes, "A", { href: true });
      var a_nodes = children(a);
      if (if_block1)
        if_block1.l(a_nodes);
      t2 = claim_space(a_nodes);
      if (platform_slot_or_fallback)
        platform_slot_or_fallback.l(a_nodes);
      a_nodes.forEach(detach);
      t3 = claim_space(header_nodes);
      if (default_slot)
        default_slot.l(header_nodes);
      header_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(a, a_data);
      toggle_class(a, "bx--header__name", true);
      attr(header, "aria-label", ctx[10]);
      toggle_class(header, "bx--header", true);
    },
    m(target, anchor) {
      insert_hydration(target, header, anchor);
      if (skip_to_content_slot) {
        skip_to_content_slot.m(header, null);
      }
      append_hydration(header, t0);
      if (if_block0)
        if_block0.m(header, null);
      append_hydration(header, t1);
      append_hydration(header, a);
      if (if_block1)
        if_block1.m(a, null);
      append_hydration(a, t2);
      if (platform_slot_or_fallback) {
        platform_slot_or_fallback.m(a, null);
      }
      ctx[20](a);
      append_hydration(header, t3);
      if (default_slot) {
        default_slot.m(header, null);
      }
      current = true;
      if (!mounted) {
        dispose = [
          listen(window, "resize", ctx[18]),
          listen(a, "click", ctx[17])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (skip_to_content_slot) {
        if (skip_to_content_slot.p && (!current || dirty & 32768)) {
          update_slot_base(skip_to_content_slot, skip_to_content_slot_template, ctx2, ctx2[15], !current ? get_all_dirty_from_scope(ctx2[15]) : get_slot_changes(skip_to_content_slot_template, ctx2[15], dirty, get_skip_to_content_slot_changes), get_skip_to_content_slot_context);
        }
      }
      if (ctx2[11] && ctx2[9] < ctx2[6] || ctx2[5]) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & 2656) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_1$1(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(header, t1);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (ctx2[3]) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block$7(ctx2);
          if_block1.c();
          if_block1.m(a, t2);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (platform_slot) {
        if (platform_slot.p && (!current || dirty & 32768)) {
          update_slot_base(platform_slot, platform_slot_template, ctx2, ctx2[15], !current ? get_all_dirty_from_scope(ctx2[15]) : get_slot_changes(platform_slot_template, ctx2[15], dirty, get_platform_slot_changes), get_platform_slot_context);
        }
      } else {
        if (platform_slot_or_fallback && platform_slot_or_fallback.p && (!current || dirty & 16)) {
          platform_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
      set_attributes(a, a_data = get_spread_update(a_levels, [
        (!current || dirty & 4) && { href: ctx2[2] },
        dirty & 4096 && ctx2[12]
      ]));
      toggle_class(a, "bx--header__name", true);
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 32768)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[15], !current ? get_all_dirty_from_scope(ctx2[15]) : get_slot_changes(default_slot_template, ctx2[15], dirty, null), null);
        }
      }
      if (!current || dirty & 1024) {
        attr(header, "aria-label", ctx2[10]);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(skip_to_content_slot, local);
      transition_in(if_block0);
      transition_in(platform_slot_or_fallback, local);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(skip_to_content_slot, local);
      transition_out(if_block0);
      transition_out(platform_slot_or_fallback, local);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(header);
      if (skip_to_content_slot)
        skip_to_content_slot.d(detaching);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      if (platform_slot_or_fallback)
        platform_slot_or_fallback.d(detaching);
      ctx[20](null);
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$g($$self, $$props, $$invalidate) {
  let ariaLabel;
  const omit_props_names = [
    "expandedByDefault",
    "isSideNavOpen",
    "uiShellAriaLabel",
    "href",
    "company",
    "platformName",
    "persistentHamburgerMenu",
    "expansionBreakpoint",
    "ref",
    "iconMenu",
    "iconClose"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let $shouldRenderHamburgerMenu;
  component_subscribe($$self, shouldRenderHamburgerMenu, ($$value) => $$invalidate(11, $shouldRenderHamburgerMenu = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  let { expandedByDefault = true } = $$props;
  let { isSideNavOpen = false } = $$props;
  let { uiShellAriaLabel = void 0 } = $$props;
  let { href = void 0 } = $$props;
  let { company = void 0 } = $$props;
  let { platformName = "" } = $$props;
  let { persistentHamburgerMenu = false } = $$props;
  let { expansionBreakpoint = 1056 } = $$props;
  let { ref = null } = $$props;
  let { iconMenu = Menu } = $$props;
  let { iconClose = Close } = $$props;
  let winWidth = void 0;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function onwindowresize() {
    $$invalidate(9, winWidth = window.innerWidth);
  }
  function hamburgermenu_isOpen_binding(value) {
    isSideNavOpen = value;
    $$invalidate(0, isSideNavOpen), $$invalidate(13, expandedByDefault), $$invalidate(9, winWidth), $$invalidate(6, expansionBreakpoint), $$invalidate(5, persistentHamburgerMenu);
  }
  function a_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      ref = $$value;
      $$invalidate(1, ref);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(21, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(12, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("expandedByDefault" in $$new_props)
      $$invalidate(13, expandedByDefault = $$new_props.expandedByDefault);
    if ("isSideNavOpen" in $$new_props)
      $$invalidate(0, isSideNavOpen = $$new_props.isSideNavOpen);
    if ("uiShellAriaLabel" in $$new_props)
      $$invalidate(14, uiShellAriaLabel = $$new_props.uiShellAriaLabel);
    if ("href" in $$new_props)
      $$invalidate(2, href = $$new_props.href);
    if ("company" in $$new_props)
      $$invalidate(3, company = $$new_props.company);
    if ("platformName" in $$new_props)
      $$invalidate(4, platformName = $$new_props.platformName);
    if ("persistentHamburgerMenu" in $$new_props)
      $$invalidate(5, persistentHamburgerMenu = $$new_props.persistentHamburgerMenu);
    if ("expansionBreakpoint" in $$new_props)
      $$invalidate(6, expansionBreakpoint = $$new_props.expansionBreakpoint);
    if ("ref" in $$new_props)
      $$invalidate(1, ref = $$new_props.ref);
    if ("iconMenu" in $$new_props)
      $$invalidate(7, iconMenu = $$new_props.iconMenu);
    if ("iconClose" in $$new_props)
      $$invalidate(8, iconClose = $$new_props.iconClose);
    if ("$$scope" in $$new_props)
      $$invalidate(15, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 8800) {
      $$invalidate(0, isSideNavOpen = expandedByDefault && winWidth >= expansionBreakpoint && !persistentHamburgerMenu);
    }
    $$invalidate(10, ariaLabel = company ? `${company} ` : "" + (uiShellAriaLabel || $$props["aria-label"] || platformName));
  };
  $$props = exclude_internal_props($$props);
  return [
    isSideNavOpen,
    ref,
    href,
    company,
    platformName,
    persistentHamburgerMenu,
    expansionBreakpoint,
    iconMenu,
    iconClose,
    winWidth,
    ariaLabel,
    $shouldRenderHamburgerMenu,
    $$restProps,
    expandedByDefault,
    uiShellAriaLabel,
    $$scope,
    slots,
    click_handler,
    onwindowresize,
    hamburgermenu_isOpen_binding,
    a_binding
  ];
}
class Header extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$g, create_fragment$g, safe_not_equal, {
      expandedByDefault: 13,
      isSideNavOpen: 0,
      uiShellAriaLabel: 14,
      href: 2,
      company: 3,
      platformName: 4,
      persistentHamburgerMenu: 5,
      expansionBreakpoint: 6,
      ref: 1,
      iconMenu: 7,
      iconClose: 8
    });
  }
}
function create_if_block$6(ctx) {
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
function create_fragment$f(ctx) {
  let svg;
  let path;
  let if_block = ctx[1] && create_if_block$6(ctx);
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
      attr(path, "d", "M14 4H18V8H14zM4 4H8V8H4zM24 4H28V8H24zM14 14H18V18H14zM4 14H8V18H4zM24 14H28V18H24zM14 24H18V28H14zM4 24H8V28H4zM24 24H28V28H24z");
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
          if_block = create_if_block$6(ctx2);
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
function instance$f($$self, $$props, $$invalidate) {
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
class Switcher extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$f, create_fragment$f, safe_not_equal, { size: 0, title: 1 });
  }
}
const get_text_slot_changes = (dirty) => ({});
const get_text_slot_context = (ctx) => ({});
const get_icon_slot_changes = (dirty) => ({});
const get_icon_slot_context = (ctx) => ({});
const get_closeIcon_slot_changes = (dirty) => ({});
const get_closeIcon_slot_context = (ctx) => ({});
function create_else_block$1(ctx) {
  let current;
  const icon_slot_template = ctx[10].icon;
  const icon_slot = create_slot(icon_slot_template, ctx, ctx[9], get_icon_slot_context);
  const icon_slot_or_fallback = icon_slot || fallback_block_2(ctx);
  return {
    c() {
      if (icon_slot_or_fallback)
        icon_slot_or_fallback.c();
    },
    l(nodes) {
      if (icon_slot_or_fallback)
        icon_slot_or_fallback.l(nodes);
    },
    m(target, anchor) {
      if (icon_slot_or_fallback) {
        icon_slot_or_fallback.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (icon_slot) {
        if (icon_slot.p && (!current || dirty & 512)) {
          update_slot_base(icon_slot, icon_slot_template, ctx2, ctx2[9], !current ? get_all_dirty_from_scope(ctx2[9]) : get_slot_changes(icon_slot_template, ctx2[9], dirty, get_icon_slot_changes), get_icon_slot_context);
        }
      } else {
        if (icon_slot_or_fallback && icon_slot_or_fallback.p && (!current || dirty & 4)) {
          icon_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(icon_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(icon_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (icon_slot_or_fallback)
        icon_slot_or_fallback.d(detaching);
    }
  };
}
function create_if_block_2(ctx) {
  let current;
  const closeIcon_slot_template = ctx[10].closeIcon;
  const closeIcon_slot = create_slot(closeIcon_slot_template, ctx, ctx[9], get_closeIcon_slot_context);
  const closeIcon_slot_or_fallback = closeIcon_slot || fallback_block_1(ctx);
  return {
    c() {
      if (closeIcon_slot_or_fallback)
        closeIcon_slot_or_fallback.c();
    },
    l(nodes) {
      if (closeIcon_slot_or_fallback)
        closeIcon_slot_or_fallback.l(nodes);
    },
    m(target, anchor) {
      if (closeIcon_slot_or_fallback) {
        closeIcon_slot_or_fallback.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (closeIcon_slot) {
        if (closeIcon_slot.p && (!current || dirty & 512)) {
          update_slot_base(closeIcon_slot, closeIcon_slot_template, ctx2, ctx2[9], !current ? get_all_dirty_from_scope(ctx2[9]) : get_slot_changes(closeIcon_slot_template, ctx2[9], dirty, get_closeIcon_slot_changes), get_closeIcon_slot_context);
        }
      } else {
        if (closeIcon_slot_or_fallback && closeIcon_slot_or_fallback.p && (!current || dirty & 8)) {
          closeIcon_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(closeIcon_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(closeIcon_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (closeIcon_slot_or_fallback)
        closeIcon_slot_or_fallback.d(detaching);
    }
  };
}
function fallback_block_2(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value = ctx[2];
  function switch_props(ctx2) {
    return { props: { size: 20 } };
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props());
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l(nodes) {
      if (switch_instance)
        claim_component(switch_instance.$$.fragment, nodes);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }
      insert_hydration(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
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
          switch_instance = new switch_value(switch_props());
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(switch_instance_anchor);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function fallback_block_1(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value = ctx[3];
  function switch_props(ctx2) {
    return { props: { size: 20 } };
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props());
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l(nodes) {
      if (switch_instance)
        claim_component(switch_instance.$$.fragment, nodes);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }
      insert_hydration(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (switch_value !== (switch_value = ctx2[3])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = new switch_value(switch_props());
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(switch_instance_anchor);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function create_if_block_1(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text(ctx[4]);
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, ctx[4]);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "svelte-187bdaq");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & 16)
        set_data(t, ctx2[4]);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function fallback_block$2(ctx) {
  let if_block_anchor;
  let if_block = ctx[4] && create_if_block_1(ctx);
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
      if (ctx2[4]) {
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
function create_if_block$5(ctx) {
  let div;
  let div_transition;
  let current;
  const default_slot_template = ctx[10].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[9], null);
  return {
    c() {
      div = element("div");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      if (default_slot)
        default_slot.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      toggle_class(div, "bx--header-panel", true);
      toggle_class(div, "bx--header-panel--expanded", true);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      ctx[15](div);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 512)) {
          update_slot_base(default_slot, default_slot_template, ctx, ctx[9], !current ? get_all_dirty_from_scope(ctx[9]) : get_slot_changes(default_slot_template, ctx[9], dirty, null), null);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      add_render_callback(() => {
        if (!div_transition)
          div_transition = create_bidirectional_transition(div, slide, __spreadProps(__spreadValues({}, ctx[5]), {
            duration: ctx[5] === false ? 0 : ctx[5].duration
          }), true);
        div_transition.run(1);
      });
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      if (!div_transition)
        div_transition = create_bidirectional_transition(div, slide, __spreadProps(__spreadValues({}, ctx[5]), {
          duration: ctx[5] === false ? 0 : ctx[5].duration
        }), false);
      div_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (default_slot)
        default_slot.d(detaching);
      ctx[15](null);
      if (detaching && div_transition)
        div_transition.end();
    }
  };
}
function create_fragment$e(ctx) {
  let button;
  let current_block_type_index;
  let if_block0;
  let t0;
  let t1;
  let if_block1_anchor;
  let current;
  let mounted;
  let dispose;
  const if_block_creators = [create_if_block_2, create_else_block$1];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[0])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  const text_slot_template = ctx[10].text;
  const text_slot = create_slot(text_slot_template, ctx, ctx[9], get_text_slot_context);
  const text_slot_or_fallback = text_slot || fallback_block$2(ctx);
  let button_levels = [{ type: "button" }, ctx[8]];
  let button_data = {};
  for (let i = 0; i < button_levels.length; i += 1) {
    button_data = assign(button_data, button_levels[i]);
  }
  let if_block1 = ctx[0] && create_if_block$5(ctx);
  return {
    c() {
      button = element("button");
      if_block0.c();
      t0 = space();
      if (text_slot_or_fallback)
        text_slot_or_fallback.c();
      t1 = space();
      if (if_block1)
        if_block1.c();
      if_block1_anchor = empty();
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", { type: true });
      var button_nodes = children(button);
      if_block0.l(button_nodes);
      t0 = claim_space(button_nodes);
      if (text_slot_or_fallback)
        text_slot_or_fallback.l(button_nodes);
      button_nodes.forEach(detach);
      t1 = claim_space(nodes);
      if (if_block1)
        if_block1.l(nodes);
      if_block1_anchor = empty();
      this.h();
    },
    h() {
      set_attributes(button, button_data);
      toggle_class(button, "bx--header__action", true);
      toggle_class(button, "bx--header__action--active", ctx[0]);
      toggle_class(button, "action-text", ctx[4]);
      toggle_class(button, "svelte-187bdaq", true);
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      if_blocks[current_block_type_index].m(button, null);
      append_hydration(button, t0);
      if (text_slot_or_fallback) {
        text_slot_or_fallback.m(button, null);
      }
      if (button.autofocus)
        button.focus();
      ctx[13](button);
      insert_hydration(target, t1, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_hydration(target, if_block1_anchor, anchor);
      current = true;
      if (!mounted) {
        dispose = [
          listen(window, "click", ctx[12]),
          listen(button, "click", ctx[11]),
          listen(button, "click", stop_propagation(ctx[14]))
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
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
        if_block0 = if_blocks[current_block_type_index];
        if (!if_block0) {
          if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block0.c();
        } else {
          if_block0.p(ctx2, dirty);
        }
        transition_in(if_block0, 1);
        if_block0.m(button, t0);
      }
      if (text_slot) {
        if (text_slot.p && (!current || dirty & 512)) {
          update_slot_base(text_slot, text_slot_template, ctx2, ctx2[9], !current ? get_all_dirty_from_scope(ctx2[9]) : get_slot_changes(text_slot_template, ctx2[9], dirty, get_text_slot_changes), get_text_slot_context);
        }
      } else {
        if (text_slot_or_fallback && text_slot_or_fallback.p && (!current || dirty & 16)) {
          text_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
      set_attributes(button, button_data = get_spread_update(button_levels, [{ type: "button" }, dirty & 256 && ctx2[8]]));
      toggle_class(button, "bx--header__action", true);
      toggle_class(button, "bx--header__action--active", ctx2[0]);
      toggle_class(button, "action-text", ctx2[4]);
      toggle_class(button, "svelte-187bdaq", true);
      if (ctx2[0]) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & 1) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block$5(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(text_slot_or_fallback, local);
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(text_slot_or_fallback, local);
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(button);
      if_blocks[current_block_type_index].d();
      if (text_slot_or_fallback)
        text_slot_or_fallback.d(detaching);
      ctx[13](null);
      if (detaching)
        detach(t1);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach(if_block1_anchor);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$e($$self, $$props, $$invalidate) {
  const omit_props_names = ["isOpen", "icon", "closeIcon", "text", "ref", "transition"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { isOpen = false } = $$props;
  let { icon = Switcher } = $$props;
  let { closeIcon = Close } = $$props;
  let { text: text2 = void 0 } = $$props;
  let { ref = null } = $$props;
  let { transition = { duration: 200 } } = $$props;
  const dispatch = createEventDispatcher();
  let refPanel = null;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  const click_handler_1 = ({ target }) => {
    if (isOpen && !ref.contains(target) && !refPanel.contains(target)) {
      $$invalidate(0, isOpen = false);
      dispatch("close");
    }
  };
  function button_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      ref = $$value;
      $$invalidate(1, ref);
    });
  }
  const click_handler_2 = () => {
    $$invalidate(0, isOpen = !isOpen);
    dispatch(isOpen ? "open" : "close");
  };
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      refPanel = $$value;
      $$invalidate(6, refPanel);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(8, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("isOpen" in $$new_props)
      $$invalidate(0, isOpen = $$new_props.isOpen);
    if ("icon" in $$new_props)
      $$invalidate(2, icon = $$new_props.icon);
    if ("closeIcon" in $$new_props)
      $$invalidate(3, closeIcon = $$new_props.closeIcon);
    if ("text" in $$new_props)
      $$invalidate(4, text2 = $$new_props.text);
    if ("ref" in $$new_props)
      $$invalidate(1, ref = $$new_props.ref);
    if ("transition" in $$new_props)
      $$invalidate(5, transition = $$new_props.transition);
    if ("$$scope" in $$new_props)
      $$invalidate(9, $$scope = $$new_props.$$scope);
  };
  return [
    isOpen,
    ref,
    icon,
    closeIcon,
    text2,
    transition,
    refPanel,
    dispatch,
    $$restProps,
    $$scope,
    slots,
    click_handler,
    click_handler_1,
    button_binding,
    click_handler_2,
    div_binding
  ];
}
class HeaderAction extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$e, create_fragment$e, safe_not_equal, {
      isOpen: 0,
      icon: 2,
      closeIcon: 3,
      text: 4,
      ref: 1,
      transition: 5
    });
  }
}
function create_fragment$d(ctx) {
  let nav;
  let ul;
  let current;
  const default_slot_template = ctx[3].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[2], null);
  let ul_levels = [ctx[0], { role: "menubar" }];
  let ul_data = {};
  for (let i = 0; i < ul_levels.length; i += 1) {
    ul_data = assign(ul_data, ul_levels[i]);
  }
  let nav_levels = [ctx[0], ctx[1]];
  let nav_data = {};
  for (let i = 0; i < nav_levels.length; i += 1) {
    nav_data = assign(nav_data, nav_levels[i]);
  }
  return {
    c() {
      nav = element("nav");
      ul = element("ul");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      nav = claim_element(nodes, "NAV", {});
      var nav_nodes = children(nav);
      ul = claim_element(nav_nodes, "UL", { role: true });
      var ul_nodes = children(ul);
      if (default_slot)
        default_slot.l(ul_nodes);
      ul_nodes.forEach(detach);
      nav_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(ul, ul_data);
      toggle_class(ul, "bx--header__menu-bar", true);
      set_attributes(nav, nav_data);
      toggle_class(nav, "bx--header__nav", true);
    },
    m(target, anchor) {
      insert_hydration(target, nav, anchor);
      append_hydration(nav, ul);
      if (default_slot) {
        default_slot.m(ul, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 4)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[2], !current ? get_all_dirty_from_scope(ctx2[2]) : get_slot_changes(default_slot_template, ctx2[2], dirty, null), null);
        }
      }
      set_attributes(ul, ul_data = get_spread_update(ul_levels, [dirty & 1 && ctx2[0], { role: "menubar" }]));
      toggle_class(ul, "bx--header__menu-bar", true);
      set_attributes(nav, nav_data = get_spread_update(nav_levels, [
        dirty & 1 && ctx2[0],
        dirty & 2 && ctx2[1]
      ]));
      toggle_class(nav, "bx--header__nav", true);
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
      if (detaching)
        detach(nav);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance$d($$self, $$props, $$invalidate) {
  let props;
  const omit_props_names = [];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$new_props) => {
    $$invalidate(4, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(1, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("$$scope" in $$new_props)
      $$invalidate(2, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    $$invalidate(0, props = {
      "aria-label": $$props["aria-label"],
      "aria-labelledby": $$props["aria-labelledby"]
    });
  };
  $$props = exclude_internal_props($$props);
  return [props, $$restProps, $$scope, slots];
}
class HeaderNav extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$d, create_fragment$d, safe_not_equal, {});
  }
}
function create_fragment$c(ctx) {
  let li;
  let a;
  let span;
  let t;
  let a_rel_value;
  let a_aria_current_value;
  let mounted;
  let dispose;
  let a_levels = [
    { role: "menuitem" },
    { tabindex: "0" },
    { href: ctx[1] },
    {
      rel: a_rel_value = ctx[7].target === "_blank" ? "noopener noreferrer" : void 0
    },
    {
      "aria-current": a_aria_current_value = ctx[3] ? "page" : void 0
    },
    ctx[7]
  ];
  let a_data = {};
  for (let i = 0; i < a_levels.length; i += 1) {
    a_data = assign(a_data, a_levels[i]);
  }
  return {
    c() {
      li = element("li");
      a = element("a");
      span = element("span");
      t = text(ctx[2]);
      this.h();
    },
    l(nodes) {
      li = claim_element(nodes, "LI", { role: true });
      var li_nodes = children(li);
      a = claim_element(li_nodes, "A", {
        role: true,
        tabindex: true,
        href: true,
        rel: true,
        "aria-current": true
      });
      var a_nodes = children(a);
      span = claim_element(a_nodes, "SPAN", {});
      var span_nodes = children(span);
      t = claim_text(span_nodes, ctx[2]);
      span_nodes.forEach(detach);
      a_nodes.forEach(detach);
      li_nodes.forEach(detach);
      this.h();
    },
    h() {
      toggle_class(span, "bx--text-truncate--end", true);
      set_attributes(a, a_data);
      toggle_class(a, "bx--header__menu-item", true);
      attr(li, "role", "none");
    },
    m(target, anchor) {
      insert_hydration(target, li, anchor);
      append_hydration(li, a);
      append_hydration(a, span);
      append_hydration(span, t);
      ctx[16](a);
      if (!mounted) {
        dispose = [
          listen(a, "click", ctx[8]),
          listen(a, "mouseover", ctx[9]),
          listen(a, "mouseenter", ctx[10]),
          listen(a, "mouseleave", ctx[11]),
          listen(a, "keyup", ctx[12]),
          listen(a, "keydown", ctx[13]),
          listen(a, "focus", ctx[14]),
          listen(a, "blur", ctx[15]),
          listen(a, "blur", ctx[17])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & 4)
        set_data(t, ctx2[2]);
      set_attributes(a, a_data = get_spread_update(a_levels, [
        { role: "menuitem" },
        { tabindex: "0" },
        dirty & 2 && { href: ctx2[1] },
        dirty & 128 && a_rel_value !== (a_rel_value = ctx2[7].target === "_blank" ? "noopener noreferrer" : void 0) && { rel: a_rel_value },
        dirty & 8 && a_aria_current_value !== (a_aria_current_value = ctx2[3] ? "page" : void 0) && { "aria-current": a_aria_current_value },
        dirty & 128 && ctx2[7]
      ]));
      toggle_class(a, "bx--header__menu-item", true);
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(li);
      ctx[16](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$c($$self, $$props, $$invalidate) {
  const omit_props_names = ["href", "text", "isSelected", "ref"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { href = void 0 } = $$props;
  let { text: text2 = void 0 } = $$props;
  let { isSelected = false } = $$props;
  let { ref = null } = $$props;
  const id = "ccs-" + Math.random().toString(36);
  const ctx = getContext("HeaderNavMenu");
  let selectedItemIds = [];
  const unsubSelectedItems = ctx == null ? void 0 : ctx.selectedItems.subscribe((_selectedItems) => {
    $$invalidate(4, selectedItemIds = Object.keys(_selectedItems));
  });
  onMount(() => {
    return () => {
      if (unsubSelectedItems)
        unsubSelectedItems();
    };
  });
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
  function keyup_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keydown_handler(event) {
    bubble.call(this, $$self, event);
  }
  function focus_handler(event) {
    bubble.call(this, $$self, event);
  }
  function blur_handler(event) {
    bubble.call(this, $$self, event);
  }
  function a_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      ref = $$value;
      $$invalidate(0, ref);
    });
  }
  const blur_handler_1 = () => {
    if (selectedItemIds.indexOf(id) === selectedItemIds.length - 1) {
      ctx == null ? void 0 : ctx.closeMenu();
    }
  };
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(7, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("href" in $$new_props)
      $$invalidate(1, href = $$new_props.href);
    if ("text" in $$new_props)
      $$invalidate(2, text2 = $$new_props.text);
    if ("isSelected" in $$new_props)
      $$invalidate(3, isSelected = $$new_props.isSelected);
    if ("ref" in $$new_props)
      $$invalidate(0, ref = $$new_props.ref);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 8) {
      ctx == null ? void 0 : ctx.updateSelectedItems({ id, isSelected });
    }
  };
  return [
    ref,
    href,
    text2,
    isSelected,
    selectedItemIds,
    id,
    ctx,
    $$restProps,
    click_handler,
    mouseover_handler,
    mouseenter_handler,
    mouseleave_handler,
    keyup_handler,
    keydown_handler,
    focus_handler,
    blur_handler,
    a_binding,
    blur_handler_1
  ];
}
class HeaderNavItem extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$c, create_fragment$c, safe_not_equal, { href: 1, text: 2, isSelected: 3, ref: 0 });
  }
}
function create_if_block$4(ctx) {
  let li;
  let span;
  let current;
  const default_slot_template = ctx[2].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[1], null);
  return {
    c() {
      li = element("li");
      span = element("span");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      li = claim_element(nodes, "LI", { class: true });
      var li_nodes = children(li);
      span = claim_element(li_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      if (default_slot)
        default_slot.l(span_nodes);
      span_nodes.forEach(detach);
      li_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "svelte-1tbdbmc");
      attr(li, "class", "svelte-1tbdbmc");
    },
    m(target, anchor) {
      insert_hydration(target, li, anchor);
      append_hydration(li, span);
      if (default_slot) {
        default_slot.m(span, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 2)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[1], !current ? get_all_dirty_from_scope(ctx2[1]) : get_slot_changes(default_slot_template, ctx2[1], dirty, null), null);
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
      if (detaching)
        detach(li);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_fragment$b(ctx) {
  let t;
  let hr;
  let current;
  let if_block = ctx[0].default && create_if_block$4(ctx);
  return {
    c() {
      if (if_block)
        if_block.c();
      t = space();
      hr = element("hr");
      this.h();
    },
    l(nodes) {
      if (if_block)
        if_block.l(nodes);
      t = claim_space(nodes);
      hr = claim_element(nodes, "HR", {});
      this.h();
    },
    h() {
      toggle_class(hr, "bx--switcher__item--divider", true);
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, t, anchor);
      insert_hydration(target, hr, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (ctx2[0].default) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$4(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(t.parentNode, t);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
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
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(t);
      if (detaching)
        detach(hr);
    }
  };
}
function instance$b($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  const $$slots = compute_slots(slots);
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(1, $$scope = $$props2.$$scope);
  };
  return [$$slots, $$scope, slots];
}
class HeaderPanelDivider extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$b, create_fragment$b, safe_not_equal, {});
  }
}
function create_fragment$a(ctx) {
  let li;
  let a;
  let a_rel_value;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[4].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[3], null);
  let a_levels = [
    { href: ctx[1] },
    {
      rel: a_rel_value = ctx[2].target === "_blank" ? "noopener noreferrer" : void 0
    },
    ctx[2]
  ];
  let a_data = {};
  for (let i = 0; i < a_levels.length; i += 1) {
    a_data = assign(a_data, a_levels[i]);
  }
  return {
    c() {
      li = element("li");
      a = element("a");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      li = claim_element(nodes, "LI", {});
      var li_nodes = children(li);
      a = claim_element(li_nodes, "A", { href: true, rel: true });
      var a_nodes = children(a);
      if (default_slot)
        default_slot.l(a_nodes);
      a_nodes.forEach(detach);
      li_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(a, a_data);
      toggle_class(a, "bx--switcher__item-link", true);
      toggle_class(li, "bx--switcher__item", true);
    },
    m(target, anchor) {
      insert_hydration(target, li, anchor);
      append_hydration(li, a);
      if (default_slot) {
        default_slot.m(a, null);
      }
      ctx[6](a);
      current = true;
      if (!mounted) {
        dispose = listen(a, "click", ctx[5]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 8)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[3], !current ? get_all_dirty_from_scope(ctx2[3]) : get_slot_changes(default_slot_template, ctx2[3], dirty, null), null);
        }
      }
      set_attributes(a, a_data = get_spread_update(a_levels, [
        (!current || dirty & 2) && { href: ctx2[1] },
        (!current || dirty & 4 && a_rel_value !== (a_rel_value = ctx2[2].target === "_blank" ? "noopener noreferrer" : void 0)) && { rel: a_rel_value },
        dirty & 4 && ctx2[2]
      ]));
      toggle_class(a, "bx--switcher__item-link", true);
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
      if (detaching)
        detach(li);
      if (default_slot)
        default_slot.d(detaching);
      ctx[6](null);
      mounted = false;
      dispose();
    }
  };
}
function instance$a($$self, $$props, $$invalidate) {
  const omit_props_names = ["href", "ref"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { href = void 0 } = $$props;
  let { ref = null } = $$props;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function a_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      ref = $$value;
      $$invalidate(0, ref);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(2, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("href" in $$new_props)
      $$invalidate(1, href = $$new_props.href);
    if ("ref" in $$new_props)
      $$invalidate(0, ref = $$new_props.ref);
    if ("$$scope" in $$new_props)
      $$invalidate(3, $$scope = $$new_props.$$scope);
  };
  return [ref, href, $$restProps, $$scope, slots, click_handler, a_binding];
}
class HeaderPanelLink extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$a, create_fragment$a, safe_not_equal, { href: 1, ref: 0 });
  }
}
function create_fragment$9(ctx) {
  let ul;
  let current;
  const default_slot_template = ctx[1].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[0], null);
  return {
    c() {
      ul = element("ul");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      ul = claim_element(nodes, "UL", {});
      var ul_nodes = children(ul);
      if (default_slot)
        default_slot.l(ul_nodes);
      ul_nodes.forEach(detach);
      this.h();
    },
    h() {
      toggle_class(ul, "bx--switcher__item", true);
    },
    m(target, anchor) {
      insert_hydration(target, ul, anchor);
      if (default_slot) {
        default_slot.m(ul, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 1)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[0], !current ? get_all_dirty_from_scope(ctx2[0]) : get_slot_changes(default_slot_template, ctx2[0], dirty, null), null);
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
      if (detaching)
        detach(ul);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance$9($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(0, $$scope = $$props2.$$scope);
  };
  return [$$scope, slots];
}
class HeaderPanelLinks extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$9, create_fragment$9, safe_not_equal, {});
  }
}
function create_fragment$8(ctx) {
  let div;
  let current;
  const default_slot_template = ctx[1].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[0], null);
  return {
    c() {
      div = element("div");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      if (default_slot)
        default_slot.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      toggle_class(div, "bx--header__global", true);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 1)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[0], !current ? get_all_dirty_from_scope(ctx2[0]) : get_slot_changes(default_slot_template, ctx2[0], dirty, null), null);
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
      if (detaching)
        detach(div);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance$8($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(0, $$scope = $$props2.$$scope);
  };
  return [$$scope, slots];
}
class HeaderUtilities extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$8, create_fragment$8, safe_not_equal, {});
  }
}
function create_if_block$3(ctx) {
  let div;
  let mounted;
  let dispose;
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
      toggle_class(div, "bx--side-nav__overlay", true);
      toggle_class(div, "bx--side-nav__overlay-active", ctx[0]);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (!mounted) {
        dispose = listen(div, "click", ctx[11]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 1) {
        toggle_class(div, "bx--side-nav__overlay-active", ctx2[0]);
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$7(ctx) {
  let t;
  let nav;
  let nav_aria_hidden_value;
  let current;
  let mounted;
  let dispose;
  add_render_callback(ctx[10]);
  let if_block = !ctx[1] && create_if_block$3(ctx);
  const default_slot_template = ctx[9].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[8], null);
  let nav_levels = [
    {
      "aria-hidden": nav_aria_hidden_value = !ctx[0]
    },
    { "aria-label": ctx[3] },
    ctx[7]
  ];
  let nav_data = {};
  for (let i = 0; i < nav_levels.length; i += 1) {
    nav_data = assign(nav_data, nav_levels[i]);
  }
  return {
    c() {
      if (if_block)
        if_block.c();
      t = space();
      nav = element("nav");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      if (if_block)
        if_block.l(nodes);
      t = claim_space(nodes);
      nav = claim_element(nodes, "NAV", { "aria-hidden": true, "aria-label": true });
      var nav_nodes = children(nav);
      if (default_slot)
        default_slot.l(nav_nodes);
      nav_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(nav, nav_data);
      toggle_class(nav, "bx--side-nav__navigation", true);
      toggle_class(nav, "bx--side-nav", true);
      toggle_class(nav, "bx--side-nav--ux", true);
      toggle_class(nav, "bx--side-nav--expanded", ctx[2] && ctx[5] >= ctx[4] ? false : ctx[0]);
      toggle_class(nav, "bx--side-nav--collapsed", !ctx[0] && !ctx[2]);
      toggle_class(nav, "bx--side-nav--rail", ctx[2]);
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, t, anchor);
      insert_hydration(target, nav, anchor);
      if (default_slot) {
        default_slot.m(nav, null);
      }
      current = true;
      if (!mounted) {
        dispose = listen(window, "resize", ctx[10]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (!ctx2[1]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$3(ctx2);
          if_block.c();
          if_block.m(t.parentNode, t);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 256)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[8], !current ? get_all_dirty_from_scope(ctx2[8]) : get_slot_changes(default_slot_template, ctx2[8], dirty, null), null);
        }
      }
      set_attributes(nav, nav_data = get_spread_update(nav_levels, [
        (!current || dirty & 1 && nav_aria_hidden_value !== (nav_aria_hidden_value = !ctx2[0])) && { "aria-hidden": nav_aria_hidden_value },
        (!current || dirty & 8) && { "aria-label": ctx2[3] },
        dirty & 128 && ctx2[7]
      ]));
      toggle_class(nav, "bx--side-nav__navigation", true);
      toggle_class(nav, "bx--side-nav", true);
      toggle_class(nav, "bx--side-nav--ux", true);
      toggle_class(nav, "bx--side-nav--expanded", ctx2[2] && ctx2[5] >= ctx2[4] ? false : ctx2[0]);
      toggle_class(nav, "bx--side-nav--collapsed", !ctx2[0] && !ctx2[2]);
      toggle_class(nav, "bx--side-nav--rail", ctx2[2]);
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
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(t);
      if (detaching)
        detach(nav);
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      dispose();
    }
  };
}
function instance$7($$self, $$props, $$invalidate) {
  const omit_props_names = ["fixed", "rail", "ariaLabel", "isOpen", "expansionBreakpoint"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { fixed = false } = $$props;
  let { rail = false } = $$props;
  let { ariaLabel = void 0 } = $$props;
  let { isOpen = false } = $$props;
  let { expansionBreakpoint = 1056 } = $$props;
  const dispatch = createEventDispatcher();
  let winWidth = void 0;
  onMount(() => {
    shouldRenderHamburgerMenu.set(true);
    return () => shouldRenderHamburgerMenu.set(false);
  });
  function onwindowresize() {
    $$invalidate(5, winWidth = window.innerWidth);
  }
  const click_handler = () => {
    dispatch("click:overlay");
    $$invalidate(0, isOpen = false);
  };
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(7, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("fixed" in $$new_props)
      $$invalidate(1, fixed = $$new_props.fixed);
    if ("rail" in $$new_props)
      $$invalidate(2, rail = $$new_props.rail);
    if ("ariaLabel" in $$new_props)
      $$invalidate(3, ariaLabel = $$new_props.ariaLabel);
    if ("isOpen" in $$new_props)
      $$invalidate(0, isOpen = $$new_props.isOpen);
    if ("expansionBreakpoint" in $$new_props)
      $$invalidate(4, expansionBreakpoint = $$new_props.expansionBreakpoint);
    if ("$$scope" in $$new_props)
      $$invalidate(8, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      dispatch(isOpen ? "open" : "close");
    }
  };
  return [
    isOpen,
    fixed,
    rail,
    ariaLabel,
    expansionBreakpoint,
    winWidth,
    dispatch,
    $$restProps,
    $$scope,
    slots,
    onwindowresize,
    click_handler
  ];
}
class SideNav extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$7, create_fragment$7, safe_not_equal, {
      fixed: 1,
      rail: 2,
      ariaLabel: 3,
      isOpen: 0,
      expansionBreakpoint: 4
    });
  }
}
function create_fragment$6(ctx) {
  let ul;
  let current;
  const default_slot_template = ctx[1].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[0], null);
  return {
    c() {
      ul = element("ul");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      ul = claim_element(nodes, "UL", {});
      var ul_nodes = children(ul);
      if (default_slot)
        default_slot.l(ul_nodes);
      ul_nodes.forEach(detach);
      this.h();
    },
    h() {
      toggle_class(ul, "bx--side-nav__items", true);
    },
    m(target, anchor) {
      insert_hydration(target, ul, anchor);
      if (default_slot) {
        default_slot.m(ul, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 1)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[0], !current ? get_all_dirty_from_scope(ctx2[0]) : get_slot_changes(default_slot_template, ctx2[0], dirty, null), null);
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
      if (detaching)
        detach(ul);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance$6($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(0, $$scope = $$props2.$$scope);
  };
  return [$$scope, slots];
}
class SideNavItems extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$6, create_fragment$6, safe_not_equal, {});
  }
}
function fallback_block$1(ctx) {
  let t;
  return {
    c() {
      t = text(ctx[3]);
    },
    l(nodes) {
      t = claim_text(nodes, ctx[3]);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 8)
        set_data(t, ctx2[3]);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment$5(ctx) {
  let li;
  let a;
  let span;
  let a_aria_current_value;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[6].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[5], null);
  const default_slot_or_fallback = default_slot || fallback_block$1(ctx);
  let a_levels = [
    {
      "aria-current": a_aria_current_value = ctx[1] ? "page" : void 0
    },
    { href: ctx[2] },
    ctx[4]
  ];
  let a_data = {};
  for (let i = 0; i < a_levels.length; i += 1) {
    a_data = assign(a_data, a_levels[i]);
  }
  return {
    c() {
      li = element("li");
      a = element("a");
      span = element("span");
      if (default_slot_or_fallback)
        default_slot_or_fallback.c();
      this.h();
    },
    l(nodes) {
      li = claim_element(nodes, "LI", {});
      var li_nodes = children(li);
      a = claim_element(li_nodes, "A", { "aria-current": true, href: true });
      var a_nodes = children(a);
      span = claim_element(a_nodes, "SPAN", {});
      var span_nodes = children(span);
      if (default_slot_or_fallback)
        default_slot_or_fallback.l(span_nodes);
      span_nodes.forEach(detach);
      a_nodes.forEach(detach);
      li_nodes.forEach(detach);
      this.h();
    },
    h() {
      toggle_class(span, "bx--side-nav__link-text", true);
      set_attributes(a, a_data);
      toggle_class(a, "bx--side-nav__link", true);
      toggle_class(li, "bx--side-nav__menu-item", true);
    },
    m(target, anchor) {
      insert_hydration(target, li, anchor);
      append_hydration(li, a);
      append_hydration(a, span);
      if (default_slot_or_fallback) {
        default_slot_or_fallback.m(span, null);
      }
      ctx[8](a);
      current = true;
      if (!mounted) {
        dispose = listen(a, "click", ctx[7]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 32)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[5], !current ? get_all_dirty_from_scope(ctx2[5]) : get_slot_changes(default_slot_template, ctx2[5], dirty, null), null);
        }
      } else {
        if (default_slot_or_fallback && default_slot_or_fallback.p && (!current || dirty & 8)) {
          default_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
      set_attributes(a, a_data = get_spread_update(a_levels, [
        (!current || dirty & 2 && a_aria_current_value !== (a_aria_current_value = ctx2[1] ? "page" : void 0)) && { "aria-current": a_aria_current_value },
        (!current || dirty & 4) && { href: ctx2[2] },
        dirty & 16 && ctx2[4]
      ]));
      toggle_class(a, "bx--side-nav__link", true);
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(li);
      if (default_slot_or_fallback)
        default_slot_or_fallback.d(detaching);
      ctx[8](null);
      mounted = false;
      dispose();
    }
  };
}
function instance$5($$self, $$props, $$invalidate) {
  const omit_props_names = ["isSelected", "href", "text", "ref"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { isSelected = false } = $$props;
  let { href = void 0 } = $$props;
  let { text: text2 = void 0 } = $$props;
  let { ref = null } = $$props;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function a_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      ref = $$value;
      $$invalidate(0, ref);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(4, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("isSelected" in $$new_props)
      $$invalidate(1, isSelected = $$new_props.isSelected);
    if ("href" in $$new_props)
      $$invalidate(2, href = $$new_props.href);
    if ("text" in $$new_props)
      $$invalidate(3, text2 = $$new_props.text);
    if ("ref" in $$new_props)
      $$invalidate(0, ref = $$new_props.ref);
    if ("$$scope" in $$new_props)
      $$invalidate(5, $$scope = $$new_props.$$scope);
  };
  return [
    ref,
    isSelected,
    href,
    text2,
    $$restProps,
    $$scope,
    slots,
    click_handler,
    a_binding
  ];
}
class SideNavMenuItem extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$5, create_fragment$5, safe_not_equal, { isSelected: 1, href: 2, text: 3, ref: 0 });
  }
}
function create_fragment$4(ctx) {
  let main;
  let current;
  const default_slot_template = ctx[3].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[2], null);
  let main_levels = [{ id: ctx[0] }, ctx[1]];
  let main_data = {};
  for (let i = 0; i < main_levels.length; i += 1) {
    main_data = assign(main_data, main_levels[i]);
  }
  return {
    c() {
      main = element("main");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      main = claim_element(nodes, "MAIN", { id: true });
      var main_nodes = children(main);
      if (default_slot)
        default_slot.l(main_nodes);
      main_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(main, main_data);
      toggle_class(main, "bx--content", true);
    },
    m(target, anchor) {
      insert_hydration(target, main, anchor);
      if (default_slot) {
        default_slot.m(main, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 4)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[2], !current ? get_all_dirty_from_scope(ctx2[2]) : get_slot_changes(default_slot_template, ctx2[2], dirty, null), null);
        }
      }
      set_attributes(main, main_data = get_spread_update(main_levels, [
        (!current || dirty & 1) && { id: ctx2[0] },
        dirty & 2 && ctx2[1]
      ]));
      toggle_class(main, "bx--content", true);
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
      if (detaching)
        detach(main);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance$4($$self, $$props, $$invalidate) {
  const omit_props_names = ["id"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { id = "main-content" } = $$props;
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(1, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("id" in $$new_props)
      $$invalidate(0, id = $$new_props.id);
    if ("$$scope" in $$new_props)
      $$invalidate(2, $$scope = $$new_props.$$scope);
  };
  return [id, $$restProps, $$scope, slots];
}
class Content extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$4, safe_not_equal, { id: 0 });
  }
}
function fallback_block(ctx) {
  let t;
  return {
    c() {
      t = text("Skip to main content");
    },
    l(nodes) {
      t = claim_text(nodes, "Skip to main content");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment$3(ctx) {
  let a;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[4].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[3], null);
  const default_slot_or_fallback = default_slot || fallback_block();
  let a_levels = [
    { href: ctx[0] },
    { tabindex: ctx[1] },
    ctx[2]
  ];
  let a_data = {};
  for (let i = 0; i < a_levels.length; i += 1) {
    a_data = assign(a_data, a_levels[i]);
  }
  return {
    c() {
      a = element("a");
      if (default_slot_or_fallback)
        default_slot_or_fallback.c();
      this.h();
    },
    l(nodes) {
      a = claim_element(nodes, "A", { href: true, tabindex: true });
      var a_nodes = children(a);
      if (default_slot_or_fallback)
        default_slot_or_fallback.l(a_nodes);
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(a, a_data);
      toggle_class(a, "bx--skip-to-content", true);
    },
    m(target, anchor) {
      insert_hydration(target, a, anchor);
      if (default_slot_or_fallback) {
        default_slot_or_fallback.m(a, null);
      }
      current = true;
      if (!mounted) {
        dispose = listen(a, "click", ctx[5]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 8)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[3], !current ? get_all_dirty_from_scope(ctx2[3]) : get_slot_changes(default_slot_template, ctx2[3], dirty, null), null);
        }
      }
      set_attributes(a, a_data = get_spread_update(a_levels, [
        (!current || dirty & 1) && { href: ctx2[0] },
        (!current || dirty & 2) && { tabindex: ctx2[1] },
        dirty & 4 && ctx2[2]
      ]));
      toggle_class(a, "bx--skip-to-content", true);
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(a);
      if (default_slot_or_fallback)
        default_slot_or_fallback.d(detaching);
      mounted = false;
      dispose();
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  const omit_props_names = ["href", "tabindex"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { href = "#main-content" } = $$props;
  let { tabindex = "0" } = $$props;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(2, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("href" in $$new_props)
      $$invalidate(0, href = $$new_props.href);
    if ("tabindex" in $$new_props)
      $$invalidate(1, tabindex = $$new_props.tabindex);
    if ("$$scope" in $$new_props)
      $$invalidate(3, $$scope = $$new_props.$$scope);
  };
  return [href, tabindex, $$restProps, $$scope, slots, click_handler];
}
class SkipToContent extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, { href: 0, tabindex: 1 });
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
      path1 = claim_svg_element(svg_nodes, "path", { d: true });
      children(path1).forEach(detach);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path0, "d", "M16,8a5,5,0,1,0,5,5A5,5,0,0,0,16,8Z");
      attr(path1, "d", "M16,2A14,14,0,1,0,30,16,14.0158,14.0158,0,0,0,16,2Zm7.9925,22.9258A5.0016,5.0016,0,0,0,19,20H13a5.0016,5.0016,0,0,0-4.9925,4.9258,12,12,0,1,1,15.985,0Z");
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
class UserAvatarFilledAlt extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { size: 0, title: 1 });
  }
}
client.disable_scroll_handling;
const goto = client.goto;
client.invalidate;
client.prefetch;
client.prefetch_routes;
client.before_navigate;
client.after_navigate;
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
  let path0;
  let path1;
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
      path1 = claim_svg_element(svg_nodes, "path", { d: true });
      children(path1).forEach(detach);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path0, "d", "M6,30H18a2.0023,2.0023,0,0,0,2-2V25H18v3H6V4H18V7h2V4a2.0023,2.0023,0,0,0-2-2H6A2.0023,2.0023,0,0,0,4,4V28A2.0023,2.0023,0,0,0,6,30Z");
      attr(path1, "d", "M20.586 20.586L24.172 17 10 17 10 15 24.172 15 20.586 11.414 22 10 28 16 22 22 20.586 20.586z");
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
          if_block = create_if_block$1(ctx2);
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
class Logout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { size: 0, title: 1 });
  }
}
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function create_default_slot_13(ctx) {
  let headernavitem0;
  let t0;
  let headernavitem1;
  let t1;
  let headernavitem2;
  let t2;
  let headernavitem3;
  let current;
  headernavitem0 = new HeaderNavItem({
    props: {
      isSelected: ctx[2] === "/myblog",
      href: "myblog",
      text: "My Blog"
    }
  });
  headernavitem1 = new HeaderNavItem({
    props: {
      isSelected: ctx[2] === "/otherblog",
      href: "otherblog",
      text: "Other Blogs"
    }
  });
  headernavitem2 = new HeaderNavItem({
    props: {
      isSelected: ctx[2] === "/createpost",
      href: "createpost",
      text: "Add a post for my Blog"
    }
  });
  headernavitem3 = new HeaderNavItem({
    props: { text: "This app was inspired by BXB8508" }
  });
  return {
    c() {
      create_component(headernavitem0.$$.fragment);
      t0 = space();
      create_component(headernavitem1.$$.fragment);
      t1 = space();
      create_component(headernavitem2.$$.fragment);
      t2 = space();
      create_component(headernavitem3.$$.fragment);
    },
    l(nodes) {
      claim_component(headernavitem0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(headernavitem1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(headernavitem2.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(headernavitem3.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(headernavitem0, target, anchor);
      insert_hydration(target, t0, anchor);
      mount_component(headernavitem1, target, anchor);
      insert_hydration(target, t1, anchor);
      mount_component(headernavitem2, target, anchor);
      insert_hydration(target, t2, anchor);
      mount_component(headernavitem3, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const headernavitem0_changes = {};
      if (dirty & 4)
        headernavitem0_changes.isSelected = ctx2[2] === "/myblog";
      headernavitem0.$set(headernavitem0_changes);
      const headernavitem1_changes = {};
      if (dirty & 4)
        headernavitem1_changes.isSelected = ctx2[2] === "/otherblog";
      headernavitem1.$set(headernavitem1_changes);
      const headernavitem2_changes = {};
      if (dirty & 4)
        headernavitem2_changes.isSelected = ctx2[2] === "/createpost";
      headernavitem2.$set(headernavitem2_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(headernavitem0.$$.fragment, local);
      transition_in(headernavitem1.$$.fragment, local);
      transition_in(headernavitem2.$$.fragment, local);
      transition_in(headernavitem3.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(headernavitem0.$$.fragment, local);
      transition_out(headernavitem1.$$.fragment, local);
      transition_out(headernavitem2.$$.fragment, local);
      transition_out(headernavitem3.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(headernavitem0, detaching);
      if (detaching)
        detach(t0);
      destroy_component(headernavitem1, detaching);
      if (detaching)
        detach(t1);
      destroy_component(headernavitem2, detaching);
      if (detaching)
        detach(t2);
      destroy_component(headernavitem3, detaching);
    }
  };
}
function create_default_slot_12(ctx) {
  let t0;
  let t1_value = ctx[3].name + "";
  let t1;
  return {
    c() {
      t0 = text("User: ");
      t1 = text(t1_value);
    },
    l(nodes) {
      t0 = claim_text(nodes, "User: ");
      t1 = claim_text(nodes, t1_value);
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, t1, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 8 && t1_value !== (t1_value = ctx2[3].name + ""))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(t1);
    }
  };
}
function create_default_slot_11(ctx) {
  let t0;
  let t1_value = ctx[3].email + "";
  let t1;
  return {
    c() {
      t0 = text("Email: ");
      t1 = text(t1_value);
    },
    l(nodes) {
      t0 = claim_text(nodes, "Email: ");
      t1 = claim_text(nodes, t1_value);
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, t1, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 8 && t1_value !== (t1_value = ctx2[3].email + ""))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(t1);
    }
  };
}
function create_default_slot_10(ctx) {
  let t;
  return {
    c() {
      t = text("View my Blog");
    },
    l(nodes) {
      t = claim_text(nodes, "View my Blog");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_9(ctx) {
  let link;
  let br0;
  let br1;
  let current;
  link = new Link({
    props: {
      href: "myblogs",
      $$slots: { default: [create_default_slot_10] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(link.$$.fragment);
      br0 = element("br");
      br1 = element("br");
    },
    l(nodes) {
      claim_component(link.$$.fragment, nodes);
      br0 = claim_element(nodes, "BR", {});
      br1 = claim_element(nodes, "BR", {});
    },
    m(target, anchor) {
      mount_component(link, target, anchor);
      insert_hydration(target, br0, anchor);
      insert_hydration(target, br1, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const link_changes = {};
      if (dirty & 1024) {
        link_changes.$$scope = { dirty, ctx: ctx2 };
      }
      link.$set(link_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(link.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(link.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(link, detaching);
      if (detaching)
        detach(br0);
      if (detaching)
        detach(br1);
    }
  };
}
function create_default_slot_8(ctx) {
  let button;
  let current;
  button = new Button({
    props: { iconDescription: "Logout", icon: Logout }
  });
  button.$on("click", ctx[4]);
  return {
    c() {
      create_component(button.$$.fragment);
    },
    l(nodes) {
      claim_component(button.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(button, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(button, detaching);
    }
  };
}
function create_default_slot_7(ctx) {
  let headerpanellink0;
  let t0;
  let headerpanellink1;
  let t1;
  let headerpaneldivider;
  let t2;
  let headerpanellink2;
  let t3;
  let headerpanellink3;
  let current;
  headerpanellink0 = new HeaderPanelLink({
    props: {
      $$slots: { default: [create_default_slot_12] },
      $$scope: { ctx }
    }
  });
  headerpanellink1 = new HeaderPanelLink({
    props: {
      $$slots: { default: [create_default_slot_11] },
      $$scope: { ctx }
    }
  });
  headerpaneldivider = new HeaderPanelDivider({});
  headerpanellink2 = new HeaderPanelLink({
    props: {
      $$slots: { default: [create_default_slot_9] },
      $$scope: { ctx }
    }
  });
  headerpanellink3 = new HeaderPanelLink({
    props: {
      $$slots: { default: [create_default_slot_8] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(headerpanellink0.$$.fragment);
      t0 = space();
      create_component(headerpanellink1.$$.fragment);
      t1 = space();
      create_component(headerpaneldivider.$$.fragment);
      t2 = space();
      create_component(headerpanellink2.$$.fragment);
      t3 = space();
      create_component(headerpanellink3.$$.fragment);
    },
    l(nodes) {
      claim_component(headerpanellink0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(headerpanellink1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(headerpaneldivider.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(headerpanellink2.$$.fragment, nodes);
      t3 = claim_space(nodes);
      claim_component(headerpanellink3.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(headerpanellink0, target, anchor);
      insert_hydration(target, t0, anchor);
      mount_component(headerpanellink1, target, anchor);
      insert_hydration(target, t1, anchor);
      mount_component(headerpaneldivider, target, anchor);
      insert_hydration(target, t2, anchor);
      mount_component(headerpanellink2, target, anchor);
      insert_hydration(target, t3, anchor);
      mount_component(headerpanellink3, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const headerpanellink0_changes = {};
      if (dirty & 1032) {
        headerpanellink0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      headerpanellink0.$set(headerpanellink0_changes);
      const headerpanellink1_changes = {};
      if (dirty & 1032) {
        headerpanellink1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      headerpanellink1.$set(headerpanellink1_changes);
      const headerpanellink2_changes = {};
      if (dirty & 1024) {
        headerpanellink2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      headerpanellink2.$set(headerpanellink2_changes);
      const headerpanellink3_changes = {};
      if (dirty & 1024) {
        headerpanellink3_changes.$$scope = { dirty, ctx: ctx2 };
      }
      headerpanellink3.$set(headerpanellink3_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(headerpanellink0.$$.fragment, local);
      transition_in(headerpanellink1.$$.fragment, local);
      transition_in(headerpaneldivider.$$.fragment, local);
      transition_in(headerpanellink2.$$.fragment, local);
      transition_in(headerpanellink3.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(headerpanellink0.$$.fragment, local);
      transition_out(headerpanellink1.$$.fragment, local);
      transition_out(headerpaneldivider.$$.fragment, local);
      transition_out(headerpanellink2.$$.fragment, local);
      transition_out(headerpanellink3.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(headerpanellink0, detaching);
      if (detaching)
        detach(t0);
      destroy_component(headerpanellink1, detaching);
      if (detaching)
        detach(t1);
      destroy_component(headerpaneldivider, detaching);
      if (detaching)
        detach(t2);
      destroy_component(headerpanellink2, detaching);
      if (detaching)
        detach(t3);
      destroy_component(headerpanellink3, detaching);
    }
  };
}
function create_default_slot_6(ctx) {
  let headerpanellinks;
  let current;
  headerpanellinks = new HeaderPanelLinks({
    props: {
      $$slots: { default: [create_default_slot_7] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(headerpanellinks.$$.fragment);
    },
    l(nodes) {
      claim_component(headerpanellinks.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(headerpanellinks, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const headerpanellinks_changes = {};
      if (dirty & 1032) {
        headerpanellinks_changes.$$scope = { dirty, ctx: ctx2 };
      }
      headerpanellinks.$set(headerpanellinks_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(headerpanellinks.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(headerpanellinks.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(headerpanellinks, detaching);
    }
  };
}
function create_default_slot_5(ctx) {
  let headeraction;
  let updating_isOpen;
  let current;
  function headeraction_isOpen_binding(value) {
    ctx[7](value);
  }
  let headeraction_props = {
    icon: UserAvatarFilledAlt,
    closeIcon: UserAvatarFilledAlt,
    $$slots: { default: [create_default_slot_6] },
    $$scope: { ctx }
  };
  if (ctx[1] !== void 0) {
    headeraction_props.isOpen = ctx[1];
  }
  headeraction = new HeaderAction({ props: headeraction_props });
  binding_callbacks.push(() => bind(headeraction, "isOpen", headeraction_isOpen_binding));
  return {
    c() {
      create_component(headeraction.$$.fragment);
    },
    l(nodes) {
      claim_component(headeraction.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(headeraction, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const headeraction_changes = {};
      if (dirty & 1032) {
        headeraction_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_isOpen && dirty & 2) {
        updating_isOpen = true;
        headeraction_changes.isOpen = ctx2[1];
        add_flush_callback(() => updating_isOpen = false);
      }
      headeraction.$set(headeraction_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(headeraction.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(headeraction.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(headeraction, detaching);
    }
  };
}
function create_default_slot_4(ctx) {
  let t;
  return {
    c() {
      t = text("This app was inspired by my BFF");
    },
    l(nodes) {
      t = claim_text(nodes, "This app was inspired by my BFF");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_3(ctx) {
  let sidenavmenuitem0;
  let t0;
  let sidenavmenuitem1;
  let t1;
  let sidenavmenuitem2;
  let t2;
  let sidenavmenuitem3;
  let current;
  sidenavmenuitem0 = new SideNavMenuItem({
    props: { href: "myblog", text: "My Blog" }
  });
  sidenavmenuitem1 = new SideNavMenuItem({
    props: { href: "otherblog", text: "Other Blogs" }
  });
  sidenavmenuitem2 = new SideNavMenuItem({
    props: {
      href: "createpost",
      text: "Add a post for my Blog"
    }
  });
  sidenavmenuitem3 = new SideNavMenuItem({
    props: {
      $$slots: { default: [create_default_slot_4] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(sidenavmenuitem0.$$.fragment);
      t0 = space();
      create_component(sidenavmenuitem1.$$.fragment);
      t1 = space();
      create_component(sidenavmenuitem2.$$.fragment);
      t2 = space();
      create_component(sidenavmenuitem3.$$.fragment);
    },
    l(nodes) {
      claim_component(sidenavmenuitem0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(sidenavmenuitem1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(sidenavmenuitem2.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(sidenavmenuitem3.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(sidenavmenuitem0, target, anchor);
      insert_hydration(target, t0, anchor);
      mount_component(sidenavmenuitem1, target, anchor);
      insert_hydration(target, t1, anchor);
      mount_component(sidenavmenuitem2, target, anchor);
      insert_hydration(target, t2, anchor);
      mount_component(sidenavmenuitem3, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const sidenavmenuitem3_changes = {};
      if (dirty & 1024) {
        sidenavmenuitem3_changes.$$scope = { dirty, ctx: ctx2 };
      }
      sidenavmenuitem3.$set(sidenavmenuitem3_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(sidenavmenuitem0.$$.fragment, local);
      transition_in(sidenavmenuitem1.$$.fragment, local);
      transition_in(sidenavmenuitem2.$$.fragment, local);
      transition_in(sidenavmenuitem3.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(sidenavmenuitem0.$$.fragment, local);
      transition_out(sidenavmenuitem1.$$.fragment, local);
      transition_out(sidenavmenuitem2.$$.fragment, local);
      transition_out(sidenavmenuitem3.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(sidenavmenuitem0, detaching);
      if (detaching)
        detach(t0);
      destroy_component(sidenavmenuitem1, detaching);
      if (detaching)
        detach(t1);
      destroy_component(sidenavmenuitem2, detaching);
      if (detaching)
        detach(t2);
      destroy_component(sidenavmenuitem3, detaching);
    }
  };
}
function create_default_slot_2(ctx) {
  let sidenavitems;
  let current;
  sidenavitems = new SideNavItems({
    props: {
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(sidenavitems.$$.fragment);
    },
    l(nodes) {
      claim_component(sidenavitems.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(sidenavitems, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const sidenavitems_changes = {};
      if (dirty & 1024) {
        sidenavitems_changes.$$scope = { dirty, ctx: ctx2 };
      }
      sidenavitems.$set(sidenavitems_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(sidenavitems.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(sidenavitems.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(sidenavitems, detaching);
    }
  };
}
function create_default_slot_1(ctx) {
  let headernav;
  let t0;
  let headerutilities;
  let t1;
  let sidenav;
  let updating_isOpen;
  let current;
  headernav = new HeaderNav({
    props: {
      $$slots: { default: [create_default_slot_13] },
      $$scope: { ctx }
    }
  });
  headerutilities = new HeaderUtilities({
    props: {
      $$slots: { default: [create_default_slot_5] },
      $$scope: { ctx }
    }
  });
  function sidenav_isOpen_binding(value) {
    ctx[8](value);
  }
  let sidenav_props = {
    $$slots: { default: [create_default_slot_2] },
    $$scope: { ctx }
  };
  if (ctx[0] !== void 0) {
    sidenav_props.isOpen = ctx[0];
  }
  sidenav = new SideNav({ props: sidenav_props });
  binding_callbacks.push(() => bind(sidenav, "isOpen", sidenav_isOpen_binding));
  return {
    c() {
      create_component(headernav.$$.fragment);
      t0 = space();
      create_component(headerutilities.$$.fragment);
      t1 = space();
      create_component(sidenav.$$.fragment);
    },
    l(nodes) {
      claim_component(headernav.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(headerutilities.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(sidenav.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(headernav, target, anchor);
      insert_hydration(target, t0, anchor);
      mount_component(headerutilities, target, anchor);
      insert_hydration(target, t1, anchor);
      mount_component(sidenav, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const headernav_changes = {};
      if (dirty & 1028) {
        headernav_changes.$$scope = { dirty, ctx: ctx2 };
      }
      headernav.$set(headernav_changes);
      const headerutilities_changes = {};
      if (dirty & 1034) {
        headerutilities_changes.$$scope = { dirty, ctx: ctx2 };
      }
      headerutilities.$set(headerutilities_changes);
      const sidenav_changes = {};
      if (dirty & 1024) {
        sidenav_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_isOpen && dirty & 1) {
        updating_isOpen = true;
        sidenav_changes.isOpen = ctx2[0];
        add_flush_callback(() => updating_isOpen = false);
      }
      sidenav.$set(sidenav_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(headernav.$$.fragment, local);
      transition_in(headerutilities.$$.fragment, local);
      transition_in(sidenav.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(headernav.$$.fragment, local);
      transition_out(headerutilities.$$.fragment, local);
      transition_out(sidenav.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(headernav, detaching);
      if (detaching)
        detach(t0);
      destroy_component(headerutilities, detaching);
      if (detaching)
        detach(t1);
      destroy_component(sidenav, detaching);
    }
  };
}
function create_skip_to_content_slot(ctx) {
  let skiptocontent;
  let current;
  skiptocontent = new SkipToContent({});
  return {
    c() {
      create_component(skiptocontent.$$.fragment);
    },
    l(nodes) {
      claim_component(skiptocontent.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(skiptocontent, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(skiptocontent.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(skiptocontent.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(skiptocontent, detaching);
    }
  };
}
function create_else_block(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true,
        "data-longtitle": true,
        "data-onsuccess": true
      });
      children(div).forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "g-signin2");
      attr(div, "data-longtitle", "true");
      attr(div, "data-onsuccess", "onSignIn");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_if_block(ctx) {
  let current;
  const default_slot_template = ctx[6].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[10], null);
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
        if (default_slot.p && (!current || dirty & 1024)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[10], !current ? get_all_dirty_from_scope(ctx2[10]) : get_slot_changes(default_slot_template, ctx2[10], dirty, null), null);
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
function create_default_slot(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[3]["userLoggedIn"])
      return 0;
    return 1;
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
function create_fragment(ctx) {
  let header;
  let updating_isSideNavOpen;
  let t0;
  let script;
  let script_src_value;
  let t1;
  let content;
  let current;
  function header_isSideNavOpen_binding(value) {
    ctx[9](value);
  }
  let header_props = {
    company: "SXS0130",
    platformName: "Blog",
    persistentHamburgerMenu: "true",
    $$slots: {
      "skip-to-content": [create_skip_to_content_slot],
      default: [create_default_slot_1]
    },
    $$scope: { ctx }
  };
  if (ctx[0] !== void 0) {
    header_props.isSideNavOpen = ctx[0];
  }
  header = new Header({ props: header_props });
  binding_callbacks.push(() => bind(header, "isSideNavOpen", header_isSideNavOpen_binding));
  content = new Content({
    props: {
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(header.$$.fragment);
      t0 = space();
      script = element("script");
      t1 = space();
      create_component(content.$$.fragment);
      this.h();
    },
    l(nodes) {
      claim_component(header.$$.fragment, nodes);
      t0 = claim_space(nodes);
      const head_nodes = query_selector_all('[data-svelte="svelte-12r421i"]', document.head);
      script = claim_element(head_nodes, "SCRIPT", { src: true });
      var script_nodes = children(script);
      script_nodes.forEach(detach);
      head_nodes.forEach(detach);
      t1 = claim_space(nodes);
      claim_component(content.$$.fragment, nodes);
      this.h();
    },
    h() {
      if (!src_url_equal(script.src, script_src_value = "https://apis.google.com/js/platform.js?onload=onLoadCallback"))
        attr(script, "src", script_src_value);
      script.async = true;
      script.defer = true;
    },
    m(target, anchor) {
      mount_component(header, target, anchor);
      insert_hydration(target, t0, anchor);
      append_hydration(document.head, script);
      insert_hydration(target, t1, anchor);
      mount_component(content, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const header_changes = {};
      if (dirty & 1039) {
        header_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_isSideNavOpen && dirty & 1) {
        updating_isSideNavOpen = true;
        header_changes.isSideNavOpen = ctx2[0];
        add_flush_callback(() => updating_isSideNavOpen = false);
      }
      header.$set(header_changes);
      const content_changes = {};
      if (dirty & 1032) {
        content_changes.$$scope = { dirty, ctx: ctx2 };
      }
      content.$set(content_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(header.$$.fragment, local);
      transition_in(content.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(header.$$.fragment, local);
      transition_out(content.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(header, detaching);
      if (detaching)
        detach(t0);
      detach(script);
      if (detaching)
        detach(t1);
      destroy_component(content, detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let currentUrl;
  let $user;
  let $page;
  component_subscribe($$self, user, ($$value) => $$invalidate(3, $user = $$value));
  component_subscribe($$self, page, ($$value) => $$invalidate(5, $page = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  window.onSignIn = (googleUser) => {
    const profile = googleUser.getBasicProfile();
    var ID = profile.getId();
    var name = profile.getName();
    var imageUrl = profile.getImageUrl();
    var email = profile.getEmail();
    user.set({
      name,
      email,
      imageUrl,
      ID,
      userLoggedIn: true
    });
    console.log("User updated", $user);
    goto("myblog", { replaceState: true });
  };
  let userLoggedIn = false;
  window.onLoadCallback = () => {
    userLoggedIn = gapi.auth2.getAuthInstance().isSignedIn.get();
    console.log(userLoggedIn);
    if (userLoggedIn) {
      console.log(GoogleAuth.currentUser.get());
    }
  };
  let isSideNavOpen = false;
  let isOpen1 = false;
  function logout() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      set_store_value(user, $user["userLoggedIn"] = false, $user);
      $$invalidate(1, isOpen1 = false);
      goto("", { replaceState: true });
    });
  }
  function headeraction_isOpen_binding(value) {
    isOpen1 = value;
    $$invalidate(1, isOpen1);
  }
  function sidenav_isOpen_binding(value) {
    isSideNavOpen = value;
    $$invalidate(0, isSideNavOpen);
  }
  function header_isSideNavOpen_binding(value) {
    isSideNavOpen = value;
    $$invalidate(0, isSideNavOpen);
  }
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(10, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 32) {
      $$invalidate(2, currentUrl = $page.url.pathname);
    }
  };
  return [
    isSideNavOpen,
    isOpen1,
    currentUrl,
    $user,
    logout,
    $page,
    slots,
    headeraction_isOpen_binding,
    sidenav_isOpen_binding,
    header_isSideNavOpen_binding,
    $$scope
  ];
}
class _layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { _layout as default };
