import React from "react";
import * as Yup from "yup";
import { TextField, Button, MenuItem } from "@material-ui/core";
import moment from "moment";

import { PostAddOutlined, ClearRounded, LaunchOutlined } from "@material-ui/icons";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from 'react-redux'
import { setScheduleTotal } from '../../redux/actions/schedule' 

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

function ContractForm() {
  const dispatch = useDispatch();
  const { dateFrom, dateTo, total } = useSelector(({ scheduleCalc }) => scheduleCalc);
  const submit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  // React.useEffect(() => {
  //   let diff = dateTo.diff(dateFrom, "month", true);
  //   setDiff(diff);

  // }, [dates]);

  return (
    <Formik
      initialValues={{
        contractId: "",
        contractDateFrom: moment(),
        contractDateTo: moment().add(1, "years"),
        objectCredit: 1,
        contractAmount: "",
        currency: "UZS",
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
            <Field
              as={TextField}
              name="contractId"
              value={values.contractId}
              variant="outlined"
              label="Договор"
              size="small"
              fullWidth
            />
          </div>
          <div>
            <ContractDateFrom
              setFieldValue={setFieldValue}
              
           
            />
          </div>
          <div>
            <ContractDateTo
              setFieldValue={setFieldValue}
            
            />
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
              onChange={(e) => {
                setFieldValue("contractAmount", e.target.value);
                dispatch(setScheduleTotal(e.target.value))
              }}
              // value={values.contractAmount}
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
