import{S as c,i as l}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function d(o){const t="23963114-6d0d5d874ae460d9125bacd21",s="https://pixabay.com/api/",n=new URLSearchParams({key:t,q:o,image_type:"photo",lang:"en",safesearch:"true"}),e=`${s}?${n}`,r=await fetch(e);if(!r.ok)throw new Error("Failed to fetch images");return r.json()}const u=document.querySelector(".gallery");let f=new c(".gallery a",{caption:!0,captionsData:"alt",captionDelay:250});function m(o){u.innerHTML=o.map(t=>`<li class="gallery-item">
<a href="${t.largeImageURL}" >
  <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy">
  </a>
  <div class="info">
    <p><b>Likes</b> ${t.likes}</p>
    <p><b>Views</b> ${t.views}</p>
    <p><b>Comments</b> ${t.comments}</p>
    <p><b>Downloads</b> ${t.downloads}</p>
  </div>

</li>`).join(""),f.refresh()}function i(o){l.error({title:"Error",message:o,position:"topRight"})}function p(){const o=document.querySelector(".gallery");o.innerHTML=""}function y(){console.log("+"),document.querySelector(".div-loader").classList.remove("hidden")}function h(){console.log("-"),setTimeout(()=>{document.querySelector(".div-loader").classList.add("hidden")},2e3)}document.querySelector(".search-form").addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements.images.value.trim();if(!t){i("Please enter a search query");return}p(),y();try{const s=await d(t);s.hits.length===0?i("Sorry, there are no images matching your search query. Please try again!"):m(s.hits)}catch(s){i(s.message)}finally{h()}});
//# sourceMappingURL=commonHelpers.js.map
