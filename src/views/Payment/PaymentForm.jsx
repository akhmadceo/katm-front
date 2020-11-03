import React from "react";
import * as Yup from "yup";
import { TextField, Button, MenuItem } from "@material-ui/core";
import moment from "moment";
import Switch from "@material-ui/core/Switch";

import {
  PostAddOutlined,
  ClearRounded,
  LaunchOutlined,
} from "@material-ui/icons";

import { Formik, Form, Field } from "formik";

import { ContractDateFrom, ContractDateTo } from "../../components";

const contractRequestSchema = Yup.object({
  contractId: Yup.string().required("Required"),
  objectCredit: Yup.number().required("Required"),
  contractAmount: Yup.number().required("Required"),
  contractDateFrom: Yup.date().required("Required"),
});

const objectCredit = [
  {
    value: 1,
    label: "Кредиты, выданные населению на приобретение бытовой техники",
  },
];
const currencyType = [
  {
    value: "USD",
    label: "USD",
  },
  {
    value: "UZS",
    label: "UZS",
  },
];

function PaymentForm({ setDiff, setStartDate, setTotalSum }) {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChangeS = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const submit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };


  return (
    <Formik
      initialValues={{
        contractId: "",
        contractDateFrom: moment(),
        contractDateTo: moment().add(1, "years"),
        objectCredit: 1,
        contractAmount: "",
        currency: "",
      }}
      validationSchema={contractRequestSchema}
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
            <div className="formTitle">
              <strong>Договор:</strong> <span>Д 10001</span>
            </div>
          </div>
          <div>
            <Field
              as={TextField}
              name="contractId"
              value={values.contractId}
              variant="outlined"
              label="Сумма"
              size="small"
              fullWidth
            />
          </div>
          <div>
            <Switch
              checked={state.checkedA}
              onChange={handleChangeS}
              name="checkedA"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          </div>

          <div>
            <Field
              as={TextField}
              name="contractAmount"
              // value={values.contractAmount}
              variant="outlined"
              label="Сальдо на начало"
              size="small"
              fullWidth
            />
          </div>
          <div>
            <Field
              as={TextField}
              name="currency"
              label="Сальдо на конец"
              size="small"
              fullWidth
              value={values.currency}
              variant="outlined"
            >
              {currencyType.map((option) => (
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

export default PaymentForm;
