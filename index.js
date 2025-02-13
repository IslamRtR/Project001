const sendAreaBtn = document.getElementById('send-place');

async function getFruits() {
    try {
        const response = await fetch('fresh_fruite_infomation.json');
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch (error) {
        console.error(error);
    }
}

let listOfFruitsCount = [];
let allPricelist = [];
let allPrice = 0;

sendAreaBtn.addEventListener('click', async function () {
    const data = await getFruits();
    const flyDiv = document.createElement('div');
    flyDiv.classList.add('fly');
    const image_grid = document.createElement('div');
    image_grid.classList.add('image-grid');
    data.fruites.forEach((element, index) => {
        listOfFruitsCount[index] = 0;
        allPricelist[index] = element.price;
        const newCard = document.createElement('div');
        newCard.classList.add('item');
        newCard.innerHTML = `
        <img src="${element.image}" alt="fruit"/>
        <div class="control-box">
          <button onclick="decreaseCount(${index})">-</button>
          <span class="count">${listOfFruitsCount[index]}</span>
          <span>${element.price}</span>
          <button onclick="increaseCount(${index})">+</button>
        </div>
        `;
        image_grid.appendChild(newCard);
    });
    flyDiv.appendChild(image_grid);
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('info-box');
    infoDiv.innerHTML = `
    <button onclick="clearAll()">Тазалау</button>
    <input type="text" placeholder="Обши" readonly id="all-price"></input>
    `;
    flyDiv.appendChild(infoDiv);
    document.body.appendChild(flyDiv);
    allPriceSpan = document.getElementById('all-price')
});

let allPriceSpan = null;

function decreaseCount(index) {
    if (listOfFruitsCount[index] > 0) {
        listOfFruitsCount[index]--;
        allPrice -= allPricelist[index];
    }
    else {
        listOfFruitsCount[index] = 0;
    }
    const countSpan = document.querySelectorAll(`.count`)[index];
    countSpan.textContent = listOfFruitsCount[index];
    allPriceSpan.value = allPrice;
}

function increaseCount(index) {
    listOfFruitsCount[index]++;
    allPrice += allPricelist[index];
    const countSpan = document.querySelectorAll(`.count`)[index];
    countSpan.textContent = listOfFruitsCount[index];
    allPriceSpan.value = allPrice;
}

function clearAll() {
    listOfFruitsCount.map(() => 0);
    const countSpans = document.querySelectorAll('.count');
    countSpans.forEach(countSpan => {
        countSpan.textContent = 0;
    });
    allPrice = 0;
    allPriceSpan.value = allPrice;
}
