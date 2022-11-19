
<script>
const photos = []

for (let i = 1; i <= 12; i++) {
  const name = `k-${i}`
  photos.push(name)
}

export default {
  name: 'Gallery',
  props: ['photo'],
  methods: {
    moveMouse(event) {
      const x = event.x
      const y = event.y
      const div = event.target
      update(x, y, div)
    }
  }
};

const update = (x, y, div) => {
  const bounds = div.getBoundingClientRect()
  const posX = x - bounds.x
  const posY = y - bounds.y
  const ratioX = posX / bounds.width
  const ratioY = posY / bounds.height

  div.style.setProperty('--ratio-x', ratioX)
  div.style.setProperty('--ratio-y', ratioY)
}
</script>

<template>
  <div ref="myDiv" @mouseover="moveMouse" @mousemove="moveMouse" class="gallery-card">
    <img :src="`/${photo}.JPG`">
  </div>
</template>

<style>
.gallery-card:not(:hover) img {
  transition: translate 1s;
}

.gallery-card:hover img {
  translate:
    calc((var(--ratio-x) - 0.5) * 20%) calc((var(--ratio-y) - 0.5) * 20%);
}

.gallery-card {
  overflow: hidden;
  width: 280px;
  height: 280px;

  transform-style: preserve-3d;
  touch-action: none;
}

.gallery-card:hover {
  transform:
    rotateX(calc((var(--ratio-y) - 0.5) * 50deg)) rotateY(calc((var(--ratio-x) - 0.5) * -40deg));
}

.gallery-card:not(:hover) {
  transform: rotateX(0deg) rotateY(0deg);
  transition: transform 0.2s;
}

.gallery-card:after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at calc(var(--ratio-x) * 100%) calc(var(--ratio-y) * 100%), hsl(0 0% 100% / 0.5), transparent 50%);
  background-repeat: no-repeat;
  background-blend-mode: soft-light;
  z-index: 2;
}

.gallery-card:before {
  content: "";
  background:
    linear-gradient(115deg,
      transparent 20%,
      #E5E4E2 30%,
      transparent 48% 52%,
      transparent) 80% 80% / 300% 300%;
  filter: brightness(2) contrast(1);
  background-blend-mode: overlay;
  mix-blend-mode: color-dodge;
  position: absolute;
  inset: 0;
  z-index: 2;
  opacity: 0.2;
  transition: opacity 0.2s;
}

.gallery-card:hover:before {
  background-position:
    calc(var(--ratio-x) * 10%) calc(var(--ratio-y) * 10%),
    calc(80% + (var(--ratio-x) * -50%)) calc(80% + (var(--ratio-y) * -50%));
  opacity: 1;
}
</style>