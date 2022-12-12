# MAÇTAN
https://team23-frontend.herokuapp.com/

## Description

MAÇTAN is an e-commerce platform that aims to serve both football clubs and fans. Turkey football teams can upload match worn items; so that fans can purchase matched worn products with auctions.

## User Documentation

By clicking https://team23-frontend.herokuapp.com/ and signing-up, you can start using MAÇTAN.

For your information, there is a bug in the sign in page. Although you provide correct credentials, there is a possibility that the page will give you an error that indicates provided information is incorrect. For now, refreshing the page is a temporary solution. The bug will be fixed soon. 

For any further bugs, you can contact with emails provided in the footer.

## Developer Documentation

### How To Install

1. To obtain the source code for this project, you can clone the repositories of both backend and frontend using the following commands:
   ```sh
   git clone https://github.com/SU-CS308-22FA/Team23-Frontend.git
   ``` 
   ```sh
   git clone https://github.com/SU-CS308-22FA/Team23-Backend.git
   ``` 
   Alternatively, you can download a zip file of the code by clicking the "Clone or download" button on the repository page and selecting "Download ZIP".

2. To set up the project, you will need to install the dependencies listed in the package.json file. You can do this by running the following command from the root directory of the both frontend and backend files:
   ```sh
   npm install
   ```
3. Once the dependencies have been installed, you can start the development server by running the following command on both frontend and backend files:
   ```js
   npm start
   ```
   This will start a local development server on your machine, which you can access the backend at the URL http://localhost:3000/ and frontend at the URL http://localhost:3001/. 
   
   Any changes you make to the frontend code will be reflected in the browser automatically but for the changes on the backend code you need re-run the backend project in order to see the changes.

### Directory Structure

Frontend 

    .
    ├── bin
    ├── config                    # Documentation files (alternatively `doc`),
    ├── controller
    ├── middleware                # Documentation files (alternatively `doc`)
    ├── model
    ├── public                    # Documentation files (alternatively `doc`)    
    ├── routes
    ├── seed                      # Documentation files (alternatively `doc`)    
    ├── utils
    ├── views                     # Documentation files (alternatively `doc`)
    ├── app.js
    ├── package.json              # Documentation files (alternatively `doc`)
    └── README.md  
    
   
 Backend

    .
    ├── public
    ├── src                    # Documentation files (alternatively `doc`)
    │   ├── components         # Table of contents
    │   ├── constant           # Frequently asked questions
    │   ├── service            # Miscellaneous information
    │   ├── style              # Getting started guide
    │   ├── utils              # Table of contents
    │   ├── views              # Frequently asked questions
    │   ├── app.js             # Miscellaneous information
    │   ├── index.js           # Getting started guide                 # Miscellaneous information
    ├── package.json           # Getting started guide
    └── README.md  


### How to Deploy

<p align="right">(<a href="#readme-top">back to top</a>)</p>


