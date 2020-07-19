import React from 'react'
import Person from './Person'

function Namelist() {

	const persons = [
    {
     id: 1,
     name: 'Abhi',
     age:'25',
     skill:'React'
     
     },

     {
     id: 2,
     name: 'Aditya',
     age:'40',
     skill:'java'
     
     },

     {
     id: 3,
     name: 'Sonam',
     age:'50',
     skill:'node'
     
     },
 ]


 const personList = persons.map(person => <Person person={person} />)

	return (
		<div>
		{personList}	
		</div>
	)
}

export default Namelist