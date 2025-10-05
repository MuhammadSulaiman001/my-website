class PexelsBackground{constructor(){this.apiKey=null,this.queries=this.getQueries(),this.currentImage=null,this.usedImages=new Set,this.fallbackGradient="linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 20%, var(--color-primary-light) 40%, var(--color-primary) 60%, var(--color-primary-dark) 75%, var(--color-primary-dark) 90%, var(--color-primary) 100%)",this.hideGradientBackground(),this.waitForConfig()}waitForConfig(){const e=()=>{window.PEXELS_API_KEY?(this.apiKey=window.PEXELS_API_KEY,this.init()):setTimeout(e,100)};setTimeout(e,100)}hideGradientBackground(){const e=document.querySelector(".hero-section");e&&(e.style.background="transparent",e.style.transition="background 0.3s ease-in-out")}getQueries(){return window.PEXELS_QUERIES&&Array.isArray(window.PEXELS_QUERIES)?window.PEXELS_QUERIES:["ocean","nature","landscape","mountains","forest","sunset","beach","sky","lake","river","valley","desert","canyon","waterfall","meadow","field","coast","cliff","island","bay","harbor","lighthouse","bridge","path","trail","garden","park","tree","flower","cloud","storm","rainbow","aurora","milky way","stars","moon","sunrise","twilight","mist","fog","space","galaxy","nebula","planet","earth","mars","jupiter","saturn","universe","cosmos","astronomy","solar system","black hole","supernova","constellation","meteor","comet","asteroid","space station","satellite"]}async init(){try{await this.loadRandomBackground()}catch(e){console.error("Failed to load Pexels background:",e),this.useFallbackBackground()}}async loadRandomBackground(){const n=this.queries[Math.floor(Math.random()*this.queries.length)],s=Math.floor(Math.random()*10)+1,o=Math.floor(Math.random()*15)+1,t=await fetch(`https://api.pexels.com/v1/search?query=${n}&orientation=landscape&size=small&per_page=${o}&page=${s}`,{headers:{Authorization:this.apiKey}});if(!t.ok)throw new Error(`Pexels API error: ${t.status}`);const e=await t.json();if(e.photos&&e.photos.length>0){const t=e.photos.filter(e=>!this.usedImages.has(e.id));if(t.length===0){this.usedImages.clear();const t=e.photos[Math.floor(Math.random()*e.photos.length)];this.currentImage=t.src.large2x||t.src.large||t.src.medium,this.usedImages.add(t.id)}else{const e=t[Math.floor(Math.random()*t.length)];this.currentImage=e.src.large2x||e.src.large||e.src.medium,this.usedImages.add(e.id)}this.applyBackgroundImage()}else throw new Error("No photos found")}applyBackgroundImage(){const t=document.querySelector(".hero-section");if(!t)return;const e=document.createElement("div");e.className="pexels-bg-container",e.style.cssText=`
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 0;
            opacity: 0;
            transition: opacity 0.8s ease-in-out;
        `;const n=document.createElement("div");n.className="pexels-overlay",n.style.cssText=`
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(
                135deg,
                rgba(0, 0, 0, 0.4) 0%,
                rgba(0, 0, 0, 0.2) 25%,
                rgba(0, 0, 0, 0.3) 50%,
                rgba(0, 0, 0, 0.2) 75%,
                rgba(0, 0, 0, 0.4) 100%
            );
            z-index: 1;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.8s ease-in-out;
        `,t.appendChild(e),t.appendChild(n);const s=t.querySelector(".max-w-7xl");if(s){s.style.position="relative",s.style.zIndex="10";const e=s.querySelector(".flex");if(e){const t=e.children[1];t&&t.classList.contains("lg:w-1/2")&&(t.style.background="rgba(255, 255, 255, 0.02)",t.style.backdropFilter="blur(8px)",t.style.borderRadius="30px",t.style.padding="2rem",t.style.margin="1rem 0",t.style.boxShadow="none",t.style.minWidth="70%")}}const o=new Image;o.onload=()=>{e.style.backgroundImage=`url(${this.currentImage})`,e.style.backgroundSize="cover",e.style.backgroundPosition="center",e.style.backgroundRepeat="no-repeat",e.style.backgroundAttachment="fixed",t.classList.remove("gradient-bg"),t.classList.add("pexels-bg"),setTimeout(()=>{e.style.opacity="1",n.style.opacity="1"},50)},o.src=this.currentImage}useFallbackBackground(){const e=document.querySelector(".hero-section");if(!e)return;e.style.background=this.fallbackGradient,e.style.backgroundImage="none",e.classList.add("gradient-bg"),e.classList.remove("pexels-bg");const t=e.querySelector(".pexels-bg-container"),n=e.querySelector(".pexels-overlay");t&&t.remove(),n&&n.remove();const s=e.querySelector(".max-w-7xl");if(s){const e=s.querySelector(".flex");if(e){const t=e.children[1];t&&t.classList.contains("lg:w-1/2")&&(t.style.background="",t.style.backdropFilter="",t.style.borderRadius="",t.style.padding="",t.style.margin="",t.style.boxShadow="")}}}async refreshBackground(){if(this.apiKey)try{await this.loadRandomBackground()}catch(e){console.error("Failed to refresh background:",e)}}}document.addEventListener("DOMContentLoaded",function(){setTimeout(()=>{window.pexelsBackground=new PexelsBackground},100)}),typeof module!="undefined"&&module.exports&&(module.exports=PexelsBackground)