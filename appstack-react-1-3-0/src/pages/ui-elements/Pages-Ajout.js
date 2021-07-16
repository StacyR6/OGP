import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  Row
} from "reactstrap";

const GridText = ({ children }) => (
  <Card className="bg-light py-2 py-md-3 text-center border">
    <CardBody>{children}</CardBody>
  </Card>
);

const Grid = () => (
  <Container fluid className="p-0">
    <h1 className="h3 mb-3">Page d'ajouts</h1>

    <Card>
      <CardHeader>
        <CardTitle tag="h5">Selectionnez une catégorie</CardTitle>
        {/* <h6 className="card-subtitle text-muted">
          Powerful mobile-first flexbox grid
        </h6> */}
      </CardHeader>
      <CardBody>
      <Link to="/ventes/ajout-ventes" style={{ textDecoration: 'none' }}>
        <Row>
          <Col md="12">
            <GridText>Nouvelle vente</GridText>
          </Col>
        </Row>
        </Link>
        <Link to="/depenses/ajout-depenses" style={{ textDecoration: 'none' }}>
        <Row>
          <Col md="12">
            <GridText>Nouvelle dépense</GridText>
          </Col>
        </Row>
        </Link>
        <Link to="/clients/ajout-clients" style={{ textDecoration: 'none' }}>
        <Row>
          <Col md="12">
            <GridText>Nouveau client</GridText>
          </Col>
        </Row>
        </Link>
        <Link to="/fournisseurs/ajout-fournisseurs" style={{ textDecoration: 'none' }}>
        <Row>
          <Col md="12">
            <GridText>Nouveau fournisseur</GridText>
          </Col>
        </Row>
        </Link>

      </CardBody>
    </Card>
  </Container>
);

export default Grid;
