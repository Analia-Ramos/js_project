
const rooms = [
    {
        id: 1,
        name: "Shared room",
        rate: 210,
        availability: 5,
        bathroom: "shared",
    },
    {
        id: 2,
        name: "Shared room",
        rate: 250,
        availability: 2,
        bathroom: "private",
    },
    {
        id: 3,
        name: "Girls room",
        rate: 230,
        availability: 2,
        bathroom: "private"
    },
    {
        id: 4,
        name: "Private room",
        rate: 300,
        availability: 2,
        bathroom: "shared",
    },
    {
        id: 5,
        name: "Private room",
        rate: 330,
        availability: 2,
        bathroom: "private",
    },
]

let roomBooking = document.getElementById("roomBooking");

let reservation = [];

rooms.forEach((room)=>{

    let content = document.createElement("div")
    content.className = "card"
    content.innerHTML = `
    <h4>${room.name}</h4>
    <p>${room.rate}</p>
    `;

    roomBooking.append(content)

    // button book online
    let bookOnline = document.createElement("button")
    bookOnline.innerText = "Book Online"
    bookOnline.className = "btn btn-outline-danger"

    content.append(bookOnline)

     //adding reservations "cart"
    bookOnline.addEventListener("click", ()=>{
        
        reservation.push({
            id: room.name,
            rate: room.rate,
            availability: room.availability,
        })
        console.log(reservation)


let showReservation = document.getElementById("showReservation")
showReservation.classList.add("showReservation")
        
    reservation.forEach((room) => {
    let seeReservationsCart = document.createElement("div")
        console.log(seeReservationsCart)
        
        seeReservationsCart.classList.add("card")
        seeReservationsCart.innerHTML = `
            <h4> ${room.name} </h4>
            <p>Rate $ ${room.rate}</p>
            <button onclick = "deleteItem" class= "btnDelete btn btn-outline-danger"> Remove </button>
            `;

        showReservation.append(seeReservationsCart)
        })
    })
})

// let email = JSON.stringify(localStorage.setItem("email"))
// function store(){ 
//     let saveEmail = document.getElementById("email").value;
// }
// store()

let inputEmail= document.getElementById("email");
localStorage.setItem("email", inputEmail.value)