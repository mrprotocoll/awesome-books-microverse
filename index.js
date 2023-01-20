import contents from './modules/Content.js'
import UI from "./modules/UI.js"
window.addEventListener('load', () => {
    const dom = new UI()
    const pageContent = document.querySelector("#page-content")
    const form = document.getElementById("book-form")
    // load books
    dom.loadBooks()

    // control list navigations
    document.querySelector("#nav-lists").addEventListener("click", () => {
        dom.loadBooks()
    })

    // control add new navigation
    document.querySelector("#nav-add").addEventListener("click", () => {
        dom.loadContent(contents.addBook).then(() => {
            document.getElementById("book-form").addEventListener("submit",function(e){
                e.preventDefault()
                dom.addNewBook()
            })
        })
    })

    // control contact navigation
    document.querySelector("#nav-contact").addEventListener("click", () => {
        pageContent.innerHTML = contents.contact
    })

})