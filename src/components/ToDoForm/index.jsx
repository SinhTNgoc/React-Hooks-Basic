import React, { useState } from "react";
import PropTypes from "prop-types";

//Check PropTypes
ToDoForm.propTypes = {
  onSubmit: PropTypes.func,
};

//Default props value
ToDoForm.defaultProps = {
  onSubmit: null,
};

function ToDoForm(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");

  function handleValueChange(e) {
    setValue(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!onSubmit) return;
    const formValue = {
      title: value,
    };
    onSubmit(formValue);
    setValue("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleValueChange} />
      <br />
      <br />
      <button type="submit">Luu Lai</button>
    </form>
  );
}

export default ToDoForm;
