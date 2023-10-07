import Input from "./Input";
import Button from "./Button";
import useForm from "../hooks/useForm";

const UserForm = ({ submit }) => {
  const [formValues, handleChange, reset] = useForm({
    name: "",
    surname: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(formValues);
    reset();
  };

  console.log("rendering UserForm");

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Name"
        name="name"
        placeholder="José"
        value={formValues.name}
        onChange={handleChange}
      />
      <Input
        label="Surname"
        name="surname"
        placeholder="Saramago"
        value={formValues.surname}
        onChange={handleChange}
      />
      <Input
        label="Email"
        name="email"
        placeholder="example@you.com"
        value={formValues.email}
        onChange={handleChange}
      />
      <Button>Send</Button>
    </form>
  );
};

export default UserForm;
