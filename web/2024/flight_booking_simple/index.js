function MyApp() {
  return (
    <div id="container">
      <h1>Flight Booking</h1>
      <FlightTypesSelect></FlightTypesSelect>
    </div>
  );
}

function FlightTypesSelect() {
  const [flightType, setFlightType] = React.useState('one-way');

  const changeFlightType = (value) => {
    console.log(flightType, " changing to ", value);
    setFlightType(value);
  }

  return (
    <>
      <select onChange={(e) => changeFlightType(e.target.value)} value={flightType}>
        <option value={'one-way'}>One Way</option>
        <option value={'return'}>Return</option>
      </select>
    </>
  )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);
