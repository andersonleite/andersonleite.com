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
          <h3 className='heading'>// Professional Experience</h3>
          <br />
          <section>

              <article>
                  <h3>|| Technology Lead at R/GA</h3>
                  <span>|| Tokyo (Japan), San Francisco (USA) and São Paulo (Brazil)</span>
                  <hr />
                  <ul>
                    <li>
                      <div className="txt-desc">
                        <p className="no-link">Google Doodle | management system </p>
                        <br />
                        Technical Lead, Architecture and development of a system to manage the Doodles that appear on the Google homepage.
                        System uses Machine Learning to classify and manage the Doodles that can pass to avaliation and advance to the voting phases.
                        <br />
                        Typescript, Jest, Angular, Python, GCP, MySQL.
                        <br /><br />
                      </div>
                    </li>
                    <li>
                      <div className="txt-desc">
                        <a href="https://gweb-play-jp-qa.an.r.appspot.com/">Google Play eSports Mixi/Mana</a>
                        <span className='external-link'>⎋</span>
                        <br />
                        Redesigned and implemented the ranking system for efficient O(n) performance with 200k real-time users and remodeled the database/Firestore.
                        <br />
                        Typescript, Jest, GCP.
                        <br /><br />
                      </div>
                    </li>
                    <li>
                      <div className="txt-desc">
                        <a href="https://earth2.io/" target='_blank'>Earth 2</a>
                        <span className='external-link'>⎋</span>
                        <br />
                        New website technical lead and development. Planning, architecture, and development.
                        <br />
                        React, MobX, APIs integration.
                        <br /><br />
                      </div>
                    </li>
                    <li>
                      <div className="txt-desc">
                        <a href="https://lessonlibrary.withgoogle.com/intl/ALL_jp/" target="_blank" rel="noopener">Google Lesson Library</a>
                        <span className='external-link'>⎋</span>
                        <br />
                        Technical Lead and development. Components, filter functionality, search, videos.
                        <br />
                        Typescript, Jest, GCP.
                        <br /><br />
                      </div>
                    </li>
                    <li>
                      <div className="txt-desc">
                        <a href="https://giga.withgoogle.com/" target="_blank" rel="noopener">Google Giga</a>
                        <span className='external-link'>⎋</span>
                        <br />
                        Technical Lead and development. Components, filter functionality, search, videos, tabs.
                        <br />
                        Typescript, Google Programmable Search, GCP.
                        <br /><br />
                      </div>
                    </li>
                    <li>
                      <div className="txt-desc">
                        <a href="https://www.leanstackbyrga.com/" target="_blank">R/GA Lean Experience Stack</a>
                        <span className='external-link'>⎋</span>
                        <br />
                        Developed the website that showcases the Lean Experience Stack. Technical Lead and development.
                        <br />
                        React, GSAP, Contentful CMS.
                        <br /><br />

                      </div>
                    </li>
                    <li>
                      <div className="txt-desc">
                        <a href="https://economysea.withgoogle.com/dashboard/e-commerce/" target="_blank" rel="noopener">Google e-Conomy SEA</a>
                        <span className='external-link'>⎋</span>
                        <br />
                        E-Conomy dashboards for years 2022 and 2023. New features and refactor.
                        <br />
                        Typescript, GCP.
                        <br /><br />
                      </div>
                    </li>
                    <li>
                      <div className="txt-desc">
                        <a href="https://womenwill.google/intl/ja_jp/internationalwomensday/" target="_blank" rel="noopener">Google International Women's Day</a>
                        <span className='external-link'>⎋</span>
                        <br />
                        Developed components, animations, and interactions.
                        <br />
                        Angular, animations, GCP.
                        <br /><br />
                      </div>
                    </li>
                    <li>
                      <div className="txt-desc">
                        <a href="https://submissions.youtubefanfest.com/intl/id_id/" target="_blank">YouTube Fanfest Submissions</a>
                        <span className='external-link'>⎋</span>
                        <br />
                        Technical Lead and development. Mentoring other developers. Enabled the submission of videos for the event.
                        <br />
                        Typescript, Youtube internal libraries.
                        <br /><br />
                      </div>
                    </li>

                    <li>
                      <div className="txt-desc">
                        <a href="https://playground-dot-gweb-gteam-preview.an.r.appspot.com/spotlight/" target="_blank">Google Pixel Spotlight</a>
                        <span className='external-link'>⎋</span>
                        <br />
                        Developed the website that showcases the Pixel on FujiRock. Created the website, the animations, and the interactions.
                        <br />
                        Typescript, GSAP, 3 layer clip mask js/css interaction.
                        <br /><br />
                      </div>
                    </li>
                    <li>
                      <div className="txt-desc">
                        <a href="https://9to5google.com/2022/09/12/pixel-7-google-potato-chips/" target="_blank">Google Pixel Chips</a>
                        <span className='external-link'>⎋</span>
                        <br />
                        Google campaign that distributed prizes to custumers. Deal with limit availability of products, distribution and state management.
                        <br />
                        Typescript, state management, Firebase.
                        <br /><br />
                      </div>
                    </li>
                    <li>
                      <div className="txt-desc">
                        <a href="https://grow.google/intl/ALL_jp/" target='_blank'>Grow with Google</a>
                        <span className='external-link'>⎋</span>
                        <br />
                        Header animation, refactor, analytics and code clean up.
                        <br />
                        Typescript, GCP, Optimize A/B tests.
                        <br /><br />
                      </div>
                    </li>
                    <li>
                      <div className="txt-desc">
                        <p className='no-link'>Google Storepromos Pixel and Nest </p>
                        <br />
                        Google Store promocode campaigns that delivered ~1 million cupons. Control of delived and used codes.
                        <br />
                        Typescript, GCP datastore, queue processing.
                        <br /><br />
                      </div>
                    </li>
                    <li>
                      <div className="txt-desc">
                        <p className='no-link'>Google Ads | Line, Zalo and WeChat chatbots </p>
                        <br />
                        Chatbots that interact with users to deliver Google Ads information and handover to Google representatives.
                        <br />
                        Python, Zalo/WeChat/Line APIs, surveys, GCP, Generative AI.
                        <br /><br />
                      </div>
                    </li>
                    <li>
                      <div className="txt-desc">
                        <a href="https://vimeo.com/246258103" target="_blank" rel="noopener">Nike - Come Together </a>
                        <span className='external-link'>⎋</span>
                        <br />
                        Technical Lead and development. Web platform where users created local events to run together.
                        <br />
                        Angular.js, Java.
                        <br /><br />
                      </div>
                    </li>
                    <li>
                      <div className="txt-desc">
                        <a href="https://www.youtube.com/watch?v=eVdK2qNYblM" target="_blank" rel="noopener">Tim Beta - Missions</a>
                        <span className='external-link'>⎋</span>
                        <br />
                        Technical Lead. Based on the previous developed web platform, we created the mobile apps.
                        <br />
                        Android and iOS mobile apps.
                        <br /><br />
                      </div>
                    </li>
                    <li>
                      <div className="txt-desc">
                        <a href="https://vimeo.com/85444403" target="_blank" rel="noopener">Tim Beta - Blablameter</a>
                        <span className='external-link'>⎋</span>
                        <br />
                        Technical Lead and development. Web platform to measure the social media influence of the users and reflect on their mobile plans through a ranking system.
                        <br />
                        Javascript, Ruby on Rails, Web performance.
                        <br /><br />
                      </div>
                    </li>
                  </ul>
              </article>

              <article>
                  <h3>|| Sr. Frontend Developer at Apple</h3>
                  <span>|| San Francisco (USA)</span>
                  <hr />
                  <ul>
                      <li>
                        <div className="txt-desc">
                          <a href="https://www.apple.com/jp/today" target='blank'>Today at Apple</a>
                          <span className='external-link'>⎋</span>
                          <br />
                          Technical Lead, architecture and development. Created React components, animations, and interactions. Integrations with Apple's Retails systems, calendars, schedules, Apple signin.
                          <br />
                          React, Redux, Webpack, Apple infrastructure. System architecture highly influenced by the Isomorphic Web Applications book.
                          <br /><br />
                        </div>
                      </li>
                      <li>
                        <div className="txt-desc">
                          <a href="https://www.apple.com/retail/instore-shopping-session/" target='blank'>Shop with a specialist</a>
                          <span className='external-link'>⎋</span>
                          <br />
                          Technical Lead, architecture and development. First Next.js project at Apple. Projects facilitates retail by organizing customer's visits to the stores.
                          <br />
                          Next.js, React.
                          <br /><br />
                        </div>
                      </li>
                  </ul>
              </article>

              <article>
                  <h3 className='heading heading-short'>// Personal Projects</h3>

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

