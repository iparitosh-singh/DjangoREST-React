import React from 'react';
import {Route} from 'react-router-dom';
import ArticleList from './container/ArticleListView';
import ArticleDetail from './container/ArticleDetailView'
import Login from './container/Login.js'
import RegistrationForm from './container/Signup.js'

const BaseRouter = () => (
        <div>
            <Route exact path = "/" component ={ArticleList} />
            <Route exact path = '/article/:articleID/' component ={ArticleDetail} />
            <Route exact path = '/login/' component ={Login} />
            <Route exact path = '/signup/' component ={RegistrationForm} />
        </div>
    );  


export default BaseRouter;