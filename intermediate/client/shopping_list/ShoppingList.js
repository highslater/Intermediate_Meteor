Template.ShoppingList.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('recipes');
    }); // end of self.autorun
}); // end of Template.ShoppingList.onCreated

Template.ShoppingList.helpers({
    shoppingList: () => {
        return Recipes.find({ inMenu: true });
    }, // end of recipes
}); // end of Template.ShoppingList.helpers
