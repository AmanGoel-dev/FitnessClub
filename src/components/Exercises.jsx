import React, { useEffect, useState } from "react";
import { Typography, Box, Pagination, Stack } from "@mui/material";
import { fetchdata, exerciseoptions } from "../utils/fetchdata";
import Exercisecard from "./Exercisecard";
const Exercises = ({ bodypart, exercises, setexercises }) => {
  const [currentpage, setcurrentpage] = useState(1);
  const exerciseperpage = 4;
  const indexoflastexercise = currentpage * exerciseperpage;
  const indexofFirstexercise = indexoflastexercise - exerciseperpage;
  useEffect(() => {
    const fetchexercisedata = async () => {
      let exercisedata = [];
      if (bodypart === "all") {
        exercisedata = await fetchdata(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseoptions
        );
      } else {
        exercisedata = await fetchdata(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodypart}`,
          exerciseoptions
        );
      }
      setexercises(exercisedata);
    };
    fetchexercisedata();
  }, [bodypart]);
  const currentexercise = exercises.slice(
    indexofFirstexercise,
    indexoflastexercise
  );

  const Paginate = (e, value) => {
    setcurrentpage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "20px" } }}
        useFlexGap
        flexWrap="wrap"
        justifyContent="center"
      >
        {/* yha per current exercsie likh skte hai agr exercise jaada hai to phir sirf limited exercsie hi show hogi page per */}
        {currentexercise.map((exercise, index) => {
          return <Exercisecard key={index} exercise={exercise} />;
        })}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 4 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exerciseperpage)}
            page={currentpage}
            onChange={Paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
