import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

const CheckBoxFields = ({ name, control, errors }) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormControlLabel
            control={<Checkbox {...field} required />}
            label="I Agree to MyApp Terms and Privacy Policy"
          />
        )}
      />
      {errors[name] ? <ErrorMessage message={errors[name].message} /> : null}
    </>
  );
};

export default CheckBoxFields;
