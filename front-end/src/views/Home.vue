<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h1>Welcome to Vector Bank's Customer Creation Site</h1>
        </div>
        <div class="col-lg-12">
          <div class="card w-100 text-center">
            <div class="card-body">
              <h2 class="card-title">Start a New Credit Card Application</h2>
              <p class="card-text">
                Here you can start a new credit card application.
              </p>
              <a class="btn btn-primary"
                ><router-link to="/newapplication" class="button-create"
                  >Create</router-link
                ></a
              >
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="card w-100 text-center">
            <div class="card-body">
              <h2 class="card-title">View Existing Applications</h2>
              <p class="card-text">
                You can edit them here.
              </p>
              <a class="btn btn-primary"
                ><router-link to="/oldapplication" class="button-create"
                  >View</router-link
                ></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>


    <div></div>
  </div>
</template>

<script>
</script>

<style scoped>
.button-create {
  color: white;
}
.card {
   background-color:rgba(179, 166, 240, 0.3) !important;
   margin-top: 40px;
   border:rgb(153, 142, 221);
   border-style: solid;
   
}

.container {
  margin-top: 40px;
}
h1, p, h2 {
  color: rgb(235, 236, 247);
}
.container h1 {
  text-align: center;
}
</style>
