document.getElementById("result").addEventListener("click", function () {
            let countryName = document.getElementById("country").value;
            const countryRequest = new XMLHttpRequest();
            countryRequest.open("GET", `https://restcountries.com/v3.1/name/${countryName}`);
            countryRequest.send();
            countryRequest.onload = function (countryName) {
    document.getElementById("country-detail").style.display = "None"

    showDetails()
            }
    

           function showDetails() {
                const response = JSON.parse(this.responseText);
                document.getElementById("Country_Capital").textContent = response[0].capital[0];
                document.getElementById("Country_Population").textContent = response[0].population;
                showImage(countryName)
            } 
        })
         function showImage(countryName) {
                document.getElementById("img").src = `${countryName}.png`;
                };