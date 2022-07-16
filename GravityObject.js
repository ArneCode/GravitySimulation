class GravityObject{
  constructor(universe,pos,vel,mass){
  this.universe=universe
    this.pos=pos
    this.vel=vel
    this.mass=mass
    this.path=[]
    this.size=Math.sqrt(this.mass)
    this.showLine=false
  }
  updatePos(){
        if(this.showLine){

        this.path.push(this.pos)
    this.showPath()
          }
    this.pos=this.pos.add(this.vel.mult(this.universe.speed))

    
  }
  doShowLine(doit=true){
    this.showLine=doit
    return this
  }
  updateAttraction(){
    for(let other of this.universe.objects){
      if(other!=this){
        let distsq=this.pos.distsqTo(other.pos)
        let dir=this.pos.dirTo(other.pos)
        let force=dir.mult(this.universe.G*this.mass*other.mass/distsq)
        this.vel=this.vel.add(force.div(this.mass))
        if(distsq<(this.size+other.size)**2){
          //this.collide(other)
        }
      }
    }
  }
  collide(other){
    let pos=this.pos.mult(this.mass).pointBetween(other.pos.mult(other.mass)).div(this.mass+other.mass)
    let vel=this.vel.mult(this.mass).average(other.vel.mult(other.mass)).div(this.mass+other.mass)
    let mass=this.mass+other.mass
    let child=new GravityObject(this.universe,pos,vel,mass)//.doShowLine(false)
    let pmass=this.universe.mass
    this.universe.addObject(child)
    //console.log(this.universe.objects.indexOf(child))
    this.universe.removeObject(other)
    this.universe.removeObject(this)
    let currmass=this.universe.mass
    if(pmass!=currmass){
      console.log(this.mass+other.mass-child.mass,pmass,currmass,this.universe.objects.indexOf(child),child)
    }
  }
  showPath(){
    //console.log(path)
    let ppos=0
    for(let pos of this.path){
      line((ppos.x+campos.x)*camzoom+width/2,(ppos.y+campos.y)*camzoom+height/2,(pos.x+campos.x)*camzoom+width/2,(pos.y+campos.y)*camzoom+height/2)
      ppos=pos
    }
}
  update(){
    this.updateAttraction()
    this.updatePos()

  }
  show(campos,camzoom){
    let size
    if(false){
      strokeWeight(10)
      stroke(0,255,0)
    }else{
      strokeWeight(this.size*camzoom)
    }
    //ellipseMode(CENTER)
    point((this.pos.x+campos.x)*camzoom+width/2,(this.pos.y+campos.y)*camzoom+height/2)
    stroke(0)
  }
  
}