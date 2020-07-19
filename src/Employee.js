import React from 'react'

function Employee() {

const names = ["Abhi", "Aditya", "Sonam", "Abhi"];

const nameList = names.map((name, index) => <h2 key={index}>{index} : {name}</h2>)

	return (
		<div>
			{nameList}
		</div>
	)
}

export default Employee