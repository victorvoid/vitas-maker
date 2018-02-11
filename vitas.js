(function() {
  var keys = document.querySelectorAll('.keys-panel .key')
  var audioFiles = [
    'track01',
    'track02',
    'track03',
    'track04',
    'track05',
    'track06',
    'track07',
    'track08',
    'track09'
  ]
  var pads = audioFiles.reduce(function(acc, audioUrl) {
    return acc.concat(new Audio('./tracks/'+ audioUrl +'.mp3'))
  }, [])

  keys.forEach(function(key, index){
    key.addEventListener('click', function() {
      key.classList.add("active");
      pads[index].load();
      pads[index].play();
      pads[index].addEventListener("ended", function(){
        key.classList.remove('active')
      });
    })
  })
})()
