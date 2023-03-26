import React,{Component} from "react";
import Cardlist from "./Cardlist";
import SearchBox from "./SearchBox"
import Scroll from './Scroll'
// import { robotss } from "./robots";
// required if we use something from robots.js file but now we are getting users from the web
import './APP.css'

class APP extends Component{
    // declaring a class
    constructor(){
        // creating contructor for class
        super()/*super should be used in order to use this. .Super is used to acces the parent class */
        this.state={
            robots:[],
            // getting an empty array of cards, 
            searchfield:'',
        }
    }
    componentDidMount(){
        fetch('https:/jsonplaceholder.typicode.com/users')
        // fetch is a predefined method present in all browsers to make a request to the servers.Here we are using fetch to make request to this url link that provides the demo users
        .then(response=> response.json())
        .then(users=> this.setState({robots:users})
        //    here we are extracting the users from the web not from our robot.js file because in real world users email,name,num,etc will not be stored in a file but in a web/cloud
        );
        // this.setState({robots:robotss})
        // here we are extracting the robots from robots.js file 
        // building react app4 video of udemy
    }

    onSearchChanged=(event)=>{
        // user defined function, it can have any other name as well
    this.setState({ searchfield: event.target.value })
        // const robofilter=this.state.robots.filter(robot =>{
        //     return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        // })/* robot is the parameter name it can be anything */
    }
    render(){
       const robofilter=this.state.robots.filter(robot =>{
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })/* robot is the parameter name it can be anything */
    if(this.state.robots.length===0){
        return(
        <div className="tc">
        <h1 className="f1">ROBOFRIENDS</h1>
         <h1 className="tc">Loading...</h1>
        </div>)
    }
    else{   
    return (
            <div className="tc ">
            <h1 className="f1">ROBOFRIENDS</h1>
            <SearchBox searchChange={this.onSearchChanged} />
           {/* calling the onsearchchanged function within searchbox  */}
           <Scroll>
           {/* scroll is a componenet that we have created to wrap Cardlist component */}
                <Cardlist robts={robofilter}/>
        {/* robts is a vriable/property to which robofilter()is assigned*/}
           </Scroll>
        </div>
        );
    }
}
}

export default APP;