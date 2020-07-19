import React from 'react'
 

function Person({person}) {
 
	return (
		<div>
			<h2> Hello i am {person.name}, My skill is {person.skill} and My age is {person.age}</h2>
		</div>
	)
}

export default Person