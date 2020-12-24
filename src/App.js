import React from 'react'
import Tasker from './tasker/taskerList'
//TODO: сделать зачёркивание ли
function App() {

    let taskList = [
        {id: 1, completed: true, title: 'попрыгать 10 раз'},
        {id: 2, completed: false, title: 'развить фантазию' },
        {id: 3, completed: false, title: 'поклониться' },

    ]

    function toggleDone(id) {
        taskList.map(task => {
            if (task.id === id) {
                task.completed = !task.completed
            }
            return task
        })
    }   

    return (
        <div className='wrapper'>
            <h1 style={{textAlign: 'center'}}>Tasker</h1>
            <Tasker tasks={taskList} toggleDone={toggleDone}/>
        </div>
    )
}

export default App
