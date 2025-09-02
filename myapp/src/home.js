const Home = () => {
          const   clickme = ()=>{
                console.log("Button Clicked");
            }
            const clickwithparams =(name)=>
                console.log(`Button Clicked by ${name}`);

            const clickwithTwoparams=(name , age) => {
                console.log(`Button Clicked by ${name} and age is ${age}`);
            }

    return (
        <div className="CONTAINER">
            <h1>This is Home Page</h1> <br/>
            <button type="button" onClick={clickme} className="btn btn-primary">Primary</button>
            <button type="button" onClick={ ()=>clickwithparams("sam") } className="btn btn-danger">danger</button>

        </div>
    )
}
export default Home;