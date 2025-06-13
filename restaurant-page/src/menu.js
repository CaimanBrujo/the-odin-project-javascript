export default function loadMenu() {
    const content = document.querySelector('#content');
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');

    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';

    const item1 = document.createElement('p');
    item1.textContent = '🧀 Swamp Cheese Nuggets';

    const item2 = document.createElement('p');
    item2.textContent = '🐸 Grilled Frog Legs';

    menuDiv.appendChild(heading);
    menuDiv.appendChild(item1);
    menuDiv.appendChild(item2);

    content.appendChild(menuDiv);
}
