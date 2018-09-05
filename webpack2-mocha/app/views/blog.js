import Marionette from "backbone.marionette";
import { CommentTemplate } from "../templates/blog/comment.jst";

const Comment = Marionette.View.extend({
  tagName: "li",
  template: CommentTemplate
});

const CommentListView = Marionette.CollectionView.extend({
  tagName: "ol",
  childView: Comment
});

const Blog = Marionette.View.extend({
  template: require("../templates/blog/blog.jst"),

  regions: {
    comments: ".comment-hook"
  },

  ui: {
    back: ".back"
  },

  triggers: {
    "click @ui.back": "show:blog:list"
  },

  onShow: function() {
    const comments = new CommentList(this.model.get("comments"));
    const commentView = new CommentListView({ collection: comments });

    this.showChildView("comments", commentView);
  }
});

export { Blog };
