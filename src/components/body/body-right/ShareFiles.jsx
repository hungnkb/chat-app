import { Grid, Paper, Stack } from "@mui/material";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faFilePdf,
  faCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import './style.css'

const demoList = [
  {
    title: "Workschedule.pdf",
    createdAt: "07/31/2021",
    fileSize: "56200",
  },
    {
      title: "Final sample.png",
      createdAt: "08/15/2021",
      fileSize: "246.3",
    },
  //   {
  // title: "Memberlist.docx",
  // createdAt: "08/15/2021",
  // fileSize: "983.3",
  //   },
];

const mimeTypes = {
  pdf: (
    <FontAwesomeIcon
      icon={faFilePdf}
      size="xl"
      style={{ color: "#878c8a", fontSize: "30px" }}
    />
  ),
  //   docx: <FontAwesomeIcon icon={faFileDoc} style={{color: "#878c8a",}} />,
  png: (
    <FontAwesomeIcon icon={faImage} size="xl" style={{ color: "#878c8a", fontSize: '30px' }} />
  ),
};

function ShareFiles() {
  return (
    <>
      <div style={{ width: "80%" }}>
        <div style={{ alignSelf: "flex-start", paddingTop: '30px', paddingBottom: '50px' }}>
          Shared Files
        </div>
        <Grid
          container
          spacing={2}
          style={{
            width: "100%",
            display: "flex",
            justifyItems: "center",
            justifyContent: 'space-between'
          }}
        >
          {demoList.map((item, index) => {
            return (
                <Stack
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    // columnGap: "25vh",
                    width: '100%',
                    justifyContent: "space-between",
                  }}
                  key={`${item.title}-${index}`}
                >
                  <Stack
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "row",
                      alignItems: "center",
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Stack
                    style={{paddingRight: '25px'}}
                    > {mimeTypes[item.title.split(".")[1]]}</Stack>
                    <Stack>
                      <Stack>{item.title}</Stack>
                      {item.createdAt} - {item.fileSize}
                    </Stack>
                  </Stack>
                  <Stack>
                    <FontAwesomeIcon
                      icon={faCircleDown}
                      style={{
                        color: "#c0bfbc",
                        right: 0,
                        fontSize: "30px",
                        alignSelf: "flex-end",
                      }}
                    />
                  </Stack>
                </Stack>
            );
          })}
        </Grid>
      </div>
    </>
  );
}

export default ShareFiles;
