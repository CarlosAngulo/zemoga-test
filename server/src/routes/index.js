const { Router } = require('express');
const router = Router()

router.get('/', (req, res) => {
    const data = {
        name: 'Carlos'
    }
    res.json(data);
});

module.exports = router;