import Header from './components/Header'
import Tasks from './components/Tasks'
import { useEffect, useState } from "react"
import AddTask from './components/AddTask'
import { db } from './firebase_config'

const App = () => {
  const [showAddTask , setShowAddTask ] = useState(false)
  const [ tasks , setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, []) ;

  const getTasks = () => {
    db.collection("DayPlanner").onSnapshot(function(querySnapshot){
      setTasks(querySnapshot.docs.map((doc) => ({
        id : doc.id ,
        text : doc.data().text ,
        day : doc.data().day ,
        reminder : doc.data().reminder ,
      }) ));

    });
  }


  const addTask  = (task) => {
    const id = Math.floor(Math.random() * 10000 ) +1 
    const newTask = {id , ...task }
    setTasks([...tasks , newTask])
  }

  const deleteTask = (id) => {
    db.collection("DayPlanner").doc(id).delete();
    
  }

  // const toggleReminder = (id) => {
  //   db.collection("DayPlanner").doc(id).update({
  //     reminder: !reminder,
  //   }) ;
  // }


  return (
    <div className = 'container'>
      <Header onAdd = {() => setShowAddTask(!showAddTask)} showAdd = {showAddTask} />
      {showAddTask && <AddTask onAdd= {addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete = {deleteTask} 
      // onToggle = {toggleReminder} 
      /> : "You have no Task left , Add some new ? " }
      
    </div>
  )
}



export default App

