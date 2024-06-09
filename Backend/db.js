import mongoose from "mongoose";

const ConnectString = 'mongodb+srv://vivekphadake17:Vivek%402003@cluster0.lirjwgw.mongodb.net/AudioECommerce';

const ConnectToDatabase = async () =>{
    try {
        await mongoose.connect(ConnectString);
        console.log('Connected To Database');
    } catch (error) {
        console.log('Failed To Connect To Database');
    }
}

export default ConnectToDatabase;