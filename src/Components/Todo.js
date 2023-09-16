import React from 'react';

const Todo = () => {
    return (
        <div>
            <h1 className='text-3xl text-white font-bold text-center mt-5'>My Todos</h1>
            <div className='flex items-center justify-center m-5' >
                <div className='mr-2'>
                    
                    <input type="text" placeholder="Task Name " className="input input-bordered w-full max-w-xs " />

                </div>
                <div className='mr-2'>
                    
                    <input type="text" placeholder="Description" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                <button className="btn btn-warning rounded-full font-bold ">Add task</button>
                </div>
        </div>
        </div>
    );
};

export default Todo;