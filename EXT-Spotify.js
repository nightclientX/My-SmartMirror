/**  spotify commands for GoogleAssistant v4  **/
/**  @bugsounet  **/

var recipe = {
  transcriptionHooks: {
    "DE_SEARCH_SPOTIFY": {
      pattern: "(.*) auf spotify",
      command: "SEARCH_SPOTIFY"
    },
    "DE_NEXT_SPOTIFY" : {
      pattern: "nächstes spotify",
      command: "NEXT_SPOTIFY"
    },
    "DE_PREVIOUS_SPOTIFY": {
      pattern: "vorherige spotify",
      command: "PREVIOUS_SPOTIFY"
    },
    "DE_SHUFFLE_SPOTIFY": {
      pattern: "spotify mischen",
      command: "SHUFFLE_SPOTIFY"
    },
    "DE_REPEAT_SPOTIFY": {
      pattern: " wiederhole spotify",
      command: "REPEAT_SPOTIFY"
    },
    "DE_TRANSTO_SPOTIFY": {
      pattern: "spotify gehe zu (.*)",
      command: "TRANSTO_SPOTIFY"
    },
  },

  commands: {
    "SEARCH_SPOTIFY": {
      notificationExec: {
        notification: "EXT_SPOTIFY-SEARCH",
        payload: (params) => {
          return {
            type: "artist,track,album,playlist",
            query: params[1],
            random: false
          }
        }
      },
      soundExec: {
        chime: "open"
      }
    },
    "START_SPOTIFY": {
      notificationExec: {
        notification: "EXT_SPOTIFY-PLAY"
      },
      soundExec: {
        chime: "open"
      }
    },
    "PAUSE_SPOTIFY": {
      notificationExec: {
        notification: "EXT_SPOTIFY-PAUSE"
      },
      soundExec: {
        chime: "close"
      }
    },
    "STOP_SPOTIFY": {
      notificationExec: {
        notification: "EXT_SPOTIFY-STOP"
      },
      soundExec: {
        chime: "close"
      }
    },
    "NEXT_SPOTIFY": {
      notificationExec: {
        notification: "EXT_SPOTIFY-NEXT"
      }
    },
    "PREVIOUS_SPOTIFY": {
      notificationExec: {
        notification: "EXT_SPOTIFY-PREVIOUS"
      }
    },
    "SHUFFLE_SPOTIFY": {
      notificationExec: {
        notification: "EXT_SPOTIFY-SHUFFLE"
      },
      soundExec: {
        chime: "open"
      }
    },
    "REPEAT_SPOTIFY": {
      notificationExec: {
        notification: "EXT_SPOTIFY-REPEAT"
      }
    },
    "TRANSTO_SPOTIFY": {
      notificationExec: {
        notification: "EXT_SPOTIFY-TRANSFER",
        payload: (params) => {
          return params[1]
        }
      },
      soundExec: {
        chime: "open"
      }
    },
    "VOLUME_SPOTIFY": {
      notificationExec: {
        notification: "EXT_SPOTIFY-VOLUME_SET",
        payload: (params) => {
          return params[1]
        }
      }
    }
  }
}
exports.recipe = recipe
