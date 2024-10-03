import {Router} from "express";
import { verifyJwt , adminAuth} from "../../middlewares/auth.middleware.js";
import { upload } from "../../middlewares/multer.middleware.js";
import { carListingRegister } from "../../controllers/user/carListing.controller.js";

const router = Router();

router.route("/car-register").post(carListingRegister);

export default router;