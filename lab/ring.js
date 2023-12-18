// import { useEffect, useState } from 'react'
// // import Ring from '../../components/ring/Ring'

// function Ring() {
//   return (
//     <div className="full">
//         <main className="Loop jsLoop">
//         <section className="section one">
//           <h1 className="h1">One</h1>
//         </section>
//         <section className="section two">
//           <h1 className="h1">For</h1>
//         </section>
//         <section className="section three">
//           <h1 className="h1">All</h1>
//         </section>
//         <section className="section four">
//           <h1 className="h1">And</h1>
//         </section>
//         <section className="section three">
//           <h1 className="h1">All</h1>
//         </section>
//         <section className="section two">
//           <h1 className="h1">For</h1>
//         </section>

//         {/* fake blocks */}
//         <section className="section one isClone">
//           <h1 className="h1">One</h1>
//         </section>
//         <section className="section two isClone">
//           <h1 className="h1">For</h1>
//         </section>
//       </main>
//     </div>
//   )
// }


// export default function LabPage() {
//   const [disableScroll, setDisableScroll] = useState(false)

//   let doc = null;
//   let clones = null;
//   let scrollHeight = null;
//   let scrollPos = null;
//   let clonesHeight = null;
//   let i = 0;

// function getScrollPos () {
//   const context = window.document.querySelector('.jsLoop')
//   return (context.pageYOffset || context.scrollTop) - (context.clientTop || 0);
// }

// function setScrollPos (pos) {
//   const context = window.document.querySelector('.jsLoop')
//   context.scrollTop = pos;
// }

// function getClonesHeight () {
//   clonesHeight = 0;

//   for (i = 0; i < window.document.querySelectorAll('.isClone').length; i += 1) {
//     clonesHeight = clonesHeight + clones[i].offsetHeight;
//   }

//   return clonesHeight;
// }

// function reCalc () {
//   const context = window.document.querySelector('.jsLoop')
//   scrollPos = getScrollPos(context);
//   scrollHeight = context.scrollHeight;
//   clonesHeight = getClonesHeight();

//   if (scrollPos === 0) {
//     setScrollPos(0); // Scroll 1 pixel to allow upwards scrolling
//   }
// }

// function scrollUpdate () {
//   console.log('scrollHeight', scrollHeight);
//   console.log('scrollPos', scrollPos);
//   console.log('clonesHeight', clonesHeight);

//   if (!disableScroll) {
//     scrollPos = getScrollPos();

//     clonesHeight = getClonesHeight();

//     if (clonesHeight + scrollPos >= scrollHeight) {
//       // Scroll to the top when you’ve reached the bottom
//       setScrollPos(0); // Scroll down 1 pixel to allow upwards scrolling
//       setDisableScroll(true);
//     } else if (scrollPos === 0) {
//       // Scroll to the bottom when you reach the top
//       setScrollPos(scrollHeight - clonesHeight);
//       setDisableScroll(true);
//     }
//   }

//   if (disableScroll) {
//     // Disable scroll-jumping for a short time to avoid flickering
//     window.setTimeout(function () {
//       setDisableScroll(false);
//     }, 40);
//   }
// }

//   function init () {
//     reCalc();

//     window.document.querySelector('.jsLoop').addEventListener('scroll', function () {
//       window.requestAnimationFrame(scrollUpdate);
//     }, false);

//     window.addEventListener('resize', function () {
//       window.requestAnimationFrame(reCalc);
//     }, false);
//   }

//   useEffect(() => {
//     clones = window.document.querySelectorAll('.isClone');
//     scrollHeight = 0;
//     scrollPos = 0;
//     clonesHeight = 0;
//     i = 0;

//     if (document.readyState !== 'loading') {
//       init()
//     } else {
//       doc.addEventListener('DOMContentLoaded', init, false)
//     }
//   })

//   return (
//     <Ring />
//   )
// }
