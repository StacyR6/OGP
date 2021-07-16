import React from "react";
import InputMask from "react-input-mask";
import Select from "react-select";
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Axios from 'axios';
import MaterialTable from 'material-table'
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
  Table,
  FormGroup,
  FormText,
  Input,
  InputGroup,
  InputGroupAddon,
  Label,
  Row,
  ButtonGroup,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledButtonDropdown
} from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

import { useState, useEffect } from "react";
import { data } from "jquery";


function Layouts () {
  const selectRow = {
    mode: "checkbox",
    clickToSelect: true,
    bgColor: "#f8f9fa",
    headerStyle:{minWidth: '200px'}
  };

  const UpdateRaison_sociale = (id) => {
      Axios.get('http://localhost:3001/update', {raison_sociale : newRaison_sociale, id: id}).then((response) =>
      {alert('update');
    console.log(id)
    })
  }

  const [newRaison_sociale, setNewRaison_sociale] = useState('');
//   return (
    // <Button
      // onClick={() => {
      //   this.onFollowChanged(row);
      // }}
//     >
//       Follow
//     </Button>
//   );
// };
// useEffect(() => {
//   fetchComments(comments);
//   getListevente();
// // }, [comments]);
// const [comments,setComments]=useState([])
//   useEffect(() => {
//     fetchComments();
//   }, [])
//   useEffect(() => {

//     console.log('hello');
//     console.log(comments);
//   }, [comments])
// const fetchComments=async()=>{
//   const response=await Axios('http://localhost:3001/listevente');
//   setComments(response.data)    
// }
  return(
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
      <Card>
    <CardHeader>
      <CardTitle tag="h5">Saisissez les informations</CardTitle>
      {/* <h6 className="card-subtitle text-muted">Bootstrap column layout.</h6> */}
    </CardHeader>
    <CardBody>
      <Form>
        <Row form>

          {/* <Col md={5}>
        <FormGroup>
        <Button className="btn-pill ml-1 mb-2">+</Button>

    <Select
        placeholder="Raison sociale"
                  className="react-select-container"
                  classNamePrefix="react-select"
                  options={options}
                  isSearchable
                //   onChange={(event) =>{
                //     setRaison(event.target.value);
                //   }}
                />
</FormGroup>
</Col> */}
               
               
              
          <Col md={5} className="ml-md-4">
            <FormGroup>
              <Input type="text" name="v_num_facture" placeholder="N° de facture" 
            onChange={(event) =>{
                setNewRaison_sociale(event.target.value);
              }}
              />
            </FormGroup>
          </Col>
        </Row>
        {/* <Row form>
        <Col md={3}  className="ml-md-2">
        <FormGroup>
          <Input type="text" name="v_date_fact" placeholder="Date de facturation"
          onChange={(event) =>{
            setDelaifact(event.target.value);
          }}/>
        </FormGroup>
        </Col>
<Col md={3}  className="ml-md-6">
        <FormGroup>
          <Input
            type="text"
            name="v_delai_paiement"
            placeholder="Délai de paiement"
            onChange={(event) =>{
              setDelaipai(event.target.value);
            }}
          />
        </FormGroup>
        </Col>
      <Col md={3}  className="ml-md-5">
        <FormGroup className="d-flex">

              <Input type="text" name="v_tva" placeholder="% TVA"
              onChange={(event) =>{
                setTva(event.target.value);
              }}/>
              <Button className="btn-pill ml-1 mb-0 mr-0">+</Button>

            </FormGroup>
            </Col>
            </Row>
        <Row form>
          <Col md={4} >
            <FormGroup>
              <Input type="text" name="v_ht" placeholder="Montant HT"
              onChange={(event) =>{
                setHt(event.target.value);
              }}/>
           </FormGroup>
          </Col>
          <Col md={4} className="ml-md-6">
            <FormGroup>
              <Input type="text" name="v_ttc" placeholder="Montant TTC"
              onChange={(event) =>{
                setTtc(event.target.value);
              }}/>
            </FormGroup>
          </Col>
          </Row> */} 
          {/* <Col md={2}>
            <FormGroup>
              <Label>Zip</Label>
              <Input type="text" name="zip" />
            </FormGroup>
          </Col>
        </Row> */}
        {/* <Row className="border-top border-bottom pb-4 pt-4">
        <Col md={3}>
        <FormGroup className="d-flex">

              <Input type="text" name="v_cat" placeholder="Catégorie"
              onChange={(event) =>{
                setCat(event.target.value);
              }}/>
              <Button className="btn-pill ml-1 mb-0 mr-0">+</Button>

            </FormGroup>
            </Col>
            <Col md={3}>
        <FormGroup className="d-flex">

              <Input type="text" name="v_ss_cat" placeholder="Sous catégorie"
              onChange={(event) =>{
                setSouscat(event.target.value);
              }}/>
              <Button className="btn-pill ml-1 mb-0 mr-0">+</Button>

            </FormGroup>
            </Col>
            <Col md={3}>
        <FormGroup className="d-flex">

              <Input type="text" name="v_cat2" placeholder="Catégorie 2" */}
            {/* //   onChange={(event) =>{ */}
            {/* //     setCat2(event.target.value);
            //   }}
              /> */}
              {/* <Button className="btn-pill ml-1 mb-0 mr-0">+</Button>

            </FormGroup>
            </Col>
        </Row> */}
               <Button color="primary" className="a-droite mt-2"
            //    onClick={() => {UpdateRaison_sociale
              
            //   }}
               >
                   Modifier</Button>


              
              
      </Form>
 
  

                
                </CardBody>
              </Card>        {/* <InlineForm /> */}
                  </Col>
                </Row>
              </Container>
            
             
            );
            
            
    }
              
            
            
             
            
            export default Layouts;