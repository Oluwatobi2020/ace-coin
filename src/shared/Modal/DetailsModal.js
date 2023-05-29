import React from "react";
import BaseModal from "./BaseModal";
import AppleLogo from "../../assets/apple-logo.svg";
import Receipt from "../../assets/receipt.svg";
import { useModal } from "../../components/hooks";

import { Box, Typography, Grid } from "@mui/material";

const DetailsModal = ({
  actionOnClose,
  title,
  message,
  open,
  onClose: onModalClose,
  nonGlobal,
  header,
  actionObject,
  ...props
}) => {
  const { hideModal } = useModal();
  const onClose = () => {
    actionOnClose && actionOnClose();
    nonGlobal ? onModalClose() : hideModal();
  };

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
    <BaseModal
      onClose={onClose}
      open={open}
      nonGlobal={nonGlobal}
      {...props}
      header={header}
    >
      <Box sx={{ width: "100%", padding: "3rem" }}>
        <Box sx={{ width: "100%", padding: "0 0 3rem 0" }}>
          <Grid
            container
            spacing={2}
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: "1em",
                color: "#1d2a53",
                textAlign: "center",
                fontWeight: "600",
              }}
            >
              Transaction Details
            </Typography>
          </Grid>
        </Box>
        <Box sx={{ width: "100%", padding: "0 0 3rem 0" }}>
          <Grid
            container
            spacing={2}
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid sx={{ width: "100%" }}>
              <table style={{ width: "100%" }}>
                <tbody>
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
                </tbody>
              </table>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            spacing={2}
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid sx={{ width: "70%" }}>
              <Typography sx={textStyle1}>You have to pay</Typography>
              <Typography sx={textStyle2}>
                549<span style={textStyle3}>.99</span>{" "}
                <span style={textStyle1}>USD</span>
              </Typography>
            </Grid>
            <Grid
              sx={{ width: "30%", display: "flex", justifyContent: "flex-end" }}
            >
              <img src={Receipt} alt="receipt" style={{ width: "30%" }} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </BaseModal>
  );
};

export default DetailsModal;
