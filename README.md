# HandSomeHand
Handsome Hand is a front-end web application where users can see the artist, Heidi Tullman's previous art works, sign works, read about her services and sign up for the custom made hand painted signs. 

# Getting started
1. Clone this repository and change the directory
2. Install all dependencies
  `$ yarn`
3. Run the app 
  `$ yarn start`

# Features

### Home
### About
### Portfolio with pop-up image
### FAQ
### Multiple step form
### Form input sent to EmailJS
### Responsive web design


# Operations
* Users can request a new custom made sign painting using the form
* Users can read about the artist and look at the artist's portfolio.


# Tech Stack
* React.js
* HTML/CSS
* Netlify


# Tools
* [EmailJS](https://www.emailjs.com/)
* [React Forms](https://reactjs.org/docs/forms.html)
* [React Hooks](https://reactjs.org/docs/hooks-intro.html)
    Update the user's input state in the form page using hooks.
* [Google domain](https://domains.google/)
* [React Router](https://reactrouter.com/)
  React Routers allow user to navigate the web application efficiently.
* [CSS Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

# Dataflow

```
                     index
                       |
                      App
                       |
   ____________________|______________________
  |             |               |             |               
  |             |               |             |               
  |             |               |             |               
  |             |               |             |               
 Home         About           Contact     Portfolio
  |             |               |             |
  |             |               |             |
 Nav           Nav             Nav            Nav
  |             |               |             |
  |             |               |             |
 Footer       Footer           Form         Footer
                                |
                                |
                                |
                              Footer   
```
