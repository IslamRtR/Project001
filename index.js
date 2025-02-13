 // Сіз берген JSON деректерін айнымалыға саламыз
 const fruitData = {
    "fruites": [
      {
        "name": "алма",
        "price": 600,
        "weight": 1,
        "image": "https://images.satu.kz/220346363_w640_h640_iskusstvennyj-frukt-yabloko.jpg"
      },
      {
        "name": "апельсин",
        "price": 300,
        "weight": 1,
        "image": "https://foodcity.ru/storage/products/October2018/6XZSr6ddCl6cxfo0UchP.jpg"
      },
      {
        "name": "банан",
        "price": 500,
        "weight": 1,
        "image": "https://static.insales-cdn.com/images/products/1/2774/299748054/%D0%B1%D0%B0%D0%BD%D0%B0%D0%BD%D1%8B.jpg"
      },
      {
        "name": "құлпынай",
        "price": 900,
        "weight": 1,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzljVUMVExDl7RAwDBJvKRzKHZTu--KQ318w&s"
      },
      {
        "name": "өрік",
        "price": 700,
        "weight": 1,
        "image": "https://img.oe.kz/bitrix-catalog/6776/1720292123-xg06erh91p9k35m65jailuc23poeat01.jpg"
      },
      {
        "name": "алмұрт",
        "price": 700,
        "weight": 1,
        "image": "https://bazarga.kz/image/cache/catalog/managers/14/depositphotos_11489464-stock-photo-pears-500x500.jpg"
      },
      {
        "name": "шабдалы",
        "price": 500,
        "weight": 1,
        "image": "https://img.oe.kz/bitrix-catalog/18985/1720301196-persik-mohnatiy-tashkent-1000-gr-2.jpeg"
      },
      {
        "name": "ананас",
        "price": 400,
        "weight": 1,
        "image": "https://faktodrom.com/i/00005000wxCz0gw/RqU5o7Vki4c6tKxbcrZ-zrWiAg6_PPsc.jpg"
      },
      {
        "name": "қараөрік",
        "price": 250,
        "weight": 1,
        "image": "https://img.oe.kz/bitrix-catalog/6776/1720292123-xg06erh91p9k35m65jailuc23poeat01.jpg"
      },
      {
        "name": "киви",
        "price": 700,
        "weight": 1,
        "image": "https://foodcity.ru/storage/products/October2018/7Gwfj2qXcLH877CTGlnE.jpg"
      },
      {
        "name": "құрма",
        "price": 900,
        "weight": 1,
        "image": "https://png.pngtree.com/png-vector/20240117/ourlarge/pngtree-kurma-dates-fruit-saudi-isolated-middle-png-image_11444717.png"
      },
      {
        "name": "анар",
        "price": 600,
        "weight": 1,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUU61A7to-Ft75ZQy8UWMTu1poJAPQSLvZ1g&s"
      },
      {
        "name": "манго",
        "price": 900,
        "weight": 1,
        "image": "https://fruits-exotic.ru/upload/iblock/9bf/9bf58fad5a7c75e19394982a61772e3c.jpg"
      },
      {
        "name": "қарбыз",
        "price": 400,
        "weight": 1,
        "image": "https://img.oe.kz/bitrix-catalog/48791/1722589956-g5leuz203ba84wygjji6g04z4fu3on76.jpg"
      },
      {
        "name": "қауын",
        "price": 500,
        "weight": 1,
        "image": "https://stan.kz/wp-content/uploads/2016/08/865.jpg"
      },
      {
        "name": "жүзім",
        "price": 700,
        "weight": 1,
        "image": "https://img.oe.kz/bitrix-catalog/21419/1720302805-vinograd-zeleniy-1000-gr-2.jpeg"
      },
      {
        "name": "лимон",
        "price": 900,
        "weight": 1,
        "image": "https://produktoff.kz/pictures/product/big/6962_big.jpg"
      },
      {
        "name": "Какос",
        "price": 700,
        "weight": 1,
        "image": "https://www.waterbaikal.ru/image/catalog/Promo/kokosovaja-voda-polza.jpg"
      },
      {
        "name": "қарақат",
        "price": 500,
        "weight": 1,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8mXYvWxjR8wEO0CajtzigireHIN1p7kicEgLEmN7UenQQpFdrSDreZRYA4GgycggDxM8&usqp=CAU"
      }
    ]
  };

  // JSON-дан алынған жемістер тізімін quantity қасиетімен кеңейтеміз
  const fruits = fruitData.fruites.map(item => ({
    ...item,
    quantity: 0
  }));

  // Модалды ашатын батырма
  document.addEventListener("DOMContentLoaded", function() {
    const showDeliveryBtn = document.getElementById("show-delivery");
    if (!showDeliveryBtn) {
      console.error("Button with id 'show-delivery' табылмады.");
      return;
    }
    
    showDeliveryBtn.addEventListener("click", function() {
      // Overlay құру
      const overlay = document.createElement("div");
      overlay.className = "overlay";
      
      // Модал контейнері (жасыл фон)
      const modal = document.createElement("div");
      modal.className = "modal";
      
      // Жабу батырмасы
      const closeButton = document.createElement("button");
      closeButton.textContent = "X";
      closeButton.className = "close-btn";
      modal.appendChild(closeButton);
      closeButton.addEventListener("click", function() {
        document.body.removeChild(overlay);
      });
      
      // Карзина тақырыбы
      const cartTitle = document.createElement("h2");
      cartTitle.textContent = "Карзина";
      modal.appendChild(cartTitle);
      
      // Карзина элементтерін шығаратын контейнер
      const cartItemsContainer = document.createElement("div");
      
      // Жалпы бағаны көрсету
      const totalPriceEl = document.createElement("div");
      totalPriceEl.className = "total-price";
      
      function updateTotal() {
        let total = 0;
        fruits.forEach(fruit => {
          total += fruit.price * fruit.quantity;
        });
        totalPriceEl.textContent = "Барлығының бағасы: " + total + " тг";
      }
      
      function renderCartItems() {
        cartItemsContainer.innerHTML = "";
        fruits.forEach(fruit => {
          const itemDiv = document.createElement("div");
          itemDiv.className = "cart-item";
          
          // Сурет
          const img = document.createElement("img");
          img.src = fruit.image;
          img.alt = fruit.name;
          itemDiv.appendChild(img);
          
          // Аты мен бағасы бар блок
          const itemInfo = document.createElement("div");
          itemInfo.className = "item-info";
          itemInfo.textContent = `${fruit.name} (${fruit.price} тг)`;
          itemInfo.style.marginRight = "10px";
          itemDiv.appendChild(itemInfo);
          
          // Басқару батырмалары (минус, сан, плюс)
          const controlsDiv = document.createElement("div");
          controlsDiv.className = "controls";
          
          const minusBtn = document.createElement("button");
          minusBtn.textContent = "-";
          controlsDiv.appendChild(minusBtn);
          
          const qtySpan = document.createElement("span");
          qtySpan.textContent = fruit.quantity;
          controlsDiv.appendChild(qtySpan);
          
          const plusBtn = document.createElement("button");
          plusBtn.textContent = "+";
          controlsDiv.appendChild(plusBtn);
          
          plusBtn.addEventListener("click", function() {
            fruit.quantity++;
            qtySpan.textContent = fruit.quantity;
            updateTotal();
          });
          
          minusBtn.addEventListener("click", function() {
            if (fruit.quantity > 0) {
              fruit.quantity--;
              qtySpan.textContent = fruit.quantity;
              updateTotal();
            }
          });
          
          itemDiv.appendChild(controlsDiv);
          cartItemsContainer.appendChild(itemDiv);
        });
      }
      
      renderCartItems();
      updateTotal();
      
      // "Очистить" батырмасы
      const clearButton = document.createElement("button");
      clearButton.textContent = "Очистить";
      clearButton.style.marginTop = "10px";
      clearButton.addEventListener("click", function() {
        fruits.forEach(fruit => fruit.quantity = 0);
        renderCartItems();
        updateTotal();
      });
      
      // "Заказать" батырмасы
      const orderButton = document.createElement("button");
      orderButton.textContent = "Заказать";
      orderButton.className = "order-btn";
      orderButton.addEventListener("click", function() {
        let total = 0;
        fruits.forEach(fruit => {
          total += fruit.price * fruit.quantity;
        });
        if (total > 0) {
          alert("Тапсырыс қабылданды. Жалпы баға: " + total + " тг");
          // Қажет болса, мұнда серверге жіберу кодын қосуға болады
        } else {
          alert("Өнім таңдалмаған. Өтінеміз, себеттен өнім таңдаңыз.");
        }
      });
      
      // Модалға элементтерді қосамыз
      modal.appendChild(cartItemsContainer);
      modal.appendChild(clearButton);
      modal.appendChild(totalPriceEl);
      modal.appendChild(orderButton);
      
      overlay.appendChild(modal);
      document.body.appendChild(overlay);
    });
  });
