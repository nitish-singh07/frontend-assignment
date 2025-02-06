import { Box, Typography, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { styled } from "@mui/material/styles";

const StyledPatientRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
  "&:last-child": {
    borderBottom: "none",
  },
}));

const History = () => {
  const patients = [
    {
      name: "Suzana R.",
      condition: "Heart failure",
      date: "10/21/22",
      status: "Active",
      avatar: "/path-to-avatar",
    },
    {
      name: "Suzana R.",
      condition: "Heart failure",
      date: "10/21/22",
      status: "Active",
      avatar: "/path-to-avatar",
    },
    {
      name: "Suzana R.",
      condition: "Heart failure",
      date: "10/21/22",
      status: "Active",
      avatar: "/path-to-avatar",
    },
    {
      name: "Suzana R.",
      condition: "Heart failure",
      date: "10/21/22",
      status: "Active",
      avatar: "/path-to-avatar",
    },
    {
      name: "Suzana R.",
      condition: "Heart failure",
      date: "10/21/22",
      status: "Active",
      avatar: "/path-to-avatar",
    },
    // Add more patient data
  ];

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Typography variant="h6">HISTORY</Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            size="small"
            placeholder="Search"
            InputProps={{
              startAdornment: <SearchIcon sx={{ color: "text.secondary" }} />,
            }}
          />
          <IconButton>
            <NotificationsIcon />
          </IconButton>
        </Box>
      </Box>

      <Box sx={{ display: "flex", mb: 2, justifyContent: "space-between" }}>
        <Typography variant="body2" color="text.secondary">
          All Patients: 110
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Active: 50
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Completed: 42
        </Typography>
        <Typography variant="body2" color="text.secondary">
          New: 18
        </Typography>
      </Box>

      {patients.map((patient, index) => (
        <StyledPatientRow key={index}>
          {/* Patient row content */}
        </StyledPatientRow>
      ))}
    </Box>
  );
};

export default History;
