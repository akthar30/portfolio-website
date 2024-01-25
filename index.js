const side = document.querySelector(".sidebar");

function showsidebar(){
    side.style.display = "flex";
}

function hidesidebar(){
    side.style.display = "none";
}


// // Mouse Hover for project transition
// var element = document.querySelector('.project-details');

// // Add event listeners for mouseover and mouseout
// element.addEventListener('mouseover', function() {
// // Code to run when the mouse enters the element
// element.classList.add('project-transition');
// console.log('Mouse over!');
//     // You can also add additional styling or actions here

// });

// element.addEventListener('mouseout', function() {
//     // Code to run when the mouse leaves the element
//     console.log('Mouse out!');
//     element.classList.remove('project-transition');
//     // You can also add additional styling or actions here
// });

// Year update in footer

function updateYear() {
    var currentYear = new Date().getFullYear();

    document.getElementById('liveYear').textContent = currentYear;
}

// Initial update
updateYear();