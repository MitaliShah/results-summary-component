const summaryEl = document.getElementById("summary-list");

const getData = async() => {
    const response = await fetch(`./data.json`)
    const data = await response.json()
    data.forEach((item) => {
        const summaryListItem = document.createElement("div");
        summaryListItem.innerHTML = `
            <div class= 'summary-icon-category'>
                <div class="summary-left">
                    <img src='${item.icon}'>
                    <h4>${item.category}</h4>
                </div>    
                <p>${item.score}<span> / 100</span></p>
            </div>`
                
            summaryListItem.classList.add('summary-item')
            summaryEl.append(summaryListItem)
    })
}

getData()