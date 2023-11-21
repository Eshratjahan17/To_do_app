import React, { useState } from 'react';

const Todo = (props) => {
    const [inputTask, setInputTask] = useState('');
    console.log(props);
    return (
        <div>
            <h1 className='text-3xl text-white font-bold text-center mt-5'>My Todos</h1>
            <div className='flex items-center justify-center m-5' >
                <div className='mr-2'>
                    
                    <input type="text" placeholder="Your Todo Here "
                        value={inputTask}
                        onChange={e=>{setInputTask(e.target.value)}}
                    
                        className="input input-bordered w-full max-w-xs " />

                </div>
                
                <div>
                    <button className="btn btn-warning rounded-full font-bold text-2xl pb-1 "
                        onClick={() => {
                            props.addList(inputTask);
                            setInputTask("");
                           
                    }}
                    >+</button>
                    <div>{}</div>
                    
                </div>
        </div>
        </div>
    );
};

export default Todo;