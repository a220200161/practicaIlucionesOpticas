function dibujarLinea(canva,xInicial,yInicial,xFinal,yFinal){
    
    context= canva.getContext("2d")
    context.beginPath()
    context.moveTo(xInicial,yInicial)
    context.lineTo(xFinal,yFinal)
    context.stroke()
    
}
function dibujarCirculo(canva,x,y,r){
    context=canva.getContext("2d")
    context.beginPath()
    context.arc(x,y,r,0,2*Math.PI)
    context.stroke()
}

let width =document.getElementById("1.1").getAttribute("width")
let height =document.getElementById("1.1").getAttribute("height")

// Bloque del set 1
for(var i=0;i<=200;i+=10){
    dibujarLinea(document.getElementById("1.1"),i,0,i,height)
}
for(var i=0;i<=200;i+=10){
    dibujarLinea(document.getElementById("1.2"),0,i,width,i)
}
for(var i=0;i<=200;i+=10){
    dibujarLinea(document.getElementById("1.3"),0,i,width,i)
    dibujarLinea(document.getElementById("1.3"),i,0,i,height)
}
for(var i=0;i<=200;i+=10){
    dibujarLinea(document.getElementById("1.4"),i,0,width-i,height)
}
for(var i=0;i<=200;i+=10){
    dibujarLinea(document.getElementById("1.5"),0,i,i,0)
    dibujarLinea(document.getElementById("1.5"),width,height-i,width-i,height)
}
for(var i=0;i<=200;i+=10){
    dibujarLinea(document.getElementById("1.6"),width,height-i,width-i,0)
}
for(var i=0;i<=200;i+=10){
    dibujarLinea(document.getElementById("1.7"),0,i,i,width)
    dibujarLinea(document.getElementById("1.7"),width,i,height-i,height)
    dibujarLinea(document.getElementById("1.7"),width,height-i,width-i,0)
    dibujarLinea(document.getElementById("1.7"),0,height-i,i,0)
}
for(var i=0;i<=200;i+=10){
    dibujarLinea(document.getElementById("1.8"),0,i,width,height-i)
}
// Fin del bloque del set 1

// Bloque del set 2
for(var i=0;i<=100;i+=10){
    dibujarLinea(document.getElementById("2.1"),(width/2),(height/2)-i,i,(height/2))
    dibujarLinea(document.getElementById("2.1"),(width/2),(height)-i,(width/2)-i,(height/2))
    dibujarLinea(document.getElementById("2.1"),(width/2),(height/2)-i,width-i,(height/2))
    dibujarLinea(document.getElementById("2.1"),(width/2),(width/2)+i,width-i,(height/2))
}
for(var i=0;i<=100;i+=10){
    dibujarLinea(document.getElementById("2.2"),(width/2),i,i,(height/2))
    dibujarLinea(document.getElementById("2.2"),(width/2),i,width-i,(height/2))
    dibujarLinea(document.getElementById("2.2"),(width/2),height-i,i,(height/2))
    dibujarLinea(document.getElementById("2.2"),(width/2),height-i,width-i,(height/2))
}
for(var i=0;i<=100;i+=10){
    dibujarLinea(document.getElementById("2.3"),i,(height),(width/2),(height)-i)
    dibujarLinea(document.getElementById("2.3"),width/2-i,0,width/2,height/2-i)
    dibujarLinea(document.getElementById("2.3"),width/2+i,0,width/2,height/2-i)
    dibujarLinea(document.getElementById("2.3"),width-i,(height),(width/2),(height)-i)
    dibujarLinea(document.getElementById("2.3"),width/2+i,height/2+i,width-i,i)
    dibujarLinea(document.getElementById("2.3"),i,i,width/2-i,height/2+i)
}

for(var i=0;i<=100;i+=10){
    dibujarLinea(document.getElementById("2.4"),i,(height),(width/2),(height)-i)
    dibujarLinea(document.getElementById("2.4"),0,height/2+i,(width/2)-i,(height/2))
    dibujarLinea(document.getElementById("2.4"),width/2-i,0,width/2,height/2-i)
    dibujarLinea(document.getElementById("2.4"),0,i,i,height/2)
    dibujarLinea(document.getElementById("2.4"),width/2+i,0,width/2,height/2-i)
    dibujarLinea(document.getElementById("2.4"),width/2+i,height/2,width,height/2-i)
    dibujarLinea(document.getElementById("2.4"),width-i,(height),(width/2),(height)-i)
    dibujarLinea(document.getElementById("2.4"),width/2+i,height/2,width,height/2+i)
}

