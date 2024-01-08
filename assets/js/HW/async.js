let users = {};
const url = 'https://jsonplaceholder.typicode.com/users';

async function getData() {
  try{
    users =(await fetch(url)).json();
  }catch(err){
    throw new Error (err);
  }
}
getData();


new Promise(fetch(url)).then((json)=>json.json()).then()