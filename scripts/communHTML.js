$(function(){
    $("#header").load("/pages/commun/header.html"); 
    $("#footer").load("/pages/commun/footer.html"); 
});

document.addEventListener('contextmenu', (e) => e.preventDefault());
document.addEventListener('keydown', (e) => {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.key === 'u')) {
        e.preventDefault();
    }
});

document.addEventListener("dragstart", (event) => {
    event.preventDefault();
  });