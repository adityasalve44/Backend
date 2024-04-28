import { v2 as cloudinary } from "cloudinary";
import fs from "fs"


import {v2 as cloudinary} from 'cloudinary';
import { response } from "express";
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});


const uploadOnCloudinary = async (localFilePath)=>{
    try {
        if(!localFilePath) return null

        cloudinary.uploader.upload(localFilePath, {
            resource_type:"auto"
        })
        console.log("File Uploaded Successfully", response.url)
    } catch (error) {
        fs.unlinkSync(localFilePath)        //To remove the locally saved temp files as file upload failed
    }

}

/* 
cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); }); */