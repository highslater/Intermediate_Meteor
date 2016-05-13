Recipes = new Mongo.Collection('recipes');

Recipes.allow({
    insert: function(userId, doc) {
        return !!userId;
    }, // end of insert
}); // end of Recipes.allow

Ingredient = new SimpleSchema({
    name: {
        type: String
    }, // end of name
    amount: {
        type: String
    }, // end of amount
}); // end of Ingredient

RecipeSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
    }, // end of name

    desc: {
        type: String,
        label: "Description",
    }, // end of desc

    ingredients: {
        type: [Ingredient]
    }, // end of ingredients

    inMenu: {
        type: Boolean,
        defaultValue: false,
        optional: true,
        autoform: {
            type: "hidden",
        }, // end of autoform
    }, // end of inMenu

    author: {
        type: String,
        label: "Author",
        autoValue: function() {
            return this.userId
        }, // end of autoValue
        autoform: {
            type: "hidden", // leave out " " and => (STDERR) ReferenceError: hidden is not defined
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
