import React, { useState, useEffect } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
// import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
// import { robots } from './robots.js';
import './App.css';

// export default class App extends Component 
function App() {

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
   // const [count, setCount] = useState(0)

   // componentDidMount() {
   //    fetch('https://jsonplaceholder.typicode.com/users')
   //       .then((response) => response.json())
   //       .then((users) => this.setState({ robots: users }));
   // }
   useEffect( () => {
      fetch('https://jsonplaceholder.typicode.com/users')
         .then((response) => response.json())
         .then((users) => setRobots(users));
         // console.log(count)
   // }, [count]) // only run if count changes. it fetches again as well.
   }, [])


      // onSearchChange = (e) => 
   const onSearchChange = (e) => {
      // this.setState({ searchField: e.target.value });
      setSearchField(e.target.value)
   };

   // render() 

      // const { robots, searchField } = this.state;
      const filteredRobots = robots.filter((robot) => {
         return robot.name.toLowerCase().includes(searchField.toLowerCase());
      });

      return !robots.length ? (
         <h1 className="tc">Loading...</h1>
      ) : (
         <div className="tc mb5">
            <h1 className="f1">RoboFriends</h1>
            {/* <button onClick={() => setCount(count+1)}>Click Me!</button> */}
        {/* <SearchBox searchChange={this.onSearchChange} /> */}
            <SearchBox searchChange={onSearchChange} />
            {/* <Scroll> */}
               <ErrorBoundry>
                  <CardList robots={filteredRobots} />
               </ErrorBoundry>
            {/* </Scroll> */}
         </div>
      );
   
}

export default App;
