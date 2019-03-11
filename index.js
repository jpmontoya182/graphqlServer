import express from 'express';
import graphqlHTTP from 'express-graphql';
import { schema } from './data/schema';

const app = express();
const PORT = 7001;


app.get('/', (req, res) => {
	res.send('Todo Listo');
});

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true
	})
);

app.listen(PORT, () => {
	console.log(`The server is running at ${PORT}`);
});
