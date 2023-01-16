
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
function addMenu(key){
  let itemKey = parseInt(key.id)
    menu[itemKey].ordre = menu[itemKey].ordre + 1 
    console.log(menu[itemKey].ordre)
    totalPrix = totalPrix + menu[itemKey].prix
    console.log(totalPrix)
}
///////////////////////////////////////////////////

function removeMenu(key) {
  let itemKey = parseInt(key.id)
  if (menu[itemKey].ordre >0) {
    menu[itemKey].ordre = menu[itemKey].ordre - 1 
    console.log(menu[itemKey].ordre)
    totalPrix = totalPrix - menu[itemKey].prix
    console.log(totalPrix)
  } else {
    console.log('Panier vide')
  }
  
}
///////////////////////////////////////////////////

function ordre() {
console.log('==============')
for (i=0; i < menu.lenght;i++){
  if(menu[i].ordre > O){
      console.log(menu[i].ordre)
      menu[i].ordre =0
      console.log(menu[i].ordre)
  }
}
console.log(totalPrix + '€')
    totalPrix = 0
    console.log(totalPrix)
}



///////////////////////////////////////////////////

  
  

  