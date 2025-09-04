import { BrowserRouter ,Link ,Route , Routes } from "react-router-dom";
import Home from "./home";
import About from "./About";
import Posts from "./Posts";    
import PostInfo from "./PostInfo";
import CreatePost from "./CreatePost";
import EditPost from "./EditPost";



function Navbar(){
    return(
         <div>
      <BrowserRouter>
     
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" >Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/"  className="nav-link active" aria-current="page" >Home</Link>
        </li>
    <li className="nav-item">
          <Link to="/about" className="nav-link" > About </Link>
        </li>

        <li className="nav-item">
          <Link to="/posts" className="nav-link"> List </Link>
        </li>
        
        <li className="nav-item">
          <Link to="/create" className="nav-link"> Create </Link>
        </li>
         
         
      
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
         <Routes>
         <Route path="/" element={<Home/>} ></Route> 
        <Route path="/about" element={<About/>} ></Route>
        <Route path="/posts" element={<Posts/>} > </Route> 
        <Route path="/posts/:id" element={<PostInfo/>} > </Route> 
         <Route path="/create" element={<CreatePost/>} > </Route> 
         <Route path="/edit/:id" element={<EditPost/>} > </Route> 



         </Routes>
      </BrowserRouter>
       </div>
        
 
    )
}
export default Navbar;