var rgb = [];

for(var i = 0; i < 3; i++)
    rgb.push(Math.floor(Math.random() * 255));

myDiv.style.backgroundColor = 'rgb('+ rgb.join(',') +')';