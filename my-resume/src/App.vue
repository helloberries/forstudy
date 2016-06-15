<template>
  <div id="app" class="main-content">
    <div class="container no-padding">
      <div class="row">
        <left></left>
        <right></right>
      </div>
    </div>
  </div>
</template>

<script>
  import Left from './components/Left'
  import Right from './components/Right'
  export default {
    name: 'App',
    components: {
      Left,
      Right
    }
  }
</script>

<style>
body {
  background: #d9dbdd;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.main-content {
  margin: 100px 0;
  overflow: hidden;
}

.no-padding {
  padding: 0 !important;
}

/* MOBILE */
@media only screen and (max-width:959px) and (min-width: 768px) {
  max-width: 760px;
  width: 760px;
  margin: 0 auto;
}
</style>
