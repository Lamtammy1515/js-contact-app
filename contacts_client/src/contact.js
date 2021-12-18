class Contact {
    //remember objects
    static all = []

    constructor(id, name, number, email, category_id){


        Contact.all.push(this)
    }
}