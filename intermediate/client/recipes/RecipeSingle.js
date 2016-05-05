Template.RecipeSingle.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('recipes');
    });
});

// console.log(Meteor.settings.public.ga.account);
Template.RecipeSingle.helpers({
    recipe: () => {
        var id = FlowRouter.getParam('id');
        return Recipes.findOne({ _id: id });
    }, // end of recipes
}); // end of Template.Recipes.helpers
