const mongoose = require("mongoose")

const BrilinkUser = mongoose.model(
    "BrilinkUser",
    new mongoose.Schema({
        username: String,
        password: String,
        roles: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Role"
            }
        ],
        created_at: Date,
        updated_at: Date
    }),
    "brilinkUser"
)

module.exports = BrilinkUser