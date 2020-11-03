import React from "react";

import InputMask from "react-input-mask";
import { TextField } from "@material-ui/core";

function PassportInput(props) {
  return (
    <InputMask
      {...props}
      mask="aa 9999999"
      maskChar=""
      //   formatChars={{
      //     a: "[A-Ea-e]",
      //     a: "[A-Ea-e]",
      //     "9": "[0-9]",
      //     "9": "[0-9]",
      //     "9": "[0-9]",
      //     "9": "[0-9]",
      //     "9": "[0-9]",
      //     "9": "[0-9]",
      //     "9": "[0-9]",
      //   }}
    >
      {(inputProps) => (
        <TextField
          {...inputProps}
          autoComplete="off"
          variant="outlined"
          type="text"
          label="Паспорт"
          fullWidth
          size="small"
        />
      )}
    </InputMask>
  );
}

export default PassportInput;
