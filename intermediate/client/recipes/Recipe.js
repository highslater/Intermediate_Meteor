Template.Recipe.helpers({
    updateRecipeId: function() {
        return this._id;
    }, // end of recipes
}); // end of Template.Recipe.helpers

Template.Recipe.events({
    'click .toggle-menu': function() {
        Meteor.call('toggleMenuItem', this._id, this.inMenu)
    }
}); // end of Template.Recipe.events
