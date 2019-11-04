
// for any front end page, add a Trade In registration
const menuList = document.getElementById('#');
const newListItem = menuList.appendChild('li');
newListItem.innerHtml = "<a href='/registerATradeIns'>Trade Ins</a>";

// select the product or registration flow based on URL matches
if (window.location.href.includes("/products/")) {
  require('productFlow.js');
}
else if (window.location.href.includes("/registerATradeIn")) {
  require('registrationFlow.js')
}

