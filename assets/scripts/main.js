$(document).ready(function () {
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    slidesToShow: 1,
    adaptiveHeight: true
  })
  $('#easterEgg').hide()
  var Konami = [38, 38, 40, 40, 37, 39, 37, 39, 65, 66]
  var i = 0
  $(document).keydown(function (e) {
    e.preventDefault()
    if (e.keyCode === Konami[i]) {
      if (i === 9) {
        i = 0
        $('#easterEgg').toggle()
        var audio = new Audio('../Zelda.mp3')
        audio.play()
      }
      i++
    }
  })
})
