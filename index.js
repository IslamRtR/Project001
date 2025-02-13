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

sendAreaBtn.addEventListener('click', async function () {
    const data = await getFruits();
    const flyDiv = document.createElement('div');
    flyDiv.classList.add('fly');
    data.fruites.forEach((element,index) => {
        const newCard = document.createElement('div');
        newCard.classList.add('image-item');
        newCard.innerHTML = `
        <img src="${element.image}" alt="fruit"/>
        <div class="control-box">
          <button onclick="decreaseCount(${index})">-</button>
          <span class="count">${listOfFruitsCount[index]}</span>
          <button onclick="increaseCount(${index})">+</button>
        </div>
        `;
        flyDiv.appendChild(newCard);
    });
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('info-box');
    infoDiv.innerHTML = `
    <button onclick="clearAll()"></button>
    `;
});

function decreaseCount(index) {
    if (listOfFruitsCount[index] > 0) {
        listOfFruitsCount[index]--;
    }
    else {
        listOfFruitsCount[index] = 0;
    }
    const countSpan = document.querySelector(`span.count:nth-child(${index+1})`);
    countSpan.textContent = listOfFruitsCount[index];
}

function increaseCount(index) {
    listOfFruitsCount[index]++;
    const countSpan = document.querySelector(`span.count:nth-child(${index+1})`);
    countSpan.textContent = listOfFruitsCount[index];
}

function clearAll() {
    listOfFruitsCount = [];
    const countSpans = document.querySelectorAll('span.count');
    countSpans.forEach(countSpan => {
        countSpan.textContent = 0;
    });
}

/*<div class="container">
    <div class="image-grid">
    </div>
    <div class="info-box">
      这里是信息显示窗口
    </div>
  </div>
*/