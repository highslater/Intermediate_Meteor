#Dev_Log  
###Intermediate Meteor Tutorial
#####Notes: Recipe Book, Caloric Log, Exercise Log, ToDo Log , weightlifting log , study log, work log,  
contact list, chat app, checking/savings account, expense account,

##Table of Contents  
[Tutorial #1 - Project Introduction] (#Tutorial_1)  
[Tutorial #2 - Package Management] (#Tutorial_2)  
[Tutorial #3 - Project Structure] (#Tutorial_3)  
[Tutorial #4 - Basic Layouts with FlowRouter] (#Tutorial_4)  
[Tutorial #5 - Basic Routing With Layouts in Meteor] (#Tutorial_5)  
[Tutorial #6 - Defining A Schema In Meteor] (#Tutorial_6)  
[Tutorial #7 - Easy Forms With AutoForm in Meteor] (#Tutorial_7)  
[Tutorial #8 - Insert Permissions, Publishing & Meteor Toys] (#Tutorial_8)  
[Tutorial #9 - Sub-documents & Array Fields] (#Tutorial_9)  
[Tutorial #10 - Private & Public Settings and Google Analytics] (#Tutorial_10)  
[Tutorial #11 - Creating Partials and Adding Styles] (#Tutorial_11)  
[Tutorial #12 - Building Our Recipes List] (#Tutorial_12)  
[Tutorial #13 - Template Level Subscriptions] (#Tutorial_13)  
[Tutorial #14 - FlowRouter Parameters] (#Tutorial_14)  
[Tutorial #15 - Single Item Subscriptions] (#Tutorial_15)  
[Tutorial #16 - User State Redirects In Routing] (#Tutorial_16)  
[Tutorial #17 - Login & Logout Redirecting] (#Tutorial_17)  
[Tutorial #18 - Update Methods & Adding To Menu] (#Tutorial_18)  
[Tutorial #19 - Filtering Our In Menu Items] (#Tutorial_19)  
[Tutorial #20 - Each:Else for No Results] (#Tutorial_20)  
[Tutorial #21 - Building The Shopping List] (#Tutorial_21)  
[Tutorial #22 - Updating With A QuickForm] (#Tutorial_22)  
[Tutorial #23 - Deleting Recipes and Session Helpers] (#Tutorial_23)

Deleting Recipes and Session Helpers
###<a id="Tutorial_1"></a>Tutorial #1 - Project Introduction:  

Here I introduce the project we'll be creating in this series.
###<a id="Tutorial_2"></a>Tutorial #2 - Package Management:  
Published on Oct 14, 2015  
In this Intermediate Meteor video tutorial,  
we get our project started!! I then talk a bit about how to easily add packages and what some of those packages are. 

######Console Output:  

```Console  

@mint64 ~/Intermediate_Meteor 
$ meteor create intermediate

Created a new Meteor app in 'intermediate'.   

To run your new app:                          
  cd intermediate                             
  meteor                                      
                                              
If you are new to Meteor, try some of the learning resources here:
  https://www.meteor.com/learn                
                                              
@mint64 ~/Intermediate_Meteor 
$ cd intermediate
@mint64 ~/Intermediate_Meteor/intermediate 
$ meteor

[[[[[ ~/Intermediate_Meteor/intermediate ]]]]]

=> Started proxy.                             
=> Started MongoDB.                           
=> Started your app.                          

=> App running at: http://localhost:3000/

```

######Web Output:  

![web output of default meteor app] (./Images/image_001.png)

######.meteor/packages [ BEFORE ] 

```text
# Meteor packages used by this project, one per line.
# Check this file (and the other files in this directory) into your repository.
#
# 'meteor add' and 'meteor remove' will edit this file for you,
# but you can also edit it by hand.

meteor-base             # Packages every Meteor app needs to have
mobile-experience       # Packages for a great mobile UX
mongo                   # The database Meteor supports right now
blaze-html-templates    # Compile .html files into Meteor Blaze views
reactive-var            # Reactive variable for tracker
jquery                  # Helpful client-side library
tracker                 # Meteor's client-side reactive programming library

standard-minifier-css   # CSS minifier run for production mode
standard-minifier-js    # JS minifier run for production mode
es5-shim                # ECMAScript 5 compatibility for older browsers.
ecmascript              # Enable ECMAScript2015+ syntax in app code

autopublish             # Publish all data to the clients (for prototyping)
insecure                # Allow all DB writes from clients (for prototyping)
```

Please copy the list below and paste it into the end of your packages file after deleting insecure and autopublish. 

Packages:  
kadira:flow-router  
kadira:blaze-layout  
erasaur:meteor-lodash  
stolinski:stylus-multi  
fortawesome:fontawesome  
spiderable  
fastclick  
raix:handlebar-helpers  
aldeed:collection2  
aldeed:autoform  
accounts-ui  
accounts-password  
matb33:bootstrap-glyphicons  
msavin:jetsetter  
zimme:active-route  
gwendall:auth-client-callbacks  

#####If anyone is getting an error after adding these packages, adding another package called 'check' appears to have fixed this (at least for now).  
```Console  

@mint64 ~/Intermediate_Meteor/intermediate 
$ meteor search kadira:flow-router

Matching packages:                            
kadira:flow-router      Carefully Designed Client Side Router for Meteor
kadira:flow-router-ssr  Same as kadira:flow-router, but with SSR support

You can use 'meteor show' to get more information on a specific item.
@mint64 ~/Intermediate_Meteor/intermediate 
$ meteor show kadira:flow-router

Package: kadira:flow-router@2.12.1            
Maintainers: kadira                           
Git: https://github.com/kadirahq/flow-router.git
Exports: FlowRouter                                                                     
Carefully Designed Client Side Router for Meteor.
FlowRouter is a very simple router for Meteor. It does routing for client-side
apps and does not handle rendering itself.
It exposes a great API for changing the URL and reactively getting data from
the URL. However, inside the router, it's not reactive. Most importantly,
FlowRouter is designed with performance in mind and it focuses on what it does
best: **routing**.

> We've released 2.0 and follow this [migration guide](#migrating-into-20) if
you are already using FlowRouter.
                                              
Recent versions:                              
  2.10.0  November 24th, 2015                 
  2.10.1  February 1st, 2016
  2.11.0  March 16th, 2016      installed
  2.12.0  April 21st, 2016
  2.12.1  April 21st, 2016      installed

Older versions of kadira:flow-router have been hidden. To see all 20 versions,
run 'meteor show --show-all kadira:flow-router'.
@mint64 ~/Intermediate_Meteor/intermediate 
$ meteor add kadira:flow-router  

Changes to your project's package version selections:
                                              
kadira:flow-router  added, version 2.12.1     
reactive-dict       added, version 1.1.7                                             
kadira:flow-router: Carefully Designed Client Side Router for Meteor

```

######.meteor/packages [ AFTER ] 

```Text
# Meteor packages used by this project, one per line.
# Check this file (and the other files in this directory) into your repository.
#
# 'meteor add' and 'meteor remove' will edit this file for you,
# but you can also edit it by hand.

meteor-base             # Packages every Meteor app needs to have
mobile-experience       # Packages for a great mobile UX
mongo                   # The database Meteor supports right now
blaze-html-templates    # Compile .html files into Meteor Blaze views
reactive-var            # Reactive variable for tracker
jquery                  # Helpful client-side library
tracker                 # Meteor's client-side reactive programming library
standard-minifier-css   # CSS minifier run for production mode
standard-minifier-js    # JS minifier run for production mode
es5-shim                # ECMAScript 5 compatibility for older browsers.
ecmascript              # Enable ECMAScript2015+ syntax in app code
kadira:flow-router      # Carefully Designed Client Side Router for Meteor
kadira:blaze-layout     # Layout Manager for Blaze (works well with FlowRouter)
erasaur:meteor-lodash   # Wrapper for Lo-Dash v4.0.0
stolinski:stylus-multi  # Stylus, w/ Nib, Rupture, Axis and PostCSS with Lost & Rucksack
fortawesome:fontawesome # Font Awesome (official): 500+ scalable vector icons, customizable via CSS, Retina friendly
spiderable              # Makes the application crawlable to web spiders
fastclick               # Faster touch events on mobile
raix:handlebar-helpers  # Handlebar helpers
aldeed:collection2      # Automatic validation of insert and update operations on the client and server.
aldeed:autoform         # Easily create forms with automatic insert and update, and automatic reactive validation.
accounts-ui             # Simple templates to add login widgets to an app
accounts-password       # Password support for accounts
matb33:bootstrap-glyphicons     # Bootstrap 3.3.4: glyphicons
msavin:jetsetter        # In-App Session Editor 
zimme:active-route      # Active route helpers
gwendall:auth-client-callbacks  # Adds client-side onLogin and onLogout methods

```

###<a id="Tutorial_3"></a>Tutorial #3 - Project Structure:  
Published on Oct 14, 2015  
In this video, I talk about setting up our project structure and what impact that has on the files within given directories.

######Folder Structure [BEFORE]  
![Folder Structure [BEFORE] ] (./Images/image_002.png "Folder Structure [BEFORE]") 

######Folder Structure [AFTER]  
![Folder Structure [AFTER]] (./Images/image_003.png "Folder Structure [AFTER]")


###<a id="Tutorial_4"></a>Tutorial #4 - Basic Layouts with FlowRouter:  
Published on Oct 19, 2015  
In this video, I talk about creating our layouts for our routing in the next episode.

######intermediate/client/main.html  

```HTML

<head>
    <title>simple</title>
</head>

```

######intermediate/client/layouts/HomeLayout.html  

```HTML

<template name="HomeLayout">
    <header>
        <h1>My Recipe Book</h1> {{> loginButtons}}
    </header>
    <main>
        <div class="billboard">
            <h2>Organize Your Meals</h2>
        </div>
    </main>
</template>

```

######intermediate/client/layouts/MainLayout.html  

```HTML

<template name="MainLayout">
    <header>
        <h1>My Recipe Book</h1> {{> loginButtons}}
    </header>
    <main>
        {{> Template.dynamic template=main}}
    </main>
</template>

```

###<a id="Tutorial_5"></a>Tutorial #5 - Basic Routing With Layouts in Meteor: 
Published on Oct 19, 2015  
In this video, I talk about using FlowRouter and Blaze Layouts to create some  
basic routes to get us going. 

######intermediate/lib/routes.js  

```JavaScript  

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

```

######intermediate/client/layouts/MainLayout.html  

```JavaScript  

<template name="MainLayout">
    <header>
        <h1>My Recipe Book</h1> {{> loginButtons}}
    </header>
    <main>
        {{> Template.dynamic template=main}}
    </main>
</template>
<Template name="Test">
    HELLO !
</Template>

```

######Web Output of [ '/' ] :  

![Web Output of [ '/' ]] (./Images/image_004.png "Web Output of [ '/' ]")  

######Web Output of [ '/test' ] :  

![Web Output of [ '/test' ]] (./Images/image_004.png "Web Output of [ '/test' ]")

###<a id="Tutorial_6"></a>Tutorial #6 - Defining A Schema In Meteor: 
Published on Oct 26, 2015  
In this Intermediate Meteor video tutorial, I show you how to define a schema  
using Simple Schema and Collection2.

######intermediate/collections/Recipes.js  

```JavaScript  

Recipes = new Meteor.Collection('recipes');

RecipeSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
    }, // end of name

    desc: {
        type: String,
        label: "Description",
    }, // end of desc

    author: {
        type: String,
        label: "Author",
        autoValue: function() {
            return this.userId
        }, // end of autoValue
    }, // end of author

    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function() {
            return new Date();
        }, // end of autoValue
    }, // end of createdAt
}); // end of RecipeSchema

Recipes.attachSchema(RecipeSchema);

```

###<a id="Tutorial_7"></a>Tutorial #7 - Easy Forms With AutoForm in Meteor: 
Published on Oct 26, 2015  
In this Intermediate Meteor video tutorial, I talk about using FlowRouter and Blaze Layouts  
to create some basic routes to get us going.

######intermediate/lib/routes.js  

```JavaScript  

FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('HomeLayout');
    }, // end of action
}); // end of FlowRouter.route

FlowRouter.route('/recipe-book', {
    name: 'recipe-book',
    action() {
        BlazeLayout.render('MainLayout', { main: 'Recipes' });
    }, // end of action
}); // end of FlowRouter.route

```

######intermediate/client/recipes/Recipes.html  

```HTML  

<template name="Recipes">
    {{> NewRecipe}}
</template>

```

######intermediate/client/recipes/NewRecipe.html  

```HTML  

<template name="NewRecipe">
    <div class="new-recipe-container">
        {{> quickForm collection="Recipes" id="insertRecipeForm" type="insert" class="new-recipe-form"}}
    </div>
</template>

```

######intermediate/collections/Recipes.js  

```JavaScript  

Recipes = new Meteor.Collection('recipes');

RecipeSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
    }, // end of name

    desc: {
        type: String,
        label: "Description",
    }, // end of desc

    author: {
        type: String,
        label: "Author",
        autoValue: function() {
            return this.userId
        }, // end of autoValue
        autoform: {
            type: "hidden",
        }, // end of autoform
    }, // end of author

    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function() {
            return new Date();
        }, // end of autoValue
        autoform: {
            type: "hidden",
        }, // end of autoform
    }, // end of createdAt
}); // end of RecipeSchema

Recipes.attachSchema(RecipeSchema);

```

######intermediate/client/layouts/MainLayout.html  

```HTML  

<template name="MainLayout">
    <header>
        <h1>My Recipe Book</h1> {{> loginButtons}}
    </header>
    <main>
        {{> Template.dynamic template=main}}
    </main>
</template>

```

######Web Output [/recipe-book]  

![Web Output [/recipe-book] ] (./Images/image_006.png "Web Output [/recipe-book] ")

###<a id="Tutorial_8"></a>Tutorial #8 - Insert Permissions, Publishing & Meteor Toys:  
Published on Oct 26, 2015  
In this Intermediate Meteor video tutorial, I talk about adding allow permissions, publishing and subscribing and Meteor  
Toys a tool for seeing your information.

```Console
@mint64 ~/Intermediate_Meteor/intermediate 
$ meteor add meteortoys:allthings
                                                                                
Changes to your project's package version selections:
                                              
meteortoys:allthings     added, version 3.0.0 
meteortoys:authenticate  added, version 3.0.0
meteortoys:autopub       added, version 3.0.0
meteortoys:blueprint     added, version 3.0.0
meteortoys:email         added, version 3.0.0
meteortoys:hotreload     added, version 3.0.0
meteortoys:listen        added, version 3.0.0
meteortoys:method        added, version 3.0.4
meteortoys:pub           added, version 3.0.4
meteortoys:result        added, version 3.0.0
meteortoys:shell         added, version 3.0.0
meteortoys:status        added, version 3.0.0
meteortoys:sub           added, version 3.0.0
meteortoys:throttle      added, version 3.0.0
msavin:mongol            added, version 2.0.1
                                          
meteortoys:allthings: Insanely Handy Development Tools

@mint64 ~/Programming/Meteor/Lintermediate 
$ meteor remove msavin:jetsetter
msavin:jetsetter: removed dependency  

@mint64 ~/Intermediate_Meteor/intermediate 
$ meteor list

accounts-password               1.1.8  Password support for accounts
accounts-ui                     1.1.9  Simple templates to add login widgets ...
aldeed:autoform                 5.8.1  Easily create forms with automatic ins...
aldeed:collection2              2.9.1  Automatic validation of insert and upd...
blaze-html-templates            1.0.4  Compile HTML templates into reactive U...
ecmascript                      0.4.3  Compiler plugin that supports ES2015+ ...
erasaur:meteor-lodash           4.0.0  Wrapper for Lo-Dash v4.0.0
es5-shim                        4.5.10  Shims and polyfills to improve ECMASc...
fastclick                       1.0.11  Faster touch events on mobile
fortawesome:fontawesome         4.5.0  Font Awesome (official): 500+ scalable...
gwendall:auth-client-callbacks  0.1.0  Adds client-side onLogin and onLogout ...
jquery                          1.11.8  Manipulate the DOM using CSS selectors
kadira:blaze-layout             2.3.0  Layout Manager for Blaze (works well w...
kadira:flow-router              2.12.1  Carefully Designed Client Side Router...
matb33:bootstrap-glyphicons     10.0.0  Bootstrap 3.3.4: glyphicons
meteor-base                     1.0.4  Packages that every Meteor app needs
meteortoys:allthings            3.0.0  Insanely Handy Development Tools
mobile-experience               1.0.4  Packages for a great mobile user exper...
mongo                           1.1.7  Adaptor for using MongoDB and Minimong...
raix:handlebar-helpers          0.2.5  Handlebar helpers
reactive-var                    1.0.9  Reactive variable
spiderable                      1.0.13  Makes the application crawlable to we...
standard-minifier-css           1.0.6  Standard css minifier used with Meteor...
standard-minifier-js            1.0.6  Standard javascript minifiers used wit...
stolinski:stylus-multi          1.4.3  Stylus, w/ Nib, Rupture, Axis and Post...
tracker                         1.0.13  Dependency tracker to allow reactive ...
zimme:active-route              2.3.2  Active route helpers

```

######intermediate/server/publish.js  

```JavaScript  

Meteor.publish('recipes', function() {
    return Recipes.find({ author: this.userId })
}); // end of Meteor.publish

```

######intermediate/client/recipes/Recipes.js  

```JavaScript  

Meteor.subscribe('recipes', );

```

######intermediate/collecyions/Recipes.js  

```JavaScript  

Recipes = new Meteor.Collection('recipes');

Recipes.allow({
    insert: function(userId, doc) {
        return !!userId;
    }, // end of insert
}); // end of Recipes.allow

RecipeSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
    }, // end of name

    desc: {
        type: String,
        label: "Description",
    }, // end of desc

    author: {
        type: String,
        label: "Author",
        autoValue: function() {
            return this.userId
        }, // end of autoValue
        autoform: {
            type: "hidden",
        }, // end of autoform
    }, // end of author

    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function() {
            return new Date();
        }, // end of autoValue
        autoform: {
            type: "hidden",
        }, // end of autoform
    }, // end of createdAt
}); // end of RecipeSchema

Recipes.attachSchema(RecipeSchema);

```

###<a id="Tutorial_9"></a>Tutorial #9 - Sub-documents & Array Fields:  

Published on Oct 28, 2015  
In this Intermediate Meteor video tutorial,  
I talk about completing our schema by using sub-documents and array fields.  

######intermediate/collections/Recipes.js  

```JavaScript  

Recipes = new Mongo.Collection('recipes');

Recipes.allow({
    insert: function(userId, doc) {
        return !!userId;
    }, // end of insert
}); // end of Recipes.allow

Ingredient = new SimpleSchema({
    name: {
        type: String
    }, // end of name
    amount: {
        type: String
    }, // end of amount
}); // end of Ingredient

RecipeSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
    }, // end of name

    desc: {
        type: String,
        label: "Description",
    }, // end of desc

    ingredients: {
        type: [Ingredient]
    }, // end of ingredients

    inMenu: {
        type: Boolean,
        defaultValue: false,
        optional: true,
        autoform: {
            type: "hidden",
        }, // end of autoform
    }, // end of inMenu

    author: {
        type: String,
        label: "Author",
        autoValue: function() {
            return this.userId
        }, // end of autoValue
        autoform: {
            type: "hidden", // leave out " " and => (STDERR) ReferenceError: hidden is not defined
        }, // end of autoform
    }, // end of author

    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function() {
            return new Date();
        }, // end of autoValue
        autoform: {
            type: "hidden",
        }, // end of autoform
    }, // end of createdAt
}); // end of RecipeSchema

Recipes.attachSchema(RecipeSchema);

```

###<a id="Tutorial_10"></a>Tutorial #10 - Private & Public Settings and Google Analytics:  

Published on Oct 28, 2015  
In this Intermediate Meteor video tutorial,  
I talk about creating and using a settings.json file to store private or public settings.  
We also set up Google Analytics for our routing.

######Console Output:  

```Console  

@mint64 ~/Intermediate_Meteor/intermediate 
$ meteor --settings settings.json

[[[[[ ~/Programming/Meteor/LevelUpTuts/Intermediate_Meteor/intermediate ]]]]]

=> Started proxy.                             
=> Started MongoDB.                           
=> Started your app.                          
                                              
=> App running at: http://localhost:3000/  

```

######intermediate/.gitignore  

```Text  
node_modules/
settings.json

```

######Console Output:  

```Console  

@mint64 ~/intermediate 
$ meteor search ganalytics

Matching packages:                            
datariot:ganalytics    Publish pageviews and events to Google Analytics using...
indesign:ganalytics    Log page views and events to Google Analytics.
laboratory:ganalytics  Publish pageviews and events to Google Analytics using...
shadowsyc:ganalytics   Adding support for user_id tracking

You can use 'meteor show' to get more information on a specific item.

@mint64 ~/intermediate 
$ meteor add datariot:ganalytics

Changes to your project's package version selections:                                            
datariot:ganalytics  added, version 0.2.1                                                 
datariot:ganalytics: Publish pageviews and events to Google Analytics using the new analytics.js code.

```

######intermediate/settings.json  

```Json 

{
    "public": {
        "ga": {
            "account": "UA-XXXXXXXX-X"
        }
    },
    "private": {

    }
}

```

######intermediate/lib/routes.js  

```JavaScript  

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

```

###<a id="Tutorial_11"></a>Tutorial #11 - Creating Partials and Adding Styles:  
Published on Oct 28, 2015  
In this Intermediate Meteor video tutorial,  
we add styles and create the navigation for our site.

######intermediate/client/partials/SideNav.html  

```HTML  

<template name="SideNav">
    <nav class="side-nav">
        <ul>
            <li>
                <a href="/recipe-book"><i class="fa fa-list"></i>Recipe Book</a>
            </li>
            <li>
                <a href="/menu"><i class="fa fa-map-o"></i>Menu</a>
            </li>
            <li>
                <a href="/shopping-list"><i class="fa fa-shopping-cart"></i>Shopping List</a>
            </li>
        </ul>
    </nav>
</template>

```

######intermediate/client/partials/Header.html  

```HTML  

<template name="Header">
    <header>
        <h1>My Recipe Book</h1> {{> loginButtons}}
    </header>
</template>

```

######intermediate/client/layouts/HomeLayout.html  

```HTML 

<template name="HomeLayout">
    {{> Header}}
    <main>
        <div class="billboard">
            <h2>Organize Your Meals</h2>
        </div>
    </main>
</template>

```

######intermediate/client/layouts/MainLayout.html  

```HTML  

<template name="MainLayout">
    {{> Header}}  
    {{> SideNav}}
    <main class="main-layout">
        {{> Template.dynamic template=main}}
    </main>
</template>

```

###<a id="Tutorial_12"></a>Tutorial #12 - Building Our Recipes List:  
Published on Nov 2, 2015  
In this Intermediate Meteor video tutorial,  
we further build out the Recipe Book page by iterating over our cursor  
and sub document to output our data. 

######intermediate/client/recipes/Recipes.html  
```HTML 
<template name="Recipes">
    {{> NewRecipe}}
    <section class="recipes">
        {{#each recipes}}
            {{> Recipe}}
        {{/each}}
    </section>
</template>

```

######intermediate/client/recipes/Recipe.html  

```HTML
<template name="Recipe">
    <article class="recipe">
        <h3>{{name}}</h3>
        <p>{{desc}}</p>
        <p>
            {{#each ingredients}}
                <span class="ingredients">{{name}} - {{amount}}</span>
            {{/each}}
        </p>
    </article>
</template>

```

######intermediate/client/recipes/Recipes.js  

```JavaScript 

Meteor.subscribe('recipes', );

Template.Recipes.helpers({
    recipes: () => {
        return Recipes.find({});
    }, // end of recipes
}); // end of Template.Recipes.helpers

```

###<a id="Tutorial_13"></a>Tutorial #13 - Template Level Subscriptions:  
Published on Nov 2, 2015  
In this Intermediate Meteor video tutorial,  
we add styles and create the navigation for our site.

######intermediate/client/recipes/Recipes.js  

```JavaScript  

Template.Recipes.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('recipes');
    }); // end of self.autorun
}); // end of Template.Recipes.onCreated

Template.Recipes.helpers({
    recipes: () => {
        return Recipes.find({});
    }, // end of recipes
}); // end of Template.Recipes.helpers

```

######intermediate/client/recipes/Recipes.html  

```HTML  

<template name="Recipes">
    {{> NewRecipe}}
    <section class="recipes">
        {{#if Template.subscriptionsReady}}
            {{#each recipes}}
                {{> Recipe}}
            {{/each}}
        {{else}}
            <p>loading</p>
        {{/if}}
    </section>
</template>

```

###<a id="Tutorial_14"></a>Tutorial #14 - FlowRouter Parameters:  
Published on Nov 2, 2015  
In this Intermediate Meteor video tutorial,  
I show you how to take parameters from a url and use them to filter your data.  

######intermediate/client/recipes/Recipe.html  

```HTML  

<template name="Recipe">
    <article class="recipe">
        <h3>{{name}}</h3>
        <p>{{desc}}</p>
        <p>
            {{#each ingredients}}
                <span class="ingredients">{{name}} - {{amount}}</span>
            {{/each}}
        </p>
        <a href="/recipe/{{_id}}">View Details</a>
    </article>
</template>

```

######intermediate/lib/routes.js  

```JavaScript  

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

FlowRouter.route('/recipe/:id', {
    name: 'recipe-book',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', { main: 'RecipeSingle' });
    }, // end of action
}); // end of FlowRouter.route

```

######intermediate/client/recipes/RecipeSingle.html  
```
<template name="RecipeSingle">
    <h1>{{recipe.name}}</h1>
</template>

```

######intermediate/client/recipes/RecipeSingle.js  

```JavaScript  

Template.RecipeSingle.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('recipes');
    }); // end of self.autorun
}); // end of Template.Recipes.onCreated

Template.RecipeSingle.helpers({
    recipe: () => {
        var id = FlowRouter.getParam('id')
        return Recipes.findOne({ _id: id });
    }, // end of recipes
}); // end of Template.Recipes.helpers

```

###<a id="Tutorial_15"></a>Tutorial #15 - Single Item Subscriptions:  
Published on Nov 2, 2015  
In this Intermediate Meteor video tutorial,  
we add a single item subscription so that we are only subscribing to the data we need.  

######Console Output:  

```Console 

@mint64 ~/intermediate  
$ meteor add check
                                              
check: Check whether a value matches a pattern

```

######intermediate/client/recipes/RecipeSingle.js  
```JavaScript 

Template.RecipeSingle.onCreated(function() {
    var self = this;
    self.autorun(function() {
        var id = FlowRouter.getParam('id');
        self.subscribe('singleRecipe', id);
    }); // end of self.autorun
}); // end of Template.Recipes.onCreated

Template.RecipeSingle.helpers({
    recipe: () => {
        var id = FlowRouter.getParam('id');
        return Recipes.findOne({ _id: id });
    }, // end of recipes
}); // end of Template.Recipes.helpers

```

######intermediate/server/publish.js  

```JavaScript  

Meteor.publish('recipes', function() {
    return Recipes.find({ author: this.userId })
}); // end of Meteor.publish

Meteor.publish('singleRecipe', function(id) {
    check(id, String);
    return Recipes.find({ _id: id })
}); // end of Meteor.publish

```


###<a id="Tutorial_16"></a>Tutorial #16 - User State Redirects In Routing:  
Published on Nov 11, 2015  
In this Intermediate Meteor video tutorial,  
we write redirects to make sure the user is landing on the correct  
page based on their login status using FlowRouter.

######intermediate/lib/routes.js  

```JavaScript

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

```

###<a id="Tutorial_17"></a>Tutorial #17 - Login & Logout Redirecting:  
Published on Nov 11, 2015  
In this Intermediate Meteor video tutorial,  
we write redirects to make sure the user is landing on the correct page when logging in or out.  

######intermediate/lib/routes,js  

```JavaScript  

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

```


###<a id="Tutorial_18"></a>Tutorial #18 - Update Methods & Adding To Menu:  
Published on Nov 18, 2015  
In this Intermediate Meteor video tutorial,  
we write our methods and our buttons to toggle something into your weekly menu.


######intermediate/client/recipes/Recipe.html  


```HTML  

<template name="Recipe">
    <article class="recipe">
        <h3>{{name}}</h3>
        <p>{{desc}}</p>
        <p>
            {{#each ingredients}}
                <span class="ingredients">{{name}} - {{amount}}</span>
            {{/each}}
        </p>
        <a href="/recipe/{{_id}}">View Details</a>
        <button class="btn-primary toggle-menu">Add to Menu</button>
        <button class="btn-deny toggle-menu">Remove From Menu</button>
    </article>
</template>

```

######intermediate/client/recipes/Recipe.js  

```JavaScript

Template.Recipe.events({
    'click .toggle-menu': function() {
        Meteor.call('toggleMenuItem', this._id, this.inMenu)
    }
}); // end of Template.Recipe.events

```

######intermediate/collections/Recipes.js  

```JavaScript  

Recipes = new Mongo.Collection('recipes');

Recipes.allow({
    insert: function(userId, doc) {
        return !!userId;
    }, // end of insert
    update: function(userId, doc) {
        return !!userId;
    }, // end of update
}); // end of Recipes.allow

Ingredient = new SimpleSchema({
    name: {
        type: String
    }, // end of name
    amount: {
        type: String
    }, // end of amount
}); // end of Ingredient

RecipeSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
    }, // end of name
    desc: {
        type: String,
        label: "Description",
    }, // end of desc
    ingredients: {
        type: [Ingredient]
    }, // end of ingredients
    inMenu: {
        type: Boolean,
        defaultValue: false,
        optional: true,
        autoform: {
            type: "hidden",
        }, // end of autoform
    }, // end of inMenu
    author: {
        type: String,
        label: "Author",
        autoValue: function() {
            return this.userId
        }, // end of autoValue
        autoform: {
            type: "hidden", // leave out " " and => (STDERR) ReferenceError: hidden is not defined
        }, // end of autoform
    }, // end of author
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function() {
            return new Date();
        }, // end of autoValue
        autoform: {
            type: "hidden",
        }, // end of autoform
    }, // end of createdAt
}); // end of RecipeSchema

Meteor.methods({
    toggleMenuItem: function(id, currentState) {
        Recipes.update(id, {
            $set: {
                inMenu: !currentState
            } // end of set
        }); // end of  Recipes.update
    }, // end of toggleMenuItem
}); // end of Meteor.methods

Recipes.attachSchema(RecipeSchema);

```


###<a id="Tutorial_19"></a>Tutorial #19 - Filtering Our In Menu Items:  
Published on Nov 18, 2015  
In this Intermediate Meteor video tutorial,  
we write the Menu route, clean up our styles and add the menu template iterating over menu items.  

######intermediate/client/recipes/Recipe.html  

```HTML

<template name="Recipe">
    <article class="recipe {{#if inMenu}} in-menu {{/if}}">
        <h3>{{name}}</h3>
        <p>{{desc}}</p>
        <p>
            {{#each ingredients}}
                <span class="ingredients">{{name}} - {{amount}}</span>
            {{/each}}
        </p>
        <a href="/recipe/{{_id}}">View Details</a>
        <button class="btn-primary toggle-menu">Add to Menu</button>
        <button class="btn-deny toggle-menu">Remove From Menu</button>
    </article>
</template>

```

######intermediate/lib/routes.js  

```JavaScript  

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
 
```


######intermediate/client/menu/Menu.html  

```HTML   

<template name="Menu">
    <h1 class="page-title">My Current menu</h1>
    {{#each recipes}}
        <h3>{{name}}</h3>
        <p>{{desc}}</p>
    {{/each}}
</template>

```

######intermediate/client/menu/Menu.js  

```JavaScript  

Template.Menu.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('recipes');
    }); // end of self.autorun
}); // end of Template.Recipes.onCreated

Template.Menu.helpers({
    recipes: () => {
        return Recipes.find({ inMenu: true });
    }, // end of recipes
}); // end of Template.Recipes.helpers

```

###<a id="Tutorial_20"></a>Tutorial #20 - Each:Else for No Results:  
Published on Dec 2, 2015  
In this Intermediate Meteor video tutorial, we improve the menu page.  

######intermediate/client/menu/Menu>html  


```HTML  

<template name="Menu">
    <h1 class="page-title">My Current menu</h1>
    {{#each recipes}}
        {{> MenuItem}}
        {{else}}
            <h3>Please add <a href="/recipe-book">recipes</a> to your menu</h3>
    {{/each}}
</template>
<template name="MenuItem">
    <div class="menu-item">
        <h3>{{name}}</h3>
        <p>{{desc}}</p>
    </div>
</template>

```


######intermediate/client/recipes/Recipe.html  

```HTML  

<template name="Recipe">
    <article class="recipe {{#if inMenu}} in-menu {{/if}}">
        <h3>{{name}}</h3>
        <p>{{desc}}</p>
        <p>
            {{#each ingredients}}
                <span class="ingredients">{{name}} - {{amount}}</span>
            {{/each}}
        </p>
        <a href="/recipe/{{_id}}">View Details</a>
        {{#if inMenu}}
            <button class="btn-deny toggle-menu">Remove From Menu</button>
        {{else}}
            <button class="btn-primary toggle-menu">Add to Menu</button>
        {{/if}}
    </article>
</template>

```


###<a id="Tutorial_21"></a>Tutorial #21 - Building The Shopping List:  
Published on Dec 2, 2015  
In this Intermediate Meteor video tutorial, we write the Shopping List page. 

######intermediate/client/shopping_list/ShoppingList.html  

```HTML  

<template name="ShoppingList">
    <h1 class="page-title">My Shopping List</h1>
    <ul class="shopping-list">
        {{#each shoppingList}}
            {{#each ingredients}}
                <li>{{name}} - <span class="amount">{{amount}}</span></li>
            {{/each}}
            {{else}}
                <li> Please add <a href="/recipe-book">recipes</a> to your menu</li>
        {{/each}}
    </ul>
</template>

```

######intermediate/client/shopping_list/ShoppingList.js  

```JavaScript  

Template.ShoppingList.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('recipes');
    }); // end of self.autorun
}); // end of Template.ShoppingList.onCreated

Template.ShoppingList.helpers({
    shoppingList: () => {
        return Recipes.find({ inMenu: true });
    }, // end of recipes
}); // end of Template.ShoppingList.helpers

```

######intermediate/lib/routes.js  

```JavaScript  

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

```

###<a id="Tutorial_22"></a>Tutorial #22 - Updating With A QuickForm:  
Published on Dec 9, 2015  
In this Intermediate Meteor video tutorial,  
we write an update quickform and enable autosaving.  

######intermediate/client/recipes/Recipe.html


```HTML  

<template name="Recipe">
    <article class="recipe {{#if inMenu}} in-menu {{/if}}">
        <h3>{{name}}</h3>
        <p>{{desc}}</p>
        <p>
            {{#each ingredients}}
                <span class="ingredients">{{name}} - {{amount}}</span>
            {{/each}}
        </p>
        <a href="/recipe/{{_id}}">View Details</a>
        {{#if inMenu}}
            <button class="btn-deny toggle-menu">Remove From Menu</button>
        {{else}}
            <button class="btn-primary toggle-menu">Add to Menu</button>
        {{/if}}
        {{> quickForm collection="Recipes" id=updateRecipeId type="update" doc=this autosave=true}}
    </article>
</template>

```

######intermediate/client/recipes/Recipe.js  

```JavaScript  

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

```


###<a id="Tutorial_23"></a>Tutorial #23 - Deleting Recipes and Session Helpers:  
Published on Dec 9, 2015  
In this Intermediate Meteor video tutorial,  
we add the delete feature and hide the edit form with a session toggle using handlebars helpers






































































