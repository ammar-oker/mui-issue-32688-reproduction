import type { NextPage } from 'next';
import { Container, Typography } from '@mui/material';
import { Masonry } from '@mui/lab';
import RecipeReviewCard from '../components/RecipeReviewCard';

const Home: NextPage = () => {
  return (
    <Container>
      <Typography variant="h1" my={3}>
        Masonry
      </Typography>
      <Masonry columns={3}>
        {new Array(9).fill(null).map((_, index) => (
          <RecipeReviewCard key={`recipe-${index}`} />
        ))}
      </Masonry>
    </Container>
  );
};

export default Home;
