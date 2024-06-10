
export function checkErrorInWeatherData(data:unknown) : boolean{
    if(!data) return false;
    if(typeof data !== "object") return false;
    if(data.hasOwnProperty("error")) return true;
    return false;
}