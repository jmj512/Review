import React from "react";
import { Route } from "react-router-dom";
import WeekReview from "./WeekReview";
import DayReview from "./DayReview";


function App() {

  const arrow = {
    "월": Math.floor(Math.random() * 5),
    "화": Math.floor(Math.random() * 5),
    "수": Math.floor(Math.random() * 5),
    "목": Math.floor(Math.random() * 5),
    "금": Math.floor(Math.random() * 5),
    "토": Math.floor(Math.random() * 5),
    "일": Math.floor(Math.random() * 5),
  }

  const [list, setList] = React.useState(arrow); 
  console.log(arrow);
  const text = React.useRef(null);

  const addBucketList = () => {
    setList([...list, text.current.value]);
  }

  console.log(list);
  return (
    <div className="App">
      <Route path="/" exact>
        <WeekReview list={list} setList={setList}/>
      </Route>
      <Route path="/dayreview/:week_day" >
        <DayReview />
      </Route>
    </div>
  );
}

export default App;