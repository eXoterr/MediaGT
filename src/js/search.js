import { doSearch } from "./widgets"

export function bindSearch(){
    let searchbar = document.getElementById("searchbar")
    
    searchbar.addEventListener("change", (e) => {
        let query = e.target.value
        
        doSearch(query)

    })
}