for(var i=0;i<=100;i+=10){
    dibujarLinea(document.getElementById("2.5"),i,0,0,height/2-i)
    dibujarLinea(document.getElementById("2.5"),width/2+i,0,width,i)
    dibujarLinea(document.getElementById("2.5"),i,height-i,width/2+i,height/2+i)
    dibujarLinea(document.getElementById("2.5"),width/2,i,width/2-i,height/2+i)
    dibujarLinea(document.getElementById("2.5"),width/2,i,width/2+i,height/2+i)
}
for(var i=0;i<=50;i+=10){
    dibujarLinea(document.getElementById("2.5"),width/2,(height*3)/4+i,width/2-i,height)
    dibujarLinea(document.getElementById("2.5"),width/2,(height*3)/4+i,width/2+i,height)
}
for(var i=0;i<=100;i+=10){
    dibujarLinea(document.getElementById("2.6"),i,i,width-i,i)
    dibujarLinea(document.getElementById("2.6"),i,i,i,height-i)
    dibujarLinea(document.getElementById("2.6"),i,height-i,width-i,height-i)
    dibujarLinea(document.getElementById("2.6"),width-i,i,width-i,height-i)
}
for(var i=0;i<=100;i+=10){
    dibujarLinea(document.getElementById("2.7"),i,height-i,width-i,height-i)
    dibujarLinea(document.getElementById("2.7"),i,height-i,width/2,i)
    dibujarLinea(document.getElementById("2.7"),width-i,height-i,width/2,i)
}
for(var i=0;i<=100;i+=10){
    dibujarCirculo(document.getElementById("2.8"),width/2,height/2,i)
}
// Fin del bloque del set 2

// Bloque del set 3
for(var i=0;i<=100;i+=10){
    dibujarLinea(document.getElementById("3.1"),i,(height),(width/2),(height)-i)
    dibujarLinea(document.getElementById("3.1"),0,height/2+i,(width/2)-i,(height/2))
    dibujarLinea(document.getElementById("3.1"),width/2-i,0,width/2,height/2-i)
    dibujarLinea(document.getElementById("3.1"),0,i,i,height/2)
    dibujarLinea(document.getElementById("3.1"),width/2+i,0,width/2,height/2-i)
    dibujarLinea(document.getElementById("3.1"),width/2+i,height/2,width,height/2-i)
    dibujarLinea(document.getElementById("3.1"),width-i,(height),(width/2),(height)-i)
    dibujarLinea(document.getElementById("3.1"),width/2+i,height/2,width,height/2+i)
}
for(var i=0;i<=100;i+=10){
    dibujarLinea(document.getElementById("3.2"),i,(height),(width/2),(height)-i)
    dibujarLinea(document.getElementById("3.2"),0,height/2+i,(width/2)-i,(height/2))
    dibujarLinea(document.getElementById("3.2"),width/2-i,0,width/2,height/2-i)
    dibujarLinea(document.getElementById("3.2"),0,i,i,height/2)
    dibujarLinea(document.getElementById("3.2"),width/2+i,0,width/2,height/2-i)
    dibujarLinea(document.getElementById("3.2"),width/2+i,height/2,width,height/2-i)
    dibujarLinea(document.getElementById("3.2"),width-i,(height),(width/2),(height)-i)
    dibujarLinea(document.getElementById("3.2"),width/2+i,height/2,width,height/2+i)
}
for(var i=0;i<=100;i+=10){
    dibujarLinea(document.getElementById("3.3"),i,0,0,(height/2)-i)
    dibujarLinea(document.getElementById("3.3"),width/2+i,0,width,i)
    dibujarLinea(document.getElementById("3.3"),0,height/2+i,i,height)
    dibujarLinea(document.getElementById("3.3"),width/2+i,height,width,height-i)
    dibujarLinea(document.getElementById("3.3"),i,height/2-i,width/2,i)
    dibujarLinea(document.getElementById("3.3"),width-i,height/2-i,width/2,i)
}
for(var i=0;i<=50;i+=10){
    dibujarLinea(document.getElementById("3.3"),width/4+i,(height*3)/4,width/2,(height*3)/4-i)
    dibujarLinea(document.getElementById("3.3"),width/4+i,(height*3)/4,width/2,(height*3)/4+i)
    dibujarLinea(document.getElementById("3.3"),width/2,height/2+i,width/2+i,(height*3)/4)
    dibujarLinea(document.getElementById("3.3"),width/2,height-i,width/2+i,(height*3)/4)
}
for(var i=0;i<=200;i+=10){
    
    dibujarLinea(document.getElementById("3.4"),width,i,height-i,height) 
    dibujarLinea(document.getElementById("3.4"),0,height-i,i,0)
}

