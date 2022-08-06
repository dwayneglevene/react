// import Todo from './components/Todo';
import React from 'react';
import  { Route,Switch } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';
import Layout from './components/layout/Layout';


import MainNavigation from './components/layout/MainNavigation';
function App() {
  return (
  <Layout>

    {/* <MainNavigation /> */}
    <Switch>

     <Route path='/' exact>
      <AllMeetupsPage />
     </Route>

     <Route path='/favorites'>
      <Favorites />

     </Route>

     <Route path='/newmeetup'>
      <NewMeetup />

     </Route>
     </Switch>

    </Layout>
  );
}

export default App;
