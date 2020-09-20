// const { createStore } = require("redux");

const { createStore } = window.Redux;

const todoList = [
  {
    id: 1,
    name: "read terminologies in bioinformatics paper",
    steps: [
      {
        id: 1,
        name: "step 1"
      }
    ]
  },
  {
    id: 2,
    name: "learn redux",
    steps: [
      {
        id: 1,
        name: "step 1"
      }
    ]
  }
];

const todoListReducer = (state = todoList, action) => {
  if(action.payload) {
    const test = state.map((item) => {
      return parseInt(item.id) === parseInt(action.payload.id) ? action.payload : item;
    });
    return test;
  } else {
    return state;
  }
}

const store = createStore(todoListReducer); // const store = window.Redux.createStore(todoListReducer);

const initialTodoList = store.getState();

const handleSubmitItem = (e) => {
  const selectedID = e.target.getAttribute("id-number");
  const elementInputItemName = document.getElementById("input-item-name");
  if(elementInputItemName) {
    elementInputItemName.value = e.target.innerHTML;
    elementInputItemName.setAttribute("id-number", selectedID);
  }
}

const renderTodolist = (list) => {
  if(!list || !Array.isArray(list)  || list.length <= 0) {
    return;
  }

  const ulElement = document.getElementById("list-todolist");
  ulElement.innerHTML = '';

  for(item of list) {
    const liElement = document.createElement('li');
    liElement.innerHTML = item.name;
    liElement.setAttribute('id-number', item.id);
    liElement.addEventListener('click', (e) => handleSubmitItem(e));
    ulElement.appendChild(liElement);
  }
}

const handleSubmitForm = () => {
  const elementInputItemName = document.getElementById("input-item-name");
  if(elementInputItemName) {
    // handle redux store


    let action = {
      type: '',
      payload: {id: elementInputItemName.getAttribute("id-number"), name: elementInputItemName.value}
    }

    store.dispatch(action);
    const newState = store.getState()
    renderTodolist(newState);
  } else {
    window.alert("Check your submit form handling");
  }
}

store.subscribe(() => {
  // console.log(store.getState());
  // console.log('hi')
});

const elementBtnEditItem = document.getElementById("btn-edit-item");
console.log('Disable button behavior of reloading window');
elementBtnEditItem.addEventListener('click', (e) => {
  e.preventDefault();
  handleSubmitForm();
});

// elementBtnEditItem.addEventListener('click', handleSubmitForm);



renderTodolist(initialTodoList);