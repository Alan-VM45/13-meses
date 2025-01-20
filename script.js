document.addEventListener('DOMContentLoaded', () => {
    const hearts = document.createElement('div');
    hearts.innerHTML = '❤️';
    hearts.style.position = 'absolute';
    hearts.style.animation = 'float 5s infinite';
    document.body.appendChild(hearts);
});
