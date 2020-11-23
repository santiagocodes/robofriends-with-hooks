import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
// import { robots } from './robots.js';
import './App.css';

// export default class App extends Component {
function App() {}

   // constructor() {
   //    super();
   //    this.state = {
   //       // robots: robots,
   //       robots: [],
   //       searchField: '',
   //    };
   // }
   const [robots, setRobots] = useState([]) 
   const [searchField, setSearchField] = useState('')

   // componentDidMount() {
   //    fetch('https://jsonplaceholder.typicode.com/users')
   //       .then((response) => response.json())
   //       .then((users) => this.setState({ robots: users }));
   // }
   useEffect( () => {
      fetch('https://jsonplaceholder.typicode.com/users')
         .then((response) => response.json())
         .then((users) => setRobots(users));
   }, [])


      // onSearchChange = (e) => {
   const onSearchChange = (e) => {
      // this.setState({ searchField: e.target.value });
      setSearchField(e.target.value)
   };

   // render() {

      // const { robots, searchField } = this.state;
      const filteredRobots = robots.filter((robot) => {
         return robot.name.toLowerCase().includes(searchField.toLowerCase());
      });

      return !robots.length ? (
         <h1 className="tc">Loading...</h1>
      ) : (
         <div className="tc">
            <h1 className="f1">RoboFriends</h1>
        {/* <SearchBox searchChange={this.onSearchChange} /> */}
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
               <ErrorBoundry>
                  <CardList robots={filteredRobots} />
               </ErrorBoundry>
            </Scroll>
         </div>
      );
   }
}
