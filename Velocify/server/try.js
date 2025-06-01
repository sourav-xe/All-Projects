const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://sourav20kumar02:velocify06@velocify.ju51rzp.mongodb.net/velocify?retryWrites=true&w=majority&appName=velocify')


const phoneSchema = new mongoose.Schema({ name: String, color: String, image: String, status: { type: String, default: 'Ordered' } });
const Phone = mongoose.model('Phone', phoneSchema);

app.post('/api/phones', async (req, res) => {
  const phone = new Phone(req.body);
  await phone.save();
  res.status(201).send('Phone saved');
});

app.get('/api/phones', async (req, res) => {
  const phones = await Phone.find();
  res.json(phones);
});

app.patch('/api/phones/:id/status', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  await Phone.findByIdAndUpdate(id, { status });
  res.send('Status updated');
});

app.listen(5000, () => console.log('Server started on port 5000'));


