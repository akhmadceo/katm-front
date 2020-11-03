import React from "react";
import { TextField } from "@material-ui/core";
import InputMask from "react-input-mask";

function PinflInput(props) {
  return (
    <InputMask {...props} mask="99999999999999" maskChar="">
      {(inputProps) => (
        <TextField
          {...inputProps}
          label="ПИНФЛ"
          variant="outlined"
          type="text"
          autoComplete="off"
          size="small"
          fullWidth
        />
      )}
    </InputMask>
  );
}

export default PinflInput;
