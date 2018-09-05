import Marionette from "backbone.marionette";
import { List } from "./list";
import { Blog } from "./blog";
import { LayoutTemplate } from "../templates/blog/layout.jst";

const LayoutView = Marionette.View.extend({
  template: LayoutTemplate,

  regions: {
    layout: ".layout-hook"
  },

  onShowBlogList() {
    const list = new List({ collection: this.collection });
    this.showChildView("layout", list);

    /*  Remember - this only sets the fragment, so we can safely call this as
        often as we like with no negative side-effects.
    */
    Backbone.history.navigate("blog/");
  },

  onShowBlogEntry(entry) {
    const model = this.collection.get(entry);
    this.showBlog(model);
  },

  onChildviewSelectEntry(child, model) {
    this.showBlog(model);
  },

  /** Child-initiated alias to onShowBlogList */
  onChildviewShowBlogList() {
    this.triggerMethod("show:blog:list");
  },

  /** Share some simple logic from our subviews */
  showBlog(blogModel) {
    const blog = new Blog({ model: blogModel });
    this.showChildView("layout", blog);

    /*  Remember - this only sets the fragment, so we can safely call this as
        often as we like with no negative side-effects.
    */
    Backbone.history.navigate("blog/" + blog.id);
  }
});

export { LayoutView };
