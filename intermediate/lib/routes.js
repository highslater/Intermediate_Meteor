FlowRouter.route('/', {
    name: 'home',
    action() {
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
