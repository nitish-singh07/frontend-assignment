import { Box, Typography, LinearProgress } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledLinearProgress = styled(LinearProgress)({
  height: 8,
  borderRadius: 4,
  backgroundColor: "#f0f0f0",
  "& .MuiLinearProgress-bar": {
    borderRadius: 4,
  },
});

const PatientsSeverity = () => {
  const severityData = [
    { label: "Easy condition", count: 2717, value: 100 },
    { label: "Middle condition", count: 1013, value: 37 },
    { label: "Serious condition", count: 75, value: 15 },
  ];

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        PATIENTS BY SEVERITY
      </Typography>

      {severityData.map((item, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography variant="body2" color="text.secondary">
              {item.label}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.count}
            </Typography>
          </Box>
          <StyledLinearProgress
            variant="determinate"
            value={item.value}
            sx={{
              "& .MuiLinearProgress-bar": {
                backgroundColor:
                  index === 0 ? "#4CAF50" : index === 1 ? "#FFA726" : "#F44336",
              },
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default PatientsSeverity;
