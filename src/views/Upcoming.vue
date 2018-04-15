<template>
    <b-container fluid>
        <b-row>
            <b-col md="8" offset-md="2">
                <article class="card">
                    <img src="../assets/skulk.png" class="card-img-top"/>
                    <div class="card-body">
                        <h4 class="title">Upcoming Skulks</h4>
                        <p class="card-text">
                            What's a skulk? A group of foxes is actually called a skulk. Here are events coming soon to
                            a conference near you!
                        </p>
                        <ul class="list">
                            <li class="list-item">🦊 <a href="https://progress.com/next">Progress Next Conference</a> -
                                Boston - May 31 - June 1, 2018<br/>
                                We are hosting a mini skulk lunch and learn for mobile development with Vue.js. Come
                                meet amazing Progress women!
                            </li>
                            <li class="list-item">🦊 <a href="https://werise.tech/">We Rise Conference</a> - Atlanta -
                                June 21-22, 2018<br/>
                                We are hosting a full-day workshop for web and mobile development with Vue.js. Free to
                                all who attend!
                            </li>
                            <li class="list-item">🦊 <a href="https://connect.tech/">Connect.Tech</a> - Atlanta -
                                September 20-22, 2018<br/>
                                We will host a full-day workshop for web and mobile development with Vue.js. 10 spaces
                                available!
                            </li>
                        </ul>

                    </div>
                </article>
            </b-col>
        </b-row>
    </b-container>
</template>
<style>
    .list {
        text-align: left;
    }

    .list-item {
        padding-bottom: 15px;
    }
</style>