import { useAnonAadhaar } from "@anon-aadhaar/react";
import { LogInWithAnonAadhaar } from "@anon-aadhaar/react";
import { useEffect } from "react";

const AadharComponent = () => {
  const [AnonAadhaar] = useAnonAadhaar();
  useEffect(() => {
    console.log("Country Identity status: ", AnonAadhaar.status);
  }, [AnonAadhaar]);
  return (
    <>
      <div className="flex justify-center">
        <LogInWithAnonAadhaar nullifierSeed={1234} />
      </div>
    </>
  );
};

export default AadharComponent;
