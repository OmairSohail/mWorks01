<template>
<div>
    <LoggedoutNavbar/>
    <div class="wrapper">
        <div class="columns">
            <div class="column is-half column1">
              <p class="title">Lorem ipsum dolor sit amet.</p>
              <p class="subtitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut rem atque voluptatem praesentium hic provident pariatur autem laborum aut sed.</p>
              <p class="title">Lorem ipsum dolor sit amet.</p>
              <p class="subtitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut rem atque voluptatem praesentium hic provident pariatur autem laborum aut sed.</p>
              <p class="title">Lorem ipsum dolor sit amet.</p>
              <p class="subtitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut rem atque voluptatem praesentium hic provident pariatur autem laborum aut sed.</p>
              <p class="title">Lorem ipsum dolor sit amet.</p>
              <p class="subtitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut rem atque voluptatem praesentium hic provident pariatur autem laborum aut sed.</p>
              <p class="title">Lorem ipsum dolor sit amet.</p>
              <p class="subtitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut rem atque voluptatem praesentium hic provident pariatur autem laborum aut sed.</p>
            </div>
            <div class="column column2"> 

                <b-field label="Email">
                    <b-input type="email" maxlength="30" v-model="email"></b-input>
                </b-field>

                <b-field label="Username">
                    <b-input  maxlength="30" v-model="username"></b-input>
                </b-field>

                <b-field label="Password">
                    <b-input type="password" password-reveal v-model="password"></b-input>
                </b-field>

                <b-field label="Confirm Password">
                    <b-input type="password" v-model="confirmpassword"></b-input>
                </b-field>
                <b-field label="Phone">
                    <b-input type="phone" v-model="phone"></b-input>
                </b-field>
                <b-field class="field" label="Terms & Conditions">
                    <b-checkbox type="is-info" v-model="IsAgree">
                       I Agree To The Terms And Condition.
                    </b-checkbox>
                </b-field>
                <b-field>
                    <button class="button is-info" @click="register()">Register</button>
                    <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="true"></b-loading>
                </b-field>
                <!--<b-field>
                    <p v-if="errors.length">
                        <b>Please correct the following error(s):</b>
                        <ul>
                        <li v-for="error in errors">{{ error }}</li>
                        </ul>
                    </p>
                </b-field>-->
            </div>
        </div>
    </div>
</div>    
</template>

<script>
import LoggedoutNavbar from '../components/LoggedoutNavbar'
import {auth} from '../config/firebaseinit'
import Swal from 'sweetalert2'
export default {
    data(){
        return{
            isLoading:false,
            isFullPage:true,
            email:'',
            username:'',
            password:'',
            confirmpassword:'',
            phone:'',
            IsAgree:false
        }
    },
    components:{
        LoggedoutNavbar
    },
    methods:{
        register(){
                this.isLoading = true
                if (this.username !=='' && this.email !=='' && this.password !=='' && this.confirmpassword ==this.password && this.phone !=='' && this.IsAgree == true) {
                  setTimeout(() => {
                    
                        auth.createUserWithEmailAndPassword(this.email,this.password)
                        .then(()=>{
                            this.isLoading = false
                            this.$router.push('/Success')
                            
                        })
                        .catch((error)=>{
                            // Handle Errors here.
                            var errorCode = error.code;
                            var errorMessage = error.message;
                            alert(errorCode,errorMessage);
                            })
                    }, 3 * 1000)
                    }

                    if (!this.username) {
                        Swal.fire('Name required.');
                    }
                    if (!this.email) {
                        Swal.fire('Age required.');
                    }
                     if (!this.password) {
                        Swal.fire('Age required.');
                    }
                     if (!this.confirmpassword) {
                        Swal.fire('Age required.');
                    }
                     if (!this.phone) {
                        Swal.fire('Age required.');
                    }
                    if (this.IsAgree == false) {
                        Swal.fire('You must accept Terms & Conditions');
                    }

               // e.preventDefault();
               
               
        }
    }
}
</script>

<style scoped>
.column1,.column2{
    padding:4rem;
}
</style>