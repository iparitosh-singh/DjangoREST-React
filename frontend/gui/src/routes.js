import React from 'react';
import {Route} from 'react-router-dom';
import ArticleList from './container/ArticleListView';
import ArticleDetail from './container/ArticleDetailView'

const BaseRouter = () => {
    return(
        <div>
            <Route extact path = '/' component ={ArticleList} />
            <Route extact path = '/:aritcleID' component ={ArticleDetail} />
        </div>
    )
}

export default BaseRouter;