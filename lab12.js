document.addEventListener("DOMContentLoaded", () => {
    canvas = document.getElementById("c")
    if(!canvas.getContext){ throw new Error('Brak funkcji getContext')}
    c = canvas.getContext("2d")

// c.fillRect(x,y,w,h)
// c.strokeRect(x,y,w,h)
//clearRect dziala jak prostokatna gumka w Paincie
    c.fillStyle="pink"
    c.fillRect(50,50,100,100)
    c.strokeStyle = "deeppink"
    c.strokeRect(50,250,100,100)
    c.clearRect(70,70,60,60)

    // c.lineTo(x,y)
    // c.moveTo(x,y)
    c.beginPath()
    c.lineWidth = 5
    c.moveTo(200,300)
    c.lineTo(250,350)
    c.lineTo(330,270)
    c.stroke()
    //wypelnienie domknie automatycznie trojkat
    c.fill()
    c.closePath()

    // ZAWSZE dzielic części na ścieżki! 
    // close, stroke i fill domykaja sciezke

    c.beginPath()
    c.lineWidth = 1
    c.moveTo(100,260)
    c.lineTo(60,340)
    c.lineTo(140,340)
    //najpierw domykanie sciezki - closePath, potem pokaz obraz - stroke
    c.closePath()
    c.stroke()

    //Łuki
    // c.arc(x,y,r,s,e,*c)
    // x, y - miejsce wbijania cyrkla
    // r - promien
    // s,e - wartosci (0, pi/2, pi, 1.5pi, 2pi)
    // *c - kierunek zgodny z wskazówkami zegara
    c.beginPath()
    c.fillStyle = 'lightpink'
    c.strokeStyle = 'yellow'
    c.moveTo(200,70)
    c.arc(200,70,20,0,Math.PI*0.5)
    c.fill()
    c.stroke()
  

    c.beginPath()
    c.fillStyle = 'lightpink'
    c.strokeStyle = 'yellow'
    c.moveTo(250,70)
    c.arc(250,70,20,0,Math.PI)
    c.fill()
    c.stroke()
  

    c.beginPath()
    c.fillStyle = 'lightpink'
    c.strokeStyle = 'yellow'
    c.moveTo(300,70)
    c.arc(300,70,20,0,Math.PI*1.5)
    c.fill()
    c.stroke()
  


    c.beginPath()
    c.fillStyle = 'lightpink'
    c.strokeStyle = 'yellow'
    c.moveTo(350,70)
    c.arc(350,70,20,0,Math.PI*2)
    c.fill()
    c.stroke()

    c.closePath()
  
    c.strokeStyle = '#a00'
    c.fillText('test textu',400,300)
    c.font = '20px Courier'
    c.strokeText('Test Stroke text',400,350)



}


)



// CanIUse.com - do sprawdzania contextu