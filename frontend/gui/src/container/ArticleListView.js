import React from 'react';
import Articles from '../components/Article';
import axios from 'axios'
import CustomForm from '../components/Form'



class ArticleList extends React.Component {
    state = {
        articles: []
    }   

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/`)
        .then(res=>{
            this.setState({
                articles: res.data
            });
        })
    }
    render() {
        return (
        <div>
            <Articles data = {this.state.articles}/>
            <br />
            <h2>Create an Article</h2>
            <CustomForm 
                requestType = 'post' 
                articleId = {null} 
                btnText = "Submit" 
            />
        </div>
        )
    }
}
export default ArticleList;