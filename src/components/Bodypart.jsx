import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

const Bodypart = ({ item, bodypart, setbodypart }) => {
  return (
    <Stack
      type="buttom"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      onClick={() => {
        setbodypart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
      sx={{
        borderTop: bodypart === item ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
    >
      <img src={Icon} alt="dumbell" style={{ height: "40px", width: "40px" }} />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3A1212 "
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default Bodypart;
