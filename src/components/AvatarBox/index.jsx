import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function AvatarBox() {
  return (
    <Stack direction="column" spacing={2}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
    </Stack>
  );
}
