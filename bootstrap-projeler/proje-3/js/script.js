  new Chart(document.getElementById('myChart1'), {
    type: 'bar',
    data: {
        labels : ['Ocak', 'Şubat', 'Mart', 'Nisan'],
        datasets : [
            {
                label : 'Bilgisayar',
                backgroundColor : '#3e95cd',
                data : [133, 221, 783, 2478]
            },
    
            {
                label : 'Telefon',
                backgroundColor : '#8e5ea2',
                data : [408, 547, 675, 734]
            },
    
            
        ]
    },
    options: {
      title: {
        display: true,
        text: 'Population growth (millions)'
      },
    },
  });


  new Chart(document.getElementById('myChart2'), {
    type : 'radar',
    data : {
      labels : ['Bursa', 'İstanbul', 'İzmir', 'Adana', 'Kocaeli'],

      datasets : [
        {
          label: 'Bilgisayar',
          fill: true,
          backgroundColor: 'rgba(179, 181, 198, 0.2',
          borderColor: 'rgba(179, 181, 198, 1)',
          pointBorderColor: '#fff',
          pointBackgroundColor:'rbga(179, 181, 198, 1)',
          data: [8.77, 55.61, 21.69, 6.62, 6.82]
        },

        {
          label: 'Telefon',
          fill: true,
          backgroundColor: 'blue',
          borderColor: 'blue',
          pointBorderColor: '#fff',
          pointBackgroundColor:'rbga(225, 99, 132, 1)',
          data: [28, 18, 8, 5, 57]

        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Distribution in % of world population',
      }
    }
  }
);


new Chart(document.getElementById('myChart3'), {
  type: 'line',
  data : {
    labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
    datasets: [
      {
        data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
        label: 'Bilgisayar',
        borderColor: '#3e95cd',
        fill: false
      },

      {
        data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
        label: 'Telefon',
        borderColor: '#8e6ea2',
        fill: false,
      },
      
      {
        data : [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
        label: 'Tablet',
        borderColor: '#3cba9f',
        fill: false
      },

      {
        data : [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
        label: 'Oyun Konsolu',
        borderColor: '#e8c3b9',
        fill: false
      }

    ]
  },
   options: {
    title: {
      display: true,
      text: 'World population per region (in millions)'
    }
   }
});