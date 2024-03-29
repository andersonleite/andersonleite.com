// import styles from '../../styles/Monopo.module.scss'
// import {Background} from '../../components/monopo/Background'
// import {Lense} from '../../components/monopo/Lense'
// import {TextPlane} from '../../components/monopo/TextPlane'
// import dynamic from 'next/dynamic'

// import {
// 	enFragmentShader, enVertexShader, jpFragmentShader, jpVertexShader
// } from '../../components/monopo/shader';

// const SceneWithoutSSR = dynamic(
//   () => import('../../components/Scene'),
//   { ssr: false }
// )

// export default function LabPage() {
//   return (
//     <div className={styles.full}>
//       <SceneWithoutSSR z={3}>
//         <Background />
//         <Lense />
//         {/* <TextPlane
// 					text={['What shall', 'I create today?']}
// 					vertexShader={enVertexShader}
// 					fragmentShader={enFragmentShader}
// 				/> */}
//         {/* <TextPlane text={['今日は', '何を作ろうか?']} vertexShader={jpVertexShader} fragmentShader={jpFragmentShader} /> */}
//       </SceneWithoutSSR>
//       <div className='main-container'>
//         <div className='main'>
//           {/* <div className="lang">
//             <ul>
//               <li className='selected'>EN</li>
//               <li>日本語</li>
//               <li>PTーBR</li>
//             </ul>
//           </div> */}
//           <div className="copy">
//             <small className='hello'>👋🏻</small> Hello! My name is <span data-value="Anderson Leite">Anderson Leite</span>, a Web Developer with experience as a Technology Lead and Sr. Frontend Developer, currently living in Tokyo, Japan. I have a degree in Software Engineering and an MBA in Digital Marketing.
//           </div>

//         <div className="latest-work">
//               <section>
//               <h2>LATEST PROJECTS</h2>

//               <article>
//                   <h3>Technology Lead at R/GA, at Google <span>Tokyo</span></h3>
//                   <p>Delivered websites, campaigns, and chatbots using JavaScript and Google AI technologies.</p>
//                   <ul>
//                       <li><a href="https://giga.withgoogle.com/" target="_blank" rel="noopener">Google Giga</a></li>
//                       <li><a href="https://lessonlibrary.withgoogle.com/intl/ALL_jp/" target="_blank" rel="noopener">Google Lesson Library</a></li>
//                       <li><a href="https://submissions.youtubefanfest.com/intl/id_id/" target="_blank" rel="noopener">YouTube Fanfest Submissions</a></li>
//                   </ul>
//               </article>

//               <article>
//                   <h3>Sr. Frontend Engineer at Apple <span>San Francisco</span></h3>
//                   <p>Launched the site showcasing Apple stores around the world using Next.js and React.</p>
//                   <ul>
//                       <li><a href="https://www.apple.com/jp/today/" target="_blank" rel="noopener">Today at Apple</a></li>
//                   </ul>
//               </article>

//               <article>
//                   <h3>Personal Projects</h3>
//                   <p>Partnered with an experienced WebGL developer to enhance my understanding of WebGL and shaders.</p>
//                   <ul>
//                     <li><a href="https://castlecrushgame.com/" target="_blank" rel="noopener">Castle Crush Game</a></li>
//                     <li><a href="https://www.el-hempe.com/" target="_blank" rel="noopener">El Hempe</a></li>
//                   </ul>
//               </article>
//           </section>
//         </div>

//         <ul className="links">
//           <li><a className='link' rel="stylesheet" href="mailto:andersonlfl@gmail.com" target="_blank">Email</a></li>
//           <li><a className='link' rel="stylesheet" href="https://www.linkedin.com/in/leiteanderson/" target="_blank">LinkedIn</a></li>
//           <li><a className='link' rel="stylesheet" href="https://github.com/andersonleite/" target="_blank">Github</a></li>
//           <li><a className='link' rel="stylesheet" href="https://www.instagram.com/andersonleite/" target="_blank">Instagram</a></li>
//         </ul>
//         </div>


//       </div>
//     </div>
//   )
// }
