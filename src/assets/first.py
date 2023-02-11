import requests

url = "https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest"

querystring = {"from":"USD","to":"EUR,GBP"}

headers = {
	"X-RapidAPI-Key": "760df516a6msh6015b517babe730p13b812jsn4efa1e60a8d4",
	"X-RapidAPI-Host": "currency-conversion-and-exchange-rates.p.rapidapi.com"
}

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)