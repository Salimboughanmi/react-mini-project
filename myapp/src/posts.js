import { useEffect, useState } from "react";
import PostsList from "./PostsList";
import PostsModel from "./PostsModel";

const Posts=()=>{
    const name ="salim"
  //  const url="https://jsonplaceholder.typicode.com/posts";
  const {posts , DeleteAction}=PostsModel("https://jsonplaceholder.typicode.com/posts");

  

//      const [posts,setPosts]=useState([{
//      uerId: 1,
//      id: 1,
//      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//    },
//    {
//      userId: 1,
//      id: 2,
//      title: "qui est esse",
//      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//    },
//    {
//      userId: 1,
//      id: 3,
//      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//    },
//  {
//   userId: 1,
//      id: 4,
//      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//    },{
//   userId: 1,
//      id: 5,
//      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//    },{
//   userId: 1,
//      id: 6,
//      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//    },{
//   userId: 1,
//      id: 7,
//      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//    },

//  ]);


   
   



    
    return (
      <div>
       
        
      <PostsList posts={posts} hello="helooo in our posts " name={name} DeleteAction={DeleteAction}  />   
      

      </div>
    
 
    );
}

export default Posts;