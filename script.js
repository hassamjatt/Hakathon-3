function addEducation() {
    const educationSection = document.getElementById('educationSection');
    const newEntry = document.createElement('div');
    newEntry.classList.add('education-entry');
    newEntry.innerHTML = `
        <input type="text" name="eduDuration[]" placeholder="Duration (e.g., 2010-2015)">
        <input type="text" name="eduInstitution[]" placeholder="Institution Name">
        <textarea name="eduDescription[]" placeholder="Description"></textarea>
    `;
    educationSection.appendChild(newEntry);
}

function addExperience() {
    const experienceSection = document.getElementById('experienceSection');
    const newEntry = document.createElement('div');
    newEntry.classList.add('experience-entry');
    newEntry.innerHTML = `
        <input type="text" name="expDuration[]" placeholder="Duration">
        <input type="text" name="expCompany[]" placeholder="Company/Organization Name">
        <textarea name="expDescription[]" placeholder="Description"></textarea>
    `;
    experienceSection.appendChild(newEntry);
}

function addSkill() {
    const skillsSection = document.getElementById('skillsSection');
    const newEntry = document.createElement('div');
    newEntry.classList.add('skill-entry');
    newEntry.innerHTML = `
        <input type="text" name="skillName[]" placeholder="Skill Name">
        <input type="number" name="skillLevel[]" placeholder="Skill Level (0-100)" min="0" max="100">
    `;
    skillsSection.appendChild(newEntry);
}

function generateResume() {
    const form = document.getElementById('resumeForm');
    const formData = new FormData(form);

    document.getElementById('profilePic').src = URL.createObjectURL(formData.get('profilePicture'));
    document.getElementById('displayName').innerText = formData.get('name');
    document.getElementById('displayJobTitle').innerText = formData.get('jobTitle');
    document.getElementById('displayAddress').innerText = formData.get('address');
    document.getElementById('displayEmail').innerText = formData.get('email');
    document.getElementById('displayWebsite').innerText = formData.get('website');
    document.getElementById('displayPhone').innerText = formData.get('phone');
    document.getElementById('displayLinkedIn').innerText = formData.get('linkedin');
    document.getElementById('displayTwitter').innerText = formData.get('twitter');
    document.getElementById('displayInstagram').innerText = formData.get('instagram');
    document.getElementById('displayAbout').innerText = formData.get('about');

    const educationSection = document.getElementById('displayEducation');
    educationSection.innerHTML = '';
    const eduDurations = formData.getAll('eduDuration[]');
    const eduInstitutions = formData.getAll('eduInstitution[]');
    const eduDescriptions = formData.getAll('eduDescription[]');
    for (let i = 0; i < eduDurations.length; i++) {
        const entry = document.createElement('div');
        entry.classList.add('entry');
        entry.innerHTML = `
            <h3>${eduDurations[i]}</h3>
            <p><strong>${eduInstitutions[i]}</strong></p>
            <p>${eduDescriptions[i]}</p>
        `;
        educationSection.appendChild(entry);
    }

    const experienceSection = document.getElementById('displayExperience');
    experienceSection.innerHTML = '';
    const expDurations = formData.getAll('expDuration[]');
    const expCompanies = formData.getAll('expCompany[]');
    const expDescriptions = formData.getAll('expDescription[]');
    for (let i = 0; i < expDurations.length; i++) {
        const entry = document.createElement('div');
        entry.classList.add('entry');
        entry.innerHTML = `
            <h3>${expDurations[i]}</h3>
            <p><strong>${expCompanies[i]}</strong></p>
            <p>${expDescriptions[i]}</p>
        `;
        experienceSection.appendChild(entry);
    }

    const skillsSection = document.getElementById('displaySkills');
    skillsSection.innerHTML = '';
    const skillNames = formData.getAll('skillName[]');
    const skillLevels = formData.getAll('skillLevel[]');
    for (let i = 0; i < skillNames.length; i++) {
        const skill = document.createElement('div');
        skill.classList.add('skill');
        skill.innerHTML = `
            <p>${skillNames[i]}</p>
            <div class="skill-bar">
                <div style="width: ${skillLevels[i]}%;"></div>
            </div>
        `;
        skillsSection.appendChild(skill);
    }

    
}

function printResume() {
    const resumeContent = document.getElementById("resumeSection").innerHTML; // Resume content
    const printWindow = window.open('', '', 'height=800,width=800');
  
    printWindow.document.write('<html><head><title>Print Resume</title>');
    // Add the link to the print stylesheet
    printWindow.document.write('<link rel="stylesheet" href="style.css" />');  // Make sure your CSS file is linked
    printWindow.document.write('</head><body>');
    
    printWindow.document.write(resumeContent);  // Only printing resume
    printWindow.document.write('</body></html>');
    
    printWindow.document.close();  // Important to close the document
    printWindow.print(); // Trigger the print dialog
  }
  