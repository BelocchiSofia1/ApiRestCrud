
const url = 'https://647d43f1af98471085498f2e.mockapi.io/Users'

let tbody = document.getElementById("tbody")
let table = document.getElementById("table")

//peticion con get
fetch(url) //Traer datos de la Api
.then(res => res.json()) //recibimos resp y la convertimos en obj JS
//itero con mi objeto
.then((data)=>

//consigo la info y la guardo en variables
data.forEach((element) => {
    let id = element.id;
    let name = element.name;
    let lastName = element.lastName;
    let adress = element.adress;
    let city = element.city;
    let email = element.email;
    let phone = element.phone;

    //creamos las partes de la tabla
    let td0 = document.createElement("td");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");


    //asignamos los valores que traemos de la api
    td0.textContent = id;
    td1.textContent = name;
    td2.textContent = lastName;
    td3.textContent = adress;
    td4.textContent = city;
    td5.textContent = email;
    td6.textContent =  phone;

    //contenedor de filas
    let tr = document.createElement ("tr")
    tr.className = "buscador";


    //agrega cada hijo al contenedor de filas 
    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);

    //agregando 
    tbody.appendChild(tr);
    table.appendChild(tbody);
    })
);
//------------------POST-------------------------

//const form = document.getElementById("form");
const openModalAdd = document.getElementById("open-modal-add");
const modalAdd = document.getElementById("modal-add");
const closeModalAdd = document.getElementById("close-modal-add");
const submitAdd = document.getElementById("submitAdd");

openModalAdd.addEventListener("click", () => {
modalAdd.showModal();
});
closeModalAdd.addEventListener("click", () => {
  modalAdd.close();
});

//funcion que agrega el usuario
function addOne(element){
    fetch (url, {
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(element),
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
}

//escucha del evento click para añadir el nuevo Usuario
submitAdd.addEventListener("click", () => {
    const name = document.querySelector('#name');
    const lastName = document.querySelector('#lastName');
    const address = document.querySelector('#address');
    const city = document.querySelector('#city');
    const email = document.querySelector('#email');
    const phone = document.querySelector('#phone');

    const newUser = {
        name : name.value,
        lastName: lastName.value,
        address: address.value,
        city: city.value,
        email: email.value,
        phone: phone.value,
    }
    addOne(newUser) 
})

//--------------------------------PUT--------------------------
const openModalModify = document.getElementById('open-modal-modify');
const cleanModify = document.getElementById('modifyUser');
const modalModify = document.getElementById("modal-modify");
const closeModalModify = document.getElementById("close-modal-modify");
const submitModify = document.getElementById("submitModify");

openModalModify.addEventListener("click", () => {
    modalModify.showModal();
});
cleanModify.addEventListener('click', () => {
})
closeModalModify.addEventListener("click", () => {
    modalModify.close();
});

//funcion para modificar el usuario 
function updateOne(id, user) {
    fetch(url + `/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }

//boton de escucha para poder modificarlo
submitModify.addEventListener('click', () => {
    const id = document.getElementById('id-modify');
    const name = document.querySelector('#name-modify');
    const lastName = document.querySelector('#lastName-modify');
    const address = document.querySelector('#address-modify');
    const city = document.querySelector('#city-modify');
    const email = document.querySelector('#email-modify');
    const phone = document.querySelector('#phone-modify');

    const user= {
        id: id.value,
        name: name.value,
        lastName: lastName.value,
        address: address.value,
        city: city.value,
        email: email.value,
        phone: phone.value,       
    }
   updateOne(id.value, user)
});

//----------------DELETE-------------------------
const openModalDelete = document.getElementById('open-modal-del');
const cleanDelete = document.getElementById('btn-clean-del')
const modalDelete = document.getElementById("modal-del");
const closeModalDelete = document.getElementById("close-modal-del");
const submitDelete = document.getElementById("btn-submit-del");

openModalDelete.addEventListener("click", () => {
    modalDel.showModal();
});
closeModalDelete.addEventListener("click", () => {
    modalDel.close();
});
cleanDelete.addEventListener('click', () => {
})

//funcion para borrar un usuario 
submitDelete.addEventListener("click", () => {
    function deleteOne(id) {
      fetch(url + `/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
}

    deleteOne(idDelete.value);
});

//-----------------Buscador----------------------
//const search = document.getElementById("search")

document.addEventListener("keyup", (e) => {
    if (e.target.matches("#search")) {
      document.querySelectorAll(".buscador").forEach((user) => {
       if (
          user.firstElementChild.nextSibling.textContent
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        ) {
          console.log("user ok");
      }
    });
}
});
