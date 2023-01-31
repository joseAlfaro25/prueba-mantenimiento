import React from "react";
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import { HouseSharp, Work, Extension } from '@mui/icons-material';

const ListTask = ({tasks}) => {
  const getIcon = {
    home: <HouseSharp />,
    office: <Work />,
    hobbie: <Extension />,
  };

  return (
    <List
      sx={{
        width: "90%",
        maxWidth: 500,
        margin: "0 auto",
        bgcolor: "background.paper",
      }}
    >
      {tasks.map((task, index) => (
        <React.Fragment key={index}>
          <ListItem alignItems="flex-start" role="article">
            <ListItemAvatar>{getIcon[task.category]}</ListItemAvatar>
            <ListItemText
              role="heading"
              primary={task.title}
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {task.text}
                  </Typography>
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
      ))}
    </List>
  );
};

export default ListTask;
