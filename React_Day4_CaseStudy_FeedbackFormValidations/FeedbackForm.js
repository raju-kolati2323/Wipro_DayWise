import React, { useState } from 'react'

const FeedbackForm = () => {
    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', rating: '' })
    const [errors, setErrors] = useState([])

    const validation = () => {
        let newErrors = {};

        //required validation
        if (!form.name.trim()) {
            newErrors.name = "Name is required";
        }
        if (!form.email.trim()) {
            newErrors.email = "Email is required";
        }
        if (!form.message.trim()) {
            newErrors.message = "Message is required";
        }
        if (!form.rating.trim()) {
            newErrors.rating = "Rating is required";
        }

        //format validation
        if (form.name && !/^[A-Za-z\s]+$/.test(form.name)) {
            newErrors.name = "Name should only contain letters and spaces";
        }
        if(form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)){
            newErrors.email = "Invalid email format";
        }
        if(form.phone && !/^\d{10}$/.test(form.phone)){
            newErrors.phone = "Phone number must be exacly 10 digits"
        }
        if(form.message && (form.message.length<20 || form.message.length>250)){
            newErrors.message = "Feedback message must be 20-250 characters in length"
        }
        if(form.rating && (form.rating.length!==1 || !/^[1-5]$/.test(form.rating))){
            newErrors.rating = "Rating must be a single digit between 1 and 5"
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length===0;
    }

        const handleSubmit = (e) =>{
            e.preventDefault();
            if(validation()){
                alert("Form submitted successfully!")
            }
        }

        const handleChange = (e)=>{
            setForm({...form, [e.target.name]: e.target.value})
        } 

    return (
        <div>
            <h2>Feedback Form for LMS</h2>
            <form onSubmit={handleSubmit}>
                <div>
                <label>Name: </label>
                <input type='text' name='name' value={form.name} onChange={handleChange} />
                {errors.name && <p style={{color:'red'}}>{errors.name}</p>}
            </div>
            <div>
                <label>Email: </label>
                <input type='email' name='email' value={form.email} onChange={handleChange} />
                {errors.email && <p style={{color:'red'}}>{errors.email}</p>}
            </div>
            <div>
                <label>Phone: </label>
                <input type='number' name='phone' value={form.phone} onChange={handleChange} />
                {errors.phone && <p style={{color:'red'}}>{errors.phone}</p>}
            </div>
            <div>
                <label>Feedback: </label>
                <textarea name='message' value={form.message} onChange={handleChange} />
                {errors.message && <p style={{color:'red'}}>{errors.message}</p>}
            </div>
            <div>
                <label>Rating: </label>
                <input type='number' name='rating' value={form.rating} onChange={handleChange} />
                {errors.rating && <p style={{color:'red'}}>{errors.rating}</p>}
            </div>
            <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default FeedbackForm