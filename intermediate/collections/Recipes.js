Recipes = new Meteor.Collection('recipes');

Recipes.allow({
    insert: function(userId, doc) {
        return !!userId;
    }, // end of insert
}); // end of Recipes.allow

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
        autoform: {
            type: "hidden",
        }, // end of autoform
    }, // end of author

    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function() {
            return new Date();
        }, // end of autoValue
        autoform: {
            type: "hidden",
        }, // end of autoform
    }, // end of createdAt
}); // end of RecipeSchema

Recipes.attachSchema(RecipeSchema);
