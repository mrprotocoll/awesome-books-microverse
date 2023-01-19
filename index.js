import contents from './modules/Content.js'
window.addEventListener('load', () => {
    const pageContent = document.querySelector("#page-content")
    // load lists
    pageContent.innerHTML = contents.books([{"title": "my book","author": "Dami"}])
    
    // control navifations
    document.querySelector("#nav-lists").addEventListener("click", () => {
        pageContent.innerHTML = contents.books([{"title": "my book","author": "Dami"}])
    })

    // control add new
    document.querySelector("#nav-add").addEventListener("click", () => {
        pageContent.innerHTML = contents.addBook
    })

    // control add new
    document.querySelector("#nav-contact").addEventListener("click", () => {
        pageContent.innerHTML = contents.contact
    })

})