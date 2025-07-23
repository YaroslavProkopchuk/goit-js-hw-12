import{a as d,S as m,i as a}from"./assets/vendor-DqB7j7Ix.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const y="https://pixabay.com/api/",h="51403158-2e3095c4822824a544700ea8f";async function g(s){const t={key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await d.get(y,{params:t})).data}catch(o){throw console.error("Pixabay request error:",o),o}}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),L=new m(".gallery a");function S(s){const t=s.map(({webformatURL:o,largeImageURL:n,tags:e,likes:r,views:i,comments:p,downloads:f})=>`
        <li class="gallery-item">
          <a href="${n}">
            <img src="${o}" alt="${e}" />
          </a>
          <div class="info">
            <p>👍 ${r}</p>
            <p>👁️ ${i}</p>
            <p>💬 ${p}</p>
            <p>⬇️ ${f}</p>
          </div>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",t),L.refresh()}function b(){c.innerHTML=""}function q(){l.classList.remove("is-hidden")}function P(){l.classList.add("is-hidden")}const u=document.querySelector(".form"),v=u.querySelector('input[name="search-text"]');u.addEventListener("submit",s=>{s.preventDefault();const t=v.value.trim();if(t===""){a.warning({message:"Please enter a search term!",position:"topRight"});return}b(),q(),g(t).then(o=>{const{hits:n}=o;n.length===0?a.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):S(n)}).catch(o=>{a.error({message:"Oops! Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{P()})});
//# sourceMappingURL=index.js.map
