import React from "react";
import ReactDOM from "react-dom";

//Import React Router
import { BrowserRouter, Route, Link, NavLink, Switch } from "react-router-dom";

//Components
import Home from "./components/home";
import Posts from "./components/posts";
import PostItem from "./components/postItem";
import Profile from "./components/profiles";

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
                    <hr/>
                </header>
                <Switch>
                    <Route path="/posts/:id" component={PostItem}/>
                    <Route path="/posts" component={Posts}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));