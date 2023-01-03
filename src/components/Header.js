import Button from "./Button"

function Header() {
  return (
    <header className="header">
        <h1>My Header</h1>
        <Button name="Add" color="blue" onc="True"></Button>
        <Button></Button>
    </header>
  )
}

export default Header