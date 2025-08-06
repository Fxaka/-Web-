$(document).ready(function() {
    $('#funButton').click(function() {
        // Generate random properties
        const randomSize = Math.floor(Math.random() * 100) + 50; // 50px to 150px
        const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`; // Random HEX color
        const randomTop = Math.floor(Math.random() * ($(window).height() - randomSize));
        const randomLeft = Math.floor(Math.random() * ($(window).width() - randomSize));

        // Create the box element with random properties
        const $box = $('<div></div>')
            .addClass('random-box')
            .css({
                'width': randomSize + 'px',
                'height': randomSize + 'px',
                'background-color': randomColor,
                'top': randomTop + 'px',
                'left': randomLeft + 'px',
                'opacity': 1
            })
            .appendTo('body');

        // Animate the box
        $box.animate({
            'width': randomSize * 1.5 + 'px',
            'height': randomSize * 1.5 + 'px',
            'opacity': 0
        }, 1500, function() {
            $(this).remove(); // Remove the box after animation completes
        });
    });
});