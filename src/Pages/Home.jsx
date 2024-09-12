import { Box } from "@mui/material";
import React, { useState } from "react";
import Herobanner from "../components/Herobanner";
import Searchexercise from "../components/Searchexercise";
import Exercises from "../components/Exercises";

const Home = () => {
  const [exercises, setexercises] = useState([]);
  const [bodypart, setbodypart] = useState("all");

  return (
    <Box>
      <Herobanner />
      <Searchexercise
        bodypart={bodypart}
        setbodypart={setbodypart}
        setexercises={setexercises}
      />
      <Exercises
        bodypart={bodypart}
        exercises={exercises}
        setexercises={setexercises}
      />
    </Box>
  );
};

export default Home;
