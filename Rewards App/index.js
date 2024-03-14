document.getElementById('achievements-button').addEventListener('click', function() {
    const achievementsContainer = document.querySelector('.achievements-container');
    if (!achievementsContainer) {
        const newContainer = document.createElement('div');
        newContainer.className = 'achievements-container';
        document.body.appendChild(newContainer);
    } else {
        achievementsContainer.classList.toggle('content-hidden');
    }
});