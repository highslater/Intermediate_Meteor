Template.Recipe.helpers({
    updateRecipeId: function() {
        return this._id;
    }, // end of recipes
}); // end of Template.Recipe.helpers

Template.Recipe.events({
    'click .toggle-menu': function() {
        Meteor.call('toggleMenuItem', this._id, this.inMenu)
    }, // end of click .toggle-menu
    'click .fa-trash': function() {
        Meteor.call('deleteRecipe', this._id);
    }, // end of click .fa-trash
    'click .fa-pencil': function() {
        Session.set('editMode', !Session.get('editMode'));
    }, // end of click .fa-pencil
}); // end of Template.Recipe.events
