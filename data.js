var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room",
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
          "yaw": -1.1518101492771535,
          "pitch": 0.1095574364908849,
          "rotation": 0,
          "target": "1-laboratory"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-laboratory",
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
          "yaw": -2.844494017714778,
          "pitch": 0.10775579076107533,
          "rotation": 0,
          "target": "0-living-room"
        },
        {
          "yaw": 2.1117652536008755,
          "pitch": 0.13065059606297424,
          "rotation": 0,
          "target": "3-main_interior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-exterior",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6566912627626245,
          "pitch": 0.18917134302051863,
          "rotation": 0,
          "target": "3-main_interior"
        },
        {
          "yaw": -1.3397978849917038,
          "pitch": 0.28152377072406765,
          "rotation": 0,
          "target": "3-main_interior"
        },
        {
          "yaw": 2.6204231634524975,
          "pitch": 0.41865067014662216,
          "rotation": 0,
          "target": "3-main_interior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-main_interior",
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
          "yaw": 0.4923314767936784,
          "pitch": 0.10605496092395583,
          "rotation": 0,
          "target": "2-exterior"
        },
        {
          "yaw": -2.8670508599857794,
          "pitch": 0.13164604006779257,
          "rotation": 0,
          "target": "1-laboratory"
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
