import React, {Component, useState} from "react";
import { Link} from "react-router-dom";
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

// class SignUp extends Component{

    // render(){
      function SignUp() {
        const[prenomReg, setPrenomReg]= useState('');
        const[nomReg, setNomReg]= useState('');
        const[emailReg, setEmailReg]= useState('');
        const[posteReg, setPosteReg]= useState(0);
        const[mdpReg, setMdpReg]= useState('');

        const register = () => {
          axios.post('http://localhost:3001/register',
          {prenom: prenomReg,
          nom: nomReg,
          email: emailReg,
          poste: posteReg,
          mdp: mdpReg
        }).then((response) => {
          console.log(response);
        });
        };
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
                          onChange={(e) => {setPrenomReg(e.target.value);}}
                            bsSize="lg"
                            type="text"
                            name="firstname"
                            placeholder="Entrez votre prénom"
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label>Nom</Label>
                          <Input
                            onChange={(e) => {setNomReg(e.target.value);}}
                            bsSize="lg"
                            type="text"
                            name="name"
                            placeholder="Entrez votre nom"
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label>Poste</Label>
                          <Input
                          onChange={(e) => {setPosteReg(e.target.value);}}
                            bsSize="lg"
                            type="text"
                            name="status"
                            placeholder="Entrez votre poste"
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label>Email</Label>
                          <Input
                          onChange={(e) => {setEmailReg(e.target.value);}}
                            bsSize="lg"
                            type="email"
                            name="email"
                            placeholder="Entrez votre email"
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label>Mot de passe</Label>
                          <Input
                          onChange={(e) => {setMdpReg(e.target.value);}}               
                            bsSize="lg"
                            type="password"
                            name="password"
                            placeholder="Entrez votre mot de passe"
                          />
                        </FormGroup>
                        <div className="text-center mt-3">
                          {/* <Link to="/dashboard/default"> */}
                            <Button 
                            onClick={register}
                            color="primary" size="lg">
                              Créer un compte
                            </Button>
                          {/* </Link> */}
                        </div>
                      </Form>
                    </div>
                  </CardBody>
                </Card>
              </React.Fragment>
          
         ) };
  

      
    
  






export default SignUp;
