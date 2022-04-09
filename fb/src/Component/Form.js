import React, { useState } from 'react'

function Form() {

    const [info, setinfo] = useState({
        name: "",
        email: "",
        mobile: "",
        address: "",
        message: ""
    });

    let name, value;
    function dalinfo(event) {
        name = event.target.name;
        value = event.target.value;
        console.log(value);

        setinfo({ ...info, [name]: [value] })
    }


    const postd = async (e) => {
        e.preventDefault();

        const{name,email,mobile,address,message}=info;  //object destructring

        const res = await fetch("https://fir-tut-27b89-default-rtdb.firebaseio.com/firebasetut.json",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name:name,
                    email,
                    mobile,
                    address,
                    message
                })
            }

        )
        if(res){
            setinfo({
                name: "",
        email: "",
        mobile: "",
        address: "",
        message: ""
            })
        }
        console.log("clicked")
    }


    return (
        <div>
            <form method='POST'>

                <h1>CONTACT US</h1>


                <div>
                    <p>Enter your name</p>
                    <input type='text' name='name' onChange={dalinfo} value={info.name} required></input>
                </div>
                <div>
                    <p>Email</p>
                    <input type='text' name="email" onChange={dalinfo} value={info.email} required></input>
                </div>
                <div>
                    <p>Mobile no</p>
                    <input type='text' name="mobile" onChange={dalinfo} value={info.mobile} required></input>
                </div>
                <div>
                    <p>Address</p>
                    <input type='text' name='address' onChange={dalinfo} value={info.address} required></input>
                </div>
                <div>
                    <p>Mwssage</p>
                    <input type='text' name='message' onChange={dalinfo} value={info.message} required></input>
                </div>
                <button onClick={postd} >SUBMIT</button>
            </form>
        </div>
    )
}

export default Form