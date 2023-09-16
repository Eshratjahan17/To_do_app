import React from 'react';

const Todo = () => {
    return (
        <div>
            <h1 className='text-3xl text-white font-bold text-center'>My Todos</h1>
            <div className='flex items-center justify-center' >
                <div>
                    <h3>Name</h3>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                </div>
                <div>
                    <h3>Description</h3>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                <button className="btn btn-warning">Warning</button>
                </div>
        </div>
        </div>
    );
};

export default Todo;