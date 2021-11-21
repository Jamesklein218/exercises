import React from "react";

const Persons = ({ display, deletePerson }) => {
    return (
        <div>
            {display.map(person => {
                return (
                    <div key={person.id}>
                        <p>
                            {person.name} {person.number}
                        </p>
                        <button
                            id={person.id}
                            onClick={deletePerson}
                        >delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Persons