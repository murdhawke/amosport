<template>
  <div class="home">
    <section class="container">
      <div class="container is-max-desktop">
        <section class="hero  is-medium">
          <div class="hero-body">
            <div class="columns">
              <div class="me ">
                <figure class="image" >
                  <img class="is-rounded " src="../assets/avatar.png" >
                </figure>
              </div>
              <div class="fulltext ">
                <p class="subtitle">Hello! I'm <strong>Amos Cheruiyot</strong></p>
                <p class="title is-primary">
                  Tech Excellence & Product Support
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
            <div class="is-divider" data-content="OR"></div>
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
  margin-left: 2rem;
  margin-right: 0;
  padding: 0rem 1rem 0rem 1rem;
  
}
.button {
  display: inline-block;
  margin:50px;
  margin-right: 10px;
  margin-left: 5px;

}
</style>