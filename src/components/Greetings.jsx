const Greetings = () => {
  const nameHere = "Sayujya";
  const date = new Date();
  return (
    <div>
      <h1>{nameHere}</h1>
      <p>{date.getFullYear()}</p>
    </div>
  );
};

export default Greetings;
