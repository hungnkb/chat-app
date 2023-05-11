import React from "react";
import BodyLeft from "../components/body/body-left/BodyLeft";
import BodyCenter from "../components/body/body-center/BodyCenter";
import BodyRight from "../components/body/body-right/BodyRight";
import Sidebar from "../components/Sidebar/Sidebar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Home() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={1}>
          {/* <Sidebar /> */}
        </Grid>
        <Grid item xs={3}>
          <BodyLeft style={{ backgroundColor: "red" }} />
        </Grid>
        <Grid item xs={5}>
          <BodyCenter />
        </Grid>
        <Grid item xs={3}>
          <BodyRight />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
