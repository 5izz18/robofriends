import React from "react";
import Card from "./Card";
import { robotss } from "./robots";

const Cardlist=()=>{
// import { robots } from "./robots"; can also be acsesd as --> Cardlist({robots}) then we need to return robots.map(){} directly without assigming it to variable
const cardsArray = robotss.map((user,i)=>{
    return (
    <Card key={i} 
    id={robotss[i].id} 
    name={robotss[i].name} 
    email={robotss[i].email} />
    );
    // react keeps track of evry elements in dom so we use key to give unique value for each element
    // i is the index user is for the arrayobjects
    // we used the map function to loop through all the users in the robot.js file
})
    return(
        <div>
        {cardsArray}
        {/* accessing variable cardsArray which has function. Every javascript element should be covered in {}flowerbrackets */}

     {/* <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
     <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
     <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
     <Card id={robots[3].id} name={robots[3].name} email={robots[3].email}/> */}
     {/* id={robots[0].id} name={robots[0].name} email={robots[0].email}
like this we accced the 1st array objects of robot object in robot.js robots[o]--> index of robot object */}
</div>
    )
}

export default Cardlist;

/*
The above code can be written as 

import React from "react";
import Card from "./Card";

const Cardlist=({robots})=>{
    return (
        <div>{ /* here we are opening {} to specify the code within this is JS code*/
       /* robots.map((user,i)=>{
            return (
            <Card key={i} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email} />
            );
            }
            )
            }   
        </div>
        );
        }*/