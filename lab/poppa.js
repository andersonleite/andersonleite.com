// import dynamic from 'next/dynamic';
// import styles from '../../styles/poppa.module.scss';
// import Poppa from '../../components/poppa/poppa';
// import React from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import { useSpring } from '@react-spring/core';
// import { a } from '@react-spring/web';
// // import Overlay from './Overlay'
// import Scene from '../../components/poppa/scene';

// const SceneWithoutSSR = dynamic(
//   () => import('../../components/poppa/scene-poppa'),
//   { ssr: false }
// );

// export default function LabPage() {
//   const [{ background, fill }, set] = useSpring({ background: '#202020', fill: '#202020' }, [])
//   return (
//     <a.main style={{ background }} className={styles.grid}>
//       <div className={styles.intro}>
//         <p>
//           <span className={styles.poppatitle}>-P-o-p-p-a-</span> is a Brazilian music duo based in London, consisting of{' '}
//           <a href="https://www.instagram.com/arthurpetrillo/" target="_blank">
//             Arthur Petrillo
//           </a>{' '}
//           and{' '}
//           <a href="https://www.instagram.com/geofreitas/" target="_blank">
//             Geo Freitas
//           </a>
//           .
//         </p>
//         <p>
//           The songs are <span>co-produced</span> and <span>co-arranged</span> by
//           <a href="https://www.luchalibreaudio.de/" target="_blank">
//             Billy Mello
//           </a>
//           .
//         </p>
//       </div>


//       <Canvas className="canvas" dpr={[1, 2]}>
//         <Scene setBg={set} />
//         <OrbitControls
//           autoRotate={true}
//           enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
//       </Canvas>
//       {/* <Overlay fill={fill} /> */}


//       <div className={styles.info}>
//         <div className={styles.info__news}>
//           <p>News about Poppa:</p>
//           <span>
//             <a
//               target="_blank"
//               href="https://mindsparklemag.com/design/poppa-branding/"
//             >
//               Poppa branding featured at Mindsparkle Mag
//             </a>
//           </span>
//           <span>
//             <a
//               target="_blank"
//               href="https://www.cssdesignawards.com/sites/poppa/37151/"
//             >
//               Poppa’s site got Awarded on the CSS Design Awards
//             </a>
//           </span>
//           <span>
//             <a
//               target="_blank"
//               href="https://abduzeedo.com/superb-branding-work-poppa"
//             >
//               "Superb Branding Work for POPPA" by Abduzeedo
//             </a>
//           </span>
//           <span>
//             <a id="togglePlayer">Check out our brand video</a>
//           </span>
//         </div>

//         <div>
//           <p>Poppa links:</p>
//           <ul>
//             <li>
//               <a
//                 href="https://open.spotify.com/artist/3yeYbawned649vXQXOJcoA?si=J_L4x40ET7e1mxlZ2riEIA"
//                 target="_blank"
//               >
//                 Spotify
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://music.apple.com/gb/artist/poppa/1514960637"
//                 target="_blank"
//               >
//                 Apple Music
//               </a>
//             </li>
//             <li>
//               <a href="http://instagram.com/wearepoppa" target="_blank">
//                 Instagram
//               </a>
//             </li>
//             <li>
//               <a href="https://www.facebook.com/wearepoppa" target="_blank">
//                 Facebook
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div className={styles.contact}>
//           <p>Don’t be shy, drop us a line at:</p>
//           <span>hi@poppa.info</span>
//         </div>
//         <div className={styles.by}>
//           <p>
//             Site by Poppa and{' '}
//             <small>
//               <a href="http://www.andersonleite.dev" target="_blank">
//                 Anderson Leite
//               </a>
//             </small>
//           </p>
//         </div>
//       </div>
//     </a.main>
//   );
// }
