const { Router } = require('express');
const router = Router()

router.get('/', (req, res) => {
    const data = {
        name: 'Votes app by Carlos Angulo'
    }
    res.json(data);
});

module.exports = router;