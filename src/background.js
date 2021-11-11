(function () {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  class Queue {
    constructor(maxsize = 5) {
      this.maxsize = maxsize;
      this.queue = [];
    }

    qsize() {
      return this.queue.length;
    }

    empty() {
      return this.queue.length === 0;
    }

    full() {
      return this.queue.length === this.queue.maxsize;
    }

    get() {
      return this.queue.shift();
    }

    put(item) {
      if (this.queue.length < this.maxsize) {
        this.queue.push(item);
      }
    }
  }

  class ImageController {
    constructor() {
      this.illustInfoPool = new Queue(3);
      this.illustInfoPages = {};
      // this.positiveTagArray = [
      //   // "オリジナル",
      //   "女の子",
      //   // "漫画",
      //   "東方",
      //   // "落書き",
      //   // "アナログ",
      //   // "創作",
      //   "艦これ",
      //   // "ポケモン",
      //   "イラスト",
      //   "艦隊これくしょん",
      //   "初音ミク",
      //   "VOCALOID",
      //   // "オリキャラ",
      //   // "らくがき",
      //   "少女",
      //   // "Fate/GrandOrder",
      //   "おっぱい",
      //   // "FGO",
      //   // "アイドルマスターシンデレラガールズ",
      //   // "ケモノ",
      //   "水着",
      //   // "東方Project",
      //   // "原创",
      //   // "擬人化",
      //   // "なにこれかわいい",
      //   // "練習",
      //   "百合",
      //   "ラブライブ!",
      //   "アイドルマスター",
      //   "バーチャルYouTuber",
      //   // "模写",
      //   // "fanart",
      //   "魔法少女まどか☆マギカ",
      //   "巨乳",
      //   // "原創",
      //   // "うごイラ",
      //   // "girl",
      //   "風景",
      //   "ドット絵",
      //   "ファンタジー",
      //   // "版権",
      //   // "制服",
      //   // "ハロウィン",
      //   // "猫",
      //   "背景",
      //   // "コピック",
      //   // "original",
      //   // "水彩",
      //   "ロリ",
      //   // "anime",
      //   "セーラー服",
      //   // "illustration",
      //   // "ホロライブ",
      //   // "艦これかわいい",
      //   "けものフレンズ",
      //   // "東方project",
      //   // "うちの子",
      //   "VTuber",
      //   // "色鉛筆",
      //   "アズールレーン",
      //   // "鏡音リン",
      //   // "クリスマス",
      //   // "デジタル",
      //   // "かわいい",
      //   // "Original",
      //   // "動物",
      //   // "猫耳",
      //   // "モノクロ",
      //   // "チルノ",
      //   "女子高生",
      //   "アークナイツ",
      //   // "描いてもいいのよ",
      //   "プリキュア",
      //   // "3DCG",
      //   // "art",
      //   "原神",
      //   "ツインテール",
      //   // "ラブライブ!サンシャイン!!",
      //   "明日方舟",
      //   // "博麗霊夢",
      //   // "ウマ娘プリティーダービー",
      //   "ガールズ&パンツァー",
      //   // "霧雨魔理沙",
      //   "ウマ娘",
      //   "少女前線",
      //   // "ふつくしい",
      //   "魅惑のふともも",
      //   // "ドールズフロントライン",
      //   // "魅惑の谷間",
      //   "ガンダム",
      //   // "ブラックマジシャンガール",
      //   "スク水",
      //   // "フランドール・スカーレット",
      //   // "パンツ",
      //   "グランブルーファンタジー",
      //   "バニーガール",
      //   // "黒タイツ",
      //   "尻神様",
      //   // "極上の乳",
      //   "おへそ",
      //   "プリンセスコネクト!Re:Dive",
      //   // "仕事絵",
      //   // "エロマンガ先生",
      // ];
      // this.negativeTagArray = [
      //   "腐向け",
      //   "腐",
      //   // "ヘタリア",
      //   // "ケモノ",
      //   "刀剣乱舞",
      //   // "おそ松さん",
      //   "女体化",
      //   "男の子",
      //   "ショタ",
      //   "鬼滅の刃",
      //   "僕のヒーローアカデミア",
      //   // "黒子のバスケ",
      //   // "銀魂",
      //   // "進撃の巨人",
      //   // "ハイキュー!!",
      //   // "ワンピース",
      //   // "獣人",
      //   // "テニスの王子様",
      //   // "戦国BASARA",
      //   // "忍たま",
      //   "twst夢",
      //   "少年",
      //   "美男子",
      //   // "イナズマイレブン",
      //   "デフォルメ",
      //   // "にじさんじ",
      //   "描き方",
      //   "講座",
      //   "作画資料",
      //   "創作",
      //   "素材",
      //   "漫画",
      //   "SideM",
      //   "メイキング",
      // ];
      this.positiveTagArray = ["10000users入り"];
      this.negativeTagArray = [
        "虚偽users入りタグ",
        "描き方",
        "講座",
        "作画資料",
        "創作",
        "素材",
        "漫画",
      ];
      this.searchParam = {
        order: "date_d",
        mode: "safe",
        p: "1",
        // blt: "10000",
        s_mode: "s_tag",
        type: "illust",
      };
      this.totalPage = 100;
      this.itemsPerPage = 60;
      this.baseUrl = "https://www.pixiv.net";
      this.searchUrl = "/ajax/search/illustrations/";
      this.discoveryUrl = "/ajax/discovery/artworks?mode=safe&limit=100";
      this.illustInfoUrl = "/ajax/illust/";
      this.maxRetries = 3;
      this.concurrencyLimit = 3;
      this.running = 0;
    }

    replaceSpecialCharacter = (function () {
      var reg = /[!'()~]/g;
      var mapping = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
      };
      var map = function (e) {
        return mapping[e];
      };
      var fn = function (e) {
        return encodeURIComponent(e).replace(reg, map);
      };
      return fn;
    })();

    convertImageUrl(url) {
      let u = new URL(url);
      let o = u.origin;
      let i, p;
      for (let s of ["/img-master", "/custom-thumb"]) {
        i = u.pathname.indexOf(s);
        if (i === -1) {
          continue;
        }
        if (s === "/img-master") {
          p = u.pathname.slice(i).replace("square", "master");
          break;
        }
        if (s === "/custom-thumb") {
          p =
            "/img-master" +
            u.pathname.slice(i + 13).replace("custom", "master");
          break;
        }
      }
      if (!p) {
        return "";
      } else {
        return o + p;
      }
    }

    generateSearchUrl(p = 1) {
      let sp = this.searchParam;
      let firstPart = "";
      let secondPart = "";
      sp.p = p;

      let pWord = this.positiveTagArray.join(" OR ");
      let nWord = " -" + this.negativeTagArray.join(" -");
      let word = pWord + nWord;
      firstPart = encodeURIComponent(word);
      let secondPartArray = [];
      secondPartArray.push("?word=" + this.replaceSpecialCharacter(word));
      for (let o in sp) {
        secondPartArray.push(`${o}=${sp[o]}`);
      }
      secondPart = secondPartArray.join("&");

      return firstPart + secondPart;
    }

    async fetchImage(url) {
      let res = await fetch(url);

      if (!res || !res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return await res.blob();
    }

    async pixivAjaxFetch(url) {
      let res = await fetch(url);

      if (!res || !res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      let jsonResult = await res.json();
      if (jsonResult.error) {
        throw new Error(`Response error! message: ${res.message}`);
      }
      return jsonResult;
    }

    async searchIllustPage(p) {
      let paramUrl = this.generateSearchUrl(p);
      let url = new URL(this.searchUrl + paramUrl, this.baseUrl);
      let jsonResult = await this.pixivAjaxFetch(url);
      return jsonResult;
    }

    async fetchIllustInfo(illustId) {
      let url = new URL(this.illustInfoUrl + `${illustId}`, this.baseUrl);
      let jsonResult = await this.pixivAjaxFetch(url);
      return jsonResult;
    }

    async discoveryIllust() {
      let url = new URL(this.discoveryUrl, this.baseUrl);
      let jsonResult = await this.pixivAjaxFetch(url);
      return jsonResult;
    }

    async generateRandomIllustInfo() {
      ++this.running;
      let randomPage = getRandomInt(0, this.totalPage) + 1;
      if (!this.illustInfoPages[randomPage]) {
        let pageObj = await this.searchIllustPage(randomPage);
        let total = pageObj.body.illust.total;
        let tp = Math.ceil(total / this.itemsPerPage);
        if (tp > this.totalPage) {
          this.totalPage = tp;
        }
        // this.illustInfoPages[randomPage] = pageObj.body.illust.data.filter(
        //   (el) => el.sl < 3
        // );
        this.illustInfoPages[randomPage] = pageObj.body.illust.data;
      }
      let illustArray = this.illustInfoPages[randomPage];

      let randomIndex = getRandomInt(0, illustArray.length);
      let illustInfo = illustArray[randomIndex];

      let illustId = illustInfo.id;
      let imgUrl = this.convertImageUrl(illustInfo.url);
      let userName = illustInfo.userName;
      let userId = illustInfo.userId;
      let illustTitle = illustInfo.title;
      let userProfileUrl = illustInfo.profileImageUrl;
      let imgBlob = await this.fetchImage(imgUrl);
      let objectURL = URL.createObjectURL(imgBlob);
      let userProfileBlob = await this.fetchImage(userProfileUrl);
      let upURL = URL.createObjectURL(userProfileBlob);
      let result = {
        userName: userName,
        userId: `${userId}`,
        illustId: `${illustId}`,
        userIdUrl: `${this.baseUrl}/users/${userId}`,
        illustIdUrl: `${this.baseUrl}/artworks/${illustId}`,
        title: illustTitle,
        profileImageUrl: upURL,
        imageObjectUrl: objectURL,
      };
      this.illustInfoPool.put(result);
      --this.running;
    }

    async getOneIllustInfo() {
      let rt = this.illustInfoPool.get();
      while (!rt) {
        {
          try {
            await this.fillIllustInfoPool();
          } catch (error) {
            await new Promise((resolve) => setTimeout(resolve, 500));
          } finally {
            rt = this.illustInfoPool.get();
          }
        }
      }
      return rt;
    }

    async prefetchIllustInfo() {
      if (
        this.illustInfoPool.qsize() < Math.ceil(this.illustInfoPool.maxsize / 2)
      ) {
        try {
          await this.fillIllustInfoPool();
        } catch (error) {}
      }
    }

    async fillIllustInfoPool() {
      let tasks = [];
      let i = 0;
      let pendings = this.running;
      let availableSlots =
        this.illustInfoPool.maxsize - this.illustInfoPool.qsize();
      for (
        ;
        i < Math.min(this.concurrencyLimit, availableSlots - pendings);
        ++i
      ) {
        tasks.push(this.generateRandomIllustInfo());
      }
      return await Promise.any(tasks);
    }
  }

  const imageController = new ImageController();

  chrome.webRequest.onBeforeSendHeaders.addListener(
    function (details) {
      let existed = false;
      let refName = "Referer";
      let refValue = "https://www.pixiv.net/";
      for (var i = 0; i < details.requestHeaders.length; ++i) {
        if (
          details.requestHeaders[i].name.toLowerCase() === refName.toLowerCase()
        ) {
          details.requestHeaders[i].value = refValue;
          existed = true;
          break;
        }
      }
      if (!existed) {
        details.requestHeaders.push({
          name: refName,
          value: refValue,
        });
      }
      return { requestHeaders: details.requestHeaders };
    },
    { urls: ["https://www.pixiv.net/*", "https://i.pximg.net/*"] },
    ["blocking", "requestHeaders", "extraHeaders"]
  );

  chrome.runtime.onMessage.addListener(function (
    message,
    sender,
    sendResponse
  ) {
    if (message.action === "fetchImage") {
      imageController.getOneIllustInfo().then((res) => {
        sendResponse(res);
        imageController.prefetchIllustInfo();
      });
    }
    return true;
  });
})();
