const { Router } = require('express')
const controllers = require('../controllers/storyController')
const router = Router()


router.get('/stories', controllers.getStories)
router.get('/story/:id', controllers.getStory)
router.put('/story/:id', controllers.updateStory)
router.post('/story/new', controllers.createStory)
router.delete('/story/:id', controllers.deleteStory)

module.exports = router
