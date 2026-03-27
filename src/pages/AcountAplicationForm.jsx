import { useState } from 'react';
import "../css/main.css";
import z, { object } from 'zod';
//set requierments schema for validation
const SCHEMA = z.object({
    personalIdType: z.string().min(1, "Personal ID Type is required"),
    personalIdNumber: z.string().min(1, "Personal ID Number is required"),
    firstName: z.string().min(1, "First Name is required"),
    lastName: z.string().min(1, "Last Name is required"),
    email: z.email("Invalid email address"),
     DateOfBirth: z.string().refine((val) => {
    const date = new Date(val);
    const now = new Date();
    const age = (now - date) / (1000 * 60 * 60 * 24 * 365.25); //one year in milliseconds
    return !isNaN(date.getTime()) && age >= 18;
  }, 'Must be at least 18 years old'),
    phoneNumber: z.string().refine(
  val => /^\+?[\d\s\-()\\.]{7,15}$/.test(val),
  'Invalid phone number'
),
    city: z.string().min(1, "City is required"),
    country: z.string().min(1, "Country is required"),
    street: z.string().min(1, "Street is required"),
    postalCode: z.string().refine(
  val => /^[A-Z0-9\s\-]{3,10}$/i.test(val),
  'Invalid postal code'
),


   

})
const FIELDS =[
    {name:"personalIdType", label:"Personal ID Type", type:"text"},
    {name:"personalIdNumber", label:"Personal ID Number", type:"text"},
    {name:"firstName", label:"First Name", type:"text"},
    {name:"lastName", label:"Last Name", type:"text"},
    {name:"email", label:"Email", type:"email"},
    {name:"dateOfBirth", label:"Date of Birth", type:"date"},
    {name:"phoneNumber", label:"Phone Number", type:"tel"},
    {name:"city", label:"City", type:"text"},
    {name:"country", label:"Country", type:"text"},
    {name:"street", label:"Street", type:"text"},
    {name:"postalCode", label:"Postal Code", type:"text"}
]

const InitialFormState = Object.fromEntries(FIELDS.map(field => [field.name, ""]));



export const ApplicationForm = () => {
    const [formData,setFormData]=useState(InitialFormState);
    const [errors,setErrors]=useState({});
    const [touched,setTouched]=useState({});
    const [submitted,setSubmitted]=useState(false);

    const validateField = (name, value) => {
        const fieldSchema = SCHEMA.shape[name];
        const result = fieldSchema.safeParse(value);
        if (!result.success) {
            return result.error.errors[0].message;
        }
            return null;
    }
    const validateAllFields = () => {
        const result = SCHEMA.safeParse(formData);
        if(result.success){
            return {}
        }
        return Object.fromEntries(result.error.issues.map(issue=>{
            return [issue.path[0],issue.message];
        }))
    }
    const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };
    const handleChange = e =>{
        const [name,value]=e.target;
        setFormData(prev=>({...prev,[name]:value}))
        if(touched[name]){
            const error = validateField(name,value);
            setErrors(prev=>({...prev,[name]:error}))
        }
    }   
    const handleSubmit = e=>{
        e.preventDefault();
        const allErrors=validateAllFields();
        setErrors(allErrors);
        setTouched(Object.fromEntries(FIELDS.map(F=>({[F.name]:true}))))
        if(Object.keys(errors).length===0)
        {   
            setSubmitted(true);
            console.log("success");
            //Sent to backend
           
        }
    } 

    return (
        <div className="form-container">
            <h2>Account Application Form</h2>
        
            <form onSubmit={handleSubmit} noValidate>
                {FIELDS.map(field=>(
                    <div key={field.name} className="form-group">
                        <label htmlFor={field.name}>{field.label}</label>
                        <input
                            type={field.type}
                            id={field.name}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors[field.name] ? "error" : ""}
                        /> 
                        {errors[field.name] && <span className="error-message">{errors[field.name]}</span>}
                    </div>
                ))}
                <button type="submit">Submit</button>
            </form>
                {submitted && <div className="success-message">Form submitted successfully!</div>}
        </div>

)
}
