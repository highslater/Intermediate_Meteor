Template.ShoppingList.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('recipes');
    });
});

Template.ShoppingList.helpers({
    shoppingList: () => {
            return Recipes.find({ inMenu: true });
        } // end of recipes
}); // end of Template.Recipes.helpers
