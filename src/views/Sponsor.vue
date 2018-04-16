<template>
  <b-form>
    <b-container fluid>
      <b-row align-h="start">
        <b-col md="8" offset-md="2">
          <div class="card">
            <img src="../assets/pretty-fox.jpg" class="card-img-top"/>
            <div class="card-body">
              <h4 class="title">Request a Vue Vixens Workshop for your Conference, Meetup, Group or Event</h4>
              <p>How does it work?</p>
              <p>If you are organizing an event, consider adding to your diversity offerings by offering a free Vue
                Vixens workshop
                to people who identify as women. One model that works is to offer your paid workshops before your
                conference, then offer
                Vue Vixens workshops after the event. Workshops are a full-day event, free to registered participants
                and low-cost to you.
                Conference organizers work with us to organize logistics, which include:</p>
              <ul>
                <li>🦊 A venue with a work space and internet access</li>
                <li>🦊 Lunch for attendees, provided by the conference/event</li>
                <li>🦊 Mentors drawn from conference speakers. We will work to recruit them if you can provide a list!
                </li>
              </ul>
              <b-alert v-if="message" show variant="success">{{message}}</b-alert>
              <form v-on:submit.prevent="sendRequest">
                <vue-form-generator class="form" :model="model" :schema="schema"
                                    :options="formOptions"></vue-form-generator>
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

  const dbRef = db.ref('requests');

  export default {
    name: 'Form',
    components: {
      'vue-form-generator': VueFormGenerator.component
    },
    data() {
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

<style lang="scss">
  input[type=submit] {
    display: block;
    margin: 0 auto;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid #28a745;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    color: #fff;
    background-color: #28a745;
    padding: .5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: .3rem;
    cursor: pointer;
    &:focus, &:active {
      outline: none;
      box-shadow: 0 0 0 0.2rem rgba(40,167,69,.5);
    }
    &:hover {
      color: #fff;
      background-color: #218838;
      border-color: #1e7e34;
    }
  }
</style>

