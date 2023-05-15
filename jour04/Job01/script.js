$(document).ready(function(){
   fetch('expression.txt')
      .then(res => {
         return res.text()
      }).then(text => {
         console.log(text)
      $("#button").click(function(){
         $('p').append(text)
      })
   })
   })