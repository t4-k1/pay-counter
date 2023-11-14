const wage = prompt('What is your hourly wage?')
const math = wage / 60 / 60 / 10
let earnings = 0

function doMath() {
  earnings += math
  document.getElementById('earnings').textContent = `$${earnings.toFixed(2)}`
}

setInterval(doMath, 100)
