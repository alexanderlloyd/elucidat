$( document ).ready(function() {


      $(document).on('click touchstart', ".btn-start", function(e){
      				e.preventDefault();
      				$(".cube").removeClass("start");
              $(".intro-text").addClass("hide");
              $(".ticket-wrap").addClass("hide");
      				$("img.movie").addClass("show");
              $(".plan").addClass("show");

        });

        $(document).on('click touchstart', ".row__seat.answer", function(e){
          e.preventDefault();
            $(".cta-plan").addClass("show");
        });

        $(document).on('click touchstart', ".cta-plan", function(e){
          e.preventDefault();
            $(".cube").addClass("zoom");
            $(".plan").removeClass("show");
        });
});
