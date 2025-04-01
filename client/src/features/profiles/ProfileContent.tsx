import { Box, Paper, Tab, Tabs } from "@mui/material";
import { SyntheticEvent, useState } from "react";

export default function ProfileContent() {
  const [value, setValue] = useState(0);

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  }

  const tabContent = [
    { label: 'About', content: <div>About</div> },
    { label: 'Photos', content: <div>Photos</div> },
    { label: 'Events', content: <div>Events</div> },
    { label: 'Following', content: <div>Following</div> },
    { label: 'Followers', content: <div>Followers</div> },
  ];

  return (
    <Box
      component={Paper}
      mt={2}
      p={3}
      elevation={3}
      height={500}
      sx={{ display: 'flex', alignItems: 'flex-start', borderRadius: 3 }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        sx={{ borderRight: 1, height: 450, minWidth: 200 }}
      >
        {tabContent.map((tab, index) => (
          <Tab key={index} label={tab.label} sx={{ mr: 3 }} />
        ))}
      </Tabs>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        {tabContent[value].content}
      </Box>
    </Box>
  )
}