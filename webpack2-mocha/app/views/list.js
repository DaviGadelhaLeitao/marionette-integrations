import Marionette from "backbone.marionette";
import ItemTemplate from "../templates/blog/item.jst";

const Entry = Marionette.View.extend({
    template: ItemTemplate,
    tagName: "li",

    triggers: {
        click: "select:entry"
    }
});

const BlogList = Marionette.CollectionView.extend({
    childView: Entry,
    tagName: 'ul',
  
    onChildviewSelectEntry: function(child, options) {
      this.triggerMethod('select:entry', child.model);
    }
  });
  
 export { BlogList }; 







