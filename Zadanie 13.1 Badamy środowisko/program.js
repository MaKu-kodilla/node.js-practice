process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {

    var input = process.stdin.read();
    var help = '/info - node version\n/lang - show environment\n/exit - exit nodes.js';
    
    console.log(help);

    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {

           case ('/exit'):

            process.stdout.write('Quitting app!\n')
            process.exit();
            break;

            case ('/info'):

            process.stdout.write('Node:\n')
            console.log(`Version: ${process.version}`);
            break;
            
            case('/lang'): 

            process.stdout.write('Environment:\n')
            console.log(process.env);
            break;

         default:
            process.stderr.write('Wrong instruction!\n');
        }
    }
});
