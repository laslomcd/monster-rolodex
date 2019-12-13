import React, {Component} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
//import axios from 'axios';

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: []
        };
    }


    // With Fetch API
     componentDidMount() {
         fetch('https://jsonplaceholder.typicode.com/users')
         .then(response => response.json())
         .then(users => this.setState({ monsters: users}))
     }

    // With axios
    // componentDidMount() {
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //     .then(response => this.setState({ monsters: response.data}))
    // }


    render() {
        return ( 
            <div className = "App" >
                <CardList monsters={this.state.monsters} />
            </div>
        );
    }
}

export default App;