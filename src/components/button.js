import React from "react";

class Button extends React.Component {
  render() {
    const { onClick, children, extraClass } = this.props;
    return (
      <button
        onClick={onClick}
        className={`px-4 py-2 sm:px-6 grid place-items-center sm:py-3 bg-secondary text-white sm:text-lg sm:w-24 md:w-32 rounded-md shadow ${extraClass}`}
      >
        <p>{children}</p>
      </button>
    );
  }
}

export default Button;
