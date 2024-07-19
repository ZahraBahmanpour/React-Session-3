import { Field, Form, Formik } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import { ProductContext } from "../productContext";

export default function CreateNewProduct() {
  const { createNew } = useContext(ProductContext);
  return (
    <Formik
      initialValues={{ name: "", price: "" }}
      onSubmit={(values, { validate }) => {
        validate(values);
        createNew({ name: values.name, price: values.price });
      }}
      // validate={(values) => {
      //   const errors = {};
      //   if (values.name === "" || values.price === "") {
      //     errors.nameError = values.name === "" ? "Name Required" : "";
      //     errors.priceError = values.price === "" ? "Price Required" : "";
      //   }
      //   return errors;
      // }}
      validationSchema={Yup.object({
        name: Yup.string()
          .required("Name is Required------")
          .max(20, "Name should be less than 20 characters")
          .lowercase("should be lowercase")
          .strict(),
        price: Yup.string().matches(
          "/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}",
          "Password not correct"
        ),
      })}
      validateOnChange={false}
    >
      {({ errors }) => (
        <Form>
          <label>Name</label>
          <Field id="name" name="name" />
          <span style={{ color: "red" }}>{errors.name}</span>
          <br />
          <label>Price</label>
          <Field id="price" name="price" type="password" />
          <span style={{ color: "red" }}>{errors.price}</span>
          <br />
          <button type="submit">Create New</button>
        </Form>
      )}
    </Formik>
  );
}
