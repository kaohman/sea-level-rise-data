const stations = [
  {
    "stationId": 9450460,
    "name": "Ketchikan",
    "state": "Alaska",
    "slrRate": -0.37
  },
  {
    "stationId": 9451600,
    "name": "Sitka",
    "state": "Alaska",
    "slrRate": -2.4
  },
  {
    "stationId": 9452210,
    "name": "Juneau",
    "state": "Alaska",
    "slrRate": -13.26
  },
  {
    "stationId": 9452400,
    "name": "Skagway",
    "state": "Alaska",
    "slrRate": -17.81
  },
  {
    "stationId": 9453220,
    "name": "Yakutat",
    "state": "Alaska",
    "slrRate": -14.78
  },
  {
    "stationId": 9454050,
    "name": "Cordova",
    "state": "Alaska",
    "slrRate": -0.39
  },
  {
    "stationId": 9454240,
    "name": "Valdez",
    "state": "Alaska",
    "slrRate": -8.76
  },
  {
    "stationId": 9455090,
    "name": "Seward",
    "state": "Alaska",
    "slrRate": -2.74
  },
  {
    "stationId": 9455500,
    "name": "Seldovia",
    "state": "Alaska",
    "slrRate": -9.94
  },
  {
    "stationId": 9455760,
    "name": "Nikiski",
    "state": "Alaska",
    "slrRate": -10.42
  },
  {
    "stationId": 9455920,
    "name": "Anchorage",
    "state": "Alaska",
    "slrRate": -0.96
  },
  {
    "stationId": 9457292,
    "name": "Kodiak Island",
    "state": "Alaska",
    "slrRate": -9.97
  },
  {
    "stationId": 9459450,
    "name": "Sand Point",
    "state": "Alaska",
    "slrRate": 1.22
  },
  {
    "stationId": 9461380,
    "name": "Adak Island",
    "state": "Alaska",
    "slrRate": -2.63
  },
  {
    "stationId": 9462620,
    "name": "Unalaska",
    "state": "Alaska",
    "slrRate": -4.71
  },
  {
    "stationId": 9463502,
    "name": "Port Moller",
    "state": "Alaska",
    "slrRate": 3.15
  },
  {
    "stationId": 9468756,
    "name": "Nome",
    "state": "Alaska",
    "slrRate": 3.12
  },
  {
    "stationId": 9497645,
    "name": "Prudhoe Bay",
    "state": "Alaska",
    "slrRate": 2.58
  },
  {
    "stationId": 9410170,
    "name": "San Diego",
    "state": "California",
    "slrRate": 2.19
  },
  {
    "stationId": 9410230,
    "name": "La Jolla",
    "state": "California",
    "slrRate": 2.17
  },
  {
    "stationId": 9410580,
    "name": "Newport Beach",
    "state": "California",
    "slrRate": 2.22
  },
  {
    "stationId": 9410660,
    "name": "Los Angeles",
    "state": "California",
    "slrRate": 1.01
  },
  {
    "stationId": 9410840,
    "name": "Santa Monica",
    "state": "California",
    "slrRate": 1.55
  },
  {
    "stationId": 9411270,
    "name": "Rincon Island",
    "state": "California",
    "slrRate": 3.22
  },
  {
    "stationId": 9411340,
    "name": "Santa Barbara",
    "state": "California",
    "slrRate": 1.16
  },
  {
    "stationId": 9412110,
    "name": "Port San Luis",
    "state": "California",
    "slrRate": 0.93
  },
  {
    "stationId": 9413450,
    "name": "Monterey",
    "state": "California",
    "slrRate": 1.57
  },
  {
    "stationId": 9414290,
    "name": "San Francisco",
    "state": "California",
    "slrRate": 1.96
  },
  {
    "stationId": 9414523,
    "name": "Redwood City",
    "state": "California",
    "slrRate": 2.47
  },
  {
    "stationId": 9414750,
    "name": "Alameda",
    "state": "California",
    "slrRate": 0.82
  },
  {
    "stationId": 9415020,
    "name": "Point Reyes",
    "state": "California",
    "slrRate": 2.12
  },
  {
    "stationId": 9415144,
    "name": "Port Chicago",
    "state": "California",
    "slrRate": 1.98
  },
  {
    "stationId": 9416841,
    "name": "Arena Cove",
    "state": "California",
    "slrRate": 0.82
  },
  {
    "stationId": 9418767,
    "name": "North Spit",
    "state": "California",
    "slrRate": 4.87
  },
  {
    "stationId": 9419750,
    "name": "Crescent City",
    "state": "California",
    "slrRate": -0.78
  },
  {
    "stationId": 1611400,
    "name": "Nawiliwili",
    "state": "Hawaii",
    "slrRate": 1.67
  },
  {
    "stationId": 1612340,
    "name": "Honolulu",
    "state": "Hawaii",
    "slrRate": 1.49
  },
  {
    "stationId": 1612480,
    "name": "Mokuoloe",
    "state": "Hawaii",
    "slrRate": 1.45
  },
  {
    "stationId": 1615680,
    "name": "Kahului",
    "state": "Hawaii",
    "slrRate": 2.18
  },
  {
    "stationId": 1617760,
    "name": "Hilo",
    "state": "Hawaii",
    "slrRate": 3.08
  },
  {
    "stationId": 9431647,
    "name": "Port Orford",
    "state": "Oregon",
    "slrRate": 0.09
  },
  {
    "stationId": 9432780,
    "name": "Charleston",
    "state": "Oregon",
    "slrRate": 1.1
  },
  {
    "stationId": 9435380,
    "name": "South Beach",
    "state": "Oregon",
    "slrRate": 1.72
  },
  {
    "stationId": 9437540,
    "name": "Garibaldi",
    "state": "Oregon",
    "slrRate": 2.58
  },
  {
    "stationId": 9439011,
    "name": "Hammond",
    "state": "Oregon",
    "slrRate": -1.22
  },
  {
    "stationId": 9439040,
    "name": "Astoria",
    "state": "Oregon",
    "slrRate": -0.15
  },
  {
    "stationId": 9440910,
    "name": "Toke Point",
    "state": "Washington",
    "slrRate": 0.43
  },
  {
    "stationId": 9443090,
    "name": "Neah Bay",
    "state": "Washington",
    "slrRate": -1.71
  },
  {
    "stationId": 9444090,
    "name": "Port Angeles",
    "state": "Washington",
    "slrRate": 0.42
  },
  {
    "stationId": 9444900,
    "name": "Port Townsend",
    "state": "Washington",
    "slrRate": 1.94
  },
  {
    "stationId": 9447130,
    "name": "Seattle",
    "state": "Washington",
    "slrRate": 2.06
  },
  {
    "stationId": 9449424,
    "name": "Cherry Point",
    "state": "Washington",
    "slrRate": 0.45
  },
  {
    "stationId": 9449880,
    "name": "Friday Harbor",
    "state": "Washington",
    "slrRate": 1.2
  },
  {
    "stationId": 8735180,
    "name": "Dauphin Island",
    "state": "Alabama",
    "slrRate": 3.74
  },
  {
    "stationId": 8737048,
    "name": "Mobile State Docks",
    "state": "Alabama",
    "slrRate": 3.85
  },
  {
    "stationId": 8720030,
    "name": "Fernandina Beach",
    "state": "Florida",
    "slrRate": 2.11
  },
  {
    "stationId": 8720218,
    "name": "Mayport",
    "state": "Florida",
    "slrRate": 2.62
  },
  {
    "stationId": 8721120,
    "name": "Daytona Beach",
    "state": "Florida",
    "slrRate": 2.32
  },
  {
    "stationId": 8722670,
    "name": "Lake Worth Pier",
    "state": "Florida",
    "slrRate": 3.54
  },
  {
    "stationId": 8723170,
    "name": "Miami Beach",
    "state": "Florida",
    "slrRate": 2.39
  },
  {
    "stationId": 8723970,
    "name": "Vaca Key",
    "state": "Florida",
    "slrRate": 3.66
  },
  {
    "stationId": 8724580,
    "name": "Key West",
    "state": "Florida",
    "slrRate": 2.42
  },
  {
    "stationId": 8725110,
    "name": "Naples",
    "state": "Florida",
    "slrRate": 2.85
  },
  {
    "stationId": 8725520,
    "name": "Fort Myers",
    "state": "Florida",
    "slrRate": 3.11
  },
  {
    "stationId": 8726520,
    "name": "St. Petersburg",
    "state": "Florida",
    "slrRate": 2.78
  },
  {
    "stationId": 8726724,
    "name": "Clearwater Beach",
    "state": "Florida",
    "slrRate": 3.68
  },
  {
    "stationId": 8727520,
    "name": "Cedar Key",
    "state": "Florida",
    "slrRate": 2.13
  },
  {
    "stationId": 8728690,
    "name": "Apalachicola",
    "state": "Florida",
    "slrRate": 2.38
  },
  {
    "stationId": 8729108,
    "name": "Panama City",
    "state": "Florida",
    "slrRate": 2.43
  },
  {
    "stationId": 8729840,
    "name": "Pensacola",
    "state": "Florida",
    "slrRate": 2.4
  },
  {
    "stationId": 8761724,
    "name": "Grand Isle",
    "state": "Louisiana",
    "slrRate": 9.08
  },
  {
    "stationId": 8761927,
    "name": "New Canal",
    "state": "Louisiana",
    "slrRate": 5.35
  },
  {
    "stationId": 8764311,
    "name": "Eugene Island",
    "state": "Louisiana",
    "slrRate": 9.65
  },
  {
    "stationId": 8747437,
    "name": "Bay Waveland",
    "state": "Mississippi",
    "slrRate": 4.64
  },
  {
    "stationId": 8770570,
    "name": "Sabine Pass",
    "state": "Texas",
    "slrRate": 5.86
  },
  {
    "stationId": 8771450,
    "name": "Galveston Pier 21",
    "state": "Texas",
    "slrRate": 6.51
  },
  {
    "stationId": 8771510,
    "name": "Galveston Pleasure Pier",
    "state": "Texas",
    "slrRate": 6.62
  },
  {
    "stationId": 8772440,
    "name": "Freeport",
    "state": "Texas",
    "slrRate": 4.43
  },
  {
    "stationId": 8774770,
    "name": "Rockport",
    "state": "Texas",
    "slrRate": 5.62
  },
  {
    "stationId": 8775870,
    "name": "Corpus Christi",
    "state": "Texas",
    "slrRate": 4.65
  },
  {
    "stationId": 8778490,
    "name": "Port Mansfield",
    "state": "Texas",
    "slrRate": 3.19
  },
  {
    "stationId": 8779750,
    "name": "Padre Island",
    "state": "Texas",
    "slrRate": 3.48
  },
  {
    "stationId": 8779770,
    "name": "Port Isabel",
    "state": "Texas",
    "slrRate": 4
  },
  {
    "stationId": 8594900,
    "name": "Washington",
    "state": "District of Columbia",
    "slrRate": 3.33
  },
  {
    "stationId": 8670870,
    "name": "Fort Pulaski",
    "state": "Georgia",
    "slrRate": 3.25
  },
  {
    "stationId": 8570283,
    "name": "Ocean City",
    "state": "Maryland",
    "slrRate": 5.71
  },
  {
    "stationId": 8571892,
    "name": "Cambridge",
    "state": "Maryland",
    "slrRate": 3.77
  },
  {
    "stationId": 8573364,
    "name": "Tolchester Beach",
    "state": "Maryland",
    "slrRate": 3.29
  },
  {
    "stationId": 8573927,
    "name": "Chesapeake City",
    "state": "Maryland",
    "slrRate": 3.95
  },
  {
    "stationId": 8574680,
    "name": "Baltimore",
    "state": "Maryland",
    "slrRate": 3.17
  },
  {
    "stationId": 8575512,
    "name": "Annapolis",
    "state": "Maryland",
    "slrRate": 3.61
  },
  {
    "stationId": 8577330,
    "name": "Solomons Island",
    "state": "Maryland",
    "slrRate": 3.82
  },
  {
    "stationId": 8651370,
    "name": "Duck",
    "state": "North Carolina",
    "slrRate": 4.62
  },
  {
    "stationId": 8652587,
    "name": "Oregon Inlet Marina",
    "state": "North Carolina",
    "slrRate": 4.69
  },
  {
    "stationId": 8656483,
    "name": "Beaufort",
    "state": "North Carolina",
    "slrRate": 3.1
  },
  {
    "stationId": 8658120,
    "name": "Wilmington",
    "state": "North Carolina",
    "slrRate": 2.39
  },
  {
    "stationId": 8659084,
    "name": "Southport",
    "state": "North Carolina",
    "slrRate": 2.01
  },
  {
    "stationId": 8661070,
    "name": "Springmaid Pier",
    "state": "South Carolina",
    "slrRate": 3.87
  },
  {
    "stationId": 8665530,
    "name": "Charleston",
    "state": "South Carolina",
    "slrRate": 1.1
  },
  {
    "stationId": 8631044,
    "name": "Wachapreague",
    "state": "Virginia",
    "slrRate": 5.37
  },
  {
    "stationId": 8632200,
    "name": "Kiptopeke",
    "state": "Virginia",
    "slrRate": 3.69
  },
  {
    "stationId": 8635150,
    "name": "Colonial Beach",
    "state": "Virginia",
    "slrRate": 4.89
  },
  {
    "stationId": 8635750,
    "name": "Lewisetta",
    "state": "Virginia",
    "slrRate": 5.38
  },
  {
    "stationId": 8637624,
    "name": "Gloucester Point",
    "state": "Virginia",
    "slrRate": 3.81
  },
  {
    "stationId": 8638610,
    "name": "Sewells Point",
    "state": "Virginia",
    "slrRate": 4.66
  },
  {
    "stationId": 8638660,
    "name": "Portsmouth",
    "state": "Virginia",
    "slrRate": 3.76
  },
  {
    "stationId": 8638863,
    "name": "Chesapeake Bay Bridge Tunnel",
    "state": "Virginia",
    "slrRate": 5.92
  },
  {
    "stationId": 8461490,
    "name": "New London",
    "state": "Connecticut",
    "slrRate": 2.65
  },
  {
    "stationId": 8467150,
    "name": "Bridgeport",
    "state": "Connecticut",
    "slrRate": 2.93
  },
  {
    "stationId": 8551910,
    "name": "Reedy Point",
    "state": "Delaware",
    "slrRate": 3.6
  },
  {
    "stationId": 8557380,
    "name": "Lewes",
    "state": "Delaware",
    "slrRate": 3.48
  },
  {
    "stationId": 8410140,
    "name": "Eastport",
    "state": "Maine",
    "slrRate": 2.14
  },
  {
    "stationId": 8411250,
    "name": "Cutler",
    "state": "Maine",
    "slrRate": 2.34
  },
  {
    "stationId": 8413320,
    "name": "Bar Harbor",
    "state": "Maine",
    "slrRate": 2.22
  },
  {
    "stationId": 8418150,
    "name": "Portland",
    "state": "Maine",
    "slrRate": 1.88
  },
  {
    "stationId": 8419870,
    "name": "Seavey Island",
    "state": "Maine",
    "slrRate": 1.76
  },
  {
    "stationId": 8443970,
    "name": "Boston",
    "state": "Massachusetts",
    "slrRate": 2.83
  },
  {
    "stationId": 8447930,
    "name": "Woods Hole",
    "state": "Massachusetts",
    "slrRate": 2.88
  },
  {
    "stationId": 8449130,
    "name": "Nantucket Island",
    "state": "Massachusetts",
    "slrRate": 3.68
  },
  {
    "stationId": 8531680,
    "name": "Sandy Hook",
    "state": "New Jersey",
    "slrRate": 4.09
  },
  {
    "stationId": 8534720,
    "name": "Atlantic City",
    "state": "New Jersey",
    "slrRate": 4.09
  },
  {
    "stationId": 8536110,
    "name": "Cape May",
    "state": "New Jersey",
    "slrRate": 4.63
  },
  {
    "stationId": 8510560,
    "name": "Montauk",
    "state": "New York",
    "slrRate": 3.32
  },
  {
    "stationId": 8514560,
    "name": "Port Jefferson",
    "state": "New York",
    "slrRate": 2.44
  },
  {
    "stationId": 8516945,
    "name": "Kings Point",
    "state": "New York",
    "slrRate": 2.54
  },
  {
    "stationId": 8518750,
    "name": "The Battery",
    "state": "New York",
    "slrRate": 2.85
  },
  {
    "stationId": 8519483,
    "name": "Bergen Point",
    "state": "New York",
    "slrRate": 4.3
  },
  {
    "stationId": 8545240,
    "name": "Philadelphia",
    "state": "Pennsylvania",
    "slrRate": 2.98
  },
  {
    "stationId": 8452660,
    "name": "Newport",
    "state": "Rhode Island",
    "slrRate": 2.77
  },
  {
    "stationId": 8454000,
    "name": "Providence",
    "state": "Rhode Island",
    "slrRate": 2.27
  },
  {
    "stationId": 1630000,
    "name": "Apra Harbor",
    "state": "Guam",
    "slrRate": 3.68
  },
  {
    "stationId": 1770000,
    "name": "Pago Pago",
    "state": "American Samoa",
    "slrRate": 2.21
  },
  {
    "stationId": 1619910,
    "name": "Midway Atoll",
    "state": "Midway Atoll",
    "slrRate": 1.38
  },
  {
    "stationId": 9755371,
    "name": "San Juan",
    "state": "Puerto Rico",
    "slrRate": 2.04
  },
  {
    "stationId": 9759110,
    "name": "Magueyes Island",
    "state": "Puerto Rico",
    "slrRate": 1.82
  },
  {
    "stationId": 9751639,
    "name": "Charlotte Amalie",
    "state": "Virgin Islands",
    "slrRate": 2.06
  },
  {
    "stationId": 9751401,
    "name": "Lime Tree Bay",
    "state": "Virgin Islands",
    "slrRate": 2.5
  },
  {
    "stationId": 1619000,
    "name": "Johnston Atoll",
    "state": "Johnston Atoll",
    "slrRate": 0.75
  }
]

module.exports = stations;