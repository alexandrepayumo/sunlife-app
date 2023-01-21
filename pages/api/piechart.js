function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    const { userData, standardData } = data;
    res.status(201).json({ userData, standardData });
  }
}
