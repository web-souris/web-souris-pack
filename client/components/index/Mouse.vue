<template>
  <div ref="mouse">
    <img src="/img/mouse.png" alt="Веб-студия Souris" class="image-mouse" :style="'transform: ' + getTranform" @mousemove="changeTransform" @mouseleave="leaveTransform">
  </div>
</template>
<script>
export default {
  data() {
    return {
      position: {
        x: 0,
        y: 0
      }
    }
  },
  computed: {
    getTranform() {
      const x = 'rotateX(' + this.position.x  + 'deg)'
      const y = 'rotateY(' + this.position.y  + 'deg)'
      return x+y
    }
  },
  methods: {
    changeTransform(e) {
      this.position.x = e.layerX / 10
      this.position.y = e.layerY / 10
      return this
    },
    leaveTransform() {
      const image = document.getElementsByClassName('image-mouse')[0]
      image.classList.add('transition')
      this.position.x = 0
      this.position.y = 0
      setTimeout(function() {
        image.classList.remove('transition')
      }, 250)
      return this
    }
  }

}
</script>
