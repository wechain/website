<template>
    <b-form>
  	  <b-container fluid>
          <b-row align-h="start">
              <b-col md="8" offset-md="2">
                <div class="card">   
                  <img src="../../assets/nola.jpg" class="card-img-top"/>    
                    <div class="card-body">
                      <h4 class="title"><p align="center">VueConf US - New Orleans, March 26-28 2018</p></h4>
                      <p align="left">
                        We are organizing the Diversity initiative in conjunction with the good 
                        folks of Vue.js Conf USA, offering five scholarship tickets to the 
                        conference free to underrepresented people in the field. We are 
                        also hosting a Vue Vixens breakfast on Tuesday, come to participate 
                        in a fun discussion, mini-workshop, and get some swag! If you'd 
                        like to attend the breakfast, please register below.
                      </p>
                      
                      <h4 align="center" class="title">Attendee Registration</h4>
                      
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

import {db} from '../../firebase';
var dbRef = db.ref('registration')

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
        companyName: '',
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
            label: 'Company Name (Freelancer or Student is cool too!)',
            model: 'companyName',
            maxlength: 100,
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
          eventName: 'VueUS2018',
          companyName: this.model.companyName,
          email: this.model.Email
        }).then(() => {
          //clear form
          this.message = 'Thank you for registering!',
          this.model.firstName = '',
          this.model.lastName = '',
          this.model.companyName = '',
          this.model.Email = ''
        }).then(() => {
          //this.message = ''
        })

                      
      }
    } 
}
</script>
