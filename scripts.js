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
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
];

const ul = document.createElement('ul');

/**
 * Render based on the value of `maxPrice`
 * @param {number} maxPrice
 */

function render(filtered) {
  ul.innerHTML = filtered
    .map(({ name, price }) => `<li>${name} - ${price}</li>`)
    .join('');
}

function filterByMaxPrice(products, max) {
  const filteredPriceCatalog = max
    ? catalog.filter(({ price }) => price.slice(1) < max)
    : catalog;
  render(filteredPriceCatalog);
}

document.body.appendChild(ul);
render(catalog);

document
  .querySelector('input')
  .addEventListener('input', ({ target: { value } }) => {
    render(Number(value));
  });

document
  .querySelector('#chckbx')
  .addEventListener('change', ({ target: { checked } }) => {
    let filteredStockCatalog = catalog.filter(
      product => product.stocked === true,
    );

    if (checked === false) {
      filteredStockCatalog = catalog;
    }

    render(filteredStockCatalog);
  });

document.querySelector('#byName').addEventListener('keyup', event => {
  const filteredCatalogByName = catalog.filter(product =>
    product.name.toLowerCase().includes(event.target.value),
  );

  console.log(event.target.value);

  render(filteredCatalogByName);
});
