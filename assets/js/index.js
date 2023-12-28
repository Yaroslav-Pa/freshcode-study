const doToForm = document.getElementById('toDoForm');
const taskList = document.getElementById('listBox');
const inputToDo = doToForm.elements[0];

let todos = [];

doToForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!(inputToDo.value.trim() !== '')) {
    inputToDo.style.border = '2px solid red';
    throw new Error('Task need to be not empty');
  }

  const paragraf = document.createElement('p');
  paragraf.textContent = inputToDo.value;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'taskButton';

  const createdDiv = document.createElement('div');
  createdDiv.className = `task`;
  createdDiv.dataset.id = createId();
  createdDiv.addEventListener('click', divListener);

  createdDiv.appendChild(paragraf);
  createdDiv.appendChild(deleteButton);

  todos.push({ id:createdDiv.dataset.id, isDone: false, text: inputToDo.value });

  inputToDo.style.border = '';
  doToForm.reset();
  taskList.append(createdDiv);
});

const createId = () => {
  if (todos.length === 0) {
    return 1;
  } else {
    let idArr = [];
    todos.forEach((item) => {
      idArr.push(item.id);
    });
    return (Math.max(...idArr) + 1);
  }
};


const divListener = (e) => {
  if (e.target.tagName === 'BUTTON') {
    todos = todos.filter(
      (item) => !(e.currentTarget.dataset.id === item.id)
    );
    e.currentTarget.remove();
  }else
  {
    for (const item of todos){
      if (item.id === e.currentTarget.dataset.id){
        item.isDone ? item.isDone = false : item.isDone = true;
        e.currentTarget.classList.toggle('taskDone');
      }
    }
  }
}