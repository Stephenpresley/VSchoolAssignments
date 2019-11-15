import React from 'react';

const Todo = (props) => {
    let {name, image} = props
    return (
        <div className='todo'  >
            <img src={image} alt=""/>
            <h2>{name}</h2>
        </div>
    );
};

export default Todo;