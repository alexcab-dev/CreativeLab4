<template>
  <div id="app">
    <nav class="navbar navbar-expand-sm navbar-light">
      <img src="./assets/vb.png" />
      <div class="navbar-collapse" id="">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              ><router-link to="/">Home</router-link>
              <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><router-link to="/oldapplication">Applications</router-link></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <router-link to="/editapplication">Edit Application</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <a href="https://google.com">GitHub</a>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


#nav a {
  font-weight: bold;
  color: #2c3e50;
}


  .navbar {

    background-color:rgba(110, 85, 223, 0.3) !important;
    border-style: solid;
    border:rgb(153, 142, 221);
  }

 

  .navbar a {
	color: #2c00ff;
	text-decoration: none;
	background-color: transparent;
}


</style>




