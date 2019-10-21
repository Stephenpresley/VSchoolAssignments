const kills = document.baddiesList

kills.addEventListener('submit', function(e){
    e.preventDefault()

    const goombas = kills.goombas.value
    const bob = kills.bobOmbs.value
    const cheep = kills.cheepCheeps.value

    alert(`Your total is: ${(+goombas * 5) + (+bob * 7) + (+cheep * 11)} coins`)

})