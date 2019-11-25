!function() {
    "use strict";
    /* Copyright (c) 2019 Outwalk Studios */    class t {
        static async load(t) {
            try {
                let e = await fetch(t);
                return await e.text();
            } catch {
                return console.error(`Failed to load data from url: ${t}`), "";
            }
        }
    }
    class e {
        constructor(t, e = "app") {
            this.html = t, this.id = e, this.subviews = [];
        }
        add(t) {
            this.subviews.push(t);
        }
        async render() {
            let e = document.getElementById(this.id);
            if (this.html.endsWith(".html") || this.html.endsWith(".htm")) {
                let s = await t.load(this.html);
                this.html = s, e.innerHTML = s;
            } else e.innerHTML = this.html;
            for (let t of this.subviews) await t.render(), await t.run();
        }
        async run() {}
    }
    Object.freeze({
        HTTP_100_CONTINUE: 100,
        HTTP_101_SWITCHING_PROTOCOL: 101,
        HTTP_102_PROCESSING: 102,
        HTTP_103_EARLY_HINTS: 103,
        HTTP_200_OK: 200,
        HTTP_201_CREATED: 201,
        HTTP_202_ACCEPTED: 202,
        HTTP_203_NON_AUTHORITIVE_INFORMATION: 203,
        HTTP_204_NO_CONTENT: 204,
        HTTP_205_RESET_CONTENT: 205,
        HTTP_206_PARTIAL_CONTENT: 206,
        HTTP_207_MULTI_STATUS: 207,
        HTTP_208_ALREADY_REPORTED: 208,
        HTTP_226_IM_USED: 226,
        HTTP_300_MULTIPLE_CHOICE: 300,
        HTTP_301_MOVED_PERMANENTLY: 301,
        HTTP_302_FOUND: 302,
        HTTP_303_SEE_OTHER: 303,
        HTTP_304_NOT_MODIFIED: 304,
        HTTP_305_USE_PROXY: 305,
        HTTP_306_UNUSED: 306,
        HTTP_307_TEMPORARY_REDIRECT: 307,
        HTTP_308_PERMANENT_REDIRCT: 308,
        HTTP_400_BAD_REQUEST: 400,
        HTTP_401_UNAUTHORIZED: 401,
        HTTP_402_PAYMNT_REQUIRED: 402,
        HTTP_403_FORBIDDEN: 403,
        HTTP_404_NOT_FOUND: 404,
        HTTP_405_METHOD_NOT_ALLOWED: 405,
        HTTP_406_NOT_ACCEPTABLE: 406,
        HTTP_407_PROXY_AUTHENTICATION_REQUIRED: 407,
        HTTP_408_REQUEST_TIMEOUT: 408,
        HTTP_409_CONFLICT: 409,
        HTTP_410_GONE: 410,
        HTTP_411_LENGTH_REQUIRED: 411,
        HTTP_412_PRECONDITION_FAILED: 412,
        HTTP_413_PAYLOAD_TOO_LARGE: 413,
        HTTP_414_URI_TOO_LONG: 414,
        HTTP_415_UNSUPPORTED_MEDIA_TYPE: 415,
        HTTP_416_REQUEST_RANGE_NOT_SATISFIABLE: 416,
        HTTP_417_EXPECTATION_FAILED: 417,
        HTTP_418_IM_A_TEAPOT: 418,
        HTTP_421_MISDIRECTED_REQUEST: 421,
        HTTP_422_UNPROCESSABLE_ENTITY: 422,
        HTTP_423_LOCKED: 423,
        HTTP_424_FAILED_DEPENDENCY: 424,
        HTTP_425_TOO_EARLY: 425,
        HTTP_426_UPGRADE_REQUIRED: 426,
        HTTP_428_PRECONDITION_PREQUIRED: 428,
        HTTP_429_TOO_MANY_REQUEST: 429,
        HTTP_431_REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
        HTTP_451_UNAVAILABLE_FOR_LEGAL_REASONS: 451,
        HTTP_500_INTERNAL_SERVER_ERROR: 500,
        HTTP_501_NOT_IMPLEMENTED: 501,
        HTTP_502_BAD_GATEWAY: 502,
        HTTP_503_SERVICE_UNAVAILABLE: 503,
        HTTP_504_GATEWAY_TIMEOUT: 504,
        HTTP_505_HTTP_VERSION_NOT_SUPPORTED: 505,
        HTTP_506_VARIANT_ALSO_NEGOTIATES: 506,
        HTTP_507_INSUFFICIENT_STORAGE: 507,
        HTTP_508_LOOP_DETECTED: 508,
        HTTP_510_NOT_EXTENDED: 510,
        HTTP_511_NETWORK_AUTHENTICATION_REQUIRED: 511
    });
    class s {
        constructor() {}
        moveToDestination(t, e) {
            // subtract (= difference vector)
            var s = e.x - t.x, i = e.y - t.y, h = Math.sqrt(s * s + i * i);
            h && (s /= h, i /= h), 
            // move
            // delta is the elapsed time in seconds
            // SPEED is the speed in units per second (UPS)
            t.x += 1 * s, t.y += 1 * i;
        }
        watchTarget(t, e) {
            let s = t.x, i = t.y, h = e.x - s, a = e.y - i;
            return Math.atan2(a, h);
        }
    }
    class i {
        constructor(t, e, s) {
            this.name = t, this.count = e, s[t] ? this.img = s[t] : this.img = s.unknown;
        }
    }
    class h {
        constructor(t) {
            this.items = [], this.assets = t, this.columns = 7, this.rows = 5, this.open = !1;
        }
        addItem(t, e, s) {
            if (this.items.length >= this.columns * this.rows + s) {
                if (this.items.length > 0) for (let h of this.items) if (h.name == t) h.count += s, 
                console.log(`${h.name}: ${h.count}`); else switch (e) {
                  case "Equipment":
                    break;

                  default:
                    this.items.push(new i(t, s, this.assets)), console.log(this.items);
                }
            } else switch (e) {
              case "Equipment":
                break;

              default:
                this.items.push(new i(t, s, this.assets)), console.log(this.items);
            }
        }
        removeItem(t, e) {
            for (let s = 0; s < this.items.length; s++) {
                let i = this.items[s];
                i.name == t && (i.count -= e, i.count <= 0 && this.items.splice(s, 1));
            }
        }
        display() {
            this.invDisplay = document.createElement("div"), this.invDisplay.width = this.rows, 
            this.invDisplay.height = this.columns, this.invDisplay.style = "display: grid;", 
            this.invDisplay.style.position = "absolute", this.invDisplay.style.top = "0px", 
            this.invDisplay.style.left = "0px";
            for (let t of this.items) this.invDisplay.appendChild(t.img);
            document.body.appendChild(this.invDisplay), this.open = !0;
        }
        hide() {
            document.body.removeChild(this.invDisplay), this.open = !1;
        }
    }
    class a {
        constructor(t) {
            this.x = 0, this.y = 0, this.velX = 0, this.velY = 0, this.img = t.player, this.width = this.img.width, 
            this.height = this.img.height, this.rotation = 90, this.speed = 5, this.inventory = new h(t), 
            this.equipment = {
                head: null,
                shoulders: null,
                arms: null,
                gloves: null,
                backWeapon: null,
                leftWeapon: null,
                rightWeapon: null,
                leggings: null,
                boots: null
            };
        }
        addItem(t, e, s) {
            this.inventory.addItem(t, e, s);
        }
        removeItem(t, e) {
            this.inventory.removeItem(t, e);
        }
        equipItem(t, e) {
            this.inventory.removeItem(t), this.equipment[e].push(t);
        }
        unequipItem(t, e) {
            this.equipment[e] = null, this.inventory.push(new i(t, 1));
        }
    }
    class n {
        constructor() {
            this.canvas = document.getElementById("canva"), this.ctx = this.canvas.getContext("2d");
        }
        clear() {
            this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        }
        draw(t) {
            this.ctx.save(), t.rotation && (this.ctx.translate(t.x + t.width / 2, t.y + t.height / 2), 
            this.ctx.rotate(t.rotation)), this.ctx.drawImage(t.img, t.x, t.y), this.ctx.restore();
        }
        update(t) {
            t.x += t.velX, t.y += t.velY;
        }
    }
    class o {
        constructor(t, e) {
            e = e || {}, this.distance = 1e3, this.lookat = [ 0, 0 ], this.context = t, this.fieldOfView = e.fieldOfView || Math.PI / 4, 
            this.viewport = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                width: 0,
                height: 0,
                scale: [ 1, 1 ]
            }, this.update();
        }
        begin() {
            this.context.save(), this.applyScale(), this.applyTranslation();
        }
        end() {
            this.context.restore();
        }
        applyScale() {
            this.context.scale(this.viewport.scale[0], this.viewport.scale[1]);
        }
        applyTranslation() {
            this.context.translate(-this.viewport.left, -this.viewport.top);
        }
        update() {
            this.aspectRatio = this.context.canvas.width / this.context.canvas.height, this.viewport.width = this.distance * Math.tan(this.fieldOfView), 
            this.viewport.height = this.viewport.width / this.aspectRatio, this.viewport.left = this.lookat[0] - this.viewport.width / 2, 
            this.viewport.top = this.lookat[1] - this.viewport.height / 2, this.viewport.right = this.viewport.left + this.viewport.width, 
            this.viewport.bottom = this.viewport.top + this.viewport.height, this.viewport.scale[0] = this.context.canvas.width / this.viewport.width, 
            this.viewport.scale[1] = this.context.canvas.height / this.viewport.height;
        }
        zoomTo(t) {
            this.distance = t, this.update();
        }
        moveTo(t, e) {
            this.lookat[0] = t, this.lookat[1] = e, this.update();
        }
        screenToWorld(t, e, s) {
            return (s = s || {}).x = t / this.viewport.scale[0] + this.viewport.left, s.y = e / this.viewport.scale[1] + this.viewport.top, 
            s;
        }
        worldToScreen(t, e, s) {
            return (s = s || {}).x = (t - this.viewport.left) * this.viewport.scale[0], s.y = (e - this.viewport.top) * this.viewport.scale[1], 
            s;
        }
    }
    class r {
        constructor(t) {
            this.ctx = t, this.x = 0, this.y = 0, this.velX = 0, this.velY = 0, this.img = new Image, 
            this.img.src = "./assets/cursor.png", this.speed = 1.5;
        }
        updatePosition(t, e) {
            this.x += t.movementX, this.y += t.movementY;
        }
        draw() {
            this.ctx.drawImage(this.img, this.x, this.y);
        }
        update() {
            this.x += 1.5 * this.velX, this.y += 1.5 * this.velY;
        }
    }
    class l extends Image {
        constructor(t) {
            super(), this.src = t;
        }
    }
    class c {
        constructor() {
            this.assets = {
                unknown: new l("../../assets/unknown.png"),
                player: new l("../../assets/player.png")
            }, this.keybinds = new s, this.player = new a(this.assets), this.batch = new n, 
            this.camera = new o(this.batch.ctx), this.cursor = new r(this.batch.ctx), this.batch.canvas.requestPointerLock = this.batch.canvas.requestPointerLock || this.batch.canvas.mozRequestPointerLock, 
            document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock, 
            this.batch.canvas.onclick = () => {
                this.batch.canvas.requestPointerLock();
            }, document.addEventListener("pointerlockchange", () => {
                this.lockChangeAlert(this.batch);
            }, !1), document.addEventListener("mozpointerlockchange", () => {
                this.lockChangeAlert(this.batch);
            }, !1), document.addEventListener("keydown", t => {
                switch (t.key) {
                  case "w":
                    this.player.velY = -5;
                    break;

                  case "a":
                    this.player.velX = -5;
                    break;

                  case "s":
                    this.player.velY = 5;
                    break;

                  case "d":
                    this.player.velX = 5;
                    break;

                  case "e":
                    this.player.inventory.open ? this.player.inventory.hide() : this.player.inventory.display();
                }
            }), document.addEventListener("keyup", t => {
                switch (t.key) {
                  case "w":
                    this.player.velY = -0;
                    break;

                  case "a":
                    this.player.velX = -0;
                    break;

                  case "s":
                    this.player.velY = 0;
                    break;

                  case "d":
                    this.player.velX = 0;
                }
            }), this.player.addItem("unknown", null, 1);
        }
        lockChangeAlert(t) {
            document.pointerLockElement === t.canvas || document.mozPointerLockElement === t.canvas ? document.addEventListener("mousemove", e => {
                this.cursor.updatePosition(e, t.canvas);
            }, !1) : document.removeEventListener("mousemove", e => {
                this.cursor.updatePosition(e, t.canvas);
            }, !1);
        }
        render() {
            this.batch.clear(), this.camera.begin(), this.camera.moveTo(this.player.x, this.player.y), 
            this.batch.draw(this.player), this.batch.draw(this.cursor), this.camera.end();
        }
        update() {
            this.player.rotation = this.keybinds.watchTarget(this.player, this.cursor), this.batch.update(this.player);
        }
    }
    class T {}
    class _ {}
    // Imports
    // Webpages to be loaded into the router
        let d = new e("\n    <h2>Choose your console</h2>\n    <button id='pc'>Computer (PC)</button>\n    <button id='console'>Console (XBOX | SWITCH | PS' </buttom>\n    <button id='mobile'> Mobile (Phones, Tablets) </button>\n");
    d.run = () => {
        document.querySelectorAll("button").forEach(t => {
            t.onclick = () => {
                localStorage.setItem("console", t.id), window.location = "./#/game";
            };
        });
    };
    let E = new e("\n    <link rel='stylesheet' href='./styles/global.css'>\n    <canvas id='canva'></canvas>\n"), p = null;
    function u() {
        p.render(), p.update(), requestAnimationFrame(u);
    }
    E.run = () => {
        let t = document.getElementById("canva");
        switch (t.width = window.innerWidth, t.height = window.innerHeight, localStorage.getItem("console")) {
          case "pc":
            let t = new c;
            p = t, requestAnimationFrame(u);
            break;

          case "console":
            let e = new T;
            p = e, requestAnimationFrame(u);
            break;

          case "mobile":
            let s = new _;
            p = s, requestAnimationFrame(u);
        }
    }, 
    // Starts the router
    new class {
        constructor(t) {
            this.routes = t || {};
        }
        route(t, e) {
            this.routes[t] = e;
        }
        start() {
            window.addEventListener("hashchange", () => {
                this.hashChange();
            }), this.hashChange();
        }
        parseRequestURL() {
            let t = (window.location.hash.slice(1).toLowerCase() || "/").split("/");
            return (t[1] ? "/" + t[1] : "/") + (t[2] ? "/:id" : "") + (t[3] ? "/" + t[3] : "");
        }
        static getURLData() {
            let t = (window.location.hash.slice(1).toLowerCase() || "/").split("/");
            return {
                resource: t[1],
                id: t[2],
                action: t[3]
            };
        }
        async hashChange() {
            let t = this.parseRequestURL(), s = this.routes[t] ? this.routes[t] : new e("<div>Error 404: Not Found</div>");
            await s.render(), await s.run();
        }
    }({
        "/": d,
        "/game": E
    }).start();
}();
