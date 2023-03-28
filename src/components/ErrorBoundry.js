import React,{Component} from "react";

class ErrorBoundry extends Component{
    constructor(props){
        super(props);
        this.state={
            haserror:false,
        }
    }

    componentDidCatch(error,info){
        this.setState({haserror:true})
    }
// componentDidCatch(error,info;) is like try catch block in java, that executes a following set of statements when met with an error or exception. [similar to exception/error handling ]
// error,info are parameter names that can be anything

    render(){
        if(this.state.haserror){
            // this.state.haserror will by default check if its true (this.state.haserror==true)==this.state.haserror
            return <h1>Sorry for the inconvinience we will be back ASAP</h1>
        }
        return this.props.children;
        // children is anything btw the class ErrorBoundry
    }
}

export default ErrorBoundry;