for(var i=0;i<=100;i+=10){
    dibujarLinea(document.getElementById("3.5"),i,i,width/2,height/2-i)
    dibujarLinea(document.getElementById("3.5"),width/2,height/2-i,width-i,i)
    dibujarLinea(document.getElementById("3.5"),0,height/2-i,i,i)
    dibujarLinea(document.getElementById("3.5"),width,i,width/2+i,height/2-i)
    dibujarLinea(document.getElementById("3.5"),0,height/2+i,i,height)
    dibujarLinea(document.getElementById("3.5"),width/2+i,height,width,height-i)
}
for(var i=0;i<=50;i+=10){
    dibujarLinea(document.getElementById("3.5"),width/4+i,(height*3)/4,width/2,(height*3)/4-i)
    dibujarLinea(document.getElementById("3.5"),width/4+i,(height*3)/4,width/2,(height*3)/4+i)
    dibujarLinea(document.getElementById("3.5"),width/2,height/2+i,width/2+i,(height*3)/4)
    dibujarLinea(document.getElementById("3.5"),width/2,height-i,width/2+i,(height*3)/4)
}
for(var i=0;i<=100;i+=10){
    dibujarLinea(document.getElementById("3.6"),i,0,0,height/2-i)
    dibujarLinea(document.getElementById("3.6"),width/2+i,0,width,i)
    dibujarLinea(document.getElementById("3.6"),i,height-i,width/2+i,height/2+i)
    dibujarLinea(document.getElementById("3.6"),width/2,i,width/2-i,height/2+i)
    dibujarLinea(document.getElementById("3.6"),width/2,i,width/2+i,height/2+i)
}
for(var i=0;i<=50;i+=10){
    dibujarLinea(document.getElementById("3.6"),width/2,(height*3)/4+i,width/2-i,height)
    dibujarLinea(document.getElementById("3.6"),width/2,(height*3)/4+i,width/2+i,height)
}
for(var i=0;i<=100;i+=10){
    dibujarLinea(document.getElementById("3.7"),i,(height),(width/2),(height)-i)
    dibujarLinea(document.getElementById("3.7"),width/2-i,0,width/2,height/2-i)
    dibujarLinea(document.getElementById("3.7"),width/2+i,0,width/2,height/2-i)
    dibujarLinea(document.getElementById("3.7"),width-i,(height),(width/2),(height)-i)
    dibujarLinea(document.getElementById("3.7"),width/2+i,height/2+i,width-i,i)
    dibujarLinea(document.getElementById("3.7"),i,i,width/2-i,height/2+i)
}
for(var i=0;i<=100;i+=10){
    dibujarLinea(document.getElementById("3.8"),0,height/2+i,(width/2)-i,(height/2))
    dibujarLinea(document.getElementById("3.8"),0,i,i,height/2)
    dibujarLinea(document.getElementById("3.8"),width/2+i,height/2,width,height/2-i)
    dibujarLinea(document.getElementById("3.8"),width/2+i,height/2,width,height/2+i)
    dibujarLinea(document.getElementById("3.8"),i,i,width/2,height/2-i)
    dibujarLinea(document.getElementById("3.8"),width/2,height/2-i,width-i,i)
    dibujarLinea(document.getElementById("3.8"),i,height-i,width/2,height/2+i)
    dibujarLinea(document.getElementById("3.8"),width/2,height/2+i,width-i,height-i)
    //dibujarLinea(document.getElementById("3.8"),width/2,height/2-i,width-i,i)
}

// Fin del bloque del set 3
