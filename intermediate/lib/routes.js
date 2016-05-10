FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('HomeLayout');
    }, // end of action
}); // end of FlowRouter.route

FlowRouter.route('/test', {
    name: 'test',
    action() {
        BlazeLayout.render('MainLayout', { main: 'Test' });
    }, // end of action
}); // end of FlowRouter.route
