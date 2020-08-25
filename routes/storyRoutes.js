const { Router } = require("express");
const controllers = require("../controllers/storyController");
const router = Router();

router.get("/stories", controllers.getStories);
router.get("/story/:id", controllers.getStory);
// router.get("/donation/:id", controllers.getDonation);
router.put("/story/:id", controllers.updateStory);
router.post("/donation/new", controllers.createDonation);
router.delete("/story/:id", controllers.deleteDonation);

module.exports = router;
