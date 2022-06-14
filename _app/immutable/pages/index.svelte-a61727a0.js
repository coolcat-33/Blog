import { S as SvelteComponent, i as init, s as safe_not_equal } from "../chunks/index-fe8f50da.js";
async function load() {
  return { status: 301, redirect: `/blog/myblog` };
}
class Routes extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, null, safe_not_equal, {});
  }
}
export { Routes as default, load };
