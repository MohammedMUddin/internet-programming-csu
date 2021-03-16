'use strict';

/*JSON data*/
var txt = '{"business_id": "5UmKMjUEUNdYWqANhGckJw", "full_address": "4734 Lebanon Church Rd Dravosburg, PA 15034", "open": true, "categories": ["Fast Food", "Restaurants"], "city": "Dravosburg", "review_count": 4, "name": "Mr Hoagie", "neighborhoods": [], "longitude": -79.9007057, "state": "PA", "stars": 4.5, "latitude": 40.3543266, "attributes": {"Take-out": true, "Drive-Thru": false, "Good For": {"dessert": false, "latenight": true, "lunch": true, "dinner": true, "brunch": true, "breakfast": true}, "Caters": false, "Noise Level": "average", "Takes Reservations": true, "Delivery": false, "Ambience": {"romantic": true, "intimate": false, "classy": false, "hipster": true, "divey": false, "touristy": false, "trendy": true, "upscale": false, "casual": true}, "Parking": {"garage": false, "street": true, "validated": false, "lot": true, "valet": false}, "Has TV": true, "Outdoor Seating": true, "Attire": "casual", "Alcohol": "none", "Waiter Service": true, "Accepts Credit Cards": true, "Good for Kids": true, "Good For Groups": true, "Price Range": 2}, "type": "business"}'
var obj = JSON.parse(txt);

/*Code for dropdown menu*/
function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function dropdown2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

/*Name Tab*/
function restaurantName(){
  document.getElementById("demo").innerHTML = obj.name;
}

/*Address Tab*/
function address(){
  document.getElementById("demo").innerHTML = obj.full_address;
}

/*Hours Tab*/
function CreateTableFromJSON() {
 var Hours = [
      {
        Hours: "Monday",
        Open: "11:00am",
        "-": "-",
        Close: "9:00pm"
      },
      {
        Hours: "Tuesday",
        Open: "11:00am",
        "-": "-",
        Close: "9:00pm"
      },
      {
        Hours: "Wednesday",
        Open: "11:00am",
        "-": "-",
        Close: "9:00pm"
      },
      {
        Hours: "Thursday",
        Open: "11:00am",
        "-": "-",
        Close: "9:00pm"
      },
      {
        Hours: "Friday",
        Open: "11:00am",
        "-": "-",
        Close: "9:00pm"
      }
    ];
    var col = [];
      for (var i = 0; i < Hours.length; i++) {
          for (var key in Hours[i]) {
              if (col.indexOf(key) === -1) {
                  col.push(key);
              }
          }
      }
    var table = document.createElement("table");
    var tr = table.insertRow(-1);
    for (var i = 0; i < col.length; i++) {
         var th = document.createElement("th");
         th.innerHTML = col[i];
         tr.appendChild(th);
    }
    for (var i = 0; i < Hours.length; i++) {
         tr = table.insertRow(-1);
            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = Hours[i][col[j]];
            }
    }
    var divContainer = document.getElementById("demo");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}

function services(){
  debugger;
  var head = "<h2>Service and Features</h2>"
  var space = "<div> </div>"
  document.getElementById("demo").innerHTML = head + "Take-out: " + obj.attributes["Take-out"] 
  + space + "Accepts credit cards: " + obj.attributes["Accepts Credit Cards"] 
  + space + "Good for kids: " + obj.attributes["Good for Kids"] 
  + space + "Good for groups: " + obj.attributes["Good For Groups"]
  + space + "Price Range: " + obj.attributes["Price Range"];

}




/* 
------------------todo------------------ 
1. Change the function for hours which gets the hours from the JSON 

*/ 




