import React, { useState } from 'react';

const Todo = (props) => {
    const [inputTask, setInputTask] = useState('');
    const [inputDesc, setInputDesc] = useState('');
   
    return (
        <div>
            <h1 className='text-3xl text-white font-bold text-center mt-5'>My Todos</h1>
            <div className='flex items-center justify-center m-5' >
                <div className='mr-2'>
                    
                    <input type="text" placeholder="Task Name "
                        value={inputTask}
                        onChange={e=>{setInputTask(e.target.value)}}
                    
                        className="input input-bordered w-full max-w-xs " />

                </div>
                <div className='mr-2'>
                    
                    <input
                        
                        type="text" placeholder="Description"
                        value={inputDesc}
                        onChange={e=>{setInputDesc(e.target.value)}}
                        className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <button className="btn btn-warning rounded-full font-bold "
                        onClick={() => {
                            props.addList(inputTask);
                            setInputTask("");
                           
                    }}
                    >Add task</button>
                    <div>{}</div>
                    <div>{inputDesc}</div>
                </div>
        </div>
        </div>
    );
};

export default Todo;