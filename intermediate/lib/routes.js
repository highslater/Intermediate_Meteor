if (Meteor.isClient) {
    Accounts.onLogin(function() {
        FlowRouter.go('recipe-book');
    }); // end of Accounts.onLogin

    Accounts.onLogout(function() {
        FlowRouter.go('home');
    }); // end of Accounts.onLogout
} // end of if (Meteor.isClient)

FlowRouter.triggers.enter([function(context, redirect) {
    if (!Meteor.userId()) {
        FlowRouter.go('home');
    } // end of if !Meteor.userId()
}]); // end of FlowRouter.triggers.enter

FlowRouter.route('/', {
    name: 'home',
    action() {
        if (Meteor.userId()) {
            FlowRouter.go('recipe-book');
        } // end of if (Meteor.userId())
        GAnalytics.pageview();
        BlazeLayout.render('HomeLayout');
    }, // end of action
}); // end of FlowRouter.route

FlowRouter.route('/recipe-book', {
    name: 'recipe-book',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', { main: 'Recipes' });
    }, // end of action
}); // end of FlowRouter.route

FlowRouter.route('/recipe/:id', {
    name: 'recipe',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', { main: 'RecipeSingle' });
    }, // end of action
}); // end of FlowRouter.route

FlowRouter.route('/menu', {
    name: 'menu',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', { main: 'Menu' });
    }, // end of action
}); // end of FlowRouter.route

FlowRouter.route('/shopping-list', {
    name: 'shopping-list',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', { main: 'ShoppingList' });
    }, // end of action
}); // end of FlowRouter.route
