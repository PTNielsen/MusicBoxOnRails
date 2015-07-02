var vote = function() {
  var vote_count = $(this).siblings(".voter")
  $.ajax("/vote", {
    method: "POST",
    data: {
      value: $(this).attr("data-vote-value"),
      song_title: $(this).attr("data-song-title")
    },
    error: function() {alert("Something went wrong") },
    success: function(data) {
      if (typeof data!=='number') {
        alert("You are out of votes!")
      }
      else {
        vote_count.text(data)
      }
    }
  })
}

$(document).on("ready", function(){
  $(".upvote").on("click", vote)
  $(".downvote").on("click", vote)
})