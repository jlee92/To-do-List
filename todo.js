let addtoDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById("toDoContainer");
let inputfield = document.getElementById("inputfield");

addtoDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = inputfield.value;
    toDoContainer.appendChild(paragraph);
    inputfield.value="";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration="line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})
