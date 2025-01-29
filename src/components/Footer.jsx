import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillGithub, AiFillMail } from 'react-icons/ai';

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className='footer'>
      <Row>
        <Col md='4' className='footer-copywright'>
          <h3>Designed and Developed by Inzamam Tariq</h3>
        </Col>
        <Col md='4' className='footer-copywright'>
          <h3>Copyright © {year} IT</h3>
        </Col>
        <Col md='4' className='footer-body'>
          <ul className='footer-icons'>
            <li className='social-icons'>
              <a
                href='mailto:inzimammughal@gmail.com'
                style={{ color: 'white' }}
                target='_blank'
                rel='noopener noreferrer'
              >
                <AiFillMail />
              </a>
            </li>
            <li className='social-icons'>
              <a
                href='https://www.linkedin.com/in/inzamam-tariq-0822bb192/'
                style={{ color: 'white' }}
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className='social-icons'>
              <a
                href='https://github.com/inzamamtariq'
                style={{ color: 'white' }}
                target='_blank'
                rel='noopener noreferrer'
              >
                <AiFillGithub />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;