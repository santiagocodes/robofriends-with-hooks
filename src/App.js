import React, { Component } from 'react';
import CardList from './Components/CardList';
import SearchBox from './Components/SearchBox';
import Scroll from './Components/Scroll';
// import { robots } from './robots.js';
import './App.css';

export default class App extends Component {
   constructor() {
      super();
      this.state = {
         // robots: robots,
         robots: [],
         searchField: '',
      };
   }

   componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
         .then((response) => response.json())
         .then((users) => this.setState({ robots: users }));
   }

   onSearchChange = (e) => {
      this.setState({ searchField: e.target.value });
   };

   render() {
      const filteredRobots = this.state.robots.filter((robot) => {
         return robot.name
            .toLowerCase()
            .includes(this.state.searchField.toLowerCase());
      });
      if (this.state.robots.length === 0) {
         return <h1 className="tc">Loading...</h1>;
      } else {
         return (
            <div className="tc">
               <h1 className="f1">RoboFriends</h1>
               <SearchBox searchChange={this.onSearchChange} />
               <Scroll>
                  <CardList robots={filteredRobots} />
               </Scroll>
            </div>
         );
      }
   }
}
