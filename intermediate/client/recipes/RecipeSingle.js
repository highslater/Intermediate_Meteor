Template.RecipeSingle.onCreated(function() {
    var self = this;
    self.autorun(function() {
        var id = FlowRouter.getParam('id');
        self.subscribe('singleRecipe', id);
    }); // end of self.autorun
}); // end of Template.Recipes.onCreated

Template.RecipeSingle.helpers({
    recipe: () => {
        var id = FlowRouter.getParam('id');
        return Recipes.findOne({ _id: id });
    }, // end of recipes
}); // end of Template.Recipes.helpers
