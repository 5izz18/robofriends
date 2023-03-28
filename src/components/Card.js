import React from "react";


const Card=(props)=>{
    // or const Card=({name,id,email})=> reduses code size and looks cleaner
    const {name,id,email}=props;
    // adding the above file we can use id/email/name directly insted of using prop.id/prop.name/prop.email
    return(
        <div className="bg-light-green dib border pa3 ma2 grow bw2 shadow-5">
        {/* the above class name sare predifined in tachyon pakages */}
            <img alt="Robo Pic" src={"https://robohash.org/ "+id+"?500x50"}/>
            {/* +props.id+ can be written as ${props.id}  but here its not working*/}
            <div>
                <h2>{name}</h2>
                <p>
                    {email}
                </p>
            </div>
        </div>
    );
    }

export default Card;