import Marionette from "backbone.marionette";
import { LayoutView } from "../views/layout";
import { BlogList } from "../collections/blog"

const Controller = Marionette.Object.extend({
  initialize: function() {
    /** The region manager gives us a consistent UI and event triggers across
        our different layouts.
    */
    this.options.regionManager = new Marionette.Region({
      regions: {
        main: '#blog-hook'
      }
    });

    let initialData = this.getOption('initialData');

    const layout = new LayoutView({
      collection: new BlogList(initialData.posts)
    });

    this.getOption('regionManager').get('main').show(layout);

    /** We want easy access to our root view later */
    this.options.layout = layout;
  },

  /** List all blog entrys with a summary */
  blogList: function() {
    const layout = this.getOption('layout');
    layout.triggerMethod('show:blog:list');
  },

  /** List a named entry with its comments underneath */
  blogEntry(entry) {
    const layout = this.getOption('layout');
    layout.triggerMethod('show:blog:entry', entry);
  }
})

const Router = Marionette.AppRouter.extend({
  appRoutes: {
    'blog/': 'blogList',
    'blog/:entry': 'blogEntry'
  },

  /** Initialize our controller with the options passed into the application,
      such as the initial posts list.
  */
  initialize() {
    this.controller = new Controller({
      initialData: this.getOption('initialData')
    });
  }
});

export { Router };