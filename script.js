let timeDisplay= document.getElementById("time");
let dayDisplay = document.getElementById("day");
let fullDateDisplay = document.getElementById("full-date");
let timeDifference = document.getElementById("time-differences");
let allTimeZones = Intl.supportedValuesOf("timeZone");
console.log(allTimeZones);

let countries = [
    {name:"India", flag:"🇮🇳", zone:"Asia/Kolkata"},
    {name:"Japan", flag:"🇯🇵", zone:"Asia/Tokyo"},
    {name:"China", flag:"🇨🇳", zone:"Asia/Shanghai"},
    {name:"South Korea", flag:"🇰🇷", zone:"Asia/Seoul"},
    {name:"Singapore", flag:"🇸🇬", zone:"Asia/Singapore"},
    {name:"Thailand", flag:"🇹🇭", zone:"Asia/Bangkok"},
    {name:"Indonesia", flag:"🇮🇩", zone:"Asia/Jakarta"},
    {name:"Malaysia", flag:"🇲🇾", zone:"Asia/Kuala_Lumpur"},
    {name:"Philippines", flag:"🇵🇭", zone:"Asia/Manila"},
    {name:"Vietnam", flag:"🇻🇳", zone:"Asia/Ho_Chi_Minh"},
    {name:"Pakistan", flag:"🇵🇰", zone:"Asia/Karachi"},
    {name:"Bangladesh", flag:"🇧🇩", zone:"Asia/Dhaka"},
    {name:"Sri Lanka", flag:"🇱🇰", zone:"Asia/Colombo"},
    {name:"Nepal", flag:"🇳🇵", zone:"Asia/Kathmandu"},
    {name:"United Arab Emirates", flag:"🇦🇪", zone:"Asia/Dubai"},
    {name:"Saudi Arabia", flag:"🇸🇦", zone:"Asia/Riyadh"},
    {name:"Qatar", flag:"🇶🇦", zone:"Asia/Qatar"},
    {name:"Israel", flag:"🇮🇱", zone:"Asia/Jerusalem"},
    {name:"Turkey", flag:"🇹🇷", zone:"Europe/Istanbul"},
    {name:"Russia", flag:"🇷🇺", zone:"Europe/Moscow"},
    {name:"United Kingdom", flag:"🇬🇧", zone:"Europe/London"},
    {name:"Germany", flag:"🇩🇪", zone:"Europe/Berlin"},
    {name:"France", flag:"🇫🇷", zone:"Europe/Paris"},
    {name:"Italy", flag:"🇮🇹", zone:"Europe/Rome"},
    {name:"Spain", flag:"🇪🇸", zone:"Europe/Madrid"},
    {name:"Portugal", flag:"🇵🇹", zone:"Europe/Lisbon"},
    {name:"Netherlands", flag:"🇳🇱", zone:"Europe/Amsterdam"},
    {name:"Belgium", flag:"🇧🇪", zone:"Europe/Brussels"},
    {name:"Switzerland", flag:"🇨🇭", zone:"Europe/Zurich"},
    {name:"Austria", flag:"🇦🇹", zone:"Europe/Vienna"},
    {name:"Sweden", flag:"🇸🇪", zone:"Europe/Stockholm"},
    {name:"Norway", flag:"🇳🇴", zone:"Europe/Oslo"},
    {name:"Denmark", flag:"🇩🇰", zone:"Europe/Copenhagen"},
    {name:"Finland", flag:"🇫🇮", zone:"Europe/Helsinki"},
    {name:"Poland", flag:"🇵🇱", zone:"Europe/Warsaw"},
    {name:"Greece", flag:"🇬🇷", zone:"Europe/Athens"},
    {name:"Ireland", flag:"🇮🇪", zone:"Europe/Dublin"},
    {name:"Czech Republic", flag:"🇨🇿", zone:"Europe/Prague"},
    {name:"Hungary", flag:"🇭🇺", zone:"Europe/Budapest"},
    {name:"Romania", flag:"🇷🇴", zone:"Europe/Bucharest"},
    {name:"Ukraine", flag:"🇺🇦", zone:"Europe/Kyiv"},
    {name:"Croatia", flag:"🇭🇷", zone:"Europe/Zagreb"},
    {name:"Serbia", flag:"🇷🇸", zone:"Europe/Belgrade"},
    {name:"Bulgaria", flag:"🇧🇬", zone:"Europe/Sofia"},
    {name:"Iceland", flag:"🇮🇸", zone:"Atlantic/Reykjavik"},
    {name:"United States", flag:"🇺🇸", zone:"America/New_York"},
    {name:"Canada", flag:"🇨🇦", zone:"America/Toronto"},
    {name:"Mexico", flag:"🇲🇽", zone:"America/Mexico_City"},

    {name:"Brazil", flag:"🇧🇷", zone:"America/Sao_Paulo"},
    {name:"Argentina", flag:"🇦🇷", zone:"America/Argentina/Buenos_Aires"},
    {name:"Chile", flag:"🇨🇱", zone:"America/Santiago"},
    {name:"Colombia", flag:"🇨🇴", zone:"America/Bogota"},
    {name:"Peru", flag:"🇵🇪", zone:"America/Lima"},
    {name:"Venezuela", flag:"🇻🇪", zone:"America/Caracas"},
    {name:"Ecuador", flag:"🇪🇨", zone:"America/Guayaquil"},
    {name:"Uruguay", flag:"🇺🇾", zone:"America/Montevideo"},
    {name:"Paraguay", flag:"🇵🇾", zone:"America/Asuncion"},
    {name:"Bolivia", flag:"🇧🇴", zone:"America/La_Paz"},
    {name:"Guyana", flag:"🇬🇾", zone:"America/Guyana"},
    {name:"Suriname", flag:"🇸🇷", zone:"America/Paramaribo"},{name:"Costa Rica", flag:"🇨🇷", zone:"America/Costa_Rica"},
    {name:"Panama", flag:"🇵🇦", zone:"America/Panama"},
    {name:"Guatemala", flag:"🇬🇹", zone:"America/Guatemala"},
    {name:"Honduras", flag:"🇭🇳", zone:"America/Tegucigalpa"},
    {name:"El Salvador", flag:"🇸🇻", zone:"America/El_Salvador"},
    {name:"Nicaragua", flag:"🇳🇮", zone:"America/Managua"},
    {name:"Cuba", flag:"🇨🇺", zone:"America/Havana"},
    {name:"Dominican Republic", flag:"🇩🇴", zone:"America/Santo_Domingo"},
    {name:"Puerto Rico", flag:"🇵🇷", zone:"America/Puerto_Rico"},
    {name:"South Africa", flag:"🇿🇦", zone:"Africa/Johannesburg"},{name:"Egypt", flag:"🇪🇬", zone:"Africa/Cairo"},
    {name:"Nigeria", flag:"🇳🇬", zone:"Africa/Lagos"},
{name:"Kenya", flag:"🇰🇪", zone:"Africa/Nairobi"},
{name:"Ethiopia", flag:"🇪🇹", zone:"Africa/Addis_Ababa"},
{name:"Ghana", flag:"🇬🇭", zone:"Africa/Accra"},
{name:"Morocco", flag:"🇲🇦", zone:"Africa/Casablanca"},
{name:"Algeria", flag:"🇩🇿", zone:"Africa/Algiers"},
{name:"Tunisia", flag:"🇹🇳", zone:"Africa/Tunis"},
{name:"Libya", flag:"🇱🇾", zone:"Africa/Tripoli"},
{name:"Sudan", flag:"🇸🇩", zone:"Africa/Khartoum"},
{name:"Tanzania", flag:"🇹🇿", zone:"Africa/Dar_es_Salaam"},
{name:"Uganda", flag:"🇺🇬", zone:"Africa/Kampala"},
{name:"Rwanda", flag:"🇷🇼", zone:"Africa/Kigali"},
{name:"Somalia", flag:"🇸🇴", zone:"Africa/Mogadishu"},
{name:"Senegal", flag:"🇸🇳", zone:"Africa/Dakar"},
{name:"Ivory Coast", flag:"🇨🇮", zone:"Africa/Abidjan"},
{name:"Cameroon", flag:"🇨🇲", zone:"Africa/Douala"},
{name:"Democratic Republic of Congo", flag:"🇨🇩", zone:"Africa/Kinshasa"},
{name:"Angola", flag:"🇦🇴", zone:"Africa/Luanda"},
{name:"Mozambique", flag:"🇲🇿", zone:"Africa/Maputo"},
{name:"Zambia", flag:"🇿🇲", zone:"Africa/Lusaka"},
{name:"Zimbabwe", flag:"🇿🇼", zone:"Africa/Harare"},
{name:"Botswana", flag:"🇧🇼", zone:"Africa/Gaborone"},
{name:"Namibia", flag:"🇳🇦", zone:"Africa/Windhoek"},
{name:"Madagascar", flag:"🇲🇬", zone:"Indian/Antananarivo"},
{name:"Mauritius", flag:"🇲🇺", zone:"Indian/Mauritius"},
{name:"Malawi", flag:"🇲🇼", zone:"Africa/Blantyre"},
{name:"Mali", flag:"🇲🇱", zone:"Africa/Bamako"},
{name:"Burkina Faso", flag:"🇧🇫", zone:"Africa/Ouagadougou"},
{name:"Niger", flag:"🇳🇪", zone:"Africa/Niamey"},
{name:"Chad", flag:"🇹🇩", zone:"Africa/Ndjamena"},
{name:"Guinea", flag:"🇬🇳", zone:"Africa/Conakry"},
{name:"Sierra Leone", flag:"🇸🇱", zone:"Africa/Freetown"},
{name:"Liberia", flag:"🇱🇷", zone:"Africa/Monrovia"},
{name:"Togo", flag:"🇹🇬", zone:"Africa/Lome"},
{name:"Benin", flag:"🇧🇯", zone:"Africa/Porto-Novo"},
{name:"Gabon", flag:"🇬🇦", zone:"Africa/Libreville"},
{name:"Congo", flag:"🇨🇬", zone:"Africa/Brazzaville"},
{name:"Central African Republic", flag:"🇨🇫", zone:"Africa/Bangui"},
{name:"Equatorial Guinea", flag:"🇬🇶", zone:"Africa/Malabo"},
{name:"Australia", flag:"🇦🇺", zone:"Australia/Sydney"},
{name:"New Zealand", flag:"🇳🇿", zone:"Pacific/Auckland"},
{name:"Fiji", flag:"🇫🇯", zone:"Pacific/Fiji"},
{name:"Papua New Guinea", flag:"🇵🇬", zone:"Pacific/Port_Moresby"},
{name:"Samoa", flag:"🇼🇸", zone:"Pacific/Apia"},
{name:"Tonga", flag:"🇹🇴", zone:"Pacific/Tongatapu"},
{name:"Vanuatu", flag:"🇻🇺", zone:"Pacific/Efate"},
{name:"Solomon Islands", flag:"🇸🇧", zone:"Pacific/Guadalcanal"},
{name:"Kiribati", flag:"🇰🇮", zone:"Pacific/Tarawa"},
{name:"Micronesia", flag:"🇫🇲", zone:"Pacific/Pohnpei"},
{name:"Palau", flag:"🇵🇼", zone:"Pacific/Palau"},
{name:"Marshall Islands", flag:"🇲🇭", zone:"Pacific/Majuro"},
{name:"Nauru", flag:"🇳🇷", zone:"Pacific/Nauru"},
{name:"Tuvalu", flag:"🇹🇻", zone:"Pacific/Funafuti"}
];
// sorting the country:
countries.sort((a,b)=>{
    return a.name.localeCompare(b.name);
});

