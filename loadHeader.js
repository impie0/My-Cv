document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM content loaded, attempting to load header');
    
    // Create a new script element
    var script = document.createElement('script');
    
    // Set the source of the script to the header.html file
    script.src = 'header.html';
    
    // Set the type to text/javascript
    script.type = 'text/javascript';
    
    // Add an onload event handler
    script.onload = function() {
        console.log('Header script loaded');
        // Check if headerContent is defined
        if (typeof headerContent !== 'undefined') {
            console.log('headerContent is defined');
            var headerElement = document.querySelector('header');
            if (headerElement) {
                headerElement.innerHTML = headerContent;
                console.log('Header inserted into DOM');
            } else {
                console.error('Header element not found in the DOM');
            }
        } else {
            console.error('headerContent is not defined');
        }
    };
    
    // Add an onerror event handler
    script.onerror = function() {
        console.error('Error loading header script');
    };
    
    // Append the script element to the document head
    document.head.appendChild(script);
    console.log('Script appended to head');
});
