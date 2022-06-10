let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let createdDate = new Date();
    let table = document.getElementById('data');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-date').value;
    row.insertCell(1).innerHTML = document.getElementById('new-exercise').value;
    row.insertCell(2).innerHTML = document.getElementById('new-reps').value;
    row.insertCell(3).innerHTML = document.getElementById('new-rounds').value;
    row.insertCell(4).innerHTML = document.getElementById('new-duration').value;
    let actions = row.insertCell(5);
    actions.appendChild(createdDeleteButton(id++));
    document.getElementById('new-task').value = '';
})

function createdDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}