### Handsome Hand Steps

# deploy on netlify 

# connect the google domain to netlify
https://www.youtube.com/watch?v=qlrCptpwtgs

# favicon

# Portfolio, About, Contact components

# inserted an image

# react router / netlify 

    1. `npm install react-router-dom`
    2.  watch dev Ed's tutorial https://www.youtube.com/watch?v=Law7wfdg_ls

    This didn't really work :  https://medium.com/@sschannak/netlify-and-react-router-1537aebe6256

    Had Yarn Build issue and this worked
    
    //package.json
    "scripts": {
    "start": "react-scripts start",
    "build": "CI= react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
    },


# react router: 
    https://www.youtube.com/watch?v=Law7wfdg_ls
    15:35


# react Form
    2021 March 5th
    Didn't end up following: Css Form
    https://codepen.io/atakan/pen/gqbIz

    Didn't end up following: multi step form with react & matirial ui
    https://www.youtube.com/watch?v=zT62eVxShsY


# About styling 
    basic html and css
    https://www.youtube.com/watch?v=-2LtZRi6Q0s


# udemy web dev course 
    https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/


# Form prev-Next react tutorial to make multi part FORM
    https://www.youtube.com/watch?v=pWOiGhFAl8w

# Form.js

# Form.css 
    https://www.youtube.com/watch?v=2ACrHs5o9LM

# Gallery
https://reactjsexample.com/photo-gallery-using-react-js/

# 3 column
https://www.youtube.com/watch?v=j92n0p4D2B4

# nav hover over ??

https://tympanus.net/codrops/2020/07/01/creating-a-menu-image-animation-on-hover/


http://www.corelangs.com/css/box/hover.html

# nav image sizing
https://www.youtube.com/watch?v=VF5kD6QEEag

```css
.container{
    max-width: 960px;
    margin: 0 auto;
}

.image{
    width: 100%;
    <!-- 100% of the current screen -->
    padding-top: 42%;
    /* instead of height, use the padding top, which acts as height in responsive way */
    background: url() no-repeat center;
    background-size: cover;
}

```

# css changing image color
https://codepen.io/sosuke/pen/Pjoqqp

change the font-family

# adding personal SSH key to work computer 
https://dev.to/raven404/managing-multiple-github-account-using-git-in-windows-2m0h

id_rsa_orange

https://vladmihalcea.com/tutorials/git/windows-git-ssh-authentication-to-github/

ps ssh guide
https://powerschoolgroup.atlassian.net/wiki/spaces/DevZone/pages/1226302/Setup+New+Dev+Environment+in+Blank+Dev-box+for+PowerSchool+Core+SIS

# form on submit refresh the page or re-direct to a new page. 

$Form.js
```js
import {useHistory} from "react-router"

export default function Form(){

    const history = useHistory();

    const sendEmail = (e) => {
        history.push("/portfolio")     //onSubmit redirect to a new page
    }

    return(
        <form onsubmit = {sendEmail}>
        </form>
    )
}
```

# done
-add more photos on portfolio
-change the about page's photo, solo coffee: "refresh" and "brew"
-change the about page's photo, goldies
-add second and fouth pics to portfolio
-remove form border
-form change the order


# To Do 
-new nav bar menu: filled titles/caps
-form submit confirm page with smile
-font: Josefin Sans for Titles, and Monteserrat for body text.
-form css
-image file and map 

# img saved in
https://orangetimespace.imgur.com/all/