const router = require('express-promise-router')();

const { index, addVote } = require('../controllers/public-figure');

router.get('/', index);
router.post('/:figureId', addVote)

// router.post('/', (req, res) => {
//     const {title, director, year, rating } = req.body;
//     if (title && director ) {
//         res.send('saved');
//     } else {
//         res.send('Wrong Request');
//     }
// })

module.exports = router;