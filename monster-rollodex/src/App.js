import React from 'react'

import './App.css'
import { CardList } from './components/card-list/card-list.component'

import {SearchBox} from './components/search-box/search-box.component'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json() )
    .then(users => this.setState({monsters: users}))
  }

  onSearchChange = event => {
    this.setState({searchField: event.target.value})
  }

  render(){

    // Object Destructuring 
    const { monsters, searchField } = this.state
    console.log(searchField)

    const filteredMonsters = monsters.filter(
      monster => monster.name.toLowerCase().includes(searchField)
    )

    return(
      <div className='App'>
        <h1>Monster's Rollodex</h1>
        <SearchBox onSearchChange = {this.onSearchChange}/>
        <CardList monsters = {filteredMonsters}/>
      </div>
    )
  }
}
export default App;
