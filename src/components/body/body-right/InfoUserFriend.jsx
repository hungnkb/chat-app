import React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ModeCommentRoundedIcon from '@mui/icons-material/ModeCommentRounded';

function InfoUserFriend() {
  return (
    <>
      <img
        style={{ width: 100, borderRadius: "50%" }}
        src="https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg"
        alt=""
      />
      <div style={{ fontWeight: "bold" }}>Nong Duc Manh</div>
      <div style={{ color: "#71D7AC", fontWeight: "bold", marginBottom: '30px' }}>@manhdn</div>
      <Tooltip title="Message">
        <IconButton>
          <ModeCommentRoundedIcon />
        </IconButton>
      </Tooltip>
    </>
  );
}

export default InfoUserFriend;
