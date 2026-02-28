var APP_DATA = {
  "scenes": [
    {
      "id": "0-front-yard",
      "name": "Front Yard",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.007391821778872654,
          "pitch": 0.02354285126856226,
          "rotation": 0,
          "target": "1-front-entrance"
        },
        {
          "yaw": 1.0033181705720189,
          "pitch": -0.060206322419652736,
          "rotation": 4.71238898038469,
          "target": "2-side-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-front-entrance",
      "name": "Front Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.004087427219644724,
          "pitch": 0.15009587938095592,
          "rotation": 0,
          "target": "3-foyer"
        },
        {
          "yaw": 3.1348939972860883,
          "pitch": 0.3926444239475284,
          "rotation": 0,
          "target": "0-front-yard"
        },
        {
          "yaw": 1.8430340135009677,
          "pitch": 0.15182409858057788,
          "rotation": 4.71238898038469,
          "target": "2-side-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-side-entrance",
      "name": "Side Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.5481144095774262,
        "pitch": -0.07870496535166538,
        "fov": 1.5557563129705874
      },
      "linkHotspots": [
        {
          "yaw": -1.4896551753881706,
          "pitch": 0.17539787496514236,
          "rotation": 0,
          "target": "4-side-foyer"
        },
        {
          "yaw": -2.9274820607118333,
          "pitch": 0.08610726533875024,
          "rotation": 1.5707963267948966,
          "target": "0-front-yard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-foyer",
      "name": "Foyer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5557563129705874
      },
      "linkHotspots": [
        {
          "yaw": 0.03429813156826178,
          "pitch": 0.4292950163846765,
          "rotation": 0,
          "target": "5-dining-room"
        },
        {
          "yaw": 0.8478743221757004,
          "pitch": 0.4628121263529472,
          "rotation": 3.141592653589793,
          "target": "27-stairwayfoyer"
        },
        {
          "yaw": 0.9864699146605016,
          "pitch": -0.007068201605793689,
          "rotation": 1.5707963267948966,
          "target": "4-side-foyer"
        },
        {
          "yaw": -1.5149053346944097,
          "pitch": 0.706781439726889,
          "rotation": 0,
          "target": "8-living-roomfoyer"
        },
        {
          "yaw": 3.1372304712628836,
          "pitch": 0.3673290783060619,
          "rotation": 0,
          "target": "1-front-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-side-foyer",
      "name": "Side Foyer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.5874130649921838,
        "pitch": 0.1796352485772008,
        "fov": 1.5557563129705874
      },
      "linkHotspots": [
        {
          "yaw": 1.6834352016956595,
          "pitch": 0.38213965247049053,
          "rotation": 0,
          "target": "2-side-entrance"
        },
        {
          "yaw": -1.4669276530651647,
          "pitch": 0.6654314946694342,
          "rotation": 9.42477796076938,
          "target": "27-stairwayfoyer"
        },
        {
          "yaw": -1.386581780087468,
          "pitch": 0.3264378193187891,
          "rotation": 7.853981633974483,
          "target": "5-dining-room"
        },
        {
          "yaw": -1.671441298094127,
          "pitch": 0.33245577346211874,
          "rotation": 4.71238898038469,
          "target": "3-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-dining-room",
      "name": "Dining Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.4384816962138949,
        "pitch": -0.027435536639526248,
        "fov": 1.5557563129705874
      },
      "linkHotspots": [
        {
          "yaw": 0.3017162494903012,
          "pitch": -0.02467052443987683,
          "rotation": 1.5707963267948966,
          "target": "19-kitchendining-room"
        },
        {
          "yaw": 0.1609422531402327,
          "pitch": 0.505592688934442,
          "rotation": 3.141592653589793,
          "target": "6-dining-room"
        },
        {
          "yaw": -0.22669515236349191,
          "pitch": 0.29550409937525757,
          "rotation": 3.141592653589793,
          "target": "7-dining-roomgallery"
        },
        {
          "yaw": -1.105143750099021,
          "pitch": 0.242262574021483,
          "rotation": 6.283185307179586,
          "target": "12-parlordining-room"
        },
        {
          "yaw": -0.2651918926411412,
          "pitch": 0.14997929216109895,
          "rotation": 6.283185307179586,
          "target": "13-gallerydining-room"
        },
        {
          "yaw": 2.0003348150503237,
          "pitch": 0.606053780058252,
          "rotation": 3.141592653589793,
          "target": "27-stairwayfoyer"
        },
        {
          "yaw": 1.7838980764921297,
          "pitch": 0.333829293168618,
          "rotation": 3.141592653589793,
          "target": "4-side-foyer"
        },
        {
          "yaw": 1.764375554705313,
          "pitch": 0.08169728871020787,
          "rotation": 0,
          "target": "2-side-entrance"
        },
        {
          "yaw": 3.1035095839745157,
          "pitch": 0.4182237668660438,
          "rotation": 3.141592653589793,
          "target": "3-foyer"
        },
        {
          "yaw": -2.6959772740758723,
          "pitch": 0.4058037067568545,
          "rotation": 1.5707963267948966,
          "target": "8-living-roomfoyer"
        },
        {
          "yaw": 3.108356255361043,
          "pitch": 0.13034606749332234,
          "rotation": 0,
          "target": "1-front-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-dining-room",
      "name": "Dining Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.5751943549717637,
        "pitch": -0.03412962706312683,
        "fov": 1.5557563129705874
      },
      "linkHotspots": [
        {
          "yaw": -0.5712001340037887,
          "pitch": 0.47419401584616416,
          "rotation": 3.141592653589793,
          "target": "7-dining-roomgallery"
        },
        {
          "yaw": -0.4750262565833445,
          "pitch": 0.33470507011615425,
          "rotation": 0.7853981633974483,
          "target": "13-gallerydining-room"
        },
        {
          "yaw": 0.6460493651071069,
          "pitch": 0.10767003111255846,
          "rotation": 1.5707963267948966,
          "target": "19-kitchendining-room"
        },
        {
          "yaw": 3.138478614563109,
          "pitch": 0.5852465905676301,
          "rotation": 3.141592653589793,
          "target": "5-dining-room"
        },
        {
          "yaw": 3.1202318294369933,
          "pitch": 0.32501153550850503,
          "rotation": 3.141592653589793,
          "target": "3-foyer"
        },
        {
          "yaw": 3.1309022659518337,
          "pitch": 0.09386869591532943,
          "rotation": 0,
          "target": "1-front-entrance"
        },
        {
          "yaw": -2.921711485903252,
          "pitch": 0.08993198682378178,
          "rotation": 1.5707963267948966,
          "target": "8-living-roomfoyer"
        },
        {
          "yaw": -1.5662223165154252,
          "pitch": 0.006357652762023491,
          "rotation": 0,
          "target": "12-parlordining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-dining-roomgallery",
      "name": "Dining Room/Gallery",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -3.12417389709854,
        "pitch": 0.076973759251306,
        "fov": 1.5557563129705874
      },
      "linkHotspots": [
        {
          "yaw": 2.1457572455400715,
          "pitch": 0.6002836465765835,
          "rotation": 3.141592653589793,
          "target": "6-dining-room"
        },
        {
          "yaw": 2.722875264237903,
          "pitch": 0.3542761152660674,
          "rotation": 3.141592653589793,
          "target": "5-dining-room"
        },
        {
          "yaw": 2.7949747498380546,
          "pitch": 0.09760189457713153,
          "rotation": 1.5707963267948966,
          "target": "3-foyer"
        },
        {
          "yaw": 1.472357919339876,
          "pitch": 0.09534131140758184,
          "rotation": 4.71238898038469,
          "target": "19-kitchendining-room"
        },
        {
          "yaw": -0.024729495345429342,
          "pitch": 0.6703159776381789,
          "rotation": 0,
          "target": "13-gallerydining-room"
        },
        {
          "yaw": 0.05699981442622004,
          "pitch": 0.18232554617603647,
          "rotation": 0,
          "target": "14-galleryrestrooms"
        },
        {
          "yaw": -1.973606924577238,
          "pitch": 0.4082846412644656,
          "rotation": 3.141592653589793,
          "target": "12-parlordining-room"
        },
        {
          "yaw": -2.0747725428203463,
          "pitch": 0.027133200949039704,
          "rotation": 4.71238898038469,
          "target": "9-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-living-roomfoyer",
      "name": "Living Room/Foyer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.5462023222507533,
        "pitch": 0.018404917429057477,
        "fov": 1.5557563129705874
      },
      "linkHotspots": [
        {
          "yaw": -1.6058992570454613,
          "pitch": 0.43685241387406926,
          "rotation": 3.141592653589793,
          "target": "9-living-room"
        },
        {
          "yaw": -1.0275062915475601,
          "pitch": 0.060342377772631295,
          "rotation": 1.5707963267948966,
          "target": "10-parlor"
        },
        {
          "yaw": 1.4578422011382361,
          "pitch": 0.5494317681842915,
          "rotation": 3.141592653589793,
          "target": "3-foyer"
        },
        {
          "yaw": 1.9533663348829,
          "pitch": 0.17323326956013219,
          "rotation": 1.5707963267948966,
          "target": "1-front-entrance"
        },
        {
          "yaw": 1.095627406261924,
          "pitch": 0.28602061724182626,
          "rotation": 3.141592653589793,
          "target": "27-stairwayfoyer"
        },
        {
          "yaw": 1.1685290870776495,
          "pitch": 0.06772642847252364,
          "rotation": 0,
          "target": "4-side-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-living-room",
      "name": "Living Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.5280733542180478,
        "pitch": -0.011369769511581751,
        "fov": 1.5557563129705874
      },
      "linkHotspots": [
        {
          "yaw": -0.3038867066818547,
          "pitch": 0.43830604804060513,
          "rotation": 6.283185307179586,
          "target": "10-parlor"
        },
        {
          "yaw": 1.57982160065687,
          "pitch": 0.36345638177805206,
          "rotation": 3.141592653589793,
          "target": "8-living-roomfoyer"
        },
        {
          "yaw": 1.585330891936409,
          "pitch": 0.2470004299200017,
          "rotation": 0,
          "target": "3-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-parlor",
      "name": "Parlor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.024978923984624757,
          "pitch": 0.49786290337203276,
          "rotation": 3.141592653589793,
          "target": "11-parlor"
        },
        {
          "yaw": 0.7110028062715976,
          "pitch": 0.3822002991482609,
          "rotation": 3.141592653589793,
          "target": "12-parlordining-room"
        },
        {
          "yaw": 0.7091504985265651,
          "pitch": 0.10529470243426431,
          "rotation": 1.5707963267948966,
          "target": "7-dining-roomgallery"
        },
        {
          "yaw": 3.1099022933277825,
          "pitch": 0.4628722968739769,
          "rotation": 3.141592653589793,
          "target": "9-living-room"
        },
        {
          "yaw": 2.097897553219111,
          "pitch": 0.26628969298401906,
          "rotation": 3.141592653589793,
          "target": "8-living-roomfoyer"
        },
        {
          "yaw": 2.075233257320061,
          "pitch": 0.046711128848336614,
          "rotation": 4.71238898038469,
          "target": "3-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-parlor",
      "name": "Parlor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.3873152114573495,
        "pitch": 0.12193649824555486,
        "fov": 1.5557563129705874
      },
      "linkHotspots": [
        {
          "yaw": 1.4700194833765687,
          "pitch": 0.5522873379569493,
          "rotation": 3.141592653589793,
          "target": "12-parlordining-room"
        },
        {
          "yaw": 1.271548352010571,
          "pitch": 0.2796460607825324,
          "rotation": 3.141592653589793,
          "target": "7-dining-roomgallery"
        },
        {
          "yaw": 1.361731310278472,
          "pitch": 0.02017388866464742,
          "rotation": 4.71238898038469,
          "target": "19-kitchendining-room"
        },
        {
          "yaw": -3.1362206559622745,
          "pitch": 0.5712975183227176,
          "rotation": 3.141592653589793,
          "target": "10-parlor"
        },
        {
          "yaw": 3.114849263195456,
          "pitch": 0.2948001447767936,
          "rotation": 3.141592653589793,
          "target": "9-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-parlordining-room",
      "name": "Parlor/Dining Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.5366954627281793,
        "pitch": 0.1425630884805429,
        "fov": 1.5557563129705874
      },
      "linkHotspots": [
        {
          "yaw": -1.508189692341226,
          "pitch": 0.5304069674774627,
          "rotation": 3.141592653589793,
          "target": "11-parlor"
        },
        {
          "yaw": -2.3850950933089816,
          "pitch": 0.4143504266747051,
          "rotation": 3.141592653589793,
          "target": "10-parlor"
        },
        {
          "yaw": -2.4377832672513335,
          "pitch": 0.08080361308322459,
          "rotation": 4.71238898038469,
          "target": "9-living-room"
        },
        {
          "yaw": 0.9682674121378962,
          "pitch": 0.414642168356842,
          "rotation": 3.141592653589793,
          "target": "7-dining-roomgallery"
        },
        {
          "yaw": 1.2900523693486097,
          "pitch": 0.031341150198120005,
          "rotation": 4.71238898038469,
          "target": "19-kitchendining-room"
        },
        {
          "yaw": 0.7788549826688183,
          "pitch": 0.29407535681603747,
          "rotation": 5.497787143782138,
          "target": "13-gallerydining-room"
        },
        {
          "yaw": 1.9760690115231094,
          "pitch": 0.2980869714396519,
          "rotation": 3.141592653589793,
          "target": "5-dining-room"
        },
        {
          "yaw": 2.083245358413663,
          "pitch": 0.03489535254415088,
          "rotation": 7.853981633974483,
          "target": "3-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-gallerydining-room",
      "name": "Gallery/Dining Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.10183258326667932,
          "pitch": 0.25839775145204236,
          "rotation": 3.141592653589793,
          "target": "14-galleryrestrooms"
        },
        {
          "yaw": 3.135919947440984,
          "pitch": 0.6793241323171912,
          "rotation": 3.141592653589793,
          "target": "7-dining-roomgallery"
        },
        {
          "yaw": -2.5766893772329915,
          "pitch": 0.15490014646378292,
          "rotation": 1.5707963267948966,
          "target": "12-parlordining-room"
        },
        {
          "yaw": 2.4870899626748546,
          "pitch": 0.18052794734996525,
          "rotation": 4.71238898038469,
          "target": "19-kitchendining-room"
        },
        {
          "yaw": 2.907634752742501,
          "pitch": 0.2556424247706026,
          "rotation": 3.141592653589793,
          "target": "5-dining-room"
        },
        {
          "yaw": 2.929635340176045,
          "pitch": 0.09089928296319272,
          "rotation": 0,
          "target": "3-foyer"
        },
        {
          "yaw": 2.7589484419031107,
          "pitch": 0.39567096561684423,
          "rotation": 3.141592653589793,
          "target": "6-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-galleryrestrooms",
      "name": "Gallery/Restrooms",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.059198598336859476,
          "pitch": 0.4370572372544146,
          "rotation": 3.141592653589793,
          "target": "15-restrooms"
        },
        {
          "yaw": -0.04289182346865772,
          "pitch": 0.2170444429062961,
          "rotation": 0,
          "target": "16-reception-hallrestrooms"
        },
        {
          "yaw": -3.02285084596763,
          "pitch": 0.32669634611256626,
          "rotation": 3.141592653589793,
          "target": "13-gallerydining-room"
        },
        {
          "yaw": -3.0394585373117913,
          "pitch": 0.22101597510980397,
          "rotation": 0,
          "target": "7-dining-roomgallery"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-restrooms",
      "name": "Restrooms",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.010218218084514064,
          "pitch": 0.4609211890431961,
          "rotation": 0,
          "target": "16-reception-hallrestrooms"
        },
        {
          "yaw": -3.1101930127304094,
          "pitch": 0.529023059868404,
          "rotation": 0,
          "target": "14-galleryrestrooms"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-reception-hallrestrooms",
      "name": "Reception Hall/Restrooms",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.014827575946146254,
        "pitch": -0.03389095702529055,
        "fov": 1.5557563129705874
      },
      "linkHotspots": [
        {
          "yaw": -0.0195173540627529,
          "pitch": 0.30032808370175346,
          "rotation": 3.141592653589793,
          "target": "17-reception-hall"
        },
        {
          "yaw": 1.2885895901003437,
          "pitch": 0.32336907760742584,
          "rotation": 0.7853981633974483,
          "target": "26-kitchenreception-hall"
        },
        {
          "yaw": -3.082406849877559,
          "pitch": 0.5400371007858453,
          "rotation": 3.141592653589793,
          "target": "15-restrooms"
        },
        {
          "yaw": -3.0957695153468023,
          "pitch": 0.2633743939095652,
          "rotation": 0,
          "target": "14-galleryrestrooms"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-reception-hall",
      "name": "Reception Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.05716178134550631,
          "pitch": 0.19735425761505176,
          "rotation": 3.141592653589793,
          "target": "18-reception-hall"
        },
        {
          "yaw": 2.454271673977855,
          "pitch": 0.26397100121862493,
          "rotation": 5.497787143782138,
          "target": "26-kitchenreception-hall"
        },
        {
          "yaw": 3.1203522894487037,
          "pitch": 0.2778229002591779,
          "rotation": 3.141592653589793,
          "target": "16-reception-hallrestrooms"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-reception-hall",
      "name": "Reception Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -3.1342056893525587,
        "pitch": -0.011201893014717967,
        "fov": 1.5557563129705874
      },
      "linkHotspots": [
        {
          "yaw": 3.125242382397209,
          "pitch": 0.4637477402539538,
          "rotation": 3.141592653589793,
          "target": "17-reception-hall"
        },
        {
          "yaw": 2.8001725771102297,
          "pitch": 0.126938668234148,
          "rotation": 4.71238898038469,
          "target": "26-kitchenreception-hall"
        },
        {
          "yaw": 3.124502058804559,
          "pitch": 0.1468347777047434,
          "rotation": 3.141592653589793,
          "target": "16-reception-hallrestrooms"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-kitchendining-room",
      "name": "Kitchen/Dining Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.03102731784813173,
        "pitch": 0.06150482121162426,
        "fov": 1.5557563129705874
      },
      "linkHotspots": [
        {
          "yaw": -0.022690240381313842,
          "pitch": 0.34016952657864863,
          "rotation": 3.141592653589793,
          "target": "20-kitchen"
        },
        {
          "yaw": -1.6136249152059925,
          "pitch": 0.39764898711978525,
          "rotation": 3.141592653589793,
          "target": "7-dining-roomgallery"
        },
        {
          "yaw": -1.3718849695913597,
          "pitch": 0.0819642446537685,
          "rotation": 1.5707963267948966,
          "target": "14-galleryrestrooms"
        },
        {
          "yaw": -1.8155235367615532,
          "pitch": 0.046528371072724894,
          "rotation": 0,
          "target": "12-parlordining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.62539268296557,
        "pitch": 0.1936626115730924,
        "fov": 1.5557563129705874
      },
      "linkHotspots": [
        {
          "yaw": 1.4868334411824016,
          "pitch": 0.3387326711581089,
          "rotation": 3.141592653589793,
          "target": "22-kitchen"
        },
        {
          "yaw": 2.469372708401532,
          "pitch": 0.1726377056919759,
          "rotation": 3.141592653589793,
          "target": "21-kitchen"
        },
        {
          "yaw": 3.1239181675462397,
          "pitch": 0.34627864098489525,
          "rotation": 3.141592653589793,
          "target": "19-kitchendining-room"
        },
        {
          "yaw": 0.6303518082361972,
          "pitch": 0.12992165431400515,
          "rotation": 3.141592653589793,
          "target": "24-kitchen"
        },
        {
          "yaw": -0.04275231101408927,
          "pitch": 0.411750567260146,
          "rotation": 3.141592653589793,
          "target": "23-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.34597677207676014,
        "pitch": 0.22918194996465324,
        "fov": 1.5557563129705874
      },
      "linkHotspots": [
        {
          "yaw": 0.25587063946570154,
          "pitch": 0.3586833881238505,
          "rotation": 3.141592653589793,
          "target": "22-kitchen"
        },
        {
          "yaw": 0.13648990638394842,
          "pitch": 0.18184424355488638,
          "rotation": 3.141592653589793,
          "target": "24-kitchen"
        },
        {
          "yaw": -0.4465261180540825,
          "pitch": 0.05886925014686639,
          "rotation": 3.141592653589793,
          "target": "23-kitchen"
        },
        {
          "yaw": -1.0666810149316888,
          "pitch": 0.21020858471075066,
          "rotation": 3.141592653589793,
          "target": "20-kitchen"
        },
        {
          "yaw": -1.5991725812458562,
          "pitch": 0.12328297724324244,
          "rotation": 4.71238898038469,
          "target": "19-kitchendining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.5691812087438706,
        "pitch": 0.06291094620127602,
        "fov": 1.5557563129705874
      },
      "linkHotspots": [
        {
          "yaw": -1.7901094482108846,
          "pitch": 0.15685456766052397,
          "rotation": 3.141592653589793,
          "target": "20-kitchen"
        },
        {
          "yaw": -0.8924002354461642,
          "pitch": 0.1340084748473238,
          "rotation": 3.141592653589793,
          "target": "23-kitchen"
        },
        {
          "yaw": -0.05249409423811713,
          "pitch": 0.3071924001003872,
          "rotation": 3.141592653589793,
          "target": "24-kitchen"
        },
        {
          "yaw": -2.9379406524187033,
          "pitch": 0.19943797867798096,
          "rotation": 3.141592653589793,
          "target": "21-kitchen"
        },
        {
          "yaw": -2.4772360893552268,
          "pitch": 0.14834516513644935,
          "rotation": 3.141592653589793,
          "target": "19-kitchendining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.249357313582098,
        "pitch": 0.11829045264154558,
        "fov": 1.5557563129705874
      },
      "linkHotspots": [
        {
          "yaw": 2.7460113362480225,
          "pitch": 0.43184259698787564,
          "rotation": 3.141592653589793,
          "target": "22-kitchen"
        },
        {
          "yaw": -2.581959304359021,
          "pitch": 0.37581613129022173,
          "rotation": 3.141592653589793,
          "target": "20-kitchen"
        },
        {
          "yaw": -2.962384775479478,
          "pitch": 0.11016123745959128,
          "rotation": 3.141592653589793,
          "target": "19-kitchendining-room"
        },
        {
          "yaw": 2.8757347382592773,
          "pitch": 0.11879320400905158,
          "rotation": 3.141592653589793,
          "target": "21-kitchen"
        },
        {
          "yaw": 0.8275207919505263,
          "pitch": 0.46532770885753116,
          "rotation": 3.141592653589793,
          "target": "24-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.037132411541138666,
        "pitch": 0.03397385722783852,
        "fov": 1.5557563129705874
      },
      "linkHotspots": [
        {
          "yaw": -0.04747872835179123,
          "pitch": 0.36834036560761696,
          "rotation": 3.141592653589793,
          "target": "25-kitchen"
        },
        {
          "yaw": -2.072225669997893,
          "pitch": 0.4778976644782773,
          "rotation": 3.141592653589793,
          "target": "23-kitchen"
        },
        {
          "yaw": 3.076396969142552,
          "pitch": 0.3960023636984431,
          "rotation": 3.141592653589793,
          "target": "22-kitchen"
        },
        {
          "yaw": -2.4942300731567943,
          "pitch": 0.1093313455869307,
          "rotation": 3.141592653589793,
          "target": "20-kitchen"
        },
        {
          "yaw": -3.0821988093511425,
          "pitch": 0.08602228872231166,
          "rotation": 3.141592653589793,
          "target": "21-kitchen"
        },
        {
          "yaw": -2.8277446083392537,
          "pitch": 0.07360627193519953,
          "rotation": 3.141592653589793,
          "target": "19-kitchendining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -3.134053429136646,
        "pitch": 0.03850891127779299,
        "fov": 1.5557563129705874
      },
      "linkHotspots": [
        {
          "yaw": -3.1340534819573342,
          "pitch": 0.4177418744083603,
          "rotation": 3.141592653589793,
          "target": "24-kitchen"
        },
        {
          "yaw": -0.6440228018761225,
          "pitch": 0.47770056872782973,
          "rotation": 3.141592653589793,
          "target": "26-kitchenreception-hall"
        },
        {
          "yaw": -0.6977218223400676,
          "pitch": 0.17422274526830783,
          "rotation": 0,
          "target": "17-reception-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-kitchenreception-hall",
      "name": "Kitchen/Reception Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.943620043195799,
        "pitch": 0.044257942380466986,
        "fov": 1.5557563129705874
      },
      "linkHotspots": [
        {
          "yaw": 2.500964042913136,
          "pitch": 0.5124803086673779,
          "rotation": 3.141592653589793,
          "target": "25-kitchen"
        },
        {
          "yaw": -1.9649461620036863,
          "pitch": 0.3376597094635052,
          "rotation": 3.141592653589793,
          "target": "16-reception-hallrestrooms"
        },
        {
          "yaw": -1.9949672477017835,
          "pitch": 0.08041716061065252,
          "rotation": 4.71238898038469,
          "target": "15-restrooms"
        },
        {
          "yaw": -0.5988044835141704,
          "pitch": 0.21501670399826622,
          "rotation": 3.141592653589793,
          "target": "17-reception-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-stairwayfoyer",
      "name": "Stairway/Foyer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -3.086686258315382,
        "pitch": 0.027000649858395676,
        "fov": 1.5557563129705874
      },
      "linkHotspots": [
        {
          "yaw": 3.063781976555436,
          "pitch": 0.1933575680804278,
          "rotation": 3.141592653589793,
          "target": "28-stairway"
        },
        {
          "yaw": -2.2601903571736734,
          "pitch": 0.4574868565268897,
          "rotation": 3.141592653589793,
          "target": "3-foyer"
        },
        {
          "yaw": -2.021144765817347,
          "pitch": 0.32614199722719306,
          "rotation": 7.0685834705770345,
          "target": "8-living-roomfoyer"
        },
        {
          "yaw": -1.1301395582202574,
          "pitch": 0.5739245165212168,
          "rotation": 1.5707963267948966,
          "target": "5-dining-room"
        },
        {
          "yaw": 1.6517275515797776,
          "pitch": 0.5701143674342717,
          "rotation": 3.141592653589793,
          "target": "4-side-foyer"
        },
        {
          "yaw": 1.6528403354064336,
          "pitch": 0.1421415445961287,
          "rotation": 0,
          "target": "2-side-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-stairway",
      "name": "Stairway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.5985199777375527,
        "pitch": 0.5062712124529245,
        "fov": 1.5557563129705874
      },
      "linkHotspots": [
        {
          "yaw": 3.0742735859465533,
          "pitch": -0.0011183862415240498,
          "rotation": 3.141592653589793,
          "target": "29-stairway"
        },
        {
          "yaw": -0.7533141344343228,
          "pitch": 0.5402612051207019,
          "rotation": 0.7853981633974483,
          "target": "5-dining-room"
        },
        {
          "yaw": -1.6933875372203264,
          "pitch": 0.22111604722411116,
          "rotation": 0,
          "target": "8-living-roomfoyer"
        },
        {
          "yaw": -0.04714935043490165,
          "pitch": 0.9809947166706028,
          "rotation": 3.141592653589793,
          "target": "27-stairwayfoyer"
        },
        {
          "yaw": 0.6020242471543558,
          "pitch": 0.33870392796779214,
          "rotation": 1.5707963267948966,
          "target": "4-side-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-stairway",
      "name": "Stairway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.027183889234592584,
        "pitch": 0.20818730744107228,
        "fov": 1.5557563129705874
      },
      "linkHotspots": [
        {
          "yaw": -0.40811433340520864,
          "pitch": 0.8380257918522744,
          "rotation": 3.141592653589793,
          "target": "28-stairway"
        },
        {
          "yaw": 0.3292782255056217,
          "pitch": 0.25376405641860345,
          "rotation": 3.141592653589793,
          "target": "30-stairwayfloor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-stairwayfloor-2",
      "name": "Stairway/Floor 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3245462857408796,
          "pitch": 0.3153732428386675,
          "rotation": 3.141592653589793,
          "target": "31-floor-2"
        },
        {
          "yaw": 0.20151072792624447,
          "pitch": -0.08352389483640366,
          "rotation": 1.5707963267948966,
          "target": "32-hallwayclassroom"
        },
        {
          "yaw": -0.7097706373322907,
          "pitch": -0.19353912283580854,
          "rotation": 4.71238898038469,
          "target": "33-hallway"
        },
        {
          "yaw": -2.8085537667719613,
          "pitch": 0.8603599689570416,
          "rotation": 3.141592653589793,
          "target": "29-stairway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-floor-2",
      "name": "Floor 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.2586151089634416,
        "pitch": 0.35727453465628045,
        "fov": 1.5557563129705874
      },
      "linkHotspots": [
        {
          "yaw": 3.013195429036575,
          "pitch": 0.7276413563760684,
          "rotation": 3.141592653589793,
          "target": "30-stairwayfloor-2"
        },
        {
          "yaw": -1.4185523742663442,
          "pitch": 0.4096784880176312,
          "rotation": 0,
          "target": "33-hallway"
        },
        {
          "yaw": 1.6448768100114544,
          "pitch": 0.6319306601166463,
          "rotation": 3.141592653589793,
          "target": "32-hallwayclassroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-hallwayclassroom",
      "name": "Hallway/Classroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.7767391477763219,
        "pitch": 0.15170949693779967,
        "fov": 1.5557563129705874
      },
      "linkHotspots": [
        {
          "yaw": -0.023652335014384462,
          "pitch": 0.5909902394872493,
          "rotation": 0,
          "target": "35-classroom"
        },
        {
          "yaw": -1.5984706489741605,
          "pitch": 0.6981442176865151,
          "rotation": 3.141592653589793,
          "target": "31-floor-2"
        },
        {
          "yaw": -1.5617718302453074,
          "pitch": 0.2754115041294867,
          "rotation": 0,
          "target": "33-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-hallway",
      "name": "Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.5329243272002095,
        "pitch": 0.15258266366363493,
        "fov": 1.5557563129705874
      },
      "linkHotspots": [
        {
          "yaw": -1.5591056089986743,
          "pitch": 0.4813457430676422,
          "rotation": 3.141592653589793,
          "target": "34-hallwayclassrooms"
        },
        {
          "yaw": 1.6095051454172093,
          "pitch": 0.41173197099725556,
          "rotation": 3.141592653589793,
          "target": "31-floor-2"
        },
        {
          "yaw": 1.6088064587643567,
          "pitch": 0.26178700893485285,
          "rotation": 0,
          "target": "32-hallwayclassroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-hallwayclassrooms",
      "name": "Hallway/Classrooms",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.0655451115476282,
        "pitch": 0.33454740626684654,
        "fov": 1.5557563129705874
      },
      "linkHotspots": [
        {
          "yaw": -0.08202921081520742,
          "pitch": 0.5860307783499259,
          "rotation": 0.7853981633974483,
          "target": "38-classroom"
        },
        {
          "yaw": -1.8088989671199656,
          "pitch": 0.6665569163333398,
          "rotation": 5.497787143782138,
          "target": "41-classroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-classroom",
      "name": "Classroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.6783615995361991,
        "pitch": 0.03711866721817536,
        "fov": 1.5557563129705874
      },
      "linkHotspots": [
        {
          "yaw": 1.403958971517305,
          "pitch": 0.5543308244633334,
          "rotation": 3.141592653589793,
          "target": "36-classroom"
        },
        {
          "yaw": 0.5166668674422716,
          "pitch": 0.1692969006034133,
          "rotation": 3.141592653589793,
          "target": "37-classroom"
        },
        {
          "yaw": 3.1258106755638497,
          "pitch": 0.6323876168815197,
          "rotation": 3.141592653589793,
          "target": "32-hallwayclassroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-classroom",
      "name": "Classroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.0286762460284216,
        "pitch": 0.11733863362341701,
        "fov": 1.5557563129705874
      },
      "linkHotspots": [
        {
          "yaw": -0.10303324274692116,
          "pitch": 0.2819689565320438,
          "rotation": 9.42477796076938,
          "target": "37-classroom"
        },
        {
          "yaw": -1.6685338726007828,
          "pitch": 0.5784851831532922,
          "rotation": 3.141592653589793,
          "target": "35-classroom"
        },
        {
          "yaw": -1.9651827994547766,
          "pitch": 0.11071259781944676,
          "rotation": 4.71238898038469,
          "target": "32-hallwayclassroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-classroom",
      "name": "Classroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.560390331346394,
        "pitch": 0.13778249002592347,
        "fov": 1.5557563129705874
      },
      "linkHotspots": [
        {
          "yaw": -2.467899314827152,
          "pitch": 0.2887067735675899,
          "rotation": 3.141592653589793,
          "target": "35-classroom"
        },
        {
          "yaw": -2.5072024961360597,
          "pitch": 0.08254171167661539,
          "rotation": 4.71238898038469,
          "target": "32-hallwayclassroom"
        },
        {
          "yaw": 3.132715233822876,
          "pitch": 0.2932093698555285,
          "rotation": 3.141592653589793,
          "target": "36-classroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-classroom",
      "name": "Classroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.560741593168764,
        "pitch": 0.2503293832430824,
        "fov": 1.5557563129705874
      },
      "linkHotspots": [
        {
          "yaw": -1.5518632131367234,
          "pitch": 0.442080533560123,
          "rotation": 3.141592653589793,
          "target": "39-classroom"
        },
        {
          "yaw": -1.5105413087087562,
          "pitch": 0.058488208826192434,
          "rotation": 3.141592653589793,
          "target": "40-classroom"
        },
        {
          "yaw": -3.0544604163298708,
          "pitch": 0.5067630322758454,
          "rotation": 3.141592653589793,
          "target": "34-hallwayclassrooms"
        },
        {
          "yaw": -2.9179976611143097,
          "pitch": 0.08595185751273782,
          "rotation": 1.5707963267948966,
          "target": "41-classroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "39-classroom",
      "name": "Classroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 3.0846259868998107,
        "pitch": 0.42795691519255286,
        "fov": 1.5557563129705874
      },
      "linkHotspots": [
        {
          "yaw": 2.3244432301894635,
          "pitch": 0.3901230104629363,
          "rotation": 3.141592653589793,
          "target": "34-hallwayclassrooms"
        },
        {
          "yaw": 1.488726904652161,
          "pitch": 0.23874351879198308,
          "rotation": 3.141592653589793,
          "target": "39-classroom"
        },
        {
          "yaw": -1.6095183562195245,
          "pitch": 0.22476911927814847,
          "rotation": 3.141592653589793,
          "target": "40-classroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "40-classroom",
      "name": "Classroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.5179346922492556,
        "pitch": 0.17657072702114895,
        "fov": 1.5557563129705874
      },
      "linkHotspots": [
        {
          "yaw": 1.5134962491397497,
          "pitch": 0.5236595235532757,
          "rotation": 3.141592653589793,
          "target": "39-classroom"
        },
        {
          "yaw": 1.497498105658777,
          "pitch": 0.08889739756665804,
          "rotation": 3.141592653589793,
          "target": "38-classroom"
        },
        {
          "yaw": 1.9362252756452287,
          "pitch": 0.11666700158596299,
          "rotation": 1.5707963267948966,
          "target": "34-hallwayclassrooms"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "41-classroom",
      "name": "Classroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.1533684158153896,
        "pitch": 0.16553266467800398,
        "fov": 1.5557563129705874
      },
      "linkHotspots": [
        {
          "yaw": -2.5757148115490978,
          "pitch": 0.5594234074784161,
          "rotation": 3.141592653589793,
          "target": "42-classroom"
        },
        {
          "yaw": -2.7876128795501405,
          "pitch": 0.12048347338300935,
          "rotation": 3.141592653589793,
          "target": "43-classroom"
        },
        {
          "yaw": -2.0553331296505277,
          "pitch": 0.09772317777497719,
          "rotation": 3.141592653589793,
          "target": "44-classroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "42-classroom",
      "name": "Classroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.4424768432788255,
        "pitch": 0.10447820119498985,
        "fov": 1.5557563129705874
      },
      "linkHotspots": [
        {
          "yaw": -1.4884111259298969,
          "pitch": 0.2603009894185426,
          "rotation": 3.141592653589793,
          "target": "44-classroom"
        },
        {
          "yaw": -2.982125422860486,
          "pitch": 0.268782853076738,
          "rotation": 3.141592653589793,
          "target": "43-classroom"
        },
        {
          "yaw": 1.0034021587280257,
          "pitch": 0.5127449851889008,
          "rotation": 3.141592653589793,
          "target": "41-classroom"
        },
        {
          "yaw": 1.0401754675913466,
          "pitch": 0.3767830101307297,
          "rotation": 0.7853981633974483,
          "target": "34-hallwayclassrooms"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "43-classroom",
      "name": "Classroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.40038892515241287,
        "pitch": 0.1742963504157906,
        "fov": 1.5557563129705874
      },
      "linkHotspots": [
        {
          "yaw": -0.8296186715529306,
          "pitch": 0.1718435677409822,
          "rotation": 3.141592653589793,
          "target": "44-classroom"
        },
        {
          "yaw": 0.12607460762839828,
          "pitch": 0.5056585633230952,
          "rotation": 3.141592653589793,
          "target": "42-classroom"
        },
        {
          "yaw": 0.5628872718667246,
          "pitch": 0.32629996698362795,
          "rotation": 3.141592653589793,
          "target": "41-classroom"
        },
        {
          "yaw": 0.6176261351216983,
          "pitch": 0.2186694999123322,
          "rotation": 7.853981633974483,
          "target": "34-hallwayclassrooms"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "44-classroom",
      "name": "Classroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.2920139862482891,
        "pitch": 0.09434693861530974,
        "fov": 1.5557563129705874
      },
      "linkHotspots": [
        {
          "yaw": 1.487653421431057,
          "pitch": 0.5466983676277781,
          "rotation": 3.141592653589793,
          "target": "42-classroom"
        },
        {
          "yaw": 2.6373081463661316,
          "pitch": 0.3163758574106392,
          "rotation": 3.141592653589793,
          "target": "43-classroom"
        },
        {
          "yaw": 1.133747269253515,
          "pitch": 0.3471540794145973,
          "rotation": 3.141592653589793,
          "target": "41-classroom"
        },
        {
          "yaw": 1.0800479147557294,
          "pitch": 0.14710118471439237,
          "rotation": 0,
          "target": "34-hallwayclassrooms"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
