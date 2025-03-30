let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: 'Matão, São Paulo',
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#ea6962",
  },
  "search": {
    "engines": {
      "g": ["https://google.com/search?q=", "Google"],
      "d": ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
      "y": ["https://youtube.com/results?search_query=", "Youtube"],
      "r": ["https://www.reddit.com/search/?q=", "Reddit"]
    }
  },
  "keybindings": { "s": "search-bar", "q": "config-tab" },
  "disabled": [],
  "localIcons": false,
  "fastlink": "https://chat.openai.com/",
  "openLastVisitedTab": true,
  "tabs": [
    {
      "name": "chi ll",
      "background_url": "src/img/banners/cbg-2.gif",
      "categories": [
        {
          "name": "Social Media",
          "links": [
            {
              "name": "messenger",
              "url": "https://messenger.com/",
              "icon": "brand-messenger",
              "icon_color": "#7daea3"
            },
            {
              "name": "youtube",
              "url": "https://www.youtube.com/",
              "icon": "brand-youtube-filled",
              "icon_color": "#ea6962"
            },
            { "name": "reddit", "url": "https://www.reddit.com/", "icon": "brand-reddit", "icon_color": "#e78a4e" },
            {
              "name": "twitter",
              "url": "https://twitter.com/home",
              "icon": "brand-twitter-filled",
              "icon_color": "#7daea3"
            }
          ]
        },
        {
          "name": "Standard",
          "links": [
            { "name": "ggdeals", "url": "https://gg.deals/", "icon": "coin", "icon_color": "#ada9a5" },
            {
              "name": "rock paper shotgun",
              "url": "https://www.rockpapershotgun.com/news",
              "icon": "cut",
              "icon_color": "#987ecf"
            },
            {
              "name": "humble bundle",
              "url": "https://www.humblebundle.com/bundles",
              "icon": "device-gamepad-2",
              "icon_color": "#ea6962"
            },
            { "name": "retronator", "url": "https://www.retronator.com/", "icon": "rainbow", "icon_color": "#92e681" }
          ]
        },
        {
          "name": "Video",
          "links": [
            { "name": "netflix", "url": "https://www.netflix.com", "icon": "brand-netflix", "icon_color": "#ea6962" },
            { "name": "hianime", "url": "https://hianime.to/", "icon": "helicopter-landing", "icon_color": "#ffbade" },
            { "name": "animepahe", "url": "https://animepahe.ru/", "icon": "world", "icon_color": "#ea6962" },
            { "name": "twitch", "url": "https://www.twitch.tv/", "icon": "brand-twitch", "icon_color": "#d3869b" }
          ]
        }
      ]
    },
    {
      "name": "dev",
      "background_url": "src/img/banners/cbg-7.gif",
      "categories": [
        {
          "name": "repositories",
          "links": [
            { "name": "github", "url": "https://github.com/", "icon": "brand-github", "icon_color": "#7daea3" },
            { "name": "gitlab", "url": "https://gitlab.com/", "icon": "brand-gitlab", "icon_color": "#e78a4e" }
          ]
        },
        {
          "name": "resources",
          "links": [
            { "name": "phind", "url": "https://www.phind.com/", "icon": "brand-openai", "icon_color": "#89b482" },
            {
              "name": "flutter",
              "url": "https://docs.flutter.dev/ui",
              "icon": "brand-flutter",
              "icon_color": "#7daea3"
            },
            {
              "name": "hacktricks",
              "url": "https://book.hacktricks.xyz/welcome/readme",
              "icon": "biohazard",
              "icon_color": "#ea6962"
            },
            { "name": "vscode", "url": "https://vscode.dev/", "icon": "brand-vscode", "icon_color": "#7daea3" }
          ]
        },
        {
          "name": "challenges",
          "links": [
            { "name": "hackthebox", "url": "https://app.hackthebox.com", "icon": "box", "icon_color": "#a9b665" },
            {
              "name": "cryptohack",
              "url": "https://cryptohack.org/challenges/",
              "icon": "brain",
              "icon_color": "#e78a4e"
            },
            {
              "name": "tryhackme",
              "url": "https://tryhackme.com/dashboard",
              "icon": "brand-onedrive",
              "icon_color": "#ea6962"
            },
            {
              "name": "hackerrank",
              "url": "https://www.hackerrank.com/dashboard",
              "icon": "code-asterix",
              "icon_color": "#a9b665"
            }
          ]
        }
      ]
    },
    {
      "name": "myself",
      "background_url": "src/img/banners/cbg-9.gif",
      "categories": [
        {
          "name": "mails",
          "links": [
            {
              "name": "gmail",
              "url": "https://mail.google.com/mail/u/0/",
              "icon": "brand-gmail",
              "icon_color": "#ea6962"
            },
            {
              "name": "artstation",
              "url": "https://www.artstation.com/?sort_by=community",
              "icon": "chart-area",
              "icon_color": "#7daea3"
            }
          ]
        },
        {
          "name": "storage",
          "links": [
            {
              "name": "drive",
              "url": "https://drive.google.com/drive/u/0/my-drive",
              "icon": "brand-google-drive",
              "icon_color": "#e78a4e"
            },
            {
              "name": "dropbox",
              "url": "https://www.dropbox.com/h?role=personal&di=left_nav",
              "icon": "box-seam",
              "icon_color": "#7daea3"
            }
          ]
        },
        {
          "name": "stuff",
          "links": [
            {
              "name": "linkedin",
              "url": "https://www.linkedin.com/feed/",
              "icon": "brand-linkedin",
              "icon_color": "#7daea3"
            }
          ]
        }
      ]
    }
  ],
  "storage": { "key": "config" },
  "overrideStorage": true,
  "temperature": { "location": "Rzeszów", "scale": "C" },
  "clock": { "format": "h:i p", "iconColor": "#ea6962" },
  "search": {
    "engines": {
      "g": ["https://google.com/search?q=", "Google"],
      "d": ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
      "y": ["https://youtube.com/results?search_query=", "Youtube"],
      "r": ["https://www.reddit.com/search/?q=", "Reddit"],
      "p": ["https://www.pinterest.es/search/pins/?q=", "Pinterest"]
    }
  },
  "disabled": [],
  "openLastVisitedTab": true,
  "tabs": [
    {
      "name": "chi ll",
      "background_url": "src/img/banners/cbg-2.gif",
      "categories": [
        {
          "name": "Social Media",
          "links": [
            {
              "name": "messenger",
              "url": "https://messenger.com/",
              "icon": "brand-messenger",
              "icon_color": "#7daea3"
            },
            {
              "name": "youtube",
              "url": "https://www.youtube.com/",
              "icon": "brand-youtube-filled",
              "icon_color": "#ea6962"
            },
            { "name": "reddit", "url": "https://www.reddit.com/", "icon": "brand-reddit", "icon_color": "#e78a4e" },
            {
              "name": "twitter",
              "url": "https://twitter.com/home",
              "icon": "brand-twitter-filled",
              "icon_color": "#7daea3"
            }
          ]
        },
        {
          "name": "Standard",
          "links": [
            { "name": "ggdeals", "url": "https://gg.deals/", "icon": "coin", "icon_color": "#ada9a5" },
            {
              "name": "rock paper shotgun",
              "url": "https://www.rockpapershotgun.com/news",
              "icon": "cut",
              "icon_color": "#987ecf"
            },
            {
              "name": "humble bundle",
              "url": "https://www.humblebundle.com/bundles",
              "icon": "device-gamepad-2",
              "icon_color": "#ea6962"
            },
            { "name": "retronator", "url": "https://www.retronator.com/", "icon": "rainbow", "icon_color": "#92e681" }
          ]
        },
        {
          "name": "Video",
          "links": [
            { "name": "netflix", "url": "https://www.netflix.com", "icon": "brand-netflix", "icon_color": "#ea6962" },
            { "name": "hianime", "url": "https://hianime.to/", "icon": "helicopter-landing", "icon_color": "#ffbade" },
            { "name": "animepahe", "url": "https://animepahe.ru/", "icon": "world", "icon_color": "#ea6962" },
            { "name": "twitch", "url": "https://www.twitch.tv/", "icon": "brand-twitch", "icon_color": "#d3869b" }
          ]
        }
      ]
    },
    {
      "name": "dev",
      "background_url": "src/img/banners/cbg-7.gif",
      "categories": [
        {
          "name": "repositories",
          "links": [
            { "name": "github", "url": "https://github.com/", "icon": "brand-github", "icon_color": "#7daea3" },
            { "name": "gitlab", "url": "https://gitlab.com/", "icon": "brand-gitlab", "icon_color": "#e78a4e" }
          ]
        },
        {
          "name": "resources",
          "links": [
            { "name": "phind", "url": "https://www.phind.com/", "icon": "brand-openai", "icon_color": "#89b482" },
            {
              "name": "flutter",
              "url": "https://docs.flutter.dev/ui",
              "icon": "brand-flutter",
              "icon_color": "#7daea3"
            },
            {
              "name": "hacktricks",
              "url": "https://book.hacktricks.xyz/welcome/readme",
              "icon": "biohazard",
              "icon_color": "#ea6962"
            },
            { "name": "vscode", "url": "https://vscode.dev/", "icon": "brand-vscode", "icon_color": "#7daea3" }
          ]
        },
        {
          "name": "challenges",
          "links": [
            { "name": "hackthebox", "url": "https://app.hackthebox.com", "icon": "box", "icon_color": "#a9b665" },
            {
              "name": "cryptohack",
              "url": "https://cryptohack.org/challenges/",
              "icon": "brain",
              "icon_color": "#e78a4e"
            },
            {
              "name": "tryhackme",
              "url": "https://tryhackme.com/dashboard",
              "icon": "brand-onedrive",
              "icon_color": "#ea6962"
            },
            {
              "name": "hackerrank",
              "url": "https://www.hackerrank.com/dashboard",
              "icon": "code-asterix",
              "icon_color": "#a9b665"
            }
          ]
        }
      ]
    },
    {
      "name": "myself",
      "background_url": "src/img/banners/cbg-9.gif",
      "categories": [
        {
          "name": "mails",
          "links": [
            {
              "name": "gmail",
              "url": "https://mail.google.com/mail/u/0/",
              "icon": "brand-gmail",
              "icon_color": "#ea6962"
            }
          ]
        },
        {
          "name": "storage",
          "links": [
            {
              "name": "drive",
              "url": "https://drive.google.com/drive/u/0/my-drive",
              "icon": "brand-google-drive",
              "icon_color": "#e78a4e"
            },
            {
              "name": "dropbox",
              "url": "https://www.dropbox.com/h?role=personal&di=left_nav",
              "icon": "box-seam",
              "icon_color": "#7daea3"
            }
          ]
        },
        {
          "name": "stuff",
          "links": [
            {
              "name": "linkedin",
              "url": "https://www.linkedin.com/feed/",
              "icon": "brand-linkedin",
              "icon_color": "#7daea3"
            }
          ]
        }
      ]
    }
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function() {
  var css = document.createElement('link');
  css.href = 'src/css/tabler-icons.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName('head')[0].appendChild(css);
})();
