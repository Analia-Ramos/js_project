//ingresar usuario

let welcome = alert("Welcome to Beach House Hostel");

function username(){ 
    let user = prompt("Introduce your username")
    
    if (user == ""){
        prompt("Sign in")
    }else{
        alert("Username: " + user);
    }
}
username();


//ingresar contraseña

let password = 123456;
let input = Number(prompt("Introduce your password"));


while (password != input){
    alert("Incorrect password");
    input = prompt("Please, try again");
}


// //precios de habitaciones

let sharedRoom = 20;
let girlsRoom = 30;
let privateRoom = 40;

let chooseRoom = prompt("Choose your room");
let rate = chooseRoom;

function roomRate (rate){
    if ((rate === "Shared Room") || (rate === "shared room") || (rate === "shared")){
        alert("Shared room rate is $" + sharedRoom + " per night");

    }else if ((rate === "Girls Room") || (rate === "girls room") || (rate === "girls")){
        alert("Girls room rate is $" + girlsRoom + " per night");

    }else if ((rate === "Private Room") || (rate == "private room") || (rate === "private")){
        alert("Private room rate is $" + privateRoom + " per night");

    }else{
        prompt("Choose the type of room you wish");
    }

    let ask = prompt("Would you like to book now?")
            let response = ask;
            switch(response){
                case "yes":
                    prompt("choose your dates");
                    break;
                case "no":
                    prompt("We hope to see you soon!");
                    break;
                default:
                    alert("Please, choose the following: yes or no");
                    break;
            }
}
roomRate(rate);

//Class constructor
class Rooms {
    constructor(id,name,price, availability){
        this.id = id;
        this.name = name;
        this.price = price;
        this.availability = availability;
    }
}

const roomS = new Rooms (001, "Shared room",20,true);
const roomG = new Rooms (002,"Girls Room",30,true);
const roomP = new Rooms (003, "Private Room",40,false);

//ddbb de habitaciones
const BBDD = [roomS,roomG,roomP];

//id - name - price - availability 
BBDD.forEach((el)=>{
    console.log(el)
})

//confirmando reserva de habitación
let bookRoom = [];

let room = Number(prompt("Would you like to make a reservation? Choose 1 for Shared room - 2 for Girls room - 3 for Private room - 4 Not at the moment"));

let reserveRoom = room;


function booking(reserveRoom){
    if(reserveRoom === 1) {
        alert("There are 2 Shared rooms available");

    } else if (reserveRoom === 2) {
        alert("There are 2 girls room available");

    } else if (reserveRoom === 3) {
        alert("Sorry, Private rooms are all booked out")
    
    } else if (reserveRoom === 4){
        alert("We hope to see you soon!")

    } else {
        Number(prompt("Please, choose the options 1, 2, 3 or 4"));
    }

    bookRoom.push(BBDD[reserveRoom]);
}
booking(reserveRoom);

console.log(reserveRoom);