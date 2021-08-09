import { useState } from "react"
import { db } from "../firebase_config";
import firebase from "firebase";

const AddTask = ({onAdd}) => {
    const [data , setData] = useState({
        text: "",
        day:"",
        reminder : false
    })
    let name , value ;
    const getData = (event) => {
        name = event.target.name ;
        value = event.target.value ;

        setData({...data , [name]:value});
    };

    const postData  = (e) => {
        e.preventDefault() ;

        const { text , day ,reminder } = data ;
        
        if ( text && day ) {
            db.collection("DayPlanner").add({
                text , 
                reminder ,
                day ,
                timestamp : firebase.firestore.FieldValue.serverTimestamp() 
            })
            setData({
                text: "",
                day:"",
                reminder : false  });



        }else{
            alert('Please Add all Task  info') ;
        }
        
        

      
    
     
    }

    return (
        <form className = 'add-form' >
            <div className = 'form-control'>
                <label>Task </label>
                <input type="text" placeholder='Add Task' name="text" value = {data.text} onChange ={ getData } />
            </div>
            <div className = 'form-control'>
                <label>Day and Time</label>
                <input type="text" placeholder='Add Day and Time' name="day"  value = {data.day} onChange ={getData } />
            </div>
            <div className = 'form-control form-control-check'>
                <label>Important ?</label>
                <input type='checkbox' name="reminder"   value = {data.reminder} onChange ={ getData } />
            </div>

            <input type="submit" value='Save Task' onClick ={postData}   className = 'btn btn-block' />
        </form>
    )
}

export default AddTask
