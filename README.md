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
- nested pages sometimes duplicate on screen
- nested pages show up resized to a small portion of the screen.

When I open this application in chrome, and use devtools to go to a mobile view, the /location page displays as expected for that view size. when I refresh and the application loads fully for mobile it breaks the views/app again.

I was able to recreate the issues we're seeing in this demo application with `<ionic-router-outlet>` . 
We think this might have something to do with ion-grid, after attempting to remove that from the locations page, we saw a render that was much closer to what we desired, but some of the components were still overlapping and not in the right position.

On our actual application we have the desired look working with ion-grid and router-view, but we'd like to switch to ionic-router-outlet.


