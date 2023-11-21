// const user1 = {
//   name: "Vasil",
//   surname: "Gonchar",
//   isMan: true,
//   numberOfMessages: 0,
//   printUser: function(){
//     console.log('Користувач'+this.name+' '+this.surname+' '+ (this.isMan? "чоловічої ": 'жіночої ')+'статі написав '+this.numberOfMessages+ ' повідомлень')
//   },
//   sendMessage: (text) => {
//     console.log('Користувач'+this.name+' '+this.surname+' написав "'+text+'"');
//     this.numberOfMessages++;
//   }
// }

function User(name, surname, isMan, numberOfMessages){
  this.name = name;
  this.surname = surname;
  this.isMan = isMan;
  this.numberOfMessages = numberOfMessages;
  this.printUser = function(){
    console.log('Користувач '+this.name+' '+this.surname+' '+ (this.isMan? "чоловічої ": 'жіночої ')+'статі написав '+this.numberOfMessages+ ' повідомлень')
  };
  this.sendMessage = (text) => {
    console.log('Користувач '+this.name+' '+this.surname+' написав "'+text+'"');
    this.numberOfMessages++;
  };
}

let user1 = new User('Anna', 'Newoi', false, 11);
let user2 = new User('Allan', 'Weak', true, 5);