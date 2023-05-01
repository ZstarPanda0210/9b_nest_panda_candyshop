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
        "data:image/png;base64,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",
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
      name: "c",
      price: 3200,
      description: "Candy",
      type: "chocolate",
      image:
        "https://thumbs.dreamstime.com/b/colorful-candy-background-8939634.jpg",
    },
    {
      name: "candyFive",
      price: 3200,
      description: "Candy",
      type: "chocolate",
      image:
        "https://thumbs.dreamstime.com/b/colorful-candy-background-8939634.jpg",
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