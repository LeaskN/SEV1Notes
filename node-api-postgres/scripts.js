let url = 'http://localhost:3000/people';
let allIds = [];

// fetch('http://localhost:3000/people', {method: 'GET'})
// .then(res => res.json())
// .then(res => updatePage(res))
// .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

let container = document.querySelector('.container');
let create = document.querySelector('.create');
let update = document.querySelector('.update');
let del = document.querySelector('.delete');

let firstNameCreate = document.querySelector('.firstNameCreate');
let lastNameCreate = document.querySelector('.lastNameCreate');
let idUpdate = document.querySelector('.idUpdate');
let firstNameUpdate = document.querySelector('.firstNameUpdate');
let lastNameUpdate = document.querySelector('.lastNameUpdate');
let deleteId = document.querySelector('.deleteId');

create.addEventListener('click', addPerson);
update.addEventListener('click', updatePerson);
del.addEventListener('click', removeLast);

function addPerson(event){
    let name = {
        first: firstNameCreate.value,
        last:  lastNameCreate.value
    }
    fetch('http://localhost:3000/people', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(name)
    })
    .then(res=> console.log(res) )
    .then(res => { return res.json() })
    .catch(e => console.log(e))

    updatePage();
}

function updatePerson(){
    let name = {
        first: firstNameUpdate.value,
        last:  lastNameUpdate.value,
    }
    fetch(`http://localhost:3000/people/${idUpdate.value}`, { 
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(name)
    })
    .then(res => console.log(res) )
    .then(res =>  res.json() )
    .catch(e => console.log(e))
}

function updatePage(){
    container.innerHTML = ' ';
    fetch('http://localhost:3000/people', {method: 'GET'})
    .then(res => res.json())
    .then(res => {
        for (let i = 0; i < res.length; i++) {
        const element = res[i];
        allIds.push(element.id);
        console.log(element);

        let person = document.createElement('h1');   

        person.innerHTML = `${element.first} ${element.last}`; 

        container.prepend(person);
    }})
    .catch((e) => console.log(e))
}

function removeLast(){
    let idToRemove = allIds[allIds.length-1];

    console.log(idToRemove)
 
    fetch(`http://localhost:3000/people/${deleteId.value}`, { 
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(res=> console.log(res) )
    .catch(e => console.log(e))

    updatePage();    
}
updatePage();