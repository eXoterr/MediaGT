const MENU = document.getElementById("menu")
const CONTENT = document.getElementById("content")
const LOADED_WIDGETS = []

let widgets = {}

export function loadWidgets(){
    for (let widget of Object.values(widgets)){
        let widgetBttn = document.createElement('button')
        widgetBttn.innerText = widget?.title
        widgetBttn.classList.add("widget")
        widget.init().then(data => widget.data = data).then((data) => {renderWidgetData(data)})
        widgetBttn.addEventListener("click", (e) => {
            CONTENT.innerHTML = ""
            e.preventDefault()
            console.log(widget.package)
            renderWidgetData(widget.data)
            
        })
        LOADED_WIDGETS.push(widget)
        MENU.appendChild(widgetBttn)
        
    }
}

export  function runWidgets(){
    LOADED_WIDGETS.map((widget) => {
        renderWidgetData(widget?.data)
    })
}

export function registerWidget(widget){
    widgets[widget?.package] = widget
}

function getWidgetData(){

}

function renderWidgetData(data){
    data.map(item => {
        let widgetItem = createWidget(item)

        CONTENT.appendChild(widgetItem)

    })
}

export function doSearch(query){
    //TODO

    // console.log(LOADED_WIDGETS)
    // let results = LOADED_WIDGETS.filter((widget) => {
    //     return widget?.title.toLowerCase().includes(query.toLowerCase())
    // })
    // console.log(results)

    // CONTENT.innerHTML = ""
    // results.map((w) => {
    //     CONTENT.appendChild(createWidget(w))
    // })
}

function createWidget(item){
    let widget = document.createElement("div")
    let widgetItem = document.createElement("a")
    widgetItem.href = item?.url
    widgetItem.classList.add("widget__item")
    widget.classList.add("widget_"+item?.style)
    widgetItem.style.cssText = `background-image: url(${item?.background});`
    
    let widgetData = document.createElement("div")
    widgetData.classList.add("widget__data")

    widgetData.innerHTML = `
        <h3 class="item__title">${item?.title}</h3>
        <p class="item__subtitle">${item?.data}</p>
    `

    widget.appendChild(widgetItem)
    widget.appendChild(widgetData)
    return widget
}