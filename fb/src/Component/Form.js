import React,{useState} from 'react'

function Form() {

    const [info, setinfo]=useState({
        name:"",
        email:"",
        mobile:"",
        address:"",
        message:""
    });

    
    let name,email,mobile,address,message;
    function dalinfo(event){
        name=name.target.name
        console.log(event.target.name);
        
    }


    return (
        <div>
            <h1>CONTACT US</h1>
            
                <div>
                    <p>Enter your name</p>
                    <input type='text' onChange={dalinfo} ></input>
                </div>
                <div>
                    <p>Email</p>
                    <input type='text' onChange={dalinfo}></input>
                </div>
                <div>
                    <p>Mobile no</p>
                    <input type='text'></input>
                </div>
                <div>
                    <p>Address</p>
                    <input type='text'></input>
                </div>
                <div>
                    <p>Mwssage</p>
                    <input type='text'></input>
                </div>
                <button>SUBMIT</button>
        </div>
    )
}

export default Form