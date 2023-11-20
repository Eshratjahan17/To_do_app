import React, { useState } from 'react';

const Todo = () => {
    const [inputTask, setInputTask] = useState('');
    const [inputDesc, setInputDesc] = useState('');
    return (
        <div>
            <h1 className='text-3xl text-white font-bold text-center mt-5'>My Todos</h1>
            <div className='flex items-center justify-center m-5' >
                <div className='mr-2'>
                    
                    <input type="text" placeholder="Task Name "
                        onChange={e=>{setInputTask(e.target.value)}}
                    
                        className="input input-bordered w-full max-w-xs " />

                </div>
                <div className='mr-2'>
                    
                    <input type="text" placeholder="Description"
                        onChange={e=>{setInputDesc(e.target.value)}}
                        className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <button className="btn btn-warning rounded-full font-bold ">Add task</button>
                    <div>{inputTask}</div>
                    <div>{inputDesc}</div>
                </div>
        </div>
        </div>
    );
};

export default Todo;