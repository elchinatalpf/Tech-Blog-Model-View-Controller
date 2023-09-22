const router = require('express').Router();
const { Comments } = require('../../models');
const withAuth = require('../../utils/auth');

// find all comments with get
router.get('/', withAuth, async (req, res) => {
  Comments.findAll({})
  .then(commentsData => res.json(commentsData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  Comments.findAll({
    where: {
      id: req.params.id
    }
  })
  .then(commentsData => res.json(commentsData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//create a new comment
router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    const newComment = await Comments.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const commentsData = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!commentsData) {
      res.status(404).json({ message: 'No blog has this ID' });
      return;
    }
    res.status(200).json(commentsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;