import './App.css';
import React, {Fragment, useState} from 'react';
import DataDisplay from '../DataDisplay/DataDisplay';
import SearchOptions from '../SearchOptions/SearchOptions';
import ReverseDirection from '../ReverseDirection/ReverseDirection';
import SingleSelect from '../ClearValue/SingleSelect'

function App() {

  const [from, setFrom] = useState("From");
  const [to, setTo] = useState("To");
  const [day, setDay] = useState("Day");
  const [direction, setDirection] = useState("from the Mountains")

  console.log(direction)

  function reverseDirection() {
    if (direction === "to the Mountains") {
      setDirection("from the Mountains")
      switchFromAndTo();
    } else {
      setDirection("to the Mountains");
      switchFromAndTo();

    }

    function switchFromAndTo(){
      let newTo = from;
      let newFrom = to;
      setTo(newTo);
      setFrom(newFrom)
    }
  }
  
  function UpdatedSearchOptions() {

    if (direction==="from the Mountains") {
      return(
        <ReverseDirection
        from = {from}
        setFrom = {setFrom}
        to = {to}
        setTo = {setTo}
        day = {day}
        setDay = {setDay}
        direction = {direction}
        reverseDirection = {reverseDirection}
      />
      )
    } else {
      return(
        <ReverseDirection
        from = {from}
        setFrom = {setFrom}
        to = {to}
        setTo = {setTo}
        day = {day}
        setDay = {setDay}
        direction = {direction}
        reverseDirection = {reverseDirection}
      />
      )
    }

  }
  
  return(
    <div className='page-wrapper'>
    <h1>Times {direction}</h1>
    {(direction === "to the Mountains") && 
        <SearchOptions
        from = {from}
        setFrom = {setFrom}
        to = {to}
        setTo = {setTo}
        day = {day}
        setDay = {setDay}
        direction = {direction}
        reverseDirection = {reverseDirection}
      />
    }
    {(direction === "from the Mountains") && 
        <SearchOptions
        from = {from}
        setFrom = {setFrom}
        to = {to}
        setTo = {setTo}
        day = {day}
        setDay = {setDay}
        direction = {direction}
        reverseDirection = {reverseDirection}
      />
    }

    <DataDisplay
      from = {from}
      to = {to}
      day = {day}
    />
    </div>
    
  )
}

export default App;
