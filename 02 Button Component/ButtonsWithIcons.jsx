import React from 'react';
import { Button, Stack, Box } from '@mui/material';
import { Save, Delete, Send, Download } from '@mui/icons-material';

function ButtonExamples() {
  const handleSave = () => console.log('Saving...');
  const handleDelete = () => console.log('Deleting...');
  const handleSend = () => console.log('Sending...');

  return (
    <Box sx={{ padding: 2 }}>
      <Stack spacing={2} direction="column" alignItems="flex-start">

        {/* Primary Actions */}
        <Button variant="contained" color="primary" startIcon={<Save />} onClick={handleSave}>
          Save Document
        </Button>

        {/* Secondary Actions */}
        <Button variant="outlined" color="primary" startIcon={<Send />} onClick={handleSend}>
          Send Email
        </Button>

        {/* Dangerous Actions */}
        <Button variant="outlined" color="error" startIcon={<Delete />} onClick={handleDelete}>
          Delete Item
        </Button>

        {/* Text Actions */}
        <Button variant="text" startIcon={<Download />}>
          Download File
        </Button>

        {/* Disabled State */}
        <Button variant="contained" disabled>
          Can't Click This
        </Button>

        {/* Different Sizes */}
        <Stack direction="row" spacing={1}>
          <Button variant="contained" size="small">Small</Button>
          <Button variant="contained" size="medium">Medium</Button>
          <Button variant="contained" size="large">Large</Button>
        </Stack>

        {/* Full Width */}
        <Button variant="contained" fullWidth>
          Full Width Button
        </Button>

      </Stack>
    </Box>
  );
}

export default ButtonExamples;