const products = [
    {
      name: "snickers",
      price: 4000,
      description: "Candy",
      type: "chocolate",
      image:
        "https://pngimg.com/uploads/snickers/snickers_PNG13929.png",
    },
    {
      name: "Air Heads",
      price: 1200,
      description: "Candy",
      type: "gummy",
      image:
        "https://assets.stickpng.com/images/601bc05545dd950004124ba2.png",
    },
    {
      name: "Pop Rocks",
      price: 2500,
      description: "Candy",
      type: "hard,sour",
      image:
        "https://www.nicepng.com/png/detail/353-3539716_siriusxm-pop-rocks.png ",
    },
    {
      name: "M&m",
      price: 550,
      description: "Candy",
      type: "choclate",
      image:
        "https://pngimg.com/d/m_m_PNG6.png",
    },
    {
      name: "Kit Kat",
      price: 3200,
      description: "Candy",
      type: "chocolate",
      image:
        "https://assets.stickpng.com/images/58d2a6b0dc164e9dd9e668f2.png",
    },
    {
      name: "Skittle",
      price: 1500,
      description: "Candy",
      type: "chocolate",
      image:
        "https://pngimg.com/uploads/skittles/skittles_PNG12.png",
    },
    {
      name: "Twixx",
      price: 2100,
      description: "Candy",
      type: "chocolate",
      image:
        "https://www.pngplay.com/wp-content/uploads/15/Twix-Cookie-Bars-Transparent-File.png",
    },
  ];
  
  
  function PrintProducts() {
    const productsContainer = document.getElementById("products");
    let newDiv = "";
  
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
  
      //console.log(${product.name} - ${product.price});
  
      const div = document.createElement("div");
      div.classList.add("product");
      div.innerHTML = `
        <img class='productImage' src="${product.image}"
        <h3 class="title">${product.name}</h3>
        <p>${product.description}</p>
        <p id="price">${product.price}</p>
        <button onclick="AddItem('${product.name}')">add</button>
        <button onclick="MinusItem('${product.name}')">minus</button>
      `;
  
      newDiv += div.outerHTML;
    }
  
    productsContainer.innerHTML = newDiv;
  }
  
  window.onload = PrintProducts;
  
  const userbasket = [];
  
  function AddItem(itemName) {
    const itemIndex = userbasket.findIndex((item) => item.name === itemName);
  
    if (itemIndex !== -1) {
      userbasket[itemIndex].quantity += 1;
    } else {
      userbasket.push({ name: itemName, quantity: 1 });
    }
  
    Basket();
  }
  
  function MinusItem(itemName) {
    const itemIndex = userbasket.findIndex((item) => item.name === itemName);
  
    if (itemIndex !== -1) {
      userbasket[itemIndex].quantity -= 1;
  
      if (userbasket[itemIndex].quantity === 0) {
        userbasket.splice(itemIndex, 1);
      }
    }
  
    Basket();
  }
  
  function Purchase() {
    let total = 0;
    for (let i = 0; i < userbasket.length; i++) {
      const { name, quantity } = userbasket[i];
      const product = products.find((p) => p.name === name);
      if (product) {
        total += product.price * quantity;
      }
    }
  
    document.getElementById("total").innerHTML = total;
    Clear();
  }
  
  function Clear() {
    userbasket = [];
  }
  
  function Basket() {
    const basketDiv = document.getElementById("basket");
    const basketHtml = userbasket
      .map(
        ({ name, quantity }) => `
      <h1>${name} - ${quantity}</h1>
    `
      )
      .join("");
    basketDiv.innerHTML = basketHtml;
  }