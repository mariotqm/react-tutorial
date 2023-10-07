import { useState } from "react";

const App = () => {
  const [value, setValue] = useState({
    name: "",
    opinion: "",
    select: "",
    check: false,
    car: "tzuru tuneado",
  });

  const handleChange = ({ target }) => {
    setValue((state) => ({
      ...state,
      [target.name]: target.type === "checkbox" ? target.checked : target.value,
    }));
  };

  console.log(value);
  return (
    <div>
      {value.name.length < 5 ? <span>5 chars minimum</span> : null}
      <input
        type="text"
        name="name"
        value={value.name}
        onChange={handleChange}
      />
      <textarea
        onChange={handleChange}
        name="opinion"
        cols="30"
        rows="10"
        value={value.opinion}
      />
      <select value={value.select} name="select" onChange={handleChange}>
        <option value="">----Select----</option>
        <option value="mexico">Mexico</option>
        <option value="argentina">Argentina</option>
        <option value="bolivia">Bolivia</option>
        <option value="rusia">Rusia</option>
      </select>
      <input
        type="checkbox"
        name="check"
        onChange={handleChange}
        checked={value.check}
      />
      <div>
        <label>Elige tu coche</label>
        <input
          onChange={handleChange}
          type="radio"
          name="car"
          value="ferrari"
          checked={value.car === "ferrari"}
        />{" "}
        Ferrari
        <input
          onChange={handleChange}
          type="radio"
          name="car"
          value="tzuru tuneado"
          checked={value.car === "tzuru tuneado"}
        />{" "}
        Mercedes Benz
        <input
          onChange={handleChange}
          type="radio"
          name="car"
          value="porsche"
          checked={value.car === "porsche"}
        />{" "}
        Porsche
      </div>
    </div>
  );
};

export default App;
