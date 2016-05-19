Meteor.publish('recipes', function() {
    return Recipes.find({ author: this.userId })
}); // end of Meteor.publish

Meteor.publish('singleRecipe', function(id) {
    check(id, String);
    return Recipes.find({ _id: id })
}); // end of Meteor.publish
