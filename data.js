var APP_DATA = {
  "scenes": [
    {
      "id": "0-exterior",
      "name": "exterior",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.022781227334238707,
        "pitch": -0.0698772365446878,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": -0.19498973562708066,
          "pitch": 0.15603377443510524,
          "rotation": 0,
          "target": "3-main-interior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-laboratory",
      "name": "laboratory",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.833540695601318,
          "pitch": 0.08546720249501227,
          "rotation": 0,
          "target": "2-living-room"
        },
        {
          "yaw": 2.1042049990774965,
          "pitch": 0.04754498237829807,
          "rotation": 0,
          "target": "3-main-interior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-living-room",
      "name": "living room",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1384376402106824,
          "pitch": 0.11259213456249739,
          "rotation": 0,
          "target": "1-laboratory"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-main-interior",
      "name": "main interior",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4764094010181239,
          "pitch": 0.11417499515193974,
          "rotation": 0,
          "target": "0-exterior"
        },
        {
          "yaw": -2.8478966559155925,
          "pitch": 0.11274259120143881,
          "rotation": 0,
          "target": "1-laboratory"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "habitat",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
