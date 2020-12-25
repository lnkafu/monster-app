
import React from 'react'
import { CardList } from './component/card-list/card-list.component.jsx'
import { SearchBox } from './component/search-box/search-box.component.jsx'


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: ''
    }
  }  

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users') 
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}) )
  }

  //onSearchChnage = event
  render() {
    const {monsters, searchField} = this.state

    const fileterMonsters = monsters.filter(
      monster => monster.name.includes(searchField)
    )
    return (
      <div>
        <h1> Monster's Rollodex</h1>
        <SearchBox onSearchChange = {this.onSearchChange}/>
        <CardList monsters ={this.state.monsters}/>
        

      </div>
    )
  }

}


export default App;
