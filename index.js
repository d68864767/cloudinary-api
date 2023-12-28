const cloudinary = require('cloudinary').v2;

// Configure your Cloudinary API credentials
cloudinary.config({
  cloud_name: 'your_cloud_name',
  api_key: 'your_api_key',
  api_secret: 'your_api_secret'
});

// Function to upload image
function uploadImage(imagePath) {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(imagePath, (error, result) => {
      if (error) reject(error);
      else resolve(result);
    });
  });
}

module.exports = uploadImage;
