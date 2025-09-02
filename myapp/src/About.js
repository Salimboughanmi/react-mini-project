import { useState } from "react";

const About =()=>{
    let [firstname , setFirstname] = useState("sami");
     let [lastname,setlastname] = useState("khan");
     let [age ,setage] = useState(25);


    const changeName=()=>{
        setFirstname("ahmed");
        setlastname ("boully");
        setage(30);
    };
    return (
        <div>
            <h1 className="container">This is About Page</h1> <br></br>
            <h2 className="container">{firstname} </h2> <br></br>
            <p className="container"> {lastname} </p>
            <p className="container"> {age} </p>
            <button type="button" onClick={changeName } className="btn btn-secondary">change name</button>

        </div>  
    );
}
export default About;