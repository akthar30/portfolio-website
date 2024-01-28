// Side Navbar 
const side = document.querySelector(".sidebar");

function showsidebar(){
    side.style.display = "flex";
}

function hidesidebar(){
    side.style.display = "none";
}

// Year update in footer

function updateYear() {
    var currentYear = new Date().getFullYear();

    document.getElementById('liveYear').textContent = currentYear;
}

// Initial update
updateYear();