import React from 'react'
//этот файл отвечает за функционал отдельной задачи

function TaskerItem({tasks, index, onEdit}) {
    var classes = []
    
    if (tasks.completed === true){
        classes.push('done')
    }

    return (
        <span className={classes.join(' ')}>
            <li className='oneTask'>
                <strong>{index + 1}</strong>
                {tasks.title}
                <input type="checkbox" checked={tasks.completed} onChange={ () => {
                    onEdit(tasks.id)
                    console.log(tasks, classes)
                }} />
                <button>&#10006;</button>
            </li>
        </span>
    )
}

export default TaskerItem