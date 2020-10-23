<template>
  <div class="hello">
    <Header />
    <div class="container mrgnbtm">
          <div class="row">
            <div class="col-md-8">
                <CreateContact @createContact="contactCreate($event)" />
            </div>
            <div class="col-md-4">
                <DisplayBoard :numberOfContacts="numberOfContacts" @getAllContacts="getAllContacts()" />
            </div>
            <div class="col-md-8">
                <EditContact @editContact="contactEdit($event)" />
            </div>
            <div class="col-md-8">
                <DeleteContact @deleteContact="contactDelete($event)" />
            </div>
          </div>
    </div>
    <div class="row mrgnbtm">
        <Contacts v-if="contacts.length > 0" :contacts="contacts" />
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import CreateContact from './CreateContact.vue'
import EditContact from './EditContact.vue'
import DeleteContact from './DeleteContact.vue'
import DisplayBoard from './DisplayBoard.vue'
import Contacts from './Contacts.vue'
import { getAllContacts, createContact, deleteContact, editContact } from '../services/ContactService'
export default {
  name: 'Dashboard',
  components: {
    Header,
    CreateContact,
    EditContact,
    DeleteContact,
    DisplayBoard,
    Contacts
  },
  data() {
      return {
          contacts: [],
          name: ''
      }
  },
  methods: {
    getAllContacts() {
      getAllContacts().then(response => {
        console.log(response);
        this.contacts = response.data;
        this.numberOfContacts = this.contacts.length;
      })
    },
    contactCreate(data) {
        console.log('data:::', data)
        createContact(data).then(response => {
            console.log(response);
            this.getAllContacts();
        });
    },
    contactEdit(data) {
        editContact(data).then(response => {
            console.log(response);
            this.getAllContacts();
        });
    },
    contactDelete(data) {
        deleteContact(data).then(response => {
            console.log(response);
            this.getAllContacts();
        });
    }
  },
  mounted () {
    this.getAllContacts();
  }
}
</script>