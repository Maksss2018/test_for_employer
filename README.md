## This project was created by me to  show my  knowledge's in react , react-redux
**technical task for this test was given by one of IT company's that  found me  in the net**

So here is  what the task were:
- Position :  Front-end developer(ReactJs + Redux)
- conception : e-market (only catalog of goods + functionality like adding new goods to the list)   

## First level : 

- Technology's stack: nodejs, Webpack, npm
- Libraries : React, material-ui

- [x] Header it should contain the company logo, it should be imported into the component and attached by the webpack loader

- [x] The catalog of all goods, should be taken from the json-file, in
 each product must be present: Product Name, Image, Short Description

- [x] On the product catalog, you can delete the product by clicking on button.

- [x] At the bottom of the catalog or to the right (left) where
 According to the developer it is more convenient to post information:
    * The total number of goods,
    * the sum of the prices of all goods
    * the average price rounded to the hundredth
    * And the  button "delete all" 
! Important: The application must be assembled and minified by a webpack command from npm(npm start, npm run build). 

## Second level :

- Technology's stack: Babel, es6
- Libraries : react-router

- [x] The menu that opens by clicking on the icon in top of header.
  In the menu there should be a link to the product catalog page and to the product addition page.

- [x] New products need to be recorded in localStorage, images are not required (to simplify the task).

- [x] The application when navigating through the pages should not
    reload the browser page. 
    
## Third level : 

- Technology's stack: Redux

- [x] Component to display information about all
  products should be displayed on all pages and dynamically respond to adding,
  deleting of goods items  (must be connected to Redux).
 
- [x] The application must be implemented system user roles (without login).
  That is, the role system must be implemented (admin and user).
 
- [x] The is should be to role of user`s admin  and ordinary user.
  
- [ ] The role and current user enter manually in
  application state before its launch. 
  **I`ve  ignored this one option and make role changed  with login button, with out of verification -
   to make codding faster**

- [x] Product add page must be unavailable
  for the average user.

- [ ] In the case of a transition to this page should be
  Displayed page with a ban.
   **I`ve made an 404 massage**

- [x] The directory must also be changed.
  There should be no delete function for a regular user.  


### npm modules  that have been  used in this project:
 [Create React App](https://github.com/facebook/create-react-app) -
  was used  like template to make developing process going faster.
 - npm modules that I've  added to "cra" template:
 * @material-ui/core - this module I  used first time in my life - usually   I'm using  npm reactstrap
 * @material-ui/icons - the same  with this module 
 * material-ui - and this one
 * react-dom
 * react-redux
 * react-router
 * react-router-dom
 * react-router-redux
 * redux
 * redux-thunk
 * sass-loader
 * shortid - this module I  used to generate id  for  static data in "../../src/data.json"
