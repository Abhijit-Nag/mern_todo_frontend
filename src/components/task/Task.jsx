import React from 'react';
import "./task.scss";
const Task = ({data}) => {
    return (
        <div className='task'>
            <h2 className="title">{data.title}</h2>
            <p className="desc">{data.desc} </p>
            <span className="status">Completion Status : {data.completed} </span>
            <div className="time">
                <span className="left">Task Added</span>
                <span className="rgiht">Task Deadline</span>
            </div>
        </div>
    )
}

export default Task