import { Box, Grid } from "@mui/material";
import Sidebar from "./Sidebar";
import HospitalWorkload from "./HospitalWorkload";
import PatientsSeverity from "./PatientsSeverity";
import Schedule from "./Schedule";
import History from "./History";
import Tests from "./Tests";

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex", bgcolor: "#f5f8fa", minHeight: "100vh" }}>
      <Sidebar />
      <Grid container spacing={3} sx={{ p: 10 }}>
        {/* Left Section */}
        <Grid item xs={12} md={5}>
          <Box sx={{ bgcolor: "D9EAF4", p: 3, borderRadius: 2 }}>
            <HospitalWorkload />
            <PatientsSeverity />
            <Schedule />
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={7}>
          <Box sx={{ bgcolor: "white", p: 3, borderRadius: 2 }}>
            <History />
            <Tests />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
