import Button from "./Button"

const Header = ({title , onAdd , showAdd}) => {


    return (
        <header className = 'header'>
            <h1>Task Tracker</h1>
            <Button color ={showAdd ? 'red' : 'skyblue' } text = {showAdd ? 'Close' : 'Add Task'} onClick = {onAdd} />
            
            
        </header>
    )
}

// const headingStyles = {
//     color : 'red' ,
//     backgroundColor  : 'black'
// }

export default Header
