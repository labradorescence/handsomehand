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

            <h5> steps: {count} of 3 </h5>

            <form 
           
            onSubmit = { (e) => alert(`
            submitted 
            1${form.phone}
            2${form.email}
            3${form.shippingAddress}
            4${form.projectAddress}
    
            5${form.customDesign}
            6${form.description}
            7${form.image}
            8${form.dimensionDetails}
            9${form.manufactureDetails}
    
            10${form.designText}
            11${form.deadline}
            12${form.budget}
            13${form.comment}
            `)
            
            }>

                {count === 1  ?  (  //when the page count is 1 show this 
                <div className = "field1">
                <label> customer info </label>

                
                <input 
                    type ="text" 
                    className = "form-input"
                    name ="name" 
                    placeholder="name"
                    onChange ={updateForm} 
                    value = {form.name}
                />

                <input 
                    type ="tel" 
                    className = "form-input"
                    name ="phone" 
                    placeholder="000-000-0000"
                    onChange ={updateForm} 
                    value = {form.phone}
                />

                <input 
                    type ="email" 
                    className = "form-input"
                    name ="email" 
                    placeholder="email"
                    onChange ={updateForm} 
                    value = {form.email}
                />

                <input 
                    type ="text" 
                    className = "form-input"
                    name ="shippingAddress" 
                    placeholder="shippingAddress"
                    onChange ={updateForm} 
                    value = {form.shippingAddress}
                />

                <input 
                    type ="text" 
                    className = "form-input"
                    name ="projectAddress" 
                    placeholder="projectAddress"
                    onChange ={updateForm} 
                    value = {form.projectAddress}
                />
                </div>
                ):null} {/* if the page count is not equal to 1 then null */}

                {count === 2  ?  (
                <div className = "field2">
                <label> project description </label>

                <input 
                    type ="text" 
                    className = "form-input"
                    name ="customDesign"
                    placeholder="customDesign" 
                    onChange ={updateForm} 
                    value = {form.customDesign}
                />

                <input 
                    type ="text" 
                    className = "form-input"
                    name ="description" 
                    placeholder="description"
                    onChange ={updateForm} 
                    value = {form.description}
                />

                <input 
                    type ="file" 
                    className = "form-input"
                    name ="image" 
                    placeholder="image"
                    
                    onChange ={updateForm} 
                    value = {form.image}
                />

                <input 
                    type ="text" 
                    className = "form-input"
                    name ="demensionDetail" 
                    placeholder="demensionDetail"
                    onChange ={updateForm} 
                    value = {form.demensionDetail}
                />

                <input 
                    type ="text" 
                    className = "form-input"
                    name ="manufactureDetail" 
                    placeholder="manufactureDetail"
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
                    placeholder="designText"
                    onChange ={updateForm} 
                    value = {form.designText}
                />

                <input 
                    type ="date" 
                    className = "form-input"
                    name ="deadline" 
                    placeholder="deadline"
                    onChange ={updateForm} 
                    value = {form.deadline}
                />

                <input 
                    type ="text" 
                    className = "form-input"
                    name ="budget" 
                    placeholder="budget"
                    onChange ={updateForm} 
                    value = {form.budget}
                />

                <input 
                    type ="text" 
                    className = "form-input"
                    name ="comment" 
                    placeholder="comment"
                    onChange ={updateForm} 
                    value = {form.comment}
                />
                </div>
                ):null} 
                

                {/* SUBMIT button */}
                {count === 3  ?  (
                <button type = "submit"> submit</button>
                ):null} 

            </form>
            {/* end of form */}


            {/* PREV button */}
            <button 
                type = "submit" 
                onClick = {() => setCount(count -1)} //decrease the page count
                disabled = {count < 2} //don't do anytying when the page is the first page
            > prev </button>

            {/* NEXT button */}
            <button 
                type = "submit" 
                onClick = {() => setCount(count +1)}
                disabled = {count > 2}
            > next </button>

        </div>
        // end of form-box
    )
}
