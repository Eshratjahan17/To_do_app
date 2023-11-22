import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTrash } from
 
'@fortawesome/free-solid-svg-icons';
import React from 'react';

const ListItem = (props) => {
    return (
        <div className='flex items-center justify-center mt-5 mx-auto '>
            <li className='text-white list-none border rounded-lg w-80 p-3'>
                <div className='flex justify-between'>
                <p>{props.listItem}
                </p>
                <span>
                        <FontAwesomeIcon onClick={e => {
                            props.deleteListItem(props.index)
                }}  icon={faTrash} />
                </span>
                </div>

            </li>
        </div>
    );
};

export default ListItem;