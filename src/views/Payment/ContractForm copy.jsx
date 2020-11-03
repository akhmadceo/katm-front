import React from "react";
import fetch from "cross-fetch";
import * as Yup from "yup";
import { TextField, Button, MenuItem } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  PostAddOutlined,
  ClearRounded,
  LaunchOutlined,
} from "@material-ui/icons";
import { Formik, Form, Field } from "formik";

import { ContractDateFrom, ContractDateTo } from "../../components";

const contractRequestSchema = Yup.object({
  contractId: Yup.string().min(10, "Too Short!").required("Required"),
  objectCredit: Yup.string().min(14, "Too Short!").required("Required"),
  contractAmount: Yup.number().required("Required"),
  contractDateFrom: Yup.number().required("Required"),
});

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

const contractIDs = ["10001", "10002", "10003", "10004", "10005", "10006"];

const objectCredit = [
  {
    value: "USD",
    label: "USD",
  },
  {
    value: "UZS",
    label: "UZS",
  },
];

function ContractForm() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  const submit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = await fetch(
        "https://country.register.gov.uk/records.json?page-size=5000"
      );
      await sleep(1e3); // For demo purposes.
      const countries = await response.json();

      if (active) {
        setOptions(Object.keys(countries).map((key) => countries[key].item[0]));
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Formik
      initialValues={{
        contractId: "",
        contractDateFrom: new Date(),
        contractDateTo: new Date().setFullYear(new Date().getFullYear() + 1),
        objectCredit: "",
        contractAmount: "",
        currency: "",
      }}
      //validationSchema={contractRequestSchema}
      onSubmit={submit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleReset,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue,
      }) => (
        <Form onSubmit={handleSubmit}>
          <div className="formTitle">
            <strong>Заявка:</strong> <span>С 10001</span>
            {/* <div>{`value: ${value !== null ? `'${value}'` : "null"}`}</div>
            <div>{`inputValue: '${inputValue}'`}</div> */}
          </div>
          <div>
            <Autocomplete
              open={open}
              onOpen={() => {
                setOpen(true);
              }}
              onClose={() => {
                setOpen(false);
              }}
              onChange={(e, value) => setFieldValue("contractId", value)}
              getOptionSelected={(option, value) => option.name === value.name}
              getOptionLabel={(option) => option.name}
              options={options}
              loading={loading}
              renderInput={(params) => (
                <Field
                  {...params}
                  as={TextField}
                  name="contractId"
                  label="Договор"
                  variant="outlined"
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <React.Fragment>
                        {loading ? (
                          <CircularProgress color="inherit" size={20} />
                        ) : null}
                        {params.InputProps.endAdornment}
                      </React.Fragment>
                    ),
                  }}
                />
              )}
            />
          </div>
          <div>
            <ContractDateFrom setFieldValue={setFieldValue} />
          </div>
          <div>
            <ContractDateTo setFieldValue={setFieldValue} />
          </div>
          <div className="fullWidth">
            <Field
              as={TextField}
              name="objectCredit"
              select
              label="Объект кредитования"
              size="small"
              fullWidth
              value={values.objectCredit}
              variant="outlined"
            >
              {objectCredit.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Field>
          </div>
          <div>
            <Field
              as={TextField}
              name="contractAmount"
              value={values.contractAmount}
              variant="outlined"
              label="Сумма"
              size="small"
              fullWidth
            />
          </div>
          <div>
            <Field
              as={TextField}
              name="currency"
              select
              label="Валюта"
              size="small"
              fullWidth
              value={values.currency}
              variant="outlined"
            >
              {objectCredit.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Field>
          </div>
          <div className="formButtons">
            <Button
              type="submit"
              disabled={isSubmitting}
              variant="contained"
              color="primary"
              size="small"
              startIcon={<PostAddOutlined />}
            >
              Оформить
            </Button>
            <Button
              className="warning"
              variant="contained"
              color="primary"
              size="small"
              startIcon={<LaunchOutlined />}
            >
              К заявке
            </Button>
            <Button
              className="danger right"
              variant="contained"
              color="primary"
              size="small"
              startIcon={<ClearRounded />}
            >
              Отмена
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default ContractForm;
