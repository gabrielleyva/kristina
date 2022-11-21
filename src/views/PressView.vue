<script>

const getTitle = (url) => {  
  return fetch(`https://api.allorigins.win/get?callback=myFunc&url=${url}`)
    .then((response) => response.text())
    .then((html) => {
      const doc = new DOMParser().parseFromString(html, "text/html");
      const data = {}
      const title = doc.querySelectorAll('title')[0];
      const nodes = doc.querySelectorAll('meta')
      

      console.log(doc)
      data['content'] = []
      for (let node of nodes) {
        const content = node.content
        const name = node.name
        const property = node.getAttribute('property')
        console.log("Name: ", name, "property: ", property)

        if (name != null && name === 'description') {
          data['content'].push(content)
        }

        if (property != null && property === `\"thumbnail\"` ) {
          data['content'].push(content)
        }
      }
      data['title'] = title.innerText
      return data;
    });
};


const urls = [
  'https://www.womenseday.org/team_member/kristina-ayanian/#:~:text=Kristina%20Ayanian%20is%20the%20Director,interview%20with%20HRH%20Prince%20Edward.',
  'https://www.pageantcircle.com/2022/11/miss-universe-armenia-2022-is-kristina-ayanian.html',
  'https://conandaily.com/2022/11/02/kristina-ayanian-biography-13-things-about-miss-universe-armenia-2022',
  'https://armenianweekly.com/2021/10/20/the-weeklys-kristina-ayanian-crowned-miss-grand-armenia/',
  'https://www.gmanetwork.com/news/lifestyle/content/813124/armenia-s-kristina-ayanian-struts-barefoot-in-miss-grand-international-prelims-after-shoe-broke-on-stag/story/'
]

// This one keeps the order the same as the URL list.
const getAll = () => {
    Promise.all(
    urls.map((url) => getTitle(url))
  ).then((titles) => {
    console.log(titles);
  });
}
export default {
  name: 'Press',
    created() {
    getAll()
    },
  data() {
    return {
      x: null,
    };
  }
};
</script>

<template>
    <div style="padding: 32px">
      <h1>Coming Soon...</h1>
    </div>
  </template>
  
  <style>
  
  </style>