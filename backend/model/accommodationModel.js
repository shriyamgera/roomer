import mongoose from "mongoose"

const accommodationSchema = new mongoose.Schema({
    name:{type:String, required:true},
    location:{type:String, required:true},
    type:{type:String, enum:['PG','Hostel', 'Flat'], required:true},
    gender:{type:Array},
    img:{type:String, required:true},
    postDate:{type:Date, default:Date.now},
    contactNumbers:{type:Array},
    contactNumbers: { type: Array, required: true },
    address: { type: String, required: true },
    rentAmount: { type: Number, required: true },
    paymentFrequency: { type: String, enum: ['Monthly', 'Annually'], required: true },
    amenities: {
        type: [String],
        enum: [
            'WiFi',
            'Laundry',
            'Parking',
            'AC',
            'Meals',
            'Gym',
            'Study Room',
            'CCTV',
            '24x7 Security',
            'Power Backup'
        ]
    },
    transportFacilities: { type:String, enum:['Yes', 'No'], required:true},
    food: {
        included: { type: Boolean, default: false },
        type: { type: String, default: [], enum: ['Veg', 'Non-Veg', 'Both'] },
        mealFrequency: { type: Number },
    },
    roomDetails: {
        seater: { type: Number, required: true },
        attachedBathroom: { type: Boolean, default: false },
    },
    reviews: [
        {
            userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            comment: { type: String },
            rating: { type: Number, min: 1, max: 5 }
        },
    ],
})

const Accommodation = mongoose.model('Accommodation', accommodationSchema)

export default Accommodation