import React from "react";

const Films = (props) =>{
    const films= props.films;
    return (
        <>
        <h1>Films</h1>
        <div>{films.name}</div>
        </>
    )
}

export default Films;