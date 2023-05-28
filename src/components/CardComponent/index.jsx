import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import AceLogo from "../../assets/ace-logo.png";
import MyTimer from "../TimerComponent";
import { MdModeEditOutline } from "react-icons/md";
import CreditCard from "../CreditCard";
import { IoIosKeypad } from "react-icons/io";
import { BsFillPatchCheckFill } from "react-icons/bs";
import MasterC from "../../assets/mscard.png";

const CardComponent = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 1800);
  return (
    <Box
      sx={{ width: "80%", background: "#fff", padding: "5rem 5rem 1rem 5rem" }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: "65%", padding:"1rem 0 0 0" }}>
          <Grid
            container
            spacing={2}
            sx={{
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
              marginRight: "5rem",
            }}
          >
            <Grid>
              <img src={AceLogo} alt="AceCoin Logo" style={{ width: "60%" }} />
            </Grid>
            <Grid>
              <MyTimer expiryTimestamp={time} />
            </Grid>
          </Grid>

          <Grid
            container
            spacing={2}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "2rem 0 2rem 0",
            }}
          >
            <Grid item container sx={{ width: "50%" }}>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                sx={{ width: "100%", padding: "0 0 0.5rem 0" }}
              >
                {" "}
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "left",
                    fontSize: "0.8em",
                    color: "#1D2A53",
                    fontWeight: "650",
                  }}
                >
                  Card Number
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} sx={{ width: "100%" }}>
                {" "}
                <Typography
                  sx={{
                    textAlign: "left",
                    fontSize: "0.6em",
                    color: "#A1A9BB",
                    fontWeight: "600",
                  }}
                >
                  Enter the 16-digit card number on the card
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              sx={{
                width: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Grid sx={{ margin: "0 0.5rem 0 0" }}>
                <MdModeEditOutline color="#025EFE" size={15} />
              </Grid>
              <Grid>
                <Typography
                  sx={{
                    textAlign: "left",
                    fontSize: "0.7em",
                    color: "#025EFE",
                    fontWeight: "600",
                  }}
                >
                  Edit
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={2}
            sx={{ width: "100%", padding: "0 0 1.5rem 0" }}
          >
            <Grid item container>
              <Grid item sx={{ width: "100%" }}>
                <TextField
                  fullWidth
                  size="medium"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {<BsFillPatchCheckFill size={20} color="#17A1FA" />}
                      </InputAdornment>
                    ),
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={MasterC} alt="master-card-without-label" style={{width:"10%"}}/>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={2}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 0 1.5rem 0",
            }}
          >
            <Grid item container sx={{ width: "50%" }}>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                sx={{ width: "100%", padding: "0 0 0.5rem 0" }}
              >
                {" "}
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "left",
                    fontSize: "0.8em",
                    color: "#1D2A53",
                    fontWeight: "650",
                  }}
                >
                  CVV Number
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} sx={{ width: "100%" }}>
                {" "}
                <Typography
                  sx={{
                    textAlign: "left",
                    fontSize: "0.6em",
                    color: "#A1A9BB",
                    fontWeight: "600",
                  }}
                >
                  Enter the 3 or 4 digit number on the card
                </Typography>
              </Grid>
            </Grid>
            <Grid item container sx={{ width: "50%" }}>
              <Grid item sx={{ width: "100%" }}>
                <TextField
                  fullWidth
                  size="medium"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {<IoIosKeypad size={25} />}
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 0 1.5rem 0",
            }}
          >
            <Grid item container sx={{ width: "50%" }}>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                sx={{ width: "100%", padding: "0 0 0.5rem 0" }}
              >
                {" "}
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "left",
                    fontSize: "0.8em",
                    color: "#1D2A53",
                    fontWeight: "650",
                  }}
                >
                  Expiry Date
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} sx={{ width: "100%" }}>
                {" "}
                <Typography
                  sx={{
                    textAlign: "left",
                    fontSize: "0.6em",
                    color: "#A1A9BB",
                    fontWeight: "600",
                  }}
                >
                  Enter the expiration date of the card
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              sx={{
                width: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <Grid item sx={{ width: "43.5%", marginRight: "1rem" }}>
                <TextField fullWidth size="medium" />
              </Grid>
              <Grid>
                <Typography sx={{ fontSize: "1em", fontWeight: "700" }}>
                  /
                </Typography>
              </Grid>
              <Grid item sx={{ width: "43.5%", marginLeft: "1rem" }}>
                <TextField fullWidth size="medium" />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 0 2rem 0",
            }}
          >
            <Grid item container sx={{ width: "50%" }}>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                sx={{ width: "100%", padding: "0 0 0.5rem 0" }}
              >
                {" "}
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "left",
                    fontSize: "0.8em",
                    color: "#1D2A53",
                    fontWeight: "650",
                  }}
                >
                  Password
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} sx={{ width: "100%" }}>
                {" "}
                <Typography
                  sx={{
                    textAlign: "left",
                    fontSize: "0.6em",
                    color: "#A1A9BB",
                    fontWeight: "600",
                  }}
                >
                  Enter your dynamic password
                </Typography>
              </Grid>
            </Grid>
            <Grid item container sx={{ width: "50%" }}>
              <Grid item sx={{ width: "100%" }}>
                <TextField
                  fullWidth
                  size="medium"
                  type="password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {<IoIosKeypad size={25} />}
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={2}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Grid item container sx={{ width: "100%" }}>
              <Button
                variant="contained"
                sx={{
                  background: "#025EFE",
                  color: "#fff",
                  fontWeight: "700",
                  fontSize: "0.8em",
                  width: "100%",
                  padding: "1rem",
                  textTransform: "capitalize",
                }}
              >
                Pay Now
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ width: "35%", display: "flex" }}>
          <Grid
            container
            spacing={2}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <CreditCard />
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default CardComponent;
