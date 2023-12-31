const router = require('express').Router();
const { Blogpost } = require('../../models');
const withAuth = require('../../utils/auth');

// add get post by id

router.post('/', withAuth, async (req, res) => {
  try {
    const newBlogPost = await Blogpost.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlogPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const blogpostData = await Blogpost.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogpostData) {
      res.status(404).json({ message: 'No project found with this id' });
      return;
    }
    res.status(200).json(blogpostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;