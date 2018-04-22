

var fs = require('fs');
var colors = require('colors');


fs.readdir('./content', 'utf-8', function(err, files) {
    console.log(files);

    fs.writeFile('contentMessages.txt', files, 'utf-8', function(err) {
        if(err) throw err;
        console.log('Zapisano!'.blue);
    });
});
