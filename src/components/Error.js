function Error({ userName, userEmail, userNumber, showError, userData }) {

    if (showError) {
        if (!userName)
            return (<p className='error'>*Please Enter Name</p>);
        else if (!userEmail)
            return (<p className='error'>*Please Enter Email</p>);
        else if (!userNumber)
            return (<p className='error'>*Please Enter Number</p>);
        else if (userData.some(obj => obj.email === userEmail))
            return (<p className='error'>*Email is already used</p>);
        else if (userNumber.length !== 10)
            return (<p className='error'>*Number must be a length of 10</p>);
    }
    else
        return null;
}

export default Error;