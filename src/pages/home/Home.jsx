import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar';
import Modal from '../../components/modalInputBox/Modal';
import Tasks from '../../components/tasks/Tasks';

const Home = () => {

    const [open, setOpen] = useState(false);
    console.log(open);
    return (
        <div className="App">
            <Navbar setOpen={setOpen} />
            {open && (
                <Modal setOpen={setOpen} />
            )}
            <Tasks />
        </div>
    )
}

export default Home