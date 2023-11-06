/** Vocal control for EXT-Pages **/

var recipe = {
  transcriptionHooks: {
    "PAGEHOME": {
      pattern: "homepage",
      command: "PAGEHOME"
    },
    "PAGE1": {
      pattern: "ersten Seite",
      command: "PAGE1"
    },
    "PAGE2": {
      pattern: "zweiten Seite",
      command: "PAGE2"
    },
    "NORMAL": {
      pattern: "wechsle zu normal",
      command: "PAGENORMAL"
    }
  },
  commands: {
    "PAGEHOME": {
      notificationExec: {
        notification: "EXT_PAGES-HOME"
      }
    },
    "PAGE1": {
      notificationExec: {
        notification: "EXT_PAGES-CHANGED",
        payload: 1
      }
    },
    "PAGE2": {
      notificationExec: {
        notification: "EXT_PAGES-CHANGED",
        payload: 2
      }
    },
    "PAGENORMAL": {
      notificationExec: {
        notification: "EXT_PAGES-HIDDEN_SHOW",
        payload: "normal"
      }
    }
  }
}
exports.recipe = recipe // Don't remove this line.
