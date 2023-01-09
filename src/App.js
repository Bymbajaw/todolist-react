import './App.css';
import React, { useState } from 'react'










function App() {


const [task, setTask] = useState('')
const [tasks, setTasks] = useState([])
const [doneTotal, setDoneTotal] = useState(0);





const addTask = () =>{
  const newObj = {
    id: tasks.length,
    title:task,
    isDone: false,

  }

  const newArr = [...tasks]
  newArr.push(newObj);


  setTasks(newArr);


  setTask('')

};


const onDoneTask = (id)=> {
  const objList = tasks.map((val)=>{
    if(val.id === id){
      val.isDone = !val.isDone

      setDoneTotal(doneTotal + 1);
    }
    return val;
  })

  setTasks(objList)
  ShowDoneTotal();

};


function ShowDoneTotal() {
  const arr = tasks.filter(e => e.isDone === true);

  setDoneTotal(arr.length);
}



  return (
    <div className="container">
      <div className='row mt-4'>
        <div className='col-md-4'>
          <h1>Todo List</h1>
          Total {tasks.length}
          <p>Done {doneTotal}</p>
         <div className='d-flex gap-3'>
          <input 
          className='form-control'
          type="text" 
          value={task} 
          onChange={(e)=> setTask(e.target.value)} 
          placeholder='task oruulna uu.' />
          <button  className='btn btn-primary' onClick={addTask}>
            +Add
          </button>
         </div>
        </div>
      </div>
      <div className='row mt-3'> 
        <div className='col-md-4' >
          {
            tasks.map((e)=>(
              <div className="d-flex justify-content-between align-items-center mt-2">
                <div className='d-flex'>
                  <input 
                  type="checkbox"  
                  className='checkbox'
                  checked={e.isDone} 
                  onChange={()=>onDoneTask(e.id)} 
                  />
                  <h4>{e.title}</h4>
                </div>
                <div>
                  <button className='btn btn-warning'>Edit</button>
                  <button className='btn btn-danger'>Delete</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
