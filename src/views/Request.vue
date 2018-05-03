<template>
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
              <p align="center">
                  <b-button class="btn toggle-button btn-success btn-lg" size="lg" href="https://ladeezfirstmedia.typeform.com/to/dlOUZe">Request a Skulk</b-button>                 
                </p>
               
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  
</template>

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

