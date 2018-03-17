import React from 'react';
import Table from './table';

export default() => {
    return ( 
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>
    )
}

const students = [
    {
        name: 'Barbie',
        course: 'Creative Writing',
        grade: 24
    },
    {
        name: 'Peter Parker',
        course: 'Criminal Justice',
        grade: 68
    },
    {
        name: 'Angelina Jolie',
        course: 'Slaying Life',
        grade: 100
    }
];









