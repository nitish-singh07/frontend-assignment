import { Box, Typography, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const Tests = () => {
  const testData = [
    {
      name: "Glucose",
      time: "Last year",
      average: "111 mg/dl",
      data: [65, 59, 80, 81, 56, 55, 40],
    },
    {
      name: "Glycosylated HGB",
      time: "Last week",
      average: "7.7%",
      data: [28, 48, 40, 19, 86, 27, 90],
    },
    {
      name: "Ketone bodies",
      time: "Last month",
      average: "12 mg/ml",
      data: [45, 25, 60, 31, 66, 45, 80],
    },
  ];

  return (
    <Box sx={{ mt: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Typography variant="h6">TESTS</Typography>
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

      {testData.map((test, index) => (
        <Box
          key={index}
          sx={{ mb: 3, p: 2, bgcolor: "#f8f9fa", borderRadius: 1 }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Box>
              <Typography variant="subtitle1">{test.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {test.time}
              </Typography>
            </Box>
            <Typography variant="subtitle1">{test.average}</Typography>
          </Box>

          <ResponsiveContainer width="100%" height={50}>
            <LineChart
              data={test.data.map((value, i) => ({ value, index: i }))}
            >
              <Line
                type="monotone"
                dataKey="value"
                stroke={
                  index === 0 ? "#8884d8" : index === 1 ? "#82ca9d" : "#ffc658"
                }
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      ))}
    </Box>
  );
};

export default Tests;
