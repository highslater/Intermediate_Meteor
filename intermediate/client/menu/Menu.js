Template.Menu.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('recipes');
    }); // end of self.autorun
}); // end of Template.Recipes.onCreated

Template.Menu.helpers({
    recipes: () => {
        return Recipes.find({ inMenu: true });
    }, // end of recipes
}); // end of Template.Recipes.helpers
