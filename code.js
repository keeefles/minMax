let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

function Max() {
    let output1 = Math.max(...numbers)
    document.querySelector('[data-result1]').textContent = output1
}
function Min() {
    let output2 = Math.min(...numbers)
    document.querySelector('[data-result2]').textContent = output2
}

let highest = document.getElementById('max')
highest.addEventListener('click', Max )

let lowest = document.getElementById('min')
lowest.addEventListener('click', Min )
