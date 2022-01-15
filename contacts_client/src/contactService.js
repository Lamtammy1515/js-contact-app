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

   createContact(){
       const contact = {
           name: document.getElementById('name').value,
           number: document.getElementById('number').value,
           email: document.getElementById('email').value,
           category_id: 1
       }
   }
}