 // On page load, show all gallery sections by default
 window.onload = function () {
    filterSelection('all');
}

function filterSelection(category) {
    // Get all gallery rows  
    var allSections = document.querySelectorAll('.gallery-activities, .gallery-works');

    // Step 1: Hide all sections  
    allSections.forEach(function (section) {
        section.style.display = 'none';
    });

    // Step 2: Show the selected category or all sections  
    if (category === 'all') {
        allSections.forEach(function (section) {
            section.style.display = '';
        });
    } else if (category === 'activities') {
        document.querySelector('.gallery-activities').style.display = '';
    } else if (category === 'works') {
        document.querySelector('.gallery-works').style.display = '';
    }
}