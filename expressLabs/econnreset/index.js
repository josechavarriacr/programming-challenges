const express = require('express');
const app = express();
const router = express.Router();

router.get('/test/:id', (req, res) => {
  return res.status(200).json({ hello: 'world' });
});

app.use('/api', router);

app.listen(3000, () => console.info('Up on port 3000'));