
<div style="display: flex; justify-content: center; align-items: center;">
<img src="https://github.com/rcnsol/nice-shades-bro/blob/main/resource/homebridge.png" width="150"> + Centronic
</div>

# *Nice shades, bro!* Homebridge Plugin

Plugin for controlling Becker window shutters via the Centronic USB stick.
On a Pi.
With extra cheese.
Or whatever.


## Installation

If this plugin is published to npm, this convenient approach should work. If for any reason that is not an option, choose the manual installation.

### Via npm release distribution

1. Install this plugin using: `npm install -g --unsafe-perm nice-shades-bro` (on the device where the homebridge server is running)
2. Perform configuration in `config.json`
3. Run/restart [Homebridge](https://github.com/homebridge/homebridge)

### Manual installation [wip]

This assumes you have already managed to open a shell on your device where homebridge is running, switched to the `/homebridge` directory and can become root.

1. Clone this repo and cd into the repo `git clone ...` 
2. ...
3. Profit.

#### Set up config.json manually
For the plugin to work, you may first need to add the plugin as a platform in `~/.homebridge/config.json`:

```
{
...
    "platforms": [
        ...,
        {
            "name": "nice-shades-bro",
            "platform": "NiceShadesBro",
            "options": {
                "devicesPerChannel": "1"
                }
        }
    ]
}
```

#### Config options
Extra options can be set depending on how many controllers or receivers you would like to see in the app. Here is a list of available options:

| Name              | Description                                                         | Type             |
|-------------------|---------------------------------------------------------------------|------------------|
| devicesPerChannel       | Number of receivers per channel             | number (n-m)           |

## Credits

This plugin is based on the work of [centronic-py](https://github.com/ole1986/centronic-py) and [homebridge-plugin-template](https://github.com/homebridge/homebridge-plugin-template).
