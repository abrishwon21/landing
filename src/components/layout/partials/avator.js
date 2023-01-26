import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function Avatars(props) {
  return (
    <Stack direction="row" spacing={2} style={{marginRight:"10px"}}>
      <Avatar
        src={props.url}
        sx={{ width: 66, height: 66 }}
      />
      {
  
      }
    </Stack>
  );
}
