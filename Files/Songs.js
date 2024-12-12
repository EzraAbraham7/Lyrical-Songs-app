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

/* 
// Get the custom context menu element
const customMenu = document.getElementById('custom-menu');

// Show the custom menu when right-clicking on empty space
document.addEventListener('contextmenu', function(e) {
    // Prevent the default right-click menu
    e.preventDefault();

    // Check if the clicked area is empty (not inside an element with content)
    if (!e.target.closest('.content')) {
        // Show the custom menu at the mouse position
        customMenu.style.display = 'block';
        customMenu.style.left = `${e.pageX}px`;
        customMenu.style.top = `${e.pageY}px`;
    }
});

// Hide the menu when clicking anywhere else on the page
document.addEventListener('click', function(e) {
    if (!customMenu.contains(e.target)) {
        customMenu.style.display = 'none';
    }
});

// Handle menu item click events
document.getElementById('menu-item-1').addEventListener('click', function() {
    alert('Option 1 clicked');
});

document.getElementById('menu-item-2').addEventListener('click', function() {
    alert('Option 2 clicked');
});

document.getElementById('menu-item-3').addEventListener('click', function() {
    alert('Option 3 clicked');
});

document.getElementById('menu-item-4').addEventListener('click', function() {
    alert('Option 4 clicked');
});
*/