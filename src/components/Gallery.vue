
<script>
const photos = []

for (let i = 1; i <= 12; i++) {
  const name = `k-${i}`
  photos.push(name)
}

export default {
  name: 'Gallery',
  data() {
    return {
      photos: photos,
    };
  },
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
    <div class="gallery">
      <div class="gallery-panel"
           v-for="photo in photos"
           :key="photo">
           <div ref="myDiv" @mouseover="moveMouse" @mousemove="moveMouse" class="card">
                <img :src="`/${photo}.JPG`">
           </div>
      </div>
    </div>
</template>

<style>


.gallery {
display: grid;
grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
grid-gap: 1rem;
max-width: 1024px;
margin: 1rem auto;
padding: 0 1rem;
align-items: center;
}

.gallery-panel img {
align-self: center;
width: 100%;
object-fit: cover;
height: 100%;
scale: 1.2;
translate: 0 0;
}


.card:not(:hover) img {
  transition: translate 1s;
}

.card:hover img {
  translate:
    calc((var(--ratio-x) - 0.5) * 20%)
    calc((var(--ratio-y) - 0.5) * 20%);
}

.card {
  overflow: hidden;
  width: 280px;
  height: 280px;

  transform-style: preserve-3d;
  touch-action: none;
}

.card:hover {
  transform:
    rotateX(calc((var(--ratio-y) - 0.5) * 50deg))
    rotateY(calc((var(--ratio-x) - 0.5) * -40deg));
}

.card:not(:hover) {
  transform: rotateX(0deg) rotateY(0deg);
  transition: transform 0.2s;
}

.card:after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at calc(var(--ratio-x) * 100%) calc(var(--ratio-y) * 100%), hsl(0 0% 100% / 0.5), transparent 50%);
  background-repeat: no-repeat;
  background-blend-mode: soft-light;
  z-index: 2;
}

.card:before {
  content: "";
  background:
   linear-gradient(115deg,
     transparent 20%,
     #E5E4E2 30%,
     transparent 48% 52%,
     transparent
   )
   80% 80% / 300% 300%;
  filter: brightness(2) contrast(1);
  background-blend-mode: overlay;
  mix-blend-mode: color-dodge;
  position: absolute;
  inset: 0;
  z-index: 2;
  opacity: 0.2;
  transition: opacity 0.2s;
}

.card:hover:before {
  background-position:
    calc(var(--ratio-x) * 10%) calc(var(--ratio-y) * 10%),
    calc(80% + (var(--ratio-x) * -50%)) calc(80% + (var(--ratio-y) * -50%));
  opacity: 1;
}

</style>