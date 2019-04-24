import React, {Component} from "react";
const APIURL = "/api/todos";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos:[]
        }
    }
    componentWillMount(){
        this.loadTodos()
    }
    loadTodos(){
        fetch(APIURL)
        .then(resp => {
            if(!resp.ok) {
                if(resp.status >= 400 && resp.status < 500) {
                    return resp.json().then(data => {
                        let err = {errorMessage: data.message};
                        throw err;
                    })
                } else {
                    let err = {errorMessage: "Please Try again later, server is not responding" }
                    throw err;
                }
            }
            return resp.json()
        })
        .then(todos => this.setState({todos}));
    }
    render(){
        return(
            <div>
                <h1>Hello Form TodoList Component</h1>
            </div>
        )
    }
}

export default TodoList