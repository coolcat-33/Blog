import { S as SvelteComponent, i as init, s as safe_not_equal, e as element, k as space, w as create_component, c as claim_element, m as claim_space, x as claim_component, g as insert_hydration, y as mount_component, q as transition_in, o as transition_out, d as detach, B as destroy_component, t as text, l as empty, a as children, h as claim_text, Q as append_hydration, p as check_outros, a7 as destroy_each, Z as component_subscribe, n as group_outros, J as binding_callbacks, _ as bind, j as set_data, Y as add_flush_callback } from "../chunks/index-7843d973.js";
import { f as fetchBlogs, P as Post, b as blogs } from "../chunks/Post-c5b4522f.js";
import { u as user } from "../chunks/HeaderSearch.svelte_svelte_type_style_lang-a4bfa871.js";
import { V as Viewer } from "../chunks/index-74738e1e.js";
import "../chunks/index-dfa38e18.js";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[4] = list[i];
  child_ctx[5] = list;
  child_ctx[6] = i;
  return child_ctx;
}
function create_default_slot(ctx) {
  let strong;
  let h2;
  let t0_value = ctx[4].title + "";
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
  let t6_value = ctx[4].createdAt + "";
  let t6;
  let t7;
  let br2;
  let t8;
  let t9_value = ctx[4].user + "";
  let t9;
  let t10;
  let t11_value = ctx[4].email + "";
  let t11;
  let t12;
  let br3;
  let br4;
  let current;
  function viewer_value_binding(value) {
    ctx[2](value, ctx[4]);
  }
  let viewer_props = {};
  if (ctx[4].post !== void 0) {
    viewer_props.value = ctx[4].post;
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
      t10 = text(" (");
      t11 = text(t11_value);
      t12 = text(")\n        \n        ");
      br3 = element("br");
      br4 = element("br");
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
      t10 = claim_text(nodes, " (");
      t11 = claim_text(nodes, t11_value);
      t12 = claim_text(nodes, ")\n        \n        ");
      br3 = claim_element(nodes, "BR", {});
      br4 = claim_element(nodes, "BR", {});
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
      insert_hydration(target, t11, anchor);
      insert_hydration(target, t12, anchor);
      insert_hydration(target, br3, anchor);
      insert_hydration(target, br4, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if ((!current || dirty & 1) && t0_value !== (t0_value = ctx[4].title + ""))
        set_data(t0, t0_value);
      const viewer_changes = {};
      if (!updating_value && dirty & 1) {
        updating_value = true;
        viewer_changes.value = ctx[4].post;
        add_flush_callback(() => updating_value = false);
      }
      viewer.$set(viewer_changes);
      if ((!current || dirty & 1) && t6_value !== (t6_value = ctx[4].createdAt + ""))
        set_data(t6, t6_value);
      if ((!current || dirty & 1) && t9_value !== (t9_value = ctx[4].user + ""))
        set_data(t9, t9_value);
      if ((!current || dirty & 1) && t11_value !== (t11_value = ctx[4].email + ""))
        set_data(t11, t11_value);
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
        detach(t11);
      if (detaching)
        detach(t12);
      if (detaching)
        detach(br3);
      if (detaching)
        detach(br4);
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
  let br4;
  let br5;
  let current;
  post = new Post({
    props: {
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
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
      br4 = element("br");
      br5 = element("br");
    },
    l(nodes) {
      br0 = claim_element(nodes, "BR", {});
      br1 = claim_element(nodes, "BR", {});
      t0 = claim_space(nodes);
      claim_component(post.$$.fragment, nodes);
      t1 = claim_space(nodes);
      br2 = claim_element(nodes, "BR", {});
      br3 = claim_element(nodes, "BR", {});
      br4 = claim_element(nodes, "BR", {});
      br5 = claim_element(nodes, "BR", {});
    },
    m(target, anchor) {
      insert_hydration(target, br0, anchor);
      insert_hydration(target, br1, anchor);
      insert_hydration(target, t0, anchor);
      mount_component(post, target, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, br2, anchor);
      insert_hydration(target, br3, anchor);
      insert_hydration(target, br4, anchor);
      insert_hydration(target, br5, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const post_changes = {};
      if (dirty & 129) {
        post_changes.$$scope = { dirty, ctx: ctx2 };
      }
      post.$set(post_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(post.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(post.$$.fragment, local);
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
        detach(br4);
      if (detaching)
        detach(br5);
    }
  };
}
function create_fragment(ctx) {
  let br0;
  let t0;
  let h4;
  let t1;
  let t2;
  let br1;
  let br2;
  let br3;
  let t3;
  let each_1_anchor;
  let current;
  let each_value = ctx[0];
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
      h4 = element("h4");
      t1 = text("View your Blog:");
      t2 = space();
      br1 = element("br");
      br2 = element("br");
      br3 = element("br");
      t3 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    l(nodes) {
      br0 = claim_element(nodes, "BR", {});
      t0 = claim_space(nodes);
      h4 = claim_element(nodes, "H4", {});
      var h4_nodes = children(h4);
      t1 = claim_text(h4_nodes, "View your Blog:");
      h4_nodes.forEach(detach);
      t2 = claim_space(nodes);
      br1 = claim_element(nodes, "BR", {});
      br2 = claim_element(nodes, "BR", {});
      br3 = claim_element(nodes, "BR", {});
      t3 = claim_space(nodes);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      insert_hydration(target, br0, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, h4, anchor);
      append_hydration(h4, t1);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, br1, anchor);
      insert_hydration(target, br2, anchor);
      insert_hydration(target, br3, anchor);
      insert_hydration(target, t3, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_hydration(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (dirty & 1) {
        each_value = ctx2[0];
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
      if (detaching)
        detach(br0);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(h4);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(br1);
      if (detaching)
        detach(br2);
      if (detaching)
        detach(br3);
      if (detaching)
        detach(t3);
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let posts;
  let $blogs;
  let $user;
  component_subscribe($$self, blogs, ($$value) => $$invalidate(1, $blogs = $$value));
  component_subscribe($$self, user, ($$value) => $$invalidate(3, $user = $$value));
  fetchBlogs($user.name);
  function viewer_value_binding(value, post) {
    if ($$self.$$.not_equal(post.post, value)) {
      post.post = value;
      $$invalidate(0, posts), $$invalidate(1, $blogs);
    }
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 2) {
      $$invalidate(0, posts = $blogs.map((entry) => {
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
  };
  return [posts, $blogs, viewer_value_binding];
}
class Myblog extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { Myblog as default };
