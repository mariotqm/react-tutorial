// every form in html has an action, and the data knows where to go based in that action
// UNCONTROLLED COMPONENTS

import { useRef } from "react";

const App = () => {
  const submit = () => {
    console.log(ref.current.value);
    console.log(file.current.files[0]);

    const myForm = new FormData();
    myForm.append("file", file.current.files[0]);
    myForm.append("name", ref.current.value);

    console.log(myForm);
    fetch("/formRoute", { method: "POST", body: myForm });
  };

  const ref = useRef();
  const file = useRef();

  return (
    <div>
      <div>
        <span>Name</span>
        <input type="text" name="field" ref={ref} />
        <input type="file" name="field" ref={file} />
      </div>
      <input type="submit" value="send" onClick={submit} />
    </div>
  );
};

export default App;
