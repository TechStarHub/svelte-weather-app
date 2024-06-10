
import { API_KEY } from "$env/static/private";

export async function load({ params, cookies }) {
    // const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=London&aqi=no`);
    // const data = await res.json();
    let lat = cookies.get("lat");
    let lon = cookies.get("lon");

    if(!lat && !lon && lat?.trim() === "" && lon?.trim() === "" && lat!==undefined && lon!==undefined) {
        console.log("No lat and lon");
        lat = "51.52";
        lon = "-0.11";
    }

    const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${lat},${lon}&aqi=no`);
    const data = await res.json();

    console.log(data);

    // const data = {
    //     "location": {
    //         "name": "London",
    //         "region": "City of London, Greater London",
    //         "country": "United Kingdom",
    //         "lat": 51.52,
    //         "lon": -0.11,
    //         "tz_id": "Europe/London",
    //         "localtime_epoch": 1709624007,
    //         "localtime": "2024-03-05 7:33"
    //     },
    //     "current": {
    //         "last_updated_epoch": 1709623800,
    //         "last_updated": "2024-03-05 07:30",
    //         "temp_c": 7.0,
    //         "temp_f": 44.6,
    //         "is_day": 1,
    //         "condition": {
    //             "text": "Partly cloudy",
    //             "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
    //             "code": 1003
    //         },
    //         "wind_mph": 4.3,
    //         "wind_kph": 6.8,
    //         "wind_degree": 100,
    //         "wind_dir": "E",
    //         "pressure_mb": 1010.0,
    //         "pressure_in": 29.83,
    //         "precip_mm": 0.04,
    //         "precip_in": 0.0,
    //         "humidity": 93,
    //         "cloud": 75,
    //         "feelslike_c": 6.9,
    //         "feelslike_f": 44.5,
    //         "vis_km": 10.0,
    //         "vis_miles": 6.0,
    //         "uv": 2.0,
    //         "gust_mph": 8.7,
    //         "gust_kph": 14.0
    //     }
    // }
    return { props: { data } };
}