import React from "react";


const SearchBox=({searchChange})=>{
    return (
        <div className="pa2">

            <input className="pa3 ba b--green bg-lightest-blue tc"
                type='search' placeholder="Search Robots"
                onChange={searchChange} />
            {/* the above class name sare predifined in tachyon pakages */}
        </div>
    );
}
export default SearchBox;