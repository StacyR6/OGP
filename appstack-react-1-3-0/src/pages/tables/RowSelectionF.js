import React from "react";
import { Card, CardBody, CardHeader, CardTitle, Container, Button, Col, Row, CustomInput, Input } from "reactstrap";
import Pie from "../charts/ApexCharts/PieV";
import { Link } from "react-router-dom";


import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

import { tableData, tableColumns } from "./data.js";

const RowSelectionTableF = () => {
  const selectRow = {
    mode: "checkbox",
    clickToSelect: true,
    bgColor: "#f8f9fa"
  };

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
      </div>
      </div> */}
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
        <option value="">Catégorie</option>
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
    </Row>

    <Card>
      <CardHeader>
        <CardTitle tag="h5">Fournisseurs</CardTitle>
        <h6 className="card-subtitle text-muted">
          Row selection by react-bootstrap-table2
        </h6>
      </CardHeader>
      <CardBody>
        <BootstrapTable
          bootstrap4
          bordered={false}
          keyField="name"
          data={tableData}
          columns={tableColumns}
          selectRow={selectRow}
          pagination={paginationFactory({
            sizePerPage: 5,
            sizePerPageList: [5, 10, 25, 50]
          })}
        />
          <Link to="/fournisseurs/ajout-fournisseurs">
        <Button
            color="secondary"
            className="btn-pill mr-2 mb-2 "
        >+</Button>
        </Link>
        
      </CardBody>
    </Card>
    </div>
  );
};

const Tables = () => (
  <Container fluid className="p-0">
    <h1 className="h3 mb-3">Fournisseurs</h1>

    <RowSelectionTableF />
  </Container>
);

export default Tables;
