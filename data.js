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
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.032813581844092,
        "pitch": 0.049447622159256355,
        "fov": 1.3268945324871384
      },
      "linkHotspots": [
        {
          "yaw": -0.2051990507385053,
          "pitch": 0.13577408078045217,
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
          "yaw": 2.0307310344391745,
          "pitch": 0.19815382620320499,
          "rotation": 0,
          "target": "3-main-interior"
        },
        {
          "yaw": -2.8402833723555005,
          "pitch": 0.09715554834845008,
          "rotation": 0,
          "target": "2-living-room"
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
          "yaw": -1.2754561618968268,
          "pitch": 0.22785677051875908,
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
          "yaw": -2.869169732267114,
          "pitch": 0.06798655672435316,
          "rotation": 0,
          "target": "1-laboratory"
        },
        {
          "yaw": 0.47924421236821146,
          "pitch": 0.11493310604069151,
          "rotation": 0,
          "target": "0-exterior"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Habitat",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
