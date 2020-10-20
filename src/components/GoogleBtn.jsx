
import GoogleLogin from 'react-google-login';
import React from 'react';


var buttonText = '';
export default function TestBtn(){



    const responseGoogle = (response) =>{
        console.log(response);
        alert('Google ID ' + response.getId());
        var curUse = response.getBasicProfile();
        alert('Name is ' + curUse.getName());
        alert('Email is ' + curUse.getEmail());
        buttonText = curUse.getName();
        //<TextWithInput></TextWithInput>
    }


    return(
    <GoogleLogin
    name = 'loginButton'
    clientId="789523786497-ru2r1ft4ov81luo4v2nbifu3kf97b27e.apps.googleusercontent.com"
    buttonText= 'Login'
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
    />
    );




}