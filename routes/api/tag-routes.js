const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// Get all tags through the endpoints (/api/tag)
router.get('/',  async (req, res) => {
  try {
    const tagsData = await Tag.findAll({
      include: [{model:Product}],
    });
  res.status(200).json(tagsData);
} catch (err) {
  res.status(500).json(err);
} 
});
//Get single tag from the enpoints(/api/tag/:id)
router.get('/:id', async (req, res) => {
  try {
    const singleTag = await Tag.findByPk(req.params.id,{
      include: [{model:Product}],
    });
    if (!singleTag) {
      res.status(404).json({message:"No such tag ID exist"});
      return;
    }
    res.status(200).json(singleTag);
  } catch (err){
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const tagNew = await Tag.create(req.body)
    res.status(200).json(tagNew);
  } catch(err) {
    res.status(400).json(err);
  }
});
//update a tag's name by its id value
router.put('/:id', async (req, res) => {
  try {
    const checkTagid = await Tag.findByPk(req.params.id);
    if (!checkTagid) {
      res.status(404).json({Message:"tagid doesn't exist"});
      return;
    }
    const updateTagname = await Tag.update(req.body);
    res.status(200).json(updateTagname);
  } catch(err) {
    res.status(400).json(err);
  }
});

  // delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const deleteTag = await Tag.destroy({
      where: {
        id:req.params.id
      }
    });
    if (!deleteTag){
      res.status(404).json({message:"No such tag id exists"});
      return;
    }
    res.status(200).json(deleteTag);

  } catch {
    res.status(500).json(err);
  }
});

module.exports = router;
