import react from 'react';
import './FormMock.css'

export default function FormMock () {

    return (
      <div>
      {/* <!-- multistep form --> */}
      <form id="msform">
        {/* <!-- progressbar --> */}
        <ul id="progressbar">
          <li class="active">Account Setup</li>
          <li>Sign Details</li>
          <li>Details Details</li>
        </ul>
        {/* <!-- fieldsets --> */}
        <fieldset>
          <h2 class="fs-title">Create your form</h2>
          <h3 class="fs-subtitle">This is step 1</h3>
          <input type="text" name="name" placeholder="name" />
          <input type="text" name="phone" placeholder="phone" />
          <input type="text" name="email" placeholder="email" />
          <input type="button" name="next" class="next action-button" value="Next" />
        </fieldset>
        <fieldset>
          <h2 class="fs-title">Social Profiles</h2>
          <h3 class="fs-subtitle">Your presence on the social network</h3>
          <input type="text" name="twitter" placeholder="Twitter" />
          <input type="text" name="facebook" placeholder="Facebook" />
          <input type="text" name="gplus" placeholder="Google Plus" />
          <input type="button" name="previous" class="previous action-button" value="Previous" />
          <input type="button" name="next" class="next action-button" value="Next" />
        </fieldset>
        <fieldset>
          <h2 class="fs-title">Personal Details</h2>
          <h3 class="fs-subtitle">We will never sell it</h3>
          <input type="text" name="fname" placeholder="First Name" />
          <input type="text" name="lname" placeholder="Last Name" />
          <input type="text" name="phone" placeholder="Phone" />
          <textarea name="address" placeholder="Address"></textarea>
          <input type="button" name="previous" class="previous action-button" value="Previous" />
          <input type="submit" name="submit" class="submit action-button" value="Submit" />
        </fieldset>
      </form>
    </div>
    )
}