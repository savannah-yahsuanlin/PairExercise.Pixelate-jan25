// Your code here
const table = document.getElementsByTagName('table')[0]
const addRow = document.getElementById('add-row')
const deleteRow = document.getElementById('delete-row')
const addColumn = document.getElementById('add-column')
const deleteColumn = document.getElementById('delete-column')
const select = document.querySelector('select')
const td = document.querySelectorAll('td')
const tr = document.querySelectorAll('tr')
let chosenColor = 'red'

const makeRow = () => {
	const tr = document.createElement('tr')
	for(let i = 0; i < 20; i++) {
		const td = document.createElement('td')
		tr.appendChild(td)
	}
	table.appendChild(tr)
}

const makeColumn = () => {
	for(let i = 0; i < table.rows.length; i++) {
		table.rows[i].insertCell(table.rows[i].cells.length); 
	}
}

const removeRow = () => {
	table.rows[0].remove()
}

const removeColumn = () => {
	let i = 1
	for(let j = 0; j < table.rows.length; j++) {
		table.rows[j].deleteCell(i)
	}
}

const colorize = (ev) => {
	const target = ev.target
	if(target.tagName === 'TD') {
		if(target.className === chosenColor) {
			target.className = ''
		} else {
			target.className = chosenColor
		}
	} else {
		if(target.className === chosenColor) {
			table.className = '' 
		} else {
			table.className = chosenColor	
		}
 	}
	
}

const change = (ev) => {
	chosenColor = `${ev.target.value}`
}

addColumn.addEventListener('click', makeColumn, false)

addRow.addEventListener('click', makeRow, false)

deleteRow.addEventListener('click', removeRow, false)

deleteColumn.addEventListener('click', removeColumn, false)

table.addEventListener('click', colorize, false)

select.addEventListener('change', change, false)

table.addEventListener('mouseover', colorize, false)


makeRow()
makeRow()
makeRow()
makeRow()
makeRow()
makeRow()
