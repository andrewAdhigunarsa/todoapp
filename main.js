

// user clicked on the add button
// If there is any text inside the item field, add that text to the list
document.getElementById('add').addEventListener('click',function(){
  var value = document.getElementById('item').value;
  if(value) {
    addItemTodo(value);
    document.getElementById('item').value = "";
  }
});

// remove the item;
function removeItem(){
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;

  parent.removeChild(item);
}

//move the item to complete item list-style
function completeItem(){
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  var id = parent.id;


//this just saying target equal if the id is 'todo' target element with id completed otherwise target id todo; the "?" is just saying if it's true
  var target= (id==='todo') ? document.getElementById('completed'):document.getElementById('todo');

}

// add new items to the todo list
function addItemTodo(text){

  var list = document.getElementById('todo');

  var item = document.createElement('li');
  item.innerText = text;

  var buttons = document.createElement('div');
  buttons.classList.add('buttons');

  var remove = document.createElement('button');
  remove.classList.add('remove');

  // add click event for removing item
  remove.addEventListener('click',removeItem);


  var complete = document.createElement('button');
  complete.classList.add('complete');


  var clear= document.createElement('i');
  clear.classList.add('material-icons');
  clear.innerText = "highlight_off";


  var tick= document.createElement('i');
  tick.classList.add('material-icons');
  tick.innerText = "done";


  remove.appendChild(clear);
  complete.appendChild(tick);
  buttons.appendChild(remove);
  buttons.appendChild(complete);
  item.appendChild(buttons);

// this will put the new item behind the first item in the list
  list.insertBefore(item, list.childNodes[0]);

}
