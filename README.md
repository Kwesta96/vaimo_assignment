## Compile and run the code

In the project directory, you can run:

### `npm install`

Downloads dependencies defined in the package.json file and generates a node_modules folder with the installed modules.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Architecture

React only takes care of the view layer of an application, it doesn't enforce any specific architecture (such as MVC or MVVM).
This can make it difficult to keep the codebase organized as the project grows. 

This project has a component-centric file layout. The idea is that all the code (jsx & css) that belongs to a component is\
located in a single folder. This makes it easy to share a component with another project.


## Tech Stack

Because of the potential scale this project can grow into, using react is the right choice for me. It's easy to learn\
and facilitates creating reusable components that can offer a consistent look and feel to any web app. 

I've also made use of sass for styling, and Material UI for icons (as some icons were not pixel perfect).
Making use of styled-components could have been another option to sass. It has become quite popular\
amongst react developers and has a huge community.

Next.js could have been an alternative to React for this project. I call it the fullstack framework for React.js.
It's SEO friendliness makes it one of the to top JS frameworks (especially for eCommerce sites).


