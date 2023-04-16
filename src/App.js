import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import api from "./services/api";

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { Col, Row } from "react-bootstrap";

/*
  * function formatDate(date) {
  *   return [
  *     padTo2Digits(new Date(date).getDate()),
  *     padTo2Digits(new Date(date).getMonth() + 1),
  *     new Date(date).getFullYear(),
  *   ].join('/');
  * }
*/

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

const dayOfWeek = (date) => {
  let day = new Date(date).getDay();
  return day === 0 ? "Dom" : 
  day === 1 ? "Seg" : 
  day === 2 ? "Ter" :
  day === 3 ? "Qua" :
  day === 4 ? "Qui" :
  day === 5 ? "Sex" :
  day === 6 ? "Sáb" : "";
}

const formatDate = (date) => {
  return [    
    padTo2Digits(new Date(date).getDate()),
    padTo2Digits(new Date(date).getMonth() + 1)
  ].join('/');
}

const formatHour = (date) =>  {
  return [
    padTo2Digits(new Date(date).getHours()),
    new Date(date).getMinutes().toString() > "00" ? padTo2Digits(new Date(date).getMinutes()) : null,
  ].join('H');
}

export const App = () => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    api
      .get()
      .then((response) => setEvents(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col xl={12}>
          <h4 className="mt-2 text-center text-primary">AD Itatiaia - 60 anos</h4>        
        </Col>
      </Row>
      <Row>
        <Col xl={12}>
          <h3 className="text-center">Anúncios da Semana</h3>        
        </Col>
      </Row>

      <Row>
        <Col xl={12}>
          <Table striped bordered responsive="md" size="sm">
            <thead>
              <tr>
                <th>Data</th>
                <th>Evento</th>
                <th>Local</th>
              </tr>
            </thead>
            <tbody>
              {events.map((events, index) => (
                <tr key={index}>
                  <td>{dayOfWeek(events.start)}, {formatDate(events.start).toString()}, {formatHour(events.start).toString()}</td>
                  <td>{events.title}</td>
                  <td>{events.local}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col xl={12}>
          <p className="text-center text-secondary"><span>&copy;IEADI </span> 
            <span> {new Date().getFullYear()}</span>
            <span> - Criado por <a href="https://www.linkedin.com/in/brunoasdev" target="_blank()">Bruno A. Silva</a></span>
          </p>        
        </Col>
      </Row>
    </Container>
  );
}
