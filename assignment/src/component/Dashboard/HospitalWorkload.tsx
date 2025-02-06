import { Box, Typography } from "@mui/material";
import { PieChart, Pie, Cell } from "recharts";

const HospitalWorkload = () => {
  const data = [
    { department: "Cardiology", percentage: 48.6 },
    { department: "Therapy", percentage: 5.1 },
    { department: "Endocrinology", percentage: 46.3 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <Box>
      <Typography variant="h6">HOSPITAL WORKLOAD</Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            cx={100}
            cy={100}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="percentage"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <Box sx={{ ml: 2 }}>
          {data.map((item, index) => (
            <Box key={index} sx={{ mb: 1 }}>
              <Typography variant="body2">
                {item.department}: {item.percentage}%
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HospitalWorkload;
