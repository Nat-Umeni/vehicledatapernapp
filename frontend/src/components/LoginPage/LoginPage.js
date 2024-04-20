import React from 'react'
import styles from './LoginPage.css'




const onSubmitHandler = () => {
    
}





export default function LoginPage(){
    return (

    <div class="form-container">
        <h1 style={styles.h1}>Login Here!</h1>
            <section>
                <input type="text" name="username" placeholder="Username"/>
                <br />
                <input type="password" name="password" placeholder="Password"/>
                <br />
                <button type="button" onSubmit={onSubmitHandler}>Login</button>
            </section>
    </div>
        
    );
}