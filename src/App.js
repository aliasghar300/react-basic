import React,{useState} from 'react';
import './App.css';
// import City from './components/cityMap';
// import CityFilter from './components/cityFilter';
import FunctionState from './components/functionState';
import ClassState from './components/ClassState';
import EventTarget from './components/ChangePropsUsingState';
import OnChange from './components/onChange';

function App() {
    
 const [count,setCount] = useState(0)

  return (
    <div className="App">
        <h1> {count} </h1>
        <button onClick={() => {
          setCount(
            <FunctionState />,
            count+1)

        }}> add </button>
       
        <br />
        <hr />
        <ClassState />
        <br />
        <hr />
        <EventTarget name="Aliasghar" />
        <br />
        <hr />
        <OnChange name="Ali"/>
        <br />
        <br />
        <br />
        <hr />
        
      </div>
  );
}

export default App;
