# `Stay Away - Cross Platform mobile app built using Ionic 4`
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FRoboMx%2FStayAway&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

## Features:
  * Report scam numbers.
  * Post spam messages from social media platforms.
  * Upvote and downvote submissions.
  * Google account authentication.

## Technology Stack:
  * Ionic 4
  * Firebase
  
## Google Play Store:
<a href="https://play.google.com/store/apps/details?id=tech.robomx.stayaway">Download app</a>

## Screenshots:
<img src="images/1.png" width="300px" height="500px"/><img src="images/2.png" width="300px" height="500px"/>
<img src="images/3.png" width="300px" height="500px"/>
<img src="images/4.png" width="300px" height="500px"/>

## How to run project:
  1) Create a new project on Firebase and follow the steps below.<br/>
        * `nano src/config.js`
        * Copy the Firebase configurations and paste in 'config.js' file.
<pre>
	  export const firebaseConfig = {
	  		fire: {
  			      apiKey: "",
			      authDomain: "",
			      databaseURL: "",
			      projectId: "",
			      storageBucket: "",
			      messagingSenderId: ""
		       }
		}
</pre>
		       
  2) Install dependencies<br/>
      `npm install`
  3) Start Ionic server with lab<br/>
      `ionic serve -l`

Note: Change the web client ID in following files.
  * package.json
  * src/app/tab1/tab1.page.ts
  * config.xml

## To test on Android device:
  `ionic cordova platform add android`<br/>
  `ionic cordova run android`

## To generate APK:
  `ionic cordova build android --release` for development and testing purpose.<br/>
  `ionic cordova build android --release --prod` for production purpose.

## Developers:
  1) Rahul Sharma (<a href="https://github.com/rahulsharma991">Github Account</a>)
  2) Mexson Fernandes (<a href="https://github.com/MexsonFernandes">Github Account</a>)

