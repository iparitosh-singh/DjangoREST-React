import React from 'react'
import { Form, Input, Button } from 'antd';
import axios from 'axios'

class CustomForm extends React.Component {
    handleFormSubmit = (event, requestType, articleID) => {
        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;

        switch ( requestType ) {
            case 'post':
                return axios.post('http://127.0.0.1:8000/api/', {
                    title: title,
                    content: content
                })
                .then(res => console.log(res))
                .catch(error => console.err(error));
            case 'put':
                return axios.put(`http://127.0.0.1:8000/api/${articleID}/`, {
                    title: title,
                    content: content
                })
                .then(res => console.log(res))
                .catch(error => console.err(error));
        }
    }

    render() {
        return (
            <div>
            <Form onSubmit = {(event)=>this.handleFormSubmit(
                event,
                this.props.requestType,
                this.props.articleID,
            )}>
                <Form.Item label="Title" >
                <Input name = "title" placeholder="Put title here." />
                </Form.Item>
                <Form.Item label="Content" >
                <Input name = "content"placeholder="Enter Some Content.." />
                </Form.Item>
                <Form.Item >
                <Button type="primary" htmlType = "submit">{this.props.btnText}</Button>
                </Form.Item>
            </Form>
            </div>
    )
  }
}

export default CustomForm