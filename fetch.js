function fetchFruit(){
    fetch('localhost:5000/products')
  .then((res)=> res.data)
  .then(data => console.log(data));
  }
  let getProduct = document.querySelector('#products');
  products.innerHTML = kiosk.html;
  fetchFruit()