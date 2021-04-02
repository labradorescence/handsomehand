import React, {useState} from 'react'

export default function Form(){

    const [form, setForm] = useState({
        email: "",
        name: "",
        passworld: ""
    })

    const updateForm = (e) => {
        setForm ({
            ...form,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div>
            <form onSubmit = { () => alert(`submitted email: ${form.email} name: ${form.name} passworld: ${form.password}`)}>
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

                <div className = "form">
                <label> Password </label>
                <input 
                type ="password" 
                className = "form-input"
                name ="password" 
                onChange ={updateForm} 
                value = {form.password}
                />
                </div>
                <button type = "submit"> submit</button>
            </form>
            <button type = "submit"> prev </button>
            <button type = "submit"> next </button>
        </div>
    )
}
