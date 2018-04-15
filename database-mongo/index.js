var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;


db.on('error', function() {
  console.log('mongoose connection error');
});


db.once('open', function() {
  console.log('mongoose connected successfully');
});


var NoteSchema = mongoose.Schema({
  text: String
});

var Note = mongoose.model('Note', NoteSchema);

var save = (data,callback) => {
  var note = new Note(data)

  note.save(function(err,data){
    if(err){
      callback(err)
    }else{
      callback(null, data)
    }

  })
}

module.exports.save = save;
module.exports.Note = Note;






