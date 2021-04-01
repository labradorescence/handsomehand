import react from 'react';
import './FormMock.css';
import $ from 'jquery';

export default function FormMock () {

      let prev = document.querySelector('previous action-button')
      let next = document.querySelector('next action-button')

      function clickNext(){
        console.log("next button clicked!")
      }

      function clickPrev(){
        console.log("<<!!!")
      }

      function clickSubmit(){
        console.log("Submit!")
      }
        
    return (
      <div>
      {/* <!-- multistep form --> */}
      <form id="msform">
        {/* <!-- progressbar --> */}
        <ul id="progressbar">
          <li className="active">Account Setup</li>
          <li>Sign Details</li>
          <li>Details Details</li>
        </ul>
        {/* <!-- fieldsets --> */}
        <fieldset>
          <h2 className="fs-title">Create your form</h2>
          <h3 className="fs-subtitle">This is step 1</h3>
          <input type="text" name="name" placeholder="name" />
          <input type="text" name="phone" placeholder="phone" />
          <input type="text" name="email" placeholder="email" />
          
          <input type="button" name="next" className="next action-button" value="Next" onClick = {clickNext} /> 
        </fieldset>
        {/* 2nd fieldset */}
        <fieldset>
          <h2 className="fs-title">Social Profiles</h2>
          <h3 className="fs-subtitle">Your presence on the social network</h3>
          <input type="text" name="twitter" placeholder="Twitter" />
          <input type="text" name="facebook" placeholder="Facebook" />
          <input type="text" name="gplus" placeholder="Google Plus" />
          <input type="button" name="previous" className="previous action-button" value="Previous" onClick = {clickPrev} />
          <input type="button" name="next" className="next action-button" value="Next" onClick = {clickNext} />
        </fieldset>
        {/* 3rd fieldset */}
        <fieldset>
          <h2 className="fs-title">Personal Details</h2>
          <h3 className="fs-subtitle">We will never sell it</h3>
          <input type="text" name="fname" placeholder="First Name" />
          <input type="text" name="lname" placeholder="Last Name" />
          <input type="text" name="phone" placeholder="Phone" />
          <textarea name="address" placeholder="Address"></textarea>
          <input type="button" name="previous" className="previous action-button" value="Previous" onClick = {clickPrev}/>
          <input type="submit" name="submit" className="submit action-button" value="Submit" onClick = {clickSubmit} />
        </fieldset>
      </form>
    </div>
    )
}