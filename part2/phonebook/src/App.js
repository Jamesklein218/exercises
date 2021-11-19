import React, { useState } from 'react'
import SearchFilter from './components/searchFilter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const isMatched = (str, subStr) => {
    str = str.toLowerCase()
    subStr = subStr.toLowerCase()
    let result = true
    for (let i = 0; i < subStr.length; i++) {
        if (str[i] !== subStr[i]) {
            result = false
            break
        }
    }
    return result
}

const App = () => {
    // Var
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])

    // State
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [newFilter, setNewFilter] = useState('')
    const display = !newFilter ? persons :
        persons.filter(person => {
            return isMatched(person.name, newFilter)
        })

    const addPerson = event => {
        event.preventDefault()

        if (!newName || !newNumber) {
            alert("You haven't filled the name or the number.")
        } else if (persons.findIndex(el => el.name === newName) !== -1) {
            alert(`${newName} is already added to phonebook.`)
        } else {
            setPersons(persons.concat({
                id: newName,
                name: newName,
                number: newNumber
            }))
            setNewName('')
            setNewNumber('')
        }
    }

    const handleNewName = event => {
        setNewName(event.target.value)
    }
    const handleNewNumber = event => {
        setNewNumber(event.target.value)
    }
    const handleNewFilter = event => {
        setNewFilter(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <SearchFilter value={newFilter} handle={handleNewFilter} />
            <h3>Add a new</h3>
            <PersonForm
                onSubmit={addPerson}
                newName={newName}
                handleNewName={handleNewName}
                newNumber={newNumber}
                handleNewNumber={handleNewNumber}
            />
            <h3>Numbers</h3>
            <Persons display={display} />

        </div>

    )
}

export default App