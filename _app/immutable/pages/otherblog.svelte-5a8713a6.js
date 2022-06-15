import { S as SvelteComponent, i as init, s as safe_not_equal, U as svg_element, t as text, V as claim_svg_element, a as children, h as claim_text, d as detach, g as insert_hydration, Q as append_hydration, j as set_data, C as assign, b as attr, W as set_svg_attributes, z as get_spread_update, E as noop, F as compute_rest_props, H as exclude_internal_props, e as element, k as space, c as claim_element, m as claim_space, L as toggle_class, P as set_attributes, R as listen, T as run_all, I as bubble, l as empty, n as group_outros, o as transition_out, p as check_outros, q as transition_in, a1 as createEventDispatcher, J as binding_callbacks, K as create_slot, w as create_component, x as claim_component, y as mount_component, ab as set_input_value, B as destroy_component, M as update_slot_base, N as get_all_dirty_from_scope, O as get_slot_changes, A as get_spread_object, _ as bind, Y as add_flush_callback, a9 as destroy_each, Z as component_subscribe } from "../chunks/index-fe8f50da.js";
import { f as fetchBlogs, P as Post, C as Comment, a as fetchComments, c as comments, o as otherBlogs } from "../chunks/comments-90ffdf00.js";
import { T as TextInput, V as Viewer } from "../chunks/viewer-72edec5c.js";
import "../chunks/HeaderSearch.svelte_svelte_type_style_lang-50804c02.js";
import { C as Close, B as Button, u as user } from "../chunks/Close-d254d283.js";
import "../chunks/index-8a7c489c.js";
function create_if_block$5(ctx) {
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
function create_fragment$6(ctx) {
  let svg;
  let path;
  let if_block = ctx[1] && create_if_block$5(ctx);
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
      attr(path, "d", "M29,27.5859l-7.5521-7.5521a11.0177,11.0177,0,1,0-1.4141,1.4141L27.5859,29ZM4,13a9,9,0,1,1,9,9A9.01,9.01,0,0,1,4,13Z");
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
          if_block = create_if_block$5(ctx2);
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
function instance$6($$self, $$props, $$invalidate) {
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
class IconSearch extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$6, create_fragment$6, safe_not_equal, { size: 0, title: 1 });
  }
}
function create_fragment$5(ctx) {
  let div1;
  let span;
  let t;
  let div0;
  let mounted;
  let dispose;
  let div1_levels = [ctx[1]];
  let div1_data = {};
  for (let i = 0; i < div1_levels.length; i += 1) {
    div1_data = assign(div1_data, div1_levels[i]);
  }
  return {
    c() {
      div1 = element("div");
      span = element("span");
      t = space();
      div0 = element("div");
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", {});
      var div1_nodes = children(div1);
      span = claim_element(div1_nodes, "SPAN", {});
      children(span).forEach(detach);
      t = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", {});
      children(div0).forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      toggle_class(span, "bx--label", true);
      toggle_class(div0, "bx--search-input", true);
      set_attributes(div1, div1_data);
      toggle_class(div1, "bx--skeleton", true);
      toggle_class(div1, "bx--search--sm", ctx[0] === "sm");
      toggle_class(div1, "bx--search--lg", ctx[0] === "lg");
      toggle_class(div1, "bx--search--xl", ctx[0] === "xl");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, span);
      append_hydration(div1, t);
      append_hydration(div1, div0);
      if (!mounted) {
        dispose = [
          listen(div1, "click", ctx[2]),
          listen(div1, "mouseover", ctx[3]),
          listen(div1, "mouseenter", ctx[4]),
          listen(div1, "mouseleave", ctx[5])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      set_attributes(div1, div1_data = get_spread_update(div1_levels, [dirty & 2 && ctx2[1]]));
      toggle_class(div1, "bx--skeleton", true);
      toggle_class(div1, "bx--search--sm", ctx2[0] === "sm");
      toggle_class(div1, "bx--search--lg", ctx2[0] === "lg");
      toggle_class(div1, "bx--search--xl", ctx2[0] === "xl");
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div1);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$5($$self, $$props, $$invalidate) {
  const omit_props_names = ["size"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { size = "xl" } = $$props;
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
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(1, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("size" in $$new_props)
      $$invalidate(0, size = $$new_props.size);
  };
  return [
    size,
    $$restProps,
    click_handler,
    mouseover_handler,
    mouseenter_handler,
    mouseleave_handler
  ];
}
class SearchSkeleton extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$5, create_fragment$5, safe_not_equal, { size: 0 });
  }
}
const get_labelText_slot_changes = (dirty) => ({});
const get_labelText_slot_context = (ctx) => ({});
function create_else_block$1(ctx) {
  let div1;
  let div0;
  let switch_instance0;
  let t0;
  let label;
  let label_id_value;
  let t1;
  let input;
  let input_autofocus_value;
  let t2;
  let button;
  let switch_instance1;
  let div1_aria_labelledby_value;
  let current;
  let mounted;
  let dispose;
  var switch_value = ctx[14];
  function switch_props(ctx2) {
    return {
      props: { class: "bx--search-magnifier-icon" }
    };
  }
  if (switch_value) {
    switch_instance0 = new switch_value(switch_props());
  }
  const labelText_slot_template = ctx[20].labelText;
  const labelText_slot = create_slot(labelText_slot_template, ctx, ctx[19], get_labelText_slot_context);
  const labelText_slot_or_fallback = labelText_slot || fallback_block(ctx);
  let input_levels = [
    { type: "text" },
    { role: "searchbox" },
    {
      autofocus: input_autofocus_value = ctx[11] === true ? true : void 0
    },
    { autocomplete: ctx[10] },
    { disabled: ctx[7] },
    { id: ctx[15] },
    { placeholder: ctx[9] },
    ctx[18]
  ];
  let input_data = {};
  for (let i = 0; i < input_levels.length; i += 1) {
    input_data = assign(input_data, input_levels[i]);
  }
  var switch_value_1 = Close;
  function switch_props_1(ctx2) {
    return {
      props: { size: ctx2[3] === "xl" ? 20 : 16 }
    };
  }
  if (switch_value_1) {
    switch_instance1 = new switch_value_1(switch_props_1(ctx));
  }
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      if (switch_instance0)
        create_component(switch_instance0.$$.fragment);
      t0 = space();
      label = element("label");
      if (labelText_slot_or_fallback)
        labelText_slot_or_fallback.c();
      t1 = space();
      input = element("input");
      t2 = space();
      button = element("button");
      if (switch_instance1)
        create_component(switch_instance1.$$.fragment);
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", {
        role: true,
        "aria-labelledby": true,
        class: true
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {});
      var div0_nodes = children(div0);
      if (switch_instance0)
        claim_component(switch_instance0.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      t0 = claim_space(div1_nodes);
      label = claim_element(div1_nodes, "LABEL", { id: true, for: true });
      var label_nodes = children(label);
      if (labelText_slot_or_fallback)
        labelText_slot_or_fallback.l(label_nodes);
      label_nodes.forEach(detach);
      t1 = claim_space(div1_nodes);
      input = claim_element(div1_nodes, "INPUT", {
        type: true,
        role: true,
        autocomplete: true,
        id: true,
        placeholder: true
      });
      t2 = claim_space(div1_nodes);
      button = claim_element(div1_nodes, "BUTTON", { type: true, "aria-label": true });
      var button_nodes = children(button);
      if (switch_instance1)
        claim_component(switch_instance1.$$.fragment, button_nodes);
      button_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      toggle_class(div0, "bx--search-magnifier", true);
      attr(label, "id", label_id_value = ctx[15] + "-search");
      attr(label, "for", ctx[15]);
      toggle_class(label, "bx--label", true);
      set_attributes(input, input_data);
      toggle_class(input, "bx--search-input", true);
      attr(button, "type", "button");
      attr(button, "aria-label", ctx[12]);
      button.disabled = ctx[7];
      toggle_class(button, "bx--search-close", true);
      toggle_class(button, "bx--search-close--hidden", ctx[2] === "");
      attr(div1, "role", "search");
      attr(div1, "aria-labelledby", div1_aria_labelledby_value = ctx[15] + "-search");
      attr(div1, "class", ctx[4]);
      toggle_class(div1, "bx--search", true);
      toggle_class(div1, "bx--search--light", ctx[6]);
      toggle_class(div1, "bx--search--disabled", ctx[7]);
      toggle_class(div1, "bx--search--sm", ctx[3] === "sm");
      toggle_class(div1, "bx--search--lg", ctx[3] === "lg");
      toggle_class(div1, "bx--search--xl", ctx[3] === "xl");
      toggle_class(div1, "bx--search--expandable", ctx[8]);
      toggle_class(div1, "bx--search--expanded", ctx[0]);
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      if (switch_instance0) {
        mount_component(switch_instance0, div0, null);
      }
      ctx[33](div0);
      append_hydration(div1, t0);
      append_hydration(div1, label);
      if (labelText_slot_or_fallback) {
        labelText_slot_or_fallback.m(label, null);
      }
      append_hydration(div1, t1);
      append_hydration(div1, input);
      if (input.autofocus)
        input.focus();
      ctx[35](input);
      set_input_value(input, ctx[2]);
      append_hydration(div1, t2);
      append_hydration(div1, button);
      if (switch_instance1) {
        mount_component(switch_instance1, button, null);
      }
      current = true;
      if (!mounted) {
        dispose = [
          listen(div0, "click", ctx[34]),
          listen(input, "input", ctx[36]),
          listen(input, "change", ctx[22]),
          listen(input, "input", ctx[23]),
          listen(input, "focus", ctx[24]),
          listen(input, "focus", ctx[37]),
          listen(input, "blur", ctx[25]),
          listen(input, "blur", ctx[38]),
          listen(input, "keydown", ctx[26]),
          listen(input, "keydown", ctx[39]),
          listen(input, "keyup", ctx[27]),
          listen(input, "paste", ctx[28]),
          listen(button, "click", ctx[21]),
          listen(button, "click", ctx[40])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (switch_value !== (switch_value = ctx2[14])) {
        if (switch_instance0) {
          group_outros();
          const old_component = switch_instance0;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance0 = new switch_value(switch_props());
          create_component(switch_instance0.$$.fragment);
          transition_in(switch_instance0.$$.fragment, 1);
          mount_component(switch_instance0, div0, null);
        } else {
          switch_instance0 = null;
        }
      }
      if (labelText_slot) {
        if (labelText_slot.p && (!current || dirty[0] & 524288)) {
          update_slot_base(labelText_slot, labelText_slot_template, ctx2, ctx2[19], !current ? get_all_dirty_from_scope(ctx2[19]) : get_slot_changes(labelText_slot_template, ctx2[19], dirty, get_labelText_slot_changes), get_labelText_slot_context);
        }
      } else {
        if (labelText_slot_or_fallback && labelText_slot_or_fallback.p && (!current || dirty[0] & 8192)) {
          labelText_slot_or_fallback.p(ctx2, !current ? [-1, -1] : dirty);
        }
      }
      if (!current || dirty[0] & 32768 && label_id_value !== (label_id_value = ctx2[15] + "-search")) {
        attr(label, "id", label_id_value);
      }
      if (!current || dirty[0] & 32768) {
        attr(label, "for", ctx2[15]);
      }
      set_attributes(input, input_data = get_spread_update(input_levels, [
        { type: "text" },
        { role: "searchbox" },
        (!current || dirty[0] & 2048 && input_autofocus_value !== (input_autofocus_value = ctx2[11] === true ? true : void 0)) && { autofocus: input_autofocus_value },
        (!current || dirty[0] & 1024) && { autocomplete: ctx2[10] },
        (!current || dirty[0] & 128) && { disabled: ctx2[7] },
        (!current || dirty[0] & 32768) && { id: ctx2[15] },
        (!current || dirty[0] & 512) && { placeholder: ctx2[9] },
        dirty[0] & 262144 && ctx2[18]
      ]));
      if (dirty[0] & 4 && input.value !== ctx2[2]) {
        set_input_value(input, ctx2[2]);
      }
      toggle_class(input, "bx--search-input", true);
      const switch_instance1_changes = {};
      if (dirty[0] & 8)
        switch_instance1_changes.size = ctx2[3] === "xl" ? 20 : 16;
      if (switch_value_1 !== (switch_value_1 = Close)) {
        if (switch_instance1) {
          group_outros();
          const old_component = switch_instance1;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value_1) {
          switch_instance1 = new switch_value_1(switch_props_1(ctx2));
          create_component(switch_instance1.$$.fragment);
          transition_in(switch_instance1.$$.fragment, 1);
          mount_component(switch_instance1, button, null);
        } else {
          switch_instance1 = null;
        }
      } else if (switch_value_1) {
        switch_instance1.$set(switch_instance1_changes);
      }
      if (!current || dirty[0] & 4096) {
        attr(button, "aria-label", ctx2[12]);
      }
      if (!current || dirty[0] & 128) {
        button.disabled = ctx2[7];
      }
      if (dirty[0] & 4) {
        toggle_class(button, "bx--search-close--hidden", ctx2[2] === "");
      }
      if (!current || dirty[0] & 32768 && div1_aria_labelledby_value !== (div1_aria_labelledby_value = ctx2[15] + "-search")) {
        attr(div1, "aria-labelledby", div1_aria_labelledby_value);
      }
      if (!current || dirty[0] & 16) {
        attr(div1, "class", ctx2[4]);
      }
      if (dirty[0] & 16) {
        toggle_class(div1, "bx--search", true);
      }
      if (dirty[0] & 80) {
        toggle_class(div1, "bx--search--light", ctx2[6]);
      }
      if (dirty[0] & 144) {
        toggle_class(div1, "bx--search--disabled", ctx2[7]);
      }
      if (dirty[0] & 24) {
        toggle_class(div1, "bx--search--sm", ctx2[3] === "sm");
      }
      if (dirty[0] & 24) {
        toggle_class(div1, "bx--search--lg", ctx2[3] === "lg");
      }
      if (dirty[0] & 24) {
        toggle_class(div1, "bx--search--xl", ctx2[3] === "xl");
      }
      if (dirty[0] & 272) {
        toggle_class(div1, "bx--search--expandable", ctx2[8]);
      }
      if (dirty[0] & 17) {
        toggle_class(div1, "bx--search--expanded", ctx2[0]);
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance0)
        transition_in(switch_instance0.$$.fragment, local);
      transition_in(labelText_slot_or_fallback, local);
      if (switch_instance1)
        transition_in(switch_instance1.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance0)
        transition_out(switch_instance0.$$.fragment, local);
      transition_out(labelText_slot_or_fallback, local);
      if (switch_instance1)
        transition_out(switch_instance1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      if (switch_instance0)
        destroy_component(switch_instance0);
      ctx[33](null);
      if (labelText_slot_or_fallback)
        labelText_slot_or_fallback.d(detaching);
      ctx[35](null);
      if (switch_instance1)
        destroy_component(switch_instance1);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block$4(ctx) {
  let searchskeleton;
  let current;
  const searchskeleton_spread_levels = [{ size: ctx[3] }, ctx[18]];
  let searchskeleton_props = {};
  for (let i = 0; i < searchskeleton_spread_levels.length; i += 1) {
    searchskeleton_props = assign(searchskeleton_props, searchskeleton_spread_levels[i]);
  }
  searchskeleton = new SearchSkeleton({ props: searchskeleton_props });
  searchskeleton.$on("click", ctx[29]);
  searchskeleton.$on("mouseover", ctx[30]);
  searchskeleton.$on("mouseenter", ctx[31]);
  searchskeleton.$on("mouseleave", ctx[32]);
  return {
    c() {
      create_component(searchskeleton.$$.fragment);
    },
    l(nodes) {
      claim_component(searchskeleton.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(searchskeleton, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const searchskeleton_changes = dirty[0] & 262152 ? get_spread_update(searchskeleton_spread_levels, [
        dirty[0] & 8 && { size: ctx2[3] },
        dirty[0] & 262144 && get_spread_object(ctx2[18])
      ]) : {};
      searchskeleton.$set(searchskeleton_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(searchskeleton.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(searchskeleton.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(searchskeleton, detaching);
    }
  };
}
function fallback_block(ctx) {
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
function create_fragment$4(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$4, create_else_block$1];
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
function instance$4($$self, $$props, $$invalidate) {
  const omit_props_names = [
    "value",
    "size",
    "searchClass",
    "skeleton",
    "light",
    "disabled",
    "expandable",
    "expanded",
    "placeholder",
    "autocomplete",
    "autofocus",
    "closeButtonLabelText",
    "labelText",
    "icon",
    "id",
    "ref"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { value = "" } = $$props;
  let { size = "xl" } = $$props;
  let { searchClass = "" } = $$props;
  let { skeleton = false } = $$props;
  let { light = false } = $$props;
  let { disabled = false } = $$props;
  let { expandable = false } = $$props;
  let { expanded = false } = $$props;
  let { placeholder = "Search..." } = $$props;
  let { autocomplete = "off" } = $$props;
  let { autofocus = false } = $$props;
  let { closeButtonLabelText = "Clear search input" } = $$props;
  let { labelText = "" } = $$props;
  let { icon = IconSearch } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { ref = null } = $$props;
  const dispatch = createEventDispatcher();
  let searchRef = null;
  function click_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  function change_handler(event) {
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
  function keydown_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keyup_handler(event) {
    bubble.call(this, $$self, event);
  }
  function paste_handler(event) {
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
  function div0_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      searchRef = $$value;
      $$invalidate(16, searchRef);
    });
  }
  const click_handler_2 = () => {
    if (expandable)
      $$invalidate(0, expanded = true);
  };
  function input_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      ref = $$value;
      $$invalidate(1, ref);
    });
  }
  function input_input_handler() {
    value = this.value;
    $$invalidate(2, value);
  }
  const focus_handler_1 = () => {
    if (expandable)
      $$invalidate(0, expanded = true);
  };
  const blur_handler_1 = () => {
    if (expanded && value.trim().length === 0) {
      $$invalidate(0, expanded = false);
    }
  };
  const keydown_handler_1 = ({ key }) => {
    if (key === "Escape") {
      $$invalidate(2, value = "");
      dispatch("clear");
    }
  };
  const click_handler_3 = () => {
    $$invalidate(2, value = "");
    ref.focus();
    dispatch("clear");
  };
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(18, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("value" in $$new_props)
      $$invalidate(2, value = $$new_props.value);
    if ("size" in $$new_props)
      $$invalidate(3, size = $$new_props.size);
    if ("searchClass" in $$new_props)
      $$invalidate(4, searchClass = $$new_props.searchClass);
    if ("skeleton" in $$new_props)
      $$invalidate(5, skeleton = $$new_props.skeleton);
    if ("light" in $$new_props)
      $$invalidate(6, light = $$new_props.light);
    if ("disabled" in $$new_props)
      $$invalidate(7, disabled = $$new_props.disabled);
    if ("expandable" in $$new_props)
      $$invalidate(8, expandable = $$new_props.expandable);
    if ("expanded" in $$new_props)
      $$invalidate(0, expanded = $$new_props.expanded);
    if ("placeholder" in $$new_props)
      $$invalidate(9, placeholder = $$new_props.placeholder);
    if ("autocomplete" in $$new_props)
      $$invalidate(10, autocomplete = $$new_props.autocomplete);
    if ("autofocus" in $$new_props)
      $$invalidate(11, autofocus = $$new_props.autofocus);
    if ("closeButtonLabelText" in $$new_props)
      $$invalidate(12, closeButtonLabelText = $$new_props.closeButtonLabelText);
    if ("labelText" in $$new_props)
      $$invalidate(13, labelText = $$new_props.labelText);
    if ("icon" in $$new_props)
      $$invalidate(14, icon = $$new_props.icon);
    if ("id" in $$new_props)
      $$invalidate(15, id = $$new_props.id);
    if ("ref" in $$new_props)
      $$invalidate(1, ref = $$new_props.ref);
    if ("$$scope" in $$new_props)
      $$invalidate(19, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & 3) {
      if (expanded && ref)
        ref.focus();
    }
    if ($$self.$$.dirty[0] & 1) {
      dispatch(expanded ? "expand" : "collapse");
    }
  };
  return [
    expanded,
    ref,
    value,
    size,
    searchClass,
    skeleton,
    light,
    disabled,
    expandable,
    placeholder,
    autocomplete,
    autofocus,
    closeButtonLabelText,
    labelText,
    icon,
    id,
    searchRef,
    dispatch,
    $$restProps,
    $$scope,
    slots,
    click_handler_1,
    change_handler,
    input_handler,
    focus_handler,
    blur_handler,
    keydown_handler,
    keyup_handler,
    paste_handler,
    click_handler,
    mouseover_handler,
    mouseenter_handler,
    mouseleave_handler,
    div0_binding,
    click_handler_2,
    input_binding,
    input_input_handler,
    focus_handler_1,
    blur_handler_1,
    keydown_handler_1,
    click_handler_3
  ];
}
class Search extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$4, safe_not_equal, {
      value: 2,
      size: 3,
      searchClass: 4,
      skeleton: 5,
      light: 6,
      disabled: 7,
      expandable: 8,
      expanded: 0,
      placeholder: 9,
      autocomplete: 10,
      autofocus: 11,
      closeButtonLabelText: 12,
      labelText: 13,
      icon: 14,
      id: 15,
      ref: 1
    }, null, [-1, -1]);
  }
}
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
  let path;
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
      attr(path, "d", "M22.45,6a5.47,5.47,0,0,1,3.91,1.64,5.7,5.7,0,0,1,0,8L16,26.13,5.64,15.64a5.7,5.7,0,0,1,0-8,5.48,5.48,0,0,1,7.82,0L16,10.24l2.53-2.58A5.44,5.44,0,0,1,22.45,6m0-2a7.47,7.47,0,0,0-5.34,2.24L16,7.36,14.89,6.24a7.49,7.49,0,0,0-10.68,0,7.72,7.72,0,0,0,0,10.82L16,29,27.79,17.06a7.72,7.72,0,0,0,0-10.82A7.49,7.49,0,0,0,22.45,4Z");
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
          if_block = create_if_block$3(ctx2);
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
class Favorite extends SvelteComponent {
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
  let path;
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
      attr(path, "d", "M22.5,4c-2,0-3.9,0.8-5.3,2.2L16,7.4l-1.1-1.1C12,3.3,7.2,3.3,4.3,6.2c0,0-0.1,0.1-0.1,0.1c-3,3-3,7.8,0,10.8L16,29	l11.8-11.9c3-3,3-7.8,0-10.8C26.4,4.8,24.5,4,22.5,4z");
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
          if_block = create_if_block$2(ctx2);
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
class FavoriteFilled extends SvelteComponent {
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
      attr(path, "d", "M6,30H4V2H28l-5.8,9L28,20H6ZM6,18H24.33L19.8,11l4.53-7H6Z");
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
class Flag extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { size: 0, title: 1 });
  }
}
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[20] = list[i];
  child_ctx[21] = list;
  child_ctx[22] = i;
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[23] = list[i];
  return child_ctx;
}
function create_if_block(ctx) {
  let br0;
  let br1;
  let t0;
  let post;
  let t1;
  let textinput;
  let updating_value;
  let t2;
  let button;
  let t3;
  let br2;
  let br3;
  let t4;
  let t5;
  let br4;
  let br5;
  let br6;
  let br7;
  let current;
  post = new Post({
    props: {
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    }
  });
  function textinput_value_binding(value) {
    ctx[17](value, ctx[22]);
  }
  let textinput_props = {
    size: "lg",
    placeholder: "Comment on this post"
  };
  if (ctx[0][ctx[22]] !== void 0) {
    textinput_props.value = ctx[0][ctx[22]];
  }
  textinput = new TextInput({ props: textinput_props });
  binding_callbacks.push(() => bind(textinput, "value", textinput_value_binding));
  function click_handler_4() {
    return ctx[18](ctx[20], ctx[22]);
  }
  button = new Button({
    props: {
      kind: "tertiary",
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  button.$on("click", click_handler_4);
  let each_value_1 = ctx[2];
  let each_blocks = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      br0 = element("br");
      br1 = element("br");
      t0 = space();
      create_component(post.$$.fragment);
      t1 = space();
      create_component(textinput.$$.fragment);
      t2 = space();
      create_component(button.$$.fragment);
      t3 = space();
      br2 = element("br");
      br3 = element("br");
      t4 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t5 = space();
      br4 = element("br");
      br5 = element("br");
      br6 = element("br");
      br7 = element("br");
    },
    l(nodes) {
      br0 = claim_element(nodes, "BR", {});
      br1 = claim_element(nodes, "BR", {});
      t0 = claim_space(nodes);
      claim_component(post.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(textinput.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(button.$$.fragment, nodes);
      t3 = claim_space(nodes);
      br2 = claim_element(nodes, "BR", {});
      br3 = claim_element(nodes, "BR", {});
      t4 = claim_space(nodes);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      t5 = claim_space(nodes);
      br4 = claim_element(nodes, "BR", {});
      br5 = claim_element(nodes, "BR", {});
      br6 = claim_element(nodes, "BR", {});
      br7 = claim_element(nodes, "BR", {});
    },
    m(target, anchor) {
      insert_hydration(target, br0, anchor);
      insert_hydration(target, br1, anchor);
      insert_hydration(target, t0, anchor);
      mount_component(post, target, anchor);
      insert_hydration(target, t1, anchor);
      mount_component(textinput, target, anchor);
      insert_hydration(target, t2, anchor);
      mount_component(button, target, anchor);
      insert_hydration(target, t3, anchor);
      insert_hydration(target, br2, anchor);
      insert_hydration(target, br3, anchor);
      insert_hydration(target, t4, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_hydration(target, t5, anchor);
      insert_hydration(target, br4, anchor);
      insert_hydration(target, br5, anchor);
      insert_hydration(target, br6, anchor);
      insert_hydration(target, br7, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const post_changes = {};
      if (dirty & 67108890) {
        post_changes.$$scope = { dirty, ctx };
      }
      post.$set(post_changes);
      const textinput_changes = {};
      if (!updating_value && dirty & 1) {
        updating_value = true;
        textinput_changes.value = ctx[0][ctx[22]];
        add_flush_callback(() => updating_value = false);
      }
      textinput.$set(textinput_changes);
      const button_changes = {};
      if (dirty & 67108864) {
        button_changes.$$scope = { dirty, ctx };
      }
      button.$set(button_changes);
      if (dirty & 268) {
        each_value_1 = ctx[2];
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx, each_value_1, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block_1(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(t5.parentNode, t5);
          }
        }
        group_outros();
        for (i = each_value_1.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(post.$$.fragment, local);
      transition_in(textinput.$$.fragment, local);
      transition_in(button.$$.fragment, local);
      for (let i = 0; i < each_value_1.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      transition_out(post.$$.fragment, local);
      transition_out(textinput.$$.fragment, local);
      transition_out(button.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(br0);
      if (detaching)
        detach(br1);
      if (detaching)
        detach(t0);
      destroy_component(post, detaching);
      if (detaching)
        detach(t1);
      destroy_component(textinput, detaching);
      if (detaching)
        detach(t2);
      destroy_component(button, detaching);
      if (detaching)
        detach(t3);
      if (detaching)
        detach(br2);
      if (detaching)
        detach(br3);
      if (detaching)
        detach(t4);
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(t5);
      if (detaching)
        detach(br4);
      if (detaching)
        detach(br5);
      if (detaching)
        detach(br6);
      if (detaching)
        detach(br7);
    }
  };
}
function create_default_slot_5(ctx) {
  let t_value = ctx[20].user + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    l(nodes) {
      t = claim_text(nodes, t_value);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 8 && t_value !== (t_value = ctx2[20].user + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_else_block(ctx) {
  let button;
  let current;
  function click_handler_2() {
    return ctx[15](ctx[20]);
  }
  button = new Button({
    props: {
      kind: "tertiary",
      iconDescription: "Click to like post",
      icon: Favorite
    }
  });
  button.$on("click", click_handler_2);
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
    p(new_ctx, dirty) {
      ctx = new_ctx;
    },
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
function create_if_block_2(ctx) {
  let button;
  let current;
  function click_handler_1() {
    return ctx[14](ctx[20]);
  }
  button = new Button({
    props: {
      kind: "tertiary",
      iconDescription: "Click to unlike post",
      icon: FavoriteFilled
    }
  });
  button.$on("click", click_handler_1);
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
    p(new_ctx, dirty) {
      ctx = new_ctx;
    },
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
function create_default_slot_4(ctx) {
  let t;
  return {
    c() {
      t = text("Report Post");
    },
    l(nodes) {
      t = claim_text(nodes, "Report Post");
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
  let strong;
  let h2;
  let t0_value = ctx[20].title + "";
  let t0;
  let t1;
  let br0;
  let t2;
  let viewer;
  let updating_value;
  let t3;
  let br1;
  let t4;
  let h6;
  let t5;
  let t6_value = ctx[20].createdAt + "";
  let t6;
  let t7;
  let br2;
  let t8;
  let button0;
  let br3;
  let br4;
  let t9;
  let show_if;
  let current_block_type_index;
  let if_block;
  let t10;
  let button1;
  let t11;
  let br5;
  let br6;
  let t12;
  let t13_value = ctx[20].likes + "";
  let t13;
  let t14;
  let br7;
  let br8;
  let br9;
  let current;
  function viewer_value_binding(value) {
    ctx[12](value, ctx[20]);
  }
  let viewer_props = {};
  if (ctx[20].post !== void 0) {
    viewer_props.value = ctx[20].post;
  }
  viewer = new Viewer({ props: viewer_props });
  binding_callbacks.push(() => bind(viewer, "value", viewer_value_binding));
  function click_handler() {
    return ctx[13](ctx[20]);
  }
  button0 = new Button({
    props: {
      kind: "ghost",
      size: "small",
      $$slots: { default: [create_default_slot_5] },
      $$scope: { ctx }
    }
  });
  button0.$on("click", click_handler);
  const if_block_creators = [create_if_block_2, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (dirty & 24)
      show_if = null;
    if (show_if == null)
      show_if = !!ctx2[20].users_liked.includes(ctx2[4].name);
    if (show_if)
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx, -1);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  function click_handler_3() {
    return ctx[16](ctx[20]);
  }
  button1 = new Button({
    props: {
      kind: "tertiary",
      icon: Flag,
      $$slots: { default: [create_default_slot_4] },
      $$scope: { ctx }
    }
  });
  button1.$on("click", click_handler_3);
  return {
    c() {
      strong = element("strong");
      h2 = element("h2");
      t0 = text(t0_value);
      t1 = space();
      br0 = element("br");
      t2 = space();
      create_component(viewer.$$.fragment);
      t3 = space();
      br1 = element("br");
      t4 = space();
      h6 = element("h6");
      t5 = text("Posted at: ");
      t6 = text(t6_value);
      t7 = space();
      br2 = element("br");
      t8 = text("\n            Posted by: ");
      create_component(button0.$$.fragment);
      br3 = element("br");
      br4 = element("br");
      t9 = space();
      if_block.c();
      t10 = space();
      create_component(button1.$$.fragment);
      t11 = space();
      br5 = element("br");
      br6 = element("br");
      t12 = text("\n            Likes: ");
      t13 = text(t13_value);
      t14 = space();
      br7 = element("br");
      br8 = element("br");
      br9 = element("br");
    },
    l(nodes) {
      strong = claim_element(nodes, "STRONG", {});
      var strong_nodes = children(strong);
      h2 = claim_element(strong_nodes, "H2", {});
      var h2_nodes = children(h2);
      t0 = claim_text(h2_nodes, t0_value);
      h2_nodes.forEach(detach);
      strong_nodes.forEach(detach);
      t1 = claim_space(nodes);
      br0 = claim_element(nodes, "BR", {});
      t2 = claim_space(nodes);
      claim_component(viewer.$$.fragment, nodes);
      t3 = claim_space(nodes);
      br1 = claim_element(nodes, "BR", {});
      t4 = claim_space(nodes);
      h6 = claim_element(nodes, "H6", {});
      var h6_nodes = children(h6);
      t5 = claim_text(h6_nodes, "Posted at: ");
      t6 = claim_text(h6_nodes, t6_value);
      h6_nodes.forEach(detach);
      t7 = claim_space(nodes);
      br2 = claim_element(nodes, "BR", {});
      t8 = claim_text(nodes, "\n            Posted by: ");
      claim_component(button0.$$.fragment, nodes);
      br3 = claim_element(nodes, "BR", {});
      br4 = claim_element(nodes, "BR", {});
      t9 = claim_space(nodes);
      if_block.l(nodes);
      t10 = claim_space(nodes);
      claim_component(button1.$$.fragment, nodes);
      t11 = claim_space(nodes);
      br5 = claim_element(nodes, "BR", {});
      br6 = claim_element(nodes, "BR", {});
      t12 = claim_text(nodes, "\n            Likes: ");
      t13 = claim_text(nodes, t13_value);
      t14 = claim_space(nodes);
      br7 = claim_element(nodes, "BR", {});
      br8 = claim_element(nodes, "BR", {});
      br9 = claim_element(nodes, "BR", {});
    },
    m(target, anchor) {
      insert_hydration(target, strong, anchor);
      append_hydration(strong, h2);
      append_hydration(h2, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, br0, anchor);
      insert_hydration(target, t2, anchor);
      mount_component(viewer, target, anchor);
      insert_hydration(target, t3, anchor);
      insert_hydration(target, br1, anchor);
      insert_hydration(target, t4, anchor);
      insert_hydration(target, h6, anchor);
      append_hydration(h6, t5);
      append_hydration(h6, t6);
      insert_hydration(target, t7, anchor);
      insert_hydration(target, br2, anchor);
      insert_hydration(target, t8, anchor);
      mount_component(button0, target, anchor);
      insert_hydration(target, br3, anchor);
      insert_hydration(target, br4, anchor);
      insert_hydration(target, t9, anchor);
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, t10, anchor);
      mount_component(button1, target, anchor);
      insert_hydration(target, t11, anchor);
      insert_hydration(target, br5, anchor);
      insert_hydration(target, br6, anchor);
      insert_hydration(target, t12, anchor);
      insert_hydration(target, t13, anchor);
      insert_hydration(target, t14, anchor);
      insert_hydration(target, br7, anchor);
      insert_hydration(target, br8, anchor);
      insert_hydration(target, br9, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if ((!current || dirty & 8) && t0_value !== (t0_value = ctx[20].title + ""))
        set_data(t0, t0_value);
      const viewer_changes = {};
      if (!updating_value && dirty & 8) {
        updating_value = true;
        viewer_changes.value = ctx[20].post;
        add_flush_callback(() => updating_value = false);
      }
      viewer.$set(viewer_changes);
      if ((!current || dirty & 8) && t6_value !== (t6_value = ctx[20].createdAt + ""))
        set_data(t6, t6_value);
      const button0_changes = {};
      if (dirty & 67108872) {
        button0_changes.$$scope = { dirty, ctx };
      }
      button0.$set(button0_changes);
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx, dirty);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        } else {
          if_block.p(ctx, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(t10.parentNode, t10);
      }
      const button1_changes = {};
      if (dirty & 67108864) {
        button1_changes.$$scope = { dirty, ctx };
      }
      button1.$set(button1_changes);
      if ((!current || dirty & 8) && t13_value !== (t13_value = ctx[20].likes + ""))
        set_data(t13, t13_value);
    },
    i(local) {
      if (current)
        return;
      transition_in(viewer.$$.fragment, local);
      transition_in(button0.$$.fragment, local);
      transition_in(if_block);
      transition_in(button1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(viewer.$$.fragment, local);
      transition_out(button0.$$.fragment, local);
      transition_out(if_block);
      transition_out(button1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(strong);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(br0);
      if (detaching)
        detach(t2);
      destroy_component(viewer, detaching);
      if (detaching)
        detach(t3);
      if (detaching)
        detach(br1);
      if (detaching)
        detach(t4);
      if (detaching)
        detach(h6);
      if (detaching)
        detach(t7);
      if (detaching)
        detach(br2);
      if (detaching)
        detach(t8);
      destroy_component(button0, detaching);
      if (detaching)
        detach(br3);
      if (detaching)
        detach(br4);
      if (detaching)
        detach(t9);
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(t10);
      destroy_component(button1, detaching);
      if (detaching)
        detach(t11);
      if (detaching)
        detach(br5);
      if (detaching)
        detach(br6);
      if (detaching)
        detach(t12);
      if (detaching)
        detach(t13);
      if (detaching)
        detach(t14);
      if (detaching)
        detach(br7);
      if (detaching)
        detach(br8);
      if (detaching)
        detach(br9);
    }
  };
}
function create_default_slot_2(ctx) {
  let t;
  return {
    c() {
      t = text("Submit Comment");
    },
    l(nodes) {
      t = claim_text(nodes, "Submit Comment");
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
function create_if_block_1(ctx) {
  let comment;
  let current;
  comment = new Comment({
    props: {
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(comment.$$.fragment);
    },
    l(nodes) {
      claim_component(comment.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(comment, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const comment_changes = {};
      if (dirty & 67108868) {
        comment_changes.$$scope = { dirty, ctx: ctx2 };
      }
      comment.$set(comment_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(comment.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(comment.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(comment, detaching);
    }
  };
}
function create_default_slot_1(ctx) {
  let t;
  return {
    c() {
      t = text("Report Comment");
    },
    l(nodes) {
      t = claim_text(nodes, "Report Comment");
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
function create_default_slot(ctx) {
  let t0_value = ctx[23].user_commented + "";
  let t0;
  let t1;
  let br0;
  let br1;
  let t2;
  let t3_value = ctx[23].comment + "";
  let t3;
  let t4;
  let br2;
  let br3;
  let t5;
  let t6_value = ctx[23].createdAt.toLocaleString() + "";
  let t6;
  let t7;
  let br4;
  let t8;
  let button;
  let t9;
  let br5;
  let br6;
  let br7;
  let br8;
  let current;
  function click_handler_5() {
    return ctx[19](ctx[23]);
  }
  button = new Button({
    props: {
      kind: "tertiary",
      icon: Flag,
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  button.$on("click", click_handler_5);
  return {
    c() {
      t0 = text(t0_value);
      t1 = text(" commented: ");
      br0 = element("br");
      br1 = element("br");
      t2 = space();
      t3 = text(t3_value);
      t4 = space();
      br2 = element("br");
      br3 = element("br");
      t5 = text("\n                    Commented At: ");
      t6 = text(t6_value);
      t7 = space();
      br4 = element("br");
      t8 = space();
      create_component(button.$$.fragment);
      t9 = space();
      br5 = element("br");
      br6 = element("br");
      br7 = element("br");
      br8 = element("br");
    },
    l(nodes) {
      t0 = claim_text(nodes, t0_value);
      t1 = claim_text(nodes, " commented: ");
      br0 = claim_element(nodes, "BR", {});
      br1 = claim_element(nodes, "BR", {});
      t2 = claim_space(nodes);
      t3 = claim_text(nodes, t3_value);
      t4 = claim_space(nodes);
      br2 = claim_element(nodes, "BR", {});
      br3 = claim_element(nodes, "BR", {});
      t5 = claim_text(nodes, "\n                    Commented At: ");
      t6 = claim_text(nodes, t6_value);
      t7 = claim_space(nodes);
      br4 = claim_element(nodes, "BR", {});
      t8 = claim_space(nodes);
      claim_component(button.$$.fragment, nodes);
      t9 = claim_space(nodes);
      br5 = claim_element(nodes, "BR", {});
      br6 = claim_element(nodes, "BR", {});
      br7 = claim_element(nodes, "BR", {});
      br8 = claim_element(nodes, "BR", {});
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, br0, anchor);
      insert_hydration(target, br1, anchor);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, t3, anchor);
      insert_hydration(target, t4, anchor);
      insert_hydration(target, br2, anchor);
      insert_hydration(target, br3, anchor);
      insert_hydration(target, t5, anchor);
      insert_hydration(target, t6, anchor);
      insert_hydration(target, t7, anchor);
      insert_hydration(target, br4, anchor);
      insert_hydration(target, t8, anchor);
      mount_component(button, target, anchor);
      insert_hydration(target, t9, anchor);
      insert_hydration(target, br5, anchor);
      insert_hydration(target, br6, anchor);
      insert_hydration(target, br7, anchor);
      insert_hydration(target, br8, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if ((!current || dirty & 4) && t0_value !== (t0_value = ctx[23].user_commented + ""))
        set_data(t0, t0_value);
      if ((!current || dirty & 4) && t3_value !== (t3_value = ctx[23].comment + ""))
        set_data(t3, t3_value);
      if ((!current || dirty & 4) && t6_value !== (t6_value = ctx[23].createdAt.toLocaleString() + ""))
        set_data(t6, t6_value);
      const button_changes = {};
      if (dirty & 67108864) {
        button_changes.$$scope = { dirty, ctx };
      }
      button.$set(button_changes);
    },
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
      if (detaching)
        detach(t0);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(br0);
      if (detaching)
        detach(br1);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(t3);
      if (detaching)
        detach(t4);
      if (detaching)
        detach(br2);
      if (detaching)
        detach(br3);
      if (detaching)
        detach(t5);
      if (detaching)
        detach(t6);
      if (detaching)
        detach(t7);
      if (detaching)
        detach(br4);
      if (detaching)
        detach(t8);
      destroy_component(button, detaching);
      if (detaching)
        detach(t9);
      if (detaching)
        detach(br5);
      if (detaching)
        detach(br6);
      if (detaching)
        detach(br7);
      if (detaching)
        detach(br8);
    }
  };
}
function create_each_block_1(ctx) {
  let if_block_anchor;
  let current;
  let if_block = ctx[23].post_id == ctx[20].id && create_if_block_1(ctx);
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
      current = true;
    },
    p(ctx2, dirty) {
      if (ctx2[23].post_id == ctx2[20].id) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 12) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_1(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
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
        detach(if_block_anchor);
    }
  };
}
function create_each_block(ctx) {
  let if_block_anchor;
  let current;
  let if_block = (ctx[1] == "" || ctx[1] == ctx[20].user) && create_if_block(ctx);
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
      current = true;
    },
    p(ctx2, dirty) {
      if (ctx2[1] == "" || ctx2[1] == ctx2[20].user) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 10) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
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
        detach(if_block_anchor);
    }
  };
}
function create_fragment(ctx) {
  let br0;
  let t0;
  let search;
  let updating_value;
  let t1;
  let br1;
  let br2;
  let br3;
  let t2;
  let each_1_anchor;
  let current;
  function search_value_binding(value) {
    ctx[11](value);
  }
  let search_props = {};
  if (ctx[1] !== void 0) {
    search_props.value = ctx[1];
  }
  search = new Search({ props: search_props });
  binding_callbacks.push(() => bind(search, "value", search_value_binding));
  let each_value = ctx[3];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      br0 = element("br");
      t0 = space();
      create_component(search.$$.fragment);
      t1 = space();
      br1 = element("br");
      br2 = element("br");
      br3 = element("br");
      t2 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    l(nodes) {
      br0 = claim_element(nodes, "BR", {});
      t0 = claim_space(nodes);
      claim_component(search.$$.fragment, nodes);
      t1 = claim_space(nodes);
      br1 = claim_element(nodes, "BR", {});
      br2 = claim_element(nodes, "BR", {});
      br3 = claim_element(nodes, "BR", {});
      t2 = claim_space(nodes);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      insert_hydration(target, br0, anchor);
      insert_hydration(target, t0, anchor);
      mount_component(search, target, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, br1, anchor);
      insert_hydration(target, br2, anchor);
      insert_hydration(target, br3, anchor);
      insert_hydration(target, t2, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_hydration(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const search_changes = {};
      if (!updating_value && dirty & 2) {
        updating_value = true;
        search_changes.value = ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      search.$set(search_changes);
      if (dirty & 511) {
        each_value = ctx2[3];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(search.$$.fragment, local);
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      transition_out(search.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(br0);
      if (detaching)
        detach(t0);
      destroy_component(search, detaching);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(br1);
      if (detaching)
        detach(br2);
      if (detaching)
        detach(br3);
      if (detaching)
        detach(t2);
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let posts;
  let post_comments;
  let $user;
  let $comments;
  let $otherBlogs;
  component_subscribe($$self, user, ($$value) => $$invalidate(4, $user = $$value));
  component_subscribe($$self, comments, ($$value) => $$invalidate(9, $comments = $$value));
  component_subscribe($$self, otherBlogs, ($$value) => $$invalidate(10, $otherBlogs = $$value));
  Parse.initialize("AfiNKnlsASUOpcnt89tlHQ37vk9itLIBPhwq8arA", "RCLHA2TyiYdaHiDUcNGkHSwdo46xiohqc3igFZaJ");
  Parse.serverURL = "https://parseapi.back4app.com/";
  fetchBlogs($user.name);
  let searchUser = "";
  let user_comment = [];
  async function upload(post, comment) {
    const post_comment = new Parse.Object("comments");
    post_comment.set("post_id", post.id);
    post_comment.set("user", $user.name);
    post_comment.set("comment", comment);
    try {
      const result = await post_comment.save();
      fetchComments();
    } catch (error) {
      alert("Failed to create new object: " + error.message);
    }
    let index = user_comment.indexOf(comment);
    $$invalidate(0, user_comment[index] = "", user_comment);
    comment = "";
  }
  function like(post) {
    if (post.users_liked.includes($user.name)) {
      let index = post.users_liked.indexOf($user.name);
      post.users_liked.splice(index, 1);
    } else {
      post.users_liked.push($user.name);
    }
    post.likes = post.users_liked.length;
    const obj = post.object;
    obj.set("users_liked", post.users_liked);
    obj.set("likes", post.likes);
    obj.save();
    fetchBlogs($user.name);
  }
  function report_post(reported_post) {
    const post_obj = reported_post.object;
    if (reported_post.reports && reported_post.reports.includes($user.name)) {
      return;
    } else if (reported_post.reports == void 0) {
      reported_post.reports = [];
    }
    reported_post.reports.push($user.name);
    post_obj.set("reports", reported_post.reports);
    post_obj.save();
    console.log(reported_post);
  }
  function report_comment(reported_comment) {
    const comment_obj = reported_comment.object;
    if (reported_comment.reports && reported_comment.reports.includes($user.name)) {
      return;
    } else if (reported_comment.reports == void 0) {
      reported_comment.reports = [];
    }
    reported_comment.reports.push($user.name);
    comment_obj.set("reports", reported_comment.reports);
    comment_obj.save();
    console.log(reported_comment);
  }
  function search_value_binding(value) {
    searchUser = value;
    $$invalidate(1, searchUser);
  }
  function viewer_value_binding(value, post) {
    if ($$self.$$.not_equal(post.post, value)) {
      post.post = value;
      $$invalidate(3, posts), $$invalidate(10, $otherBlogs), $$invalidate(0, user_comment);
    }
  }
  const click_handler = (post) => $$invalidate(1, searchUser = post.user);
  const click_handler_1 = (post) => like(post);
  const click_handler_2 = (post) => like(post);
  const click_handler_3 = (post) => report_post(post);
  function textinput_value_binding(value, i) {
    if ($$self.$$.not_equal(user_comment[i], value)) {
      user_comment[i] = value;
      $$invalidate(0, user_comment);
    }
  }
  const click_handler_4 = (post, i) => upload(post, user_comment[i]);
  const click_handler_5 = (comment) => report_comment(comment);
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1025) {
      $$invalidate(3, posts = $otherBlogs.map((entry) => {
        let id = entry.id;
        let title = entry.title;
        let post = entry.post;
        let likes = entry.likes;
        let users_liked = entry.users_liked;
        let user2 = entry.user;
        let email = entry.email;
        let object = entry.object;
        let createdAt = entry.createdAt;
        var comment = "";
        user_comment.push("");
        return {
          id,
          title,
          post,
          comment,
          comments: [],
          likes,
          users_liked,
          object,
          user: user2,
          email,
          createdAt
        };
      }));
    }
    if ($$self.$$.dirty & 512) {
      $$invalidate(2, post_comments = $comments.map((entry) => {
        let post_id = entry["post_id"];
        let comment = entry.comment;
        let user_commented = entry.user_commented;
        let object = entry.object;
        let createdAt = entry.createdAt;
        let comment_id = entry.comment_id;
        return {
          object,
          user_commented,
          post_id,
          createdAt,
          comment,
          comment_id
        };
      }));
    }
  };
  return [
    user_comment,
    searchUser,
    post_comments,
    posts,
    $user,
    upload,
    like,
    report_post,
    report_comment,
    $comments,
    $otherBlogs,
    search_value_binding,
    viewer_value_binding,
    click_handler,
    click_handler_1,
    click_handler_2,
    click_handler_3,
    textinput_value_binding,
    click_handler_4,
    click_handler_5
  ];
}
class Otherblog extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { Otherblog as default };
