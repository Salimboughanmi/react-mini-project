import { Link } from "react-router-dom";
import Posts from "./Posts";

const PostsList = ({posts , name , hello , DeleteAction})=> {
return(

     <div className="container">
 <div> <h2> {hello} {name} </h2></div>
 <table className="table">
  <thead>
    <tr> 
      <th scope="col">ID</th>
      <th scope="col">title</th>
      <th scope="col">body</th>
            <th scope="col">Delete</th>

      
    </tr>
  </thead>
  <tbody>
   
     
    
  {posts && posts.map(post =>(
   <tr  key={post.id}>
    
        <th scope="row">{post.id}</th>
    <td>{post.title}</td>
    <td>{post.body}</td>
    <td>
      <button onClick={()=>DeleteAction(post.id)} type="button" className="btn btn-danger">delete</button>
</td>
 <td>
      <Link to={"/posts/"+post.id }  className="btn btn-info"> more </Link>
</td>
   
   <td> < Link to={"/edit/"+post.id}  className="btn btn-success"> Edit </Link>
</td>
    
        </tr>

))}
      
     

  
    
  </tbody>
</table>  

       </div>
)
}

export default PostsList; 