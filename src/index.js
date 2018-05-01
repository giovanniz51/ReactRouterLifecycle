import React from "react";
import ReactDOM from "react-dom";

//Import React Router
import { BrowserRouter, Route, Link, NavLink, Switch } from "react-router-dom";

//Components
import Home from "./components/home";
import Posts from "./components/posts";
import PostItem from "./components/postItem";
import Profile from "./components/profiles";
import Life from "./components/life";
import Conditional from "./components/conditional";
import User from "./components/user";


//gianni.com/posts
//gianni.com/profile/posts


const App = () => {
    return (
        <BrowserRouter>
            <div>
                <header>
                    <NavLink to="/">Home</NavLink><br/>
                    <NavLink to="/posts" activeClassName="selected">Posts</NavLink><br/>
                    <NavLink to={{
                        pathname: "/profile"
                    }}>Profile</NavLink><br/>
                    <NavLink to="/life">Life</NavLink><br/>
                    <NavLink to="/conditional">Conditional</NavLink><br/>
                    <NavLink to="/user">User</NavLink>
                    <hr/>
                </header>
                <Switch>
                    <Route path="/posts/:id" component={PostItem}/>
                    <Route path="/life" component={Life}/>
                    <Route path="/user" component={User}/>
                    <Route path="/conditional" component={Conditional}/>
                    <Route path="/posts" component={Posts}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/" exact component={Home}/>
                    <Route component={Posts}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));