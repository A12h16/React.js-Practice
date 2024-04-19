import { useEffect } from "react";

const Unmounting = () => {
  useEffect(() => {
    return () => {
      console.log("Component is unmounted");
    };
  });
  return <div>Unmounting</div>;
};

export default Unmounting;
