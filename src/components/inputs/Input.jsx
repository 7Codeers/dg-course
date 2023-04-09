import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Input = ({ errorMessage, ...otherProps }) => {
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    setShowError(true);
  }, [errorMessage]);

  return (
    <>
      <input
        className="form-input"
        onFocus={() => setShowError(false)}
        {...otherProps}
      />
      <div className="w-full h-[40px] text-right pr-5 pt-1">
        {showError ? (
          <span className="text-red-500 font-vazirmatnBold mb-5">
            {errorMessage}
          </span>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Input;
