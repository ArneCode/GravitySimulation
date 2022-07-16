let universe
let campos,camzoom=0.05
let speedS
let speed=1
function setup() {
  pixelDensity(3)
  campos=new Vector(0,0)
  createCanvas(windowWidth, windowHeight);
  universe=new Universe()
  for(let i=0;i<60;i++){
    let pos=new Vector(random(-width/2,width/2),random(-height/2,height/2))
    let vel=new Vector(random(-500,500),random(-500,500))
    let object=new GravityObject(universe,pos,vel,random(2,20))
    universe.addObject(object)
  }
                       
  universe.addObject(new GravityObject(universe,new Vector(0,0),new Vector(0,0),5000))
  universe.addObject(new GravityObject(universe,new Vector(200,60),new Vector(0,-600),10).doShowLine())
    universe.addObject(new GravityObject(universe,new Vector(-6000,60),new Vector(0,0),10000))
  
  /*speedS=createSlider(1,20,1).changed(()=>{
    speed=speedS.value()
  })*/
  let mass=0
  for(let o of universe.objects){
    mass+=o.mass
  }
  console.log(mass)
}

function draw() {
  for(let i=0;i<speed;i++){
    //campos=universe.objects[1].pos
  background(255);
  universe.update()
  universe.show(campos,camzoom)
  if(keyIsPressed){
    keyIsBeeingPressed()
  }
  fill(255,0,0)
  strokeWeight(1)
  circle(width/2+campos.x*camzoom,height/2+campos.y*camzoom,3)
  
  }
  //console.log(this.universe)
}
function keyIsBeeingPressed(){
  //console.log(keyCode)
  switch(keyCode){
    case UP_ARROW:{
      campos=campos.add(new Vector(0,10/camzoom))
      break;
    }
    case DOWN_ARROW:{
      campos=campos.add(new Vector(0,-10/camzoom))
      break;
    }
    case LEFT_ARROW:{
      campos=campos.add(new Vector(10/camzoom,0))
      break;
    }
    case RIGHT_ARROW:{
      campos=campos.add(new Vector(-10/camzoom,0))
     break; 
    }
    
  }
}
function mouseWheel(event){
  if(event.delta>0){
    camzoom/=1.2
  }else if(event.delta<0){
    camzoom*=1.2
  }
}