function populateCountries(selectElement){
    countries.forEach(function(country){

        let option = document.createElement("option");

        option.value = country.zone;
        option.textContent = `${country.flag} ${country.name}`;

        selectElement.appendChild(option);

    });

}

let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];



let months =[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

function updateTime(){
    let currentTime= new Date();
let hours = currentTime.getHours().toString().padStart(2, "0");
let minutes = currentTime.getMinutes().toString().padStart(2, "0");
let seconds = currentTime.getSeconds().toString().padStart(2, "0");
timeDisplay.innerText=hours + ":" + minutes + ":" + seconds ;

}
updateTime();
setInterval(updateTime,1000);

let dateDisplay= document.getElementById("date");
function updateDate(){
    let currentTime=new Date();
let day = days[currentTime.getDay()];

let date = currentTime.getDate();

let month =months[ currentTime.getMonth()];

let year = currentTime.getFullYear();

dayDisplay.innerText = day;
fullDateDisplay.innerText = `${date} ${month}, ${year}`;
}
updateDate();

let country1=document.getElementById("country1")
let country2=document.getElementById("country2")
populateCountries(country1);
populateCountries(country2);
let country2Time=document.getElementById("country2-time")
let country1Time=document.getElementById("country1-time")

function getCountryTime(timeZone){
    let formatter= new Intl.DateTimeFormat("en-IN",{
        timeZone: timeZone,
        hour:"2-digit",
        minute:"2-digit",
        second:"2-digit"
    });
    let currentTime=new Date();
    return formatter.format(currentTime);
}

function updateCountry1Time(){
    
    if(country1.value === "") return;

    country1Time.innerText = getCountryTime(country1.value);

}
country1.addEventListener("change", function(){

    updateCountry1Time();
    updateTimeDifference();

});

setInterval(updateCountry1Time,1000);

function updateCountry2Time(){
    if(country2.value === "") return;

    country2Time.innerText = getCountryTime(country2.value);

}
country2.addEventListener("change", function(){

    updateCountry2Time();
    updateTimeDifference();

});

setInterval(updateCountry2Time,1000);

function getUTCOffset(timeZone){

    let formatter = new Intl.DateTimeFormat("en-US",{

        timeZone: timeZone,
        timeZoneName: "longOffset"

    });
     let result = formatter.format(new Date());

    let offset = result.split(", ")[1];
    offset = offset.slice(3);
    
    let parts = offset.split(":");
    let hours = Number(parts[0]);
    let minutes = Number(parts[1]);
    // condition agr hmare time negative aajae to:
    if (hours >= 0) {
    offset = hours + (minutes / 60);
    } else {
    offset = hours - (minutes / 60);
    }
    return offset;
   

}

function updateTimeDifference() {

    if (country1.value === "" || country2.value === "") {
        timeDifference.innerText = "--";
        return;
    }

    let offset1 = getUTCOffset(country1.value);
    let offset2 = getUTCOffset(country2.value);

    let difference = offset2 - offset1;

    let sign = difference >= 0 ? "+" : "-";

    let absDifference = Math.abs(difference);

    let hours = Math.floor(absDifference);

    let minutes = (absDifference - hours) * 60;

    let countryName1 = country1.options[country1.selectedIndex].text;
    let countryName2 = country2.options[country2.selectedIndex].text;

    if (difference > 0) {

        timeDifference.innerText =
        `${countryName2} is ahead of ${countryName1}\n(+${hours} Hours ${minutes} Minutes)`;

    }
    else if (difference < 0) {

        timeDifference.innerText =
        `${countryName2} is behind ${countryName1}\n(${sign}${hours} Hours ${minutes} Minutes)`;

    }
    else {

        timeDifference.innerText =
        `${countryName1} and ${countryName2}\nhave the same time`;

    }

}
updateTimeDifference();
setInterval(updateTimeDifference, 1000);

$(document).ready(function(){

    $('#country1').select2();
    $('#country2').select2();

});