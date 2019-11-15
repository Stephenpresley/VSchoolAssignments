const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
function whatDay(startDay, numOfDays) {
    const index = week.indexOf(startDay)
    const finalIndex = index + numOfDays % 7
    return week[finalIndex]
}

console.log(whatDay('Wednesday', 5))
