import React from "react";


const Home = (props) =>{
    const characters= props.characters
    console.log(characters)
    return(
        <div>
            <h1>Character</h1>
            <div>{characters.map((char) =>{
               return <div>{char.name} </div>
            })}</div>
        </div>

    )
}

export default Home;