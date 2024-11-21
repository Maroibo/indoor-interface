import { Box, Typography, Button, IconButton, Collapse, List, ListItem, ListItemText } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const InformationScreen = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [companiesOpen, setCompaniesOpen] = useState(false);
  const [startupsOpen, setStartupsOpen] = useState(false);
  const [companies] = useState(["Qmic"]);
  const [startups] = useState(["Startup A", "Startup B"]);
  const navigate = useNavigate();

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'short',
      });
      const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setCurrentDate(formattedDate);
      setCurrentTime(formattedTime);
    };

    updateCurrentTime();
    const intervalId = setInterval(updateCurrentTime, 60000);
    return () => clearInterval(intervalId);
  }, []);

  const handleCompaniesToggle = () => {
    setCompaniesOpen((prev) => !prev);
  };

  const handleStartupsToggle = () => {
    setStartupsOpen((prev) => !prev);
  };

  const handleCompanyClick = (company) => {
    if (company === "Qmic") {
      navigate("/ar-nav"); // Navigate to the Qmic component
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bgcolor="#f5f5f5"
      sx={{
        borderRadius: 2,
        boxShadow: 3,
        padding: 4,
        height: "calc(100vh - 32px)",
        width: "calc(100vw - 65px)",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100%"
        width="100%"
      >
        <Box display="flex" justifyContent="space-between" width="100%" mb={2}>
          <Typography variant="h6" fontWeight="bold" color="primary">
            Indoors Navigation
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {currentDate} {currentTime}
          </Typography>
        </Box>

        <Typography variant="h4" fontWeight="bold" color="primary" mb={3}>
          Information
        </Typography>

        <Box display="flex" gap={2} mb={3}>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: 150, height: 100 }}
          >
            About QSTP
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: 150, height: 100 }}
          >
            Map
          </Button>
        </Box>

        <Box width="100%" mb={2}>
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            onClick={handleCompaniesToggle}
            sx={{
              justifyContent: "space-between",
              paddingY: 2,
              textTransform: "none",
            }}
          >
            <Typography variant="body1">Companies</Typography>
          </Button>
          <Collapse in={companiesOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {companies.map((company, index) => (
                    <ListItem 
                      button 
                      key={index} 
                      sx={{ pl: 4, cursor: 'pointer' }}
                      onClick={() => handleCompanyClick(company)} // Add your onClick event handler here if needed
                    >
                      <ListItemText
                        primary={company}
                        primaryTypographyProps={{ color: 'primary' }}
                      />
                    </ListItem>
              ))}
            </List>
          </Collapse>
        </Box>

        <Box width="100%" mb={2}>
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            onClick={handleStartupsToggle}
            sx={{
              justifyContent: "space-between",
              paddingY: 2,
              textTransform: "none",
            }}
          >
            <Typography variant="body1">Startups</Typography>
          </Button>
          <Collapse in={startupsOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {startups.map((startup, index) => (
                <ListItem button key={index} sx={{ pl: 4 }}>
                  <ListItemText
                    primary={startup}
                    primaryTypographyProps={{ color: 'primary' }}
                  />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </Box>

        <Box display="flex" justifyContent="space-between" width="100%" mt="auto">
          <Typography variant="body2" color="textSecondary">
            Privacy Notice
          </Typography>
          <Box display="flex" gap={1}>
            <IconButton color="primary">
              {/* Add an icon for accessibility or help */}
            </IconButton>
            <IconButton color="primary">
              {/* Language Icon */}
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InformationScreen;
