import { Container, Row, Col } from 'reactstrap';
import { FaCalendarAlt, FaInfoCircle } from 'react-icons/fa';
import Home from './components/Home';

function App() {
  return (
    <>
      <Container className="py-5">
        <Row className="justify-content-center text-center">
          <Col md="8">
            <h1 className="display-3 mb-4">Welcome!</h1>
            <p className="lead mb-4">
              This is a simple hero unit, a Jumbotron-style component designed to grab attention and highlight featured content.
            </p>
            <hr className="my-4" />
            <p className="mb-4">
              It utilizes utility classes for typography and spacing to help space out content within a larger container.
            </p>
            <div className="d-flex justify-content-center mb-4">
              <FaCalendarAlt
                size={60}
                className="mx-3 text-primary icon-hover"
              />
              <FaInfoCircle
                size={60}
                className="mx-3 text-success icon-hover"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Home />
        </Row>
      </Container>
    </>
  );
}

export default App;
