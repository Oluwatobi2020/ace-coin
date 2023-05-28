import React from "react";
import { Box, Grid } from "@mui/material";
import CardComponent from "../CardComponent";

const Checkout = () => {
  return (
    <Box className="homepage">
      <Grid
        container
        spacing={1}
        sx={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <CardComponent />
      </Grid>
    </Box>
  );
};

export default Checkout;
