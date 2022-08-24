import {useHistory} from 'react-router-dom'

import NewMeetupForm from '../components/meetups/NewMeetupForm';


function NewMeetup(){
    const history = useHistory();

    function AddMeetupHandler(meetupData){
        fetch(
            'https://reactfun-63d84-default-rtdb.firebaseio.com/meetups.json',

        {
            method: 'POST',
            body:JSON.stringify(meetupData),
            headers:{
                'Content-Type' : 'application/json '
            }
        }
    ).then(() =>{
        history.replace('/');
    });

    }
    return(
    <section>

        <h1>Add meetup</h1>

        <NewMeetupForm onAddMeetup={AddMeetupHandler} />
    </section>
    )
}

export default NewMeetup; 