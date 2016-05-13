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

###<a id="Tutorial_1"></a>Tutorial #1 - Project Introduction:  

Here I introduce the project we'll be creating in this series.
###<a id="Tutorial_2"></a>Tutorial #2 - Package Management:  
Published on Oct 14, 2015  
In this Intermediate Meteor video tutorial we get our project started!! I then talk a bit about how to easily add packages and what some of those packages are. 

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
--- 
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



