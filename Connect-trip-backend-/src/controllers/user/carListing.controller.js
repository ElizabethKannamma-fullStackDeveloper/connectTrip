import { asyncHandler } from "../../utils/asyncHandler.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponce } from "../../utils/ApiResponce.js";
import { CarListing } from "../../models/carListing.model.js";

const carListingRegister = asyncHandler( async (req,res) => {
    const {essentialFields,additionalFields,rentalSpecificFields,companyOwnerDetails,safetyAndSecurityFeatures,insuranceAndWarranty,otherFeatures} = req.body;
    const{carType}=essentialFields

    if(!essentialFields && !additionalFields && !rentalSpecificFields && !companyOwnerDetails && !safetyAndSecurityFeatures && !insuranceAndWarranty)
            throw new ApiError(400,"All fields are mendatory");
    
    const carExists = await CarListing.findOne({carType});
    if(carExists) throw new ApiError(400,"carType already exists");

   
    const carListing = await CarListing.create({
        essentialFields,
        additionalFields,
        rentalSpecificFields,
        companyOwnerDetails,
        safetyAndSecurityFeatures,
        insuranceAndWarranty,
        otherFeatures
    });

    if(!carListing) throw new ApiError(500,"carListing not created");

    return res.status(201).json( new ApiResponce(201, carListing, "carListing created successfully"));
});

const carListingUpdate = asyncHandler( async (req,res) => {
    const {id} = req.params;
    // console.log(id);
    const {essentialFields,additionalFields,rentalSpecificFields,companyOwnerDetails,safetyAndSecurityFeatures,insuranceAndWarranty,otherFeatures} = req.body;
    

    if(!essentialFields && !additionalFields && !rentalSpecificFields && !companyOwnerDetails && !safetyAndSecurityFeatures && !insuranceAndWarranty)
            throw new ApiError(400,"All fields are mendatory");

    const carListing = await CarListing.findOne({_id: id});

    if(!carListing) throw new ApiError(400,"carType does not exists");

    

    const updateCarListing = await CarListing.findOneAndUpdate({_id : id},{
        $set : {
            essentialFields,
            additionalFields,
            rentalSpecificFields,
            companyOwnerDetails,
            safetyAndSecurityFeatures,
            insuranceAndWarranty,
            otherFeatures
        }
    },{new: true});

    if(!updateCarListing) throw new ApiError(400, "carListing not updated some error occurred");

    return res.status(201).json(new ApiResponce(201,updateCarListing,"carListing Updated successfully"));
});


export {carListingRegister,carListingUpdate}