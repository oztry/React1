import React from "react";
import Styles from "./WithContainer.module.css";

const WithContainer = WrappedComponent => {
  return props => (
    <div className={Styles.container}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default WithContainer;
