##Intermediate Meteor Tutorial
#####Notes:  
Recipe Book, Caloric Log, Exercise Log, ToDo Log  
In this series we are going to be exploring some of the packages and techniques that you will encounter in making web applications with Meteor. 
###Tutorial #1 - Project Introduction: 
Here I introduce the project we'll be creating in this series.
###Tutorial #2 - Package Management:  
Published on Oct 14, 2015  
In this Intermediate Meteor video tutorial we get our project started!! I then talk a bit about how to easily add packages and what some of those packages are. 

If anyone is getting an error after adding these packages, adding another package called 'check' appears to have fixed this (at least for now).


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

######.meteor/packages [ AFTER ] 

```

```























