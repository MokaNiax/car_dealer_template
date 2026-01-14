$(document).ready(function() {
    $('#header').prepend('<div id="menu-icon"><span class="first"></span><span class="second"></span><span class="third"></span></div>');

    $("#menu-icon").on("click", function() {
        $("nav").slideToggle();
        $(this).toggleClass("active");
    });

    const isMobile = () => window.matchMedia("(max-width: 850px)").matches;

    const nosVehicules = document.getElementById('nos-vehicules');
    const sousMenu = nosVehicules.nextElementSibling;

    nosVehicules.addEventListener('click', function(event) {
        if (isMobile()) {
            event.preventDefault();
            sousMenu.style.display = sousMenu.style.display === 'block' ? 'none' : 'block';

            window.addEventListener('resize', function() {
                if (!isMobile()) {
                    location.reload();
                }
            }); 
        }
    });   
});