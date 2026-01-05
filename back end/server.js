const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Sample destination data (copy from your Main.jsx Data array)
const destinations = [
  {
    id: 1,
    destTitle: "Kathmandu Durbar Square",
    location: "Kathmandu",
    grade: "CULTURAL RELAX",
    fees: "5000",
    description: "Kathmandu Durbar Square, a UNESCO World Heritage Site, ..."
  },
  // ...add all other destinations here...
];

// Get all destinations
app.get('/api/destinations', (req, res) => {
  res.json(destinations);
});

// Search destinations by title or location
app.get('/api/search', (req, res) => {
  const { q } = req.query;
  if (!q) return res.json(destinations);
  const filtered = destinations.filter(
    d =>
      d.destTitle.toLowerCase().includes(q.toLowerCase()) ||
      d.location.toLowerCase().includes(q.toLowerCase())
  );
  res.json(filtered);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
