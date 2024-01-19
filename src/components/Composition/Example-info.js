class Corporation {
  constructor(name, employees, ceo) {
    this.name = name;
    this.employees = employees;
    this.ceo = ceo;
  }
}

class Employee {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

const corp1 = new Corporation('Google', [
  new Employee('Name 1', 'email1@corp.com'),
  new Employee('Name 1', 'email1@corp.com'),
  new Employee('Name 1', 'email1@corp.com'),
]);

console.log(corp1);

// спадкування - відношення "is a"
// композиція - відношення "has a"

// Приклад композиції:


/*
<List listname="numbers">
  <li>1123</li>
  <li>1123</li>
  <li>1123</li>
</List>
<Bordered isFlex padding="25px" border="30px solid black" radius='40px'>
  <div>asdasdasdasdasd</div>
  <List listname="numbers 2">
    <li>2</li>
    <li>1</li>
    <li>3</li>
  </List>
</Bordered>
*/



<Avatar src="sadsdsadsa"/>

function Avatar ({src, alt}) {
  return <img src={src} alt={alt}/>
}

<GuestAvatar />

// function GuestAvatar ({ alt}) {
//   return <img src={'gefaultPicsrc.jpg'} alt={alt}/>
// }

function GuestAvatar ({ alt}) {
  return <Avatar src={'gefaultPicsrc.jpg'} alt={alt}/>
}