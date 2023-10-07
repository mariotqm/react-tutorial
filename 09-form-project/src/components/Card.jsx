const Card = ({ children }) => {
  const cardStyle = {
    margin: "0 auto",
    padding: "20px",
    boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)",
  };

  return <div style={cardStyle}>{children}</div>;
};

export default Card;
