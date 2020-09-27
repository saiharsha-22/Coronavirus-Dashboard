$(document).ready(function () {
    // Get JSON data from url
    $.getJSON("..//data.json", function (data) {
      var name=[]
      var infected = [];
      var recovered = [];
      var dead = [];
      $.each(data, function (id, obj) {
        
        name.push(obj.name)
        infected.push(obj.infected);
        recovered.push(obj.recovered);
        dead.push(obj.dead);
      });
      console.log(name)
   var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',
  
      // The data for our dataset
      data: {
          labels: infected,
          datasets: [{
              label: "dead",
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: infected,
          },
          {
              label: "infected",
          data: recovered,
          backgroundColor: 'rgba(251, 217, 158, 0.6)', //yelloworange color
          }
         
      ]
      },
  
      // Configuration options go here
      options: {}
  }); 
  
  });
  });