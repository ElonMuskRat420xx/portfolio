import React, { useEffect, useState } from "react";

export const Ps1 = () => {
  const [hostname, setHostname] = useState("");

  useEffect(() => {
    if (typeof window !== undefined) {
      setHostname(window.location.hostname);
    }
  }, []);

  return (
    <div>
      <span
        style={{
          color: "#FFFF",
        }}
      >
        guest
      </span>
      <span
        style={{
          color: "#FFFF",
        }}
      >
        @
      </span>
      <span
        style={{
          color: "#FFFF",
        }}
      >
        {hostname}
      </span>
      <span
        style={{
          color: "#FFFF",
        }}
      >
        :$ ~
      </span>
    </div>
  );
};

export default Ps1;
