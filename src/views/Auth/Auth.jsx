import React from "react";
import axios from 'axios';
import { Formik, Field, Form } from "formik";
import { Route, Switch, Redirect, Link } from "react-router-dom";

import {Button, Menu, MenuItem, } from "@material-ui/core/";

import { FormikField, FormikPassField } from "../../components";

import { langListAPI, authAPI } from '../../api'

import styles from "./auth.module.scss";

import {ArrowDropDown} from "@material-ui/icons";
import logo from "../../assets/img/Logo.png";
import langRu from "../../assets/img/ruFlag.png";

function Auth() {
  

  React.useEffect(() => {

  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.formHeader}>
          <img src={logo} width={96} />
          <div className={styles.headerLangs}>
           

            
          </div>
        </div>
        <h2 className={styles.formHeading}>Авторизация</h2>
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          onSubmit={async (values) => {
            //await new Promise((r) => setTimeout(r, 500));
            //alert(JSON.stringify(values, null, 2));

           let res = await authAPI.login(values.username, values.password)

           console.log(res)
          }}
        >
          <Form className={styles.formGroup}>
            <FormikField name="username" label="Логин" variant="outlined" style={{marginBottom: 20}} />
            <FormikPassField name="password" label="Пароль" style={{marginBottom: 36}} />
         <Button variant="contained" type="submit" color="primary">Войти</Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Auth;
