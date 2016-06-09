Template.Recipe.onCreated(function() {
    this.editMode = new ReactiveVar(false);
}); // end of Template.Recipe.onCreated

Template.Recipe.helpers({
    updateRecipeId: function() {
        return this._id;
    }, // end of updateRecipeId
    editMode: function() {
        return Template.instance().editMode.get();
    }, // end of editMode
}); // end of Template.Recipe.helpers

Template.Recipe.events({
    'click .toggle-menu': function() {
        Meteor.call('toggleMenuItem', this._id, this.inMenu)
    }, // end of click .toggle-menu
    'click .fa-trash': function() {
        Meteor.call('deleteRecipe', this._id);
    }, // end of click .fa-trash
    'click .fa-pencil': function(event, template) {
        template.editMode.set(!template.editMode.get())
    }, // end of click .fa-pencil
}); // end of Template.Recipe.events
