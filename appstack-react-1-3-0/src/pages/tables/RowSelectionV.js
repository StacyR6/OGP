import React from "react";
import { Card, CardBody, CardHeader, Container, Button, Col, Row, CustomInput, Input } from "reactstrap";
import Pie from "../charts/ApexCharts/PieV";
import { Link } from "react-router-dom";
import Select from "react-select";
import Axios from 'axios';
import { useState , useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

const RowSelectionTableV = () => {
  const selectRow = {
    mode: "checkbox",
    clickToSelect: true,
    bgColor: "#f8f9fa",
    headerStyle:{minWidth: '200px'}
  };
  const options = [
    { value: "modif", label: "Changer état" },
    { value: "suppr", label: "Supprimer" },
  ];

  const handleDelete = (rowId) => {
    console.log(rowId.id);
  };
  const handleClick = (event) => {
    const id = event.target.id;
    console.log(event.target);
  };
  // const handleRowAdd = (newData, resolve) => {
    //validation
//     let errorList = []
//     if(newData.first_name === undefined){
//       errorList.push("Please enter first name")
//     }
//     if(newData.last_name === undefined){
//       errorList.push("Please enter last name")
//     }
//     if(newData.email === undefined || validateEmail(newData.email) === false){
//       errorList.push("Please enter a valid email")
//     }
//     if(errorList.length < 1){ //no error
//       api.post("/users", newData)
//         .then(res => {
//           let dataToAdd = [...data];
//           dataToAdd.push(newData);
//           setData(dataToAdd);
//           resolve()
//           setErrorMessages([])
//           setIserror(false)
//        })
//        .catch(error => {
//           setErrorMessages(["Cannot add data. Server error!"])
//           setIserror(true)
//           resolve()
//         })
//     }else{
//       setErrorMessages(errorList)
//       setIserror(true)
//       resolve()
//     }
//   }

//   const [iserror, setIserror] = useState(false)
// const [errorMessages, setErrorMessages] = useState([])

//   const handleRowUpdate = (newData, oldData, resolve) => {
    //validation
  //   if(errorList.length < 1){
  //     api.patch("/users/"+newData.id, newData)
  //       .then(res => {
  //         const dataUpdate = [...data];
  //         const index = oldData.tableData.id;
  //         dataUpdate[index] = newData;
  //         setData([...dataUpdate]);
  //         resolve()
  //         setIserror(false)
  //         setErrorMessages([])
  //       })
  //       .catch(error => {
  //         setErrorMessages(["Update failed! Server error"])
  //         setIserror(true)
  //         resolve()
  //     })
  //   }else{
  //     setErrorMessages(errorList)
  //     setIserror(true)
  //     resolve()
  //   }
  // }
  const [id, setId]= useState(0);

  const columns =[
    {dataField: "raison_sociale", text:"raison sociale"},
    {dataField: "delai_facturation", text:"delai de facturation"},
    {dataField: "delai_paiement", text:"delai de paiement " },
    {dataField: "type_rec", text:"catégorie "},
    {dataField: "type_sousrec", text:"sous catégorie"},
    {dataField: "ht", text:"hors taxe"},
    {dataField: "taux_tva", text:"taux tva" },
    // {dataField: "ttc", text:"ttc"},
    {
      dataField: "remove",
    text: "",
    selectable : false,
      formatter: (cell, row, rowIndex) => {
        return (
          <Link to="/ventes/modifier-ventes">

          <Button
          color="primary"
          onClick={(data) =>{
            setId(data.target.value);
            console.log(id);
          }}
  
          >
            
            Modifier
          </Button>
          </Link>
        );
      }
    }
    // {
    //   dataField: 'actions',
    //   text: 'Actions',
    //   isDummyField: true,
    //   csvExport: false,
    //   formatter: this.actionsFormatter,
    // }
  ];
  
//   function format(cell, row){
//     return (
    
//     <Button color='primary' className="mr-1 mb-1">
//     Modifier
// </Button>
// <Button color='danger' className="mr-1 mb-1">
//     Supprimer
// </Button>)
  // }
  
  // actionsFormatter = (cell, row) => <ActionsFormatter id={row.id} />;
  
{/* <BootstrapTable data={ data }>
          <TableHeaderColumn dataField='raison_sociale'>Raison sociale</TableHeaderColumn>
          <TableHeaderColumn dataField='delai_facturation'>Délai de facturation</TableHeaderColumn>
          <TableHeaderColumn dataField='delai_paiement'>Délai de paiement</TableHeaderColumn>
          <TableHeaderColumn dataField='type_rec'>Catégorie</TableHeaderColumn>
          <TableHeaderColumn dataField='type_sousrec'>Sous catégorie</TableHeaderColumn>
          <TableHeaderColumn dataField='ht'>Hors taxe</TableHeaderColumn>
          <TableHeaderColumn dataField='taux_tva'>Taux TVA</TableHeaderColumn>
          <TableHeaderColumn dataField='ttc'>TTC</TableHeaderColumn>
          <TableHeaderColumn dataField='active' dataFormat={ activeFormatter }>Active</TableHeaderColumn>
      </BootstrapTable> */}
  const [data, setData] = useState([]);

useEffect(() => {
  Axios
    .get(
      "http://localhost:3001/listevente"
    )
    .then(response => {
      setData(response.data);
      console.log(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
}, []);

  // const [listevente, setListevente] = useState([]);

  // const getListevente = () => {
  //   Axios.get('http://localhost:3001/listevente').then((response) => {
  //         console.log(response);
  //         setListevente(response.data);
  //     });
  // }
  return (
    
    <div>
      {/* <div className="hello">
      <div className="filtre">
        Filtrer :
        <CustomInput
        type="select"
        id="exampleCustomSelect"
        name="customSelect"
        className="mb-3"
      >
        <option value="">Open this select menu</option>
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
      </CustomInput>
      </div>
      <div className="filtre">
        <div className="filtres">
        Filtrer :
        <CustomInput
        type="select"
        id="exampleCustomSelect"
        name="customSelect"
        className="mb-3"
      >
        <option value="">Open this select menu</option>
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
      </CustomInput>
      </div>
      <div className="filtres">
      <CustomInput
        type="select"
        id="exampleCustomSelect"
        name="customSelect"
        className="mb-3"
      >
        <option value="">Open this select menu</option>
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
      </CustomInput>
      </div>
      </div> */}
      {/* </div> */}
      <Row>
        <Col lg="0" className="ml-lg-5">
          Filtrer :
        </Col>
        <Col lg="3">
        <CustomInput
        type="select"
        id="exampleCustomSelect"
        name="customSelect"
        className="mb-3"
      >
        <option value="">Changer état</option>
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
      </CustomInput>
        </Col>
        
        <Col className="mr-lg-0">
        <Row>
        <Col lg="0" className="ml-lg-5">
          Filtrer :
        </Col>
        <Col lg="4">
        <Input type="date" name="input" placeholder="Input" />

        </Col>
        <Col lg="4">
        <Input type="date" name="input" placeholder="Input" />

        </Col>
        </Row>
        
        </Col>
        
      </Row>
      <Row>
          <Col lg="6">
            <Pie />
          </Col>
          <Col lg="6">
            <Pie />
          </Col>
          <Col lg="6">
            <Pie />
          </Col>
          

    </Row>
    
    <Card>
      <CardHeader>
        {/* <CardTitle tag="h5">Ventes</CardTitle>
        {/* <h6 className="card-subtitle text-muted">
          Row selection by react-bootstrap-table2
        </h6> */}
        <Row>
          <Col lg="3">
          <Select
                  className="react-select-container"
                  classNamePrefix="react-select"
                  placeholder="Changer état"
                  options={options}
                />
                <hr/>
          <Button color='primary' className="mr-1 mb-1">
              Modifier
          </Button>
          <Button color='danger' className="mr-1 mb-1">
              Supprimer
          </Button>
          </Col>
        </Row>
        
      </CardHeader>
      <CardBody>
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

          onRowClick={(event, rowData) => console.log(rowData.tableData.id)}
    //       // cellEdit={ cellEditFactory({ mode: 'click' }) }
    //       editable={{
    //         onRowUpdate: (newData, oldData) =>
    //           new Promise((resolve) => {
    //             handleRowUpdate(newData, oldData, resolve);
    //       }),
    //       onRowAdd: (newData) =>
    // new Promise((resolve) => {
    //   handleRowAdd(newData, resolve)
    // })
          // onRowDelete: (oldData) =>
          //   new Promise((resolve) => {
          //     handleRowDelete(oldData, resolve)
          //   }),
          // }}
        />
        <Button color="primary"
        // onClick={getListevente}
        className="a-droite mt-2">Valider</Button>
 
        {/* {listevente.map((val, key) => {
          return <div> {val.raison_sociale}
          {val.delai_facturation}
          {val.delai_paiement}
          {val.ht}
          {val.taux_tva}
          {val.ttc}
          {val.type_rec}
          {val.type_sousrec}
          </div>
        })} */}

          {/* <Link to="/ventes/ajout-ventes">
        <Button
            color="secondary"
            className="btn-pill mr-2 mb-2"
        >+</Button>
        </Link> */}
        
      </CardBody>
    </Card>
    </div>
  );
};

const Tables = () => (
  <Container fluid className="p-0">
    <h1 className="h3 mb-3">Ventes</h1>

    <RowSelectionTableV />
  </Container>
);

export default Tables;
