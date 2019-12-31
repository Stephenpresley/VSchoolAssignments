import React from 'react'
import Vacation from './Card'
import VacationInfo from './vacations.json'

const VacationContainer = () => {
    const vacationMap = VacationInfo.map((vacation, i) => <Vacation key={i + vacation.place}
                                                                    place={vacation.place}
                                                                    price={vacation.price}
                                                                    time={vacation.timeToGo}
                                                                    />)
    return (
        <div className="vacation-container">
            {vacationMap}
        </div>
    )
}

export default VacationContainer