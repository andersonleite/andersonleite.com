import styles from '../../styles/Bird.module.scss'
import React, { useCallback, useEffect, useRef } from 'react';

export default function TemplatePage() {

  const logo = useRef(null);
  const blurredBird = useRef(null);
  const foreBird = useRef(null);

  // https://codesandbox.io/s/parallax-effect-with-react-hooks-2k5hq?file=/src/App.js:233-242
  useEffect(() => {
    function handleScroll () {
      var scrolled = window.scrollY;
      logo.current.style.transform = "translate(0px," + scrolled/2 +"%)";
      blurredBird.current.style.transform = "translate(0px," + scrolled/5 +"%)";
      foreBird.current.style.transform = "translate(0px,-" + scrolled/80 +"%)";
    }

    window.addEventListener('scroll', handleScroll, true);
  }, []);

  return (
    <div className={styles.full} ref={logo}>
      <header className={styles.header}>
        <div className={styles.backBird} ref={blurredBird}></div>
        <img className={styles.logoHeader} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4xLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzc4LjA3IDc3LjA3IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNzguMDcgNzcuMDciIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTIyLjcxLDQyLjgzSDIuNjhWMC43MmgxOS41NWM4LjYsMCwxMy44OSw0LjI3LDEzLjg5LDEwLjg5djAuMTJjMCw0Ljc1LTIuNTMsNy40LTUuNTMsOS4wOA0KCQljNC44NywxLjg2LDcuODgsNC42OSw3Ljg4LDEwLjM1djAuMTJDMzguNDcsMzguOTgsMzIuMjIsNDIuODMsMjIuNzEsNDIuODN6IE0yNi45MiwxMy4xN2MwLTIuNzctMi4xNy00LjMzLTYuMDgtNC4zM0gxMS43djguOQ0KCQloOC41NGM0LjA5LDAsNi42OC0xLjMyLDYuNjgtNC40NVYxMy4xN3ogTTI5LjI3LDMwLjAyYzAtMi44My0yLjExLTQuNTctNi44Ni00LjU3SDExLjd2OS4yNmgxMS4wMWM0LjA5LDAsNi41Ni0xLjQ0LDYuNTYtNC41Nw0KCQlWMzAuMDJ6Ii8+DQoJPHBhdGggZD0iTTQ1Ljk4LDQyLjgzVjAuNzJoOS4yNnYzMy42OGgyMC45OXY4LjQySDQ1Ljk4eiIvPg0KCTxwYXRoIGQ9Ik0xMTUuMTYsNDIuODNsLTMuODUtOS40NGgtMTcuOGwtMy44NSw5LjQ0aC05LjQ0TDk4LjI2LDAuNDJoOC41NGwxOC4wNSw0Mi40MUgxMTUuMTZ6IE0xMDIuNDEsMTEuNTVMOTYuODIsMjUuMkgxMDgNCgkJTDEwMi40MSwxMS41NXoiLz4NCgk8cGF0aCBkPSJNMTQ3LjU2LDQzLjU1Yy0xMi4zOSwwLTIxLjU5LTkuNTYtMjEuNTktMjEuNjV2LTAuMTJDMTI1Ljk2LDkuOCwxMzQuOTksMCwxNDcuOTIsMGM3Ljk0LDAsMTIuNjksMi42NSwxNi42LDYuNWwtNS44OSw2LjgNCgkJYy0zLjI1LTIuOTUtNi41Ni00Ljc1LTEwLjc3LTQuNzVjLTcuMSwwLTEyLjIxLDUuOS0xMi4yMSwxMy4xMXYwLjEyYzAsNy4yMiw0Ljk5LDEzLjIzLDEyLjIxLDEzLjIzYzQuODEsMCw3Ljc2LTEuOTIsMTEuMDctNC45Mw0KCQlsNS44OSw1Ljk2QzE2MC40OSw0MC42NiwxNTUuNjgsNDMuNTUsMTQ3LjU2LDQzLjU1eiIvPg0KCTxwYXRoIGQ9Ik0xOTguMjEsNDIuODNMMTg1LjE2LDI0LjlsLTQuODcsNS4wNXYxMi44N2gtOS4yNlYwLjcyaDkuMjZ2MTguNDFsMTcuMDgtMTguNDFoMTEuMTlsLTE3LjE0LDE3Ljg2bDE3LjkyLDI0LjI0SDE5OC4yMXoiLz4NCgk8cGF0aCBkPSJNMjUzLjAxLDQyLjgzaC0yMC4wM1YwLjcyaDE5LjU1YzguNiwwLDEzLjg5LDQuMjcsMTMuODksMTAuODl2MC4xMmMwLDQuNzUtMi41Myw3LjQtNS41Myw5LjA4DQoJCWM0Ljg3LDEuODYsNy44OCw0LjY5LDcuODgsMTAuMzV2MC4xMkMyNjguNzYsMzguOTgsMjYyLjUxLDQyLjgzLDI1My4wMSw0Mi44M3ogTTI1Ny4yMiwxMy4xN2MwLTIuNzctMi4xNy00LjMzLTYuMDgtNC4zM0gyNDJ2OC45DQoJCWg4LjU0YzQuMDksMCw2LjY4LTEuMzIsNi42OC00LjQ1VjEzLjE3eiBNMjU5LjU2LDMwLjAyYzAtMi44My0yLjExLTQuNTctNi44Ni00LjU3SDI0MnY5LjI2aDExLjAxYzQuMDksMCw2LjU2LTEuNDQsNi41Ni00LjU3DQoJCVYzMC4wMnoiLz4NCgk8cGF0aCBkPSJNMjc2LjQzLDQyLjgzVjAuNzJoOS4yNnY0Mi4xSDI3Ni40M3oiLz4NCgk8cGF0aCBkPSJNMzIxLjE1LDQyLjgzbC05LjAyLTEzLjQ3aC03LjI4djEzLjQ3aC05LjI2VjAuNzJoMTkuMjVjOS45MiwwLDE1Ljg4LDUuMjMsMTUuODgsMTMuODl2MC4xMmMwLDYuOC0zLjY3LDExLjA3LTkuMDIsMTMuMDUNCgkJbDEwLjI5LDE1LjA0SDMyMS4xNXogTTMyMS4zMywxNS4xYzAtMy45Ny0yLjc3LTYuMDItNy4yOC02LjAyaC05LjJ2MTIuMDloOS4zOGM0LjUxLDAsNy4xLTIuNDEsNy4xLTUuOTVWMTUuMXoiLz4NCgk8cGF0aCBkPSJNMzU1LjExLDQyLjgzaC0xNi40MlYwLjcyaDE2LjQyYzEzLjIzLDAsMjIuMzgsOS4wOCwyMi4zOCwyMC45M3YwLjEyQzM3Ny40OSwzMy42MiwzNjguMzUsNDIuODMsMzU1LjExLDQyLjgzeg0KCQkgTTM2Ny44MSwyMS43N2MwLTcuNDYtNS4xMS0xMi42OS0xMi42OS0xMi42OWgtNy4xNnYyNS4zOGg3LjE2YzcuNTgsMCwxMi42OS01LjExLDEyLjY5LTEyLjU3VjIxLjc3eiIvPg0KPC9nPg0KPGc+DQoJPHBhdGggZD0iTTEzNS45Myw3Ny4wN2MtNC4yNCwwLTcuMzctMy4zNC03LjM3LTcuNThjMC00LjIsMy4xMS03LjYyLDcuNDMtNy42MmMyLjY3LDAsNC4yNiwwLjk0LDUuNzMsMi4zM2wtMS4xMywxLjIyDQoJCWMtMS4yNC0xLjE4LTIuNjItMi4wMi00LjYyLTIuMDJjLTMuMjUsMC01LjY5LDIuNjItNS42OSw2LjA1czIuNDYsNi4wOSw1LjY5LDYuMDljMi4wMiwwLDMuMzQtMC43OCw0Ljc1LTIuMTJsMS4wOSwxLjA3DQoJCUMxNDAuMjgsNzYuMDQsMTM4LjYsNzcuMDcsMTM1LjkzLDc3LjA3eiIvPg0KCTxwYXRoIGQ9Ik0xNDYuMyw2Mi4xMmgxLjY2djEzLjE2aDguMjd2MS41M2gtOS45M1Y2Mi4xMnoiLz4NCgk8cGF0aCBkPSJNMTY2LjcxLDc3LjA3Yy00LjQ3LDAtNy40Ny0zLjUxLTcuNDctNy41OHMzLjA0LTcuNjIsNy41Mi03LjYyczcuNDcsMy41MSw3LjQ3LDcuNThTMTcxLjE4LDc3LjA3LDE2Ni43MSw3Ny4wN3oNCgkJIE0xNjYuNzEsNjMuNGMtMy4zNiwwLTUuNzUsMi42OS01Ljc1LDYuMDVzMi40NCw2LjA5LDUuNzksNi4wOXM1Ljc1LTIuNjksNS43NS02LjA1UzE3MC4wNyw2My40LDE2Ni43MSw2My40eiIvPg0KCTxwYXRoIGQ9Ik0xODMuODQsNzYuODJoLTEuNjhWNjMuNjVoLTQuOTN2LTEuNTNoMTEuNTV2MS41M2gtNC45M1Y3Ni44MnoiLz4NCgk8cGF0aCBkPSJNMTk0LjksNzAuMnY2LjYxaC0xLjY2di0xNC43aDEuNjZ2Ni41M2g4LjQ4di02LjUzaDEuNjZ2MTQuN2gtMS42NlY3MC4ySDE5NC45eiIvPg0KCTxwYXRoIGQ9Ik0yMTIuNjYsNjIuMTJ2MTQuN0gyMTF2LTE0LjdIMjEyLjY2eiIvPg0KCTxwYXRoIGQ9Ik0yMjkuMzgsNjIuMTJIMjMxdjE0LjdoLTEuMzJsLTkuNDktMTIuMDV2MTIuMDVoLTEuNjJ2LTE0LjdoMS41NWw5LjI2LDExLjc4VjYyLjEyeiIvPg0KCTxwYXRoIGQ9Ik0yNDMuNjEsNzcuMDdjLTQuNjIsMC03LjQ3LTMuMzYtNy40Ny03LjU4YzAtNC4wNSwyLjk2LTcuNjIsNy4zNy03LjYyYzIuNDgsMCw0LjAxLDAuNzEsNS40OCwxLjk1bC0xLjA3LDEuMjYNCgkJYy0xLjEzLTAuOTktMi4zOS0xLjY4LTQuNDctMS42OGMtMy4yNSwwLTUuNTgsMi43NS01LjU4LDYuMDVjMCwzLjUzLDIuMjUsNi4xMyw1LjgyLDYuMTNjMS42OCwwLDMuMjMtMC42NSw0LjI0LTEuNDd2LTMuNjVoLTQuNDcNCgkJdi0xLjQ5aDYuMDd2NS44NkMyNDguMTUsNzYuMDQsMjQ2LjA5LDc3LjA3LDI0My42MSw3Ny4wN3oiLz4NCjwvZz4NCjxnPg0KCTxyZWN0IHg9IjAiIHk9IjY4LjYzIiB3aWR0aD0iMTEyLjY1IiBoZWlnaHQ9IjEuNjgiLz4NCgk8cmVjdCB4PSIyNjUuNDIiIHk9IjY4LjYzIiB3aWR0aD0iMTEyLjY1IiBoZWlnaHQ9IjEuNjgiLz4NCjwvZz4NCjwvc3ZnPg0K" />
        <div className={styles.foreBird} ref={foreBird}></div>
      </header>
      <section>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>Content</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi ad nisi neque, sunt excepturi soluta aliquid voluptas nihil. Et dolorem mollitia tenetur fugit sequi voluptas delectus officiis rerum fuga, fugiat quae dolore nemo pariatur. Quibusdam et aliquid a eos porro earum dignissimos itaque, nobis dolor impedit tempora ullam ipsam doloremque magnam cumque sunt, quod ut eaque autem explicabo consectetur vel obcaecati dicta rerum cupiditate. Nobis voluptatum dolor doloribus alias ipsum similique, adipisci voluptatibus perferendis sequi dolorem, aperiam eaque nostrum voluptate veniam autem deleniti commodi magnam necessitatibus totam quaerat animi voluptatem incidunt omnis illo. Dolore, iure, temporibus adipisci modi quibusdam maiores!</p>
        </div>
        <div className="posts row">
          <div className="post one-third column"><img src="https://raw.githubusercontent.com/DevTips/Parallax-on-the-Web-DevTips-/master/images/model2.jpg" /></div>
          <div className="post one-third column"><img src="https://raw.githubusercontent.com/DevTips/Parallax-on-the-Web-DevTips-/master/images/model2.jpg" /></div>
          <div className="post one-third column"><img src="https://raw.githubusercontent.com/DevTips/Parallax-on-the-Web-DevTips-/master/images/model2.jpg" /></div>
        </div>
      </div>
    </section>
    </div>
  );
}
