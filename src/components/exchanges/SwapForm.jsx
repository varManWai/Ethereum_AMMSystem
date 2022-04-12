import classes from './SwapForm.module.css';
import { useRef } from 'react';
import Card from '../ui/Card';
// import SwapItem from "./SwapItem";

const SwapForm = (props) => {

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        };

        props.onAddMeetup(meetupData);
    }



    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='token1'></label>
                    <input type='number' required id='token1' ref={titleInputRef} placeholder='0'/>
                </div>
                <div className={classes.control}>
                    <input type='number' required id='token2' ref={imageInputRef} placeholder='0'/>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}

export default SwapForm;