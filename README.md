# Donna - The Smart Office Assistant

## Introduction:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Being in a huge corporate world, we often get lost literally. Yeah, most of the tech giants own huge blocks of buildings and they operate in a seamless way, but being humans we often tend to remember all details of what is where in the real world. On a specific note, being at work which involves lots of floors, partitions, and wings, we often wind up moving across various parts of the mazes that we live across. With smart personal assistants, this can very well be addressed by making our workplace a lot easy to move and comfy to work.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Detailed proposal documentation can be found [Here](https://file.ac/G5EImf07QBs/Donna-TheSmartOfficeAssistant.pdf).

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Detailed Documentation on Android Mobile App can be found [Here](nativescript/app ).

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Download the mobile application executable  [Here](https://file.ac/G5EImf07QBs/com.nativescript.donna.ai­.apk )

## Web Application Architecture:
![Architecture](https://file.ac/G5EImf07QBs/image00.png)

## Technical challenges:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **Angular2** - While starting this project I wanted this to be a mobile app as it involves navigation and chat type feature after knowing that native script supported angular2 framwork I felt it would be more fun to learn two techs for a single project. Angular2 was more roubust and structured when compared with it's predecessors.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Working with MVC was so smooth but I had issues as these framwork are on top of Javascript and I didnot want to host a server just to serve the static files. So I chose gh-pages. Eventhough ng build and deploy commands are out of the box, integrating with gh-pages for a peculiar URL format was tricky. However with npm build tricks based baseref attribute saved the day.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **Bootstrap UI** - As I am not a CSS guy I wanted someone to help me with CSS. Initially I was planning to keep the UI light with no sassy components, however I was impressed by ng-bootstrap for angular 2 which had satisfactiorily less number of components as it is still in development.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **MazeMap** - I chose MazeMap initially as it was the recommended library in the hackathon guidlines. However I had a small tryout with google's indoor navigation and MazeMap was too simple and easy for a native javascript framework. However problems were rooting when trying to use this in nativescript as a simple javascript library.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **ChatBot** - Initially I have started this project by keeping Microsoft's Bot framework and Bot as services but on trying out I found that their QnA bot have no capabilities of maintaining context and ability to extract intent's from the user message. After looking at options like wit.ai and api.ai I found API.ai to be developer friendly in defining intents, actions and training the bot over context with varying actions and contexts.

## Up and Running:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This static site is being deployed to gh-pages powered by git hub. You can visit the site in [Here](https://rajagopal28.github.io/Donna/).
To run in local follow the steps given in this [Link](LocalSetup.md)

## Major User Flows:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **Full Disclosure:** This is a simple 3 paged app that I have built in a time of 3 weeks. I have few more planned items that went missing as technology was not helping me much with time.
### Home:
![Home](https://file.ac/G5EImf07QBs/image01.PNG)

### ChatBot:
![ChatBot](https://file.ac/G5EImf07QBs/image02.PNG)

### Indoor Navigation:
![Indoor Map](https://file.ac/G5EImf07QBs/image03.PNG)
![Indoor Navigation](https://file.ac/G5EImf07QBs/image04.PNG)

## References:
- https://github.com/ng-bootstrap/ng-bootstrap#demo
- https://angular.io/guide/quickstart
- https://appendto.com/2016/09/building-nested-components-using-angular-2/
- http://developer.telerik.com/featured/quick-angular-2-hosting-angular-cli-github-pages/
- https://www.mazemap.com/indoor-maps
- https://blog.mazemap.com/introducing-mazemap-indoor-map-javascript-api-v1-0/
