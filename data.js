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
        "yaw": 0.6022566737221311,
        "pitch": -0.13478383286630802,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": -0.22545548219312828,
          "pitch": 0.12908103308556207,
          "rotation": 0,
          "target": "1-main-interior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-main-interior",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4786344500361768,
          "pitch": 0.11605525893459046,
          "rotation": 0,
          "target": "0-exterior"
        },
        {
          "yaw": -2.847116730805297,
          "pitch": 0.12981646551557802,
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
          "yaw": -2.936060233183664,
          "pitch": 0.09773925008465056,
          "rotation": 0,
          "target": "3-living-area"
        },
        {
          "yaw": 2.129553900668112,
          "pitch": 0.06954931454447788,
          "rotation": 0,
          "target": "1-main-interior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-living-area",
      "name": "Living area",
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
          "yaw": -0.6266258645869236,
          "pitch": 0.0884691497026111,
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
