import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import SearchFilter from './components/searchFilter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import services from './services'

// Function to check 
// if the subStr is in the str 
// and at the beginning
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
    console.log("RENDER")

    // Declaration
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [newFilter, setNewFilter] = useState('')
    const display = !newFilter ? persons :
        persons.filter(person => {
            return isMatched(person.name, newFilter)
        })

    //Effect
    const addPerson = event => {
        event.preventDefault()

        if (!newName || !newNumber) {
            alert("You haven't filled the name or the number.")
        } else if (persons.findIndex(el => el.name === newName) !== -1) {
            alert(`${newName} is already added to phonebook.`)
        } else {
            services.create({
                id: newName,
                name: newName,
                number: newNumber
            })
                .then(res => {
                    setPersons(persons.concat(res))
                    setNewName('')
                    setNewNumber('')
                })
        }
    }
    const deletePerson = event => {
        // confirm("Do you want to delete this.")
        services.delete(event.target.id)
            .then(res => {
                setPersons(persons.filter(person => {
                    return !(person.id === event.target.id)
                }))
            })
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

    //Effect    
    useEffect(() => {
        services.getAll()
            .then(res => {
                setPersons(res)
            })
    }, [])

    // Elements
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
            <Persons display={display} deletePerson={deletePerson} />

        </div>

    )
}

export default App