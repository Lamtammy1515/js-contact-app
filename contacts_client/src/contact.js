class Contact {
    //remember objects
    static all = []
    static contactContainer = document.getElementById('contacts-container')
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
}