<template>
  <div class="home">
    <section class="container">
      <div class="container ">
        <section class="hero  is-medium">
          <div class="hero-body">
            <div class="columns">
              <div class="me">
                <figure class="image" >
                  <img class="is-rounded is-128x128 " src="../assets/avatar.png" >
                </figure>
              </div>
              <div class="fulltext ">
                <p class="subtitle">Hello! I'm <strong>Amos Cheruiyot</strong></p>
                <p class="title is-primary">
                  Tech Excellence &
                  Product Support
                </p>
                <p>
                  I design and automate business tools. Currently available for freelance opportunities.
                </p>
                <div class="buttons">
                  <button class="button is-primary is-outlined is-rounded">Get in touch</button>
                <button class="button is-primary is-rounded">My rēsumē</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="is-divider" data-content="OR"></div>
        <section class="work">
          <div class="columns projects is-desktop">
            <div class="column">
              <figure class="image is-rounded is-128x128">
                <img src="../assets/foota.svg" alt="">
                <p class="captions">Foota:</p>
                <p class="subcaption"> Your accurate statistics App</p>
              </figure>
            </div>
            <div class="column">
              <figure class="image is-rounded is-128x128">
                <img src="../assets/covidata.svg" alt="">
                <p class="captions">Covidata: </p>
                <p class="subcaption">Daily Covid-19 updates</p>
              </figure>
            </div>
            <div class="column">
              <figure class="image is-rounded is-128x128">
                <img src="../assets/farmika.svg" alt="">
                <p class="captions">Farmika: </p>
                <p class="subcaption"> Farming at your fingertips</p>
              </figure>
            </div>
            <div class="column">
              <figure class="image is-rounded is-128x128">
                <img src="../assets/movidb.svg" alt="">
                <p class="captions">Movidb: </p>
                <p class="subcaption">The movie wikipedia</p>
              </figure></div>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
}
</script>
<style>
.fulltext {
  
  margin:auto;
  padding-top: 2rem;  
}
.fulltext {
  width: 100%;
  margin-top: 2rem;
}
.button {
  margin-right: 0;
  margin-left: 0;
  margin-top: 1rem;

}
.column {
  padding: 2rem 0rem 2rem 0rem;
}
.buttons {
  width: 50%;
  float: left;
}
.captions {
  font-size: 20px;
  font-weight: 700;
  color: #6050dc;
  text-align: center;
  padding: 0.5rem;
}
.subcaption{
  font-size: 18px;
  font-weight: 500;
  color: inherit;
  text-align: center;
}
.work {
  margin: auto;
  width: 50vw;
}
.projects {
  padding: 1rem;
}
</style>