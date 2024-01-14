function toggleSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.fancy-section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'flex';
    }
}




