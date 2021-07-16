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
  // const [data, setData] = useState(listevente);

//   const columns =[
//     {title:"raison sociale", field: "raison_sociale"},
//     {title:"delai de facturation", field: "delai_facturation"},
//     {title:"delai de paiement ", field: "delai_paiement"},
//     {title:"catégorie ", field: "type_rec"},
//     {title:"sous catégorie", field: "type_sousrec"},
//     {title:"hor taxe", field: "ht"},
//     {title:"taux tva", field: "taux_tva"},
//     {title:"ttc", field: "ttc"}

// ]

const columns =[
  {dataField: "raison_sociale", text:"raison sociale"},
  {dataField: "delai_facturation", text:"delai de facturation"},
  {dataField: "delai_paiement", text:"delai de paiement " },
  {dataField: "type_rec", text:"catégorie "},
  {dataField: "type_sousrec", text:"sous catégorie"},
  {dataField: "ht", text:"hors taxe"},
  {dataField: "taux_tva", text:"taux tva" },
  {dataField: "ttc", text:"ttc"},
  {
    dataField: 'link',
    text: 'ACTION',
    formatter: (rowContent, row) => {
      return (    

        <UncontrolledButtonDropdown key="1" className="mr-1 mb-1">
        <DropdownToggle caret size="sm" color="secondary">
        ...
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Modifier</DropdownItem>
          <DropdownItem>Supprimer</DropdownItem>
          <DropdownItem>Changer état</DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>      )
    }
}

]
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" }
  ];
//   const [raison, setRaison] = useState("");
  const [nfact, setNfact] = useState("");
  const [delaifact, setDelaifact] = useState("");
  const [delaipai, setDelaipai] = useState("");
  const [tva, setTva] = useState("");
  const [ht, setHt] = useState("");
  const [ttc, setTtc] = useState("");
  const [cat, setCat] = useState("");
  const [souscat, setSouscat] = useState("");
//   const [cat2, setCat2] = useState("");

const [listevente, setListevente] = useState([]);


 const addVente = () => {
    Axios.post('http://localhost:3001/create', {
    nfact: nfact,
    // raison: raison,
    delaifact: delaifact,
    delaipai: delaipai,
    tva: tva,
    ht: ht,
    ttc: ttc,
    cat: cat,
    souscat: souscat
    // cat2: cat2
    }).then(() => {
      console.log('success');
     setListevente([...listevente,
      {
        nfact: nfact,
        // raison: raison,
        delaifact: delaifact,
        delaipai: delaipai,
        tva: tva,
        ht: ht,
        ttc: ttc,
        cat: cat,
        souscat: souscat,

        // cat2: cat2
      }
    ])
  
    });
 };
const clients = [
  {dataField : "id_cli", text: "id-cli"},
  {dataField: "nom", text: "nom"} 
]
 const [data1, setData1] = useState([]);

 useEffect(() => {
   Axios
     .get(
       "http://localhost:3001/listeclients"
     )
     .then(response => {
       setData1(response.data);
       console.log(response.data);
     })
     .catch(function(error) {
       console.log(error);
     });
 }, []);

//  const hello=Axios.get('http://localhost:3001/listevente').then((response) => {
//    return response;
//  });
//  async getListevente(){
//  let hello = await Axios.get('http://localhost:3001/listevente').then(function (response) {
//     setListevente(response.data);
//     console.log('coucou');
//         console.log(hello);
//     console.log('listevente ='+listevente);
//     // console.log(columns.datafield);
    
//     })
//     .catch(function (error) {
//       console.log(error);
//    });
// };

const getListevente = async () => {
  try{
    const data = await Axios.get('http://localhost:3001/listevente');

  setListevente(data.data);

  } catch (e) {
console.log(e);
    
    };
};
const [data, setData] = useState([]);

useEffect(() => {
  Axios
    .get(
      "http://localhost:3001/listevente"
    )
    .then(response => {
      setData(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
}, []);

const linkFollow = (cell, row, rowIndex, formatExtraData) => {
  return (
    <Button
      // onClick={() => {
      //   this.onFollowChanged(row);
      // }}
    >
      Follow
    </Button>
  );
};
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

          <Col md={5}>
        <FormGroup>
        <Button className="btn-pill ml-1 mb-2">+</Button>

    <Select
        placeholder="Raison sociale"
                  className="react-select-container"
                  classNamePrefix="react-select"
                  options={response.data.nom}
                  isSearchable
                //   onChange={(event) =>{
                //     setRaison(event.target.value);
                //   }}
                />
</FormGroup>
</Col>
               
               
              
          <Col md={5} className="ml-md-4">
            <FormGroup>
              <Input type="text" name="v_num_facture" placeholder="N° de facture" 
              onChange={(event) =>{
                setNfact(event.target.value);
              }}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
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

              <Input type="text" name="v_cat2" placeholder="Catégorie 2"
            //   onChange={(event) =>{
            //     setCat2(event.target.value);
            //   }}
              />
              <Button className="btn-pill ml-1 mb-0 mr-0">+</Button>

            </FormGroup>
            </Col>
        </Row>
               <Button color="primary" className="a-droite mt-2"
               onClick={() => {
                addVente();
                getListevente();
              }}
               >Valider</Button>


              
              
      </Form>
      ggggg
 
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Always responsive</CardTitle>
      <h6 className="card-subtitle text-muted">
        Across every breakpoint, use <code>responsive</code> for horizontally
        scrolling tables.
      </h6>
    </CardHeader>
    {/* <Table  hover responsive>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Raison sociale</th>
          <th scope="col">Délai de facturation</th>
          <th scope="col">Délai de paiement</th>
          <th scope="col">Catégorie</th>
          <th scope="col">Sous catégorie</th>
          <th scope="col">Catégorie 2</th>
          <th scope="col">Montant HT</th>
          <th scope="col">Taux de TVA</th>
          <th scope="col">Montant TTC</th>
        </tr>
      </thead>
      <tbody>
        
          {listevente.map((val, key) => (
            <tr key={key}>
            <th scope="row">{val.id_rec}</th>
 <td>{val.raison_sociale}</td>
 <td >{val.delai_facturation}</td>
 <td>{val.delai_paiement}</td>
 <td>{val.type_rec}</td>
 <td>{val.type_sousrec}</td>
 <td>{val.ht}</td>
 <td>{val.taux_tva}</td>
 <td>{val.ttc}</td>
 </tr>
))} */}
        
        {/* <tr>
          <th scope="row">2</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr> */}
          {/* <th scope="row">3</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr> */}
      {/* </tbody>
    </Table> */}
    <BootstrapTable 
          bootstrap4
          bordered={false}
          rowClasses="text-nowrap"
          wrapperClasses="table-responsive"
          keyField='id_rec'
          data={data}
          columns={columns}
          selectRow={selectRow}
          pagination={paginationFactory({
            sizePerPage: 5,
            sizePerPageList: [5, 10, 25, 50]
          })}
        />
    {/* {listevente.map((val, key) => {
                 console.log(val.taux_tva);
                 return (<div key={key}>{val.id_rec}</div>);
               })} */}
  </Card>
{/* 
      <MaterialTable
               title="ventes"
               data={data}
               columns={columns}/> */}

              

)
                
    </CardBody>
  </Card>        {/* <InlineForm /> */}
      </Col>
    </Row>
  </Container>

 
);



  

}
 

export default Layouts;
