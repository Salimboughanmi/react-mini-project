
import Posts from "./Posts";

const PostsList = ({posts , name , hello})=> {
return(

     <div className="container">
 <div> <h2> {hello} {name} </h2></div>
 <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">title</th>
      <th scope="col">body</th>
      
    </tr>
  </thead>
  <tbody>
   
     
    
  {posts.map(post =>(
   <tr  key={post.id}>
    
        <th scope="row">{post.id}</th>
    <td>{post.title}</td>
    <td>{post.body}</td>
   
    
        </tr>

))}
      
     

  
    
  </tbody>
</table>  

       </div>
)
}

export default PostsList; 