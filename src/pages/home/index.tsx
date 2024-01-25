import React, { useEffect } from "react";
import { Button, Container } from "@mui/material";
import { HeaderComponent } from "../../components";
import { characters } from "../../api/characters";

export const HomePage: React.FC<{}> = () => {
  useEffect(() => {
    characters
      .getById({ id: 1 })
      .then((r) => {
        console.log(r.data);
      })
      .catch((error) => console.error(error));
  }, []);

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
