//ask about the && operator and why its working here.
// also why wouldnt the || operator work.
function scuberGreetingForFeet(distance) {
if (distance < 400){return 'This one is on me!'}
else if (distance > 400 && distance < 2000){return 'That will be twenty bucks.'}
else if (distance > 2000 && distance < 2500) {return "I will gladly take your thirty bucks."}
else {return 'No can do.'}
}
//ask about the use of == in previous code.
// how is === working if no type conversions? is city already a string?
function ternaryCheckCity(city) {

return city === "NYC" ?  'Ok, sounds good.' : "No go."

}

function switchOnCharmFromTip(tip){

  switch (tip) {
case "generous" : 
 return "Thank you so much." 
case "not as generous":
  return "Thank you."
default:
    return "Bye."

  }

}

//Original Code:

// function scuberGreetingForFeet(distance){
//   if (distance<400){return "This one is on me!"}
//   if (distance>400 && distance<2000){return 'That will be twenty bucks.'}
//   if (distance>2500){return "No can do."}
//   if (distance>2000){return 'I will gladly take your thirty bucks.'}


//   }

// function ternaryCheckCity(city){
//   return city == "NYC" ?  "Ok, sounds good." : "No go."
// }


// function switchOnCharmFromTip(tip){
//   switch (tip){
//   case "generous" :
//     return 'Thank you so much.'
//     case "not as generous":
//     return 'Thank you.'
//     default: 
//       return 'Bye.'
    
//     }

