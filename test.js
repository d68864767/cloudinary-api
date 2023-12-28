const assert = require('assert');
const uploadImage = require('./index');

describe('Cloudinary API', function() {
  describe('#uploadImage()', function() {
    it('should upload image and return result', function(done) {
      uploadImage('path/to/your/image.jpg')
        .then(result => {
          assert(result);
          assert(result.url); // Assuming the result has a url property
          done();
        })
        .catch(done);
    });

    it('should fail when image path is incorrect', function(done) {
      uploadImage('path/to/non/existent/image.jpg')
        .then(() => {
          done(new Error('Expected method to reject.'));
        })
        .catch(() => {
          done();
        });
    });
  });
});
