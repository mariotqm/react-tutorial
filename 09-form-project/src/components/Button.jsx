const buttonStyle = {
  fontFamily: "Arial, sans-serif",
  fontSize: "14px",
  padding: "10px 20px",
  margin: "5px",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "whitesmoke", // Blue color for a 90's vibe
  cursor: "pointer",
  border: "2px solid #000",
};

const Button = ({ children }) => {
  return <button style={buttonStyle}>{children}</button>;
};

export default Button;
