import React from 'react';
import Person from './Person'

const PeopleContainer = (props) => {
    const peopleMap = props.people.map((person, i) => <Person key={i + person.fullName}
                                                                name={person.fullName}
                                                                age={person.age}
                                                                />)
    
    return (
        <div>
            {peopleMap}
        </div>
    );
};

export default PeopleContainer;