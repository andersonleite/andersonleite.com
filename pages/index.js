import dynamic from 'next/dynamic'
import styles from '../styles/Lab.module.scss'
import {Background} from '../components/monopo/Background'
import {Lense} from '../components/monopo/Lense'
import { Analytics } from '@vercel/analytics/react';

const SceneWithoutSSR = dynamic(
  () => import('../components/tetrahedron/SceneT'),
  { ssr: false }
)

export default function LabPage() {
  return (
    <div className={styles.full}>
      <Analytics />
      <SceneWithoutSSR z={3}>
        <Background />
        {/* <Lense /> */}
        {/* <TextPlane
					text={['What shall', 'I create today?']}
					vertexShader={enVertexShader}
					fragmentShader={enFragmentShader}
				/> */}
        {/* <TextPlane text={['今日は', '何を作ろうか?']} vertexShader={jpVertexShader} fragmentShader={jpFragmentShader} /> */}
      </SceneWithoutSSR>
      <div className='main-container'>
        <div className='main'>
          {/* <div className="lang">
            <ul>
              <li className='selected'>EN</li>
              <li>日本語</li>
              <li>PTーBR</li>
            </ul>
          </div> */}
          <div className="copy">
            <small className='hello'>👋🏻</small> Hello! My name is <span data-value="Anderson Leite">Anderson Leite</span>, a Web Developer with experience as a Technology Lead and Sr. Frontend Developer, currently living in Tokyo, Japan. I have a degree in Software Engineering and an MBA in Digital Marketing
            <ul className="links">
              <li><a className='link' rel="stylesheet" href="mailto:andersonlfl@gmail.com" target="_blank">Email</a></li>
              <li><a className='link' rel="stylesheet" href="https://www.linkedin.com/in/leiteanderson/" target="_blank">LinkedIn</a></li>
              <li><a className='link' rel="stylesheet" href="https://github.com/andersonleite/" target="_blank">Github</a></li>
              <li><a className='link' rel="stylesheet" href="https://www.instagram.com/andersonleite/" target="_blank">Instagram</a></li>
            </ul>
          </div>

        <div className="latest-work">
              <section>
              <h2>LATEST PROJECTS</h2>

              <article>
                  <h3>Technology Lead at R/GA, at Google <span>Tokyo</span></h3>
                  <p className="txt-desc">Delivered websites, campaigns, and chatbots using JavaScript and Google AI technologies.</p>
                  <ul>
                      <li><a href="https://giga.withgoogle.com/" target="_blank" rel="noopener">Google Giga</a></li>
                      <li><a href="https://lessonlibrary.withgoogle.com/intl/ALL_jp/" target="_blank" rel="noopener">Google Lesson Library</a></li>
                      <li><a href="https://submissions.youtubefanfest.com/intl/id_id/" target="_blank" rel="noopener">YouTube Fanfest Submissions</a></li>
                      <li><a href="https://playground-dot-gweb-gteam-preview.an.r.appspot.com/spotlight/" target="_blank" rel="noopener">Google Pixel Spotlight</a></li>
                      <li><a href="https://9to5google.com/2022/09/12/pixel-7-google-potato-chips/" target="_blank" rel="noopener">Google Pixel Chips</a></li>
                  </ul>
              </article>

              <article>
                  <h3>Sr. Frontend Engineer at Apple <span>San Francisco</span></h3>
                  <p className="txt-desc">Launched the site showcasing Apple stores around the world using Next.js and React.</p>
                  <ul>
                      <li><a href="https://www.apple.com/jp/today/" target="_blank" rel="noopener">Today at Apple</a></li>
                      <li><a href="https://www.apple.com/retail/instore-shopping-session/" target="_blank" rel="noopener">Shop with a specialist</a></li>
                  </ul>
              </article>

              <article>
                  <h3>Technology Lead at R/GA <span>São Paulo</span></h3>
                  <p className="txt-desc">Worked on websites and mobile apps for Tim, Nike, Samsung and Google. </p>
                  <ul>
                      <li><a href="https://vimeo.com/246258103" target="_blank" rel="noopener">Nike - Come Together</a></li>
                      <li><a href="https://www.youtube.com/watch?v=eVdK2qNYblM" target="_blank" rel="noopener">Tim Beta - Missions</a></li>
                      <li><a href="https://vimeo.com/85444403" target="_blank" rel="noopener">Tim Beta - Blablameter</a></li>
                  </ul>
              </article>

              <article>
                  <h3>Personal Projects</h3>
                  <p className="txt-desc">Collaborated with a skilled WebGL developer to deepen my knowledge of WebGL and shaders.</p>
                  <ul>
                    <li><a href="https://cube-navy.vercel.app/" target="_blank" rel="noopener">PNDR 3D cube</a></li>
                    <li><a href="https://castlecrushgame.com/" target="_blank" rel="noopener">Castle Crush Game</a></li>
                    <li><a href="https://www.el-hempe.com/" target="_blank" rel="noopener">El Hempe</a></li>
                  </ul>
                  <p className="txt-desc">Books</p>
                  <ul>
                    <li><a href="https://books.google.co.jp/books/about/Desenvolvimento_de_Jogos_para_iOS.html?id=PGWCCwAAQBAJ&redir_esc=y" target="_blank" rel="noopener">Android Game Development</a></li>
                    <li><a href="https://books.google.co.jp/books/about/Desenvolvimento_de_Jogos_para_iOS.html?id=PGWCCwAAQBAJ&redir_esc=y" target="_blank" rel="noopener">iOS Game Development</a></li>
                  </ul>
              </article>
          </section>
        </div>

        </div>


      </div>
    </div>
  )
}
