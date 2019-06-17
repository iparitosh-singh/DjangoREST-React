import React from 'react';
import {Route} from 'react-router-dom';
import ArticleList from './container/ArticleListView';
import ArticleDetail from './container/ArticleDetailView'

const BaseRouter = () => (
        <div>
            <Route extact path = '/home' component ={ArticleList} />
            <Route extact path = '/:articleID' component ={ArticleDetail} />
        </div>
    );  


export default BaseRouter;