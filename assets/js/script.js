
let menu = [
  {
    'menuName' : 'Burger Veggie',
    'prix' : 5.30 ,
    'ordre' : 0,
  },
  {
    'menuName' : 'Double Cheese',
    'prix' : 6.30 ,
    'ordre' : 0,
  },
  {
    'menuName' : 'CheeseBurger',
    'prix' : 4.20 ,
    'ordre' : 0,
  },
  {
    'menuName' : 'Frite',
    'prix' : 2.30 ,
    'ordre' : 0,
  },
  {
    'menuName' : 'Salade',
    'prix' : 2.80 ,
    'ordre' : 0,
  },
  {
    'menuName' : 'Frite de patate douce',
    'prix' : 3.30 ,
    'ordre' : 0,
  },
  {
    'menuName' : 'Tiramisu',
    'prix' : 3.30 ,
    'ordre' : 0,
  },
  {
    'menuName' : 'Glace',
    'prix' : 3.80 ,
    'ordre' : 0,
  },
  {
    'menuName' : 'Donuts',
    'prix' : 3.90 ,
    'ordre' : 0,
  }
]

let totalPrix = 0 

///////////////////////////////////////////////////
function addMenu(key) {

  //calculates price and displays it innerHTML
  itemKey = parseInt(key.id)
  totalPrix = totalPrix + menu[itemKey].prix
  console.log('Le montant de cette ordre est de : ', totalPrix, '€ ')
  document.getElementById('totalprix').innerHTML = "<p id='ordre_prix'>" + "Total montant : " + `${totalPrix}` + "€" + "</p>"
  
  //displays or updates order infos
  if (menu[itemKey].ordre == 0) {
      menu[itemKey].ordre = menu[itemKey].ordre + 1
      document.getElementById('ordreitems').innerHTML += "<p id='" + `${menu[itemKey].menuName}` + "'>" + `${menu[itemKey].ordre}` + ' ' + `${menu[itemKey].menuName}` + "</p>"
  } else {
      menu[itemKey].ordre = menu[itemKey].ordre + 1
      document.getElementById(menu[itemKey].menuName).remove()  
      document.getElementById('ordreitems').innerHTML += "<p id='" + `${menu[itemKey].menuName}` + "'>" + ' ' + `${menu[itemKey].ordre}` + `${menu[itemKey].menuName}` + "</p>"
  }
  
  console.log(menu[itemKey].ordre)
  }
///////////////////////////////////////////////////
function rewrite(){
// updates cart and rewrites innerHTML
if (menu[itemKey].ordre == 2) {
  document.getElementById('totalprix').innerHTML = "<p id='ordre_prix'>" + "Total montant : " + `${totalPrix}` + " "+"€" + "</p>"
  menu[itemKey].ordre = menu[itemKey].ordre - 1
  const element = document.getElementById(menu[itemKey].menuName)
  element.remove()
  document.getElementById('ordreitems').innerHTML += "<p id='" + `${menu[itemKey].menuName}` + "'>" + ' ' + `${menu[itemKey].ordre}` + `${menu[itemKey].menuName}` + "</p>"
} else if (menu[itemKey].ordre == 1) {
  totalPrix = totalPrix - menu[itemKey].prix
  document.getElementById('totalprix').innerHTML = "<p id='ordre_prix'>" + "Total montant : " + `${totalPrix}` + " "+"€" + "</p>"
  menu[itemKey].ordre = menu[itemKey].ordre - 1
  const element = document.getElementById(menu[itemKey].menuName)
  element.remove()

} else {
  console.log('Rien à supprimer')
}
}
///////////////////////////////////////////////////
function amount() {
  if (totalPrix == 0) {
    document.getElementById('totalPrix').innerHTML = "<p id='ordre_prix'>" + "Total montant : " + `${totalPrix}` + "€" + "</p>"
    console.log('la carte est vide ')
  }
  if (menu[itemKey].ordre > 0) {
    totalPrix = totalPrix - menu[itemKey].prix
    console.log('The amount of your order is now : ', totalPrice, '€')
    document.getElementById('totalprix').innerHTML = "<p id='ordre_prix'>" + "Total montant : " + `${totalPrix}` + "€" + "</p>";
} else {
    console.log('Erreur : Vous navez pas ' + `${menu[itemKey].menuName}` + " dans votre carte")
    console.log(menu[itemKey].ordre)
}
}
///////////////////////////////////////////////////
function removeMenu(key) {
  // fetches item key
  itemIndex = parseInt(key.id)
  rewrite(this)
  amount(this)
  
  }
///////////////////////////////////////////////////

function ordre() {
  let checkOrdre = 0
  // Vérifier si le panier vide 

  for (let i = 0; i < menu.length; i++){
    if (menu[i].ordre == 0){
        checkOrdre++
    }
  }

if (checkOrdre == menu.length){
  console.log("Panier Vide")
} else {
     // displays price in the console and resets price
  console.log('Le total de ce montant est de :', totalPrix,'€')
  totalPrix = 0
}

// checks what item has been ordered and displays the order as an array in the console
let newArr = []
for (let i = 0; i < menu.length; i++){
  if (menu[i].ordre > 0){
      newArr.push(menu[i].ordre)
      newArr.push(menu[i].menuName)
  }
}
console.log('vous avez reçu un ordre',newArr)
// resets innerHTML data (not useful as such because pages are going to be reloaded, but shows that it can be done in other cases)
  document.getElementById('totalprix').innerHTML = "<p id='ordre_prix'>" + "Total montant : " + `${totalPrix}` + "€" + "</p>";
  document.getElementById('ordreitems').innerHTML = "";

   // resets "ordered" items number (same as above, not useful as such but good to know)
  for (let i = 0; i < menu.length; i++){
    menu[i].ordre = 0
  }

  setTimeout(() => { window.location = 'vue-confirmation.html' }, 4000)
}

///////////////////////////////////////////////////


// When the user clicks on div, open the popup
function showOrdre() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

