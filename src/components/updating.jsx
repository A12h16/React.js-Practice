import { useEffect } from "react";

const Updating = () => {
  useEffect(() => {
    console.log("Component is mounted");
  }, [product]);
  return <div>Updating</div>;
};

export default Updating;
