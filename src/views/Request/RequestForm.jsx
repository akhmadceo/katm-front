import React from "react";
import * as Yup from "yup";
import { TextField, Button, MenuItem } from "@material-ui/core";
import { PostAddOutlined, ClearRounded } from "@material-ui/icons";
import { Formik, Form, Field } from "formik";

import {
  PassportInput,
  PinflInput,
  PhoneInput,
  RequestDatePicker,
  OfferDatePicker,
} from "../../components";

const cities = [
  {
    label: "Ташкент",
    value: 10,
    districts: [
      {
        label: "Сергелийский район",
        value: 10,
      },
      {
        label: "Мирзо-Улугбекский район",
        value: 20,
      },
      {
        label: "Мирабадский район",
        value: 30,
      },
    ],
  },
  {
    label: "Самарканд",
    value: 20,
  },
  {
    label: "Бухара",
    value: 30,
  },
];

const SignupSchema = Yup.object({
  passport: Yup.string().min(10, "Too Short!").required("Required"),
  pinfl: Yup.string().min(14, "Too Short!").required("Required"),
  city: Yup.string().required("Required"),
  district: Yup.string().required("Required"),
  requestId: Yup.number().required("Required"),
  offerId: Yup.number().required("Required"),
});

function RequestForm() {
  const submit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <Formik
      initialValues={{
        passport: "",
        pinfl: "",
        city: "",
        district: "",
        phone: "",
        phone2: "",
        address: "",
        requestId: "",
        requestDate: new Date(),
        offerId: "",
        offerDate: new Date(),
      }}
      validationSchema={SignupSchema}
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
          <div>
            <Field
              name="passport"
              as={PassportInput}
              value={values.passport.toUpperCase()}
              error={errors.passport && touched.passport && errors.passport}
              helperText={
                errors.passport && touched.passport && errors.passport
              }
            />
          </div>
          <div>
            <Field
              name="pinfl"
              as={PinflInput}
              error={errors.pinfl && touched.pinfl && errors.pinfl}
              helperText={errors.pinfl && touched.pinfl && errors.pinfl}
            />
          </div>
          <div>
            <Field
              name="city"
              as={TextField}
              select
              label="Регион"
              variant="outlined"
              size="small"
              autoComplete="off"
              fullWidth
              error={errors.city && touched.city && errors.city}
              helperText={errors.city && touched.city && errors.city}
              id="demo-simple-select-outlined"
            >
              <MenuItem value="" className="nonSelect">
                <em>Выберите регион</em>
              </MenuItem>
              {cities &&
                cities.map(({ label, value }, index) => (
                  <MenuItem key={value} value={value}>
                    {label}
                  </MenuItem>
                ))}
            </Field>
          </div>

          <div>
            <Field
              name="district"
              as={TextField}
              select
              label="Район"
              variant="outlined"
              size="small"
              autoComplete="off"
              fullWidth
              error={errors.district && touched.district && errors.district}
              helperText={
                errors.district && touched.district && errors.district
              }
              id="demo-simple-select-outlined"
            >
              <MenuItem value="" className="nonSelect">
                <em>Выберите район</em>
              </MenuItem>
              {values.city &&
                cities.find((c) => c.value === values.city).districts &&
                cities
                  .find((c) => c.value === values.city)
                  .districts.map(({ label, value }) => (
                    <MenuItem key={value} value={value}>
                      {label}
                    </MenuItem>
                  ))}
            </Field>
          </div>

          <div>
            <Field
              as={PhoneInput}
              name="phone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
              autoComplete={false}
              fullWidth
              error={errors.phone && touched.phone && errors.phone}
              helperText={errors.phone && touched.phone && errors.phone}
            />
          </div>

          <div>
            <Field
              as={PhoneInput}
              name="phone2"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone2}
              fullWidth
              error={errors.phone2 && touched.phone2 && errors.phone2}
              helperText={errors.phone2 && touched.phone2 && errors.phone2}
            />
          </div>

          <div className="fullWidth">
            <Field
              as={TextField}
              label="Адрес"
              name="address"
              variant="outlined"
              type="text"
              size="small"
              fullWidth
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address}
              error={errors.address && touched.address && errors.address}
              helperText={errors.address && touched.address && errors.address}
            />
          </div>

          <div className="inputBottomBlock">
            <div>
              <div className="title">Заявка</div>
              <div>
                <Field
                  as={TextField}
                  label="Номер"
                  name="requestId"
                  variant="outlined"
                  type="text"
                  size="small"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.requestId}
                  error={
                    errors.requestId && touched.requestId && errors.requestId
                  }
                  helperText={
                    errors.requestId && touched.requestId && errors.requestId
                  }
                />
              </div>
              <RequestDatePicker setFieldValue={setFieldValue} />
            </div>

            <div>
              <div className="title">Оферта</div>
              <div>
                <Field
                  as={TextField}
                  label="Номер"
                  name="offerId"
                  variant="outlined"
                  type="text"
                  size="small"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.offerId}
                  error={errors.offerId && touched.offerId && errors.offerId}
                  helperText={
                    errors.offerId && touched.offerId && errors.offerId
                  }
                />
              </div>
              <OfferDatePicker setFieldValue={setFieldValue} />
            </div>
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

export default RequestForm;
