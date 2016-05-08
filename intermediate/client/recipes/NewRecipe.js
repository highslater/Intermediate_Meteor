Template.NewRecipe.events({
    'click .fa-close': function() {
        Session.set('newRecipe', false);
    }, // end of click .fa-close
}); // end of Template.NewRecipe.events
