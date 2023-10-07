// get references of DOM itself
import { useRef } from "react";

const RefHook = () => {
  const ref = useRef();
  const inputRef = useRef();

  const click = () => {
    console.log(ref.current);
    ref.current.innerHTML = "Adiós";
  };

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={focus}>Focus</button>
      <p onClick={click} ref={ref}>
        Hola
      </p>
    </div>
  );
};

export default RefHook;
