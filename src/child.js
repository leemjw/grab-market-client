import React from 'react';
function TimerComponent(){
    const [time,setTime]=React.useState(0);
    console.log("component update");
    React.useEffect(function{
        setTime(time+1);
    },[]);

    return (
        <div>{time}초</div>
        <button onClick={updateTime}>1 up</button>
    )
}

export default TimerComponent;