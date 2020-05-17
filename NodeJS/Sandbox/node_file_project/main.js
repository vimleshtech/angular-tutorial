var fs = require('fs')



/// Thread cycle : read 

fs.readFile('TestFile.txt',function(err,data){
    
            if(err) throw err;
    
    
        console.log(data);
    
    
    })

    
//write data (overwrite) //create new file if not exist
fs.writeFile('myfile.txt','alpha beta',function(err){

    if(err)
    {
        console.log('something went wrong !!! '+err)
    }

    console.log('file is created;')

})

//append to file 
fs.appendFile('myfile.txt','alpha beta',function(err){
    
        if(err)
        {
            console.log('something went wrong !!! '+err)
        }
    
        console.log('file is updated;')
    
    })
    

