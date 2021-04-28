const ul = document.body.appendChild(document.createElement('ul'));
const sliderInp = document.querySelector('#slider');

const catalog = [
  {
    category: 'Sporting Goods',
    price: '$49.99',
    stocked: true,
    name: 'Football',
  },
  {
    category: 'Sporting Goods',
    price: '$9.99',
    stocked: true,
    name: 'Baseball',
  },
  {
    category: 'Sporting Goods',
    price: '$29.99',
    stocked: false,
    name: 'Basketball',
  },
  {
    category: 'Electronics',
    price: '$99.99',
    stocked: true,
    name: 'iPod Touch',
  },
  {
    category: 'Electronics',
    price: '$399.99',
    stocked: false,
    name: 'iPhone 5',
  },
  {
    category: 'Electronics',
    price: '$199.99',
    stocked: true,
    name: 'Nexus 7',
  },
];

function renderProducts(products) {
  ul.innerHTML = products
    .map(
      product => `
  <li>
    <h6 id="${product.name}">${product.name} ${product.price}</h6>
  </li>
  `,
    )
    .join('');
}

renderProducts(catalog);

sliderInp.addEventListener('input', event => {});

//* TODO *Call the function into the event listener(?)*/
//* TODO *Find a way to get the input*/
