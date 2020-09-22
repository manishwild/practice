import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Footer from './Footer';
import Home from './Home';
import NavigationBar from './NavigationBar';
import Page404 from './Page404'
import Register from './Register';


class Router extends React.Component {
  
    render() {
        return (
            <BrowserRouter>
            <div>
            <NavigationBar />
            <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/login" exact component={null} />
                    <Route path="/admin" exact component={null} />
                    <Route path="/admin/addbook" exact component={null} />
                    <Route path="/contact" exact component={null} />
                    <Route path="/aboutus" exact component={null} />
                    <Route path="/" component={Page404} />
                    </Switch>

             <Footer />   
            </div>
            </BrowserRouter>
        );
    }
}

export default Router;