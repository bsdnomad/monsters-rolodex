import React, { useState, useEffect } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

const App = () => {
  const dataUrl = 'https://jsonplaceholder.typicode.com/users';
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    fetch(dataUrl)
      .then(response => response.json())
      .then(records => {
        setMonsters(records);
        // setFilteredMonsters(records); // this would get executed below where monsters is a dependency
      })
    ;
  }, []); // Passing an empty array as a second argument is an equivalent to calling componentDidMount()

  useEffect(() => {
    setFilteredMonsters(monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    ));
  }, [searchField, monsters]);

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder="Search monsters" handleChange={e => setSearchField(e.target.value)} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
