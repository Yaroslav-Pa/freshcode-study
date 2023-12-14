class Fish{
  // по нормально для них сетер та гетер зробити
  #name;
  #type;
  #ration;
  #state;
  constructor(name, type, ration, state) {
    this.#name = name;
    this.#type = type;
    this.#ration = ration;
    this.#state = state;
  }

  swim(){
    if (this.state === 'dead'){
      throw new Error('This fish is dead')
    }
    console.log(`now swiming`)
    this.state = 'swiming'
  }

  static isFish = (obj) => obj instanceof Fish
}

class Shark extends Fish{
  constructor(name, type, state){
    super(name, type, 'carnivore', state)
  }

  hunting(fish){
    if (!Fish.isFish(fish)){
      throw new Error('Shark is too small to hunt on something other than fish')
    }

    if (Math.random()>0.3){
      fish.state='dead';
      this.state='ate';
    }else{
      this.state='hungry';
    }
    return this
  }
}
const fish1 = new Fish('Danny', 'Puffer fish', 'omnivore','alive')
const shark1 = new Shark('Larry', 'Tiger shark', 'alive')