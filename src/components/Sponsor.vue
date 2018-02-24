<template>
  <b-form>
  	  <b-container fluid>
          <b-row align-h="start">
              <b-col md="6" offset-md="3">
                <div class="card">   
                  <img src="../assets/pretty-fox.jpg" class="card-img-top"/>
                    <div class="card-body">
                      <h4 class="title">Request a Vue Vixens Workshop for your Conference, Meetup, Group or Event</h4>
                        <b-alert v-if="message" show variant="success">{{message}}</b-alert>
                        <form v-on:submit.prevent="sendRequest">
                          <vue-form-generator class="form card" :model="model" :schema="schema" :options="formOptions"></vue-form-generator>
                        </form>
                    </div>
                </div>
              </b-col>
          </b-row>
  	  </b-container>   
  </b-form>
</template>
<script>
import VueFormGenerator from 'vue-form-generator'

import {db} from '../firebase';
var dbRef = db.ref('requests')

export default {
  name: 'Form',
  components: {
    'vue-form-generator': VueFormGenerator.component
  },
  data () {  
    return {
      message: '',
      model: {
        firstName: '',
        lastName: '',
        eventName: '',
        eventLocation: '',
        eventDate: '',
        Email: '',
        message: ''
      },
      schema: {
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'First Name',
            model: 'firstName',
            maxlength: 50,
            required: true
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Last Name',
            model: 'lastName',
            maxlength: 50,
            required: true
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Event Name',
            model: 'eventName',
            maxlength: 100,
            required: true
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Event Location',
            model: 'eventLocation',
            maxlength: 50,
            required: true
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Event Date',
            model: 'eventDate',
            maxlength: 50,
            required: true
          },
          {
            type: 'input',
            inputType: 'email',
            label: 'Email',
            model: 'Email',
            maxlength: 50,
            required: true
          },
          {
            type: 'submit',
            inputType: 'submit',
            buttonText: 'Submit',
            //class: 'btn btn-success btn-lg',
            onSubmit: 'sendRequest',
            validateBeforeSubmit: false
          }
        ]
      },

      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true
      }
    }
  },
  methods: {
    sendRequest: function () {   
        dbRef.push({
          firstName: this.model.firstName,
          lastName: this.model.lastName,
          eventName: this.model.eventName,
          eventLocation: this.model.eventLocation,
          eventDate: this.model.eventDate,
          email: this.model.Email
        }).then(() => {
          //clear form
          this.message = 'Thank you for your request! We will review it and get back to you soon.',
          this.model.firstName = '',
          this.model.lastName = '',
          this.model.eventName = '',
          this.model.eventLocation = '',
          this.model.eventDate = '',
          this.model.Email = ''
        }).then(() => {
          //this.message = ''
        })

        //todo send message back and clear form
                      
      }
    } 
}
</script>

<style>
.form-group.required>label:after {
    content: "*";
    font-weight: 400;
    color: red;
    padding-left: .2em;
    font-size: 1em;
}
</style>
