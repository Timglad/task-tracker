import './App.css';
import { useState } from "react"
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [counter,setCounter] = useState(0)

    function odCounter(){
        setCounter(counter+1)
        console.log(counter)
    }

  const [tasks,setTasks] = useState([
      {
          id:1,
          name:"Cleaning",
          date:"Monday 9pm"
      },
      {
          id:2,
          name:"Ironing",
          date:"Sunday 9pm"
  
      },
      {
          id:3,
          name:"Shopping",
          date:"Saturday 9pm"
      }
  ])
  return (
    <div className='container'>
      <Header/>
      <Tasks onClick={()=>setTasks([])} tasks={tasks} counter={counter} odCounter={odCounter}/>
    </div>
  );
}

export default App;
