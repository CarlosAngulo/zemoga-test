const router = require('express-promise-router')();
const mdAuth = require('../middlewares/auth');

const { index, addVote } = require('../controllers/public-figure');

router.get('/', index);
router.post('/:figureId', mdAuth.verifyToken, addVote);

module.exports = router;