import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { Container, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';

const styles = {
  introTextContainer: {
    margin: 10,
    // flexDirection: 'column',
    whiteSpace: 'pre-wrap',
    textAlign: 'left',
    fontSize: '1.2em',
    fontWeight: 500,
  },
  introImageContainer: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
};

function About(props) {
  const theme = useContext(ThemeContext);
  const { header } = props;
  const [data, setData] = useState(null);

  const parseIntro = (text) => (
    <ReactMarkdown
      children={text}
    />
  );

  useEffect(() => {
    fetch(endpoints.about, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <>
    <Header title={header} />
    {data ? (
      <Fade>
        <div className="section-content-container">
          <Container fluid="sm">
            <Row>
              <Col style={styles.introTextContainer}>
                {parseIntro(data.about)}
                <ol className="show">
                  {
                    data.dramas.map((show, i) => <li key={i}><a style={{color:`${theme.color}`}} href={show.url} target="_blank" rel="noreferrer">{show.name}</a></li>)
                  }
                </ol>
              </Col>
              <Col style={styles.introImageContainer}>
                <img src={data?.imageSource} alt="profile" />
              </Col>
            </Row>
          </Container>
        </div>
      </Fade>
    ) : <FallbackSpinner /> }
  </>
  );
}

About.propTypes = {
  header: PropTypes.string.isRequired,
};

export default About;
