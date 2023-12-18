// import styles from '../../styles/scrollTrigger.module.scss'
// import React, { useRef, useEffect } from "react";

// // import { Canvas } from '@react-three/fiber';
// import { gsap } from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// export default function TemplatePage() {
//   gsap.registerPlugin(ScrollTrigger);
//   const one = useRef(null);
//   const two = useRef(null);
//   const three = useRef(null);

//   useEffect(() => {
//     const element = one.current;

//     gsap.fromTo(
//       element,
//       {
//         opacity: 0,
//         y: -20
//       },
//       {
//         opacity: 1,
//         y: 0,
//         scale: 10,
//         scrollTrigger: {
//           trigger: element,
//           start: "top 10%",
//           end: "top 15%",
//           scrub: true,


//         }
//       }
//     );
//   }, []);

//   useEffect(() => {
//     const element = two.current;
//     gsap.fromTo(
//       element,
//       {
//         opacity: 0,
//         x: -20
//       },
//       {
//         opacity: 1,
//         x: 0,
//         scale: 15,
//         scrollTrigger: {
//           trigger: element,
//           start: "top center",
//           end: "bottom center",
//           scrub: true,

//         }
//       }
//     );
//   }, []);

//   useEffect(() => {
//     const element = three.current;
//     gsap.fromTo(
//       element,
//       {
//         opacity: 0,
//         y: -20
//       },
//       {
//         opacity: 1,
//         y: 0,
//         scale: 20,
//         scrollTrigger: {
//           trigger: element,
//           start: "top 80%",
//           end: "top 85%",
//           scrub: true,

//         }
//       }
//     );
//   }, []);

//   return (
//     <div className={styles.full}>
//       <div className={`${styles.first} ${styles.panel}`}>
//         <h1 ref={one}>ONE</h1>
//       </div>
//       <div className={`${styles.second} ${styles.panel}`}>
//         <h1 ref={two}>TWO</h1>
//       </div>
//       <div className={`${styles.third} ${styles.panel}`}>
//         <h1 ref={three}>THREE</h1>
//       </div>
//     </div>
//   );
// }
