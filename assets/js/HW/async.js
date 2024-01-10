const url = 'https://jsonplaceholder.typicode.com/users';
const placeToSpawn = document.getElementById('grid');

document.getElementById('async').addEventListener('click', createCardsAsyncAwait);
document.getElementById('promise').addEventListener('click', createCardsPromise);


async function createCardsAsyncAwait() {
  try {
    let userArr = await (await fetch(url)).json();
    userArr.map((user) => createUserCard(user));
  } catch (err) {
    throw new Error(err);
  }
}

function createCardsPromise() {
  fetch(url)
    .then((dataInJson) => dataInJson.json())
    .then((data) =>
      data.map((user) => {
        createUserCard(user);
      })
    )
    .catch((err) => {throw new Error(err)});
}

const createUserCard = ({ name, email, website }) => {
  const createdDiv = createElem('div', '', ['card']);
  createdDiv.append(
    createElem('p', name),
    createElem('p', email),
    createElem('p', website)
  );
  createdDiv.addEventListener('click', (event)=>{
    event.currentTarget.remove();
  })
  placeToSpawn.append(createdDiv);
};

const createElem = (elemType, text = '', styleClasses = []) => {
  const textElem = document.createElement(elemType);
  textElem.textContent = text;
  for (let style of styleClasses){
    textElem.classList.add(style);
  }
  return textElem;
};
