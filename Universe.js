class Universe{
  constructor(){
    this.objects=[]
    this.speed=0.01
    this.G=0.5
  }
  get mass(){
    let mass=0
    for(let o of this.objects)
      mass+=o.mass
    return mass
  }
  addObject(object){
    this.objects.push(object)
  }
  removeObject(object){
    let index=this.objects.indexOf(object)
    if(index>-1)
    this.objects.splice(index,1)
  }
  update(){
    for(let object of this.objects){
      object.updateAttraction()
    }
    for(let object of this.objects){
      object.updatePos()
    }
  }
  show(campos,camzoom){
    for(let object of this.objects){
      object.show(campos,camzoom)
    }
  }
}