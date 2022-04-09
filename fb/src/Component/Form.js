import React, { useState } from 'react'

function Form() {

    const [info, setinfo] = useState({
        name: "",
        email: "",
        mobile: "",
        address: "",
        message: ""
    });

    let name,value;
    function dalinfo(event) {
        name=event.target.name;
        value=event.target.value;
        console.log(value);

        setinfo({ ... info, [name]:[value] })
    }

    
    


    return (
        <div>
            <h1>CONTACT US</h1>

           
            <div>
                <p>Enter your name</p>
                <input type='text' name='name' onChange={dalinfo} value={info.name} ></input>
            </div>
            <div>
                <p>Email</p>
                <input type='text' name="email" onChange={dalinfo} value={info.email}></input>
            </div>
            <div>
                <p>Mobile no</p>
                <input type='text' name="mobile" onChange={dalinfo} value={info.mobile}></input>
            </div>
            <div>
                <p>Address</p>
                <input type='text' name='address' onChange={dalinfo} value={info.address}></input>
            </div>
            <div>
                <p>Mwssage</p>
                <input type='text' name='message' onChange={dalinfo} value={info.message}></input>
            </div>
            <button>SUBMIT</button>
        </div>
    )
}

export default Form