// Here is an example of configuring a Gridfolio with all the possible properties.

var themes = [
  'classic',
  'warhol',
]

var textures = {
  'classic': [
    'dark-bg black-texture-1',
    'dark-bg black-texture-2',
    'dark-bg black-texture-3',
    'light-bg white-texture-1',
    'light-bg white-texture-2',
    'light-bg white-texture-3'
  ],
  'warhol': [
    'dark-bg solid-blue',
    'dark-bg solid-red',
    'dark-bg solid-yellow',
    'dark-bg solid-pink',
    'dark-bg solid-green'
  ]
}

var $gridfolioContainer = document.getElementById('gridfolio--container')
var $themeButtons = Array.prototype.slice.call(document.querySelectorAll('.themes button'))

$themeButtons.forEach(function($button) {
  $button.addEventListener('click', function(e) {
    e.preventDefault()

    var theme = $button.getAttribute('data-theme')

    setTheme(theme)
  })
})

function setTheme(theme) {

  generateGridfolio(theme)
  $gridfolioContainer.querySelector('.gridfolio').setAttribute('data-theme', theme)

  $themeButtons.forEach(function(b) { b.classList.remove('selected')} )
  document.querySelector('.themes button[data-theme=' + theme + ']').classList.add('selected')
}


function generateGridfolio(theme) {

  $gridfolioContainer.innerHTML = ''

  var blocks = []

  for (var i = 0; i < 12; i++) {
    blocks.push({
      title: 'Project Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      url: 'http://christinecha.github.io/gridfolio/',
      tags: ['html', 'css', 'javascript'],
      classname: textures[theme] ? textures[theme][i % textures[theme].length] : ''
    })
  }



/** RUN **/

var randomThemeIndex = Math.round(Math.random() * (themes.length - 0.5) - 0.5)
setTheme(themes[randomThemeIndex])
