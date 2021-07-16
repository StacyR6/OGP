const express = require('express')
const app= express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    port: 3308,
    database: 'react_php',
});

app.post('/create', (req, res) => {
    const nfact = req.body.nfact;
    const delaifact = req.body.delaifact;
    const delaipai = req.body.delaipai;
    const tva = req.body.tva;
    const ht = req.body.ht;
    const ttc = req.body.ttc;
    const cat = req.body.cat;
    const souscat = req.body.souscat;

    db.query("INSERT INTO recettes (raison_sociale, delai_facturation, delai_paiement, type_rec, type_sousrec, ht, taux_tva, ttc) VALUES (?,?,?,?,?,?,?,?)",
     [
         nfact, delaifact, delaipai, tva, ht, ttc, cat, souscat],
    (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("Values inserted");
        }
    });

});

app.get('/listevente', (req, res) => {
    db.query("SELECT * FROM recettes", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result);
        }
    });
});

app.get('/listeclients', (req, res) => {
    db.query("SELECT * FROM clients", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result);
        }
    });
});

app.put('/update', (req, res) => {
const id = req.body.id;
const raison_sociale= req.body.raison_sociale;
db.query("UPDATE SET recettes raison_sociale = ? WHERE id = ?", [raison_sociale, id],
(err, result) => {
    if (err) {
        console.log(err);
    } else {
        res.send(result);
    }
});
});


// app.delete();

app.post('/register', (req, res) => {
    //dans req.body.prenom; prenom doit etre egal au nom dans le front. en faisant ca on recup la valeur prenom du front pour la mettre dans la const prenom du back
    const prenom = req.body.prenom
    const nom = req.body.nom
    const poste = req.body.poste
    const email = req.body.email
    const mdp = req.body.mdp

    
    
    
    db.query('INSERT INTO profils (prenoms, noms, poste, email, mdp) VALUES (?,?,?,?,?)',
    [prenom, nom, poste, email, mdp], 
    (err, result) => {
        console.log(err);
    });
});

app.post('/login', (req, res) => {
    const email = req.body.email;
    const mdp = req.body.mdp;

    db.query(
        'SELECT * FROM profils WHERE email = ? AND mdp = ?',
        [email, mdp],
        (err, result) => {
            if(err){
               res.send({err: err}); 
            }

            if (result.length > 0) {
                res.send(result);
            } else {
                res.send({ message: "Email ou mot de passe incorrect"});
            } 
            }
        
    );
})

app.post('/coucou', (req, res) => {
    // const raison = req.body.raison;
    const raisonfrs = req.body.raisonfrs;
    const nsiret = req.body.nsiret;
    const adrfrs = req.body.adrfrs;
    const cpfrs = req.body.cpfrs;
    const villefrs = req.body.villefrs;
    const contactfrs = req.body.contactfrs;
    const telfrs = req.body.telfrs;
    const emailfrs = req.body.email;
    const contactcomptafrs = req.body.contactcomptafrs;
    const delaipaifrs = req.body.delaipaifrs;
    const tauxtvafrs = req.body.tauxtvafrs;

    // const cat2 = req.body.cat2;

    db.query("INSERT INTO fournisseurs (nom, siret, adresse, cp, ville, contact, tel, email, contactcompta, delaipaiement, tva) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
     [
        //  raison,
         raisonfrs, 
         nsiret, adrfrs, cpfrs, villefrs, contactfrs, telfrs, emailfrs,
        contactcomptafrs, delaipaifrs, tauxtvafrs],
    (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("Values inserted");
        }
    });

});

app.get('/listefrs', (req, res) => {
    db.query("SELECT * FROM fournisseurs", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result);
        }
    });
});
app.listen(3001, ()=>{
    console.log("yey, server running");
});