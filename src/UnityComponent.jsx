// src/UnityInterface.js
import { Unity, useUnityContext } from "react-unity-webgl";
import { Box, Typography, AppBar, Toolbar, Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom"; // If you're using React Router

const UnityInterface = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "buildUnity/buildUnity.loader.js",
    dataUrl: "buildUnity/buildUnity.data",
    frameworkUrl: "buildUnity/buildUnity.framework.js",
    codeUrl: "buildUnity/buildUnity.wasm",
  });

  const navigate = useNavigate(); // To enable navigation with React Router

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <Box display="flex" flexDirection="column" width="100vw" height="100vh">
      {/* Main content: Unity and Map sections */}
      <Box display="flex" flex={1} overflow="hidden">
        {/* Left side: Unity WebGL Component - takes half of the screen */}
        <Box
          flex={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            width: "50%",           // Ensures it takes half the viewport width
            height: "100%",         // Ensures it takes full viewport height
            overflow: "hidden",
            border: "none",
          }}
        >
          <Unity
            unityProvider={unityProvider}
            style={{
              width: "100%",         // Fills container width
              height: "100%",        // Fills container height
              maxWidth: "100%",      // Ensures it doesn't exceed the container
              maxHeight: "100%",     // Ensures it doesn't exceed the container
              objectFit: "contain",  // Maintains aspect ratio within container
              border: "none",
            }}
          />
        </Box>

        {/* Right side: Map placeholder - takes other half of the screen */}
        <Box
          flex={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            width: "50%",           // Ensures it takes half the viewport width
            height: "100%",         // Ensures it takes full viewport height
            backgroundColor: "#e0e0e0",
            border: "none",
          }}
        >
          <Typography variant="h4" color="textSecondary">
            Map Placeholder
          </Typography>
        </Box>
      </Box>

      {/* App Bar with Back Button fixed to the bottom */}
      <AppBar position="fixed" sx={{ top: "auto", bottom: 0, width: "100%" }}>
        <Toolbar sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Back Button */}
          <Button
            variant="contained"
            onClick={handleBackClick}
            startIcon={<ArrowBackIcon />}
            sx={{
              width: 200,               // Makes the button wide for touch interaction
              height: 50,               // Makes it tall enough for easy tapping
              textTransform: "none",    // Keeps text casing as is
              backgroundColor: "white", // Sets the button background color to white
              color: "primary.main",    // Sets the text color to the theme's primary color
              '&:hover': {
                backgroundColor: "#f0f0f0", // Adds a light grey color on hover for visual feedback
              },
            }}
          >
            Back
          </Button>
        </Toolbar>

        {/* Centered Title with absolute positioning */}
        <Typography
          variant="h6"
          component="div"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)", // Centers the text
            color: "white", // Text color
          }}
        >
          QSTP Guide
        </Typography>
      </AppBar>
    </Box>
  );
};

export default UnityInterface;
