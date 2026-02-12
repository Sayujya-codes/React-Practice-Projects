const Morning = () => <h1>Good Morning!</h1>;
const Afternoon = () => <h1>Good Afternoon!</h1>;

const GreetingCR = (props) => {
  return props.timeofDay === "morning" ? <Morning /> : <Afternoon />;
};

export default GreetingCR;
