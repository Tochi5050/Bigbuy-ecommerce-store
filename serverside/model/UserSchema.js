import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema({
   name: {
    type: String,
    required: true
   },

   email: {
    type: String,
    required: true,
    unique: true
   },

   password: {
      type: String,
      required: true,
      unique: true
   },

   isAdmin: {
    type: Boolean,
    required: true,
    default: false
   }


}, {
    timestamps: true
})

userSchema.methods.matchedPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next) {
    try {
      // Only hash the password if it is modified or new
      if (!this.isModified('password')) {
        return next();
      }
  
      // Generate a salt
      const salt = await bcrypt.genSalt(10);
  
      // Hash the password with the generated salt
      const hashedPassword = await bcrypt.hash(this.password, salt);
  
      // Replace the password with the hashed password
      this.password = hashedPassword;
  
      return next();
    } catch (error) {
      return next(error);
    }
  });


const User = mongoose.model('User', userSchema)

export default User