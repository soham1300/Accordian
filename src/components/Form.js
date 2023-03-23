
import { Text, Email, Number } from './Inputs';





function Form(props) {



    return (
        <form>
            <Text onChange={(event) => { props.setUserName(event.target.value) }} />
            <Email onChange={(event) => { props.setUserEmail(event.target.value) }} />
            <Number onChange={(event) => { props.setUserNumber(event.target.value) }} />
            <button type="submit" onClick={props.StoreData} className="button">Submit</button>

            <button className="button" onClick={(e) => {
                e.preventDefault();
                props.setShowAll(true);

            }}>Open All</button>

            <button className="button" onClick={(e) => {
                e.preventDefault();
                props.setShowAll(false);

            }}>Close All</button>
        </form>
    )
}

export default Form;