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
import { S as SvelteComponent, i as init, s as safe_not_equal, l as empty, g as insert_hydration, n as group_outros, o as transition_out, p as check_outros, q as transition_in, d as detach, F as compute_rest_props, G as compute_slots, C as assign, H as exclude_internal_props, I as bubble, J as binding_callbacks, K as create_slot, e as element, c as claim_element, a as children, L as toggle_class, M as update_slot_base, N as get_all_dirty_from_scope, O as get_slot_changes, k as space, m as claim_space, P as set_attributes, Q as append_hydration, R as listen, z as get_spread_update, T as run_all, w as create_component, x as claim_component, y as mount_component, B as destroy_component, U as svg_element, t as text, V as claim_svg_element, h as claim_text, j as set_data, b as attr, W as set_svg_attributes, E as noop, X as createEventDispatcher, v as onMount, u as afterUpdate, Y as component_subscribe, r as setContext, Z as getContext, _ as add_flush_callback, $ as bind, A as get_spread_object, a0 as update_keyed_each, a1 as outro_and_destroy_block, a2 as add_render_callback, a3 as create_bidirectional_transition, a4 as stop_propagation, a5 as query_selector_all, a6 as src_url_equal, a7 as set_store_value } from "../chunks/index-2a8915ed.js";
import { C as Close, u as user, B as Button } from "../chunks/Close-7cc6014a.js";
import { W as WarningFilled, a as WarningAltFilled } from "../chunks/HeaderSearch.svelte_svelte_type_style_lang-0c4c96c7.js";
import { w as writable } from "../chunks/index-58edbb8c.js";
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
  let if_block = !ctx[3] && (ctx[8].icon || ctx[4]) && create_if_block_2$3(ctx);
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
          if_block = create_if_block_2$3(ctx2);
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
function create_if_block$c(ctx) {
  let p;
  let t;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[10].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[9], null);
  let if_block = !ctx[3] && (ctx[8].icon || ctx[4]) && create_if_block_1$4(ctx);
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
          if_block = create_if_block_1$4(ctx2);
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
function create_if_block_2$3(ctx) {
  let div;
  let current;
  const icon_slot_template = ctx[10].icon;
  const icon_slot = create_slot(icon_slot_template, ctx, ctx[9], get_icon_slot_context_1);
  const icon_slot_or_fallback = icon_slot || fallback_block_1$2(ctx);
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
function fallback_block_1$2(ctx) {
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
function create_if_block_1$4(ctx) {
  let div;
  let current;
  const icon_slot_template = ctx[10].icon;
  const icon_slot = create_slot(icon_slot_template, ctx, ctx[9], get_icon_slot_context$1);
  const icon_slot_or_fallback = icon_slot || fallback_block$6(ctx);
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
function fallback_block$6(ctx) {
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
function create_fragment$o(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$c, create_else_block$2];
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
function instance$p($$self, $$props, $$invalidate) {
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
    init(this, options, instance$p, create_fragment$o, safe_not_equal, {
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
function create_if_block$b(ctx) {
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
function create_fragment$n(ctx) {
  let svg;
  let path;
  let if_block = ctx[1] && create_if_block$b(ctx);
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
      attr(path, "d", "M16 22L6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z");
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
          if_block = create_if_block$b(ctx2);
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
function instance$o($$self, $$props, $$invalidate) {
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
class ChevronDown extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$o, create_fragment$n, safe_not_equal, { size: 0, title: 1 });
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
function clearAll() {
  localStorage.clear();
}
function instance$n($$self, $$props, $$invalidate) {
  let { key = "local-storage-key" } = $$props;
  let { value = "" } = $$props;
  function clearItem() {
    localStorage.removeItem(key);
  }
  const dispatch = createEventDispatcher();
  let prevValue = value;
  function setItem() {
    if (typeof value === "object") {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, value);
    }
  }
  onMount(() => {
    const item = localStorage.getItem(key);
    if (item != null) {
      try {
        $$invalidate(0, value = JSON.parse(item));
      } catch (e) {
        $$invalidate(0, value = item);
      }
    } else {
      setItem();
      dispatch("save");
    }
  });
  afterUpdate(() => {
    if (prevValue !== value) {
      setItem();
      dispatch("update", { prevValue, value });
    }
    prevValue = value;
  });
  $$self.$$set = ($$props2) => {
    if ("key" in $$props2)
      $$invalidate(1, key = $$props2.key);
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
  };
  return [value, key, clearItem, clearAll];
}
class LocalStorage extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$n, null, safe_not_equal, {
      key: 1,
      value: 0,
      clearItem: 2,
      clearAll: 3
    });
  }
  get clearItem() {
    return this.$$.ctx[2];
  }
  get clearAll() {
    return clearAll;
  }
}
const get_labelText_slot_changes$1 = (dirty) => ({});
const get_labelText_slot_context$1 = (ctx) => ({});
function create_if_block_10(ctx) {
  let label;
  let current;
  const labelText_slot_template = ctx[21].labelText;
  const labelText_slot = create_slot(labelText_slot_template, ctx, ctx[20], get_labelText_slot_context$1);
  const labelText_slot_or_fallback = labelText_slot || fallback_block$5(ctx);
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
      attr(label, "for", ctx[5]);
      toggle_class(label, "bx--label", true);
      toggle_class(label, "bx--visually-hidden", ctx[14]);
      toggle_class(label, "bx--label--disabled", ctx[4]);
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
        if (labelText_slot.p && (!current || dirty[0] & 1048576)) {
          update_slot_base(labelText_slot, labelText_slot_template, ctx2, ctx2[20], !current ? get_all_dirty_from_scope(ctx2[20]) : get_slot_changes(labelText_slot_template, ctx2[20], dirty, get_labelText_slot_changes$1), get_labelText_slot_context$1);
        }
      } else {
        if (labelText_slot_or_fallback && labelText_slot_or_fallback.p && (!current || dirty[0] & 8192)) {
          labelText_slot_or_fallback.p(ctx2, !current ? [-1, -1] : dirty);
        }
      }
      if (!current || dirty[0] & 32) {
        attr(label, "for", ctx2[5]);
      }
      if (dirty[0] & 16384) {
        toggle_class(label, "bx--visually-hidden", ctx2[14]);
      }
      if (dirty[0] & 16) {
        toggle_class(label, "bx--label--disabled", ctx2[4]);
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
function fallback_block$5(ctx) {
  let t;
  return {
    c() {
      t = text(ctx[13]);
    },
    l(nodes) {
      t = claim_text(nodes, ctx[13]);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 8192)
        set_data(t, ctx2[13]);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block_6(ctx) {
  let div1;
  let div0;
  let select;
  let select_aria_describedby_value;
  let select_aria_invalid_value;
  let select_disabled_value;
  let select_required_value;
  let t0;
  let chevrondown;
  let t1;
  let div0_data_invalid_value;
  let t2;
  let t3;
  let if_block2_anchor;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[21].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[20], null);
  chevrondown = new ChevronDown({ props: { class: "bx--select__arrow" } });
  let if_block0 = ctx[7] && create_if_block_9();
  let if_block1 = ctx[7] && create_if_block_8(ctx);
  let if_block2 = ctx[11] && create_if_block_7(ctx);
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      select = element("select");
      if (default_slot)
        default_slot.c();
      t0 = space();
      create_component(chevrondown.$$.fragment);
      t1 = space();
      if (if_block0)
        if_block0.c();
      t2 = space();
      if (if_block1)
        if_block1.c();
      t3 = space();
      if (if_block2)
        if_block2.c();
      if_block2_anchor = empty();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", {});
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { "data-invalid": true });
      var div0_nodes = children(div0);
      select = claim_element(div0_nodes, "SELECT", {
        "aria-describedby": true,
        "aria-invalid": true,
        id: true,
        name: true
      });
      var select_nodes = children(select);
      if (default_slot)
        default_slot.l(select_nodes);
      select_nodes.forEach(detach);
      t0 = claim_space(div0_nodes);
      claim_component(chevrondown.$$.fragment, div0_nodes);
      t1 = claim_space(div0_nodes);
      if (if_block0)
        if_block0.l(div0_nodes);
      div0_nodes.forEach(detach);
      t2 = claim_space(div1_nodes);
      if (if_block1)
        if_block1.l(div1_nodes);
      div1_nodes.forEach(detach);
      t3 = claim_space(nodes);
      if (if_block2)
        if_block2.l(nodes);
      if_block2_anchor = empty();
      this.h();
    },
    h() {
      attr(select, "aria-describedby", select_aria_describedby_value = ctx[7] ? ctx[16] : void 0);
      attr(select, "aria-invalid", select_aria_invalid_value = ctx[7] || void 0);
      select.disabled = select_disabled_value = ctx[4] || void 0;
      select.required = select_required_value = ctx[15] || void 0;
      attr(select, "id", ctx[5]);
      attr(select, "name", ctx[6]);
      toggle_class(select, "bx--select-input", true);
      toggle_class(select, "bx--select-input--sm", ctx[1] === "sm");
      toggle_class(select, "bx--select-input--xl", ctx[1] === "xl");
      attr(div0, "data-invalid", div0_data_invalid_value = ctx[7] || void 0);
      toggle_class(div0, "bx--select-input__wrapper", true);
      toggle_class(div1, "bx--select-input--inline__wrapper", true);
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      append_hydration(div0, select);
      if (default_slot) {
        default_slot.m(select, null);
      }
      ctx[28](select);
      append_hydration(div0, t0);
      mount_component(chevrondown, div0, null);
      append_hydration(div0, t1);
      if (if_block0)
        if_block0.m(div0, null);
      append_hydration(div1, t2);
      if (if_block1)
        if_block1.m(div1, null);
      insert_hydration(target, t3, anchor);
      if (if_block2)
        if_block2.m(target, anchor);
      insert_hydration(target, if_block2_anchor, anchor);
      current = true;
      if (!mounted) {
        dispose = [
          listen(select, "change", ctx[29]),
          listen(select, "input", ctx[25]),
          listen(select, "focus", ctx[26]),
          listen(select, "blur", ctx[27])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty[0] & 1048576)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[20], !current ? get_all_dirty_from_scope(ctx2[20]) : get_slot_changes(default_slot_template, ctx2[20], dirty, null), null);
        }
      }
      if (!current || dirty[0] & 65664 && select_aria_describedby_value !== (select_aria_describedby_value = ctx2[7] ? ctx2[16] : void 0)) {
        attr(select, "aria-describedby", select_aria_describedby_value);
      }
      if (!current || dirty[0] & 128 && select_aria_invalid_value !== (select_aria_invalid_value = ctx2[7] || void 0)) {
        attr(select, "aria-invalid", select_aria_invalid_value);
      }
      if (!current || dirty[0] & 16 && select_disabled_value !== (select_disabled_value = ctx2[4] || void 0)) {
        select.disabled = select_disabled_value;
      }
      if (!current || dirty[0] & 32768 && select_required_value !== (select_required_value = ctx2[15] || void 0)) {
        select.required = select_required_value;
      }
      if (!current || dirty[0] & 32) {
        attr(select, "id", ctx2[5]);
      }
      if (!current || dirty[0] & 64) {
        attr(select, "name", ctx2[6]);
      }
      if (dirty[0] & 2) {
        toggle_class(select, "bx--select-input--sm", ctx2[1] === "sm");
      }
      if (dirty[0] & 2) {
        toggle_class(select, "bx--select-input--xl", ctx2[1] === "xl");
      }
      if (ctx2[7]) {
        if (if_block0) {
          if (dirty[0] & 128) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_9();
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(div0, null);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (!current || dirty[0] & 128 && div0_data_invalid_value !== (div0_data_invalid_value = ctx2[7] || void 0)) {
        attr(div0, "data-invalid", div0_data_invalid_value);
      }
      if (ctx2[7]) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block_8(ctx2);
          if_block1.c();
          if_block1.m(div1, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (ctx2[11]) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
        } else {
          if_block2 = create_if_block_7(ctx2);
          if_block2.c();
          if_block2.m(if_block2_anchor.parentNode, if_block2_anchor);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      transition_in(chevrondown.$$.fragment, local);
      transition_in(if_block0);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      transition_out(chevrondown.$$.fragment, local);
      transition_out(if_block0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      if (default_slot)
        default_slot.d(detaching);
      ctx[28](null);
      destroy_component(chevrondown);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      if (detaching)
        detach(t3);
      if (if_block2)
        if_block2.d(detaching);
      if (detaching)
        detach(if_block2_anchor);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block_9(ctx) {
  let warningfilled;
  let current;
  warningfilled = new WarningFilled({
    props: { class: "bx--select__invalid-icon" }
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
function create_if_block_8(ctx) {
  let div;
  let t;
  return {
    c() {
      div = element("div");
      t = text(ctx[8]);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { id: true });
      var div_nodes = children(div);
      t = claim_text(div_nodes, ctx[8]);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "id", ctx[16]);
      toggle_class(div, "bx--form-requirement", true);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 256)
        set_data(t, ctx2[8]);
      if (dirty[0] & 65536) {
        attr(div, "id", ctx2[16]);
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_if_block_7(ctx) {
  let div;
  let t;
  return {
    c() {
      div = element("div");
      t = text(ctx[11]);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      t = claim_text(div_nodes, ctx[11]);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      toggle_class(div, "bx--form__helper-text", true);
      toggle_class(div, "bx--form__helper-text--disabled", ctx[4]);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 2048)
        set_data(t, ctx2[11]);
      if (dirty[0] & 16) {
        toggle_class(div, "bx--form__helper-text--disabled", ctx2[4]);
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_if_block$a(ctx) {
  let div;
  let select;
  let select_aria_describedby_value;
  let select_disabled_value;
  let select_required_value;
  let select_aria_invalid_value;
  let t0;
  let chevrondown;
  let t1;
  let t2;
  let div_data_invalid_value;
  let t3;
  let t4;
  let t5;
  let if_block4_anchor;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[21].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[20], null);
  chevrondown = new ChevronDown({ props: { class: "bx--select__arrow" } });
  let if_block0 = ctx[7] && create_if_block_5();
  let if_block1 = !ctx[7] && ctx[9] && create_if_block_4();
  let if_block2 = !ctx[7] && ctx[11] && create_if_block_3(ctx);
  let if_block3 = ctx[7] && create_if_block_2$2(ctx);
  let if_block4 = !ctx[7] && ctx[9] && create_if_block_1$3(ctx);
  return {
    c() {
      div = element("div");
      select = element("select");
      if (default_slot)
        default_slot.c();
      t0 = space();
      create_component(chevrondown.$$.fragment);
      t1 = space();
      if (if_block0)
        if_block0.c();
      t2 = space();
      if (if_block1)
        if_block1.c();
      t3 = space();
      if (if_block2)
        if_block2.c();
      t4 = space();
      if (if_block3)
        if_block3.c();
      t5 = space();
      if (if_block4)
        if_block4.c();
      if_block4_anchor = empty();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { "data-invalid": true });
      var div_nodes = children(div);
      select = claim_element(div_nodes, "SELECT", {
        id: true,
        name: true,
        "aria-describedby": true,
        "aria-invalid": true
      });
      var select_nodes = children(select);
      if (default_slot)
        default_slot.l(select_nodes);
      select_nodes.forEach(detach);
      t0 = claim_space(div_nodes);
      claim_component(chevrondown.$$.fragment, div_nodes);
      t1 = claim_space(div_nodes);
      if (if_block0)
        if_block0.l(div_nodes);
      t2 = claim_space(div_nodes);
      if (if_block1)
        if_block1.l(div_nodes);
      div_nodes.forEach(detach);
      t3 = claim_space(nodes);
      if (if_block2)
        if_block2.l(nodes);
      t4 = claim_space(nodes);
      if (if_block3)
        if_block3.l(nodes);
      t5 = claim_space(nodes);
      if (if_block4)
        if_block4.l(nodes);
      if_block4_anchor = empty();
      this.h();
    },
    h() {
      attr(select, "id", ctx[5]);
      attr(select, "name", ctx[6]);
      attr(select, "aria-describedby", select_aria_describedby_value = ctx[7] ? ctx[16] : void 0);
      select.disabled = select_disabled_value = ctx[4] || void 0;
      select.required = select_required_value = ctx[15] || void 0;
      attr(select, "aria-invalid", select_aria_invalid_value = ctx[7] || void 0);
      toggle_class(select, "bx--select-input", true);
      toggle_class(select, "bx--select-input--sm", ctx[1] === "sm");
      toggle_class(select, "bx--select-input--xl", ctx[1] === "xl");
      attr(div, "data-invalid", div_data_invalid_value = ctx[7] || void 0);
      toggle_class(div, "bx--select-input__wrapper", true);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, select);
      if (default_slot) {
        default_slot.m(select, null);
      }
      ctx[30](select);
      append_hydration(div, t0);
      mount_component(chevrondown, div, null);
      append_hydration(div, t1);
      if (if_block0)
        if_block0.m(div, null);
      append_hydration(div, t2);
      if (if_block1)
        if_block1.m(div, null);
      insert_hydration(target, t3, anchor);
      if (if_block2)
        if_block2.m(target, anchor);
      insert_hydration(target, t4, anchor);
      if (if_block3)
        if_block3.m(target, anchor);
      insert_hydration(target, t5, anchor);
      if (if_block4)
        if_block4.m(target, anchor);
      insert_hydration(target, if_block4_anchor, anchor);
      current = true;
      if (!mounted) {
        dispose = [
          listen(select, "change", ctx[31]),
          listen(select, "input", ctx[22]),
          listen(select, "focus", ctx[23]),
          listen(select, "blur", ctx[24])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty[0] & 1048576)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[20], !current ? get_all_dirty_from_scope(ctx2[20]) : get_slot_changes(default_slot_template, ctx2[20], dirty, null), null);
        }
      }
      if (!current || dirty[0] & 32) {
        attr(select, "id", ctx2[5]);
      }
      if (!current || dirty[0] & 64) {
        attr(select, "name", ctx2[6]);
      }
      if (!current || dirty[0] & 65664 && select_aria_describedby_value !== (select_aria_describedby_value = ctx2[7] ? ctx2[16] : void 0)) {
        attr(select, "aria-describedby", select_aria_describedby_value);
      }
      if (!current || dirty[0] & 16 && select_disabled_value !== (select_disabled_value = ctx2[4] || void 0)) {
        select.disabled = select_disabled_value;
      }
      if (!current || dirty[0] & 32768 && select_required_value !== (select_required_value = ctx2[15] || void 0)) {
        select.required = select_required_value;
      }
      if (!current || dirty[0] & 128 && select_aria_invalid_value !== (select_aria_invalid_value = ctx2[7] || void 0)) {
        attr(select, "aria-invalid", select_aria_invalid_value);
      }
      if (dirty[0] & 2) {
        toggle_class(select, "bx--select-input--sm", ctx2[1] === "sm");
      }
      if (dirty[0] & 2) {
        toggle_class(select, "bx--select-input--xl", ctx2[1] === "xl");
      }
      if (ctx2[7]) {
        if (if_block0) {
          if (dirty[0] & 128) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_5();
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(div, t2);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (!ctx2[7] && ctx2[9]) {
        if (if_block1) {
          if (dirty[0] & 640) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_4();
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
      if (!current || dirty[0] & 128 && div_data_invalid_value !== (div_data_invalid_value = ctx2[7] || void 0)) {
        attr(div, "data-invalid", div_data_invalid_value);
      }
      if (!ctx2[7] && ctx2[11]) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
        } else {
          if_block2 = create_if_block_3(ctx2);
          if_block2.c();
          if_block2.m(t4.parentNode, t4);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
      }
      if (ctx2[7]) {
        if (if_block3) {
          if_block3.p(ctx2, dirty);
        } else {
          if_block3 = create_if_block_2$2(ctx2);
          if_block3.c();
          if_block3.m(t5.parentNode, t5);
        }
      } else if (if_block3) {
        if_block3.d(1);
        if_block3 = null;
      }
      if (!ctx2[7] && ctx2[9]) {
        if (if_block4) {
          if_block4.p(ctx2, dirty);
        } else {
          if_block4 = create_if_block_1$3(ctx2);
          if_block4.c();
          if_block4.m(if_block4_anchor.parentNode, if_block4_anchor);
        }
      } else if (if_block4) {
        if_block4.d(1);
        if_block4 = null;
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      transition_in(chevrondown.$$.fragment, local);
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      transition_out(chevrondown.$$.fragment, local);
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (default_slot)
        default_slot.d(detaching);
      ctx[30](null);
      destroy_component(chevrondown);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      if (detaching)
        detach(t3);
      if (if_block2)
        if_block2.d(detaching);
      if (detaching)
        detach(t4);
      if (if_block3)
        if_block3.d(detaching);
      if (detaching)
        detach(t5);
      if (if_block4)
        if_block4.d(detaching);
      if (detaching)
        detach(if_block4_anchor);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block_5(ctx) {
  let warningfilled;
  let current;
  warningfilled = new WarningFilled({
    props: { class: "bx--select__invalid-icon" }
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
function create_if_block_4(ctx) {
  let warningaltfilled;
  let current;
  warningaltfilled = new WarningAltFilled({
    props: {
      class: "bx--select__invalid-icon bx--select__invalid-icon--warning"
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
function create_if_block_3(ctx) {
  let div;
  let t;
  return {
    c() {
      div = element("div");
      t = text(ctx[11]);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      t = claim_text(div_nodes, ctx[11]);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      toggle_class(div, "bx--form__helper-text", true);
      toggle_class(div, "bx--form__helper-text--disabled", ctx[4]);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 2048)
        set_data(t, ctx2[11]);
      if (dirty[0] & 16) {
        toggle_class(div, "bx--form__helper-text--disabled", ctx2[4]);
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_if_block_2$2(ctx) {
  let div;
  let t;
  return {
    c() {
      div = element("div");
      t = text(ctx[8]);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { id: true });
      var div_nodes = children(div);
      t = claim_text(div_nodes, ctx[8]);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "id", ctx[16]);
      toggle_class(div, "bx--form-requirement", true);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 256)
        set_data(t, ctx2[8]);
      if (dirty[0] & 65536) {
        attr(div, "id", ctx2[16]);
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_if_block_1$3(ctx) {
  let div;
  let t;
  return {
    c() {
      div = element("div");
      t = text(ctx[10]);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { id: true });
      var div_nodes = children(div);
      t = claim_text(div_nodes, ctx[10]);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "id", ctx[16]);
      toggle_class(div, "bx--form-requirement", true);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 1024)
        set_data(t, ctx2[10]);
      if (dirty[0] & 65536) {
        attr(div, "id", ctx2[16]);
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_fragment$m(ctx) {
  let div1;
  let div0;
  let t0;
  let t1;
  let current;
  let if_block0 = !ctx[12] && create_if_block_10(ctx);
  let if_block1 = ctx[2] && create_if_block_6(ctx);
  let if_block2 = !ctx[2] && create_if_block$a(ctx);
  let div1_levels = [ctx[18]];
  let div1_data = {};
  for (let i = 0; i < div1_levels.length; i += 1) {
    div1_data = assign(div1_data, div1_levels[i]);
  }
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      if (if_block0)
        if_block0.c();
      t0 = space();
      if (if_block1)
        if_block1.c();
      t1 = space();
      if (if_block2)
        if_block2.c();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", {});
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {});
      var div0_nodes = children(div0);
      if (if_block0)
        if_block0.l(div0_nodes);
      t0 = claim_space(div0_nodes);
      if (if_block1)
        if_block1.l(div0_nodes);
      t1 = claim_space(div0_nodes);
      if (if_block2)
        if_block2.l(div0_nodes);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      toggle_class(div0, "bx--select", true);
      toggle_class(div0, "bx--select--inline", ctx[2]);
      toggle_class(div0, "bx--select--light", ctx[3]);
      toggle_class(div0, "bx--select--invalid", ctx[7]);
      toggle_class(div0, "bx--select--disabled", ctx[4]);
      toggle_class(div0, "bx--select--warning", ctx[9]);
      set_attributes(div1, div1_data);
      toggle_class(div1, "bx--form-item", true);
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      if (if_block0)
        if_block0.m(div0, null);
      append_hydration(div0, t0);
      if (if_block1)
        if_block1.m(div0, null);
      append_hydration(div0, t1);
      if (if_block2)
        if_block2.m(div0, null);
      current = true;
    },
    p(ctx2, dirty) {
      if (!ctx2[12]) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty[0] & 4096) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_10(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(div0, t0);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (ctx2[2]) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty[0] & 4) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_6(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div0, t1);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
      if (!ctx2[2]) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
          if (dirty[0] & 4) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block$a(ctx2);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(div0, null);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, () => {
          if_block2 = null;
        });
        check_outros();
      }
      if (dirty[0] & 4) {
        toggle_class(div0, "bx--select--inline", ctx2[2]);
      }
      if (dirty[0] & 8) {
        toggle_class(div0, "bx--select--light", ctx2[3]);
      }
      if (dirty[0] & 128) {
        toggle_class(div0, "bx--select--invalid", ctx2[7]);
      }
      if (dirty[0] & 16) {
        toggle_class(div0, "bx--select--disabled", ctx2[4]);
      }
      if (dirty[0] & 512) {
        toggle_class(div0, "bx--select--warning", ctx2[9]);
      }
      set_attributes(div1, div1_data = get_spread_update(div1_levels, [dirty[0] & 262144 && ctx2[18]]));
      toggle_class(div1, "bx--form-item", true);
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(if_block1);
      transition_in(if_block2);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      transition_out(if_block2);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      if (if_block2)
        if_block2.d();
    }
  };
}
function instance$m($$self, $$props, $$invalidate) {
  let errorId;
  const omit_props_names = [
    "selected",
    "size",
    "inline",
    "light",
    "disabled",
    "id",
    "name",
    "invalid",
    "invalidText",
    "warn",
    "warnText",
    "helperText",
    "noLabel",
    "labelText",
    "hideLabel",
    "ref",
    "required"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let $selectedValue;
  let { $$slots: slots = {}, $$scope } = $$props;
  let { selected = void 0 } = $$props;
  let { size = void 0 } = $$props;
  let { inline = false } = $$props;
  let { light = false } = $$props;
  let { disabled = false } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { name = void 0 } = $$props;
  let { invalid = false } = $$props;
  let { invalidText = "" } = $$props;
  let { warn = false } = $$props;
  let { warnText = "" } = $$props;
  let { helperText = "" } = $$props;
  let { noLabel = false } = $$props;
  let { labelText = "" } = $$props;
  let { hideLabel = false } = $$props;
  let { ref = null } = $$props;
  let { required = false } = $$props;
  const dispatch = createEventDispatcher();
  const selectedValue = writable(selected);
  component_subscribe($$self, selectedValue, (value) => $$invalidate(32, $selectedValue = value));
  setContext("Select", { selectedValue });
  afterUpdate(() => {
    $$invalidate(19, selected = $selectedValue);
    dispatch("change", $selectedValue);
  });
  function input_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  function focus_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  function blur_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  function input_handler(event) {
    bubble.call(this, $$self, event);
  }
  function focus_handler(event) {
    bubble.call(this, $$self, event);
  }
  function blur_handler(event) {
    bubble.call(this, $$self, event);
  }
  function select_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      ref = $$value;
      $$invalidate(0, ref);
    });
  }
  const change_handler = ({ target }) => {
    selectedValue.set(target.value);
  };
  function select_binding_1($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      ref = $$value;
      $$invalidate(0, ref);
    });
  }
  const change_handler_1 = ({ target }) => {
    selectedValue.set(target.value);
  };
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(18, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("selected" in $$new_props)
      $$invalidate(19, selected = $$new_props.selected);
    if ("size" in $$new_props)
      $$invalidate(1, size = $$new_props.size);
    if ("inline" in $$new_props)
      $$invalidate(2, inline = $$new_props.inline);
    if ("light" in $$new_props)
      $$invalidate(3, light = $$new_props.light);
    if ("disabled" in $$new_props)
      $$invalidate(4, disabled = $$new_props.disabled);
    if ("id" in $$new_props)
      $$invalidate(5, id = $$new_props.id);
    if ("name" in $$new_props)
      $$invalidate(6, name = $$new_props.name);
    if ("invalid" in $$new_props)
      $$invalidate(7, invalid = $$new_props.invalid);
    if ("invalidText" in $$new_props)
      $$invalidate(8, invalidText = $$new_props.invalidText);
    if ("warn" in $$new_props)
      $$invalidate(9, warn = $$new_props.warn);
    if ("warnText" in $$new_props)
      $$invalidate(10, warnText = $$new_props.warnText);
    if ("helperText" in $$new_props)
      $$invalidate(11, helperText = $$new_props.helperText);
    if ("noLabel" in $$new_props)
      $$invalidate(12, noLabel = $$new_props.noLabel);
    if ("labelText" in $$new_props)
      $$invalidate(13, labelText = $$new_props.labelText);
    if ("hideLabel" in $$new_props)
      $$invalidate(14, hideLabel = $$new_props.hideLabel);
    if ("ref" in $$new_props)
      $$invalidate(0, ref = $$new_props.ref);
    if ("required" in $$new_props)
      $$invalidate(15, required = $$new_props.required);
    if ("$$scope" in $$new_props)
      $$invalidate(20, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & 32) {
      $$invalidate(16, errorId = `error-${id}`);
    }
    if ($$self.$$.dirty[0] & 524288) {
      selectedValue.set(selected);
    }
  };
  return [
    ref,
    size,
    inline,
    light,
    disabled,
    id,
    name,
    invalid,
    invalidText,
    warn,
    warnText,
    helperText,
    noLabel,
    labelText,
    hideLabel,
    required,
    errorId,
    selectedValue,
    $$restProps,
    selected,
    $$scope,
    slots,
    input_handler_1,
    focus_handler_1,
    blur_handler_1,
    input_handler,
    focus_handler,
    blur_handler,
    select_binding,
    change_handler,
    select_binding_1,
    change_handler_1
  ];
}
class Select extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$m, create_fragment$m, safe_not_equal, {
      selected: 19,
      size: 1,
      inline: 2,
      light: 3,
      disabled: 4,
      id: 5,
      name: 6,
      invalid: 7,
      invalidText: 8,
      warn: 9,
      warnText: 10,
      helperText: 11,
      noLabel: 12,
      labelText: 13,
      hideLabel: 14,
      ref: 0,
      required: 15
    }, null, [-1, -1]);
  }
}
function create_fragment$l(ctx) {
  let option;
  let t_value = (ctx[1] || ctx[0]) + "";
  let t;
  let option_class_value;
  let option_style_value;
  return {
    c() {
      option = element("option");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      option = claim_element(nodes, "OPTION", { class: true, style: true });
      var option_nodes = children(option);
      t = claim_text(option_nodes, t_value);
      option_nodes.forEach(detach);
      this.h();
    },
    h() {
      option.__value = ctx[0];
      option.value = option.__value;
      option.disabled = ctx[3];
      option.hidden = ctx[2];
      option.selected = ctx[4];
      attr(option, "class", option_class_value = ctx[5].class);
      attr(option, "style", option_style_value = ctx[5].style);
      toggle_class(option, "bx--select-option", true);
    },
    m(target, anchor) {
      insert_hydration(target, option, anchor);
      append_hydration(option, t);
    },
    p(ctx2, [dirty]) {
      if (dirty & 3 && t_value !== (t_value = (ctx2[1] || ctx2[0]) + ""))
        set_data(t, t_value);
      if (dirty & 1) {
        option.__value = ctx2[0];
        option.value = option.__value;
      }
      if (dirty & 8) {
        option.disabled = ctx2[3];
      }
      if (dirty & 4) {
        option.hidden = ctx2[2];
      }
      if (dirty & 16) {
        option.selected = ctx2[4];
      }
      if (dirty & 32 && option_class_value !== (option_class_value = ctx2[5].class)) {
        attr(option, "class", option_class_value);
      }
      if (dirty & 32 && option_style_value !== (option_style_value = ctx2[5].style)) {
        attr(option, "style", option_style_value);
      }
      if (dirty & 32) {
        toggle_class(option, "bx--select-option", true);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(option);
    }
  };
}
function instance$l($$self, $$props, $$invalidate) {
  const omit_props_names = ["value", "text", "hidden", "disabled"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { value = "" } = $$props;
  let { text: text2 = "" } = $$props;
  let { hidden = false } = $$props;
  let { disabled = false } = $$props;
  const ctx = getContext("Select") || getContext("TimePickerSelect");
  let selected = false;
  const unsubscribe = ctx.selectedValue.subscribe((currentValue) => {
    $$invalidate(4, selected = currentValue === value);
  });
  onMount(() => {
    return () => unsubscribe();
  });
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(5, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("value" in $$new_props)
      $$invalidate(0, value = $$new_props.value);
    if ("text" in $$new_props)
      $$invalidate(1, text2 = $$new_props.text);
    if ("hidden" in $$new_props)
      $$invalidate(2, hidden = $$new_props.hidden);
    if ("disabled" in $$new_props)
      $$invalidate(3, disabled = $$new_props.disabled);
  };
  return [value, text2, hidden, disabled, selected, $$restProps];
}
class SelectItem extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$l, create_fragment$l, safe_not_equal, {
      value: 0,
      text: 1,
      hidden: 2,
      disabled: 3
    });
  }
}
const get_labelB_slot_changes = (dirty) => ({});
const get_labelB_slot_context = (ctx) => ({});
const get_labelA_slot_changes = (dirty) => ({});
const get_labelA_slot_context = (ctx) => ({});
const get_labelText_slot_changes = (dirty) => ({});
const get_labelText_slot_context = (ctx) => ({});
function fallback_block_2$1(ctx) {
  let t;
  return {
    c() {
      t = text(ctx[5]);
    },
    l(nodes) {
      t = claim_text(nodes, ctx[5]);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 32)
        set_data(t, ctx2[5]);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function fallback_block_1$1(ctx) {
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
function fallback_block$4(ctx) {
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
function create_fragment$k(ctx) {
  let div;
  let input;
  let t0;
  let label;
  let t1;
  let span2;
  let span0;
  let t2;
  let span1;
  let label_aria_label_value;
  let current;
  let mounted;
  let dispose;
  const labelText_slot_template = ctx[11].labelText;
  const labelText_slot = create_slot(labelText_slot_template, ctx, ctx[10], get_labelText_slot_context);
  const labelText_slot_or_fallback = labelText_slot || fallback_block_2$1(ctx);
  const labelA_slot_template = ctx[11].labelA;
  const labelA_slot = create_slot(labelA_slot_template, ctx, ctx[10], get_labelA_slot_context);
  const labelA_slot_or_fallback = labelA_slot || fallback_block_1$1(ctx);
  const labelB_slot_template = ctx[11].labelB;
  const labelB_slot = create_slot(labelB_slot_template, ctx, ctx[10], get_labelB_slot_context);
  const labelB_slot_or_fallback = labelB_slot || fallback_block$4(ctx);
  let div_levels = [ctx[8]];
  let div_data = {};
  for (let i = 0; i < div_levels.length; i += 1) {
    div_data = assign(div_data, div_levels[i]);
  }
  return {
    c() {
      div = element("div");
      input = element("input");
      t0 = space();
      label = element("label");
      if (labelText_slot_or_fallback)
        labelText_slot_or_fallback.c();
      t1 = space();
      span2 = element("span");
      span0 = element("span");
      if (labelA_slot_or_fallback)
        labelA_slot_or_fallback.c();
      t2 = space();
      span1 = element("span");
      if (labelB_slot_or_fallback)
        labelB_slot_or_fallback.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      input = claim_element(div_nodes, "INPUT", { type: true, id: true, name: true });
      t0 = claim_space(div_nodes);
      label = claim_element(div_nodes, "LABEL", { "aria-label": true, for: true });
      var label_nodes = children(label);
      if (labelText_slot_or_fallback)
        labelText_slot_or_fallback.l(label_nodes);
      t1 = claim_space(label_nodes);
      span2 = claim_element(label_nodes, "SPAN", {});
      var span2_nodes = children(span2);
      span0 = claim_element(span2_nodes, "SPAN", { "aria-hidden": true });
      var span0_nodes = children(span0);
      if (labelA_slot_or_fallback)
        labelA_slot_or_fallback.l(span0_nodes);
      span0_nodes.forEach(detach);
      t2 = claim_space(span2_nodes);
      span1 = claim_element(span2_nodes, "SPAN", { "aria-hidden": true });
      var span1_nodes = children(span1);
      if (labelB_slot_or_fallback)
        labelB_slot_or_fallback.l(span1_nodes);
      span1_nodes.forEach(detach);
      span2_nodes.forEach(detach);
      label_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(input, "type", "checkbox");
      input.checked = ctx[0];
      input.disabled = ctx[2];
      attr(input, "id", ctx[6]);
      attr(input, "name", ctx[7]);
      toggle_class(input, "bx--toggle-input", true);
      toggle_class(input, "bx--toggle-input--small", ctx[1] === "sm");
      attr(span0, "aria-hidden", "true");
      toggle_class(span0, "bx--toggle__text--off", true);
      attr(span1, "aria-hidden", "true");
      toggle_class(span1, "bx--toggle__text--on", true);
      toggle_class(span2, "bx--toggle__switch", true);
      attr(label, "aria-label", label_aria_label_value = ctx[5] ? void 0 : ctx[9]["aria-label"] || "Toggle");
      attr(label, "for", ctx[6]);
      toggle_class(label, "bx--toggle-input__label", true);
      set_attributes(div, div_data);
      toggle_class(div, "bx--form-item", true);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, input);
      append_hydration(div, t0);
      append_hydration(div, label);
      if (labelText_slot_or_fallback) {
        labelText_slot_or_fallback.m(label, null);
      }
      append_hydration(label, t1);
      append_hydration(label, span2);
      append_hydration(span2, span0);
      if (labelA_slot_or_fallback) {
        labelA_slot_or_fallback.m(span0, null);
      }
      append_hydration(span2, t2);
      append_hydration(span2, span1);
      if (labelB_slot_or_fallback) {
        labelB_slot_or_fallback.m(span1, null);
      }
      current = true;
      if (!mounted) {
        dispose = [
          listen(input, "change", ctx[16]),
          listen(input, "change", ctx[20]),
          listen(input, "keyup", ctx[17]),
          listen(input, "keyup", ctx[21]),
          listen(input, "focus", ctx[18]),
          listen(input, "blur", ctx[19]),
          listen(div, "click", ctx[12]),
          listen(div, "mouseover", ctx[13]),
          listen(div, "mouseenter", ctx[14]),
          listen(div, "mouseleave", ctx[15])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (!current || dirty & 1) {
        input.checked = ctx2[0];
      }
      if (!current || dirty & 4) {
        input.disabled = ctx2[2];
      }
      if (!current || dirty & 64) {
        attr(input, "id", ctx2[6]);
      }
      if (!current || dirty & 128) {
        attr(input, "name", ctx2[7]);
      }
      if (dirty & 2) {
        toggle_class(input, "bx--toggle-input--small", ctx2[1] === "sm");
      }
      if (labelText_slot) {
        if (labelText_slot.p && (!current || dirty & 1024)) {
          update_slot_base(labelText_slot, labelText_slot_template, ctx2, ctx2[10], !current ? get_all_dirty_from_scope(ctx2[10]) : get_slot_changes(labelText_slot_template, ctx2[10], dirty, get_labelText_slot_changes), get_labelText_slot_context);
        }
      } else {
        if (labelText_slot_or_fallback && labelText_slot_or_fallback.p && (!current || dirty & 32)) {
          labelText_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
      if (labelA_slot) {
        if (labelA_slot.p && (!current || dirty & 1024)) {
          update_slot_base(labelA_slot, labelA_slot_template, ctx2, ctx2[10], !current ? get_all_dirty_from_scope(ctx2[10]) : get_slot_changes(labelA_slot_template, ctx2[10], dirty, get_labelA_slot_changes), get_labelA_slot_context);
        }
      } else {
        if (labelA_slot_or_fallback && labelA_slot_or_fallback.p && (!current || dirty & 8)) {
          labelA_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
      if (labelB_slot) {
        if (labelB_slot.p && (!current || dirty & 1024)) {
          update_slot_base(labelB_slot, labelB_slot_template, ctx2, ctx2[10], !current ? get_all_dirty_from_scope(ctx2[10]) : get_slot_changes(labelB_slot_template, ctx2[10], dirty, get_labelB_slot_changes), get_labelB_slot_context);
        }
      } else {
        if (labelB_slot_or_fallback && labelB_slot_or_fallback.p && (!current || dirty & 16)) {
          labelB_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
      if (!current || dirty & 544 && label_aria_label_value !== (label_aria_label_value = ctx2[5] ? void 0 : ctx2[9]["aria-label"] || "Toggle")) {
        attr(label, "aria-label", label_aria_label_value);
      }
      if (!current || dirty & 64) {
        attr(label, "for", ctx2[6]);
      }
      set_attributes(div, div_data = get_spread_update(div_levels, [dirty & 256 && ctx2[8]]));
      toggle_class(div, "bx--form-item", true);
    },
    i(local) {
      if (current)
        return;
      transition_in(labelText_slot_or_fallback, local);
      transition_in(labelA_slot_or_fallback, local);
      transition_in(labelB_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(labelText_slot_or_fallback, local);
      transition_out(labelA_slot_or_fallback, local);
      transition_out(labelB_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (labelText_slot_or_fallback)
        labelText_slot_or_fallback.d(detaching);
      if (labelA_slot_or_fallback)
        labelA_slot_or_fallback.d(detaching);
      if (labelB_slot_or_fallback)
        labelB_slot_or_fallback.d(detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$k($$self, $$props, $$invalidate) {
  const omit_props_names = ["size", "toggled", "disabled", "labelA", "labelB", "labelText", "id", "name"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { size = "default" } = $$props;
  let { toggled = false } = $$props;
  let { disabled = false } = $$props;
  let { labelA = "Off" } = $$props;
  let { labelB = "On" } = $$props;
  let { labelText = "" } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { name = void 0 } = $$props;
  const dispatch = createEventDispatcher();
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
  function change_handler(event) {
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
  const change_handler_1 = () => {
    $$invalidate(0, toggled = !toggled);
  };
  const keyup_handler_1 = (e) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      $$invalidate(0, toggled = !toggled);
    }
  };
  $$self.$$set = ($$new_props) => {
    $$invalidate(9, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(8, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("size" in $$new_props)
      $$invalidate(1, size = $$new_props.size);
    if ("toggled" in $$new_props)
      $$invalidate(0, toggled = $$new_props.toggled);
    if ("disabled" in $$new_props)
      $$invalidate(2, disabled = $$new_props.disabled);
    if ("labelA" in $$new_props)
      $$invalidate(3, labelA = $$new_props.labelA);
    if ("labelB" in $$new_props)
      $$invalidate(4, labelB = $$new_props.labelB);
    if ("labelText" in $$new_props)
      $$invalidate(5, labelText = $$new_props.labelText);
    if ("id" in $$new_props)
      $$invalidate(6, id = $$new_props.id);
    if ("name" in $$new_props)
      $$invalidate(7, name = $$new_props.name);
    if ("$$scope" in $$new_props)
      $$invalidate(10, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      dispatch("toggle", { toggled });
    }
  };
  $$props = exclude_internal_props($$props);
  return [
    toggled,
    size,
    disabled,
    labelA,
    labelB,
    labelText,
    id,
    name,
    $$restProps,
    $$props,
    $$scope,
    slots,
    click_handler,
    mouseover_handler,
    mouseenter_handler,
    mouseleave_handler,
    change_handler,
    keyup_handler,
    focus_handler,
    blur_handler,
    change_handler_1,
    keyup_handler_1
  ];
}
class Toggle extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$k, create_fragment$k, safe_not_equal, {
      size: 1,
      toggled: 0,
      disabled: 2,
      labelA: 3,
      labelB: 4,
      labelText: 5,
      id: 6,
      name: 7
    });
  }
}
const get_default_slot_changes = (dirty) => ({ theme: dirty & 1 });
const get_default_slot_context = (ctx) => ({ theme: ctx[0] });
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[0] = list[i];
  return child_ctx;
}
function create_if_block_2$1(ctx) {
  let localstorage;
  let updating_value;
  let current;
  function localstorage_value_binding(value) {
    ctx[9](value);
  }
  let localstorage_props = { key: ctx[2] };
  if (ctx[0] !== void 0) {
    localstorage_props.value = ctx[0];
  }
  localstorage = new LocalStorage({ props: localstorage_props });
  binding_callbacks.push(() => bind(localstorage, "value", localstorage_value_binding));
  return {
    c() {
      create_component(localstorage.$$.fragment);
    },
    l(nodes) {
      claim_component(localstorage.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(localstorage, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const localstorage_changes = {};
      if (dirty & 4)
        localstorage_changes.key = ctx2[2];
      if (!updating_value && dirty & 1) {
        updating_value = true;
        localstorage_changes.value = ctx2[0];
        add_flush_callback(() => updating_value = false);
      }
      localstorage.$set(localstorage_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(localstorage.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(localstorage.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(localstorage, detaching);
    }
  };
}
function create_if_block_1$2(ctx) {
  let select_1;
  let updating_selected;
  let current;
  const select_1_spread_levels = [ctx[5]];
  function select_1_selected_binding(value) {
    ctx[11](value);
  }
  let select_1_props = {
    $$slots: { default: [create_default_slot$1] },
    $$scope: { ctx }
  };
  for (let i = 0; i < select_1_spread_levels.length; i += 1) {
    select_1_props = assign(select_1_props, select_1_spread_levels[i]);
  }
  if (ctx[0] !== void 0) {
    select_1_props.selected = ctx[0];
  }
  select_1 = new Select({ props: select_1_props });
  binding_callbacks.push(() => bind(select_1, "selected", select_1_selected_binding));
  return {
    c() {
      create_component(select_1.$$.fragment);
    },
    l(nodes) {
      claim_component(select_1.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(select_1, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const select_1_changes = dirty & 32 ? get_spread_update(select_1_spread_levels, [get_spread_object(ctx2[5])]) : {};
      if (dirty & 4128) {
        select_1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_selected && dirty & 1) {
        updating_selected = true;
        select_1_changes.selected = ctx2[0];
        add_flush_callback(() => updating_selected = false);
      }
      select_1.$set(select_1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(select_1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(select_1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(select_1, detaching);
    }
  };
}
function create_if_block$9(ctx) {
  let toggle_1;
  let current;
  const toggle_1_spread_levels = [
    ctx[4],
    {
      toggled: ctx[0] === ctx[4].themes[1]
    }
  ];
  let toggle_1_props = {};
  for (let i = 0; i < toggle_1_spread_levels.length; i += 1) {
    toggle_1_props = assign(toggle_1_props, toggle_1_spread_levels[i]);
  }
  toggle_1 = new Toggle({ props: toggle_1_props });
  toggle_1.$on("toggle", ctx[10]);
  return {
    c() {
      create_component(toggle_1.$$.fragment);
    },
    l(nodes) {
      claim_component(toggle_1.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(toggle_1, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const toggle_1_changes = dirty & 17 ? get_spread_update(toggle_1_spread_levels, [
        dirty & 16 && get_spread_object(ctx2[4]),
        {
          toggled: ctx2[0] === ctx2[4].themes[1]
        }
      ]) : {};
      toggle_1.$set(toggle_1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(toggle_1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(toggle_1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(toggle_1, detaching);
    }
  };
}
function create_each_block(key_1, ctx) {
  let first;
  let selectitem;
  let current;
  selectitem = new SelectItem({
    props: {
      value: ctx[0],
      text: ctx[6][ctx[0]]
    }
  });
  return {
    key: key_1,
    first: null,
    c() {
      first = empty();
      create_component(selectitem.$$.fragment);
      this.h();
    },
    l(nodes) {
      first = empty();
      claim_component(selectitem.$$.fragment, nodes);
      this.h();
    },
    h() {
      this.first = first;
    },
    m(target, anchor) {
      insert_hydration(target, first, anchor);
      mount_component(selectitem, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const selectitem_changes = {};
      if (dirty & 32)
        selectitem_changes.value = ctx[0];
      if (dirty & 32)
        selectitem_changes.text = ctx[6][ctx[0]];
      selectitem.$set(selectitem_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(selectitem.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(selectitem.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(first);
      destroy_component(selectitem, detaching);
    }
  };
}
function create_default_slot$1(ctx) {
  let each_blocks = [];
  let each_1_lookup = /* @__PURE__ */ new Map();
  let each_1_anchor;
  let current;
  let each_value = ctx[5].themes;
  const get_key = (ctx2) => ctx2[0];
  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context(ctx, each_value, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
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
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 96) {
        each_value = ctx2[5].themes;
        group_outros();
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, each_1_anchor.parentNode, outro_and_destroy_block, create_each_block, each_1_anchor, get_each_context);
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d(detaching);
      }
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_fragment$j(ctx) {
  let t0;
  let current_block_type_index;
  let if_block1;
  let t1;
  let current;
  let if_block0 = ctx[1] && create_if_block_2$1(ctx);
  const if_block_creators = [create_if_block$9, create_if_block_1$2];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[3] === "toggle")
      return 0;
    if (ctx2[3] === "select")
      return 1;
    return -1;
  }
  if (~(current_block_type_index = select_block_type(ctx))) {
    if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  }
  const default_slot_template = ctx[8].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[12], get_default_slot_context);
  return {
    c() {
      if (if_block0)
        if_block0.c();
      t0 = space();
      if (if_block1)
        if_block1.c();
      t1 = space();
      if (default_slot)
        default_slot.c();
    },
    l(nodes) {
      if (if_block0)
        if_block0.l(nodes);
      t0 = claim_space(nodes);
      if (if_block1)
        if_block1.l(nodes);
      t1 = claim_space(nodes);
      if (default_slot)
        default_slot.l(nodes);
    },
    m(target, anchor) {
      if (if_block0)
        if_block0.m(target, anchor);
      insert_hydration(target, t0, anchor);
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].m(target, anchor);
      }
      insert_hydration(target, t1, anchor);
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (ctx2[1]) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & 2) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_2$1(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(t0.parentNode, t0);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if (~current_block_type_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        }
      } else {
        if (if_block1) {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
        }
        if (~current_block_type_index) {
          if_block1 = if_blocks[current_block_type_index];
          if (!if_block1) {
            if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block1.c();
          } else {
            if_block1.p(ctx2, dirty);
          }
          transition_in(if_block1, 1);
          if_block1.m(t1.parentNode, t1);
        } else {
          if_block1 = null;
        }
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 4097)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[12], !current ? get_all_dirty_from_scope(ctx2[12]) : get_slot_changes(default_slot_template, ctx2[12], dirty, get_default_slot_changes), get_default_slot_context);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(if_block1);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (if_block0)
        if_block0.d(detaching);
      if (detaching)
        detach(t0);
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].d(detaching);
      }
      if (detaching)
        detach(t1);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance$j($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { theme = "white" } = $$props;
  let { tokens = {} } = $$props;
  let { persist = false } = $$props;
  let { persistKey = "theme" } = $$props;
  let { render = void 0 } = $$props;
  let { toggle = {
    themes: ["white", "g100"],
    labelA: "",
    labelB: "",
    labelText: "Dark mode",
    hideLabel: false
  } } = $$props;
  const themes = {
    white: "White",
    g10: "Gray 10",
    g80: "Gray 80",
    g90: "Gray 90",
    g100: "Gray 100"
  };
  const themeKeys = Object.keys(themes);
  let { select = {
    themes: themeKeys,
    labelText: "Themes",
    hideLabel: false
  } } = $$props;
  const dispatch = createEventDispatcher();
  function localstorage_value_binding(value) {
    theme = value;
    $$invalidate(0, theme);
  }
  const toggle_handler = ({ detail }) => {
    $$invalidate(0, theme = detail.toggled ? toggle.themes[1] : toggle.themes[0]);
  };
  function select_1_selected_binding(value) {
    theme = value;
    $$invalidate(0, theme);
  }
  $$self.$$set = ($$props2) => {
    if ("theme" in $$props2)
      $$invalidate(0, theme = $$props2.theme);
    if ("tokens" in $$props2)
      $$invalidate(7, tokens = $$props2.tokens);
    if ("persist" in $$props2)
      $$invalidate(1, persist = $$props2.persist);
    if ("persistKey" in $$props2)
      $$invalidate(2, persistKey = $$props2.persistKey);
    if ("render" in $$props2)
      $$invalidate(3, render = $$props2.render);
    if ("toggle" in $$props2)
      $$invalidate(4, toggle = $$props2.toggle);
    if ("select" in $$props2)
      $$invalidate(5, select = $$props2.select);
    if ("$$scope" in $$props2)
      $$invalidate(12, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 129) {
      if (typeof window !== "undefined") {
        Object.entries(tokens).forEach(([token, value]) => {
          document.documentElement.style.setProperty(`--cds-${token}`, value);
        });
        if (theme in themes) {
          document.documentElement.setAttribute("theme", theme);
          dispatch("update", { theme });
        } else {
          console.warn(`[Theme.svelte] invalid theme "${theme}". Value must be one of: ${JSON.stringify(Object.keys(themes))}`);
        }
      }
    }
  };
  return [
    theme,
    persist,
    persistKey,
    render,
    toggle,
    select,
    themes,
    tokens,
    slots,
    localstorage_value_binding,
    toggle_handler,
    select_1_selected_binding,
    $$scope
  ];
}
class Theme extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$j, create_fragment$j, safe_not_equal, {
      theme: 0,
      tokens: 7,
      persist: 1,
      persistKey: 2,
      render: 3,
      toggle: 4,
      select: 5
    });
  }
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
  let current;
  headernavitem0 = new HeaderNavItem({
    props: {
      isSelected: ctx[2] === "/blog/myblog",
      href: "myblog",
      text: "My Blog"
    }
  });
  headernavitem1 = new HeaderNavItem({
    props: {
      isSelected: ctx[2] === "/blog/otherblog",
      href: "otherblog",
      text: "Other Blogs"
    }
  });
  headernavitem2 = new HeaderNavItem({
    props: {
      isSelected: ctx[2] === "/blog/help",
      href: "help",
      text: "Need Help?"
    }
  });
  return {
    c() {
      create_component(headernavitem0.$$.fragment);
      t0 = space();
      create_component(headernavitem1.$$.fragment);
      t1 = space();
      create_component(headernavitem2.$$.fragment);
    },
    l(nodes) {
      claim_component(headernavitem0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(headernavitem1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(headernavitem2.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(headernavitem0, target, anchor);
      insert_hydration(target, t0, anchor);
      mount_component(headernavitem1, target, anchor);
      insert_hydration(target, t1, anchor);
      mount_component(headernavitem2, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const headernavitem0_changes = {};
      if (dirty & 4)
        headernavitem0_changes.isSelected = ctx2[2] === "/blog/myblog";
      headernavitem0.$set(headernavitem0_changes);
      const headernavitem1_changes = {};
      if (dirty & 4)
        headernavitem1_changes.isSelected = ctx2[2] === "/blog/otherblog";
      headernavitem1.$set(headernavitem1_changes);
      const headernavitem2_changes = {};
      if (dirty & 4)
        headernavitem2_changes.isSelected = ctx2[2] === "/blog/help";
      headernavitem2.$set(headernavitem2_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(headernavitem0.$$.fragment, local);
      transition_in(headernavitem1.$$.fragment, local);
      transition_in(headernavitem2.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(headernavitem0.$$.fragment, local);
      transition_out(headernavitem1.$$.fragment, local);
      transition_out(headernavitem2.$$.fragment, local);
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
  let t4;
  let br0;
  let br1;
  let t5;
  let headerpanellink4;
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
  headerpanellink4 = new HeaderPanelLink({});
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
      t4 = space();
      br0 = element("br");
      br1 = element("br");
      t5 = space();
      create_component(headerpanellink4.$$.fragment);
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
      t4 = claim_space(nodes);
      br0 = claim_element(nodes, "BR", {});
      br1 = claim_element(nodes, "BR", {});
      t5 = claim_space(nodes);
      claim_component(headerpanellink4.$$.fragment, nodes);
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
      insert_hydration(target, t4, anchor);
      insert_hydration(target, br0, anchor);
      insert_hydration(target, br1, anchor);
      insert_hydration(target, t5, anchor);
      mount_component(headerpanellink4, target, anchor);
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
      transition_in(headerpanellink4.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(headerpanellink0.$$.fragment, local);
      transition_out(headerpanellink1.$$.fragment, local);
      transition_out(headerpaneldivider.$$.fragment, local);
      transition_out(headerpanellink2.$$.fragment, local);
      transition_out(headerpanellink3.$$.fragment, local);
      transition_out(headerpanellink4.$$.fragment, local);
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
      if (detaching)
        detach(t4);
      if (detaching)
        detach(br0);
      if (detaching)
        detach(br1);
      if (detaching)
        detach(t5);
      destroy_component(headerpanellink4, detaching);
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
  let headeraction0;
  let t;
  let headeraction1;
  let updating_isOpen;
  let current;
  headeraction0 = new HeaderAction({
    props: {
      icon: "",
      transition: "false",
      text: "This app was inspired by BXB8508"
    }
  });
  function headeraction1_isOpen_binding(value) {
    ctx[7](value);
  }
  let headeraction1_props = {
    icon: UserAvatarFilledAlt,
    closeIcon: UserAvatarFilledAlt,
    $$slots: { default: [create_default_slot_6] },
    $$scope: { ctx }
  };
  if (ctx[1] !== void 0) {
    headeraction1_props.isOpen = ctx[1];
  }
  headeraction1 = new HeaderAction({ props: headeraction1_props });
  binding_callbacks.push(() => bind(headeraction1, "isOpen", headeraction1_isOpen_binding));
  return {
    c() {
      create_component(headeraction0.$$.fragment);
      t = space();
      create_component(headeraction1.$$.fragment);
    },
    l(nodes) {
      claim_component(headeraction0.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(headeraction1.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(headeraction0, target, anchor);
      insert_hydration(target, t, anchor);
      mount_component(headeraction1, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const headeraction1_changes = {};
      if (dirty & 1032) {
        headeraction1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_isOpen && dirty & 2) {
        updating_isOpen = true;
        headeraction1_changes.isOpen = ctx2[1];
        add_flush_callback(() => updating_isOpen = false);
      }
      headeraction1.$set(headeraction1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(headeraction0.$$.fragment, local);
      transition_in(headeraction1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(headeraction0.$$.fragment, local);
      transition_out(headeraction1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(headeraction0, detaching);
      if (detaching)
        detach(t);
      destroy_component(headeraction1, detaching);
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
  let t3;
  let sidenavmenuitem4;
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
    props: { href: "help", text: "Need Help?" }
  });
  sidenavmenuitem4 = new SideNavMenuItem({
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
      t3 = space();
      create_component(sidenavmenuitem4.$$.fragment);
    },
    l(nodes) {
      claim_component(sidenavmenuitem0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(sidenavmenuitem1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(sidenavmenuitem2.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(sidenavmenuitem3.$$.fragment, nodes);
      t3 = claim_space(nodes);
      claim_component(sidenavmenuitem4.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(sidenavmenuitem0, target, anchor);
      insert_hydration(target, t0, anchor);
      mount_component(sidenavmenuitem1, target, anchor);
      insert_hydration(target, t1, anchor);
      mount_component(sidenavmenuitem2, target, anchor);
      insert_hydration(target, t2, anchor);
      mount_component(sidenavmenuitem3, target, anchor);
      insert_hydration(target, t3, anchor);
      mount_component(sidenavmenuitem4, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const sidenavmenuitem4_changes = {};
      if (dirty & 1024) {
        sidenavmenuitem4_changes.$$scope = { dirty, ctx: ctx2 };
      }
      sidenavmenuitem4.$set(sidenavmenuitem4_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(sidenavmenuitem0.$$.fragment, local);
      transition_in(sidenavmenuitem1.$$.fragment, local);
      transition_in(sidenavmenuitem2.$$.fragment, local);
      transition_in(sidenavmenuitem3.$$.fragment, local);
      transition_in(sidenavmenuitem4.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(sidenavmenuitem0.$$.fragment, local);
      transition_out(sidenavmenuitem1.$$.fragment, local);
      transition_out(sidenavmenuitem2.$$.fragment, local);
      transition_out(sidenavmenuitem3.$$.fragment, local);
      transition_out(sidenavmenuitem4.$$.fragment, local);
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
      if (detaching)
        detach(t3);
      destroy_component(sidenavmenuitem4, detaching);
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
  let theme;
  let t0;
  let br0;
  let br1;
  let t1;
  let current;
  theme = new Theme({ props: { render: "toggle" } });
  const default_slot_template = ctx[6].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[10], null);
  return {
    c() {
      create_component(theme.$$.fragment);
      t0 = space();
      br0 = element("br");
      br1 = element("br");
      t1 = space();
      if (default_slot)
        default_slot.c();
    },
    l(nodes) {
      claim_component(theme.$$.fragment, nodes);
      t0 = claim_space(nodes);
      br0 = claim_element(nodes, "BR", {});
      br1 = claim_element(nodes, "BR", {});
      t1 = claim_space(nodes);
      if (default_slot)
        default_slot.l(nodes);
    },
    m(target, anchor) {
      mount_component(theme, target, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, br0, anchor);
      insert_hydration(target, br1, anchor);
      insert_hydration(target, t1, anchor);
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
      transition_in(theme.$$.fragment, local);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(theme.$$.fragment, local);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      destroy_component(theme, detaching);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(br0);
      if (detaching)
        detach(br1);
      if (detaching)
        detach(t1);
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
  function headeraction1_isOpen_binding(value) {
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
    headeraction1_isOpen_binding,
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
