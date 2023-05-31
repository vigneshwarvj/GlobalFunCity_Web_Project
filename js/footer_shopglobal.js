// Create the parent div
const totalDivForFooter = document.createElement('div');
totalDivForFooter.classList.add('total_div_for_footer');

// Create the logo div
const logoDiv = document.createElement('div');
logoDiv.classList.add('logo');

// Create the logo image
const logoImage = document.createElement('img');
logoImage.src = '../../assets/images/globalfuncitylogo.png';
logoImage.classList.add('footer-logo');
logoImage.alt = 'logo';

// Append the logo image to the logo div
logoDiv.appendChild(logoImage);

// Append the logo div to the parent div
totalDivForFooter.appendChild(logoDiv);

// Create the shop-footer-main div
const shopFooterMainDiv = document.createElement('div');
shopFooterMainDiv.classList.add('shop-footer-main');

// Create the navbar-footer div
const navbarFooterDiv = document.createElement('div');
navbarFooterDiv.classList.add('navbar-footer');

// Create the unordered list for the navbar items
const navbarList = document.createElement('ul');

// Create and append list items for each navigation link
const navigationLinks = [
{ text: 'ABOUT US', href: '../../pages/other pages/home.html' },
{ text: 'EVENTS', href: '../../pages/other pages/events.html' },
{ text: 'OFFERS', href: '../../pages/other pages/offer.html' },
{ text: 'TICKET PRICES', href: '../../pages/other pages/ticketprices.html' },
{ text: 'SHOP', href: '../../pages/shop/shop.html' },
{ text: 'ATTRACTIONS', href: '../../pages/other pages/attractions.html' },
{ text: 'CONTACT', href: '../../pages/other pages/contact.html' },
];

navigationLinks.forEach(linkText => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.classList.add('navigation__link');
    link.href = linkText.href ;
    link.textContent = linkText.text;

    listItem.appendChild(link);
    navbarList.appendChild(listItem);
});

// Append the navbar list to the navbar-footer div
navbarFooterDiv.appendChild(navbarList);

// Append the navbar-footer div to the shop-footer-main div
shopFooterMainDiv.appendChild(navbarFooterDiv);

// Create the shop-footer div
const shopFooterDiv = document.createElement('div');
shopFooterDiv.classList.add('shop-footer');

// Create the unordered list for the shop-footer items
const shopFooterList = document.createElement('ul');

// Create and append list items for each shop footer link
const shopFooterLinks = ['ABOUT SHOPGLOBAL', 'ORDER TRACKING', 'GUEST SERVICES', 'ACCOUNT INFO', 'AFFILICATE PROGRAM'];
shopFooterLinks.forEach(linkText => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = linkText;

    listItem.appendChild(link);
    shopFooterList.appendChild(listItem);
});

// Append the shop-footer list to the shop-footer div
shopFooterDiv.appendChild(shopFooterList);

// Append the shop-footer div to the shop-footer-main div
shopFooterMainDiv.appendChild(shopFooterDiv);

// Create the other-navbar-footer div
const otherNavbarFooterDiv = document.createElement('div');
otherNavbarFooterDiv.classList.add('other-navbar-footer');

// Create the unordered list for the other-navbar-footer items
const otherNavbarList = document.createElement('ul');

// Create and append list items for each other navigation link
const otherNavigationLinks = [
    { text: 'PRIVACY POLICY', href: '../../pages/footer other pages/privacypolicy.html' },
    { text: 'CAREERS', href: '#top'},
    { text: 'SAFETY AND HYGIENE', href: '../../pages/footer other pages/safetyofvisitors.html' },
    { text: 'RULES & REGULATIONS', href: '../../pages/footer other pages/rulesandregulations.html' },
    { text: 'GREEN INITIATIVES', href: '../../pages/footer other pages/greeninitiatives.html' },
    { text: 'CSR INITIATIVES', href: '../../pages/footer other pages/csrinitiatives.html' },
];
otherNavigationLinks.forEach(otherlinkText => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.classList.add('other-navigation-link');
    link.href = otherlinkText.href ;
    link.textContent = otherlinkText.text;

    listItem.appendChild(link);
    otherNavbarList.appendChild(listItem);
});

// Append the other-navbar list to the other-navbar-footer div
otherNavbarFooterDiv.appendChild(otherNavbarList);

// Append the other-navbar-footer div to the shop-footer-main div
shopFooterMainDiv.appendChild(otherNavbarFooterDiv);

// Create the social-medias div
const socialMediasDiv = document.createElement('div');
socialMediasDiv.classList.add('social-medias');

// Create and append social media links
const socialMediaLinks = [
    { class: 'facebook', iconClass: 'fab fa-facebook-f', href: '#' },
    { class: 'twitter', iconClass: 'fab fa-twitter', href: '#' },
    { class: 'pinterest', iconClass: 'fab fa-pinterest', href: '#' },
    { class: 'instagram', iconClass: 'fab fa-instagram', href: '#' },
    { class: 'youtube', iconClass: 'fab fa-youtube', href: '#' }
];

for (let i = 0; i < socialMediaLinks.length; i++) {
    const iconDiv = document.createElement('div');
    iconDiv.className = socialMediaLinks[i].class;
    const link = document.createElement('a');
    link.href = '#';
    const icon = document.createElement('i');
    icon.className = socialMediaLinks[i].iconClass;
    link.appendChild(icon);
    iconDiv.appendChild(link);
    socialMediasDiv.appendChild(iconDiv);
  }





// Create the horizontal rule
const hr = document.createElement('hr');
hr.classList.add('footer-hr');



// Create the copyright div
const copyrightDiv = document.createElement('div');
copyrightDiv.classList.add('copyright');

const copyrightText = document.createElement('p');
copyrightText.innerHTML = 'Global Fun City &#169; 2022. All rights Reserved.<br>Site designed by Vignesh.in';

// Append the social-medias div to the parent div
totalDivForFooter.appendChild(shopFooterMainDiv);
totalDivForFooter.appendChild(socialMediasDiv);

// Append the copyright text to the copyright div
copyrightDiv.appendChild(copyrightText);

// Append the horizontal rule to the parent div
totalDivForFooter.appendChild(hr);

// Append the copyright div to the parent div
totalDivForFooter.appendChild(copyrightDiv);

// Append the parent div to the document body
document.querySelector('.footer_for_shopglobal').append(totalDivForFooter);
