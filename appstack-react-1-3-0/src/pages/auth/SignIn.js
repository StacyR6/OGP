import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  CustomInput
} from "reactstrap";

import avatar from "../../assets/img/avatars/avatar.jpg";

function SignIn() {

  const [email, setEmail] = useState('');
  const [mdp, setMdp] = useState('');

  const login = () => {
    axios.post('http://localhost:3001/login',
    {email: email,
      mdp:mdp,
  }).then((response) => {
    console.log(response);
  });};

  return(
    <React.Fragment>
    <div className="text-center mt-4">
      <h2>Bienvenue</h2>
      <p className="lead">Connectez vous</p>
    </div>

    <Card>
      <CardBody>
        <div className="m-sm-4">
          {/* <div className="text-center">
            <img
              src={avatar}
              alt="Chris Wood"
              className="img-fluid rounded-circle"
              width="132"
              height="132"
            />
          </div> */}
          <Form>
            <FormGroup>
              <Label>Email</Label>
              <Input
                onChange={(e) => {setEmail(e.target.value);}}
                bsSize="lg"
                type="email"
                name="email"
                placeholder="Entrez votre email"
              />
            </FormGroup>
            <FormGroup>
              <Label>Mot de passe</Label>
              <Input
                onChange={(e) => {setMdp(e.target.value);}}
                bsSize="lg"
                type="password"
                name="password"
                placeholder="Entrez votre mot de passe"
              />
              <small>
                <Link to="/auth/reset-password">Mot de passe oublié ?</Link>
              </small>
            </FormGroup>
            <div>
              <CustomInput
                type="checkbox"
                id="rememberMe"
                label="Se rappeler de moi la prochaine fois"
                defaultChecked
              />
            </div>
            <div className="text-center mt-3">
              <Link to="/dashboard/default">
                <Button 
                onClick={login}
                color="primary" size="lg">
                  Se connecter
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

export default SignIn;
