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
        "https://assets.stickpng.com/thumbs/601bc05545dd950004124ba2.png",
    },
    {
      name: "Pop Rocks",
      price: 2500,
      description: "Candy",
      type: "hard,sour",
      image:
        "https://candy-shop.pl/userdata/public/gfx/4156/pop-rocks-strawberry.png",
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
      description: "chocolate",
      type: "chocolate",
      image:
        "https://www.pngplay.com/wp-content/uploads/15/Twix-Cookie-Bars-Transparent-File.png",
    },
    {
      name: "Nerds",
      price: 1900,
      description: "rock type of candy",
      type: "rock",
      image:
        "https://www.nerdscandy.com/sites/default/files/2022-06/nerds_rainbow.png",
    },
    {
      name: "Star Burst",
      price: 2000,
      description: "Candy",
      type: "sugary",
      image:
        "https://assets.stickpng.com/images/601571b9a038420004234a85.png",
    },
    {
      name: "Sour Patch",
      price: 2000,
      description: "sour type of candy",
      type: "",
      image:
        "https://images.contentstack.io/v3/assets/bltbb619fd5c667ba2d/bltf7f1264eea07e4b7/60ad78c84adeb65c03d76eed/Sour_Patch_Kids_Watermelon_1800X1800_transparent.png",
    },
    {
      name: "Juicy Drop",
      price: 1000,
      description: "liquid,sour type of candy",
      type: "chocolate",
      image:
        "https://cdn.shopify.com/s/files/1/1341/1521/products/Gummies_1_600x.png?v=1625673439",
    },
    {
      name: "Jolly Ranchers",
      price: 3500,
      description: "Candy",
      type: "chocolate",
      image:
        "https://assets.stickpng.com/images/60158fa65cc23e000407ba1a.png",
    },
    {
      name: "Hershey's",
      price: 3000,
      description: "milk chocolate",
      type: "milk chocolate",
      image:
        "https://www.nicepng.com/png/full/155-1553367_hershey-s-milk-chocolate-hershey-chocolate-bar-transparent.png",
    },
    {
      name: "Sour punch",
      price: 2100,
      description: "Candy",
      type: "chocolate",
      image:
        "https://www.nicepng.com/png/full/117-1170277_strawberry-sour-punch-straws-candy-sour-punch-straws.png",
    },
    {
      name: "Chupa Chups",
      price: 1200,
      description: "Lollipop",
      type: "chocolate",
      image:
        "https://www.pngmart.com/files/10/Chupa-Chups-Lollipop-PNG-Image.png",
    },
    {
      name: "Haribo",
      price: 1500,
      description: "Candy",
      type: "chocolate",
      image:
        "https://cdn11.bigcommerce.com/s-f8tgd9j/images/stencil/1280x1280/products/140/5438/haribo_gold_bears_4oz_bag__62602.1525119458.png?c=2",
    },
    {
      name: "Mars",
      price: 2500,
      description: "Candy",
      type: "chocolate",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/de/Mars.png",
    },
    {
      name: "Reese's cups",
      price: 2200,
      description: "Candy",
      type: "chocolate",
      image:
        "https://pngimg.com/d/chupa_chups_PNG21.png",
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
  const totalValue = document.querySelector('.total-value');

function updateTotalValue(newValue) {
  totalValue.textContent = `$${newValue.toFixed(2)}`;
}


updateTotalValue(100.50);
