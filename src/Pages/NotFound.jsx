import { Button } from "@mui/material";
import React from "react";

function NotFound() {
  return (
    <div className="not-found">
      <h1>404 - 😞</h1>
      <p>Lo sentimos, la página que está buscando no existe.</p>
      <Button
        onClick={() => window.history.back()}
        variant="contained"
        color="success"
      >
        Volver a la página anterior
      </Button>
    </div>
  );
}

export default NotFound;
