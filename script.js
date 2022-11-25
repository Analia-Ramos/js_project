// //ingresar usuario

// let welcome = alert("Welcome to Beach House Hostel");

// function username(){ 
//     const user = prompt("Introduce your username")
    
//     if (user === ""){
//         prompt("Sign in")
//     }else{
//         alert("Username: " + user);
//     }
// }
// username();


// //ingresar contraseña

// let password = 123456;
// let input = Number(prompt("Introduce your password"));


// while (password !== input){
//     alert("Incorrect password");
//     input = prompt("Please, try again");
// }


// // //precios de habitaciones

// let sharedRoom = 20;
// let girlsRoom = 30;
// let privateRoom = 40;

// let chooseRoom = prompt("Choose your room");
// let rate = chooseRoom;

// function roomRate (rate){
//     if ((rate === "Shared Room") || (rate === "shared room") || (rate === "shared")){
//         alert("Shared room rate is $" + sharedRoom + " per night");

//     }else if ((rate === "Girls Room") || (rate === "girls room") || (rate === "girls")){
//         alert("Girls room rate is $" + girlsRoom + " per night");

//     }else if ((rate === "Private Room") || (rate === "private room") || (rate === "private")){
//         alert("Private room rate is $" + privateRoom + " per night");

//     }else{
//         prompt("Choose the type of room you wish");
//     }

//     let ask = prompt("Would you like to book now?")
//             let response = ask;
//             switch(response){
//                 case "yes":
//                     prompt("choose your dates");
//                     break;
//                 case "no":
//                     prompt("We hope to see you soon!");
//                     break;
//                 default:
//                     alert("Please, choose the following: yes or no");
//                     break;
//             }
// }
// roomRate(rate);

// //Class constructor
// class Rooms {
//     constructor(id,name,price, availability){
//         this.id = id;
//         this.name = name;
//         this.price = price;
//         this.availability = availability;
//     }
// }

// const roomS = new Rooms (001, "Shared room",20,true);
// const roomG = new Rooms (002,"Girls Room",30,true);
// const roomP = new Rooms (003, "Private Room",40,false);

// //ddbb de habitaciones
// const BBDD = [roomS,roomG,roomP];

// //id - name - price - availability 
// BBDD.forEach((el)=>{
//     console.log(el)
// })

// //confirmando reserva de habitación
// let bookRoom = [];

// let room = Number(prompt("Would you like to make a reservation? Choose 1 for Shared room - 2 for Girls room - 3 for Private room - 4 Not at the moment"));

// let reserveRoom = room;


// function booking(reserveRoom){
//     if(reserveRoom === 1) {
//         alert("There are 2 Shared rooms available");

//     } else if (reserveRoom === 2) {
//         alert("There are 2 girls room available");

//     } else if (reserveRoom === 3) {
//         alert("Sorry, Private rooms are all booked out")
    
//     } else if (reserveRoom === 4){
//         alert("We hope to see you soon!")

//     } else {
//         Number(prompt("Please, choose the options 1, 2, 3 or 4"));
//     }

//     bookRoom.push(BBDD[reserveRoom]);
// }
// booking(reserveRoom);

// console.log(reserveRoom);

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

    let bookOnline = document.createElement("button")
    bookOnline.innerText = "Book Online"
    bookOnline.className = "btn btn-outline-danger"

    content.append(bookOnline)

    bookOnline.addEventListener("click", ()=>{
        reservation.push(
            {
                id: room.name,
                rate: room.rate,
                availability: room.availability,
            }
        )
        console.log(reservation)
    })
})

let showReservation = document.getElementById("reservation")

showReservation.addEventListener("click", ()=>{
    console.log("Reservas")

    const modalHeader = document.createElement("div")

    showReservation.append(modalHeader)

    
    reservation.forEach((room)=>{
        let reservationContent = document.createElement("div")
        // reservationContent.className = ""
        reservationContent.innerHTML = `
            <h3>${room.name}</h3>
            <p>${room.rate}</p>
        `;
        
        showReservation.append(reservationContent)
    })

    const total = reservation.reduce((acc,el) => acc + el.rate,0)
    console.log(total)
    showReservation.append(total)
})


//Local y Session Storage

sessionStorage.setItem('email', 'yourmail@mail.com')

let user;
let userLS = JSON.stringify(localStorage.getItem("user"))

// sessionStorage.clear()

const roomLS = (key, value) => { 
    localStorage.setItem(key, value) 
};

for (const room of rooms) {
    roomLS(room.id, JSON.stringify(room));
}

// let reservationLS = JSON.stringify(localStorage.getItem('reservation'))
