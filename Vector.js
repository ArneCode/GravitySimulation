class Vector {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  add(other){
  return(new Vector(this.x+other.x,this.y+other.y))
  }
  mult(n){
   return(new Vector(this.x*n,this.y*n)) 
  }
  div(n){
    return(new Vector(this.x/n,this.y/n)) 
  }
  magsq(){
    return(this.x**2+this.y**2)
  }
  mag(){
    return(Math.sqrt(this.magsq()))
  }
  dirTo(other){
    let xdir=other.x-this.x
    let ydir=other.y-this.y
    return(new Vector(xdir,ydir))
  }
  distsqTo(other){
    return(this.dirTo(other).magsq())
  }
  distTo(other){
    return(Math.sqrt(this.distsqTo(other)))
  }
  pointBetween(other){
    let dir=this.dirTo(other)
    return this.add(dir.div(2))
  }
  average(other){
    let xaverage=this.x+other.x/2
    let yaverage=this.y+other.y/2
    return(new Vector(xaverage,yaverage))
  }
}