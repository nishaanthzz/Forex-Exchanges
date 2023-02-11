import SearchBar from '../SearchBar/SearchBar';
import './Searchcurr.css';
import { useState } from 'react';
const Searchcurr=()=>
{   const country_list={
    "AFN": "Afghan Afghani",
    "EUR": "Euro",
    "ALL": "Albanian Lek",
    "DZD": "Algerian Dinar",
    "USD": "US Dollar",
    "AOA": "Angolan Kwanza",
    "XCD": "East Caribbean Dollar",
    "ARS": "Argentine Peso",
    "AMD": "Armenian Dram",
    "AWG": "Aruban Florin",
    "AUD": "Australian Dollar",
    "AZN": "Azerbaijani Manat",
    "BSD": "Bahamian Dollar",
    "BHD": "Bahraini Dinar",
    "BDT": "Bangladeshi Taka",
    "BBD": "Barbadian Dollar",
    "BYN": "Belarusian Ruble",
    "BZD": "Belize Dollar",
    "XOF": "West African CFA Franc",
    "BMD": "Bermudan Dollar",
    "BTN": "Bhutanese Ngultrum",
    "BOB": "Bolivian Boliviano",
    "BAM": "Bosnia-Herzegovina Convertible Mark",
    "BWP": "Botswanan Pula",
    "BRL": "Brazilian Real",
    "GBP": "British Pound Sterling",
    "BND": "Brunei Dollar",
    "BGN": "Bulgarian Lev",
    "BIF": "Burundian Franc",
    "CVE": "Cape Verdean Escudo",
    "KHR": "Cambodian Riel",
    "CAD": "Canadian Dollar",
    "KYD": "Cayman Islands Dollar",
    "CLP": "Chilean Peso",
    "CNY": "Chinese Yuan",
    "COP": "Colombian Peso",
    "CDF": "Congolese Franc",
    "NZD": "New Zealand Dollar",
    "CRC": "Costa Rican Colón",
    "HRK": "Croatian Kuna",
    "CUP": "Cuban Peso",
    "CZK": "Czech Republic Koruna",
    "DKK": "Danish Krone",
    "DJF": "Djiboutian Franc",
    "DOP": "Dominican Peso",
    "EGP": "Egyptian Pound",
    "ERN": "Eritrean Nakfa",
    "ETB": "Ethiopian Birr",
    "FJD": "Fijian Dollar",
    "XPF": "CFP Franc",
    "GMD": "Gambian Dalasi",
    "GEL": "Georgian Lari",
    "GHS": "Ghanaian Cedi",
    "GIP": "Gibraltar Pound",
    "GTQ": "Guatemalan Quetzal",
    "GBP": "British Pound Sterling",
    "GNF": "Guinean Franc",
    "GYD": "Guyanaese Dollar",
    "HTG": "Haitian Gourde",
    "HKD": "Hong Kong Dollar",
    "HUF": "Hungarian Forint",
    "ISK": "Icelandic Króna",
    "INR": "Indian Rupee",
    "IDR": "Indonesian Rupiah",
    "IRR": "Iranian Rial",
    "IQD": "Iraqi Dinar",
    "ILS": "Israeli New Shekel",
    "JMD": "Jamaican Dollar",
    "JPY": "Japanese Yen",
    "JOD": "Jordanian Dinar",
    "KZT": "Kazakhstani Tenge",
    "KES": "Kenyan Shilling",
    "KWD": "Kuwaiti Dinar",
    "KGS": "Kyrgyzstani Som",
    "LAK": "Laotian Kip",
    "LBP": "Lebanese Pound",
    "LSL": "Lesotho Loti",
    "LRD": "Liberian Dollar",
    "LYD": "Libyan Dinar",
    "MOP": "Macanese Pataca",
    "MKD": "Macedonian Denar",
    "MGA": "Malagasy Ariary",
    "MWK": "Malawian Kwacha",
    "MYR": "Malaysian Ringgit",
    "MVR": "Maldivian Rufiyaa",
    "MRO": "Mauritanian Ouguiya",
    "MUR": "Mauritian Rupee",
    "MXN": "Mexican Peso",
    "MDL": "Moldovan Leu",
    "MNT": "Mongolian Tugrik",
    "MAD": "Moroccan Dirham",
    "MZN": "Mozambican Metical",
    "MMK": "Myanmar Kyat",
    "NAD": "Namibian Dollar",
    "NPR": "Nepalese Rupee",
    "NIO": "Nicaraguan Córdoba",
    "NGN": "Nigerian Naira",
    "KPW": "North Korean Won",
    "NOK": "Norwegian Krone",
    "OMR": "Omani Rial",
    "PKR": "Pakistani Rupee",
    "PAB": "Panamanian Balboa",
    "PGK": "Papua New Guinean Kina",
    "PYG": "Paraguayan Guarani",
    "PEN": "Peruvian Sol",
    "PHP": "Philippine Piso",
    "PLN": "Polish Zloty",
    "QAR": "Qatari Rial",
    "RON": "Romanian Leu",
    "RUB": "Russian Ruble",
    "RWF": "Rwandan Franc",
    "WST": "Samoan Tala",
    "STN": "São Tomé and Principe Dobra",
    "SAR": "Saudi Arabian Riyal",
    "RSD": "Serbian Dinar",
    "SCR": "Seychellois Rupee",
    "SLL": "Sierra Leonean Leone",
    "SGD": "Singapore Dollar",
    "XSU": "SUCRE",
    "SBD": "Solomon Islands Dollar",
    "SOS": "Somali Shilling",
    "ZAR": "South African Rand",
    "SSP": "South Sudanese Pound",
    "LKR": "Sri Lankan Rupee",
    "SDG": "Sudanese Pound",
    "SRD": "Surinamese Dollar",
    "SZL": "Swazi Lilangeni",
    "SEK": "Swedish Krona",
    "CHF": "Swiss Franc",
    "SYP": "Syrian Pound",
    "TWD": "New Taiwan Dollar",
    "TJS": "Tajikistani Somoni",
    "TZS": "Tanzanian Shilling",
    "THB": "Thai Baht",
    "TOP": "Tongan Pa'anga",
    "TTD": "Trinidad and Tobago Dollar",
    "TND": "Tunisian Dinar",
    "TRY": "Turkish Lira",
    "TMT": "Turkmenistani Manat",
    "UGX": "Ugandan Shilling",
    "UAH": "Ukrainian Hryvnia",
    "AED": "United Arab Emirates Dirham",
    "UYU": "Uruguayan Peso",
    "UZS": "Uzbekistan Som",
    "VUV": "Vanuatu Vatu",
    "VEF": "Venezuelan Bolívar Fuerte",
    "VND": "Vietnamese Dong",
    "YER": "Yemeni Rial",
    "ZMW": "Zambian Kwacha",
    "ZWL": "Zimbabwean Dollar"
}

let options = [
    { key: -1, value: "" },
    { key: 3, value: "" },
    { key: 4, value: "" },
    { key: 6, value: "Hi" },
    {key:7 , value:"Afghani"}
  ];


    for(let i=1;i<country_list.length;i++)
    {
        let obj={
            key: {i}, value: country_list
        }
        options.push(obj);
    }
   
  const [selectedOption, setSelectedOption] = useState("");
    return(
        <div className='search-cont'>
            <h4>From</h4>
            <SearchBar
        options={options}
        onChange={(item) => setSelectedOption(item)}
        selectedKey={selectedOption}
        placeholder={"type to search"}
      />
            <h4>TO </h4>
            <SearchBar
        options={options}
        onChange={(item) => setSelectedOption(item)}
        selectedKey={selectedOption}
        placeholder={"type to search"}
      />
            <button className='clear-btn'> Clear</button>
            
        {/* {showresult && <Result from={from} to={to} />} */}
        </div>
    )
}
export default Searchcurr;
