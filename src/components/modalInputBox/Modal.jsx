import React, { useState } from 'react'
import "./modal.scss";
import axios from 'axios';
const Modal = ({ setOpen }) => {
    const [data, setData] = useState({
        title: "",
        desc: "",
        completed: false
    });

    const handleClick = () => {
        setOpen(false);
    }
    const handleInputs = (e) => {
        let inputs = { [e.target.name]: e.target.value };
        setData({ ...data, ...inputs });
    }
    const handleSubmit = async () => {
        setOpen(false);
        // localStorage.setItem("title", data.title);
        // localStorage.setItem("desc", data.desc);
        // localStorage.setItem("completed", data.completed);
        // console.log(data);
        const title= data.title;
        const desc=data.desc;
        const completed=data.completed;
        const userEmail=localStorage.getItem("email");
        const username=localStorage.getItem("name");
        const task= await axios.post("http://localhost:5000/auth/tasks", {title, desc, username,userEmail,completed});
        window.location.reload();
        console.log(task);

    }
    return (
        <div className='modal'>
            <h2>Add your task</h2>
            <input type="text" className='title' placeholder='Add title of your task....' name='title' onChange={handleInputs} />
            <input type="text" className='task' placeholder='Add your task ....' name='desc' onChange={handleInputs} />

            <button onClick={handleSubmit}>Add it!</button>

            <button className="close" onClick={handleClick}>Close</button>
        </div>
    )
}

export default Modal