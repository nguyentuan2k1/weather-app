
let weather_place = document.querySelector('#weather-place');

function normal() {


    let url = 'https://api.openweathermap.org/data/2.5/weather?q=Phan%20Thiet&appid=79301b378464f8229c8cd05137e2f33d';
    fetch(url)
        .then(function (data) {
            return data.json();
        })
        .then(function (data) {
            weather_place.innerHTML = " " + data.name;
            document.querySelector('#desc').innerHTML += "Description: " + data.weather[0].description;
            document.querySelector('.info-place').innerHTML = data.name;
            let temp = document.querySelector('.temp');
            const nhietdo = Math.round(data.main.temp - 273.15);
            temp.innerHTML = "Temp in  Phan Thiet :" + nhietdo + "C";
            document.querySelector('.fell-like').innerHTML += 'Fell Like:' + Math.round(data.main.feels_like - 273.15) + "C";

            console.log(data);
            let icon = data.weather[0].icon;

            let url_img = 'http://openweathermap.org/img/wn/' + icon + '.png';
            document.querySelector('.temp-max').innerHTML = "Temp max :" + Math.round(data.main.temp_max - 273.15) + "C";
            document.querySelector('.temp-min').innerHTML = "Temp min :" + Math.round(data.main.temp_min - 273.15) + "C";


            document.querySelector('#img-weather').style.border = '1px solid green';
            document.querySelector('#img-weather').style.padding = '10px';
            document.querySelector('#img-weather').style.borderRadius = '50%';
            document.querySelector('#img-weather').style.background = '#74a7ab';
            document.querySelector('#img-weather').style.width = '100px';
            document.querySelector('#img-weather').style.height = '100px';

            document.querySelector('#img-weather').setAttribute('src', url_img);

            // fetch(url_img)
            //     .then(function (response) {
            //         return response.blob();
            //     })
            //     .then(image => {

            //         console.log(image);

            //         outside = URL.createObjectURL(image);
            //         document.querySelector('#img-weather').style.border = '1px solid green';
            //         document.querySelector('#img-weather').style.padding = '10px';
            //         document.querySelector('#img-weather').style.borderRadius  = '50%';
            //         document.querySelector('#img-weather').style.background   = '#74a7ab';
            //         document.querySelector('#img-weather').style.width   = '100px';
            //         document.querySelector('#img-weather').style.height   = '100px';

            //         document.querySelector('#img-weather').setAttribute('src',outside);


            //     })

        })
}

normal();


function getdataFollowPos(datapos) {
    let dataxuly = input[0].value.replaceAll(' ', '%20');

    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + dataxuly + '&appid=79301b378464f8229c8cd05137e2f33d';
    fetch(url)
        .then(function (data) {
            return data.json();
        })
        .then(function (data) {
            weather_place.innerHTML = " " + data.name;
            document.querySelector('#desc').innerHTML = "Description: " + data.weather[0].description;
            document.querySelector('.info-place').innerHTML = data.name;
            let temp = document.querySelector('.temp');
            const nhietdo = Math.round(data.main.temp - 273.15);
            temp.innerHTML = "Temp in " + datapos + ":" + nhietdo + "C";
            document.querySelector('.fell-like').innerHTML = 'Fell Like: ' + Math.round(data.main.feels_like - 273.15) + "C";

            console.log(data);
            let icon = data.weather[0].icon;

            let url_img = 'http://openweathermap.org/img/wn/' + icon + '.png';
            document.querySelector('.temp-max').innerHTML = "Temp max :" + Math.round(data.main.temp_max - 273.15) + "C";
            document.querySelector('.temp-min').innerHTML = "Temp min :" + Math.round(data.main.temp_min - 273.15) + "C";
            fetch(url_img)
                .then(function (response) {
                    return response.blob();
                })
                .then(image => {
                    outside = URL.createObjectURL(image);
                    document.querySelector('#img-weather').style.border = '1px solid green';
                    document.querySelector('#img-weather').style.padding = '10px';
                    document.querySelector('#img-weather').style.borderRadius = '50%';
                    document.querySelector('#img-weather').style.background = '#74a7ab';
                    document.querySelector('#img-weather').style.width = '100px';
                    document.querySelector('#img-weather').style.height = '100px';

                    document.querySelector('#img-weather').setAttribute('src', outside);


                })

        })
        .catch(function (err) {
            alert("Not found your city you want");
        });
}

// function success(pos) {
//     var crd = pos.coords;

//     console.log('Your current position is:');
//     console.log(`Latitude : ${crd.latitude}`);
//     console.log(`Longitude: ${crd.longitude}`);
//     console.log(`More or less ${crd.accuracy} meters.`);
//   }

//   navigator.geolocation.getCurrentPosition(success);





// console.log(promise);









let input = document.getElementsByName('place');
input[0].addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        // console.log(input[0].value);

        getdataFollowPos(input[0].value);

    }
});







