import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
    constructor() {
        super()

        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        axios.get('https://api.vschool.io/bob/todo').then( res => {
            console.log(res)
            this.setState({todos: res.data})
        })
    }

    render() {
        console.log(this.state.todos)
        return (
            <div>
                
            </div>
        );
    }
}

export default App;