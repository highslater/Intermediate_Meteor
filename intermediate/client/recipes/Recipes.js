Meteor.subscribe('recipes', );

Template.Recipes.helpers({
    recipes: () => {
        return Recipes.find({});
    }, // end of recipes
}); // end of Template.Recipes.helpers
