import Task from "./Task"
function Tasks({odCounter, counter, tasks}) {

function getName(i){
    return <li> {i.name} </li>
}

  return (
    <>
    {tasks.map((i) => <Task key={i.id} content={i.name} date={i.date} odCounter={odCounter} counter={counter}/>)}
    {/*tasks.map(getName)*/}</>
  )
}

export default Tasks