const password = document.getElementById('password')
const background = document.getElementById('background')

password.addEventListener('input', (e) => {
  const input = e.target.value
  const length = input.length

  // Blur effect
  const blurValue = Math.max(0, 20 - length * 2)
  background.style.filter = `blur(${blurValue}px)`

  // Strength logic
  let strength = "Weak"

  if (length > 8 && /[A-Z]/.test(input) && /[0-9]/.test(input) && /[@$!%*?&]/.test(input)) {
    strength = "Strong"
  } else if (length > 5) {
    strength = "Medium"
  }

  console.log("Password Strength:", strength)
})