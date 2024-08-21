
// Section selection function
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
}


// Typing function
document.addEventListener('DOMContentLoaded', function() {
    const selectTyped = document.querySelector('.typed');
    if (selectTyped) {
        let typedStrings = selectTyped.getAttribute('data-typed-items');
        typedStrings = typedStrings.split(',');
        new Typed('.typed', {
            strings: typedStrings,
            loop: true,
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 2000
        });
    }
});


// Theme selection function
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const profilePic = document.querySelector('picture img');

    themeToggleButton.addEventListener('click', function() {
        // Toggle theme
        document.body.classList.toggle('dark-theme');
        document.body.classList.toggle('light-theme');

        // Toggle icon and profile pic
        if (document.body.classList.contains('dark-theme')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            profilePic.src = './assets/img/profile_pic_dark.jpeg';
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            profilePic.src = './assets/img/profile_pic_light.jpeg';
        }
    });
});
