function Panel(props) {
    // console.log(props.index)
    // console.log(props.activeIndex)
    return (
        <div className='accordian' key={props.index}>
            <div>
                <h3 onClick={props.onClick}
                    className="headline">User {props.index}</h3>
            </div>
            {(props.index === props.activeIndex || props.showAll === true) && <div>
                <p>Name : {props.name}</p>
                <p>Email : {props.email}</p>
                <p>Number : {props.number}</p>
            </div>}

        </div>
    )
}

export default Panel;