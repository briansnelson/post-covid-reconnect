
function userGreeting() {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;
    if (hourNow > 18) {
        greeting = 'Good evening Explorer'; 
    }  else if (hourNow > 12) {
        greeting = 'Good afternoon Explorer';
    }  else if (hourNow > 0) {
        greeting = 'Good Morning Explorer';  
    }  else {
        greeting = 'Welcome Explorer';
    }
    return'<h3>' + greeting + '</h3>'; 
}
    

function personHere () {
  
    var person = prompt("what is your name?");
    
    return '<h3>' + person + "!" + '</h3>'; 
}

function ask() {
    var answer=prompt("Do you like the city or nature?");
    if (answer=="nature") {
        alert("We have some great hiking spots to show you!");
         
    }   
    if (answer=="city"){
        alert("We have some great spots in the Seattle greater area to show you!");
       
    }   
    if (answer== "") {
        alert("Have to choose one please!")
        ask();
    }
}    

//     function userName () {
//         var person = prompt ("What is your name?";
//         var greeting;
        
//         if (person !==''){
//             greeting = 'Hello' + person + '!';
//         }
//     document.write(greeting + )  

//     var person =prompt("What is your name?");

// document.write ('<h3>' + person + ':</h3>');