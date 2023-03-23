import React, { useState } from 'react';

import Accordian from './Accordian';

import Form from './Form'

import Error from './Error'


function Userdata() {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState();
    const [userNumber, setUserNumber] = useState();
    const [userData, setUserData] = useState([]);
    const [showError, setShowError] = useState(false);
    const [showAll, setShowAll] = useState(false);

    function StoreData(event) {
        event.preventDefault();

        if (userName && userEmail && userNumber && !userData.some(obj => obj.email === userEmail) && userNumber.length === 10) {
            setUserData(data => [...data, { name: userName, email: userEmail, number: userNumber }]);
            setShowError(false);
        }
        else
            setShowError(true);
    }


    return (
        <div style={{ display: "flex" }}>
            <div>
                <Form setUserName={setUserName} setUserEmail={setUserEmail} setUserNumber={setUserNumber} StoreData={StoreData} setShowAll={setShowAll} />
                <Error userName={userName} userEmail={userEmail} userNumber={userNumber} showError={showError} userData={userData} />
            </div>

            <div >
                <Accordian userData={userData} showAll={showAll} />
            </div>
        </div>
    )
}

export default Userdata;