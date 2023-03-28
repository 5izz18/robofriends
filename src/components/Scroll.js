import React from "react";

const Scroll = (prop) => {
    return(
        <div style={{overflow:'scroll',height:'800px'}}>
        {/* // <div> */}
        {/* we can add css like this also or {JS expression{css}} 1st flowerbracket means JS expression and 2nd bracket means css code */}
        {prop.children}
        {/* prop is the paramenter name and children is keyword to acces the child componenet wrapped inside{} means its a JS expression */}
        </div>
    );
};
export default Scroll;