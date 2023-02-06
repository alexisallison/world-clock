function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = document.querySelector(".date");
  let losAngelesTimeElement = document.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let parisElement = document.querySelector("#paris");
  let parisDateElement = document.querySelector("#paris .date");
  let parisTimeElement = document.querySelector("#paris .time");
  let parisTime = moment().tz("Europe/Paris");
  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");

  let detroitElement = document.querySelector("#detroit");
  let detroitDateElement = document.querySelector("#detroit .date");
  let detroitTimeElement = document.querySelector("#detroit .time");
  let detroitTime = moment().tz("America/Detroit");
  detroitDateElement.innerHTML = detroitTime.format("MMMM Do YYYY");
  detroitTimeElement.innerHTML = detroitTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
