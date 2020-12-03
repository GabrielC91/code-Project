import React from "react"
import "./CounterComp.css"

function Counter(props){
    console.log("PROPS.startingCount: ", props.startingCount);
    console.log("PROPS.countRate: ", props.countRate);
    var startCount = props.startingCount;
    var countRate = props.countRate; 
    console.log("startCount: ", startCount);
    console.log("countRate: ", countRate);


     function buttonClicked (rate) { 
        console.log(rate);
        startCount += countRate;
        console.log("startCount: ", startCount)
     }
    function clickButton(rate){
        console.log(rate)
        countRate -= startCount;
        console.log("countRate:", countRate)
         
    }
    

    return (
        <div className="Comp">
            <h1>Counter: {startCount}</h1>
            <h1>Count Rate: {countRate} </h1>
            <div>
        <button onClick={() => buttonClicked(props.countRate)}> + </button>
        <button onClick={() => clickButton(props.startCount)}> - </button>
        </div>
        </div>

    )
}

export default Counter;