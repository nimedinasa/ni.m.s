function showSection(sectionNumber) {
            // Hide all sections
            document.querySelectorAll('.fancy-section').forEach(function(section) {
                section.style.display = 'none';
            });

            // Show the selected section
            document.getElementById('section' + sectionNumber).style.display = 'block';
        }
