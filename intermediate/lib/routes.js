   if (Meteor.isClient) {
       Accounts.onLogin(function() {
           FlowRouter.go('recipe-book');
       });

       Accounts.onLogout(function() {
           FlowRouter.go('home');
       });
   }

   FlowRouter.triggers.enter([function(context, redirect) {
       if (!Meteor.userId()) {
           FlowRouter.go('home');
       }
   }]);

   FlowRouter.route('/', {
       name: 'home',
       action() {
           if (Meteor.userId()) {
               FlowRouter.go('recipe-book');
           }
           GAnalytics.pageview();
           BlazeLayout.render('HomeLayout')
       }, // end of action
   }); // end of FlowRouter.route

   FlowRouter.route('/recipe-book', {
       name: 'recipe-book',
       action() {
           GAnalytics.pageview();
           BlazeLayout.render('MainLayout', { main: 'Recipes' })
       }, // end of action
   }); // end of FlowRouter.route

   FlowRouter.route('/recipe/:id', {
       name: 'recipe',
       action() {
           GAnalytics.pageview();
           BlazeLayout.render('MainLayout', { main: 'RecipeSingle' })
       }, // end of action
   }); // end of FlowRouter.route

   FlowRouter.route('/menu', {
       name: 'menu',
       action() {
           GAnalytics.pageview();
           BlazeLayout.render('MainLayout', { main: 'Menu' })
       }, // end of action
   }); // end of FlowRouter.route
