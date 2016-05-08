Template.Recipes.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('recipes');
    });
});

// console.log(Meteor.settings.public.ga.account);
Template.Recipes.helpers({
    recipes: () => {
            return Recipes.find({});
        } // end of recipes
}); // end of Template.Recipes.helpers

Template.Recipes.events({
    'click .new-recipe': () => {
        Session.set('newRecipe', true);
    }, // end of click .new-recipe
}); // end of Template.Recipes.events
