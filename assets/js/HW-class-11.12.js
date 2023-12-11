class Employee {
  constructor(firstName, lastName, isMan, payRate, hoursWorked){
    this.firstName = firstName;
    this.lastName = lastName;
    this.isMan = isMan;
    this.payRate = payRate;
    this.hoursWorked = hoursWorked;
  }

  countPayment(){
    return this._payRate * this._hoursWorked
  }

  get firstName(){
    return this._firstName;
  }

  get lastName(){
    return this._lastName;
  }

  get fullName(){
    return `${this._firstName} ${this._lastName}`;
  }

  get isMan(){
    return this._isMan;
  }

  get payRate(){
    return this._payRate;
  }

  get hoursWorked(){
    return this._hoursWorked;
  }

  set firstName(firstName){
    if (typeof firstName !== 'string' || !firstName.trim()){
      throw new TypeError("Fullname need to be string and cant be empty")
    }
    this._firstName = firstName;
  }
  
  set lastName(lastName){
    if (typeof lastName !== 'string' || !lastName.trim()){
      throw new TypeError("Fullname need to be string and cant be empty")
    }
    this._lastName = lastName;
  }

  set fullName(fullName){
    [this.firstName, this.lastName] = fullName.split(' ');
  }

  set isMan(isMan){
    if (typeof isMan !== 'boolean'){
      throw new TypeError('Pay rate need to be boolean')
    }
    this._isMan = isMan;
  }

  set payRate(payR){
    if (typeof payR !== 'number'){
      throw new TypeError('Pay rate need to be number')
    }
    if(payR<0){
      throw new RangeError('Pay rate can not be <0')
    }
    this._payRate = payR;
  }

  set hoursWorked(hours){
    if (typeof hours !== 'number'){
      throw new TypeError('Hours worked need to be number')
    }
    if(hours<0){
      throw new RangeError('Hours worked can not be <0')
    }
    this._hoursWorked = hours;
  }
}

const employee1 = new Employee('Oleg', 'Olegovich', true, 40, 120)