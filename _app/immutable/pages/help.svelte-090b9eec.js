import { S as SvelteComponent, i as init, s as safe_not_equal, e as element, t as text, k as space, c as claim_element, a as children, h as claim_text, d as detach, m as claim_space, g as insert_hydration, Q as append_hydration, E as noop } from "../chunks/index-fe8f50da.js";
function create_fragment(ctx) {
  let h30;
  let t0;
  let t1;
  let br0;
  let br1;
  let t2;
  let h50;
  let t3;
  let t4;
  let br2;
  let br3;
  let br4;
  let t5;
  let h31;
  let t6;
  let t7;
  let br5;
  let br6;
  let t8;
  let h51;
  let t9;
  let t10;
  let br7;
  let br8;
  let br9;
  let t11;
  let h32;
  let t12;
  let t13;
  let br10;
  let br11;
  let t14;
  let h52;
  let t15;
  let t16;
  let br12;
  let br13;
  let br14;
  let t17;
  let h33;
  let t18;
  let t19;
  let br15;
  let t20;
  let h53;
  let t21;
  let t22;
  let br16;
  let br17;
  let br18;
  let t23;
  let h34;
  let t24;
  let t25;
  let br19;
  let br20;
  let t26;
  let h54;
  let t27;
  return {
    c() {
      h30 = element("h3");
      t0 = text("About this app:");
      t1 = space();
      br0 = element("br");
      br1 = element("br");
      t2 = space();
      h50 = element("h5");
      t3 = text("This app is a blogging app, on this app, you can create your own blog, and view other blogs.");
      t4 = space();
      br2 = element("br");
      br3 = element("br");
      br4 = element("br");
      t5 = space();
      h31 = element("h3");
      t6 = text("My Blog page:");
      t7 = space();
      br5 = element("br");
      br6 = element("br");
      t8 = space();
      h51 = element("h5");
      t9 = text(`On the My Blog page, you can start your own blog by first creating posts. If you see a blank page, that just means you don't have any posts. To create a post, just click the "Create a Post" button. After that add the title and content for your post.`);
      t10 = space();
      br7 = element("br");
      br8 = element("br");
      br9 = element("br");
      t11 = space();
      h32 = element("h3");
      t12 = text("Other Blogs page:");
      t13 = space();
      br10 = element("br");
      br11 = element("br");
      t14 = space();
      h52 = element("h5");
      t15 = text("On the Other Blogs page, you will see all the posts of all the users. If you don't see any posts, that means that nobody has posted yet. If you just want to see a post of one specific person, just click their name on one of their posts. To go back to see all the posts, go to the search bar, remove the person's name.");
      t16 = space();
      br12 = element("br");
      br13 = element("br");
      br14 = element("br");
      t17 = space();
      h33 = element("h3");
      t18 = text("Reporting Comments/Posts:");
      t19 = space();
      br15 = element("br");
      t20 = space();
      h53 = element("h5");
      t21 = text("If you think any comment/post is offensive and inappropiate in any way, you can report the post/comment. When at least 3 people have reported that post/comment it will be hidden from view.");
      t22 = space();
      br16 = element("br");
      br17 = element("br");
      br18 = element("br");
      t23 = space();
      h34 = element("h3");
      t24 = text("Note:");
      t25 = space();
      br19 = element("br");
      br20 = element("br");
      t26 = space();
      h54 = element("h5");
      t27 = text("When you create/edit/delete a post or a comment, please wait for a couple seconds before reclicking the submit button. Reclicking the submit button multiple times will result in duplicate posts/comments.");
    },
    l(nodes) {
      h30 = claim_element(nodes, "H3", {});
      var h30_nodes = children(h30);
      t0 = claim_text(h30_nodes, "About this app:");
      h30_nodes.forEach(detach);
      t1 = claim_space(nodes);
      br0 = claim_element(nodes, "BR", {});
      br1 = claim_element(nodes, "BR", {});
      t2 = claim_space(nodes);
      h50 = claim_element(nodes, "H5", {});
      var h50_nodes = children(h50);
      t3 = claim_text(h50_nodes, "This app is a blogging app, on this app, you can create your own blog, and view other blogs.");
      h50_nodes.forEach(detach);
      t4 = claim_space(nodes);
      br2 = claim_element(nodes, "BR", {});
      br3 = claim_element(nodes, "BR", {});
      br4 = claim_element(nodes, "BR", {});
      t5 = claim_space(nodes);
      h31 = claim_element(nodes, "H3", {});
      var h31_nodes = children(h31);
      t6 = claim_text(h31_nodes, "My Blog page:");
      h31_nodes.forEach(detach);
      t7 = claim_space(nodes);
      br5 = claim_element(nodes, "BR", {});
      br6 = claim_element(nodes, "BR", {});
      t8 = claim_space(nodes);
      h51 = claim_element(nodes, "H5", {});
      var h51_nodes = children(h51);
      t9 = claim_text(h51_nodes, `On the My Blog page, you can start your own blog by first creating posts. If you see a blank page, that just means you don't have any posts. To create a post, just click the "Create a Post" button. After that add the title and content for your post.`);
      h51_nodes.forEach(detach);
      t10 = claim_space(nodes);
      br7 = claim_element(nodes, "BR", {});
      br8 = claim_element(nodes, "BR", {});
      br9 = claim_element(nodes, "BR", {});
      t11 = claim_space(nodes);
      h32 = claim_element(nodes, "H3", {});
      var h32_nodes = children(h32);
      t12 = claim_text(h32_nodes, "Other Blogs page:");
      h32_nodes.forEach(detach);
      t13 = claim_space(nodes);
      br10 = claim_element(nodes, "BR", {});
      br11 = claim_element(nodes, "BR", {});
      t14 = claim_space(nodes);
      h52 = claim_element(nodes, "H5", {});
      var h52_nodes = children(h52);
      t15 = claim_text(h52_nodes, "On the Other Blogs page, you will see all the posts of all the users. If you don't see any posts, that means that nobody has posted yet. If you just want to see a post of one specific person, just click their name on one of their posts. To go back to see all the posts, go to the search bar, remove the person's name.");
      h52_nodes.forEach(detach);
      t16 = claim_space(nodes);
      br12 = claim_element(nodes, "BR", {});
      br13 = claim_element(nodes, "BR", {});
      br14 = claim_element(nodes, "BR", {});
      t17 = claim_space(nodes);
      h33 = claim_element(nodes, "H3", {});
      var h33_nodes = children(h33);
      t18 = claim_text(h33_nodes, "Reporting Comments/Posts:");
      h33_nodes.forEach(detach);
      t19 = claim_space(nodes);
      br15 = claim_element(nodes, "BR", {});
      t20 = claim_space(nodes);
      h53 = claim_element(nodes, "H5", {});
      var h53_nodes = children(h53);
      t21 = claim_text(h53_nodes, "If you think any comment/post is offensive and inappropiate in any way, you can report the post/comment. When at least 3 people have reported that post/comment it will be hidden from view.");
      h53_nodes.forEach(detach);
      t22 = claim_space(nodes);
      br16 = claim_element(nodes, "BR", {});
      br17 = claim_element(nodes, "BR", {});
      br18 = claim_element(nodes, "BR", {});
      t23 = claim_space(nodes);
      h34 = claim_element(nodes, "H3", {});
      var h34_nodes = children(h34);
      t24 = claim_text(h34_nodes, "Note:");
      h34_nodes.forEach(detach);
      t25 = claim_space(nodes);
      br19 = claim_element(nodes, "BR", {});
      br20 = claim_element(nodes, "BR", {});
      t26 = claim_space(nodes);
      h54 = claim_element(nodes, "H5", {});
      var h54_nodes = children(h54);
      t27 = claim_text(h54_nodes, "When you create/edit/delete a post or a comment, please wait for a couple seconds before reclicking the submit button. Reclicking the submit button multiple times will result in duplicate posts/comments.");
      h54_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, h30, anchor);
      append_hydration(h30, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, br0, anchor);
      insert_hydration(target, br1, anchor);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, h50, anchor);
      append_hydration(h50, t3);
      insert_hydration(target, t4, anchor);
      insert_hydration(target, br2, anchor);
      insert_hydration(target, br3, anchor);
      insert_hydration(target, br4, anchor);
      insert_hydration(target, t5, anchor);
      insert_hydration(target, h31, anchor);
      append_hydration(h31, t6);
      insert_hydration(target, t7, anchor);
      insert_hydration(target, br5, anchor);
      insert_hydration(target, br6, anchor);
      insert_hydration(target, t8, anchor);
      insert_hydration(target, h51, anchor);
      append_hydration(h51, t9);
      insert_hydration(target, t10, anchor);
      insert_hydration(target, br7, anchor);
      insert_hydration(target, br8, anchor);
      insert_hydration(target, br9, anchor);
      insert_hydration(target, t11, anchor);
      insert_hydration(target, h32, anchor);
      append_hydration(h32, t12);
      insert_hydration(target, t13, anchor);
      insert_hydration(target, br10, anchor);
      insert_hydration(target, br11, anchor);
      insert_hydration(target, t14, anchor);
      insert_hydration(target, h52, anchor);
      append_hydration(h52, t15);
      insert_hydration(target, t16, anchor);
      insert_hydration(target, br12, anchor);
      insert_hydration(target, br13, anchor);
      insert_hydration(target, br14, anchor);
      insert_hydration(target, t17, anchor);
      insert_hydration(target, h33, anchor);
      append_hydration(h33, t18);
      insert_hydration(target, t19, anchor);
      insert_hydration(target, br15, anchor);
      insert_hydration(target, t20, anchor);
      insert_hydration(target, h53, anchor);
      append_hydration(h53, t21);
      insert_hydration(target, t22, anchor);
      insert_hydration(target, br16, anchor);
      insert_hydration(target, br17, anchor);
      insert_hydration(target, br18, anchor);
      insert_hydration(target, t23, anchor);
      insert_hydration(target, h34, anchor);
      append_hydration(h34, t24);
      insert_hydration(target, t25, anchor);
      insert_hydration(target, br19, anchor);
      insert_hydration(target, br20, anchor);
      insert_hydration(target, t26, anchor);
      insert_hydration(target, h54, anchor);
      append_hydration(h54, t27);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(h30);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(br0);
      if (detaching)
        detach(br1);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(h50);
      if (detaching)
        detach(t4);
      if (detaching)
        detach(br2);
      if (detaching)
        detach(br3);
      if (detaching)
        detach(br4);
      if (detaching)
        detach(t5);
      if (detaching)
        detach(h31);
      if (detaching)
        detach(t7);
      if (detaching)
        detach(br5);
      if (detaching)
        detach(br6);
      if (detaching)
        detach(t8);
      if (detaching)
        detach(h51);
      if (detaching)
        detach(t10);
      if (detaching)
        detach(br7);
      if (detaching)
        detach(br8);
      if (detaching)
        detach(br9);
      if (detaching)
        detach(t11);
      if (detaching)
        detach(h32);
      if (detaching)
        detach(t13);
      if (detaching)
        detach(br10);
      if (detaching)
        detach(br11);
      if (detaching)
        detach(t14);
      if (detaching)
        detach(h52);
      if (detaching)
        detach(t16);
      if (detaching)
        detach(br12);
      if (detaching)
        detach(br13);
      if (detaching)
        detach(br14);
      if (detaching)
        detach(t17);
      if (detaching)
        detach(h33);
      if (detaching)
        detach(t19);
      if (detaching)
        detach(br15);
      if (detaching)
        detach(t20);
      if (detaching)
        detach(h53);
      if (detaching)
        detach(t22);
      if (detaching)
        detach(br16);
      if (detaching)
        detach(br17);
      if (detaching)
        detach(br18);
      if (detaching)
        detach(t23);
      if (detaching)
        detach(h34);
      if (detaching)
        detach(t25);
      if (detaching)
        detach(br19);
      if (detaching)
        detach(br20);
      if (detaching)
        detach(t26);
      if (detaching)
        detach(h54);
    }
  };
}
class Help extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export { Help as default };
