# INFINITY

React project bootstrapped with [Create React App](https://github.com/facebook/create-react-app), which uses YouTubeAPI where you can filter and play videos from YouTube.

The application is based on 3 diferent views: Search / Search results / Video Display with the help of the library `react-router-dom` in order to simulate a multiple page application.

You can look the deploy version of the project fron [this link](https://frosty-stallman-f584d7.netlify.com/) which was uploaded to Netlify.

***

## Pages

Every page has a Navigation bar with 3 elements: the infinity logo, a search input to filter videos on the Search Results and Video Display pages and the computers current time, also every page has a responsive design in order to make it accessible from desktops, laptops and mobile devices.
Also the data needed for every page lies on the link so it doesn't matter if you reload the page it won't loose any data.
### Search

Main page where you can search for videos, the input has an autocomplete property which give the user video titles suggestions everytime the user presses the space key.
### Search Results

When the user hits enter or clicks the search botton on the main page, hi is redired to this page, where he can look 20 videos that match the query inputed by the user, displaying the image preview, title and description of the video with a maximun of 125 characters.

### Video Display

Last but not least page dispayed when the user clicks on a video from the search results page, This page displays the YouTube video selected with the title, views, publication date, likes-dislikes, description, and the first 20 comments of the video.

***

## Available Scripts

As it was mentioned the application is  [available on Netlify](https://frosty-stallman-f584d7.netlify.com/) but you can also clone it on you computer; as it build with `react-react-app` you can run the following commads on the project's directory:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

***

## Final thoughts

At the end of this project I'm pretty happy with the final result, the design and every component used apart from the libraries was fully developed by me.

In terms on the requirements stablished by CreativeDrive all the basic requirements were fully satisfied, and also some optionals like: Using SASS for the html styling and persist the data when the user reloads the page.

Because of time reasons I was not able to implement Mobx library in order to save the videos for the favorite videos list and persist then if the user reloads the page, of course if there was more time to finished the project, I would gladly done this requirement.

### Libraries used

Library| Axios | Reactstrap 	| node-sass | React | React-autocomplete | React-dom | React-scripts
---------	|---------|---------|---------|---------|---------|---------|---------|
 Version    | 	0.18.0	| 	 8.0.1	| 		4.12	| 16.9.0 | 1.8.1 | 16.9.0 |3.1.1



