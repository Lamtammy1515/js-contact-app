class Contact {
    //remember objects
    static all = []
    static contactContainer = document.getElementById('contacts-container')
    static contactForm = document.getElementById('form-contact')
    constructor({id, name, number, email, category_id}){
        this.id = id
        this.name = name
        this.number = number 
        this.email = email 
        this.category_id = category_id

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `contact-${this.id}`

        Contact.all.push(this)
    }

    contactHTML(){
        this.element.innerHTML += `
        <div>
            <h3>${this.name}</h3>
            <p>${this.number} - ${this.email}</p>
        </div>
        `

        return this.element
    }

    slapOnDom() {
        console.log(contactContainer)
        //Contact.contactsContainer.appendChild(contactHTML())
    }

    renderForm() {
        Contact.contactForm.innerHTML += `
        <form id="new-contact-form">
            <input type="text" id="name">
            <input type="text" id="number">
            <input type="text" id="email">
            <input type="submit" id="create">
        </form>
        `
    }
}