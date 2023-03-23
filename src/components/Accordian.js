
import { useState } from "react";
import Panel from './Panel'

function Accordian(props) {
    // console.log(props.userData)

    const [activeIndex, setActiveIndex] = useState(null)
    return (

        props.userData.map((data, index) =>
            <Panel
                name={data.name}
                email={data.email}
                number={data.number}
                index={index}
                onClick={() => { setActiveIndex(index === activeIndex ? null : index) }}
                activeIndex={activeIndex}
                showAll={props.showAll}
            />)

    )
}

export default Accordian;