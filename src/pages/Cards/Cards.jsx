import { Button, Slider, Typography } from '@mui/material';
import React from 'react';
import AvatarBox from '../../components/AvatarBox';

// const Titulo = styled('h1')(({ theme }) => ({
//   color: theme.palette.primary.main,
// }));

export const Cards = () => {
  return (
    <React.Fragment>
      <Typography variant="h2">Titulo</Typography>
      <Button variant="contained">Clique aqui</Button>
      <Slider defaultValue={30} aria-label="Disabled slider" />
      <AvatarBox />
    </React.Fragment>
  );
};
