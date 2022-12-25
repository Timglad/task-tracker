import Button from "./Button"

function Header() {
  return (
    <header className="header">
        <h1>My Header</h1>
        <Button name="Add" color="blue"></Button>
        <Button name="Delete" color=""></Button>
        <Button name="15" color="blue"></Button>
        <Button></Button>
    </header>
  )
}

export default Header