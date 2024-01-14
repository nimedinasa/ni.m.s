function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const sections = document.querySelectorAll('.fancy-section');
    
    sections.forEach((s) => {
        s.style.display = 'none';
    });

    section.style.display = 'flex';
}


