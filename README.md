# Bookmark Manager

This web app imitates a bookmark manager.

-   Users can add a bookmark to the list.
-   Bookmarks output as clickable hyperlinks.
-   Users can delete an existing bookmark to the list.
-   There is validation in the form to only allow website urls as valid entries, or an error will be thrown.
-   Users can edit their existing bookmarks.
-   Users list will be stored in localStorage so data is immutable

<p align="center">
  <img src="https://user-images.githubusercontent.com/14803518/41782600-9bde1132-7632-11e8-9212-91e0065bfb57.png">
</p>

### Installation

_Update!_ - App is deployed at https://react-bookmark-manager.herokuapp.com/

```
git clone git@github.com:puyanwei/react-bookmark-manager.git
cd react-bookmark-manager
npm install
npm start
```

### Tech Stack

-   React.js using its [create-react-app starter kit](https://github.com/facebook/create-react-app)
-   Javascript, HTML, JSX
-   SASS styling
-   ESlint

### Planning

After some diagramming I outlined my plan;

<p align="center">
  <img src="https://user-images.githubusercontent.com/14803518/41667528-1c8e1a6e-74a5-11e8-9f60-4dbf0a03998d.jpg">
</p>

1.  Environment setup - Setting up react using [create-react-app ](https://github.com/facebook/create-react-app), setting up SASS, git, and ESlint.

2.  Start by making the parent component, the page which would hold all the child components.

3.  Create the form for the user to input the data in. Data will be sent to the parent to update the state, and then render it to the page.

4.  Create the single webpage choices component. This will contain the functionality of being able to delete and edit itself.

5.  Link up all components to the parent component and make sure all the functionality is working. Add styling.

6.  Make the data persist.

7.  Upload to Heroku.

### Quality Control

I tried to adhere to good coding practices in this project.

-   Descriptive Naming for functions and variables.
-   Separated concerns by structuring code into components.
-   Adhering to industry standard file and folder structuring.
-   Balancing out refactoring to minimise repetative code, but at no cost to its readability.
-   Using ES6 Javascript syntax throughout.
-   Following ESlint suggestions and making them pass.
-   Small Git commits and good commit descriptions.

### Challenges

As I am more used to using Vue.js, I found some aspects of creating this app in React.js challenging.

The JSX syntax is quite confusing to get used to, mixing HTML and Javascript seems to create a lot of syntax errors involving brackets, curly brackets and tag brackets!

I found the setup with ESlint rather tough, it seemed that after some research I was unable to find a way to have it output its errors to the page, without Ejecting the webpack template.

Most of the blockers I had encountered were to do with deprecated code. It can be frustrating to google answers, find a solution, apply it and have it working, only to find out later that it is deprecated and not good practice to use that method anymore.

This also makes it difficult to know what is good practice and syntactically correct, as some of the resources online are outdated.

### Feedback!

Thanks so much for the code review interview! Here are some bugs and improvements highlighted;

-   Outputting the error message using getElementById, remember we're using React we can dynamically create messages!
-   Regex rejects dashes! Also comment in where you got this from...
-   Could have imported regex checking and error message output functions as a helper folder so that it would be more scaleable
-   Better to use id numbers for each bookmark as comparing the text using the current filter method will delete multiple bookmarks if they have the same name
