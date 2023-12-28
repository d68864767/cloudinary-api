# Cloudinary API Wrapper

This package provides a simple and easy-to-use wrapper for the Cloudinary API. It allows you to upload images to your Cloudinary account directly from your Node.js application.

## Installation

To install this package, you need to have Node.js installed on your system. If you don't have Node.js installed, you can download it from [here](https://nodejs.org/).

Once you have Node.js installed, you can install this package using npm:

```
npm install cloudinary-api-wrapper
```

## Usage

First, you need to configure your Cloudinary API credentials. You can do this by calling the `cloudinary.config` function:

```javascript
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'your_cloud_name',
  api_key: 'your_api_key',
  api_secret: 'your_api_secret'
});
```

Then, you can use the `uploadImage` function to upload an image to your Cloudinary account:

```javascript
const uploadImage = require('cloudinary-api-wrapper');

uploadImage('path_to_your_image.jpg')
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

## Testing

This package includes a set of unit tests to ensure its functionality. You can run these tests using npm:

```
npm test
```

## Contributing

If you find any bugs or have a feature request, please open an issue on [github](https://github.com/username/cloudinary-api-wrapper/issues)!

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
