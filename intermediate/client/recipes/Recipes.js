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
