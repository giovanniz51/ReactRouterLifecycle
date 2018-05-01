import React from "react";

class Life extends React.Component {
    //1 get default props

    //2 set default state
    state = {
        title: "Life Cycles"
    }

    //3 before render
    componentWillMount(){
        console.log("3 before render");
    }

    componentWillUpdate(){
        console.log("BEFORE UPDATE");
    }

    componentDidUpdate(){
        console.log("AFTER UPDATE");
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextState.title === "New Title"){
            return true;
        }
        return false;
    }

    componentWillReceiveProps(){
        console.log("BEFORE RECIEVE PROPS");
    }

    componentWillUnmount(){
        console.log("UNMOUNT")
    }

    //4 render jxs
    render(){
        console.log("RENDER");
        return (
            <div>
            {this.state.title}
            <p onClick={ () => {
                this.setState({ title: "New Title" })
            }}>Change Title</p>
            </div>
        )
    }

    //5 after render
    componentDidMount(){
        console.log("5 after render");
    }
}

export default Life;