const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogpostRoutes = require('./blogRoutes');
const commentsRoutes = require('./commentsRoutes');

router.use('/user', userRoutes);
router.use('/blogpost', blogpostRoutes);
router.use('/comments', commentsRoutes);
// check this comments routes, maybe another way to atach comments to each blog by ID or Title.

module.exports = router;