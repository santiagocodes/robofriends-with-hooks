import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
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
      const { robots, searchField } = this.state;
      const filteredRobots = robots.filter((robot) => {
         return robot.name.toLowerCase().includes(searchField.toLowerCase());
      });
      return !robots.length ? (
         <h1 className="tc">Loading...</h1>
      ) : (
         <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
               <ErrorBoundry>
                  <CardList robots={filteredRobots} />
               </ErrorBoundry>
            </Scroll>
         </div>
      );
   }
}
