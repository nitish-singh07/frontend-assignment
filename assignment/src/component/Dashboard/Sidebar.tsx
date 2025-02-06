import { Box, IconButton, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AssignmentIcon from "@mui/icons-material/Assignment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/Edit";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SettingsIcon from "@mui/icons-material/Settings";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const SidebarContainer = styled(Box)({
  width: "80px",
  height: "100vh",
  backgroundColor: "#1A1B1D",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "fixed",
  left: 0,
  top: 0,
});

const IconWrapper = styled(IconButton)({
  color: "#666",
  margin: "8px 0",
  "&:hover": {
    color: "#fff",
  },
});

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Box sx={{ p: 2, mb: 2 }}>
        <img src="../assets/logo.png" alt="Logo" width="40" />
      </Box>

      <IconWrapper>
        <AccessTimeIcon />
      </IconWrapper>
      <IconWrapper>
        <AssignmentIcon />
      </IconWrapper>
      <IconWrapper>
        <FavoriteIcon />
      </IconWrapper>
      <IconWrapper>
        <EditIcon />
      </IconWrapper>
      <IconWrapper>
        <CalendarTodayIcon />
      </IconWrapper>
      <IconWrapper>
        <SettingsIcon />
      </IconWrapper>
      <IconWrapper>
        <CameraAltIcon />
      </IconWrapper>

      <Box sx={{ mt: "auto", mb: 2 }}>
        <Avatar sx={{ width: 40, height: 40 }} />
      </Box>
    </SidebarContainer>
  );
};

export default Sidebar;
