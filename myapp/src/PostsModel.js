
import  { useEffect, useState } from "react";
import Posts from "./Posts";    
const PostsModel = (url) => {


      const DeleteAction=(id)=>{
       const updatedPosts=posts.filter((post)=>post.id !== id);
       setPosts(updatedPosts);
      }

    const [posts,setPosts]=useState(null);
      useEffect(()=>{
        fetch(url)
        .then((res)=>
          res.json())
        .then((data)=>{
          console.log(data);
          setPosts(data);
        })

     },[url]);

return {posts , DeleteAction}
  };

  export default PostsModel;