import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { fetchdata, exerciseoptions } from "../utils/fetchdata";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Exercises from "./Exercises";

const Searchexercise = ({ setexercises, bodypart, setbodypart }) => {
  const [search, setsearch] = useState([]);

  const [bodyparts, setbodyparts] = useState([]);
  useEffect(() => {
    const fetchexercisedata = async () => {
      const bodypartsdata = await fetchdata(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseoptions
      );

      setbodyparts(["all", ...bodypartsdata]);
    };
    fetchexercisedata();
  }, []);

  const Handlesearch = async () => {
    if (search) {
      const exercisedata = await fetchdata(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseoptions
      );
      const searchedexercise = exercisedata.filter((exercise) => {
        return (
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.name.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
        );
      });

      setsearch("");
      setexercises(searchedexercise);
      console.log(exercisedata);
    }
  };
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="49px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          value={search}
          onChange={(e) => {
            setsearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={Handlesearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          datas={bodyparts}
          bodypart={bodypart}
          setbodypart={setbodypart}
        />
      </Box>
    </Stack>
  );
};

export default Searchexercise;
