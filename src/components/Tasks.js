const tasks = [
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
]
function getName(i){
    return <li> {i.name} </li>
}
function Tasks() {
  return (
    <>{tasks.map(getName)}</>
  )
}

export default Tasks