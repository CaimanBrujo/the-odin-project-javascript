export default function loadHome() {
    const content = document.querySelector('#content');
    
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home');

    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to Swamp Kitchen';

    const description = document.createElement('p');
    description.textContent = 'The best swamp-based delicacies in the multiverse.';

    const img = document.createElement('img');
    img.src = 'https://source.unsplash.com/600x300/?restaurant';
    img.alt = 'Delicious food';

    homeDiv.appendChild(heading);
    homeDiv.appendChild(description);
    homeDiv.appendChild(img);

    content.appendChild(homeDiv);
}
