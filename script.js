document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('darkModeToggle');
    const body = document.body;
    const toggleIcon = toggleButton.querySelector('i');
    const currentYearSpan = document.getElementById('currentYear');

    // Function to set the theme
    const setTheme = (isDark) => {
        body.classList.toggle('dark-mode', isDark);
        toggleIcon.classList.toggle('fa-sun', isDark); // Sun icon for dark mode
        toggleIcon.classList.toggle('fa-moon', !isDark); // Moon icon for light mode
        localStorage.setItem('darkModeEnabled', isDark);
    };

    // Check local storage for saved theme preference
    const prefersDark = localStorage.getItem('darkModeEnabled') === 'true';
    setTheme(prefersDark);

    // Add event listener for the toggle button
    toggleButton.addEventListener('click', () => {
        const isDarkMode = body.classList.contains('dark-mode');
        setTheme(!isDarkMode); // Toggle the theme
    });

    // Set current year in footer
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});
