import {useRef} from 'react';

import Card from '../UI/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props){

    const titleInputRef= useRef();
    const imageInputuseRef = useRef();
    const addressInputuseRef = useRef();
    const descriptionInputuseRef = useRef();



    function submitHandler(event){
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredimage = imageInputuseRef.current.value;
        const enteredAddress = addressInputuseRef.current.value;
        const enteredDescription =descriptionInputuseRef.current.value;

        const meetupData ={
            title: enteredTitle,
            image: enteredimage,
            address:enteredAddress,
            description:enteredDescription,
        };
        props.onAddMeetup(meetupData);
    }
    return(
        <Card> 
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type="text" required id="title" ref={titleInputRef} />

                </div>

                <div className={classes.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type="text" required id="image" ref={imageInputuseRef}/>

                </div>

                <div className={classes.control}>
                    <label htmlFor='address'>Adress</label>
                    <input type="text" required id="address" ref={addressInputuseRef}/>

                </div>

                
                <div className={classes.control}>
                    <label htmlFor='address'>Adress</label>
                    <textarea id="description" required rows='5' ref={descriptionInputuseRef}></textarea>

                </div>

                       
                <div className={classes.actions}>
                   <button>Add Meetup</button>
                </div>


            </form>
        </Card>
    )
}

export default NewMeetupForm;