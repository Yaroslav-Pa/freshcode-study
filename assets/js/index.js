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

  const createdId = createId();

  const paragraf = document.createElement('p');
  paragraf.textContent = inputToDo.value;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'taskButton';

  const createdDiv = document.createElement('div');
  createdDiv.className = `task ${createdId}`;
  createdDiv.addEventListener('click', divListener);

  createdDiv.appendChild(paragraf);
  createdDiv.appendChild(deleteButton);

  todos.push({ id:createdId, isDone: false, text: inputToDo.value });

  inputToDo.style.border = '';
  inputToDo.value = '';
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
  console.log(todos);
  if (e.target.tagName === 'BUTTON') {
    todos = todos.filter(
      (item) => !e.currentTarget.classList.contains(item.id)
    );
    e.currentTarget.remove();
  }else
  {
    for (const item of todos){
      if (item.id === +e.currentTarget.classList[1]){
        item.isDone ? item.isDone = false : item.isDone = true;
        e.currentTarget.classList.toggle('taskDone');
      }
    }
  }
}