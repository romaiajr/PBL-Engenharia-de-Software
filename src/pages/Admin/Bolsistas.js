import React from "react";
import {
  Row,
  Col,
  Container,
  Button,
  Dropdown,
  InputGroup,
  FormControl,
  Table,
  Modal,
  ModalBody,
  ModalTitle
} from "react-bootstrap";
import api from "../../services/api";
import CadastroBolsista from "./form_bolsista";

export default class Bolsistas extends React.Component {
  constructor() {
    super();
    this.state = {
      rows: [],
      search: "",
      show: false
    };
  }
  /** REVIEW Método para registrar dados da pesquisa */
  handleChange = event => this.setState({ search: event.target.value });

  /** NOTE Método para abrir o modal */
  setControl = () => this.setState({ show: true });

  /**NOTE Método para fechar o modal */
  handleClose = () => this.setState({ show: false });

  /**NOTE Método que faz requisição de dados dos bolsistas e faz a listagem */
  listBolsistas = () => {
    api
      .get("/listarBolsistas")
      .then(response => {
        response.map(b => (
          <tr>
            <td>
              <b>{b.id}</b>
            </td>
            <td>{b.name}</td>
            <td>{b.phone}</td>
            <td>{b.email}</td>
          </tr>
        ));
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col>
              <h3 style={{ textAlign: "left" }}>Gerir Bolsista</h3>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <div style={{ height: "3vh" }}></div>
          </Row>
          <Row>
            <Col>
              <Dropdown>
                <Dropdown.Toggle variant="outline-secondary">
                  Ordenar Por
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>Nome</Dropdown.Item>
                  <Dropdown.Item>CPF</Dropdown.Item>
                  <Dropdown.Item>Telefone</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col></Col>
            <Col>
              <InputGroup>
                <FormControl
                  placeholder="Procurar..."
                  value={this.state.search}
                  onChange={this.handleChange}
                />
                <InputGroup.Prepend>
                  <Button variant="outline-secondary">&#128269;</Button>
                </InputGroup.Prepend>
              </InputGroup>
            </Col>
            <Col xs={1}></Col>
          </Row>
          <Row>
            <div style={{ height: "3vh" }}></div>
          </Row>
          <Row>
            <Col>
              <div
                style={{
                  height: "40vh",
                  overflowY: "auto"
                }}
              >
                <Table bordered hover responsive size="sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nome</th>
                      <th>Telefone</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/*{this.listBolsistas()}*/}
                    {this.state.rows}
                  </tbody>
                </Table>
              </div>
            </Col>
            <Col xs={1}></Col>
          </Row>
          <br />
          <Row>
            <Col xl={9} sm={10}></Col>
            <Col>
              <Button
                variant="outline-secondary"
                block
                onClick={this.setControl}
              >
                Novo Cadastro
              </Button>
            </Col>
            <Col xs={1}></Col>
          </Row>
          <Row>
            <Col>
              <div style={{ height: "3vh" }}></div>
            </Col>
          </Row>
        </Container>
        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.state.show}
          onHide={this.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Cadastro de Bolsista</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CadastroBolsista />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
