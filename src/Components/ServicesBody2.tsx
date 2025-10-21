import React from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import PowerIcon from "@mui/icons-material/Power";

import security from "../assets/security.png";
import ai from "../assets/ai.png";

function ServicesBody2() {
  const services = [
    {
      title: "Certified Expertise",
      description: "AWS Solutions Architect & Developer certified professionals",
      icon: "🎓",
    },
    {
      title: "Agile Delivery",
      description: "PMP and Agile certified project management and accountability",
      icon: "⚡",
    },
    {
      title: "AI Solutions",
      description: "PhD-led intelligent automation and machine learning",
      icon: "🤖",
    },
    {
      title: "App Development",
      description: "Web, mobile, and enterprise applications",
      icon: "📱",
    },
    {
      title: "Cloud Architecture",
      description: "Expert cloud migration and optimization",
      icon: "☁️",
    },
    {
      title: "Security First",
      description: "Enterprise-grade compliance and Security certified professionals",
      icon: "🔒",
    },
  ];

  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          color: "darkblue",
          height: "auto",
          display: "flex",
          flexDirection: "column",
          p: { xs: 2, md: 8, xl: 14 },
        }}>
        <p className="masked-text">STRATUS 6 Advantage</p>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, xl: 4 }} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Typography variant="body1" sx={{ lineHeight: 2, color: "#333" }}>
              At Stratus6, we combine deep technical expertise with real-world experience. Our team holds
              industry-recognized certifications including AWS Solutions Architect, AWS Security Professional, PMP, and
              Agile credentials. More importantly, we've spent years working across diverse industries through
              consulting engagements, giving us the perspective to understand your unique challenges and deliver
              solutions that work.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, xl: 8 }}>
            <div className="hexagon-grid-container">
              <div className="hexagon-grid">
                {services.map((service, index) => {
                  return (
                    <div key={index + service.title} className="hexagon-item">
                      <div className="hexagon-shape">
                        <div className="hexagon-icon">{service.icon}</div>
                        <h3 className="hexagon-title">{service.title}</h3>
                        <p className="hexagon-description">{service.description} </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Grid>
        </Grid>
        <Typography variant="h3">Client Stories</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: "10px",
            justifyContent: { md: "space-evenly" },
          }}>
          <Card sx={{ maxWidth: 700 }}>
            <CardContent
              sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <Typography variant="h6" fontWeight={900}>
                SECTOR: Energy & Utilites
              </Typography>
              <img src={security} height="150px" />
              <Typography>
                Containerized proprietary simulators across isolated AWS accounts using AWS Organizations, enabling
                secure, on-demand environments for each customer. This architecture allows for rapid provisioning
                triggered by user registration and approval, giving clients immediate access to production-like systems
                for testing and validating telemetry data. The isolated deployments ensure strict account-level
                separation, supporting customer data privacy and compliance while accelerating onboarding and
                integration workflows.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 700 }}>
            <CardContent
              sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <Typography variant="h6" fontWeight={900}>
                SECTOR: Logistics & Manufacturing
              </Typography>
              <img src={ai} height="150px" />
              <Typography>
                Developed a secure, vision-based analytics system using IoT devices and radio-connected cameras to
                capture and encrypt real-time images of pallet jack operations. Images are streamed to the cloud, where
                AWS AI/ML services analyze pallet and site contents. The solution features end-to-end security and
                role-based access, ensuring data integrity and privacy. It enhances visibility, reduces losses, improves
                traceability, and supports deliveries by verifying loads in transit and upon arrival. This scalable
                architecture combines edge computing with cloud AI to optimize both warehouse and field logistics.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
}

export default ServicesBody2;
