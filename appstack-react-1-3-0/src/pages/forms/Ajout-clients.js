import React from "react";
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
  Row
} from "reactstrap";

const FormRow = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Nouveau client</CardTitle>
      {/* <h6 className="card-subtitle text-muted">Bootstrap column layout.</h6> */}
    </CardHeader>
    <CardBody>
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label>Client</Label>
              <Input type="text" name="client" placeholder="Raison sociale" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label>N° de siret</Label>
              <Input type="text" name="siret" placeholder="Facture" />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
            <Col md={6}>
                <FormGroup>
                    <Label>Adresse</Label>
                    <Input type="text" name="adresse" placeholder="Adresse"/>
                </FormGroup>
            </Col>
            <Col md={2}>
                <FormGroup>
                    <Label>Code postal</Label>
                    <Input type="text" name="cp" placeholder="Code postal"/>       
                </FormGroup>
            </Col>
            <Col md={4}>
                <FormGroup>
                    <Label>Ville</Label>
                    <Input type="text" name="ville" placeholder="Ville"/>       
       
                </FormGroup>
            </Col>
        </Row>
        
        <Row form>
          <Col md={3}>
            <FormGroup>
              <Label>Contact</Label>
              <Input type="text" name="contact" placeholder="Contact" />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>Téléphone</Label>
              <Input type="text" name="tel" placeholder="Téléphone" />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>Email</Label>
              <Input type="email" name="email" placeholder="Email" />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>Contact Comptabilité</Label>
              <Input type="text" name="contact_compta" placeholder="Contact Comptabilité" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
        <Col md={3}>
            <FormGroup>
              <Label>Type de prestation</Label>
              <Input type="select" name="type_prestation">
                <option />
                <option value="tresor_public_entree">Trésor_Public_Entrée</option>
                <option value="prestation_transport">Prestation_Transport</option>
                <option value="prestation_parking">Prestation_Parking</option>
                <option value="vente">Vente</option>
                </Input>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>Type de marchandise</Label>
              <Input type="text" name="type_marchandise" placeholder="Type de marchandise" />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>Délai de paiement</Label>
              <Input type="text" name="c_delai_paiement" placeholder="Délai de paiement" />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>Taux de TVA</Label>
              <Input type="text" name="c_tva" placeholder="Taux de TVA"/>
            </FormGroup>
          </Col>
        </Row>
        <Button color="primary">Enregistrer</Button>
      </Form>
    </CardBody>
  </Card>
);



const Layouts = () => (
  <Container fluid className="p-0">
    <h1 className="h3 mb-3">Nouveau client</h1>

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
