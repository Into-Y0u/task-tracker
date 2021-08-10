import Button from "./Button"


const Header = ({title , onAdd , showAdd}) => {


    return (
        <header className = 'header'>
            <h1>Day Planner</h1>
            <Button color ={showAdd ? '#4f4403' : '#212156' } text = {showAdd ? 'Close' : 'Add Task'} onClick = {onAdd} />
            
            
        </header>
    )
}



export default Header
