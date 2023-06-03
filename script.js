const summaryEl = document.getElementById("summary-list");

const getData = async() => {
    const response = await fetch(`./data.json`)
    const data = await response.json()
    data.forEach((item) => {
        const summaryListItem = document.createElement("li");
        summaryListItem.innerHTML = `       
                <div class="summary-left">
                    <img class="icon" src='${item.icon}' alt="">
                    <h4 class="item-category-name">${item.category}</h4>
                </div> 
                <div class="summary-right">
                    <p class="item-score">${item.score}<span class="slash-hundred"> / 100</span></p>
                </div>`
                
            summaryListItem.classList.add('summary-item')
            summaryEl.append(summaryListItem)
    })
}

getData()

