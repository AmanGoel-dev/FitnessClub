import { Box } from "@mui/material";
import React from "react";
import Bodypart from "./Bodypart";

const HorizontalScrollbar = ({ datas, setbodypart, bodypart }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {datas.map((item, inex) => {
        return (
          <Box key={inex} m="0 30px">
            <Bodypart
              item={item}
              bodypart={bodypart}
              setbodypart={setbodypart}
            />
          </Box>
        );
      })}
    </div>
  );
};

export default HorizontalScrollbar;
