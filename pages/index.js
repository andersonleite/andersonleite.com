import { Analytics } from '@vercel/analytics/react';

export default function LabPage() {
  return (
    <div>
      <Analytics />
      <div className='main-container'>
        <div className='main'>
          <div className="copy">
            Hello! <br />
            {/* <span data-value="Anderson Leite">Anderson Leite</span> */}
            My name is Anderson Leite, a Web Engineer with experience as a Senior Frontend Developer and Technology Lead.<br />
            I have a degree in Software Engineering and an MBA in Digital Marketing.
            <p className='copy-link'>
              <a className='link' href="https://www.linkedin.com/in/leiteanderson/" target="_blank">LinkedIn</a>
              <small className='external-link'>⎋</small>
            </p>

          </div>

        <div className="latest-work">
              <h3>// Professional Experience</h3>
              <br />
              <section>
              <article>
                  <h3>Technology Lead at R/GA</h3>
                  <span>Tokyo (Japan), San Francisco (USA) and São Paulo(Brazil)</span>
                  <ul>
                    <li>
                      <div className="txt-desc">
                        <p className="no-link">Google Play eSports Mixi/Mana </p>
                        Typescript, Jest, re-write of ranking to a clean code/architecture to support O(n) algorithm for 200k realtime users, database/Firestore rewrite.
                      </div>
                    </li>
                    <li>
                      <div className="txt-desc">
                        <a href="https://earth2.io/" target='_blank'>Earth 2</a>
                        <span className='external-link'>⎋</span>
                        React, MobX. New website technical lead and development.
                      </div>
                    </li>
                    <li>
                      <div className="txt-desc">
                        <a href="https://lessonlibrary.withgoogle.com/intl/ALL_jp/" target="_blank" rel="noopener">Google Lesson Library</a>
                        <span className='external-link'>⎋</span>
                        Typescript, Jest, components, filter functionality, search, videos, tabs.
                      </div>
                    </li>
                    <li>
                      <div className="txt-desc">
                        <a href="https://giga.withgoogle.com/" target="_blank" rel="noopener">Google Giga</a>
                        <span className='external-link'>⎋</span>
                        Typescript, components, filter functionality, videos, tabs.
                      </div>
                    </li>
                    <li>
                      <div className="txt-desc">
                        <a href="https://www.leanstackbyrga.com/" target="_blank">R/GA Lean Experience Stack</a>
                        <span className='external-link'>⎋</span>
                        React, GSAP, Contentful CMS.
                      </div>
                    </li>
                    <li>
                      <div className="txt-desc">
                        <a href="https://economysea.withgoogle.com/dashboard/e-commerce/" target="_blank" rel="noopener">Google e-Conomy SEA</a>
                        <span className='external-link'>⎋</span>
                        Typescript. e-Conomy dashboards for years 2022 and 2023. New features and refactor.
                      </div>
                    </li>
                    <li>
                      <div className="txt-desc">
                        <a href="https://womenwill.google/intl/ja_jp/internationalwomensday/" target="_blank" rel="noopener">Google International Women's Day</a>
                        <span className='external-link'>⎋</span>
                        Angular, components, animations.
                      </div>
                    </li>
                    <li>
                      <div className="txt-desc">
                        <a href="https://submissions.youtubefanfest.com/intl/id_id/" target="_blank">YouTube Fanfest Submissions</a>
                        <span className='external-link'>⎋</span>
                        Typescript, Youtube internal libraries.
                      </div>
                    </li>

                    <li>
                      <div className="txt-desc">
                        <a href="https://playground-dot-gweb-gteam-preview.an.r.appspot.com/spotlight/" target="_blank">Google Pixel Spotlight</a>
                        <span className='external-link'>⎋</span>
                        Typescript, GSAP, 3 layer clip mask js/css interaction.
                      </div>
                    </li>
                    <li>
                      <div className="txt-desc">
                        <a href="https://9to5google.com/2022/09/12/pixel-7-google-potato-chips/" target="_blank">Google Pixel Chips</a>
                        <span className='external-link'>⎋</span>
                        Typescript, state management, Firebase, limit availability of products.
                      </div>
                    </li>
                    <li>
                      <div className="txt-desc">
                        <a href="https://grow.google/intl/ALL_jp/" target='_blank'>Grow with Google</a>
                        <span className='external-link'>⎋</span>
                        Typescript, header animation, refactor, analytics and code clean up.
                      </div>
                    </li>
                    <li>
                      <div className="txt-desc">
                        <p className='no-link'>Google Storepromos Pixel and Nest </p>
                        Typescript, queue, components, GCP Datastore for ~1 million cupons.
                      </div>
                    </li>
                    <li>
                      <div className="txt-desc">
                        <p className='no-link'>Google Ads Line, Zalo and WeChat chatbots </p>
                        Python, Zalo/WeChat/Line APIs, surveys, GCP, Generative AI.
                      </div>
                    </li>
                    <li>
                      <div className="txt-desc">
                        <p className="no-link">Doodle management system </p>
                        Typescript, Jest, Angular, Python, GCP, MySQL. Technical Lead, Architecture and development.
                      </div>
                    </li>
                    <li>
                      <div className="txt-desc">
                        <a href="https://vimeo.com/246258103" target="_blank" rel="noopener">Nike - Come Together </a>
                        <span className='external-link'>⎋</span>
                        Angular.js, Java. Technical Lead and development.
                      </div>
                    </li>
                    <li>
                      <div className="txt-desc">
                        <a href="https://www.youtube.com/watch?v=eVdK2qNYblM" target="_blank" rel="noopener">Tim Beta - Missions</a>
                        <span className='external-link'>⎋</span>
                        Android and iOS mobile apps. Technical Lead.
                      </div>
                    </li>
                    <li>
                      <div className="txt-desc">
                        <a href="https://vimeo.com/85444403" target="_blank" rel="noopener">Tim Beta - Blablameter</a>
                        <span className='external-link'>⎋</span>
                        Javascript, Ruby on Rails. Technical Lead and development.
                      </div>
                    </li>
                  </ul>
              </article>

              <article>
                  <h3>Sr. Frontend Developer at Apple</h3>
                  <span>San Francisco (USA)</span>
                  <ul>
                      <li>
                        <div className="txt-desc">
                          <a href="https://www.apple.com/jp/today" target='blank'>Today at Apple</a>
                          <span className='external-link'>⎋</span>
                          React, Redux, Webpack, Apple infrastructure.
                        </div>
                      </li>
                      <li>
                        <div className="txt-desc">
                          <a href="https://www.apple.com/retail/instore-shopping-session/" target='blank'>Shop with a specialist</a>
                          <span className='external-link'>⎋</span>
                          Next.js, React. Technical Lead and development.
                        </div>
                      </li>
                  </ul>
              </article>

              <article>
                  <h3>// Personal Projects</h3>

                  <br />
                  <div className="txt-desc">Projects involved experimenting with different technologies like WebGL, shaders, Vite.</div>
                  <ul>
                    <li>
                      <div className="txt-desc">
                        <a href="https://cube-navy.vercel.app/" target='blank'>PNDR 3D cube</a>
                        <span className='external-link'>⎋</span>
                        Next.js, React, React-three-fiber.
                      </div>
                    </li>
                    <li>
                      <div className="txt-desc">
                        <a href="https://castlecrushgame.com/" target='blank'>Castle Crush Game</a>
                        <span className='external-link'>⎋</span>
                        Vite, WebGL, Three.js.
                      </div>
                    </li>
                    <li>
                      <div className="txt-desc">
                        <a href="https://www.el-hempe.com/" target='blank'>El Hempe</a>
                        <span className='external-link'>⎋</span>
                        Vite, WebGL, Three.js.
                      </div>
                    </li>
                  </ul>
                  <br />
                  <div className="txt-desc">Publications</div>
                  <ul>
                  <li>
                      <div className="txt-desc">
                        <a href="https://www.amazon.com.br/Desenvolvimento-Jogos-Android-Anderson-Leite/dp/8566250176" target='blank'>Android Game Development</a>
                        <span className='external-link'>⎋</span>
                        Using Object Orientation techniques to build a game using Android. (pt-BR)
                      </div>
                    </li>
                  </ul>

                  <br />
                  <div className="txt-desc">Instructor</div>
                  <ul>
                  <li>
                      <div className="txt-desc">
                        <a href="https://www.alura.com.br/artigos/historia-da-caelum" target='blank'>Alura (Caelum)</a>
                        <span className='external-link'>⎋</span>
                        Instructor for programming and web development courses, and conference speaker.
                      </div>
                    </li>
                  </ul>
              </article>
          </section>
        </div>

        </div>


      </div>
    </div>
  )
}

