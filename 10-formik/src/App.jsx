import { useFormik } from "formik";

const App = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Required";
      }

      return errors;
    },
    onSubmit: (values) => console.log(values),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="Name">Name</label>
      <input
        type="text"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      {formik.errors.name ? <span>{formik.errors.name}</span> : null}
      <br />
      <label htmlFor="lastname">Lastname</label>
      <input
        type="text"
        name="lastname"
        onChange={formik.handleChange}
        value={formik.values.lastname}
      />
      <br />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default App;
