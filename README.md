# react-login-portal

Complete the given React application that models a simple login portal that allows a user to login only if the user is registered. The necessary functionality should be achieved using the concept of React-Router, React-Redux, and Javascript's localStorage API.

Certain core React functionalities have already been implemented. Complete the React application in order to pass all the unit tests.

Demo

[Link to an animated GIF](https://s3.amazonaws.com/istreet-assets/HGRD6r4tV7Hhtjax0DySFg/ezgif-3-64ea3e6bb8.gif)
Scroll sideways below to explore the screenshots. Clicking each screenshot opens it in a new window.

![alt text](https://s3.amazonaws.com/istreet-assets/ETuNReeYR3nhNr114V8oGA/Login1.png)
![alt text](https://s3.amazonaws.com/istreet-assets/fp_TXc7b110j6uxQeYXhAw/login2.png)
![alt text](https://s3.amazonaws.com/istreet-assets/aidC_nVg67wNC4mRennQMw/login3.png)
![alt text](https://s3.amazonaws.com/istreet-assets/NuGbpiolkSt-D2qs4NieCQ/login4.png)
![alt text](https://s3.amazonaws.com/istreet-assets/wv1ELSO7q5-ZBdv5jOHl8Q/login5.png)

Specifications

A fake/dummy API backend has been provided to interact with the model. Use these API specifications in the controllers and services to add/create and authenticate a user.
POST  -  /users/{userJSON} where userJSON comprises of the username and password.
Adds a user to the model. Returns the status code 200 on success.
POST  -  /authenticate/{userJSON} where userJSON comprises of the username and password.
Checks whether the user exists in the model. Returns the username of the user on success.
Component flow diagram of the application is as follows:

![alt text](https://s3.amazonaws.com/istreet-assets/TyLNpQ0u9-AYDbNKaWAH1Q/login.png)
