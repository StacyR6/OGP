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
      <CardTitle tag="h5">Nouvelle dépense</CardTitle>
      {/* <h6 className="card-subtitle text-muted">Bootstrap column layout.</h6> */}
    </CardHeader>
    <CardBody>
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label>Raison sociale</Label>
              <Input type="text" name="raison" placeholder="Raison sociale" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label>N° de facture</Label>
              <Input type="text" name="facture" placeholder="Facture" />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
            <Col md={6}>
                <FormGroup>
                    <Label>Catégorie niveau 1</Label>
                    <Input type="select" name="d_cat_1">
                        <option />
                        <option value="operations">Opérations</option>
                        <option value="atelier">Atelier</option>
                        <option value="commercial">Commercial</option>
                        <option value="administratif">Administratif</option>
                        <option value="investissement">Investissement</option>
                        <option value="dette">Dette</option>

                    </Input>        
                </FormGroup>
            </Col>
            <Col md={6}>
                <FormGroup>
                    <Label>Catégorie niveau 2</Label>
                    <Input type="select" name="d_cat_2">
                        <option />
                        <option value="decaisse">1</option>
                        <option value="encaisse">2</option>
                        <option value="litige">3</option>
                        <option value="retard">4</option>
                    </Input>        
                </FormGroup>
            </Col>
        </Row>
        
        <Row form>
          <Col md={5}>
            <FormGroup>
              <Label>État</Label>
              <Input type="select" name="state">
                <option />
                <option value="decaisse">Décaissé</option>
                <option value="encaisse">Encaissé</option>
                <option value="litige">Litige</option>
                <option value="retard">Retard de paiement</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>Date de facturation</Label>
              <Input type="date" name="date_facturation" />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>Délai de paiement</Label>
              <Input type="text" name="delai" placeholder="Délai de paiement" />
            </FormGroup>
          </Col>
          
        </Row>
        <Row>
        <Col md={3}>
            <FormGroup>
              <Label>Date de paiement</Label>
              <Input type="date" name="date_paiement" />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>Semaine de paiement</Label>
              <Input type="text" name="semaine_paiement" placeholder="Semaine de paiement" />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>Montant HT</Label>
              <Input type="text" name="d_ht" placeholder="Montant HT" />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>Mois d'éxecution</Label>
              <Input type="date" name="mois"/>
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
    <h1 className="h3 mb-3">Nouvelle dépense</h1>

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
