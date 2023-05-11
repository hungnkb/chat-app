import { Stack } from "@mui/material";
import React from "react";

function BodyRight() {
  return (
    <>
      <Stack direction='column' style={{display: 'flex', alignItems: 'center'}}>
        <img
          style={{ width: 100, borderRadius: "50%" }}
          src="https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg"
          alt=""
        />
        <div style={{fontWeight: 'bold'}}>Nong Duc Manh</div>
        <div style={{color: '#71D7AC', fontWeight: 'bold'}}>@manhdn</div>
      </Stack>
    </>
  );
}

export default BodyRight;
