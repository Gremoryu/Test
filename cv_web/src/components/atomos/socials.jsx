import { Box } from "@mui/material";
import Icon from "@mdi/react";
import { mdiFacebook, mdiInstagram, mdiGithub } from "@mdi/js";
import "./css/icons.css";

import React from "react";
import { Link } from "react-router-dom";

const links = [
  {
    path: mdiFacebook,
    url: "face",
  },
  {
    path: mdiInstagram,
    url: "insta",
  },
  {
    path: mdiGithub,
    url: "github",
  },
];

export default function socials() {
  return (
    <>
      <Box>
        {links.map((link) => (
          <Link to={link.url}>
            <Icon className="icon" path={link.path} size={3} />
          </Link>
        ))}
      </Box>
    </>
  );
}
