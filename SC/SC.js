exports.queue = function(building,planets){
    console.log("Adding " + building + " to queue")
    var d = new Date();
    x = [building, d.toString()]
    //planets.update({ q1: "test"}, {where: {id:2}}).then(function() {


    
    planets.update({ q2: x}, {where: {id:1}}).then(function() {
          console.log(d)
        //res.redirect('vendors');
    });


};