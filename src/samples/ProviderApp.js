import React, { useContext } from "react";
import ReactDOM from "react-dom";

// Create a Context
const DemoContext = React.createContext();
// It returns an object with 2 values: { Provider, Consumer }

function ProviderApp() {
  // Use the Provider to make a value available to all
  // children and grandchildren
  return (
    <DemoContext.Provider value={"Demo Value"}>
      <div>
        <ConsumerAppLevel1 />
      </div>
    </DemoContext.Provider>
  );
}

function ConsumerAppLevel1() {
  return <ConsumerAppLevel2 />;
}

function ConsumerAppLevel2() {
  // Use the Consumer to grab the value from context
  // Notice this component didn't get any props!

  const demoConsumerValue = useContext(DemoContext);

  return (
    <div>The context value is {demoConsumerValue}.</div>
  );
}

/*
    const rootElement = document.getElementById("root");
    ReactDOM.render(<ProviderApp />, rootElement);
*/

export default ProviderApp;
