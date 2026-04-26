import multer from "multer";

const storage = multer.diskStorage({  //Store files on my server (disk)
    filename: function(req,file,callback){
        callback(null,file.originalname)   //callback(error, filename)
    }
})

const upload = multer({storage})

export default upload