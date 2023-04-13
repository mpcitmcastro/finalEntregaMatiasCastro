const ButtonJSX = ({ text, handleclick }) => {
  //const ButtonJSX = ({ text, link }) => {
  return <button onClick={() => handleclick(text)}>{text}</button>;
  //return <button onClick={() => link(link)}> {text} </button>;
};

export default ButtonJSX;
