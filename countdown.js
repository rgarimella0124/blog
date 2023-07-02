$(document).ready(function () {
  // Set the launch date and time
  var launchDate = new Date("2023-07-10T00:00:00Z");

  // Update the countdown every second
  var countdown = setInterval(function () {
    var now = new Date().getTime();
    var distance = launchDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("countdown").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the countdown is finished, display "Launched!"
    if (distance < 0) {
      clearInterval(countdown);
      document.getElementById("countdown").innerHTML = "Launched!";
    }
  }, 1000);
});
