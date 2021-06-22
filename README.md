# Star Wars Films

### About Star Wars Films

A star wars film search web application idea built in [ReactJS](https://reactjs.org/) based on [Swapi API](https://swapi.dev/) and bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Design

The designs the project is based on can be found [here](https://www.figma.com/file/MDZZeWq0PKPNtZVjTdMpV3/Films). The Figma design file has both mobile and desktop layout ideas of how the application should look like in the Design page. (Only the desktop layout has a prototype showing how a simple search can be performed)

### Figma design file pages are as follows:

-**Design** - Contains Desktop and mobile layout -**Logo** - Project logo -**Icons** - Costume designed assets

### Other design resources

The colors in the design are mostly sourced from my [Colors's](https://ick-seshoka.github.io/colors/#/) color pallet

# How to install and run the project

The project can be viewed live [here](https://ick-seshoka.github.io/star-wars-films) (hosted on github pages)

or alternatively the source code can de downloaded from [this github repository](https://github.com/ick-seshoka/star-wars-films)

### install notes if downloaded manually

ℹ To run the project locally you must have [Node.js](https://nodejs.dev/) installed on your machine with npm (I used yarn in this project which can be installed with npm )

Navigate to the project directory `cd star-wars-films`, add a `.env` file with `REACT_APP_API_BASE_URL = https://swapi.dev/api` at the root of the project directory (same level as the src folder) and run the following commands:

```
yarn install && yarn start
```

launch your browser and navigate to `localhost:3000`

### Project folder structure

The project is structured as follows:

- **public**
  - public folder with `index.html` file
- **src**

  - **api**
    - axios config objects
  - **assets**
    - images and icons
  - **components**
    - stateless components
  - **containers**
    - stateful components
  - **contexts**
    - contexts and their providers (used to manage search history in global state)
  - **enums**
    - helper enums
  - **helpers**
    - helper functions
  - **hooks**
    - costume hooks
  - **modules**
    - actions, api calls, reducers, selectors (grouped by component file name)
  - **styles**
    - theme and other style related files

  ### Packages used in the project

  - [axios](https://www.npmjs.com/package/axios)
  - [normalize.css](https://www.npmjs.com/package/normalize.css)
  - [craco](https://www.npmjs.com/package/@craco/craco)
  - [react-loading-skeleton](https://www.npmjs.com/package/react-loading-skeleton)
  - [react-responsive](https://www.npmjs.com/package/react-responsive)
  - [react-svg](https://www.npmjs.com/package/react-svg)
  - [source-map-explorer](https://www.npmjs.com/package/source-map-explorer)
  - [moment](https://www.npmjs.com/package/moment)
  - [normalize](https://www.npmjs.com/package/normalize)
  - [prop-types](https://www.npmjs.com/package/prop-types)
  - [react-router-dom](https://www.npmjs.com/package/react-router-dom)
  - [reselect](https://www.npmjs.com/package/reselect)
  - [styled-components](https://www.npmjs.com/package/styled-components)
