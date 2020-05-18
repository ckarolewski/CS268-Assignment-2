import React from 'react';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function Memory(props) {
    const memory = props.memory;

    return (
        <div className="memory">
                <div className="memory-left">
                    <span className="year">{memory.year}</span>
                    <span>{months[memory.month -1]} {memory.day}</span>
                </div>
                <div className="memory-right">
                    {memory.message}
                </div>
        </div>
    );
}