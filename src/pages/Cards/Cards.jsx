import {
  Button,
  Container,
  Grid,
  Slider,
  styled,
  Typography,
} from '@mui/material';
import React from 'react';
import AvatarBox from '../../components/AvatarBox';

const Titulo = styled('h1')(({ theme }) => ({
  color: theme.palette.myColor.main,
}));

export const Cards = () => {
  return (
    <React.Fragment>
      <Container
        maxWidth=""
        sx={{
          backgroundColor: 'red',
        }}
      >
        <Typography variant="h5"> Titulo do site</Typography>
      </Container>

      <Container maxWidth="md">
        <Titulo>Teste</Titulo>
        <Grid container>
          <Grid item sx={{ backgroundColor: 'orange' }} xs={4}>
            <p>Grid #1</p>
          </Grid>
          <Grid item sx={{ backgroundColor: 'green' }} xs={3} sm={6} md={12}>
            <p>Grid #2</p>
          </Grid>
        </Grid>
      </Container>

      <Typography variant="h2">Titulo</Typography>
      <Button variant="contained">Clique aqui</Button>
      <Slider defaultValue={30} aria-label="Disabled slider" />
      <AvatarBox />
    </React.Fragment>
  );
};
