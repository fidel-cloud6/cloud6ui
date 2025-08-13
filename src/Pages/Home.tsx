import React from "react";
import { Helmet } from "react-helmet-async";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";

function Home() {
  return (
    <>
      <Helmet>
        <title>Cloud 6 Software Development</title>
        <meta name="description" content="Modern web and software development consulting." />
        <meta property="og:title" content="Cloud6 Software Development" />
        <meta property="og:description" content="Full-stack and cloud-native software solutions." />
        <meta property="og:image" content="https://yourdomain.com/banner.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com" />
        <link rel="canonical" href="https://yourdomain.com/" />
      </Helmet>
      <Box component="main">
        <Container sx={{ height: { xs: "300px", sm: "400px" }, textAlign: "center", pt: 8 }}>
          {/* Header section */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              flexWrap: "wrap", // fallback on small screens
            }}>
            <Typography>Logo</Typography>
            <Typography variant="h1">Cloud6 Group</Typography>
          </Box>
          <Typography variant="h6" sx={{ pt: 4 }}>
            We help enterprises build scalable software
          </Typography>
          <PublicIcon
            sx={{
              fontSize: 60,
              animation: "rock 1s ease-in-out infinite alternate",
              "@keyframes rock": {
                from: { transform: "rotateY(0deg)" },
                to: { transform: "rotateY(360deg)" },
              },
              mt: 4,
            }}
          />
        </Container>

        {/* Body section */}
        <Box component="section" sx={{ background: "white", color: "darkblue", px: { xs: 3, sm: 2, lg: 20 }, py: 5 }}>
          <Grid container spacing={4}>
            {/* -------- */}
            <GridCard>
              <Typography variant="h5" gutterBottom>
                Our Services
              </Typography>
              <Typography variant="body2">
                Strategy, design, and development consulting tailored for your business.
              </Typography>
            </GridCard>
            {/* ---------- */}
            <GridCard>
              <Typography variant="h5" gutterBottom>
                Web Development
              </Typography>
              <Typography variant="body2">
                We build fast, responsive, and accessible websites and applications.
              </Typography>
            </GridCard>
            {/* --------- */}
            <GridCard>
              <Typography variant="h5" gutterBottom>
                Cloud Architecture
              </Typography>
              <Typography variant="body2">
                Leverage AWS, CI/CD pipelines, and scalable infrastructure with our consulting.
              </Typography>
            </GridCard>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Home;

type GridCardProps = {
  children: React.ReactNode;
};

function GridCard({ children }: GridCardProps) {
  return (
    <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          textAlign: "center",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // optional: center content vertically
        }}>
        {children}
      </Paper>
    </Grid>
  );
}
