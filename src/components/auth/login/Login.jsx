import {
  Avatar,
  Button,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { MdLockOutline } from "react-icons/md";
import Checkbox from "@mui/material/Checkbox";
import React from "react";

import * as yup from 'yup'
import { userSchema } from "../../../Validations/UserValidation";

function Login() {
  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 380,
    margin: "20px auto",
  };
  const avatarStyle = {
    backgroundColor: "#1bbd7e",
  };

  const createUser = (event) => {
    event.preventDefault();

    let formData = {
      email: event.target[0].value,
      password: event.target[1].value,
    }
    console.log(formData);
  }

  return (
    <Grid>
      <Paper elevation={8} style={paperStyle} onClick={createUser}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <MdLockOutline />
          </Avatar>
          <h2>Войти</h2>
        </Grid>
        <TextField
          label="Email адрес"
          placeholder="Enter email"
          fullWidth
          required
        />
        <TextField
          label="Пароль"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
        />
        <Typography>
          <Link href="#">Забыли пароль</Link>
        </Typography>
        <FormControlLabel control={<Checkbox />} label="Запомнить" />
        <Button type="submit" color="primary" variant="contained" fullWidth>
          Отпарвить
        </Button>
        <Typography>
          <Link href="#">Регистрация</Link>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default Login;
