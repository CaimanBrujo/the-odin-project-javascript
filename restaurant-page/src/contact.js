export default function loadContact() {
    const content = document.querySelector('#content');
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');

    const heading = document.createElement('h1');
    heading.textContent = 'Contact Us';

    const phone = document.createElement('p');
    phone.textContent = '📞 Phone: +123 456 7890';

    const address = document.createElement('p');
    address.textContent = '📍 Swamp Street 404, Nowhere, Earth';

    contactDiv.appendChild(heading);
    contactDiv.appendChild(phone);
    contactDiv.appendChild(address);

    content.appendChild(contactDiv);
}
