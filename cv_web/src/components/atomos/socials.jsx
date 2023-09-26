import { Box } from "@mui/material";
import Icon from "@mdi/react";
import { mdiFacebook, mdiInstagram, mdiGithub } from "@mdi/js";

import React from "react";

export default function socials() {
  return (
    <>
      <Box>
        <Icon path={mdiFacebook} size={3} />
        <Icon path={mdiInstagram} size={3} />
        <Icon path={mdiGithub} size={3} />
      </Box>
    </>
  );
}
