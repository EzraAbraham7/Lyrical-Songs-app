function toggleDiv() {
    var hiddenDiv = document.getElementById("letters");
    var hiddenLabel = document.getElementById("labels");
    
    if (hiddenDiv.style.display === "none" || hiddenDiv.style.display === "") {
        hiddenDiv.style.display = "block"; 
        hiddenLabel.style.display = "none"
        // Show the div
    } else {
        hiddenDiv.style.display = "none"; // Hide the div
    }
}

function disablesearch(){
    var hiddenDiv = document.getElementById("letters");
    hiddenDiv.style.display = "none"
}

function toggleLabels() {
    var hiddenDiv = document.getElementById("letters");
    var hiddenLabel = document.getElementById("labels");
    
    if (hiddenLabel.style.display === "none" || hiddenLabel.style.display === "") {
        hiddenLabel.style.display = "block"; 
        hiddenDiv.style.display = "none";
        // Show the div
    } else {
        hiddenLabel.style.display = "none"; // Hide the div
    }
}

var div= document.querySelector('anandham');
var display = true;

function isclick(){
    if(display){
        div.style.display = "block";
        display = false;
        }
        else{
            div.style.display = "none";
            display = true;
            }       
}


function search_animal() {
  let input = document.getElementById('searchInput').value
  input = input.toLowerCase();
  let x = document.getElementsByClassName('btn');

  for (i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display = "none";
      }
      else {
          x[i].style.display = "list-item";
      }
  }
}


function performSearch() {
// Get the search query
const searchQuery = document.getElementById('searchInput').value.toLowerCase();

// Get all links in the content
const links = document.getElementById('content').getElementsByTagName('a');

let found = false;

// Loop through each link to find a match
for (let link of links) {
const linkText = link.innerText.toLowerCase();
if (linkText.includes(searchQuery)) {
  // Scroll to the link if a match is found and highlight it
  link.scrollIntoView({ behavior: 'smooth' });
  link.classList.add('highlight');
  found = true;
  break;
} else {
  // Remove highlight if not matched
  link.classList.remove('highlight');
}
}

// If no match is found
if (!found) {
alert('No results found');
}
}

//-------------------settings-------------------
/*      ping button     */

document.getElementById('pingButton').addEventListener('click', function() {
    // WhatsApp link format
    var phoneNumber = '9666314814'; // Replace with your phone number, include country code but no "+" sign
    var message = 'Hello, I would like share you about songs......!'; // Message to send
    var whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
    // Open WhatsApp in a new tab or window
    window.open(whatsappLink, '_blank');
  });
  