const express = require('express')
const router = express.Router()
const multer = require('multer')
const Phone = require('../models/Phone')

// Setup multer to store uploaded files in uploads/ folder
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
})
const upload = multer({ storage })

// CREATE new phone post
router.post('/', upload.single('image'), async (req, res) => {
  const { name, color, description } = req.body
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : ''

  const phone = new Phone({
    name,
    color,
    description,
    imageUrl,
    status: 'Order Placed',
    timestamps: { placed: new Date() }
  })

  await phone.save()
  res.status(201).json(phone)
})

// GET all phones
router.get('/', async (req, res) => {
  const phones = await Phone.find().sort({ createdAt: -1 })
  res.json(phones)
})

// GET one phone by ID
router.get('/:id', async (req, res) => {
  const phone = await Phone.findById(req.params.id)
  if (!phone) return res.status(404).json({ error: 'Phone not found' })
  res.json(phone)
})

// UPDATE status (for tracking updates)
router.put('/:id/status', async (req, res) => {
  const { status } = req.body
  const phone = await Phone.findById(req.params.id)
  if (!phone) return res.status(404).json({ error: 'Phone not found' })

  phone.status = status
  if (!phone.timestamps) phone.timestamps = {}

  phone.timestamps[status.replace(/\s/g, '').toLowerCase()] = new Date()
  await phone.save()

  res.json(phone)
})

module.exports = router
