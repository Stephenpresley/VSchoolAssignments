const addition = document.add

addition.addEventListener("submit", function(){
    event.preventDefault()

    const add1 = addition.add1.value
    const add2 = addition.add2.value

    document.getElementById("sum").textContent = `Your sum is ${+add1 + +add2}.`
})

const subtract = document.subtract

subtract.addEventListener('submit', function(){
    event.preventDefault()

    const sub1 = subtract.sub1.value
    const sub2 = subtract.sub2.value

    document.getElementById('difference').textContent = `Your difference is ${+sub1 - +sub2}.`
})

const multiply = document.multiply

multiply.addEventListener("submit", function(){
    event.preventDefault()

    const factor1 = multiply.factor1.value
    const factor2 = multiply.factor2.value

    document.getElementById("product").textContent = `Your product is ${+factor1 * +factor2}.`
})