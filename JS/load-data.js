$(document).ready(function () {  
    const appData = {  
        infoData: [], // Will hold loaded JSON data      
        currentFilter: {}  
    };  
  
    const $cacItemsContainer = $('#cac-items-container');  
  
    // Display information based on filters      
    function displayInfo(info) {  
        $cacItemsContainer.empty();  
  
        let filteredInfo = applyFilters(info, appData.currentFilter);  
  
        // Sort by time if specified      
        if (appData.currentFilter.sortTime === 'new-to-old') {  
            filteredInfo.sort((a, b) => new Date(b.time) - new Date(a.time));  
        } else if (appData.currentFilter.sortTime === 'old-to-new') {  
            filteredInfo.sort((a, b) => new Date(a.time) - new Date(b.time));  
        }  
  
        filteredInfo.forEach(item => {  
            let $infoItem = $('<a href="#"></a>').addClass('CAC-item-custom col-12 col-lg-4');  
            $infoItem.append(`  
                <span>  
                    <p><strong>Type:</strong> ${item.type}</p>        
                    <p><strong>Time:</strong> ${item.time}</p>        
                    <p><strong>Location:</strong> ${item.location}</p>        
                    <p><strong>Details:</strong> ${item.details}</p>  
                </span>`);  
            $cacItemsContainer.append($infoItem);  
        });  
    }  
  
    // Apply filters  
    function applyFilters(info, filters) {  
        const searchText = filters.search ? filters.search.toLowerCase() : '';  
  
        return info.filter(item => {  
            // Check if any of the fields (type, location, details, time) contain the search text  
            const matchesType = item.type.toLowerCase().includes(searchText);  
            const matchesLocation = item.location.toLowerCase().includes(searchText);  
            const matchesDetails = item.details.toLowerCase().includes(searchText);  
            const matchesTime = item.time.toString().includes(searchText); // Adjusted to avoid converting time to lowercase  
  
            return (  
                (!filters.type || item.type === filters.type) &&           // Filter by specific type if selected  
                (!filters.location || item.location === filters.location) && // Filter by specific location if selected  
                (matchesType || matchesLocation || matchesDetails || matchesTime) // Check if any field matches the search text  
            );  
        });  
    }  
  
    // Load JSON data when the button is clicked  
    $('#load-data-btn').click(function () {  
        $.ajax({  
            url: './JSON/data.json',  
            type: 'GET',  
            dataType: 'json',  
            success: function (data) {  
                appData.infoData = data.info || [];  
                displayInfo(appData.infoData);  
            },  
            error: function (error) {  
                console.error('Failed to load data:', error);  
                alert('Failed to load data. Please try again.');  
            }  
        });  
    });  
  
    // Update filters when the dropdown or search box is modified      
    $('#info-type, #sort-time, #location').change(function () {  
        appData.currentFilter.type = $('#info-type').val();  
        appData.currentFilter.sortTime = $('#sort-time').val();  
        appData.currentFilter.location = $('#location').val();  
        if (appData.infoData.length > 0) { // Only redisplay if data is already loaded  
            displayInfo(appData.infoData);  
        }  
    });  
  
    $('#search').on('input', function () {  
        appData.currentFilter.search = $(this).val();  
        if (appData.infoData.length > 0) { // Only redisplay if data is already loaded  
            displayInfo(appData.infoData);  
        }  
    });  
});