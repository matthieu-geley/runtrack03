$(document).ready(function () {
      $("#random").click(function(){
            var parent = $(".box2");
            var divs = parent.children();
            while (divs.length) {
                parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
            }
      });
      
      $("#one").click(function(){
            var completion = [];
            $(".box2").appendTo(".box")
      });
})