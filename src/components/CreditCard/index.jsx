import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import RightPart from "../../assets/curved-section.png";
import Wifi_logo from "../../assets/wifi.svg";
import Chip from "../../assets/card-chip.svg";
import SecondMasterCardLogo from "../../assets/mastercard.png";
import AppleLogo from "../../assets/apple-logo.svg";
import Receipt from "../../assets/receipt.svg";

const CreditCard = () => {
  const companyLogo = (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <img
        src={AppleLogo}
        alt="company-logo"
        style={{ width: "30%", marginRight: "0.5rem" }}
      />
      <p style={{ fontSize: "1em", fontWeight: "600", color: "#1D2A53" }}>
        Apple
      </p>
    </div>
  );
  const orderNumber = 1266201;
  const product = "Macbook Air";
  const vat = "$100.00";

  const cardHolderName = "Jonathan Michael";
  const cardNumber = "**** 3456";
  const expiryDate = "09/22";

  const tableStyle1 = {
    fontSize: "0.6em",
    fontWeight: "700",
    color: "#A1A9BB",
    padding: "0.3rem",
    width: "100%",
  };

  const tableStyle2 = {
    fontSize: "0.6em",
    fontWeight: "700",
    color: "#1D2A53",
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
    padding: "0.3rem",
    textAlign: "right",
  };

  const textStyle1 = {
    fontSize: "0.6em",
    fontWeight: "600",
    color: "#A1A9BB",
  };
  const textStyle2 = {
    fontSize: "1.5em",
    fontWeight: "600",
    color: "#1D2A53",
  };
  const textStyle3 = {
    fontSize: "0.6em",
    fontWeight: "600",
    color: "#1D2A53",
  };
  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
        <img src={RightPart} alt="CardSection" style={{ width: "65%" }} />
      </Box>

      <Box
        sx={{
          width: "170px",
          height: "250px",
          borderRadius: "15px",
          background:
            "linear-gradient(179.42deg, #FFFFFF -16.67%, rgba(255, 255, 255, 0.476299) 67.86%, rgba(255, 255, 255, 0) 144.73%);",
        }}
        className="card-box overlay"
      >
        <Grid
          container
          spacing={2}
          sx={{
            width: "80%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            top: "50px",
            left: "30px",
          }}
        >
          <Grid sx={{ width: "50%" }}>
            <img
              src={Chip}
              alt="Card-chip"
              style={{ width: "40%" }}
              className="rotated"
            />
          </Grid>
          <Grid
            sx={{ width: "50%", display: "flex", justifyContent: "flex-end" }}
          >
            <img src={Wifi_logo} alt="Wifi" style={{ width: "40%" }} />
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          sx={{
            width: "80%",
            position: "relative",
            top: "140px",
            left: "30px",
          }}
        >
          <Grid sx={{ width: "100%", padding: "0 0 0.5rem 0" }}>
            <Typography
              sx={{ fontSize: "0.6em", fontWeight: "600", color: "#1D2A53" }}
            >
              {cardHolderName}
            </Typography>
          </Grid>
          <Grid sx={{ width: "100%" }}>
            <Typography
              sx={{ fontSize: "0.9em", fontWeight: "800", color: "#1D2A53" }}
            >
              {cardNumber}
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          sx={{
            width: "80%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            top: "180px",
            left: "30px",
          }}
        >
          <Grid sx={{ width: "50%" }}>
            <Typography
              sx={{ fontSize: "0.8em", fontWeight: "600", color: "#1D2A53" }}
            >
              {expiryDate}
            </Typography>
          </Grid>
          <Grid
            sx={{ width: "50%", display: "flex", justifyContent: "flex-end" }}
          >
            <img
              src={SecondMasterCardLogo}
              alt="Wifi"
              style={{ width: "40%" }}
            />
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            top: "240px",
            left: "15px",
          }}
        >
          <Grid sx={{ width: "100%" }}>
            <table style={{ width: "100%" }}>
              <tr style={{ padding: "0 0 1rem 0" }}>
                <td style={tableStyle1}>Company</td>
                <td style={tableStyle2}>{companyLogo}</td>
              </tr>
              <tr style={{ padding: "1rem 0 1rem 0" }}>
                <td style={tableStyle1}>Order Number</td>
                <td style={tableStyle2}>{orderNumber}</td>
              </tr>
              <tr style={{ padding: "0 0 1rem 0" }}>
                <td style={tableStyle1}>Product</td>
                <td style={tableStyle2}>{product}</td>
              </tr>
              <tr style={{ padding: "0 0 1rem 0" }}>
                <td style={tableStyle1}>VAT(20%)</td>
                <td style={tableStyle2}>{vat}</td>
              </tr>
            </table>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            top: "330px",
            left: "15px",
          }}
        >
          <Grid sx={{ width: "70%" }}>
            <Typography sx={textStyle1}>You have to pay</Typography>
            <Typography sx={textStyle2}>
              549<span style={textStyle3}>.99</span>{" "}
              <span style={textStyle1}>USD</span>
            </Typography>
          </Grid>
          <Grid sx={{ width: "30%", display:"flex", justifyContent:"flex-end" }}>
            <img src={Receipt} alt="receipt" style={{ width: "50%" }} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CreditCard;
