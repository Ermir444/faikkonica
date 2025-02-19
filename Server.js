const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/v1/verify/facebook', (req, res) => {
    res.json({ status: 'success', message: 'Facebook verification successful' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});