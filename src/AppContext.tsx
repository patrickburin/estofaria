import React from "react";
import { useState } from "react";

const VisibilityContext = React.createContext({
  showCars: false,
  showSteeringWheels: false,
  showFeedbacks: false,
  setShowCars: (show: boolean) => {},
  setShowSteeringWheels: (show: boolean) => {},
  setShowFeedbacks: (show: boolean) => {},
});

const VisibilityProvider = ({ children }: any) => {
  const [showCars, setShowCars] = useState(true);
  const [showSteeringWheels, setShowSteeringWheels] = useState(true);
  const [showFeedbacks, setShowFeedbacks] = useState(true);

  const value = {
    showCars,
    showSteeringWheels,
    showFeedbacks,
    setShowCars,
    setShowSteeringWheels,
    setShowFeedbacks,
  };

  return (
    <VisibilityContext.Provider value={value}>
      {children}
    </VisibilityContext.Provider>
  );
};

export { VisibilityContext, VisibilityProvider };
