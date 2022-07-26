import React from 'react';
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal';


const styles = {
  nameStyle: {
    fontSize: '4em',
  },
  inlineChild: {
    display: 'inline-block',
  },
  mainContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'top',
    alignItems: 'center',
  },
};

function Page404() {
    const text = ["Are you lost?", "Duhh! If not you won't be on this page.", "To rejuvenate yourself, click on the cup of coffee on the top of the screen! Cheers!"]

  return (
    <Fade>
      <div style={styles.mainContainer}>
        <img src="images/404.svg" alt="404 page not found" style={styles.nameStyle}></img>
        <br />
        <div style={{ flexDirection: 'row' }}>
          <Typewriter
            options={{
              loop: true,
              autoStart: true,
              strings: text,
              deleteSpeed: 8,
            }}
          />
        </div>
      </div>
    </Fade>
  )
}

export default Page404;