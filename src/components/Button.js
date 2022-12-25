import PropTypes from 'prop-types'

function myalert(){
    alert('are you into young little boys?')
    console.log('no')
}

function Button({name, color}) {
    return (
          <button onClick={myalert} style={{backgroundColor:color }} className="btn">{name}</button>
    )
  }
  export default Button

  Button.defaultProps = {
    backgroundColor:'yellow',
    color:'black',
    name:'click'
 }
  
 Button.propTypes = {
    color:PropTypes.string.isRequired
  
 }
 
