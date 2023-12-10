const products = [
    {
        name: 'Bicicleta montaña',
        image: './assets/C:\Users\JHON BENITEZ\Downloads\BICICL.jfif',
        price: 200,
        quantity: 2,
    },
    {
      name: 'Iphone 7',
      image: './assets/celular.jpg',
      price: 500,
      quantity: 4,
    },
    {
      name: 'Gafas de sol',
      image: './assets/lentes.jpg',
      price: 100,
      quantity: 6,
    },
    {
      name: 'Juego comedor',
      image: './assets/mesa.jpg',
      price: 320,
      quantity: 1,
    }
  ];
  
  const productList = document.getElementById('productList');
  
  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
  
    const imageElement = document.createElement('img');
    imageElement.src = product.image;
    imageElement.alt = product.name;
    productElement.appendChild(imageElement);
  
    const nameElement = document.createElement('h4');
    nameElement.textContent = product.name;
    productElement.appendChild(nameElement);
  
    const priceElement = document.createElement('p');
    priceElement.textContent = `$${product.price}`;
    productElement.appendChild(priceElement);
  
    const addButton = document.createElement('input');
    addButton.type = 'button';
    addButton.value = 'Add to Cart';
    addButton.classList.add('botones');
    productElement.appendChild(addButton);
  
    productList.appendChild(productElement);
  });
  