import React,{Component} from "react";
import Cardlist from "./Cardlist";
import SearchBox from "./SearchBox"
import { robotss } from "./robots";
import './APP.css'

class APP extends Component{
    // declaring a class
    constructor(){
        // creating contructor for class
        super()/*super should be used in order to use this. .Super is used to acces the parent class */
        this.state={
            robots:robotss,
            searchfield:'',
            robo:'',
        }
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
    return (
            <div className="tc ">
            <h1 className="f1">ROBOFRIENDS</h1>
            <SearchBox searchChange={this.onSearchChanged} />
            {/* calling the onsearchchanged function within searchbox */}
        <Cardlist robots={robofilter}/>
        {/* accessing robots from the state, instaed of imported line. this allows us to chnage the values since it has the state as the parent */}
        </div>
        );
    }
}

export default APP;