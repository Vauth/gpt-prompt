async function GetData() {
    const response = await fetch("data.json");
    return await response.json();
}

document.addEventListener('DOMContentLoaded', async () => {
    const jsonList = document.getElementById('jsonList');
    const DATA = await GetData();
    DATA.forEach(item => {
        for (const key in item) {
            const he = document.createElement('h2');
            const li = document.createElement('li');
            he.textContent = key;
            li.textContent = item[key];
            jsonList.appendChild(he)
            jsonList.appendChild(li);
        }
    });
});


document.getElementById('jsonList').onclick = function(event) {
    if (event.target.tagName === 'LI') {
        const clickedItem = event.target;
        const copiedItem = clickedItem.cloneNode(true);
        navigator.clipboard.writeText(copiedItem.innerHTML)
        const alertBox = document.getElementById('custom-alert');
        alertBox.classList.add('show');
        setTimeout(() => { alertBox.classList.remove('show') }, 2000);
    }
};