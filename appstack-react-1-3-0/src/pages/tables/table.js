import React, {Component} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import {
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

class SignUp extends Component{


    state={
      prenom : "",
      nom : "",
      poste : "",
      email : "",
      mdp : "",
    };
    handleAddPrenom= async e=>{
      await this.setState({
        prenom : e.target.value
      })
    }

    handleAddNom= async e=>{
      await this.setState({
        nom : e.target.value
      })
    }

    handleAddPoste= async e=>{
      await this.setState({
        poste : e.target.value
      })
    }

    handleAddEmail= async e=>{
      await this.setState({
        email : e.target.value
      })
    }

    handleAddMdp= async e=>{
      await this.setState({
        mdp : e.target.value
      })
    }
  
  
  
    handleSubmit= e =>{
      console.log(this.state.prenom);
      console.log(this.state.nom);
      console.log(this.state.poste);
      console.log(this.state.email);
      console.log(this.state.mdp);
      let formData = new FormData();
      formData.append("prenom",this.state.prenom);
      formData.append("nom",this.state.nom);
      formData.append("poste",this.state.poste);
      formData.append("email",this.state.email);
      formData.append("mdp",this.state.mdp);
      const url="http://localhost:80/react-backend/";
      axios.post(url, formData)
      .then(res=>console.log(res.data))
      .catch(err=> console.log(err));
    };
    render(){
      return(
<React.Fragment>
      <div className="text-center mt-4">
        <h1 className="h2">Créez votre compte</h1>
        <p className="lead">
          Start creating the best possible user experience for you customers.
        </p>
      </div>
  
      <Card>
        <CardBody>
          <div className="m-sm-4">
            <Form>
              <FormGroup>
                <Label>Prénom</Label>
                <Input
                onChange={this.handleAddPrenom}
                  bsSize="lg"
                  type="text"
                  name="firstname"
                  placeholder="Entrez votre prénom"
                />
              </FormGroup>
              <FormGroup>
                <Label>Nom</Label>
                <Input
                  onChange={this.handleAddNom}
                  bsSize="lg"
                  type="text"
                  name="name"
                  placeholder="Entrez votre nom"
                />
              </FormGroup>
              <FormGroup>
                <Label>Poste</Label>
                <Input
                onChange={this.handleAddPoste}
                  bsSize="lg"
                  type="text"
                  name="status"
                  placeholder="Entrez votre poste"
                />
              </FormGroup>
              <FormGroup>
                <Label>Email</Label>
                <Input
                onChange={this.handleAddEmail}
                  bsSize="lg"
                  type="email"
                  name="email"
                  placeholder="Entrez votre email"
                />
              </FormGroup>
              <FormGroup>
                <Label>Mot de passe</Label>
                <Input
                onChange={this.handleAddMdp}               
                  bsSize="lg"
                  type="password"
                  name="password"
                  placeholder="Entrez votre mot de passe"
                />
              </FormGroup>
              <div className="text-center mt-3">
                <Link to="/dashboard/default">
                  <Button 
                  onClick={this.handleSubmit}
                  color="primary" size="lg">
                    Créer un compte
                  </Button>
                </Link>
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>


      );
    };
  };






export default SignUp;
