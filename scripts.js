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
  <li id="${product.name}">${product.name} ${product.price} </li>
  `,
    )
    .join('');
}

sliderInp.addEventListener('input', event => {
  const maxPrice = event.target.value;

  const newC = catalog.filter(product => maxPrice <= product.price.slice(1, 7));

  renderProducts(newC);
});

//* TODO *Find a way to get the value of the range input and make*/
//* an if statement that verifies if the event.target.value is < or > to the price *//
