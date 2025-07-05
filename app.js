const express = require('express')
const path = require('path')

const app = express()
const PORT = 3000

// Cấu hình thư mục public cho file CSS, JS
app.use(express.static(path.join(__dirname, 'public')))

// Route hiển thị trang chính
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

// ✅ Route hiển thị trang tình yêu
app.get('/yeu', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'love.html'))
})

// ✅ Khởi động server - đặt CUỐI CÙNG
app.listen(PORT, () => {
  console.log(`Server đang chạy tại: http://localhost:${PORT}`)
})
