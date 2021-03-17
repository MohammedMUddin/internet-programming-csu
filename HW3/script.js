'use strict';

/*JSON data*/
var txt = '{"business_id": "5UmKMjUEUNdYWqANhGckJw", "full_address": "4734 Lebanon Church Rd Dravosburg, PA 15034", "open": true, "categories": ["Fast Food", "Restaurants"], "city": "Dravosburg", "review_count": 4, "name": "Mr Hoagie", "neighborhoods": [], "longitude": -79.9007057, "state": "PA", "stars": 4.5, "latitude": 40.3543266, "attributes": {"Take-out": true, "Drive-Thru": false, "Good For": {"dessert": false, "latenight": true, "lunch": true, "dinner": true, "brunch": true, "breakfast": true}, "Caters": false, "Noise Level": "average", "Takes Reservations": true, "Delivery": false, "Ambience": {"romantic": true, "intimate": false, "classy": false, "hipster": true, "divey": false, "touristy": false, "trendy": true, "upscale": false, "casual": true}, "Parking": {"garage": false, "street": true, "validated": false, "lot": true, "valet": false}, "Has TV": true, "Outdoor Seating": true, "Attire": "casual", "Alcohol": "none", "Waiter Service": true, "Accepts Credit Cards": true, "Good for Kids": true, "Good For Groups": true, "Price Range": 2}, "type": "business"}'
// var obj = JSON.parse(txt);
var obj = {"business_id": "5UmKMjUEUNdYWqANhGckJw", "full_address": "4734 Lebanon Church Rd\nDravosburg, PA 15034", "hours": {"Friday": {"close": "21:00", "open": "11:00"}, "Tuesday": {"close": "21:00", "open": "11:00"}, "Thursday": {"close": "21:00", "open": "11:00"}, "Wednesday": {"close": "21:00", "open": "11:00"}, "Monday": {"close": "21:00", "open": "11:00"}}, "open": true, "categories": ["Fast Food", "Restaurants"], "city": "Dravosburg", "review_count": 4, "name": "Mr Hoagie", "neighborhoods": [], "longitude": -79.9007057, "state": "PA", "stars": 4.5, "latitude": 40.3543266, "attributes": {"Take-out": true, "Drive-Thru": false, "Good For": {"dessert": false, "latenight": true, "lunch": true, "dinner": true, "brunch": true, "breakfast": true}, "Caters": false, "Noise Level": "average", "Takes Reservations": true, "Delivery": false, "Ambience": {"romantic": true, "intimate": false, "classy": false, "hipster": true, "divey": false, "touristy": false, "trendy": true, "upscale": false, "casual": true}, "Parking": {"garage": false, "street": true, "validated": false, "lot": true, "valet": false}, "Has TV": true, "Outdoor Seating": true, "Attire": "casual", "Alcohol": "none", "Waiter Service": true, "Accepts Credit Cards": true, "Good for Kids": true, "Good For Groups": true, "Price Range": 2}, "type": "business"}


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
function businesshours(){
  const hours = obj["hours"]
  var x = "" 
  Object.keys(hours).forEach(function(prop) {
  var days = hours[prop]
  var timeArr = [""]
  x += "<tr>" + "<td>" + prop + "</td>"
  Object.keys(days).forEach(function(time) {
    timeArr.unshift(days[time])
  })
  timeArr.forEach(function(rightTime) {
    if (timeArr[0] === rightTime) {
      x += "<td>" + rightTime + " AM - " + "</td>"  
    } 
    if (timeArr[1] === rightTime) {
      var nightTime = parseInt(rightTime) - 12
      x += "<td>" + nightTime + ":00 PM" +"</td>"
    }
  })
  x += "</tr>"
})
document.getElementById("demo").innerHTML = "<table>" + x + "</table>";
}

function services(){
  var head = "<h2>Service and Features</h2>"
  var space = "<div> </div>"
  document.getElementById("demo").innerHTML = head + "Take-out: " + obj.attributes["Take-out"] 
  + space + "Accepts credit cards: " + obj.attributes["Accepts Credit Cards"] 
  + space + "Good for kids: " + obj.attributes["Good for Kids"] 
  + space + "Good for groups: " + obj.attributes["Good For Groups"]
  + space + "Price Range: " + obj.attributes["Price Range"];
}








