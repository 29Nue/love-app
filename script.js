function chonCo() {
  window.location.href = "/yeu.html"
}

  let clickCount = 0 // Đếm số lần click vào “Không”

  function chonKhong() {
    const result = document.getElementById('result')
    const noBtn = document.getElementById('noBtn')
  
    const messages = [
      'Mày dám không hả 😡',
      'Anh chán sống à?',
      'Anh có nhỏ khác rồi hở 😭',
      'Đồ tồi!',
      'Đồ tệ bạc... 💔'
    ]
  
    const images = [
      'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bHdmcHM1a2EydnZxNTQ0d3JuNGFvMWJ4eWd4dXlocmw4Nm16a2NiZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/fU58ZPhgcFPzshukcW/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHBod214OGU4NjE0ZGM4eGRqeGYyNDhrNm12aTZvNnNhOWE1bzFraiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/nEpmIEZz5kCZi/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmx3cjh2aDdsc283NHpsbnhuNjRhaHcyNnFqMnB2aG43ZWY4cTc3NCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/qQdL532ZANbjy/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2s2YWVreGJ0ODliam0yd2ZtcGw5YXI0bWJucXZxMmg2MW5jdXoydSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/cmvG11YwIVob8XlJDo/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWVvM3FkZDZnbG1nemJyZGg4cGJ0ZGxkbGpyN2JjMW1jOHc0N3ptbyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Lv2VhwHrt6ljhvZ6LF/giphy.gif'
    ]
  
    const message = messages[Math.min(clickCount, messages.length - 1)]
    const image = images[Math.min(clickCount, images.length - 1)]
  
    document.body.style.backgroundColor = '#000'
    result.innerHTML = `
      <p style="color:white; font-size: 1.5em;">${message}</p>
      <img src="${image}" width="280" style="margin-top: 12px; border-radius: 12px"/>
    `
  
    document.body.classList.add("shake")
    setTimeout(() => {
      document.body.classList.remove("shake")
    }, 400)
  
    clickCount++
  
    if (clickCount >= messages.length) {
      noBtn.style.display = 'none'
    }
  }
  