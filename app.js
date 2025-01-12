const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);  

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
