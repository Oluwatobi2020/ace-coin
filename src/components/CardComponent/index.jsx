import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  InputAdornment,
  useMediaQuery,
} from "@mui/material";
import AceLogo from "../../assets/ace-logo.png";
import MyTimer from "../TimerComponent";
import { MdModeEditOutline } from "react-icons/md";
import CreditCard from "../CreditCard";
import { IoIosKeypad } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { BsFillPatchCheckFill } from "react-icons/bs";
import MasterC from "../../assets/mscard.png";
import { PatternFormat } from "react-number-format";
import NumericFormatCustom from "../../shared/CustomInput";
import DetailsModal from "../../shared/Modal/DetailsModal";
import { useDisclosure } from "../hooks";

const CardComponent = () => {
  const matches = useMediaQuery("(max-width:900px)");

  const {
    isOpen: isOpenDetailsModal,
    onOpen: onOpenDetailsModal,
    onClose: onCloseDetailsModal,
  } = useDisclosure();

  const [cardDetails, setCardDetails] = useState({
    cardNumber: "0000000000000000",
    cardCvv: "",
    cardExpiryMonth: "00",
    cardExpiryYear: "00",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const { cardCvv, cardExpiryMonth, cardExpiryYear, cardNumber } = cardDetails;
  return (
    <Box
      sx={{
        width: { lg: "80%", md: "80%", sm: "90", xs: "100%" },
        background: "#fff",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "",
        }}
      >
        <Typography
          sx={{
            padding: { lg: "0.7rem", md: "0.7rem", sm: "0.7rem", xs: "0.5rem" },
            background: "#F9FBFC",
          }}
        >
          <MdClose size={25} />
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          background: "#fff",
          padding: {
            lg: "4rem 5rem 1rem 5rem",
            md: "2rem 2rem 1rem 2rem",
            sm: "1.5rem",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: { lg: "flex", md: "flex" },
            alignItems: {
              lg: "flex-start",
              md: "flex-start",
              sm: "normal",
              xs: "normal",
            },
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: { lg: "65%", md: "65%", sm: "100%", xs: "100%" },
              padding: { lg: "0", md: "0", sm: "0", xs: "1rem 0 0 0" },
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
                marginRight: "5rem",
                padding: {
                  xs: "1rem 0 0 2rem",
                  sm: "1rem 0 0 2rem",
                  md: "1rem 0 0 0rem",
                  lg: "1rem 0 0 1rem",
                },
              }}
            >
              <Grid sx={{ width: "50%" }}>
                <img src={AceLogo} alt="AceCoin Logo" className="ace-logo" />
              </Grid>
              <Grid
                sx={{
                  width: "50%",
                  display: { xs: "flex" },
                  justifyContent: { xs: "flex-end" },
                }}
              >
                <MyTimer />
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
                  sx={{
                    width: "100%",
                    padding: {
                      lg: "0 0 0.5rem 0",
                      md: "0 0 0.5rem 0",
                      sm: "0 0 0 1rem",
                      xs: "0 0 0 1rem",
                    },
                  }}
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
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  sx={{
                    width: "100%",
                    padding: {
                      lg: "0 0 0.5rem 0",
                      md: "0 0 0.5rem 0",
                      sm: "0 0 0 1rem",
                      xs: "0 0 0 1rem",
                    },
                  }}
                >
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
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  sx={{
                    width: { lg: "100%", md: "100%", sm: "50%", xs: "50%" },
                    padding: {
                      lg: "0 0 0.5rem 0",
                      md: "0 0 0.5rem 0",
                      sm: "0 0 0 1rem",
                      xs: "0 0 0 1rem",
                    },
                  }}
                >
                  <TextField
                    fullWidth
                    value={cardNumber}
                    onChange={handleChange}
                    name="cardNumber"
                    InputProps={{
                      inputComponent: NumericFormatCustom,
                      inputProps: {
                        component: PatternFormat,
                      },
                      endAdornment: (
                        <InputAdornment position="end">
                          {cardNumber.length === 16 && (
                            <BsFillPatchCheckFill size={20} color="#17A1FA" />
                          )}
                        </InputAdornment>
                      ),
                      startAdornment: (
                        <InputAdornment position="start" sx={{ width: "30%" }}>
                          <img
                            src={MasterC}
                            alt="master-card-without-label"
                            style={{ width: "20%" }}
                          />
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
                  sx={{
                    width: "100%",
                    padding: {
                      lg: "0 0 0.5rem 0",
                      md: "0 0 0.5rem 0",
                      sm: "0 0 0 1rem",
                      xs: "0 0 0 1rem",
                    },
                  }}
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
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  sx={{
                    width: "100%",
                    padding: {
                      lg: "0 0 0.5rem 0",
                      md: "0 0 0.5rem 0",
                      sm: "0 0 0 1rem",
                      xs: "0 0 0 1rem",
                    },
                  }}
                >
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
                    inputProps={{
                      maxLength: 4,
                      minLength: 3,
                    }}
                    name="cardCvv"
                    value={cardCvv}
                    onChange={handleChange}
                    sx={{
                      "& .MuiInputBase-root": {
                        "& input": {
                          textAlign: "center",
                          borderRadius: "10px",
                        },
                        "& input:focus": {
                          background: "#F0F5FF",
                          border: "1px solid #025EFE",
                        },
                        fontSize: {
                          lg: "1em",
                          md: "1em",
                          sm: "0.8em",
                          xs: "0.8em",
                        },
                        fontWeight: "700",
                        color: "#1D2A53",
                      },
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
                  sx={{
                    width: "100%",
                    padding: {
                      lg: "0 0 0.5rem 0",
                      md: "0 0 0.5rem 0",
                      sm: "0 0 0 1rem",
                      xs: "0 0 0 1rem",
                    },
                  }}
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
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  sx={{
                    width: "100%",
                    padding: {
                      lg: "0 0 0.5rem 0",
                      md: "0 0 0.5rem 0",
                      sm: "0 0 0 1rem",
                      xs: "0 0 0 1rem",
                    },
                  }}
                >
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
                  justifyContent: "space-between",
                }}
              >
                <Grid
                  item
                  xs={12}
                  sm={5}
                  md={6}
                  lg={5}
                  sx={{
                    width: { lg: "43.5%", md: "20%", sm: "50%", xs: "20%" },
                    marginRight: {
                      lg: "1rem",
                      md: "0.5rem",
                      sm: "1rem",
                      xs: "0",
                    },
                    marginBottom: { xs: "0.5rem" },
                  }}
                >
                  <TextField
                    fullWidth
                    size="medium"
                    name="cardExpiryMonth"
                    value={cardExpiryMonth}
                    onChange={handleChange}
                    inputProps={{
                      maxLength: 2,
                    }}
                    sx={{
                      "& .MuiInputBase-root": {
                        "& input": {
                          textAlign: "center",
                        },
                        "& input:focus": {
                          background: "#F0F5FF",
                          border: "1px solid #025EFE",
                        },
                        fontSize: {
                          lg: "1em",
                          md: "1em",
                          sm: "0.8em",
                          xs: "0.8em",
                        },
                        fontWeight: "700",
                        color: "#1D2A53",
                      },
                    }}
                  />
                </Grid>
                <Grid
                  sx={{
                    display: { lg: "flex", md: "none", sm: "none", xs: "none" },
                  }}
                >
                  <Typography sx={{ fontSize: "1em", fontWeight: "700" }}>
                    /
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={5}
                  md={5}
                  lg={5}
                  sx={{
                    width: { lg: "43.5%", md: "20%", sm: "50%", xs: "20%" },
                    marginLeft: { lg: "1rem", md: "0", sm: "0", xs: "0" },
                  }}
                >
                  <TextField
                    fullWidth
                    size="medium"
                    name="cardExpiryYear"
                    value={cardExpiryYear}
                    onChange={handleChange}
                    inputProps={{
                      maxLength: 2,
                    }}
                    sx={{
                      "& .MuiInputBase-root": {
                        "& input": {
                          textAlign: "center",
                        },
                        "& input:focus": {
                          background: "#F0F5FF",
                          border: "1px solid #025EFE",
                        },
                        fontSize: {
                          lg: "1em",
                          md: "1em",
                          sm: "0.8em",
                          xs: "0.8em",
                        },
                        fontWeight: "700",
                        color: "#1D2A53",
                      },
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
                  sx={{
                    width: "100%",
                    padding: {
                      lg: "0 0 0.5rem 0",
                      md: "0 0 0.5rem 0",
                      sm: "0 0 0 1rem",
                      xs: "0 0 0 1rem",
                    },
                  }}
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
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  sx={{
                    width: "100%",
                    padding: {
                      lg: "0 0 0.5rem 0",
                      md: "0 0 0.5rem 0",
                      sm: "0 0 0 1rem",
                      xs: "0 0 0 1rem",
                    },
                  }}
                >
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
                    name="password"
                    onChange={handleChange}
                    sx={{
                      "& .MuiInputBase-root": {
                        "& input": {
                          textAlign: "left",
                        },
                        "& input:focus": {
                          background: "#F0F5FF",
                          border: "1px solid #025EFE",
                        },
                        fontSize: {
                          lg: "1em",
                          md: "1em",
                          sm: "0.8em",
                          xs: "0.8em",
                        },
                        fontWeight: "700",
                        color: "#1D2A53",
                      },
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
                justifyContent: "center",
                alignItems: "center",
                padding: {
                  lg: "0 0 0.5rem 0",
                  md: "0 0 0.5rem 0",
                  sm: "0 0 0 1rem",
                  xs: "0 0 0 1rem",
                },
              }}
            >
              <Grid
                item
                container
                sx={{
                  width: "100%",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    background: "#025EFE",
                    color: "#fff",
                    fontWeight: "700",
                    fontSize: "0.8em",
                    width: { lg: "100%", md: "100%", sm: "100%", xs: "100%" },
                    padding: "1rem",
                    textTransform: "capitalize",
                  }}
                >
                  Pay Now
                </Button>
              </Grid>
            </Grid>

            {matches && (
              <Grid
                container
                spacing={2}
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: {
                    lg: "0 0 0.5rem 0",
                    md: "0 0 0.5rem 0",
                    sm: "1.5rem 0 0 1rem",
                    xs: "1.5rem 0 1.5rem 1rem",
                  },
                }}
              >
                <Grid
                  item
                  container
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    sx={{ textAlign: "center", textTransform: "none" }}
                    onClick={onOpenDetailsModal}
                  >
                    Click here to see more details
                  </Button>
                </Grid>
              </Grid>
            )}
          </Box>

          <Box sx={{ width: { lg: "35%", md: "35%", sm: "0%", xs: "0%" } }}>
            <Grid
              container
              spacing={2}
              sx={{
                width: "100%",
                display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
                justifyContent: "flex-end",
              }}
            >
              <CreditCard cardDetails={cardDetails} />
            </Grid>
          </Box>
        </Box>
      </Box>

      <DetailsModal
        nonGlobal
        open={isOpenDetailsModal}
        onClose={onCloseDetailsModal}
        message="Dispute declined successfuly!"
      />
    </Box>
  );
};

export default CardComponent;
