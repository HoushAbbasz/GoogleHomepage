// Get form element by id='searchForm' in HTML file and store in form variable
let form = document.getElementById('searchForm');

// Get form element by id='searchInput' in HTML file and store in input variable
let input = document.getElementById('searchInput');


form.addEventListener('submit', function (event) {

    alert(`You searched ${input.value}`);

    // Add input value to Google Search results page URL and store in googleSearchUrl variable
    let googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(input.value)}`;
    
    // Opens the Google Search results in a new page 
    window.open(googleSearchUrl, '_blank');
});


