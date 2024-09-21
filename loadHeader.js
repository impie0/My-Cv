document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM content loaded, attempting to load header');
    
    // Create the header content with icons
    var headerContent = `
    <nav>
        <ul>
            <li><a href="index.html" class="nav-item"><i class="fas fa-home"></i><span>Home</span></a></li>
            <li><a href="about.html" class="nav-item"><i class="fas fa-user"></i><span>About</span></a></li>
            <li><a href="Education.html" class="nav-item"><i class="fas fa-graduation-cap"></i><span>Education</span></a></li>
            <li><a href="Portfolio.html" class="nav-item"><i class="fas fa-briefcase"></i><span>Work Profile</span></a></li>
            <li><a href="skills.html" class="nav-item"><i class="fas fa-cogs"></i><span>Skills</span></a></li>
            <li><a href="contacts.html" class="nav-item"><i class="fas fa-envelope"></i><span>Contact</span></a></li>
        </ul>
    </nav>
    `;
    
    var headerElement = document.querySelector('header');
    if (headerElement) {
        headerElement.innerHTML = headerContent;
        console.log('Header inserted into DOM');
    } else {
        console.error('Header element not found in the DOM');
    }
});
