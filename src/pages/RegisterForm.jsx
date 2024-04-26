import { Avatar, Box, Button, InputAdornment, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import React from "react";
import TextFields from "../components/form/TextFields";
import SelectFields from "../components/form/SelectFields";
import CheckBoxFields from "../components/form/CheckBoxFields";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { pawdRegExp, phoneRegExp } from "../utils";

//<Container maxWidth='xs'>
//   <RegisterForm />
// </Container>

// create schema validation

const schema = yup.object({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().required("Email is required").email(),
  mobile: yup
    .string()
    .required("Mobile Phone is required")
    .matches(phoneRegExp, "Phone number is not valid"),
  country: yup.string().required("Country is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      pawdRegExp,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passowrd must math"),
  privacy: yup.bool().oneOf([true], "Field must ber checked"),
});

const RegisterForm = () => {
  const {
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      country: "",
      mobile: "",
      password: "",
      confirmPassword: "",
      privacy: false,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: "4rem",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <HowToRegIcon />
      </Avatar>
      <Typography component="h1">Sign Up</Typography>
      <Box
        noValidate
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ width: "100%", mt: "2rem" }}
      >
        <TextFields
          errors={errors}
          control={control}
          name="fullName"
          label="Full name"
        />
        <TextFields
          errors={errors}
          control={control}
          name="email"
          label="Email"
        />
        <TextFields
          errors={errors}
          control={control}
          name="mobile"
          label="Mobile Phone"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">+91</InputAdornment>
            ),
            type: "number",
          }}
        />
        <SelectFields
          errors={errors}
          control={control}
          name="country"
          label="Country"
        />
        <TextFields
          errors={errors}
          control={control}
          name="password"
          label="Password"
        />
        <TextFields
          errors={errors}
          control={control}
          name="confirmPassword"
          label="Confirm Password"
        />
        <CheckBoxFields name="privacy" control={control} errors={errors} />
        <Button
          type="sumbit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default RegisterForm;
