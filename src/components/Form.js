import React, {useState} from 'react'

export default function Form(){

    const [form, setForm] = useState({
        email: "",
        name: "",
        passworld: ""
    })

    const [count, setCount] = useState(1)

    const updateForm = (e) => {
        setForm ({
            ...form,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div>

            <h1> {count} of 3 </h1>
            <form onSubmit = { () => alert(`submitted email: ${form.email} name: ${form.name} passworld: ${form.password}`)}>

                {count === 1  ?  (  //when the page count is 1 show this 
                <div className = "form">
                <label> Email </label>
                <input 
                type ="email" 
                className = "form-input"
                name ="email" 
                onChange ={updateForm} 
                value = {form.email}
                />
                </div>
                ):null} {/* if the page count is not equal to 1 then null */}


                {count === 2  ?  (
                <div className = "form">
                <label> Name </label>
                <input 
                type ="text" 
                className = "form-input"
                name ="name" 
                onChange ={updateForm} 
                value = {form.name}
                />
                </div>
                ):null} 

                {count === 3  ?  (
                <div className = "form">
                <label> Password </label>
                <input 
                type ="password" 
                className = "form-input"
                name ="password" 
                onChange ={updateForm} 
                value = {form.password}
                />
                <button type = "submit"> submit</button>
                </div>
                ):null} 


            </form>
            <button 
            type = "submit" 
            onClick = {() => setCount(count -1)} //decrease the page count
            disabled = {count < 2} //don't do anytying when the page is the first page
            > prev </button>
            <button 
            type = "submit" 
            onClick = {() => setCount(count +1)}
            disabled = {count > 2}
            > next </button>
        </div>
    )
}
