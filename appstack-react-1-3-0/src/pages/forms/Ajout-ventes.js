import React from "react";
import InputMask from "react-input-mask";
import Select from "react-select";
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';


import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  CustomInput,
  Form,
  
  FormGroup,
  FormText,
  Input,
  InputGroup,
  InputGroupAddon,
  Label,
  Row,
  ButtonGroup
} from "reactstrap";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

const FormRow = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Saisissez les informations</CardTitle>
      {/* <h6 className="card-subtitle text-muted">Bootstrap column layout.</h6> */}
    </CardHeader>
    <CardBody>
      <Form>
        <Row form>

          <Col md={5}>
        <FormGroup>
        <Button className="btn-pill ml-1 mb-2">+</Button>

    <Select
        placeholder="Raison sociale"
                  className="react-select-container"
                  classNamePrefix="react-select"
                  options={options}
                  isSearchable
                />
</FormGroup>
</Col>
               
               
              
          <Col md={5} className="ml-md-4">
            <FormGroup>
              <Input type="text" name="v_num_facture" placeholder="N° de facture" />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
        <Col md={3}  className="ml-md-2">
        <FormGroup>
          <Input type="text" name="v_date_fact" placeholder="Date de facturation" />
        </FormGroup>
        </Col>
<Col md={3}  className="ml-md-6">
        <FormGroup>
          <Input
            type="text"
            name="v_delai_paiement"
            placeholder="Délai de paiement"
          />
        </FormGroup>
        </Col>
      <Col md={3}  className="ml-md-5">
        <FormGroup className="d-flex">

              <Input type="text" name="v_tva" placeholder="% TVA"/>
              <Button className="btn-pill ml-1 mb-0 mr-0">+</Button>

            </FormGroup>
            </Col>
            </Row>
        <Row form>
          <Col md={4} >
            <FormGroup>
              <Input type="text" name="v_ht" placeholder="Montant HT"/>
            </FormGroup>
          </Col>
          <Col md={4} className="ml-md-6">
            <FormGroup>
              <Input type="text" name="v_ttc" placeholder="Montant TTC"/>
            </FormGroup>
          </Col>
          </Row>
          {/* <Col md={2}>
            <FormGroup>
              <Label>Zip</Label>
              <Input type="text" name="zip" />
            </FormGroup>
          </Col>
        </Row> */}
        <Row className="border-top border-bottom pb-4 pt-4">
        <Col md={3}>
        <FormGroup className="d-flex">

              <Input type="text" name="v_cat" placeholder="Catégorie"/>
              <Button className="btn-pill ml-1 mb-0 mr-0">+</Button>

            </FormGroup>
            </Col>
            <Col md={3}>
        <FormGroup className="d-flex">

              <Input type="text" name="v_ss_cat" placeholder="Sous catégorie"/>
              <Button className="btn-pill ml-1 mb-0 mr-0">+</Button>

            </FormGroup>
            </Col>
            <Col md={3}>
        <FormGroup className="d-flex">

              <Input type="text" name="v_cat2" placeholder="Catégorie 2"/>
              <Button className="btn-pill ml-1 mb-0 mr-0">+</Button>

            </FormGroup>
            </Col>
        </Row>
               <Button color="primary" className="a-droite mt-2">Valider</Button>
      </Form>
    </CardBody>
  </Card>
);



const Layouts = () => (
  <Container fluid className="p-0">
    <h1 className="h3 mb-3">Nouvelle vente</h1>

    <Row>
      {/* <Col lg="6">
        <BasicForm />
      </Col>
      <Col lg="6">
        <HorizontalForm />
      </Col> */}
      <Col lg="12">
        <FormRow />
        {/* <InlineForm /> */}
      </Col>
    </Row>
  </Container>
);

export default Layouts;
