$(document).ready(function() {
    let currentIndex = 0;
    const items = $(".carousel-item");
    const totalItems = items.length;

    function updateCarouselItemWidth() {
        const containerWidth = $(".carousel-container").width();
        $(".carousel-item").each(function() {
            $(this).css("width", containerWidth);
        });
        
        updateCarouselPosition();
    }

    function updateCarouselPosition() {
        const itemWidth = $(".carousel-item").outerWidth(true);
        $(".carousel").css("transform", "translateX(-" + (currentIndex * itemWidth) + "px)");
    }

    $(".left").click(function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarouselPosition();
        }
    });

    $(".right").click(function() {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
            updateCarouselPosition();
        }
    });

    $(window).resize(function() {
        updateCarouselItemWidth();
    });
});