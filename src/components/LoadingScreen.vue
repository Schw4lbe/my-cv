<template>
  <div class="loading-container">
    <div class="loading-header">
      <h1>{{ header }}</h1>
      <h2>{{ subHeader }}</h2>
      <p>
        Hier kommt die info rein, warum und wie ich diese Seite erstellt habe
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
        aspernatur porro veritatis. Aliquid ad quaerat quae quis deleniti
        dolorem eligendi vero illum sunt, reiciendis officiis quam corrupti
        quos. Sed, unde. Non possimus ex libero sapiente fugiat doloremque?
        Perferendis eveniet quaerat labore eos, obcaecati tenetur? Ex accusamus
        porro ipsum iste illum nobis maxime accusantium optio repudiandae
        aliquam omnis, non distinctio aut? Delectus laborum, facilis deleniti
        nam fugiat omnis non soluta aperiam aliquid nesciunt error libero veniam
        enim commodi animi tenetur. Fuga commodi quidem ab recusandae
        praesentium ipsum ipsa voluptatum, magni libero!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingScreen",
  props: {
    header: String,
    subHeader: String,
  },
};
</script>
