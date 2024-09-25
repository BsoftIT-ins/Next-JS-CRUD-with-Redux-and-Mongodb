import mongoose from "mongoose";


//Create Schema

const userSchema = mongoose.Schema(
    {
    name: {
        type:  String,
        requird: true,
        trim: true,
    },
    email: {
        type:  String,
        requird: true,
        trim: true,
    },
    cell: {
        type:  String,
        trim: true,
    },
    photo: {
        type:  String,
        default:null,
    },
    gender: {
        type:  String,
        enum: ["Male", "Female"],
    },
    status: {
        type:  Boolean,
        default: true,
        
    },
    trash: {
        type:  Boolean,
        default: false,
        
    },
},
{
    timestamps: true,
}

);

export default mongoose.model("User", userSchema);