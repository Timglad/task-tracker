import {FaJoint} from "react-icons/fa"


function Task({content, date, counter, odCounter }) {
    
  return (
    <div className="task">
        <h3>{content} <FaJoint onClick={odCounter} color="darkgreen" /> {counter}</h3>
        <p>{date}</p>
    </div>
  )
}

export default Task