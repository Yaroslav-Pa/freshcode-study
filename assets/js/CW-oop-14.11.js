class Animal{
  #name;
  #type;
  constructor(name, type){
    this.name = name;
    this.type = type;
  }

  get name(){
    return this.#name
  }

  get type(){
    return this.#type;
  }

  set name(newName){
    if (typeof newName !=='string' || newName.trim() === ''){
      throw new TypeError('Name of animal may be only string and not empty')
    }
    return this.#name = newName;
  }

  set type(newType){
    if (typeof newType !=='string' || newType.trim() === ''){
      throw new TypeError('Type of animal may be only string and not empty')
    }
    return this.#type = newType;
  }

  voice(){
    return `${this.name} відтворює звуки`
  }

  move(){
    return `${this.name} рухається`
  }
}

class Snake extends Animal{
  constructor(name) {
    super(name, 'Snake')
  }

  voice(){
    return `${this.name} шипить`
  }

  move(){
    return `${this.name} повзе`
  }
}

class Eagle extends Animal{
  constructor(name) {
    super(name, 'Eagle')
  }

  voice(){
    return `${this.name} курликає`
  }

  move(){
    return `${this.name} починає летіти?`
  }
}

const snake1 = new Snake('Snek');
const eagle1 = new Eagle('USA');
const animal = new Animal('Dog1', 'Dog');