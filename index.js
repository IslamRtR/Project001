const sendAreaBtn = document.getElementById('send-place');

async function getFruits(){
    try{
        const response = await fetch('fresh_fruite_infomation.json');
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch(error){
        console.error(error);
    }
}

sendAreaBtn.addEventListener('click',async function() {
    await getFruits();
    const flyDiv = document.createElement('div');
    flyDiv.classList.add('fly');
    
});