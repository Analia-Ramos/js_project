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


//precios de habitaciones

let sharedRoom = 20;
let girlsRoom = 30;
let privateRoom = 40;

let chooseRoom = prompt("Choose your room");
let rate = chooseRoom;

function roomRate (rate){
    if ((rate == "Shared Room") || (rate == "shared room") || (rate == "shared")){
        alert("Shared room rate is $" + sharedRoom + " per night");
            
    }else if ((rate == "Girls Room") || (rate == "girls room") || (rate == "girls")){
        alert("Girls room rate is $" + girlsRoom + " per night");

    }else if ((rate == "Private Room") || (rate == "private room") || (rate == "private")){
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

