//ingresar usuario

let welcome = alert("Welcome to Beach House Hostel");

function username() { 
    let user = prompt("Introduce your username")
    if (user == ""){
        console.log("Please, introduce your name")
    }else{
        console.log("Username: " + user);
    }
}
username();


//Ingresar contraseña

let password = 123456;
let input = Number(prompt("Please, introduce your password"));

while (password != input){
    alert("Incorrect password");
    input = prompt("Please, try again");
}


//precios de habitaciones

let sharedRoom = 20;
let girlsRoom = 30;
let privateRoom = 40;


function roomRate (rate){
    if ((rate == "Shared Room") || (rate == "shared room")){
        return sharedRoom;
    }else if ((rate == "Girls Room") || (rate == "girls room")){
        return girlsRoom;
    }else if ((rate == "Private Room") || (rate == "private room")){
        return privateRoom;
    }else{
        alert("Please, choose the type of room you wish");
    }
}

roomRate(rate);
//roomRate("Shared Room")
//roomRate("Girls Room")
//roomRate("Private Room")
