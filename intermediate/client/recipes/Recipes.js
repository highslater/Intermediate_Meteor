Template.Recipes.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('recipes');
    }); // end of self.autorun
}); // end of Template.Recipes.onCreated

Template.Recipes.helpers({
    recipes: () => {
        return Recipes.find({});
    }, // end of recipes
}); // end of Template.Recipes.helpers
