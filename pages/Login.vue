<template>
<div>
<LoggedoutNavbar/>

<section class="logincard">
        <b-field label="Email :">
            <b-input type="email" placeholder="Email..." rounded v-model="email"></b-input>
        </b-field>

        <b-field label="Password :">
            <b-input type="password" placeholder="Password..." rounded v-model="password"></b-input>
        </b-field>
        
        <div class="field">
            <b-checkbox v-model="remember">Remember Me</b-checkbox>
        </div>

        <b-field>
            <button class="button is-info is-medium is-rounded is-fullwidth" @click="login">Login</button> 
        </b-field> 
        <b-field>
         <b-notification :active.sync="isActive" aria-close-label="Close notification" v-model="message">
            {{message}}
        </b-notification>
        </b-field>
        <b-field>
            <button class="button is-rounded" @click="signinwithgoogle">Signin With google</button>
        </b-field>
</section>

</div>    
</template>

<script>
import LoggedoutNavbar from '../components/LoggedoutNavbar'
//import {auth} from '../config/firebaseinit'
import firebase from 'firebase/app'
import Swal from 'sweetalert2'
export default {
    data(){
        return{
          email:'',
          password:'',
          remember:false,
          isActive:false,
          message:''
        }
    },
    components:{
        LoggedoutNavbar
    },
    methods:{
        login(){
           if(this.email !== '' && this.password !== '')
           {
               if(this.email == '')
               {
                 this.message = "Email is Required";
                 this.isActive = true;
               }

               if(this.password == '')
               {
                 this.message = "Password is Required";
                 this.isActive = true;
               }
                
             auth.signInWithEmailAndPassword(this.email,this.password).then(()=>{
                  Swal.fire('Login Successfull').then(this.$router.push('/Success'))
             }).catch((error)=>{
                var errorCode = error.code;
                var errorMessage = error.message;
                this.message = errorMessage;
                this.isActive = true;

             })

           }else{
                this.message = 'Please Fill in All The Fields'
                this.isActive = true;
           }
        },
        signinwithgoogle(){
            var provider = new firebase.auth.GoogleAuthProvider();
           
            provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
            firebase.auth().useDeviceLanguage();
            // To apply the default browser preference instead of explicitly setting it.
            // firebase.auth().useDeviceLanguage();
            provider.setCustomParameters({
            'login_hint': 'user@example.com'
            });
            
            firebase.auth().signInWithRedirect(provider);
            firebase.auth().getRedirectResult().then(function(result) {
                if (result.credential) {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    var token = result.credential.accessToken;
                    // ...
                }
                // The signed-in user info.
                var user = result.user;
                }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
                });
        }
    }
}
</script>

<style scoped>
.logincard{
    width:500px;
    height:350px;
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    -webkit-box-shadow: 1px 30px 9px -14px rgba(0,0,0,0.13);
    -moz-box-shadow: 1px 30px 9px -14px rgba(0,0,0,0.13);
    box-shadow: 1px 30px 9px -14px rgba(0,0,0,0.13);
    padding-top:1rem;
    padding-left:3rem;
    padding-right: 3rem;
}
</style>