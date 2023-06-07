const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    // Find all tags
    // Be sure to include its associated Product data
    const tags = await Tag.findAll({
      include: [{ model: Product, through: ProductTag }],
    });
    res.json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    // Find a single tag by its `id`
    // Be sure to include its associated Product data
    const tag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag }],
    });
    if (!tag) {
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }
    res.json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    // Create a new tag
    const tag = await Tag.create(req.body);
    res.status(201).json(tag);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    // Update a tag's name by its `id` value
    await Tag.update(req.body, {
      where: { id: req.params.id },
    });
    const updatedTag = await Tag.findByPk(req.params.id);
    res.json(updatedTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    // Delete one tag by its `id` value
    const tag = await Tag.destroy({
      where: { id: req.params.id },
    });
    if (!tag) {
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }
    res.json({ message: 'Tag deleted successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
