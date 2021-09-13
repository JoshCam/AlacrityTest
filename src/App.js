import React, { useState } from "react";

import "./App.css";

import Person from "./components/Person";

function App() {
  let [screenMode, setScreenMode] = useState(0);
  // screenMode 0 = averages
  // screenMode 1 = all data
  // screenMode 0 = single data

  let [people, setPeople] = useState({
    data: [
      {
        first_name: "Alice",
        age: 20,
      },
      {
        first_name: "Bob",
        age: 25,
      },
      {
        first_name: "Carol",
        age: 30,
      },
      {
        first_name: "Dave",
        age: 35,
      },
    ],
  });

  let calculateAveAge = () => {
    let totalAge = 0;
    let count = 0;
    for (let i = 0; i < people.data.length; i++) {
      // console.log(people.data[i].age);
      totalAge += people.data[i].age;
      count += 1;
    }
    return totalAge / count;
  };

  let findOldest = () => {
    let oldestName = "";
    let OldestAge = 0;
    for (let i = 0; i < people.data.length; i++) {
      if (people.data[i].age > OldestAge) {
        OldestAge = people.data[i].age;
        oldestName = people.data[i].first_name;
      }
    }
    return [oldestName, OldestAge];
  };

  let findYoungest = () => {
    let youngestName = "";
    let youngestAge = 1000;
    for (let i = 0; i < people.data.length; i++) {
      if (people.data[i].age < youngestAge) {
        youngestAge = people.data[i].age;
        youngestName = people.data[i].first_name;
      }
    }
    return [youngestName, youngestAge];
  };
  // console.log(people.data);
  return (
    <div className="App">
      {screenMode === 0 ? (
        <div>
          {/* Averages */}
          <h3>Average Age:</h3>
          <p>{calculateAveAge()}</p>
          <h3>Oldest Person:</h3>
          <p>{findOldest()[0]}</p>
          <p>At the young age of {findOldest()[1]}</p>
          <h3>Youngest Person:</h3>
          <p>{findYoungest()[0]}</p>
          <p>At the even younger age of {findYoungest()[1]}</p>
          <button onClick={() => setScreenMode(1)}>Go to All Data</button>
          <button>Go to individuals Data</button>
        </div>
      ) : (
        <div>
          {/* All Data */}
          <h2>All Data:</h2>
          {/* {people.data.map((person, index) => {

            })} */}
          <Person
            first_name={people.data[0].first_name}
            age={people.data[0].age}
          />
          {/* Got stuck - tried using map method to pass props to child
            props weren't getting passed
            also tried using a for loop to pass manually but still no luck oddly? */}
        </div>
      )}
    </div>
  );
}

export default App;

// Alice, age 20
// Bob, age 25
// Carol, age 30
// Dave, age 35

//  <Person
//    first_name={people.data[0].first_name}
//    age={people.data[0].age}
//  />;
