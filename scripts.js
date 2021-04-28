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

function renderProducts(products, rangePrice) {
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

sliderInp.addEventListener('input', event => {
  renderProducts(catalog, event.target.value);
});

//* TODO *Find a way to get the value of the range input and make*/
//* an if statement that verifies if the event.target.value is < or > to the price *//
