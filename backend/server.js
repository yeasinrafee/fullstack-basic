import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Server is Ready');
});

app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      title: 'Joke 1',
      content: 'Why did the chicken cross the road? To get to the other side!',
    },
    {
      id: 2,
      title: 'Joke 2',
      content: 'Why did the chicken cross the road? To get to the other side!',
    },
    {
      id: 3,
      title: 'Joke 3',
      content: 'Why did the chicken cross the road? To get to the other side!',
    },
    {
      id: 4,
      title: 'Joke 4',
      content: 'Why did the chicken cross the road? To get to the other side!',
    },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
