
import { Component } from 'react';
import { CardList } from './components/CardList/CardList';
import { Search } from './components/Search/Search.js';

import './App.css';


class App extends Component {
constructor(props){
  super(props)

  this.state={
    monsters:[],
    searchField:''
  }
}


handeChange =(e) =>{

  this.setState({searchField: e.target.value});
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monsters:users}))
}
  render(){
    const {monsters , searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()));
    return(
      <div className="App">
        <h1>Monsters ayachi</h1>
        <Search
        placeholder='search monsters'
        handeChange={this.handeChange}
        />
        <CardList monsters={filteredMonsters} />
        

    </div>

    )
  }
}

export default App;
