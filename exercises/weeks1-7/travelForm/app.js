const info = document.myForm

info.addEventListener('submit', function(e){
    e.preventDefault()

    const fName = info.firstName.value
    const lName = info.lastName.value
    const age = info.age.value
    const gender = info.gender.value
    const vet = info.veteran.value
    const destination = info.destination.value
    const foodRestrictions = info.foodRestrictions
    const foodRestrictionsArr = []
    for(let i = 0; i < foodRestrictions.length; i++){
        if(foodRestrictions[i].checked){
            foodRestrictionsArr.push(foodRestrictions[i].value)
        }
    }
    alert(
        `
        First Name: ${fName}
        Last Name: ${lName}
        Age: ${age}
        Gender: ${gender}
        Location: ${destination}
        Dietary Restrictions: ${foodRestrictionsArr.join(', ')}
        Veteran?: ${vet}
        `
    )
})
