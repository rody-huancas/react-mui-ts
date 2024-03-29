import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useNotification } from "../../context/notification.context";
import { LoginValidate } from "../../utils/validateForm";

type LoginType = {
  username: string;
  password: string;
};

export const LoginPage: React.FC<{}> = () => {
  const { getSuccess, getError } = useNotification();

  const [loginData, setLoginData] = useState<LoginType>({
    username: "",
    password: "",
  });

  const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    LoginValidate.validate(loginData)
      .then(() => {
        getSuccess(JSON.stringify(loginData));
      })
      .catch((error) => {
        getError(error.message);
      });
  };

  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
            <Typography variant="h4" sx={{ mt: 1, mb: 1 }}>
              Iniciar sesión
            </Typography>
            <Box component={"form"} onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                name="username"
                type="text"
                fullWidth
                label="Email"
                onChange={dataLogin}
                sx={{ mt: 1.5, mb: 1.5 }}
              />
              <TextField
                margin="normal"
                name="password"
                type="password"
                fullWidth
                label="Password"
                onChange={dataLogin}
                sx={{ mt: 1.5, mb: 1.5 }}
              />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ mt: 1.5, mb: 1.5 }}
              >
                Iniciar sesión
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
