import React from "react";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";

const useStyles = makeStyles({
  root: {
    width: 260,
    height: "100vh",
  },
});

export const SideMenu = () => {
  const classes = useStyles();
  const history = useHistory();

  const navigateTo = (path) => {
    history.push(`${path}`);
  };

  return (
    <Paper className={classes.root}>
      <MenuList>
        <MenuItem onClick={() => navigateTo("/")}>
          <Typography variant="inherit">Home</Typography>
        </MenuItem>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
        >
          <TreeItem nodeId="1" label="Event Management">
          <MenuItem onClick={() => navigateTo("/new")}>
          <Typography variant="inherit">New</Typography>
        </MenuItem>
        <MenuItem onClick={() => navigateTo("/bookings")}>
          <Typography variant="inherit">Bookings</Typography>
        </MenuItem>
        <MenuItem onClick={() => navigateTo("/inprogress")}>
          <Typography variant="inherit">In Progress</Typography>
        </MenuItem>
        <MenuItem onClick={() => navigateTo("/cancelled")}>
          <Typography variant="inherit">Cancelled</Typography>
        </MenuItem>
          </TreeItem>
        </TreeView>
        <MenuItem onClick={() => navigateTo("/cafe")}>
          <Typography variant="inherit">Cafe</Typography>
        </MenuItem>
        <MenuItem onClick={() => navigateTo("/boutique")}>
          <Typography variant="inherit">Boutique</Typography>
        </MenuItem>
        <MenuItem onClick={() => navigateTo("/music-band")}>
          <Typography variant="inherit">Music Band</Typography>
        </MenuItem>
      </MenuList>
    </Paper>
  );
};
