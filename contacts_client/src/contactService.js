// make all service calls regarding a contact object


class ContactService {

    constructor(endpoint) {
        this.endpoint = endpoint
    }

    // 1: read/index action 

    getContacts(){
         fetch (`${this.endpoint}/contacts`)
         .then(resp => resp.json())
         .then(contacts => {
             for (const contact of contacts){
                 const c = new Contact(contact)
                 c.slapOnDom()
             }
         })
    }

   
}