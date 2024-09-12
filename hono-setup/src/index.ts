import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { dadJokes } from './get'; 

const app = new Hono();

app.use('*', cors());


app.get('/', (c) => {
  return c.text('Hello Hono!');
});


app.get('/jokes', (c) => {
  return c.json(dadJokes); 
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port
});
