import { w as writable } from "./index-8a7c489c.js";
import { S as SvelteComponent, i as init, s as safe_not_equal, K as create_slot, e as element, c as claim_element, a as children, d as detach, b as attr, g as insert_hydration, M as update_slot_base, N as get_all_dirty_from_scope, O as get_slot_changes, q as transition_in, o as transition_out } from "./index-fe8f50da.js";
const blogs = writable([]);
const otherBlogs = writable([]);
let otherUsers = writable({});
Parse.initialize("AfiNKnlsASUOpcnt89tlHQ37vk9itLIBPhwq8arA", "RCLHA2TyiYdaHiDUcNGkHSwdo46xiohqc3igFZaJ");
Parse.serverURL = "https://parseapi.back4app.com/";
const fetchBlogs = async (username) => {
  const query = new Parse.Query("blog");
  query.find().then((results) => {
    let data = [];
    let users = {};
    let otherData = [];
    for (const object of results) {
      const id = object.id;
      let title = object.get("title");
      let post = object.get("post");
      let likes = object.get("likes");
      let users_liked = object.get("users_liked");
      const name = object.get("user");
      const email = object.get("email");
      let createdAt = new Date(object.get("createdAt")).toLocaleString();
      if (username == name) {
        data.push({ id, title, post, users_liked, likes, object, user: name, email, createdAt });
      } else {
        otherData.push({ id, title, post, users_liked, likes, object, user: name, email, createdAt });
        users[username] = username;
      }
    }
    blogs.set(data);
    otherBlogs.set(otherData);
    otherUsers.set(users);
  });
};
var Post_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".card.svelte-f0u4s1{box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);transition:0.3s;border-radius:5px}.card.svelte-f0u4s1:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,0.2)}")();
function create_fragment$1(ctx) {
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
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (default_slot)
        default_slot.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "card svelte-f0u4s1");
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
function instance$1($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(0, $$scope = $$props2.$$scope);
  };
  return [$$scope, slots];
}
class Post extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {});
  }
}
var Comment_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "slot.svelte-15w73t3{color:blue}")();
function create_fragment(ctx) {
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
      div = claim_element(nodes, "DIV", { id: true });
      var div_nodes = children(div);
      if (default_slot)
        default_slot.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "id", "comment");
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
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(0, $$scope = $$props2.$$scope);
  };
  return [$$scope, slots];
}
class Comment extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
const comments = writable([]);
Parse.initialize("AfiNKnlsASUOpcnt89tlHQ37vk9itLIBPhwq8arA", "RCLHA2TyiYdaHiDUcNGkHSwdo46xiohqc3igFZaJ");
Parse.serverURL = "https://parseapi.back4app.com/";
const fetchComments = async () => {
  const query = new Parse.Query("comments");
  query.find().then((results) => {
    let data = [];
    for (const object of results) {
      let post_id = object.get("post_id");
      let comment = object.get("comment");
      let user_commented = object.get("user");
      let createdAt = object.get("createdAt");
      data.push({ user_commented, object, post_id, comment, createdAt });
    }
    comments.set(data);
  });
};
fetchComments();
export { Comment as C, Post as P, fetchComments as a, blogs as b, comments as c, fetchBlogs as f, otherBlogs as o };
