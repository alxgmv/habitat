var APP_DATA = {
  "scenes": [
    {
      "id": "0-main-interior",
      "name": "Main interior",
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
        "yaw": 2.739480224691828,
        "pitch": -0.0013262552338311195,
        "fov": 1.3268945324871384
      },
      "linkHotspots": [
        {
          "yaw": 2.474006045793189,
          "pitch": 0.0713720419025563,
          "rotation": 0,
          "target": "1-laboratory"
        },
        {
          "yaw": 2.561603037688757,
          "pitch": -0.5083712149736499,
          "rotation": 0,
          "target": "2-living-room"
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
          "yaw": 0.8754592419408773,
          "pitch": 0.06587054850505147,
          "rotation": 0,
          "target": "0-main-interior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-living-room",
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
          "yaw": -2.8311482053601935,
          "pitch": -0.03193742624696405,
          "rotation": 0,
          "target": "0-main-interior"
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
