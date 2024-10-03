import mongoose, {Schema} from "mongoose";

// Essential Fields Schema
const EssentialFieldsSchema = new mongoose.Schema({
    carType: {
        type: String, required: true
    }, // Hatchback, Sedan, SUV, etc.
    fuelType: {
        type: String, required: true
    }, // Petrol, Diesel, CNG, Electric, etc.
    transmission: {
        type: String, required: true
    }, // Manual, Automatic, Semi-Automatic
    seats: { 
        type: Number, required: true 
    },
    ac: { 
        type: Boolean, required: true
     }, // Yes/No
    mileage: { 
        type: String, required: true 
    }, // kmpl or miles/gallon
    price: {
        daily: { type: Number, required: true },
        weekly: { type: Number },
        monthly: { type: Number }
    },
    images: [{ type: String }], // Array of image URLs
    description: {
         type: String, required: true 
        }
}, { _id: false });

// Additional Fields Schema
const AdditionalFieldsSchema = new mongoose.Schema({
    makeAndModel: { 
        type: String, required: true
     },
    yearOfManufacture: {
         type: Number, required: true
         },
    color: { 
        type: String, required: true 
    },
    engineCapacity: {
         type: Number, required: true 
        }, // in cc
    power: {
         type: Number, required: true
         }, // in bhp
    torque: { 
        type: Number, required: true 
    }, // in Nm
    fuelTankCapacity: { 
        type: Number, required: true 
    }, // in liters
    bootSpace: { 
        type: Number, required: true
     }, // in liters
    amenities: [{ type: String }] // Array of amenities
}, { _id: false });

// Rental Specific Fields Schema
const RentalSpecificFieldsSchema = new mongoose.Schema({
    rentalType: { 
        type: String, required: true 
    }, // Daily, Weekly, Monthly
    rentalDuration: {
        minDays: { type: Number, required: true },
        maxDays: { type: Number, required: true }
    },
    includedKms: {
         type: Number, required: true 
        }, // Free kilometers per day
    extraKmFare: { 
        type: Number, required: true
     }, // Per km charge
    cancellationPolicy: { 
        type: String, required: true
     },
    refundableSecurityDeposit: {
         type: Boolean, required: true
         }, // Yes/No
    driverAvailability: {
         type: Boolean, required: true 
        } // Yes/No
}, { _id: false });

// Company Owner Details Schema
const CompanyOwnerDetailsSchema = new mongoose.Schema({
    companyName: {
         type: String, required: true
         },
    ownerName: { 
        type: String, required: true 
    },
    contactInformation: {
        phone: { type: String, required: true },
        email: { type: String, required: true }
    },
    address: {
         type: String, required: true 
        },
    licenseNumber: { 
        type: String, required: true
     }
}, { _id: false });

// Safety and Security Features Schema
const SafetyAndSecurityFeaturesSchema = new mongoose.Schema({
    airbags: {
         type: Boolean, required: true 
        },
    abs: { 
        type: Boolean, required: true 
    }, // Anti-Lock Braking System
    esc: { 
        type: Boolean, required: true 
    }, // Electronic Stability Control
    rearviewCamera: {
         type: Boolean, required: true 
        },
    gpsTracking: { 
        type: Boolean, required: true
     }
}, { _id: false });

// Insurance and Warranty Schema
const InsuranceAndWarrantySchema = new mongoose.Schema({
    insuranceType: { 
        type: String, required: true
     }, // Comprehensive, Third-Party
    warranty: { 
        type: Boolean, required: true 
    }, // Yes/No
    warrantyDetails: { 
        type: String 
    }
}, { _id: false });

// Other Features Schema
const OtherFeaturesSchema = new mongoose.Schema({
    musicSystem: {
         type: Boolean, required: true 
        },
    bluetoothConnectivity: {
         type: Boolean, required: true 
        },
    usbPorts: { 
        type: Number, required: true 
    },
    auxInput: { 
        type: Boolean, required: true
     },
    centralLocking: {
         type: Boolean, required: true 
        }
}, { _id: false });

// Rating and Review Schema
const RatingAndReviewSchema = new mongoose.Schema({
    averageRating: { 
        type: Number, min: 0, max: 5 
    }, // Average rating out of 5
    numberOfReviews: { 
        type: Number, default: 0 
    }, // Total number of reviews
    reviewSnippets: [{ type: String }] // Array of review snippets
}, { _id: false });

// Car Listing Schema
const CarListingSchema = new mongoose.Schema({
    essentialFields: EssentialFieldsSchema,
    additionalFields: AdditionalFieldsSchema,
    rentalSpecificFields: RentalSpecificFieldsSchema,
    companyOwnerDetails: CompanyOwnerDetailsSchema,
    safetyAndSecurityFeatures: SafetyAndSecurityFeaturesSchema,
    insuranceAndWarranty: InsuranceAndWarrantySchema,
    otherFeatures: OtherFeaturesSchema
}, { timestamps: true });

// Export the CarListing model
export const CarListing = mongoose.model('CarListing', CarListingSchema);
