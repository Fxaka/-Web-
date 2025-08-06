$(document).ready(function () {
    $('#HC-btn').click(function () {
        $('body').toggleClass('high-contrast');

        // Toggle the button text to reflect the current state
        if ($('body').hasClass('high-contrast')) {
            $('#HC-btn').text('Disable High Contrast');
        } else {
            $('#HC-btn').text('Enable High Contrast');
        }
    });
});
