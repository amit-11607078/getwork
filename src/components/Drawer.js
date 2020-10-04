import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import { Typography } from "@material-ui/core";
import { Dashboard } from "@material-ui/icons";
import DescriptionIcon from '@material-ui/icons/Description';
import SchoolIcon from '@material-ui/icons/School';
import TelegramIcon from '@material-ui/icons/Telegram';
import { green, grey } from "@material-ui/core/colors";
import ListAltIcon from '@material-ui/icons/ListAlt';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';



const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 300,
    paddingLeft: theme.spacing(1),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

//   const handleClick = () => {
//     setOpen(!open);
//   };

  return (
    <div className="list">
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        // subheader={
        //   <ListSubheader component="div" id="nested-list-subheader">
        //     Dashboard
        //   </ListSubheader>
        // }
        className={classes.root}
      >
        <ListItem button>
          <ListItemIcon>
            <Dashboard style={{ color: grey[500] }}/>
          </ListItemIcon>
          <Typography variant="h1" className="dashboard">
            Dashboard
          </Typography>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <DescriptionIcon style={{ color: grey[500] }}/>
          </ListItemIcon>
          <Typography variant="h1" className="list">
            Branch/Course
          </Typography>
        </ListItem>

        <ListItem button >
          <Typography variant="h1" className="list">
            College
          </Typography>
        
        </ListItem>
       
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ListAltIcon  style={{ color: grey[500] }}/>
              </ListItemIcon>
              <Typography variant="h1" className="list">
                All
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <TelegramIcon style={{ color: grey[500] }}/>
              </ListItemIcon>
              <Typography variant="h1" className="list">
                Send Invitation
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
              <SchoolIcon style={{ color: grey[500] }}/>
              </ListItemIcon>
              <Typography variant="h1" className="list">
                Add College
              </Typography>
            </ListItem>
          </List>
       
        <ListItem button >
          
          <Typography variant="h1" className="list">
            Company
          </Typography>
         
        </ListItem>
       
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ViewCarouselIcon style={{ color: grey[500] }} />
              </ListItemIcon>
              <Typography variant="h1" className="list">
                All
              </Typography>
            </ListItem>
          </List>
        

        <ListItem button >
          
          <Typography variant="h1" className="list">
            Students
          </Typography>
         
        </ListItem>
       
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <SchoolIcon style={{ color: grey[500] }}/>
              </ListItemIcon>
              <Typography variant="h1" className="list">
                All
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <TelegramIcon style={{ color: grey[500] }}/>
              </ListItemIcon>
              <Typography variant="h1" className="list">
                Add Students
              </Typography>
            </ListItem>
          </List>
      
        <ListItem button >
          
          <Typography variant="h1" className="list">
            My Jobs
          </Typography>
         
        </ListItem>
       
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
              <ViewCarouselIcon style={{ color: grey[500] }} />
              </ListItemIcon>
              <Typography variant="h1" className="list">
                All Jobs
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
              <ViewCarouselIcon style={{ color: grey[500] }} />
              </ListItemIcon>
              <Typography variant="h1" className="list">
                Open Jobs
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
              <ViewCarouselIcon style={{ color: grey[500] }} />
              </ListItemIcon>
              <Typography variant="h1" className="list">
                Applocation Status
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
              <ViewCarouselIcon style={{ color: grey[500] }} />
              </ListItemIcon>
              <Typography variant="h1" className="list">
                Closed Jobs
              </Typography>
            </ListItem>
          </List>
      

        <ListItem button >
         
          <Typography variant="h1" className="list">
            Data
          </Typography>
         
        </ListItem>
       
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
              <DescriptionIcon style={{ color: grey[500] }}/>
              </ListItemIcon>
              <Typography variant="h1" className="list">
                Generate Report
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <TelegramIcon style={{ color: grey[500] }} />
              </ListItemIcon>
              <Typography variant="h1" className="list">
                Update Youtube Links
              </Typography>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <TelegramIcon style={{ color: grey[500] }}/>
              </ListItemIcon>
              <Typography variant="h1" className="list">
                Update Blogs Links
              </Typography>
            </ListItem>
          </List>
        
      </List>
    </div>
  );
}
