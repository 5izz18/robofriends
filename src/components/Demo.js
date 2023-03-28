import React from "react";
import './Scroll.css'

const Demo = (fun) =>{
    return(
        <div className="sticky">
        {fun.children}
        </div>
    );
}

export default Demo;