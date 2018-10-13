(function() {
  const keys = document.querySelectorAll('.keys-panel .key'),
      audioFiles = [
        'loop01',
        'track01',
        'track02',
        'track03',
        'track04',
        'track05',
        'track06',
        'track07',
        'track08',
        'track09',
        'track10',
        'track11',
        'track12',
        'track12',
        'track13',
        'track14',
        'track15'
      ],
      pads = audioFiles.reduce(function(acc, audioUrl) {
        return acc.concat(new Audio('./tracks/'+ audioUrl +'.mp3'))
      }, [])

  keys.forEach((key, index) => {
    key.addEventListener('click', () => {
      key.classList.add('active')
      pads[index].load()
      pads[index].play()
      pads[index].addEventListener('ended', () => key.classList.remove('active'))
    })
  })
})()
