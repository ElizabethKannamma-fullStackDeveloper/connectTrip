import {Router} from "express";
import { verifyJwt , adminAuth} from "../../middlewares/auth.middleware.js";
import { upload } from "../../middlewares/multer.middleware.js";
import { carListingRegister ,carListingUpdate} from "../../controllers/user/carListing.controller.js";

const router = Router();

router.route("/car-register").post(carListingRegister);
router.route("/car-update/:id").patch(carListingUpdate);

export default router;