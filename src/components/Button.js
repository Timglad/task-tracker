import PropTypes from 'prop-types'

function myAlert(onc){
    onc === "True" ? alert('The alert is working-horray') : 
    console.log(onc)
}

function Button({name, color, onc}) {
    return (
          <button onClick={()=>myAlert(onc)} style={{backgroundColor:color }} className="btn">{name}</button>
    )
  }
  export default Button

  Button.defaultProps = {
    color:'yellow',
    name:'default',
    onc:'False'
 }
  
 Button.propTypes = {
    color:PropTypes.string.isRequired
  
 }
 
