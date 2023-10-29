const router = require('express').Router();
const { Category, Product } = require('../../models');

// get all categories through the endpoints (/api/categories)
router.get('/', async (req, res) => {
  try {
    const categoriesData = await Category.findAll({
      include : [{model:Product}],
  });
  res.status(200).json(categoriesData);
} catch (err) {
  res.status(500).json(err);
} 
});
// get one category by id from the endpoints (/api/categories/:id)
router.get('/:id', async (req, res) => {
  try {
    const singleCategory = await Category.findByPk(req.params.id,{
      include: [{model:Product}],
    });
    if (!singleCategory) {
      res.status(404).json({message:"No such category exist"});
      return;
    }
    res.status(200).json(singleCategory);
  } catch (err){
    res.status(500).json(err);
  }
});
// create new category through end points (/api/categories)
router.post('/', async (req, res) => {
  try {
    const categoryNew = await Category.create(req.body)
    res.status(200).json(categoryNew);
  } catch(err) {
    res.status(400).json(err);
  }
});
// update category by ID through endpoints (./api/categories/:id)
router.put('/:id', async (req, res) => {
try {
  const checkCategoryid = await Category.findByPk(req.params.id);
  if (!checkCategoryid) {
    res.status(404).json({Message:"Category doesn't exist"});
    return;
  }
  const updateCategory = await Category.update(req.body);
  res.status(200).json(updateCategory);
} catch(err) {
  res.status(400).json(err);
}
});
//delete a category by id value through (./api/categories/:id)
router.delete('/:id', async (req, res) => {
  try {
    const deleteCategory = await Category.destroy({
      where: {
        id:req.params.id
      }
    });
    if (!deleteCategory){
      res.status(404).json({message:"NO category ID exist"});
      return;
    }
    res.status(200).json(deleteCategory);
  } catch {
    res.status(500).json(err);
  }
});

module.exports = router;
