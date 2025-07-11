require('dotenv').config();

const express = require('express');
const app = express();
const schoolRoutes = require('./routes/schoolRoutes');


app.use(express.json());

app.get('/', (req, res) => {
  res.send('✅ School API is live and running!');
});

app.use('/api', schoolRoutes);

const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));

