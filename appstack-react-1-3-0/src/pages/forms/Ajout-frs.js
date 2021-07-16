import React, { useState } from "react";
import Axios from "axios";
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

function FormRow() {

  const [raisonfrs, setRaisonfrs] = useState("");
  const [nsiret, setNsiret] = useState("");
  const [adrfrs, setAdrfrs] = useState("");
  const [cpfrs, setCpfrs] = useState("");
  const [villefrs, setVillefrs] = useState("");
  const [contactfrs, setContactfrs] = useState("");
  const [telfrs, setTelfrs] = useState("");
  const [emailfrs, setEmailfrs] = useState("");
  const [contactcomptafrs, setContactcomptafrs] = useState("");

  const [delaipaifrs, setdelaipaifrs] = useState("");
  const [tauxtvafrs, settauxtvafrs] = useState("");

  const addFrs = () => {
    Axios.post('http://localhost:3001/create', {
    raisonfrs: raisonfrs,
    nsiret: nsiret,
    adrfrs: adrfrs,
    cpfrs: cpfrs,
    villefrs: villefrs,
    contactfrs: contactfrs,
    telfrs: telfrs,
    emailfrs: emailfrs,
    contactcomptafrs: contactcomptafrs,
    delaipaifrs: delaipaifrs,
    tauxtvafrs: tauxtvafrs
    }).then(() => {
      console.log('success');
     
    });
  };
  return(

    <Container fluid className="p-0">
    <h1 className="h3 mb-3">Nouveau fournisseur</h1>

    <Row>
      {/* <Col lg="6">
        <BasicForm />
      </Col>
      <Col lg="6">
        <HorizontalForm />
      </Col> */}
      <Col lg="12">
      <Card>
    <CardHeader>
      <CardTitle tag="h5">Nouveau fournisseur</CardTitle>
    </CardHeader>
    <CardBody>
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label>Fournisseur</Label>
              <Input type="text" name="frs" placeholder="Raison sociale"
              onChange={(event) =>{
                setRaisonfrs(event.target.value);
              }}
                 />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label>N° de siret</Label>
              <Input type="text" name="siret" placeholder="Siret"
              onChange={(event) =>{
                setNsiret(event.target.value);
              }}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
            <Col md={6}>
                <FormGroup>
                    <Label>Adresse</Label>
                    <Input type="text" name="adresse" placeholder="Adresse"
                    onChange={(event) =>{
                      setAdrfrs(event.target.value);
                    }}
                    />
                </FormGroup>
            </Col>
            <Col md={2}>
                <FormGroup>
                    <Label>Code postal</Label>
                    <Input type="text" name="cp" placeholder="Code postal"
                    onChange={(event) =>{
                      setCpfrs(event.target.value);
                    }}
                    />       
                </FormGroup>
            </Col>
            <Col md={4}>
                <FormGroup>
                    <Label>Ville</Label>
                    <Input type="text" name="ville" placeholder="Ville"
                    onChange={(event) =>{
                      setVillefrs(event.target.value);
                    }}
                    />       
       
                </FormGroup>
            </Col>
        </Row>
        
        <Row form>
          <Col md={3}>
            <FormGroup>
              <Label>Contact</Label>
              <Input type="text" name="contact" placeholder="Contact"
              onChange={(event) =>{
                setContactfrs(event.target.value);
              }}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>Téléphone</Label>
              <Input type="text" name="tel" placeholder="Téléphone" 
              onChange={(event) =>{
                setTelfrs(event.target.value);
              }}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>Email</Label>
              <Input type="email" name="email" placeholder="Email" 
              onChange={(event) =>{
                setEmailfrs(event.target.value);
              }}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>Contact Comptabilité</Label>
              <Input type="text" name="contact_compta" placeholder="Contact Comptabilité"
              onChange={(event) =>{
                setContactcomptafrs(event.target.value);
              }}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
        <Col md={3}>
            <FormGroup>
              <Label>Catégorie de dépense</Label>
            <Input type="select" name="f_cat_1">
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
          <Col md={3}>
            <FormGroup>
              <Label>Sous catégorie de dépense</Label>
                <Input type="select" name="f_cat_2">
                  <option />
                  <option />
                  <option />
                  <option />
                </Input>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>Délai de paiement</Label>
              <Input type="text" name="c_delai_paiement" placeholder="Délai de paiement"
              onChange={(event) =>{
                setdelaipaifrs(event.target.value);
              }}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>Taux de TVA</Label>
              <Input type="text" name="c_tva" placeholder="Taux de TVA"
              onChange={(event) =>{
                settauxtvafrs(event.target.value);
              }}
              />
            </FormGroup>
          </Col>
        </Row>
        <Button color="primary"
        onClick={addFrs}

        >Enregistrer</Button>
      </Form>
    </CardBody>
  </Card>        {/* <InlineForm /> */}
      </Col>
    </Row>
  </Container>


  );
};
  




 
export default FormRow;
