import React from 'react';
import {Route} from 'react-router-dom';
import ArticleList from './container/ArticleListView';
import ArticleDetail from './container/ArticleDetailView'
import Login from './container/Login.js'

const BaseRouter = () => (
        <div>
            <Route exact path = "/" component ={ArticleList} />
            <Route exact path = '/article/:articleID/' component ={ArticleDetail} />
            <Route exact path = '/login/' component ={Login} />
        </div>
    );  


export default BaseRouter;