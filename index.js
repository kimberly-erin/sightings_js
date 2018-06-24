var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#date");
var $searchBtn = document.querySelector("#search");

$searchBtn.addEventListener("click", handleSearchButtonClick);

var filteredSightings = dataSet ;

function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredSightings.length; i++) {
    var occurance = filteredSightings[i];
    var fields = Object.keys(occurance);
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = occurance[field];
    }
  }
}

function handleSearchButtonClick() {
  var filterDate = $dateInput.value;

  filteredSightings = dataSet.filter(function(occurance) {
    var sightingDate = occurance.datetime;

    return sightingDate === filterDate;
  });
  renderTable();
}

renderTable();
