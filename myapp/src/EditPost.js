import { useEffect, useState } from "react";
import { useNavigate, useParams  } from "react-router-dom"; 


const EditPost=()=>{
const { id } =useParams();
const [userId , setUserId]=useState ('');
const [title , setTitle]=useState ('');
const [body , setBody]=useState ('');
const navigator=useNavigate();
//const [watingServer , SetWaitingServer]=useState(false)

  useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/'+id)
        .then((res)=>
          res.json())
        .then((data)=>{

         // console.log(data);
         setUserId(data.userId)
         setTitle(data.title)
         setBody(data.body)
         
        })

     },[]);

const mySubmit =(e)=>{
e.preventDefault();
const mypost ={
    title ,
    body ,
    userId , 
} 
console.log("mypost created")

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(mypost),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  navigator('/Posts');
  }




    return (
        <div className="container">
            <form onSubmit={mySubmit}>
      <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">User id</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" required value={userId} 
  onChange={(e)=>setUserId(e.target.value)}
  />
</div>

                 <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Title</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" required value={title}
   onChange={(e)=>setTitle(e.target.value)} />
</div>

<div class="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">body</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" required value={body} 
   onChange={(e)=>setBody(e.target.value)}
  ></textarea>
</div>
             <div class="col-auto">
    <button type="submit" class="btn btn-success mb-3">create</button>
  </div>

            </form>
          
    
            </div>
        
    )
}

export default EditPost ; 