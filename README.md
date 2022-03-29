# nested routes - Donatos

## Project setup
```
npm install
```
We're looking at mobile/desktop web views currently. 
Part of moving to ionic-router-outlet is to utilize more native navigation for the website and mobile apps.

## npm commands
- Compiles and hot-reloads for development: `npm run serve`

## Issues
- nested pages show up resized to a small portion of the screen.
- removing ion-grid from page helps, but not fully.

When I open this application in chrome, and use devtools to go to a mobile view, the /location page displays as expected for that view size. when I refresh and the application loads fully for mobile it breaks the views/app again.

I was able to recreate the issues we're seeing in this demo application with `<ionic-router-outlet>` . 
On our actual application we have the desired look working with ion-grid and router-view, but we'd like to switch to ionic-router-outlet.

There are other things broken with this demo like scrolling.. but we do have that working on our end, I don't think that's an issue for us.
Really we just want to make sure we are using the vue router and ionic-router-outlet the correct way with best practices in mind for Mobile App plus Desktop/Mobile Web.
