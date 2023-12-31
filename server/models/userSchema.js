import {Schema,model} from "mongoose"

//defining user document schema
const userSchema=new Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true, unique:true},
    password:{type:String,required:true},
    socketId:{type:String},
    room:{type:Schema.Types.ObjectId,ref:"rooms"},
    imageUrl:{type:String,default:function(){
        return `http://api.multiavatar.com/${this.lastName}.svg`
    }}
})

//creating users collection
const UserCollection=model("users",userSchema)

export default UserCollection;