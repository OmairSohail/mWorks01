<template>
    <div>
      <nav class="navbar is-white" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <router-link class="navbar-item" to="/">
            <img src="">
            <h1 class="subtitle">mWorks</h1>
          </router-link>

          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <nuxt-link class="navbar-item" to="/">
              Home
            </nuxt-link>

            <nuxt-link class="navbar-item" to="/docs">
              Documentation
            </nuxt-link>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                More
              </a>

              <div class="navbar-dropdown">
                <nuxt-link class="navbar-item" to="/aboutus">
                  About
                </nuxt-link>
                <nuxt-link class="navbar-item" to="/contactus">
                  Contact
                </nuxt-link>
                <hr class="navbar-divider">
                <nuxt-link class="navbar-item" to="/Issues">
                  Report an issue
                </nuxt-link>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
               <nuxt-link class="button is-dark" to="/Signup">Signup</nuxt-link>
               <nuxt-link class="button is-info" to="/Login">Login</nuxt-link>
            </div>
          </div>
        </div>
      </nav>
      <hr>  
       
    </div>
</template>

<script>
export default {
    name:'LoggedoutNavbar' 
   
}
</script>

<style scoped>
.navbar{
  margin-top:1rem;
}
</style>