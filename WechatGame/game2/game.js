const canvas = wx.createCanvas()

const context = canvas.getContext('2d')
context.fillStyle = 'pink'

const { windowWidth, windowHeight} = wx.getSystemInfoSync()
const rectX = canvas.width / 2 - 50
let rectY = 0
const image = wx.createImage()
const imgX = canvas.width / 2 - 50
let imgY = 500
function drawRect(x, y) {
  context.clearRect(0, 0, windowWidth, windowHeight)
  context.fillRect(x, y, 100, 100)
}
setInterval(function(){
  drawRect(rectX, rectY++)
  if (rectY > windowHeight) {
    rectY = 0
  }
  context.drawImage(image, imgX, imgY)
},16)
image.onload = function() {
  context.drawImage(image, imgX, imgY)
}
image.src = 'img/x.png'
let touchX = imgX
let touchY = imgY

wx.onTouchMove(function (res) {
  context.clearRect(touchX, touchY, 100, 100); // 清除画布上原有的飞机
  touchX = res.changedTouches[0].clientX // 重新判断当前触摸点x坐标
  touchY = res.changedTouches[0].clientY // 重新判断当前触摸点y坐标
  context.drawImage(image, touchX, touchY);
})