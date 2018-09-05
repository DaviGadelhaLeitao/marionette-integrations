import "./styles/application.css";
import Marionette from "backbone.marionette";
import { Router } from "./components/Router";

var initialData = {
  posts: [
    {
      author: "Scott",
      title: "Why Marionette is amazing",
      content: "...",
      id: 42,
      comments: [
        {
          author: "Steve",
          content: "...",
          id: 56
        }
      ]
    },
    {
      author: "Andrew",
      title: "How to use Routers",
      content: "...",
      id: 17
    }
  ]
};

var App = new Marionette.Application({
  region: "blog-hook",
  onStart: function(options) {
    var router = new Router(options);

    /** Starts the URL handling framework */
    Backbone.history.start();
  }
});

App.start({initialData: initialData});
