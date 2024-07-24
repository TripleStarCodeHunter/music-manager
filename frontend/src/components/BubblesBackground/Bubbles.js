import styles from './Bubbles.css'
import React from "react";

class Bubbles extends React.Component {
    componentDidMount() {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.main.scrollTop = 0;
    }
    render() {
      return (
        <>
          {/* <DemoNavbar /> */}
          
          <main ref="main" style={{width:"100vw",height:"100vh",overflow:"hidden"}}>
            <section className={`${styles.section} ${styles['section-shaped']} ${styles['section-lg']}`}>
              <div className={`${styles.shape} ${styles['shape-style-1']} ${styles['bg-gradient-default']}`} >
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              
              <div className={styles.content} style={{width:"100vw",height:"100vh"}}>
              </div>
            </section>
            Hello
          </main>
          {/* <SimpleFooter /> */}
        </>
      );
    }
  }
  
  export default Bubbles;
  