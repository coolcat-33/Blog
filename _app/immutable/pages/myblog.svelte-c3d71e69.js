import { S as SvelteComponent, i as init, s as safe_not_equal, e as element, w as create_component, c as claim_element, a as children, x as claim_component, d as detach, b as attr, L as toggle_class, g as insert_hydration, y as mount_component, R as listen, q as transition_in, o as transition_out, B as destroy_component, M as update_slot_base, N as get_all_dirty_from_scope, O as get_slot_changes, K as create_slot, k as space, m as claim_space, Q as append_hydration, n as group_outros, p as check_outros, C as assign, P as set_attributes, z as get_spread_update, T as run_all, F as compute_rest_props, a1 as createEventDispatcher, Z as component_subscribe, u as afterUpdate, H as exclude_internal_props, a5 as set_store_value, t as text, h as claim_text, j as set_data, l as empty, a8 as destroy_each, I as bubble, J as binding_callbacks, _ as bind, Y as add_flush_callback } from "../chunks/index-f6cf4e8a.js";
import { f as fetchBlogs, C as Comment, P as Post, c as comments, b as blogs } from "../chunks/comments-aa114095.js";
import { t as trackModal } from "../chunks/HeaderSearch.svelte_svelte_type_style_lang-954be5d7.js";
import { C as Close, B as Button, u as user } from "../chunks/Close-bd2cc31f.js";
import { w as writable } from "../chunks/index-d888c928.js";
import Createpost from "./createpost.svelte-de6a61ad.js";
import { V as Viewer } from "../chunks/viewer-f34691b1.js";
function get_each_context$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[55] = list[i];
  return child_ctx;
}
const get_heading_slot_changes = (dirty) => ({});
const get_heading_slot_context = (ctx) => ({});
const get_label_slot_changes = (dirty) => ({});
const get_label_slot_context = (ctx) => ({});
function create_if_block_6(ctx) {
  let button;
  let close;
  let current;
  let mounted;
  let dispose;
  close = new Close({
    props: {
      size: 20,
      class: "bx--modal-close__icon",
      "aria-hidden": "true"
    }
  });
  return {
    c() {
      button = element("button");
      create_component(close.$$.fragment);
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", { type: true, "aria-label": true });
      var button_nodes = children(button);
      claim_component(close.$$.fragment, button_nodes);
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "type", "button");
      attr(button, "aria-label", ctx[8]);
      toggle_class(button, "bx--modal-close", true);
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      mount_component(close, button, null);
      ctx[37](button);
      current = true;
      if (!mounted) {
        dispose = listen(button, "click", ctx[38]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (!current || dirty[0] & 256) {
        attr(button, "aria-label", ctx2[8]);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(close.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(close.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(button);
      destroy_component(close);
      ctx[37](null);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block_5(ctx) {
  let h2;
  let current;
  const label_slot_template = ctx[31].label;
  const label_slot = create_slot(label_slot_template, ctx, ctx[50], get_label_slot_context);
  const label_slot_or_fallback = label_slot || fallback_block_1(ctx);
  return {
    c() {
      h2 = element("h2");
      if (label_slot_or_fallback)
        label_slot_or_fallback.c();
      this.h();
    },
    l(nodes) {
      h2 = claim_element(nodes, "H2", { id: true });
      var h2_nodes = children(h2);
      if (label_slot_or_fallback)
        label_slot_or_fallback.l(h2_nodes);
      h2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h2, "id", ctx[25]);
      toggle_class(h2, "bx--modal-header__label", true);
    },
    m(target, anchor) {
      insert_hydration(target, h2, anchor);
      if (label_slot_or_fallback) {
        label_slot_or_fallback.m(h2, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (label_slot) {
        if (label_slot.p && (!current || dirty[1] & 524288)) {
          update_slot_base(label_slot, label_slot_template, ctx2, ctx2[50], !current ? get_all_dirty_from_scope(ctx2[50]) : get_slot_changes(label_slot_template, ctx2[50], dirty, get_label_slot_changes), get_label_slot_context);
        }
      } else {
        if (label_slot_or_fallback && label_slot_or_fallback.p && (!current || dirty[0] & 128)) {
          label_slot_or_fallback.p(ctx2, !current ? [-1, -1] : dirty);
        }
      }
      if (!current || dirty[0] & 33554432) {
        attr(h2, "id", ctx2[25]);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(label_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(label_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(h2);
      if (label_slot_or_fallback)
        label_slot_or_fallback.d(detaching);
    }
  };
}
function fallback_block_1(ctx) {
  let t;
  return {
    c() {
      t = text(ctx[7]);
    },
    l(nodes) {
      t = claim_text(nodes, ctx[7]);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 128)
        set_data(t, ctx2[7]);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function fallback_block(ctx) {
  let t;
  return {
    c() {
      t = text(ctx[6]);
    },
    l(nodes) {
      t = claim_text(nodes, ctx[6]);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 64)
        set_data(t, ctx2[6]);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block_4(ctx) {
  let button;
  let close;
  let current;
  let mounted;
  let dispose;
  close = new Close({
    props: {
      size: 20,
      class: "bx--modal-close__icon",
      "aria-hidden": "true"
    }
  });
  return {
    c() {
      button = element("button");
      create_component(close.$$.fragment);
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", { type: true, "aria-label": true });
      var button_nodes = children(button);
      claim_component(close.$$.fragment, button_nodes);
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "type", "button");
      attr(button, "aria-label", ctx[8]);
      toggle_class(button, "bx--modal-close", true);
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      mount_component(close, button, null);
      ctx[39](button);
      current = true;
      if (!mounted) {
        dispose = listen(button, "click", ctx[40]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (!current || dirty[0] & 256) {
        attr(button, "aria-label", ctx2[8]);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(close.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(close.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(button);
      destroy_component(close);
      ctx[39](null);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block_3(ctx) {
  let div;
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
      toggle_class(div, "bx--modal-content--overflow-indicator", true);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_if_block$1(ctx) {
  let div;
  let current_block_type_index;
  let if_block;
  let t;
  let button;
  let current;
  const if_block_creators = [create_if_block_1, create_if_block_2];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[16].length > 0)
      return 0;
    if (ctx2[15])
      return 1;
    return -1;
  }
  if (~(current_block_type_index = select_block_type(ctx))) {
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  }
  button = new Button({
    props: {
      kind: ctx[3] ? "danger" : "primary",
      disabled: ctx[12],
      icon: ctx[13],
      $$slots: { default: [create_default_slot$1] },
      $$scope: { ctx }
    }
  });
  button.$on("click", ctx[43]);
  return {
    c() {
      div = element("div");
      if (if_block)
        if_block.c();
      t = space();
      create_component(button.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      if (if_block)
        if_block.l(div_nodes);
      t = claim_space(div_nodes);
      claim_component(button.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      toggle_class(div, "bx--modal-footer", true);
      toggle_class(div, "bx--modal-footer--three-button", ctx[16].length === 2);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].m(div, null);
      }
      append_hydration(div, t);
      mount_component(button, div, null);
      current = true;
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if (~current_block_type_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        }
      } else {
        if (if_block) {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
        }
        if (~current_block_type_index) {
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(div, t);
        } else {
          if_block = null;
        }
      }
      const button_changes = {};
      if (dirty[0] & 8)
        button_changes.kind = ctx2[3] ? "danger" : "primary";
      if (dirty[0] & 4096)
        button_changes.disabled = ctx2[12];
      if (dirty[0] & 8192)
        button_changes.icon = ctx2[13];
      if (dirty[0] & 2048 | dirty[1] & 524288) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
      if (dirty[0] & 65536) {
        toggle_class(div, "bx--modal-footer--three-button", ctx2[16].length === 2);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].d();
      }
      destroy_component(button);
    }
  };
}
function create_if_block_2(ctx) {
  let button;
  let current;
  button = new Button({
    props: {
      kind: "secondary",
      $$slots: { default: [create_default_slot_2$1] },
      $$scope: { ctx }
    }
  });
  button.$on("click", ctx[42]);
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
    p(ctx2, dirty) {
      const button_changes = {};
      if (dirty[0] & 32768 | dirty[1] & 524288) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
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
      destroy_component(button, detaching);
    }
  };
}
function create_if_block_1(ctx) {
  let each_1_anchor;
  let current;
  let each_value = ctx[16];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
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
      if (dirty[0] & 67174400) {
        each_value = ctx2[16];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$1(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$1(child_ctx);
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
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_default_slot_2$1(ctx) {
  let t;
  return {
    c() {
      t = text(ctx[15]);
    },
    l(nodes) {
      t = claim_text(nodes, ctx[15]);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 32768)
        set_data(t, ctx2[15]);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_1$1(ctx) {
  let t0_value = ctx[55].text + "";
  let t0;
  let t1;
  return {
    c() {
      t0 = text(t0_value);
      t1 = space();
    },
    l(nodes) {
      t0 = claim_text(nodes, t0_value);
      t1 = claim_space(nodes);
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, t1, anchor);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 65536 && t0_value !== (t0_value = ctx2[55].text + ""))
        set_data(t0, t0_value);
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(t1);
    }
  };
}
function create_each_block$1(ctx) {
  let button;
  let current;
  function click_handler_3() {
    return ctx[41](ctx[55]);
  }
  button = new Button({
    props: {
      kind: "secondary",
      $$slots: { default: [create_default_slot_1$1] },
      $$scope: { ctx }
    }
  });
  button.$on("click", click_handler_3);
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
      const button_changes = {};
      if (dirty[0] & 65536 | dirty[1] & 524288) {
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
      destroy_component(button, detaching);
    }
  };
}
function create_default_slot$1(ctx) {
  let t;
  return {
    c() {
      t = text(ctx[11]);
    },
    l(nodes) {
      t = claim_text(nodes, ctx[11]);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 2048)
        set_data(t, ctx2[11]);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment$1(ctx) {
  let div3;
  let div2;
  let div0;
  let t0;
  let t1;
  let h3;
  let t2;
  let t3;
  let div1;
  let div1_tabindex_value;
  let div1_role_value;
  let div1_aria_label_value;
  let div1_aria_labelledby_value;
  let t4;
  let t5;
  let div2_role_value;
  let div2_aria_describedby_value;
  let current;
  let mounted;
  let dispose;
  let if_block0 = ctx[5] && create_if_block_6(ctx);
  let if_block1 = ctx[7] && create_if_block_5(ctx);
  const heading_slot_template = ctx[31].heading;
  const heading_slot = create_slot(heading_slot_template, ctx, ctx[50], get_heading_slot_context);
  const heading_slot_or_fallback = heading_slot || fallback_block(ctx);
  let if_block2 = !ctx[5] && create_if_block_4(ctx);
  const default_slot_template = ctx[31].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[50], null);
  let if_block3 = ctx[10] && create_if_block_3();
  let if_block4 = !ctx[5] && create_if_block$1(ctx);
  let div3_levels = [{ role: "presentation" }, { id: ctx[18] }, ctx[28]];
  let div3_data = {};
  for (let i = 0; i < div3_levels.length; i += 1) {
    div3_data = assign(div3_data, div3_levels[i]);
  }
  return {
    c() {
      div3 = element("div");
      div2 = element("div");
      div0 = element("div");
      if (if_block0)
        if_block0.c();
      t0 = space();
      if (if_block1)
        if_block1.c();
      t1 = space();
      h3 = element("h3");
      if (heading_slot_or_fallback)
        heading_slot_or_fallback.c();
      t2 = space();
      if (if_block2)
        if_block2.c();
      t3 = space();
      div1 = element("div");
      if (default_slot)
        default_slot.c();
      t4 = space();
      if (if_block3)
        if_block3.c();
      t5 = space();
      if (if_block4)
        if_block4.c();
      this.h();
    },
    l(nodes) {
      div3 = claim_element(nodes, "DIV", { role: true, id: true });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", {
        tabindex: true,
        role: true,
        "aria-describedby": true,
        "aria-modal": true,
        "aria-label": true
      });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {});
      var div0_nodes = children(div0);
      if (if_block0)
        if_block0.l(div0_nodes);
      t0 = claim_space(div0_nodes);
      if (if_block1)
        if_block1.l(div0_nodes);
      t1 = claim_space(div0_nodes);
      h3 = claim_element(div0_nodes, "H3", { id: true });
      var h3_nodes = children(h3);
      if (heading_slot_or_fallback)
        heading_slot_or_fallback.l(h3_nodes);
      h3_nodes.forEach(detach);
      t2 = claim_space(div0_nodes);
      if (if_block2)
        if_block2.l(div0_nodes);
      div0_nodes.forEach(detach);
      t3 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        id: true,
        tabindex: true,
        role: true,
        "aria-label": true,
        "aria-labelledby": true
      });
      var div1_nodes = children(div1);
      if (default_slot)
        default_slot.l(div1_nodes);
      div1_nodes.forEach(detach);
      t4 = claim_space(div2_nodes);
      if (if_block3)
        if_block3.l(div2_nodes);
      t5 = claim_space(div2_nodes);
      if (if_block4)
        if_block4.l(div2_nodes);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h3, "id", ctx[24]);
      toggle_class(h3, "bx--modal-header__heading", true);
      toggle_class(div0, "bx--modal-header", true);
      attr(div1, "id", ctx[23]);
      attr(div1, "tabindex", div1_tabindex_value = ctx[10] ? "0" : void 0);
      attr(div1, "role", div1_role_value = ctx[10] ? "region" : void 0);
      attr(div1, "aria-label", div1_aria_label_value = ctx[10] ? ctx[22] : void 0);
      attr(div1, "aria-labelledby", div1_aria_labelledby_value = ctx[7] ? ctx[25] : ctx[24]);
      toggle_class(div1, "bx--modal-content", true);
      toggle_class(div1, "bx--modal-content--with-form", ctx[9]);
      toggle_class(div1, "bx--modal-scroll-content", ctx[10]);
      attr(div2, "tabindex", "-1");
      attr(div2, "role", div2_role_value = ctx[4] ? ctx[5] ? "alert" : "alertdialog" : "dialog");
      attr(div2, "aria-describedby", div2_aria_describedby_value = ctx[4] && !ctx[5] ? ctx[23] : void 0);
      attr(div2, "aria-modal", "true");
      attr(div2, "aria-label", ctx[22]);
      toggle_class(div2, "bx--modal-container", true);
      toggle_class(div2, "bx--modal-container--xs", ctx[2] === "xs");
      toggle_class(div2, "bx--modal-container--sm", ctx[2] === "sm");
      toggle_class(div2, "bx--modal-container--lg", ctx[2] === "lg");
      set_attributes(div3, div3_data);
      toggle_class(div3, "bx--modal", true);
      toggle_class(div3, "bx--modal-tall", !ctx[5]);
      toggle_class(div3, "is-visible", ctx[0]);
      toggle_class(div3, "bx--modal--danger", ctx[3]);
    },
    m(target, anchor) {
      insert_hydration(target, div3, anchor);
      append_hydration(div3, div2);
      append_hydration(div2, div0);
      if (if_block0)
        if_block0.m(div0, null);
      append_hydration(div0, t0);
      if (if_block1)
        if_block1.m(div0, null);
      append_hydration(div0, t1);
      append_hydration(div0, h3);
      if (heading_slot_or_fallback) {
        heading_slot_or_fallback.m(h3, null);
      }
      append_hydration(div0, t2);
      if (if_block2)
        if_block2.m(div0, null);
      append_hydration(div2, t3);
      append_hydration(div2, div1);
      if (default_slot) {
        default_slot.m(div1, null);
      }
      append_hydration(div2, t4);
      if (if_block3)
        if_block3.m(div2, null);
      append_hydration(div2, t5);
      if (if_block4)
        if_block4.m(div2, null);
      ctx[44](div2);
      ctx[46](div3);
      current = true;
      if (!mounted) {
        dispose = [
          listen(div2, "click", ctx[45]),
          listen(div3, "keydown", ctx[32]),
          listen(div3, "keydown", ctx[47]),
          listen(div3, "click", ctx[33]),
          listen(div3, "click", ctx[48]),
          listen(div3, "mouseover", ctx[34]),
          listen(div3, "mouseenter", ctx[35]),
          listen(div3, "mouseleave", ctx[36]),
          listen(div3, "transitionend", ctx[49])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (ctx2[5]) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty[0] & 32) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_6(ctx2);
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
      if (ctx2[7]) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty[0] & 128) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_5(ctx2);
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
      if (heading_slot) {
        if (heading_slot.p && (!current || dirty[1] & 524288)) {
          update_slot_base(heading_slot, heading_slot_template, ctx2, ctx2[50], !current ? get_all_dirty_from_scope(ctx2[50]) : get_slot_changes(heading_slot_template, ctx2[50], dirty, get_heading_slot_changes), get_heading_slot_context);
        }
      } else {
        if (heading_slot_or_fallback && heading_slot_or_fallback.p && (!current || dirty[0] & 64)) {
          heading_slot_or_fallback.p(ctx2, !current ? [-1, -1] : dirty);
        }
      }
      if (!current || dirty[0] & 16777216) {
        attr(h3, "id", ctx2[24]);
      }
      if (!ctx2[5]) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
          if (dirty[0] & 32) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block_4(ctx2);
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
      if (default_slot) {
        if (default_slot.p && (!current || dirty[1] & 524288)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[50], !current ? get_all_dirty_from_scope(ctx2[50]) : get_slot_changes(default_slot_template, ctx2[50], dirty, null), null);
        }
      }
      if (!current || dirty[0] & 8388608) {
        attr(div1, "id", ctx2[23]);
      }
      if (!current || dirty[0] & 1024 && div1_tabindex_value !== (div1_tabindex_value = ctx2[10] ? "0" : void 0)) {
        attr(div1, "tabindex", div1_tabindex_value);
      }
      if (!current || dirty[0] & 1024 && div1_role_value !== (div1_role_value = ctx2[10] ? "region" : void 0)) {
        attr(div1, "role", div1_role_value);
      }
      if (!current || dirty[0] & 4195328 && div1_aria_label_value !== (div1_aria_label_value = ctx2[10] ? ctx2[22] : void 0)) {
        attr(div1, "aria-label", div1_aria_label_value);
      }
      if (!current || dirty[0] & 50331776 && div1_aria_labelledby_value !== (div1_aria_labelledby_value = ctx2[7] ? ctx2[25] : ctx2[24])) {
        attr(div1, "aria-labelledby", div1_aria_labelledby_value);
      }
      if (dirty[0] & 512) {
        toggle_class(div1, "bx--modal-content--with-form", ctx2[9]);
      }
      if (dirty[0] & 1024) {
        toggle_class(div1, "bx--modal-scroll-content", ctx2[10]);
      }
      if (ctx2[10]) {
        if (if_block3)
          ;
        else {
          if_block3 = create_if_block_3();
          if_block3.c();
          if_block3.m(div2, t5);
        }
      } else if (if_block3) {
        if_block3.d(1);
        if_block3 = null;
      }
      if (!ctx2[5]) {
        if (if_block4) {
          if_block4.p(ctx2, dirty);
          if (dirty[0] & 32) {
            transition_in(if_block4, 1);
          }
        } else {
          if_block4 = create_if_block$1(ctx2);
          if_block4.c();
          transition_in(if_block4, 1);
          if_block4.m(div2, null);
        }
      } else if (if_block4) {
        group_outros();
        transition_out(if_block4, 1, 1, () => {
          if_block4 = null;
        });
        check_outros();
      }
      if (!current || dirty[0] & 48 && div2_role_value !== (div2_role_value = ctx2[4] ? ctx2[5] ? "alert" : "alertdialog" : "dialog")) {
        attr(div2, "role", div2_role_value);
      }
      if (!current || dirty[0] & 8388656 && div2_aria_describedby_value !== (div2_aria_describedby_value = ctx2[4] && !ctx2[5] ? ctx2[23] : void 0)) {
        attr(div2, "aria-describedby", div2_aria_describedby_value);
      }
      if (!current || dirty[0] & 4194304) {
        attr(div2, "aria-label", ctx2[22]);
      }
      if (dirty[0] & 4) {
        toggle_class(div2, "bx--modal-container--xs", ctx2[2] === "xs");
      }
      if (dirty[0] & 4) {
        toggle_class(div2, "bx--modal-container--sm", ctx2[2] === "sm");
      }
      if (dirty[0] & 4) {
        toggle_class(div2, "bx--modal-container--lg", ctx2[2] === "lg");
      }
      set_attributes(div3, div3_data = get_spread_update(div3_levels, [
        { role: "presentation" },
        (!current || dirty[0] & 262144) && { id: ctx2[18] },
        dirty[0] & 268435456 && ctx2[28]
      ]));
      toggle_class(div3, "bx--modal", true);
      toggle_class(div3, "bx--modal-tall", !ctx2[5]);
      toggle_class(div3, "is-visible", ctx2[0]);
      toggle_class(div3, "bx--modal--danger", ctx2[3]);
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(if_block1);
      transition_in(heading_slot_or_fallback, local);
      transition_in(if_block2);
      transition_in(default_slot, local);
      transition_in(if_block4);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      transition_out(heading_slot_or_fallback, local);
      transition_out(if_block2);
      transition_out(default_slot, local);
      transition_out(if_block4);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div3);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      if (heading_slot_or_fallback)
        heading_slot_or_fallback.d(detaching);
      if (if_block2)
        if_block2.d();
      if (default_slot)
        default_slot.d(detaching);
      if (if_block3)
        if_block3.d();
      if (if_block4)
        if_block4.d();
      ctx[44](null);
      ctx[46](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let modalLabelId;
  let modalHeadingId;
  let modalBodyId;
  let ariaLabel;
  const omit_props_names = [
    "size",
    "open",
    "danger",
    "alert",
    "passiveModal",
    "modalHeading",
    "modalLabel",
    "modalAriaLabel",
    "iconDescription",
    "hasForm",
    "hasScrollingContent",
    "primaryButtonText",
    "primaryButtonDisabled",
    "primaryButtonIcon",
    "shouldSubmitOnEnter",
    "secondaryButtonText",
    "secondaryButtons",
    "selectorPrimaryFocus",
    "preventCloseOnClickOutside",
    "id",
    "ref"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let $openStore;
  let { $$slots: slots = {}, $$scope } = $$props;
  let { size = void 0 } = $$props;
  let { open = false } = $$props;
  let { danger = false } = $$props;
  let { alert: alert2 = false } = $$props;
  let { passiveModal = false } = $$props;
  let { modalHeading = void 0 } = $$props;
  let { modalLabel = void 0 } = $$props;
  let { modalAriaLabel = void 0 } = $$props;
  let { iconDescription = "Close the modal" } = $$props;
  let { hasForm = false } = $$props;
  let { hasScrollingContent = false } = $$props;
  let { primaryButtonText = "" } = $$props;
  let { primaryButtonDisabled = false } = $$props;
  let { primaryButtonIcon = void 0 } = $$props;
  let { shouldSubmitOnEnter = true } = $$props;
  let { secondaryButtonText = "" } = $$props;
  let { secondaryButtons = [] } = $$props;
  let { selectorPrimaryFocus = "[data-modal-primary-focus]" } = $$props;
  let { preventCloseOnClickOutside = false } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { ref = null } = $$props;
  const dispatch = createEventDispatcher();
  let buttonRef = null;
  let innerModal = null;
  let opened = false;
  let didClickInnerModal = false;
  function focus(element2) {
    const node = (element2 || innerModal).querySelector(selectorPrimaryFocus) || buttonRef;
    node.focus();
  }
  const openStore = writable(open);
  component_subscribe($$self, openStore, (value) => $$invalidate(52, $openStore = value));
  trackModal(openStore);
  afterUpdate(() => {
    if (opened) {
      if (!open) {
        opened = false;
        dispatch("close");
      }
    } else if (open) {
      opened = true;
      focus();
      dispatch("open");
    }
  });
  function keydown_handler(event) {
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
  function button_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      buttonRef = $$value;
      $$invalidate(19, buttonRef);
    });
  }
  const click_handler_1 = () => {
    $$invalidate(0, open = false);
  };
  function button_binding_1($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      buttonRef = $$value;
      $$invalidate(19, buttonRef);
    });
  }
  const click_handler_2 = () => {
    $$invalidate(0, open = false);
  };
  const click_handler_3 = (button) => {
    dispatch("click:button--secondary", { text: button.text });
  };
  const click_handler_4 = () => {
    dispatch("click:button--secondary", { text: secondaryButtonText });
  };
  const click_handler_5 = () => {
    dispatch("submit");
    dispatch("click:button--primary");
  };
  function div2_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      innerModal = $$value;
      $$invalidate(20, innerModal);
    });
  }
  const click_handler_6 = () => {
    $$invalidate(21, didClickInnerModal = true);
  };
  function div3_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      ref = $$value;
      $$invalidate(1, ref);
    });
  }
  const keydown_handler_1 = (e) => {
    if (open) {
      if (e.key === "Escape") {
        $$invalidate(0, open = false);
      } else if (e.key === "Tab") {
        const selectorTabbable = `
  a[href], area[href], input:not([disabled]):not([tabindex='-1']),
  button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),
  textarea:not([disabled]):not([tabindex='-1']),
  iframe, object, embed, *[tabindex]:not([tabindex='-1']):not([disabled]), *[contenteditable=true]
`;
        const tabbable = Array.from(ref.querySelectorAll(selectorTabbable));
        let index = tabbable.indexOf(document.activeElement);
        if (index === -1 && e.shiftKey)
          index = 0;
        index += tabbable.length + (e.shiftKey ? -1 : 1);
        index %= tabbable.length;
        tabbable[index].focus();
        e.preventDefault();
      } else if (shouldSubmitOnEnter && e.key === "Enter") {
        dispatch("submit");
        dispatch("click:button--primary");
      }
    }
  };
  const click_handler_7 = () => {
    if (!didClickInnerModal && !preventCloseOnClickOutside)
      $$invalidate(0, open = false);
    $$invalidate(21, didClickInnerModal = false);
  };
  const transitionend_handler = (e) => {
    if (e.propertyName === "transform") {
      dispatch("transitionend", { open });
    }
  };
  $$self.$$set = ($$new_props) => {
    $$invalidate(54, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(28, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("size" in $$new_props)
      $$invalidate(2, size = $$new_props.size);
    if ("open" in $$new_props)
      $$invalidate(0, open = $$new_props.open);
    if ("danger" in $$new_props)
      $$invalidate(3, danger = $$new_props.danger);
    if ("alert" in $$new_props)
      $$invalidate(4, alert2 = $$new_props.alert);
    if ("passiveModal" in $$new_props)
      $$invalidate(5, passiveModal = $$new_props.passiveModal);
    if ("modalHeading" in $$new_props)
      $$invalidate(6, modalHeading = $$new_props.modalHeading);
    if ("modalLabel" in $$new_props)
      $$invalidate(7, modalLabel = $$new_props.modalLabel);
    if ("modalAriaLabel" in $$new_props)
      $$invalidate(29, modalAriaLabel = $$new_props.modalAriaLabel);
    if ("iconDescription" in $$new_props)
      $$invalidate(8, iconDescription = $$new_props.iconDescription);
    if ("hasForm" in $$new_props)
      $$invalidate(9, hasForm = $$new_props.hasForm);
    if ("hasScrollingContent" in $$new_props)
      $$invalidate(10, hasScrollingContent = $$new_props.hasScrollingContent);
    if ("primaryButtonText" in $$new_props)
      $$invalidate(11, primaryButtonText = $$new_props.primaryButtonText);
    if ("primaryButtonDisabled" in $$new_props)
      $$invalidate(12, primaryButtonDisabled = $$new_props.primaryButtonDisabled);
    if ("primaryButtonIcon" in $$new_props)
      $$invalidate(13, primaryButtonIcon = $$new_props.primaryButtonIcon);
    if ("shouldSubmitOnEnter" in $$new_props)
      $$invalidate(14, shouldSubmitOnEnter = $$new_props.shouldSubmitOnEnter);
    if ("secondaryButtonText" in $$new_props)
      $$invalidate(15, secondaryButtonText = $$new_props.secondaryButtonText);
    if ("secondaryButtons" in $$new_props)
      $$invalidate(16, secondaryButtons = $$new_props.secondaryButtons);
    if ("selectorPrimaryFocus" in $$new_props)
      $$invalidate(30, selectorPrimaryFocus = $$new_props.selectorPrimaryFocus);
    if ("preventCloseOnClickOutside" in $$new_props)
      $$invalidate(17, preventCloseOnClickOutside = $$new_props.preventCloseOnClickOutside);
    if ("id" in $$new_props)
      $$invalidate(18, id = $$new_props.id);
    if ("ref" in $$new_props)
      $$invalidate(1, ref = $$new_props.ref);
    if ("$$scope" in $$new_props)
      $$invalidate(50, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & 1) {
      set_store_value(openStore, $openStore = open, $openStore);
    }
    if ($$self.$$.dirty[0] & 262144) {
      $$invalidate(25, modalLabelId = `bx--modal-header__label--modal-${id}`);
    }
    if ($$self.$$.dirty[0] & 262144) {
      $$invalidate(24, modalHeadingId = `bx--modal-header__heading--modal-${id}`);
    }
    if ($$self.$$.dirty[0] & 262144) {
      $$invalidate(23, modalBodyId = `bx--modal-body--${id}`);
    }
    $$invalidate(22, ariaLabel = modalLabel || $$props["aria-label"] || modalAriaLabel || modalHeading);
  };
  $$props = exclude_internal_props($$props);
  return [
    open,
    ref,
    size,
    danger,
    alert2,
    passiveModal,
    modalHeading,
    modalLabel,
    iconDescription,
    hasForm,
    hasScrollingContent,
    primaryButtonText,
    primaryButtonDisabled,
    primaryButtonIcon,
    shouldSubmitOnEnter,
    secondaryButtonText,
    secondaryButtons,
    preventCloseOnClickOutside,
    id,
    buttonRef,
    innerModal,
    didClickInnerModal,
    ariaLabel,
    modalBodyId,
    modalHeadingId,
    modalLabelId,
    dispatch,
    openStore,
    $$restProps,
    modalAriaLabel,
    selectorPrimaryFocus,
    slots,
    keydown_handler,
    click_handler,
    mouseover_handler,
    mouseenter_handler,
    mouseleave_handler,
    button_binding,
    click_handler_1,
    button_binding_1,
    click_handler_2,
    click_handler_3,
    click_handler_4,
    click_handler_5,
    div2_binding,
    click_handler_6,
    div3_binding,
    keydown_handler_1,
    click_handler_7,
    transitionend_handler,
    $$scope
  ];
}
class Modal extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {
      size: 2,
      open: 0,
      danger: 3,
      alert: 4,
      passiveModal: 5,
      modalHeading: 6,
      modalLabel: 7,
      modalAriaLabel: 29,
      iconDescription: 8,
      hasForm: 9,
      hasScrollingContent: 10,
      primaryButtonText: 11,
      primaryButtonDisabled: 12,
      primaryButtonIcon: 13,
      shouldSubmitOnEnter: 14,
      secondaryButtonText: 15,
      secondaryButtons: 16,
      selectorPrimaryFocus: 30,
      preventCloseOnClickOutside: 17,
      id: 18,
      ref: 1
    }, null, [-1, -1]);
  }
}
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[12] = list[i];
  child_ctx[13] = list;
  child_ctx[14] = i;
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[15] = list[i];
  return child_ctx;
}
function create_default_slot_3(ctx) {
  let t;
  return {
    c() {
      t = text("Create Post");
    },
    l(nodes) {
      t = claim_text(nodes, "Create Post");
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
function create_default_slot_2(ctx) {
  let strong;
  let h2;
  let t0_value = ctx[12].title + "";
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
  let t6_value = ctx[12].createdAt + "";
  let t6;
  let t7;
  let br2;
  let t8;
  let t9_value = ctx[12].user + "";
  let t9;
  let t10;
  let br3;
  let br4;
  let t11;
  let t12_value = ctx[12].likes + "";
  let t12;
  let current;
  function viewer_value_binding(value) {
    ctx[8](value, ctx[12]);
  }
  let viewer_props = {};
  if (ctx[12].post !== void 0) {
    viewer_props.value = ctx[12].post;
  }
  viewer = new Viewer({ props: viewer_props });
  binding_callbacks.push(() => bind(viewer, "value", viewer_value_binding));
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
      t8 = text("\n        Posted by: ");
      t9 = text(t9_value);
      t10 = space();
      br3 = element("br");
      br4 = element("br");
      t11 = text("\n        Likes: ");
      t12 = text(t12_value);
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
      t8 = claim_text(nodes, "\n        Posted by: ");
      t9 = claim_text(nodes, t9_value);
      t10 = claim_space(nodes);
      br3 = claim_element(nodes, "BR", {});
      br4 = claim_element(nodes, "BR", {});
      t11 = claim_text(nodes, "\n        Likes: ");
      t12 = claim_text(nodes, t12_value);
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
      insert_hydration(target, t9, anchor);
      insert_hydration(target, t10, anchor);
      insert_hydration(target, br3, anchor);
      insert_hydration(target, br4, anchor);
      insert_hydration(target, t11, anchor);
      insert_hydration(target, t12, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if ((!current || dirty & 8) && t0_value !== (t0_value = ctx[12].title + ""))
        set_data(t0, t0_value);
      const viewer_changes = {};
      if (!updating_value && dirty & 8) {
        updating_value = true;
        viewer_changes.value = ctx[12].post;
        add_flush_callback(() => updating_value = false);
      }
      viewer.$set(viewer_changes);
      if ((!current || dirty & 8) && t6_value !== (t6_value = ctx[12].createdAt + ""))
        set_data(t6, t6_value);
      if ((!current || dirty & 8) && t9_value !== (t9_value = ctx[12].user + ""))
        set_data(t9, t9_value);
      if ((!current || dirty & 8) && t12_value !== (t12_value = ctx[12].likes + ""))
        set_data(t12, t12_value);
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
      if (detaching)
        detach(t9);
      if (detaching)
        detach(t10);
      if (detaching)
        detach(br3);
      if (detaching)
        detach(br4);
      if (detaching)
        detach(t11);
      if (detaching)
        detach(t12);
    }
  };
}
function create_if_block(ctx) {
  let comment;
  let current;
  comment = new Comment({
    props: {
      $$slots: { default: [create_default_slot_1] },
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
      if (dirty & 262148) {
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
  let t0_value = ctx[15].user_commented + "";
  let t0;
  let t1;
  let br0;
  let br1;
  let t2;
  let t3_value = ctx[15].comment + "";
  let t3;
  let t4;
  let br2;
  let br3;
  let t5;
  let t6_value = ctx[15].createdAt.toLocaleString() + "";
  let t6;
  let t7;
  let br4;
  let br5;
  let br6;
  let br7;
  let br8;
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
      insert_hydration(target, br5, anchor);
      insert_hydration(target, br6, anchor);
      insert_hydration(target, br7, anchor);
      insert_hydration(target, br8, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 4 && t0_value !== (t0_value = ctx2[15].user_commented + ""))
        set_data(t0, t0_value);
      if (dirty & 4 && t3_value !== (t3_value = ctx2[15].comment + ""))
        set_data(t3, t3_value);
      if (dirty & 4 && t6_value !== (t6_value = ctx2[15].createdAt.toLocaleString() + ""))
        set_data(t6, t6_value);
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
  let if_block = ctx[15].post_id == ctx[12].id && create_if_block(ctx);
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
      if (ctx2[15].post_id == ctx2[12].id) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 12) {
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
function create_each_block(ctx) {
  let br0;
  let br1;
  let t0;
  let post;
  let t1;
  let br2;
  let br3;
  let t2;
  let t3;
  let br4;
  let br5;
  let br6;
  let br7;
  let current;
  post = new Post({
    props: {
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
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
      br2 = element("br");
      br3 = element("br");
      t2 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t3 = space();
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
      br2 = claim_element(nodes, "BR", {});
      br3 = claim_element(nodes, "BR", {});
      t2 = claim_space(nodes);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      t3 = claim_space(nodes);
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
      insert_hydration(target, br2, anchor);
      insert_hydration(target, br3, anchor);
      insert_hydration(target, t2, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_hydration(target, t3, anchor);
      insert_hydration(target, br4, anchor);
      insert_hydration(target, br5, anchor);
      insert_hydration(target, br6, anchor);
      insert_hydration(target, br7, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const post_changes = {};
      if (dirty & 262152) {
        post_changes.$$scope = { dirty, ctx: ctx2 };
      }
      post.$set(post_changes);
      if (dirty & 12) {
        each_value_1 = ctx2[2];
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block_1(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(t3.parentNode, t3);
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
      for (let i = 0; i < each_value_1.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      transition_out(post.$$.fragment, local);
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
      if (detaching)
        detach(br2);
      if (detaching)
        detach(br3);
      if (detaching)
        detach(t2);
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(t3);
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
function create_default_slot(ctx) {
  let createpost;
  let updating_newPost;
  let current;
  function createpost_newPost_binding(value) {
    ctx[9](value);
  }
  let createpost_props = {};
  if (ctx[1] !== void 0) {
    createpost_props.newPost = ctx[1];
  }
  createpost = new Createpost({ props: createpost_props });
  binding_callbacks.push(() => bind(createpost, "newPost", createpost_newPost_binding));
  return {
    c() {
      create_component(createpost.$$.fragment);
    },
    l(nodes) {
      claim_component(createpost.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(createpost, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const createpost_changes = {};
      if (!updating_newPost && dirty & 2) {
        updating_newPost = true;
        createpost_changes.newPost = ctx2[1];
        add_flush_callback(() => updating_newPost = false);
      }
      createpost.$set(createpost_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(createpost.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(createpost.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(createpost, detaching);
    }
  };
}
function create_fragment(ctx) {
  let br0;
  let t0;
  let button;
  let t1;
  let br1;
  let br2;
  let br3;
  let t2;
  let t3;
  let modal;
  let updating_open;
  let current;
  button = new Button({
    props: {
      kind: "tertiary",
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    }
  });
  button.$on("click", ctx[7]);
  let each_value = ctx[3];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  function modal_open_binding(value) {
    ctx[10](value);
  }
  let modal_props = {
    size: "lg",
    preventCloseOnClickOutside: true,
    modalHeading: "Add Post",
    primaryButtonText: "Submit",
    secondaryButtonText: "Cancel",
    shouldSubmitOnEnter: false,
    $$slots: { default: [create_default_slot] },
    $$scope: { ctx }
  };
  if (ctx[0] !== void 0) {
    modal_props.open = ctx[0];
  }
  modal = new Modal({ props: modal_props });
  binding_callbacks.push(() => bind(modal, "open", modal_open_binding));
  modal.$on("submit", ctx[4]);
  return {
    c() {
      br0 = element("br");
      t0 = space();
      create_component(button.$$.fragment);
      t1 = space();
      br1 = element("br");
      br2 = element("br");
      br3 = element("br");
      t2 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t3 = space();
      create_component(modal.$$.fragment);
    },
    l(nodes) {
      br0 = claim_element(nodes, "BR", {});
      t0 = claim_space(nodes);
      claim_component(button.$$.fragment, nodes);
      t1 = claim_space(nodes);
      br1 = claim_element(nodes, "BR", {});
      br2 = claim_element(nodes, "BR", {});
      br3 = claim_element(nodes, "BR", {});
      t2 = claim_space(nodes);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      t3 = claim_space(nodes);
      claim_component(modal.$$.fragment, nodes);
    },
    m(target, anchor) {
      insert_hydration(target, br0, anchor);
      insert_hydration(target, t0, anchor);
      mount_component(button, target, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, br1, anchor);
      insert_hydration(target, br2, anchor);
      insert_hydration(target, br3, anchor);
      insert_hydration(target, t2, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_hydration(target, t3, anchor);
      mount_component(modal, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const button_changes = {};
      if (dirty & 262144) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
      if (dirty & 12) {
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
            each_blocks[i].m(t3.parentNode, t3);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
      const modal_changes = {};
      if (dirty & 262146) {
        modal_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_open && dirty & 1) {
        updating_open = true;
        modal_changes.open = ctx2[0];
        add_flush_callback(() => updating_open = false);
      }
      modal.$set(modal_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      transition_in(modal.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(button.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      transition_out(modal.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(br0);
      if (detaching)
        detach(t0);
      destroy_component(button, detaching);
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
        detach(t3);
      destroy_component(modal, detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let posts;
  let post_comments;
  let $comments;
  let $user;
  let $blogs;
  component_subscribe($$self, comments, ($$value) => $$invalidate(5, $comments = $$value));
  component_subscribe($$self, user, ($$value) => $$invalidate(11, $user = $$value));
  component_subscribe($$self, blogs, ($$value) => $$invalidate(6, $blogs = $$value));
  fetchBlogs($user.name);
  let open = false;
  let newPost = { post: "", title: "" };
  async function upload() {
    let createdAt = new Date().toLocaleString();
    Parse.initialize("AfiNKnlsASUOpcnt89tlHQ37vk9itLIBPhwq8arA", "RCLHA2TyiYdaHiDUcNGkHSwdo46xiohqc3igFZaJ");
    Parse.serverURL = "https://parseapi.back4app.com/";
    const blog = new Parse.Object("blog");
    blog.set("createdAt", createdAt);
    blog.set("email", $user.email);
    blog.set("title", newPost.title);
    blog.set("post", newPost.post);
    blog.set("user", $user.name);
    blog.set("users_liked", []);
    blog.set("likes", 0);
    try {
      const result = await blog.save();
    } catch (error) {
      alert("Failed to create new object: " + error.message);
    }
    $$invalidate(1, newPost.title = "", newPost);
    $$invalidate(1, newPost.post = "", newPost);
    $$invalidate(0, open = false);
    fetchBlogs($user.name);
  }
  const click_handler = () => $$invalidate(0, open = true);
  function viewer_value_binding(value, post) {
    if ($$self.$$.not_equal(post.post, value)) {
      post.post = value;
      $$invalidate(3, posts), $$invalidate(6, $blogs);
    }
  }
  function createpost_newPost_binding(value) {
    newPost = value;
    $$invalidate(1, newPost);
  }
  function modal_open_binding(value) {
    open = value;
    $$invalidate(0, open);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 64) {
      $$invalidate(3, posts = $blogs.map((entry) => {
        let id = entry["id"];
        let title = entry.title;
        let post = entry.post;
        let likes = entry.likes;
        let users_liked = entry.users_liked;
        let user2 = entry.user;
        let email = entry.email;
        let createdAt = entry.createdAt;
        return {
          id,
          title,
          post,
          likes,
          users_liked,
          user: user2,
          email,
          createdAt
        };
      }));
    }
    if ($$self.$$.dirty & 32) {
      $$invalidate(2, post_comments = $comments.map((entry) => {
        let post_id = entry["post_id"];
        let comment = entry.comment;
        let user_commented = entry.user_commented;
        let object = entry.object;
        let createdAt = entry.createdAt;
        return {
          object,
          user_commented,
          post_id,
          createdAt,
          comment
        };
      }));
    }
  };
  return [
    open,
    newPost,
    post_comments,
    posts,
    upload,
    $comments,
    $blogs,
    click_handler,
    viewer_value_binding,
    createpost_newPost_binding,
    modal_open_binding
  ];
}
class Myblog extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { Myblog as default };
