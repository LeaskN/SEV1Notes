// const url = 'http://localhost:3000/people';
const url = 'http://database-2.cnuypb0q01wm.us-east-1.rds.amazonaws.com';

const container = document.querySelector('.container');
const create = document.querySelector('.create');
const update = document.querySelector('.update');
const del = document.querySelector('.delete');

const firstNameCreate = document.querySelector('.firstNameCreate');
const lastNameCreate = document.querySelector('.lastNameCreate');
const firstNameUpdate = document.querySelector('.firstNameUpdate');
const lastNameUpdate = document.querySelector('.lastNameUpdate');
const idUpdate = document.querySelector('.idUpdate');
const deleteId = document.querySelector('.deleteId');

create.addEventListener('click', addPerson);
update.addEventListener('click', updatePerson);
del.addEventListener('click', removeLast);

function addPerson(){
    let name = {
        first: firstNameCreate.value,
        last: lastNameCreate.value
    }
    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(name)
    })
    .catch(e => console.log(e))

    updatePage();
}

function updatePerson(){
    let name = {
        first: firstNameUpdate.value,
        last: lastNameUpdate.value
    }
    fetch(`${url}/${idUpdate.value}`, {
       method: 'PUT',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify(name)
    })
    .catch(e => console.log(e))

    updatePage();
}

function removeLast(){

    fetch(`${url}/${deleteId.value}`,{
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json'
        }
    })
    .catch(e=>console.log(e))
}

function updatePage(e){
    e.preventDefault()
    fetch(url)
    .then(res => res.json())
    .then(res => {
        for (let i = 0; i < res.length; i++) {
            const element = res[i];
            console.log(element);
            
            let person = document.createElement('h1');

            person.innerHTML = `${element.first} ${element.last}`

            container.prepend(person);
        }
    })
    .catch(e => console.log(e))
}

updatePage();
