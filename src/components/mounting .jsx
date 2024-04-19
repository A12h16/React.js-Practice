import { useEffect } from "react";

const Mounting = () => {
  useEffect(() => {
    console.log("Component Mounted");
  }, []);
  return <div>Mounting</div>;
};

export default Mounting;
