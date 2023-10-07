// every form in html has an action, and the data knows where to go based in that action
// UNCONTROLLED COMPONENTS

const MyForm = () => {
  const submit = (e) => {
    e.preventDefault();
    const myData = Array.from(new FormData(e.target));
    console.log(Object.fromEntries(myData));
  };

  return (
    <form onSubmit={submit}>
      <div>
        <span>Name</span>
        <input type="text" name="name" />
      </div>
      <input type="text" name="surname" />
      <input type="file" name="file" /> {/* files */}
      <input type="submit" value="Send" />
    </form>
  );
};

export default MyForm;
