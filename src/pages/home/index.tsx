import React from "react";
import { Button, Container } from "@mui/material";
import { HeaderComponent } from "../../components";

export const HomePage: React.FC<{}> = () => {
  return (
    <Container maxWidth="xl">
      <HeaderComponent
        title="Hola mundo"
        description="Lorem ipsum dolor sit."
        element={
          <Button variant="contained" fullWidth>
            Ingresar
          </Button>
        }
      />
    </Container>
  );
};
