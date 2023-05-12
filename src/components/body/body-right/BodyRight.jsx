import { Stack } from "@mui/material";
import React from "react";
import InfoUserFriend from "./InfoUserFriend";
import ShareFiles from "./ShareFiles";

function BodyRight() {
  return (
    <>
      <Stack
        direction="column"
        style={{ display: "flex", alignItems: "center" }}
      >
        <InfoUserFriend />
        <ShareFiles/>
      </Stack>
    </>
  );
}

export default BodyRight;
