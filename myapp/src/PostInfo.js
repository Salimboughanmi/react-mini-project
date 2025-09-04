import { useParams } from "react-router-dom";
import PostsModel from "./PostsModel";

const PostInfo=()=>{
    const {id} =useParams()
      const {posts , DeleteAction}=PostsModel("https://jsonplaceholder.typicode.com/posts/"+id);
console.log(posts)
    return(
        <div>
            <h2> Post info {id} </h2>
            <br/>
          {
            posts && 
             ( <div className="card-container">
  <div className="card-body">
    <h5 className="card-title">{posts.title}</h5> <br/>
    <h6 className="card-subtitle mb-2 text-body-secondary"> {posts.id}</h6>
    <p className="card-text"> {posts.body} </p>
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div> 
</div>)
          }
        </div>
    )
}

export default PostInfo ; 