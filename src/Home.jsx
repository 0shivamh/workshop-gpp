import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Home=()=>{

    const navigate=useNavigate()
    const [name,setName]=useState("xyz")

  const handleForm=(e)=>{
    e.preventDefault()
    localStorage.setItem('name',name)
    navigate("/page")
  }
        return(
            <>
            <form className="text-center mt-10" onSubmit={handleForm}>
        <p>{name}</p>
          <div className="input-form">
            <label>Name</label>
            <input value={name} onChange={(e)=>(setName(e.target.value))} 
          
            className="border border-black" />
          </div>
          <button className="btn m-1 bg-blue-300 p-2 border ">Go to Next Page</button>
      </form>
            </>
        )
}
export default Home;