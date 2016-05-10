Recipes = new Meteor.Collection('recipes');

RecipeSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
    }, // end of name

    desc: {
        type: String,
        label: "Description",
    }, // end of desc

    author: {
        type: String,
        label: "Author",
        autoValue: function() {
            return this.userId
        }, // end of autoValue
    }, // end of author

    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function() {
            return new Date();
        }, // end of autoValue
    }, // end of createdAt
}); // end of RecipeSchema

Recipes.attachSchema(RecipeSchema);
