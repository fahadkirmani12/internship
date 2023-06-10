document.addEventListener('DOMContentLoaded', function() {

  
const container1 = document.querySelector('.container1');
const container2 = document.querySelector('.container2');
const items = document.querySelectorAll('.items');

for (let item of items) {
    item.addEventListener('dragstart',dragStart);
    item.addEventListener('dragend',dragEnd);
}

container2.addEventListener('dragover',dragOver);
container2.addEventListener('dragenter',dragEnter);
container2.addEventListener('dragleave',dragLeave);
container2.addEventListener('drop',drop);


function dragStart(e){  
    e.dataTransfer.setData("text/plain", e.target.id);
    e.target.classList.add("dragging");
}

function dragEnd(e){
    e.target.classList.remove("dragging");
}

function dragOver(e){
    e.preventDefault()
}

function dragEnter(e){
    e.preventDefault()
    e.target.classList.add("dragover");
}
function dragLeave(e) {
    container2.classList.remove('dragover');
  }

function drop(e){
    e.preventDefault()
    container2.classList.remove("dragover");
    const itemId = e.dataTransfer.getData("text/plain")
    const item = document.getElementById(itemId)
    container2.appendChild(item)
}

const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', reset);

function reset() {
  container2.innerHTML = '';
  for (const item of items) {
    container1.appendChild(item);
  }
}

});