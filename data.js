var APP_DATA = {
  "scenes": [
    {
      "id": "0-exterior",
      "name": "Exterior",
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
        "yaw": -1.9641666889751548,
        "pitch": 0.032041487290173976,
        "fov": 1.3268945324871384
      },
      "linkHotspots": [
        {
          "yaw": -1.4189504756353912,
          "pitch": 0.25185674990622253,
          "rotation": 0,
          "target": "1-main_interior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-main_interior",
      "name": "Main_interior",
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
          "yaw": 0.4824247938343067,
          "pitch": 0.09795155053624072,
          "rotation": 0,
          "target": "0-exterior"
        },
        {
          "yaw": -2.847346950515499,
          "pitch": 0.11306834160938095,
          "rotation": 0,
          "target": "2-laboratory"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-laboratory",
      "name": "Laboratory",
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
          "yaw": 2.137051285834895,
          "pitch": 0.002754698002323863,
          "rotation": 0,
          "target": "1-main_interior"
        },
        {
          "yaw": -2.811544889720391,
          "pitch": 0.07236822483154448,
          "rotation": 0,
          "target": "3-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-living-room",
      "name": "Living room",
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
          "yaw": -1.4495715952956783,
          "pitch": 0.013193553590070906,
          "rotation": 0,
          "target": "2-laboratory"
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
