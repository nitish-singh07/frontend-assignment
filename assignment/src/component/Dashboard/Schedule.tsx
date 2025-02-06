import { Box, Typography, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const CalendarDay = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  "&.active": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

const AppointmentCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  backgroundColor: "#f8f9fa",
}));

const Schedule = () => {
  const appointments = [
    {
      day: "Tu",
      date: 5,
      specialty: "Dentist",
      time: "09:00-11:00",
      doctor: "Richard B.",
    },
    {
      day: "Fr",
      date: 10,
      specialty: "Cardiologist",
      time: "15:00-16:00",
      doctor: "Dr. Jennifer A.",
    },
    {
      day: "Tu",
      date: 3,
      specialty: "Proctologist",
      time: "10:00-10:30",
      doctor: "Barbara C.",
    },
    {
      day: "Fr",
      date: 13,
      specialty: "Surgeon",
      time: "12:00-13:30",
      doctor: "Ann K.",
    },
  ];

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        SCHEDULE
      </Typography>

      <Box sx={{ mb: 3 }}>
        <Grid container spacing={1}>
          {["MAY", "JUNE", "JULY", "AUGUST"].map((month, index) => (
            <Grid item key={index}>
              <Typography
                variant="body2"
                sx={{
                  color: month === "MAY" ? "primary.main" : "text.secondary",
                  fontWeight: month === "MAY" ? "bold" : "normal",
                }}
              >
                {month}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Grid container spacing={1} sx={{ mb: 3 }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((day) => (
          <Grid item key={day}>
            <CalendarDay className={day === 5 ? "active" : ""}>
              {day}
            </CalendarDay>
          </Grid>
        ))}
      </Grid>

      <Box>
        {appointments.map((apt, index) => (
          <AppointmentCard key={index}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  {apt.day}
                </Typography>
                <Typography variant="h6">{apt.date}</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1">{apt.specialty}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {apt.time}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {apt.doctor}
                </Typography>
              </Box>
            </Box>
          </AppointmentCard>
        ))}
      </Box>
    </Box>
  );
};

export default Schedule;
