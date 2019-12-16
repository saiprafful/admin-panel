import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Meetups from './Meetups';
import MeetupDetails from './MeetupDetails';
import AddMeetup from './AddMeetup';
import EditMeetup from './EditMeetup';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Meetups} />
      <Route exact path='/meetups/add' component={AddMeetup} />
      <Route exact path='/meetups/edit/:id' component={EditMeetup} />
      <Route exact path='/meetups/:id' component={MeetupDetails} />
    </Switch>
  </main>
)

export default Main;