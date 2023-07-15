import { useState } from 'react'

export const Form = () => {
    let [input,setinput] = useState({name:'',email:'',password:''})

    let hndlsub = (e)=>{
        e.preventDefault()
        console.log(input);
    }
  return (
    <form onSubmit={hndlsub}>
        <label htmlFor='name'>Name</label> <input type="text" name="names" onChange={(e)=>setinput({...input,name : e.target.value})}/> <br/>
        <label htmlFor='email'>Email</label> <input type="email" name="email" onChange={(e)=>setinput({...input,email : e.target.value})}/> <br/>
        <label htmlFor='password'>Password</label> <input type="text" name="password" onChange={(e)=>setinput({...input,password : e.target.value})}/> <br/>
        <button type="submit">Submit</button>

    </form>
  )
}
