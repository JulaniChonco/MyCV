function showContent(contentId) {
    const tabs = document.querySelectorAll('.content > div');
    const buttons = document.querySelectorAll('.nav button');

    tabs.forEach(tab => tab.style.display = 'none');
    buttons.forEach(btn => btn.classList.remove('active'));

    document.getElementById(contentId).style.display = 'block';
    event.target.classList.add('active');
}

function searchContent() {
    const query = document.getElementById('search-box').value.toLowerCase();
    const aboutMeText = document.querySelector('#about').textContent.toLowerCase();
    const skillsText = document.querySelector('#skills').textContent.toLowerCase();
    const experienceText = document.querySelector('#experience').textContent.toLowerCase();
    const educationText = document.querySelector('#education').textContent.toLowerCase();

    let results = '';

    if (aboutMeText.includes(query)) {
        results += '<h4>About Me</h4><p>' + document.querySelector('#about').innerHTML + '</p>';
    }
    if (skillsText.includes(query)) {
        results += '<h4>Skills</h4><p>' + document.querySelector('#skills').innerHTML + '</p>';
    }
    if (experienceText.includes(query)) {
        results += '<h4>Experience</h4><p>' + document.querySelector('#experience').innerHTML + '</p>';
    }
    if (educationText.includes(query)) {
        results += '<h4>Education</h4><p>' + document.querySelector('#education').innerHTML + '</p>';
    }

    if (!results) {
        results = `<p>No results found for "${query}".</p>`;
    }

    document.getElementById('search-results').innerHTML = results;
}

showContent('about');
