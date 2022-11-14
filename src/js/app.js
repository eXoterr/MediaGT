import { loadWidgets, runWidgets } from './widgets'
import { loadBuiltIn } from './loader'
import { bindSearch } from './search'

export function startApp(){
    window.onload = () => {
        loadBuiltIn()
        loadWidgets()
        runWidgets()
        bindSearch()
    }
}