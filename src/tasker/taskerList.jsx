import React from 'react'
import TaskerItem from './taskerItem'
//этот файл твечает за вывод задач

function Tasker(props){
    return (
        <ul>
            {props.tasks.map((tasks, index)=>{// узнать про map по больше
                //index это индекс массива; tasks из App
                //tasks это props.tasks
                return <TaskerItem tasks={tasks} key={tasks.id} index={index} onEdit={props.toggleDone} />//key должен быть
            })}
        </ul>
    )
}

export default Tasker