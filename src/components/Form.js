import React, {useState} from 'react'
import './Form.css'

export default function Form(){

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        shippingAddress: "",
        projectAddress: "",


        customDesign: "",
        description:"",
        image: "",
        dimensionDetails:"",
        manufactureDetails:"",


        designText:"",
        deadline:"",
        budget:"",
        comment: ""
    })

    const [count, setCount] = useState(1)

    const updateForm = (e) => {
        setForm ({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className = "form-box">

            <h5 className = "form-step"> steps: {count} of 3 </h5>

            <form 
           
            onSubmit = { (e) => alert(`
            submitted 
            1${form.name}
            2${form.phone}
            3${form.email}
            4${form.shippingAddress}
            5${form.projectAddress}
    
            6${form.customDesign}
            7${form.description}
            8${form.image}
            9${form.dimensionDetails}
            10${form.manufactureDetails}
    
            11${form.designText}
            12${form.deadline}
            13${form.budget}
            14${form.comment}
            `)
            
            }>

                {count === 1  ?  (  //when the page count is 1 show this 
                <div className = "field1">
                <label> customer info </label>

                
                <input 
                    type ="text" 
                    className = "form-input"
                    name ="name" 
                    placeholder="Name"
                    onChange ={updateForm} 
                    value = {form.name}
                />
                
                
                <input 
                    type ="tel" 
                    className = "form-input"
                    name ="phone" 
                    placeholder="Phone 000-000-0000"
                    onChange ={updateForm} 
                    value = {form.phone}
                />

                <input 
                    type ="email" 
                    className = "form-input"
                    name ="email" 
                    placeholder="E-mail"
                    onChange ={updateForm} 
                    value = {form.email}
                />

                <textarea 
                    type ="text" 
                    className = "form-input"
                    name ="shippingAddress" 
                    placeholder="Shipping Address"
                    onChange ={updateForm} 
                    value = {form.shippingAddress}
                />

                <textarea 
                    type ="text" 
                    className = "form-input"
                    name ="projectAddress" 
                    placeholder="Physical location of the project"
                    onChange ={updateForm} 
                    value = {form.projectAddress}
                />
                </div>
                ):null} {/* if the page count is not equal to 1 then null */}

                {count === 2  ?  (
                <div className = "field2">
                <label> project description </label>

                
                <textarea 
                    type ="text" 
                    className = "form-input"
                    name ="customDesign"
                    placeholder="Are you interested in a custom design, or do you already have a design to work from?" 
                    onChange ={updateForm} 
                    value = {form.customDesign}
                />

                
                <textarea 
                    type ="text" 
                    className = "form-input"
                    name ="description" 
                    placeholder="Briefly describe the project and your brand, if applicable"
                    onChange ={updateForm} 
                    value = {form.description}
                />

                Please upload the reference images, including your logo
                <input 
                    type ="file" 
                    className = "form-input"
                    name ="image" 
                    placeholder="image"
                    
                    onChange ={updateForm} 
                    value = {form.image}
                />

                
                <textarea 
                    type ="text" 
                    className = "form-input"
                    name ="demensionDetail" 
                    placeholder="If the design will be painted directly onto a surface, such as a wall or vehicle, please provide dimensions and a description of the surface. Please include maximum working height from ground, and any other details related to access and conditions of the working area."
                    onChange ={updateForm} 
                    value = {form.demensionDetail}
                />

                
                <textarea 
                    type ="text" 
                    className = "form-input"
                    name ="manufactureDetail" 
                    placeholder="If you are ordering a manufactured sign (wood, metal, canvas etc), please provide dimensions, whether the sign will be single or double-sided, and if you would like hanging hardware to be included."
                    onChange ={updateForm} 
                    value = {form.manufactureDetail}
                />
                </div>
                ):null} 

                {count === 3  ?  (
                <div className = "field3">
                <label> more info </label>

 
                <input 
                    type ="text" 
                    className = "form-input"
                    name ="designText" 
                    placeholder="Text in the design"
                    onChange ={updateForm} 
                    value = {form.designText}
                />

                <input 
                    type ="date" 
                    className = "form-input"
                    name ="deadline" 
                    placeholder="Deadline"
                    onChange ={updateForm} 
                    value = {form.deadline}
                />

                <input 
                    type ="text" 
                    className = "form-input"
                    name ="budget" 
                    placeholder="Budget"
                    onChange ={updateForm} 
                    value = {form.budget}
                />

                <textarea 
                    type ="text" 
                    className = "form-input"
                    name ="comment" 
                    placeholder="Comments"
                    onChange ={updateForm} 
                    value = {form.comment}
                />
                </div>
                ):null} 
                

                {/* SUBMIT button */}
                {count === 3  ?  (
                <button 
                type = "submit"
                id= "submitBtn"
                className = "submitBtn"
                > submit</button>
                ):null} 

            </form>
            {/* end of form */}


            {/* PREV button */}
            <button 
                className = "prevBtn"
                type = "submit" 
                onClick = {() => setCount(count -1)} //decrease the page count
                disabled = {count < 2} //don't do anytying when the page is the first page
            > prev </button>

            {/* NEXT button */}
            <button 
                className = "nextBtn"
                type = "submit" 
                onClick = {() => setCount(count +1)}
                disabled = {count > 2}
            > next </button>

        </div>
        // end of form-box
    )
}
