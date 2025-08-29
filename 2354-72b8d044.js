(window["webpackJsonpTchApp"] = window["webpackJsonpTchApp"] || []).push([[2354], {
  71845 : function(e, t, n) {
    var r = {
      "./ar.js": 277537,
      "./en-US.js": 597516,
      "./en.js": 852482,
      "./zh-CN.js": 462132,
      "./zh-HK.js": 422164,
      "@sdp.nd/elearning-general-module/lib/exam-answer-ui-player/locale/ar.js": 277537,
      "@sdp.nd/elearning-general-module/lib/exam-answer-ui-player/locale/en-US.js": 597516,
      "@sdp.nd/elearning-general-module/lib/exam-answer-ui-player/locale/en.js": 852482,
      "@sdp.nd/elearning-general-module/lib/exam-answer-ui-player/locale/zh-CN.js": 462132,
      "@sdp.nd/elearning-general-module/lib/exam-answer-ui-player/locale/zh-HK.js": 422164
    };
    function a(e) {
      var t = i(e);
      return n(t)
    }
    function i(e) {
      if (!n.o(r, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw t.code = "MODULE_NOT_FOUND",
        t
      }
      return r[e]
    }
    a.keys = function() {
      return Object.keys(r)
    },
    a.resolve = i,
    e.exports = a,
    a.id = 71845
  },
  630974 : function(e, t, n) {
    var r = {
      "./ar.js": 467569,
      "./en-US.js": 195461,
      "./en.js": 294183,
      "./zh-CN.js": 973574,
      "./zh-HK.js": 266874,
      "@sdp.nd/elearning-general-module/lib/question-player/locale/ar.js": 467569,
      "@sdp.nd/elearning-general-module/lib/question-player/locale/en-US.js": 195461,
      "@sdp.nd/elearning-general-module/lib/question-player/locale/en.js": 294183,
      "@sdp.nd/elearning-general-module/lib/question-player/locale/zh-CN.js": 973574,
      "@sdp.nd/elearning-general-module/lib/question-player/locale/zh-HK.js": 266874
    };
    function a(e) {
      var t = i(e);
      return n(t)
    }
    function i(e) {
      if (!n.o(r, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw t.code = "MODULE_NOT_FOUND",
        t
      }
      return r[e]
    }
    a.keys = function() {
      return Object.keys(r)
    },
    a.resolve = i,
    e.exports = a,
    a.id = 630974
  },
  128240 : function(e, t, n) {
    "use strict";
    var r = n(725720),
    a = (n(648324), n(634338), n(879288), n(667294)),
    i = n(637865),
    o = n(83763),
    c = n(913494),
    l = n(193318);
    function u(e) {
      var t = e.data,
      n = void 0 === t ? {
        url: "",
        beginPage: 1
      }: t,
      u = e.onPageChange,
      s = void 0 === u ?
      function() {}: u,
      d = e.origin,
      m = e.pageName,
      v = e.trackInfo,
      _ = e.maxPosition,
      f = e.controlSeeking,
      p = _ || 1,
      g = n.beginPage || 1,
      h = (0, a.useRef)(null),
      y = (0, a.useRef)((function() {})),
      b = (0, a.useRef)({}),
      x = (0, a.useState)(!1),
      w = (0, r.Z)(x, 2),
      k = w[0],
      E = w[1],
      P = (0, a.useState)(!1),
      C = (0, r.Z)(P, 2),
      S = C[0],
      I = C[1],
      N = (0, a.useState)(""),
      T = (0, r.Z)(N, 2),
      R = T[0],
      Z = T[1],
      O = (0, l.isTestHost)() ? "https://teach-test.ykt.eduyun.cn": "https://teacher.ykt.eduyun.cn",
      D = null !== n && void 0 !== n && n.headers ? encodeURI(JSON.stringify(null === n || void 0 === n ? void 0 : n.headers)) : ""; (0, a.useEffect)((function() {
        if (n.url) {
          var e = "".concat(O, "/pdfjs/2.13/web/viewer.html?file=").concat(encodeURI(n.url)).concat(D ? "&headers=".concat(D) : "", "&_v=20240509#disablestream=true&disableAutoFetch=true&page=").concat(g);
          Z(""),
          setTimeout((function() {
            Z(e)
          }), 0)
        }
      }), [n.url, g]);
      var L = (0, a.useCallback)((function() {
        f && h.current.contentWindow.postMessage({
          type: "pdfPlayerArgumentsChange",
          data: {
            controlSeeking: f,
            maxPosition: g > p ? g: p,
            beginPage: g > p ? g: p
          }
        },
        "*")
      }), [f, _, n]),
      j = function() {
        if (v) {
          var e = v.resource_id,
          t = v.resource_type,
          n = v.column_code,
          r = v.channel_code; (0, o.Zk)({
            eventName: "resource_duration",
            params: {
              resource_type: t,
              resource_id: e,
              column_code: n,
              channel_code: r,
              time_point: (new Date).getTime()
            }
          })
        }
      };
      return (0, a.useEffect)((function() {
        S && L()
      }), [f, _, S]),
      window.removeEventListener("message", y.current),
      y.current = (0, a.useCallback)((function(e) {
        var t = e.data;
        switch (console.log("msgData", null === t || void 0 === t ? void 0 : t.type), null === t || void 0 === t ? void 0 : t.type) {
        case "pdfPlayerLoaded":
          I(!0);
          break;
        case "pdfPlayerInitPage":
        case "pdfPlayerPageChangeing":
          if (f && t.data.pageNumber > p + 1) {
            L();
            break
          }
          s({
            currentPage: t.data.pageNumber,
            pageCount: t.data.pageCount
          });
          break;
        case "pdfPlayerNextPage":
        case "pdfPlayerPreviousPage":
        case "pdfPlayerPageNumberChanged":
          "TCH" === d ? ((0, i.hC)({
            eventName: "TCH_webPlatform_detail_Document_turnpage_click",
            pageName: m || "TCH_webPlatform_detail_Document_turnpage_click",
            params: v
          }), j()) : c.Z.trackEvent({
            eventId: "edu_webPlatform_Document_turnpage_click"
          });
          break;
        case "pdfPlayerSidebarViewChanged":
          "TCH" === d ? ((0, i.hC)({
            eventName: "TCH_webPlatform_detail_Document_on-offFilelist_click",
            pageName: m || "TCH_webPlatform_detail_Document_on-offFilelist_click",
            params: v
          }), j()) : c.Z.trackEvent({
            eventId: "edu_webPlatform_Document_on-offfilelist_click"
          });
          break;
        case "pdfPlayerScaleChanging":
          if ((new Date).getTime() - Number(b.current.pdfPlayerScaleChanging) < 500) break;
          if (k) break;
          b.current.pdfPlayerScaleChanging = (new Date).getTime(),
          "TCH" === d && ((0, i.hC)({
            eventName: "TCH_webPlatform_detail_Document_pictureScale_click",
            pageName: m || "TCH_webPlatform_detail_Document_pictureScale_click",
            params: {
              document_scale: t.data.scale
            }
          }), j());
          break;
        case "pdfPlayerFullscreenChanged":
          if ((new Date).getTime() - Number(b.current.pdfPlayerFullscreenChanged) < 500) break;
          b.current.pdfPlayerFullscreenChanged = (new Date).getTime(),
          setTimeout((function() {
            E(t.data.isFullscreen)
          }), t.data.isFullscreen ? 0 : 200),
          "TCH" === d ? ((0, i.hC)({
            eventName: "TCH_webPlatform_detail_Document_Fullscreen_click",
            pageName: m || "TCH_webPlatform_detail_Document_Fullscreen_click",
            params: {
              screen_state: t.data.isFullscreen ? "打开全屏": "退出全屏"
            }
          }), j()) : c.Z.trackEvent({
            eventId: t.data.isFullscreen ? "edu_webPlatform_player_Fullscreen_click": "edu_webPlatform_player_Exitfullscreen_click",
            info: {
              type: "文档播放器"
            }
          });
          break;
        case "pdfPlayerThumbnailViewerClick":
          "TCH" === d ? ((0, i.hC)({
            eventName: "TCH_webPlatform_detail_Document_switchFilelist_click",
            pageName: m || "TCH_webPlatform_detail_Document_switchFilelist_click",
            params: v
          }), j()) : c.Z.trackEvent({
            eventId: "edu_webPlatform_Document_switchfilelist_click"
          });
          break;
        default:
          break
        }
      }), [d, m, v, s, k]),
      window.addEventListener("message", y.current),
      (0, a.useEffect)((function() {
        return function() {
          window.removeEventListener("message", y.current)
        }
      }), []),
      R ? a.createElement("iframe", {
        key: "pdfViewer",
        ref: h,
        src: R,
        style: {
          height: "640px",
          width: "100%",
          border: 0,
          display: "block"
        },
        allowFullScreen: !0,
        allowaymentrequest: !0
      }) : a.createElement("div", {
        style: {
          height: "640px",
          width: "100%",
          border: 0,
          display: "block"
        }
      })
    }
    t.Z = u
  },
  703268 : function(e, t, n) {
    "use strict";
    n.d(t, {
      Z: function() {
        return S
      }
    });
    n(425728),
    n(260228),
    n(976801),
    n(450886),
    n(634338);
    var r = n(667294),
    a = n(668727),
    i = (n(169358), n(659749), n(538077), n(681919), n(670560), n(947522), n(699474), n(610369)),
    o = n(146514),
    c = n(725720),
    l = (n(535666), n(879288), n(294184)),
    u = n.n(l),
    s = n(843710),
    d = n(145516),
    m = n(637865),
    v = n(83763),
    _ = n(913494),
    f = (n(121484), n(988141)),
    p = (n(339772), n(897389), [.33, .5, .67, .75, .9, 1, 1.1, 1.25, 1.5, 1.75, 2]);
    function g(e) {
      var t = e.pageCount,
      n = e.pageNumber,
      a = e.thumbShow,
      i = e.isFullscreen,
      o = e.isPageChangeButton,
      c = void 0 === o || o,
      l = e.isThumbButton,
      s = void 0 === l || l,
      d = e.scale,
      m = e.onPageUp,
      v = e.onPageDown,
      _ = e.onPageTo,
      g = e.onChangeTempPageNum,
      h = e.onFullScreen,
      y = e.onToggleThumbnail,
      b = e.onScalePage,
      x = function(e, t) {
        var n = p.findIndex((function(e) {
          return e === d
        }));
        return "zoom-in" === t ? 0 === n ? p[n] : p[n - 1] : "zoom-out" === t ? n === p.length - 1 ? p[n] : p[n + 1] : void 0
      };
      return r.createElement("div", {
        className: "doc-toolbar"
      },
      r.createElement("div", {
        className: "left"
      },
      s && r.createElement(r.Fragment, null, r.createElement("div", {
        className: u()("tool-btn thumbnail", {
          active: a
        }),
        onClick: y,
        title: "缩略图"
      }), r.createElement("div", {
        className: "split-line"
      }))), r.createElement("div", {
        className: "center"
      },
      r.createElement("div", {
        className: "split-line"
      }), c && r.createElement(r.Fragment, null, r.createElement("div", {
        className: "tool-btn page-up",
        onClick: m,
        title: "上一屏"
      }), r.createElement("div", {
        className: "split-line"
      })), r.createElement("div", {
        className: "page-num"
      },
      r.createElement(f.Z, {
        className: "page-num-input",
        size: "small",
        min: 0,
        max: t,
        value: n,
        onChange: g,
        onPressEnter: _,
        onBlur: _
      }), "/  ".concat(t)), r.createElement("div", {
        className: "split-line"
      }), c && r.createElement(r.Fragment, null, r.createElement("div", {
        className: "tool-btn page-down",
        onClick: v,
        title: "下一屏"
      }), r.createElement("div", {
        className: "split-line"
      }))), r.createElement("div", {
        className: "right"
      },
      r.createElement("div", {
        className: "split-line"
      }), i && r.createElement(r.Fragment, null, r.createElement("div", {
        className: "tool-btn zoom-in",
        onClick: function() {
          return b(x(d, "zoom-in"))
        },
        title: "缩小"
      }), r.createElement("div", {
        className: "split-line"
      }), r.createElement("div", {
        className: "scale-value"
      },
      "".concat((100 * d).toFixed(0), " %")), r.createElement("div", {
        className: "split-line"
      }), r.createElement("div", {
        className: "tool-btn zoom-out",
        onClick: function() {
          return b(x(d, "zoom-out"))
        },
        title: "放大"
      }), r.createElement("div", {
        className: "split-line"
      })), r.createElement("div", {
        className: "tool-btn fullscreen",
        onClick: h,
        title: "全屏"
      })))
    }
    function h(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))),
        n.push.apply(n, r)
      }
      return n
    }
    function y(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? h(Object(n), !0).forEach((function(t) { (0, o.Z)(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
      }
      return e
    }
    var b = "excel-iframe",
    x = document.documentElement.style.overflow;
    function w(e) {
      var t = e.data,
      n = e.onPageChange,
      a = e.maxPosition,
      o = e.trackInfo,
      l = e.pageName,
      f = e.origin,
      p = e.controlSeeking,
      h = (0, r.useRef)(),
      w = (0, r.useState)(null),
      k = (0, c.Z)(w, 2),
      E = k[0],
      P = k[1],
      C = (0, r.useState)(1),
      S = (0, c.Z)(C, 2),
      I = S[0],
      N = S[1],
      T = (0, r.useState)(null),
      R = (0, c.Z)(T, 2),
      Z = R[0],
      O = R[1],
      D = (0, r.useState)(""),
      L = (0, c.Z)(D, 2),
      j = L[0],
      A = L[1],
      M = (0, r.useState)(1),
      F = (0, c.Z)(M, 2),
      U = F[0],
      H = F[1],
      z = (0, r.useState)(!0),
      q = (0, c.Z)(z, 2),
      V = q[0],
      X = q[1],
      B = (0, r.useState)(!1),
      J = (0, c.Z)(B, 2),
      K = J[0],
      W = J[1],
      Q = (0, r.useState)(a || t.beginPage || 0),
      G = (0, c.Z)(Q, 2),
      Y = G[0],
      $ = G[1]; (0, r.useEffect)((function() { (a > Y || t.beginPage > Y) && $(a > t.beginPage ? a: t.beginPage)
      }), [a, t.beginPage]);
      var ee = function() {
        if (o) {
          var e = o.resource_id,
          t = o.resource_type,
          n = o.column_code,
          r = o.channel_code; (0, v.Zk)({
            eventName: "resource_duration",
            params: {
              resource_type: t,
              resource_id: e,
              column_code: n,
              channel_code: r,
              time_point: (new Date).getTime()
            }
          })
        }
      }; (0, r.useEffect)((function() {
        var e = t.files;
        if (e) {
          var n = e.find((function(e) {
            return "html" === e.type
          }));
          O(y({},
          n)),
          N(n.file_urls.length),
          ee()
        }
      }), []);
      var te = function() {
        var e = (0, i.Z)(regeneratorRuntime.mark((function e(t) {
          return regeneratorRuntime.wrap((function(e) {
            while (1) switch (e.prev = e.next) {
            case 0:
              ee(),
              H(t);
            case 2:
            case "end":
              return e.stop()
            }
          }), e)
        })));
        return function(t) {
          return e.apply(this, arguments)
        }
      } (),
      ne = function() {
        document.documentElement.style.overflow = K ? x: "hidden",
        W(!K),
        te(1),
        "TCH" === f ? ((0, m.hC)({
          eventName: "TCH_webPlatform_detail_Document_Fullscreen_click",
          pageName: l || "TCH_webPlatform_detail_Document_Fullscreen_click",
          params: {
            screen_state: K ? "退出全屏": "打开全屏"
          }
        }), ee()) : _.Z.trackEvent({
          eventId: K ? "edu_webPlatform_player_Exitfullscreen_click": "edu_webPlatform_player_Fullscreen_click",
          info: {
            type: "文档播放器"
          }
        })
      },
      re = function(e) {
        var r, a = Number(e) || Number(null === e || void 0 === e || null === (r = e.target) || void 0 === r ? void 0 : r.value);
        if (a && !(a < 1 || a > I) && a !== E && !(p && a > Y)) {
          X(!0);
          var i = t.hosts,
          o = "".concat(i[0]).concat(Z.file_urls[a - 1]);
          A(o),
          P(a),
          p && a > Y && $(a + 1),
          X(!1),
          ee(),
          n({
            currentPage: a,
            pageCount: I
          })
        }
      },
      ae = function() {
        var e = E - 1;
        e > 0 && re(e)
      },
      ie = function() {
        var e = E + 1;
        e <= I && re(e)
      };
      return (0, r.useEffect)((function() {
        Z && I && re(1)
      }), [Z, I]),
      r.createElement("div", {
        className: u()("course-document", {
          "full-screen": K
        }),
        onClick: function() {
          ee()
        }
      },
      V && r.createElement("div", {
        className: "document-context placeholder"
      },
      r.createElement(d.Z, null)), Z ? r.createElement(r.Fragment, null, r.createElement("div", {
        className: "document-context",
        ref: h,
        style: {
          overflow: "hidden"
        }
      },
      r.createElement("iframe", {
        id: b,
        key: j,
        src: j,
        frameBorder: 0,
        height: "".concat(100 * U, "%"),
        width: "".concat(100 * U, "%")
      }))) : r.createElement("div", {
        className: "document-context placeholder"
      },
      r.createElement(s.Z, null)), r.createElement(g, {
        pageCount: I,
        pageNumber: E,
        scale: U,
        isFullscreen: K,
        isPageChangeButton: I > 1,
        isThumbButton: !1,
        onFullScreen: ne,
        onScalePage: te,
        onPageTo: re,
        onPageUp: ae,
        onPageDown: ie
      }))
    }
    var k = n(128240),
    E = ["xls", "xlsx", "xlsm"],
    P = "pdf",
    C = 120;
    function S(e) {
      var t = e.data,
      n = e.beginPage,
      i = e.onPageChange,
      o = e.origin,
      c = e.pageName,
      l = e.trackInfo,
      u = e.maxPosition,
      s = void 0 === u ? 0 : u,
      d = e.controlSeeking;
      if (!t || !t.files) return null;
      var m = t.source_type,
      v = t.files,
      _ = t.hosts,
      f = t.page_count,
      p = v && v.find((function(e) {
        return e.type === P
      }));
      if (E.includes(m) || !p) return r.createElement(w, {
        data: t,
        origin: o,
        pageName: c,
        trackInfo: l,
        onPageChange: i,
        maxPosition: s,
        controlSeeking: d
      });
      var g = (0, a.hL)(t),
      h = v.find((function(e) {
        return "thumbnail" === e.type
      })),
      y = h ? h.file_urls.map((function(e) {
        return "".concat(_[0]).concat(e, "?size=").concat(C)
      })) : [];
      return r.createElement(k.Z, {
        key: t.resource_id,
        data: {
          url: g,
          thumbnailList: y,
          numPages: f,
          beginPage: n
        },
        origin: o,
        pageName: c,
        trackInfo: l,
        onPageChange: i,
        maxPosition: s,
        controlSeeking: d
      })
    }
  },
  872209 : function(e, t, n) {
    "use strict";
    n.d(t, {
      w: function() {
        return m
      }
    });
    var r = n(610369),
    a = n(482300),
    i = n(650100),
    o = (n(535666), n(634338), n(425728), n(260228), n(450886), n(506203), n(538077), n(726032)),
    c = n(233546),
    l = n(880163),
    u = n(803511),
    s = o["default"].env,
    d = "Marker_".concat(s),
    m = {
      UNDO: 0,
      DOING: 1,
      PASS: 2,
      NO_PASS: 3
    },
    v = function() {
      function e() { (0, a.Z)(this, e),
        this.storage = new u.Z,
        this.init(),
        this.markers = null
      }
      return (0, i.Z)(e, [{
        key: "setKey",
        value: function(e, t) {
          this.activityId = e,
          this.resourceId = t,
          this.key = "".concat(e, "_").concat(t)
        }
      },
      {
        key: "init",
        value: function() {
          var e = (0, r.Z)(regeneratorRuntime.mark((function e() {
            var t;
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
              case 0:
                return e.next = 2,
                (0, l.bG)();
              case 2:
                return t = e.sent,
                this.userId = null === t || void 0 === t ? void 0 : t.user_id,
                this.tableName = "MarkerExercise_".concat(this.userId),
                e.next = 7,
                this.storage.initSchema(this.tableName, d);
              case 7:
              case "end":
                return e.stop()
              }
            }), e, this)
          })));
          function t() {
            return e.apply(this, arguments)
          }
          return t
        } ()
      },
      {
        key: "updateOneMarkerProgress",
        value: function() {
          var e = (0, r.Z)(regeneratorRuntime.mark((function e(t, n) {
            var r, a, i;
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
              case 0:
                return e.next = 2,
                this.storage.get(this.tableName, this.key);
              case 2:
                if (e.t0 = e.sent, e.t0) {
                  e.next = 5;
                  break
                }
                e.t0 = [];
              case 5:
                return a = e.t0,
                null !== (r = a) && void 0 !== r && r.length || (a = this.markers || []),
                i = a.find((function(e) {
                  return e.id === t
                })),
                i && (i.progress = n),
                e.next = 11,
                this.storage.put(this.tableName, this.key, a);
              case 11:
              case "end":
                return e.stop()
              }
            }), e, this)
          })));
          function t(t, n) {
            return e.apply(this, arguments)
          }
          return t
        } ()
      },
      {
        key: "getMarkerList",
        value: function() {
          var e = (0, r.Z)(regeneratorRuntime.mark((function e() {
            var t, n, r;
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
              case 0:
                return e.next = 2,
                this.storage.get(this.tableName, this.key);
              case 2:
                if (e.t0 = e.sent, e.t0) {
                  e.next = 5;
                  break
                }
                e.t0 = [];
              case 5:
                return t = e.t0,
                e.next = 8,
                (0, c.S1)(this.activityId, this.resourceId);
              case 8:
                return n = e.sent,
                r = n.map((function(e) {
                  var n = t.find((function(t) {
                    return t.id === e.id
                  }));
                  return e.progress = (null === n || void 0 === n ? void 0 : n.progress) || {
                    status: m.UNDO
                  },
                  e.answer_questions = (null === n || void 0 === n ? void 0 : n.answer_questions) || "",
                  e
                })),
                this.markers = r,
                e.next = 13,
                this.storage.put(this.tableName, this.key, r);
              case 13:
                return e.abrupt("return", r);
              case 14:
              case "end":
                return e.stop()
              }
            }), e, this)
          })));
          function t() {
            return e.apply(this, arguments)
          }
          return t
        } ()
      },
      {
        key: "getMarker",
        value: function() {
          var e = (0, r.Z)(regeneratorRuntime.mark((function e(t) {
            var n, r, a;
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
              case 0:
                return e.next = 2,
                this.storage.get(this.tableName, this.key);
              case 2:
                if (e.t0 = e.sent, e.t0) {
                  e.next = 5;
                  break
                }
                e.t0 = [];
              case 5:
                return r = e.t0,
                null !== (n = r) && void 0 !== n && n.length || (r = this.markers || []),
                a = r.find((function(e) {
                  return e.id === t
                })) || {},
                e.abrupt("return", a);
              case 9:
              case "end":
                return e.stop()
              }
            }), e, this)
          })));
          function t(t) {
            return e.apply(this, arguments)
          }
          return t
        } ()
      },
      {
        key: "delMarkerList",
        value: function() {
          this.markers = null,
          this.storage.removeByKey(this.tableName, this.key)
        }
      },
      {
        key: "updateOneMarkerKV",
        value: function() {
          var e = (0, r.Z)(regeneratorRuntime.mark((function e(t, n) {
            var r, a, i, o, c = arguments;
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
              case 0:
                if (a = c.length > 2 && void 0 !== c[2] ? c[2] : "", t) {
                  e.next = 3;
                  break
                }
                return e.abrupt("return", !1);
              case 3:
                return e.next = 5,
                this.storage.get(this.tableName, this.key);
              case 5:
                if (e.t0 = e.sent, e.t0) {
                  e.next = 8;
                  break
                }
                e.t0 = [];
              case 8:
                return i = e.t0,
                null !== (r = i) && void 0 !== r && r.length || (i = this.markers || []),
                o = i.find((function(e) {
                  return e.id === t
                })),
                o && (o[n] = a),
                e.next = 14,
                this.storage.put(this.tableName, this.key, i);
              case 14:
                return e.abrupt("return", !0);
              case 15:
              case "end":
                return e.stop()
              }
            }), e, this)
          })));
          function t(t, n) {
            return e.apply(this, arguments)
          }
          return t
        } ()
      },
      {
        key: "setAnswerQuestionIds",
        value: function() {
          var e = (0, r.Z)(regeneratorRuntime.mark((function e(t) {
            var n, r = arguments;
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
              case 0:
                return n = r.length > 1 && void 0 !== r[1] ? r[1] : [],
                e.next = 3,
                this.updateOneMarkerKV(t, "answer_questions", n.join(","));
              case 3:
              case "end":
                return e.stop()
              }
            }), e, this)
          })));
          function t(t) {
            return e.apply(this, arguments)
          }
          return t
        } ()
      },
      {
        key: "getAnswerQuestionIds",
        value: function() {
          var e = (0, r.Z)(regeneratorRuntime.mark((function e(t) {
            var n, r;
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
              case 0:
                return e.next = 2,
                this.getMarker(t);
              case 2:
                return r = e.sent,
                e.abrupt("return", (null === (n = r.answer_questions) || void 0 === n ? void 0 : n.split(",").filter((function(e) {
                  return e
                }))) || []);
              case 4:
              case "end":
                return e.stop()
              }
            }), e, this)
          })));
          function t(t) {
            return e.apply(this, arguments)
          }
          return t
        } ()
      }]),
      e
    } ();
    t.Z = new v
  },
  51029 : function(e, t, n) {
    "use strict";
    n.r(t),
    n.d(t, {
    default:
      function() {
        return en
      }
    });
    n(659749),
    n(681919),
    n(699474),
    n(212826),
    n(677049),
    n(821694),
    n(907409),
    n(386544),
    n(984254),
    n(800752),
    n(76265),
    n(821057);
    var r = n(476109),
    a = n(610369),
    i = n(146514),
    o = n(725720),
    c = (n(535666), n(434284), n(425728), n(260228), n(976801), n(689730), n(947522), n(564043), n(857267), n(634338), n(61514), n(843843), n(670560), n(169358), n(538077), n(891719), n(648324), n(667294)),
    l = n(326353),
    u = n(393649),
    s = n(294184),
    d = n.n(s),
    m = n(496486),
    v = n(196208),
    _ = n(393411),
    f = n(741865),
    p = n(135929),
    g = n(347450),
    h = n(681972),
    y = n(141564),
    b = n(51806),
    x = n(688454),
    w = n(296288),
    k = n(726032),
    E = n(92474);
    function P(e) {
      var t = (0, c.useRef)(e);
      t.current = (0, c.useMemo)((function() {
        return e
      }), [e]);
      var n = (0, c.useRef)();
      return n.current || (n.current = function() {
        for (var e = arguments.length,
        n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
        return t.current.apply(this, n)
      }),
      n.current
    }
    var C = P,
    S = n(726500),
    I = {},
    N = {},
    T = function() {
      var e = (0, a.Z)(regeneratorRuntime.mark((function e(t) {
        var n, r, a, i;
        return regeneratorRuntime.wrap((function(e) {
          while (1) switch (e.prev = e.next) {
          case 0:
            n = t.alias,
            r = t.onLogined,
            a = t.onNewMessage,
            I[n] ? N[n] = a: (i = new S.Z, i.open({
              url: k["default"].api["iot-push-ws"],
              appId: k["default"].app.appid,
              disableSharedWorker: !0
            }), i.setAlias("".concat(n)), I[n] = i, N[n] = a, i.onLogined = r, i.onNewMessage = function(e) {
              N[n] && N[n](e)
            });
          case 2:
          case "end":
            return e.stop()
          }
        }), e)
      })));
      return function(t) {
        return e.apply(this, arguments)
      }
    } (),
    R = n(541138),
    Z = n(576995),
    O = {
      "course-intro": "index-module_course-intro_KuKXJ",
      title: "index-module_title_4XmtL",
      info: "index-module_info_IfKRF",
      "intro-text": "index-module_intro-text_akBX8"
    };
    function D(e) {
      var t = e.intro;
      return t ? c.createElement("div", {
        className: O["course-intro"]
      },
      c.createElement("div", {
        className: O.title
      },
      "课程简介"), c.createElement("div", {
        className: O.info
      },
      c.createElement("div", {
        className: O["intro-text"],
        dangerouslySetInnerHTML: {
          __html: t
        }
      }))) : null
    }
    var L = D,
    j = n(174568),
    A = n(352626),
    M = n(86748),
    F = n(122085),
    U = n(260553),
    H = n(233546),
    z = n(880163),
    q = n(118860),
    V = n(721975),
    X = n(253530),
    B = n(637865),
    J = n(83763),
    K = n(656607),
    W = n(193318),
    Q = n(73059),
    G = (n(698981), n(388362)),
    Y = n.n(G),
    $ = n(464164),
    ee = (n(70384), n(67840)),
    te = n(160592),
    ne = (n(506203), n(727484)),
    re = n.n(ne),
    ae = n(703268),
    ie = n(843710),
    oe = n(174021),
    ce = n(201859),
    le = n(632468),
    ue = n(682563),
    se = (n(879288), n(450886), n(783733)),
    de = n(972611),
    me = n(872209),
    ve = (n(525297), n(934394)),
    _e = (n(629356), n(887314)),
    fe = (n(83155), n(537107)),
    pe = n.n(fe),
    ge = (n(573964), {
      "course-player": "index-module_course-player_uq5bZ",
      markerExercise: "index-module_markerExercise_6+JoR",
      box: "index-module_box_tSctU",
      header: "index-module_header_zN2MV",
      title: "index-module_title_vgMfR",
      index: "index-module_index_7boRm",
      skip: "index-module_skip_HRYs0",
      body: "index-module_body_-4uJX",
      footer: "index-module_footer_wewZ2",
      greenMarker: "index-module_greenMarker_Bljy5",
      alertModal: "index-module_alertModal_mOiea"
    }),
    he = pe().ExamAnswerPlayer,
    ye = pe().ExamAnswerEventBus,
    be = pe().ExamAnswerEvent,
    xe = 0,
    we = {},
    ke = {
      AnswerAll: 0,
      CorrectNum: 1,
      CorrectRate: 2
    };
    function Ee(e) {
      var t = e.questions,
      n = e.sessionId,
      r = e._useLocalAnswer,
      a = e.onCancel,
      i = e.passed,
      l = e.allowSkip,
      u = e.completionType,
      s = e.completionDetail,
      d = e.setPlayRef,
      m = e.libraryId,
      v = e.courseId,
      _ = e.resourceId,
      f = e.status,
      p = void 0 === f ? 0 : f,
      g = (0, c.useState)(!1),
      h = (0, o.Z)(g, 2),
      y = h[0],
      b = h[1],
      x = (0, c.useState)(!1),
      w = (0, o.Z)(x, 2),
      k = w[0],
      E = w[1],
      P = (0, c.useState)(!1),
      C = (0, o.Z)(P, 2),
      S = C[0],
      I = C[1],
      N = (0, c.useState)(null),
      T = (0, o.Z)(N, 2),
      R = T[0],
      Z = T[1],
      O = (0, c.useState)(0),
      D = (0, o.Z)(O, 2),
      L = D[0],
      j = D[1],
      A = (0, c.useState)(null),
      M = (0, o.Z)(A, 2),
      F = M[0],
      U = M[1],
      H = (0, c.useState)(r),
      z = (0, o.Z)(H, 2),
      q = z[0],
      V = z[1],
      X = (0, c.useState)(!0),
      B = (0, o.Z)(X, 2),
      K = B[0],
      Q = B[1],
      G = (0, c.useState)(Date.now()),
      Y = (0, o.Z)(G, 2),
      $ = Y[0],
      te = Y[1],
      ne = function() {
        return new Promise((function(e) {
          ee.Z.confirm({
            content: "离开将无法继续学习，确认离开吗？",
            okText: "确定",
            onOk: function() {
              e(!0),
              (0, J._A)({
                eventName: "edu_Platform_exercise_quit_click",
                params: {
                  channel_code: (0, W.getPageChannelCode)(),
                  column_code: m,
                  resource_id: _,
                  training_id: m,
                  course_id: v,
                  answer_type: (0, ce.dz)(p),
                  exercise_type: "断点练习"
                }
              })
            },
            cancelText: "继续作答",
            onCancel: function() {
              e(!1),
              (0, J.XN)({
                eventName: "edu_Platform_exercise_page",
                params: {
                  channel_code: (0, W.getPageChannelCode)(),
                  column_code: m,
                  resource_id: _,
                  training_id: m,
                  course_id: v,
                  answer_type: (0, ce.dz)(p),
                  exercise_type: "断点练习"
                }
              })
            }
          })
        }))
      }; (0, c.useEffect)((function() {
        d({
          onExit: ne
        }),
        we = {},
        xe = 0,
        (0, J.XN)({
          eventName: "edu_Platform_exercise_page",
          params: {
            channel_code: (0, W.getPageChannelCode)(),
            column_code: m,
            resource_id: _,
            training_id: m,
            course_id: v,
            answer_type: (0, ce.dz)(p),
            exercise_type: "断点练习"
          }
        }),
        (0, J._A)({
          eventName: "edu_Platform_exercise_click",
          params: {
            channel_code: (0, W.getPageChannelCode)(),
            column_code: m,
            resource_id: _,
            training_id: m,
            course_id: v,
            answer_type: (0, ce.dz)(p),
            exercise_type: "断点练习"
          }
        }),
        ye.on(be.QUESTIONCHANGED, (function(e) {
          U(e),
          j(e.index),
          xe = e.index,
          q && !we[e.id] && 0 !== e.state && (we[e.id] = !0, e.editable ? (E(!0), b(!1)) : (E(!1), b(!0), xe + 1 === t.length && (b(!1), I(!0))))
        })),
        ye.on(be.USERANSWERCHANGED, (function(e) {
          1 === e.state ? E(!0) : E(!1)
        })),
        ye.on("statisticChanged", (function(e) {
          Z(e)
        }));
        var e = function(e) {
          return e.preventDefault(),
          e.returnValue = "离开将无法继续学习，确认离开吗？",
          "离开将无法继续学习，确认离开吗？"
        };
        return window.addEventListener("beforeunload", e),
        function() {
          we = {},
          window.removeEventListener("beforeunload", e)
        }
      }), [$]);
      var re = function() {
        we[F.id] = !0,
        E(!1),
        ye.emit(be.COMMITQUESTION),
        ye.emit(be.SHOWANALYSIS, !1),
        b(!0),
        L + 1 === t.length ? I(!0) : b(!0)
      },
      ae = function() {
        L + 1 < t.length && (ye.emit(be.NEXTQUESTION), b(!1))
      },
      ie = function() {
        var e = R || {},
        t = e.totalCount,
        n = void 0 === t ? 1 : t,
        r = e.doneCount,
        o = e.correctCount,
        c = r === n,
        l = function(e) {
          ee.Z.confirm({
            content: e,
            okText: "重新作答",
            onOk: function() {
              V(!1),
              Q(!1),
              I(!1),
              setTimeout((function() {
                Q(!0),
                te(Date.now())
              }), 50)
            },
            cancelText: "退出学习",
            onCancel: function() {
              a(!1, c),
              (0, J._A)({
                eventName: "edu_Platform_exercise_quit_click",
                params: {
                  channel_code: (0, W.getPageChannelCode)(),
                  column_code: m,
                  resource_id: _,
                  training_id: m,
                  course_id: v,
                  answer_type: (0, ce.dz)(p),
                  exercise_type: "断点练习"
                }
              })
            }
          })
        },
        d = u === ke.AnswerAll;
        if (u === ke.CorrectNum ? d = o >= s: u === ke.CorrectRate && (d = o / n * 100 >= s), i || d) a(d, c);
        else {
          if (u === ke.AnswerAll) return l("您还有".concat(n - r, "题未答，退出练习后将不能继续学习")),
          !1;
          if (u === ke.CorrectNum) return l("您只答对了".concat(o, "道题目，需要答对").concat(s, "道题目后才能继续学习")),
          !1;
          if (u === ke.CorrectRate) {
            var f = Math.round(o / n * 100);
            return l("您答题正确率为".concat(f, "%，需正确率达到").concat(s, "%后才能继续学习")),
            !1
          }
        }
      },
      oe = function() {
        a(!0, !0)
      },
      le = function() {
        return S ? c.createElement(_e.Z, {
          type: "primary",
          onClick: function() {
            ye.emit(be.DELETELOCALANSWER);
            var e = R || {},
            t = e.totalCount,
            n = void 0 === t ? 1 : t,
            r = e.correctCount; (0, J._A)({
              eventName: "edu_Platform_exercise_submit_click",
              params: {
                channel_code: (0, W.getPageChannelCode)(),
                column_code: m,
                resource_id: _,
                training_id: m,
                course_id: v,
                answer_type: (0, ce.dz)(p),
                answer_num: n,
                answer_correctly_num: r,
                exercise_type: "断点练习"
              }
            }),
            ie()
          }
        },
        "完成") : k ? c.createElement(_e.Z, {
          type: "primary",
          onClick: re
        },
        "确定") : y ? c.createElement(_e.Z, {
          type: "primary",
          onClick: ae
        },
        "下一题") : void 0
      };
      return c.createElement("div", {
        className: ge.markerExercise
      },
      c.createElement("div", {
        className: ge.box
      },
      c.createElement("div", {
        className: ge.header
      },
      c.createElement("div", null, c.createElement("span", {
        className: ge.title
      },
      "练习"), c.createElement("span", {
        className: ge.index
      },
      L + 1), c.createElement("span", null, "/", t.length)), c.createElement("div", null, l && !i && c.createElement("a", {
        className: ge.skip,
        onClick: function() {
          oe()
        }
      },
      "跳过"), i && c.createElement(ve.Z, {
        type: "close",
        onClick: function() {
          ie()
        }
      }))), c.createElement("div", {
        className: ge.body
      },
      K && c.createElement(he, {
        key: "answer_area_".concat(n),
        config: {
          useSession: !1,
          sessionId: n,
          status: 0,
          examModel: "simplify",
          questions: t,
          enableLocalMark: !0,
          answerMode: 0,
          useLocalAnswer: q,
          gaea_js_config: {
            "static.url": "//s1.ykt.cbern.com.cn/",
            "cs.download.url": "//cdncs.ykt.cbern.com.cn/v0.1/static",
            "general-ability-common.exam.ndplayer_version": "1.10.0"
          },
          cdnCs: "//cdncs.ykt.cbern.com.cn"
        },
        startFromUndo: q,
        questionRenderOptions: {
          showScore: !1,
          showMarkCando: !1,
          attachmentsAllowed: !1,
          smartKeyboard: {
            enable: !1
          }
        },
        lang: "zh-CN"
      })), c.createElement("div", {
        className: ge.footer
      },
      le())))
    }
    n(162506);
    var Pe = {
      M3U8_FILE: 6,
      MP3_FILE: 3,
      MP4_FILE: 2,
      FLASH_FILE: 1
    };
    function Ce(e) {
      var t, n = [],
      r = Se(e);
      if (r[Pe.M3U8_FILE].length > 0 ? t = r[Pe.M3U8_FILE] : r[Pe.MP4_FILE].length > 0 ? t = r[Pe.MP4_FILE] : r[Pe.FLASH_FILE].length > 0 ? t = r[Pe.FLASH_FILE] : r[Pe.MP3_FILE].length > 0 && (t = r[Pe.MP3_FILE]), t) {
        var a = t.map((function(t) {
          var n;
          return t.data.src = null === (n = e.find((function(e) {
            return e.quality === t.quality && e.type === t.type && e.audio_index === t.audio_index
          })).urls) || void 0 === n ? void 0 : n[0],
          t
        })),
        i = a.length;
        if (i) {
          for (var o = null,
          c = -1,
          l = 0; l < i; l++) {
            var u = a[l];
            n.push(u.data),
            u.quality > c && (c = u.quality, o = {
              src: "".concat(u.data.src),
              type: "".concat(u.data.type),
              label: "默认"
            })
          }
          o && n.splice(0, 0, o)
        }
      }
      return n
    }
    function Se(e) {
      for (var t = {
        6 : [],
        3 : [],
        2 : [],
        1 : []
      },
      n = 0; n < e.length; n++) t[e[n].type] && (e[n].data = {
        src: "",
        type: {
          6 : "application/x-mpegURL",
          2 : "video/mp4",
          1 : "video/x-flv"
        } [e[n].type],
        label: {
          0 : "极速",
          1 : "流畅",
          2 : "标清",
          3 : "高清",
          4 : "超清"
        } [e[n].quality]
      },
      t[e[n].type].push(e[n]));
      return t
    }
    function Ie(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))),
        n.push.apply(n, r)
      }
      return n
    }
    function Ne(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? Ie(Object(n), !0).forEach((function(t) { (0, i.Z)(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ie(Object(n)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
      }
      return e
    }
    var Te, Re, Ze = {
      ALL: 1,
      PART: 2
    },
    Oe = {
      currentTime: 0,
      videoCurrentTime: 0
    };
    function De(e) {
      var t, n, r = e.resources,
      i = e.poster,
      l = e.trackInfo,
      u = e.aspectRatio,
      s = e.onPlayChange,
      d = e.onPlayFinish,
      v = e.onTimeUpdate,
      _ = void 0 === v ?
      function() {}: v,
      f = e.onReload,
      p = e.onReady,
      g = void 0 === p ?
      function() {}: p,
      h = e.pageName,
      y = e.origin,
      b = e.controlSeeking,
      x = e.maxPosition,
      w = void 0 === x ? 0 : x,
      k = e.controlSpeed,
      E = e.forcedLogin,
      P = e.onlyone,
      C = e.mediaType,
      S = void 0 === C ? "video": C,
      I = e.userId,
      N = void 0 === I ? "": I,
      T = e.activityId,
      R = void 0 === T ? "": T,
      Z = e.resourceId,
      O = void 0 === Z ? "": Z,
      D = e.setPlayRef,
      L = void 0 === D ?
      function() {}: D,
      j = e.activityEvent,
      A = e.courseId,
      M = e.libraryId,
      F = e.limitPlaybackRate,
      U = (0, c.useRef)(null),
      H = (0, c.useRef)({}),
      z = (0, c.useRef)(0),
      q = (0, c.useState)(!1),
      V = (0, o.Z)(q, 2),
      X = V[0],
      B = V[1],
      J = (0, c.useState)(null),
      K = (0, o.Z)(J, 2),
      Q = K[0],
      G = K[1],
      Y = (0, c.useState)(null),
      $ = (0, o.Z)(Y, 2),
      te = $[0],
      ne = $[1],
      re = (0, c.useState)(!0),
      ae = (0, o.Z)(re, 2),
      ie = ae[0],
      ce = ae[1],
      le = (0, c.useState)(null),
      ve = (0, o.Z)(le, 2),
      _e = ve[0],
      fe = ve[1],
      pe = (0, c.useState)(!1),
      he = (0, o.Z)(pe, 2),
      ye = he[0],
      be = he[1],
      xe = (0, c.useContext)(oe.Z),
      we = xe.userInfo;
      function ke(e, t) {
        return t.map((function(t) {
          return e.find((function(e) {
            return e.id === t
          }))
        })).filter((function(e) {
          return e
        }))
      }
      function Pe(e, t, n) {
        if (t === Ze.ALL) return e;
        if (n >= e.length) return e;
        var r = [],
        a = e.map((function(e) {
          return e.id
        }));
        while (r.length < n) {
          var i = Math.floor(Math.random() * a.length),
          o = a[i];
          r.includes(o) || r.push(o)
        }
        return ke(e, r)
      }
      function Se(e, t) {
        return Ie.apply(this, arguments)
      }
      function Ie() {
        return Ie = (0, a.Z)(regeneratorRuntime.mark((function e(t, n) {
          var r, a, i, o, c, l, u, s, d, m, v, _;
          return regeneratorRuntime.wrap((function(e) {
            while (1) switch (e.prev = e.next) {
            case 0:
              if (a = t.activity_event_behavior || {},
              i = a.behavior_type, o = a.data.paper_url, "exercise" !== i || !o || (null === (r = t.progress) || void 0 === r ? void 0 : r.status) === me.w.PASS && !n) {
                e.next = 36;
                break
              }
              return (0, ue.F5)(),
              null === (c = U.current) || void 0 === c || c.pause(),
              U.current.isFullscreen() && U.current.exitFullscreen(),
              e.next = 7,
              (0, de.ZP)().get(o);
            case 7:
              return l = e.sent,
              u = l.data,
              s = null,
              d = t.activity_event_behavior.setting,
              m = d.exercise_type,
              v = d.exercise_num,
              ce(!n),
              e.next = 14,
              me.Z.getAnswerQuestionIds(t.id);
            case 14:
              if (_ = e.sent, 0 !== _.length) {
                e.next = 22;
                break
              }
              return e.next = 18,
              Pe(u.question, m, v);
            case 18:
              s = e.sent,
              ce(!1),
              e.next = 28;
              break;
            case 22:
              if (s = ke(u.question, _), s.length === _.length) {
                e.next = 28;
                break
              }
              return e.next = 26,
              Pe(u.question, m, v);
            case 26:
              s = e.sent,
              ce(!1);
            case 28:
              return e.next = 30,
              me.Z.setAnswerQuestionIds(t.id, s.map((function(e) {
                return e.id
              })));
            case 30:
              ne(s),
              G(t),
              be(!0),
              setTimeout((function() {
                var e;
                null === (e = U.current) || void 0 === e || e.pause()
              }), 800),
              e.next = 37;
              break;
            case 36:
              ne(null);
            case 37:
            case "end":
              return e.stop()
            }
          }), e)
        }))),
        Ie.apply(this, arguments)
      } (0, c.useEffect)((function() {
        var e = function() {
          var e = (0, a.Z)(regeneratorRuntime.mark((function e() {
            var t, n, r, a, i;
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
              case 0:
                if ("video" !== S && "audio" !== S) {
                  e.next = 19;
                  break
                }
                return me.Z.setKey(R, O),
                e.next = 4,
                me.Z.getMarkerList();
              case 4:
                t = e.sent,
                n = (null === j || void 0 === j ? void 0 : j[O]) || {},
                r = 0;
              case 7:
                if (! (r < t.length)) {
                  e.next = 16;
                  break
                }
                if (i = t[r], 2 !== Number(null === (a = n[i.condition_params.time]) || void 0 === a ? void 0 : a.status)) {
                  e.next = 13;
                  break
                }
                return i.progress.status = me.w.PASS,
                e.next = 13,
                me.Z.updateOneMarkerProgress(i.id, i.progress);
              case 13:
                r++,
                e.next = 7;
                break;
              case 16:
                (0, m.isEqual)(_e, t) || fe((0, m.cloneDeep)(t) || []),
                e.next = 20;
                break;
              case 19:
                fe([]);
              case 20:
              case "end":
                return e.stop()
              }
            }), e)
          })));
          return function() {
            return e.apply(this, arguments)
          }
        } ();
        e()
      }), [j]);
      var De = function() {
        return [{
          audio_index: null,
          data: {
            label: "标清",
            src: "https://gcdncs.101.com/v0.1/static/fish/media/test.mp4",
            type: "video/mp4"
          },
          encrypt: !1,
          encrypt_urls: null,
          quality: 2,
          size: 8945,
          type: 2,
          urls: ["https://gcdncs.101.com/v0.1/static/fish/media/test.mp4"]
        }]
      },
      Le = (0, c.useCallback)((function(e) {
        var t, n, r = e.time % 60,
        a = parseInt(e.time / 60, 10) % 60,
        i = parseInt(e.time / 3600, 10),
        o = function(e) {
          return "00".concat(e).substr( - 2)
        },
        c = '<div class="marker-name">'.concat(o(i), ":").concat(o(a), ":").concat(o(r), " ").concat(e.text, "</div>");
        return (null === (t = e.data.progress) || void 0 === t ? void 0 : t.status) === me.w.PASS && (c += '<div class="marker-redo" data-marker-id="'.concat(e.data.id, '">再做一次</div>')),
        (null === (n = e.data.progress) || void 0 === n ? void 0 : n.status) === me.w.DOING && (c += '<div class="marker-continue" data-marker-id="'.concat(e.data.id, '">继续答题</div>')),
        "".concat(c)
      }), []),
      je = (0, c.useMemo)((function() {
        return {
          sources: Ce((0, W.isLocalhost)() ? De() : r),
          poster: i,
          playbackRates: k ? [] : [.75, 1, 1.25, 1.5, 2],
          mediaType: S,
          markers: {
            markerStyle: {
              width: "4px",
              borderRadius: "6px",
              fontSize: "14px",
              backgroundColor: "#FFFFFF"
            },
            markerTip: {
              display: !0,
              text: function(e) {
                return "<div id='marker_".concat(e.data.id, "'>").concat(Le(e), "</div>")
              }
            }
          }
        }
      }), []),
      Ae = (0, c.useCallback)(function() {
        var e = (0, a.Z)(regeneratorRuntime.mark((function e(t) {
          var n, r, a;
          return regeneratorRuntime.wrap((function(e) {
            while (1) switch (e.prev = e.next) {
            case 0:
              return n = -1 !== t.target.className.indexOf("marker-redo"),
              r = t.target.getAttribute("data-marker-id"),
              e.next = 4,
              me.Z.getMarker(r);
            case 4:
              return a = e.sent,
              a.progress = Ne(Ne({},
              a.progress), {},
              {
                status: n ? me.w.PASS: me.w.DOING
              }),
              e.next = 8,
              me.Z.updateOneMarkerProgress(a.id, a.progress);
            case 8:
              return e.next = 10,
              (0, ue.pS)({
                courseId: A,
                resourceId: O,
                markerTime: a.condition_params.time,
                markerState: a.progress.status === me.w.PASS ? 2 : 1
              });
            case 10:
              return e.next = 12,
              Se(a, !0);
            case 12:
            case "end":
              return e.stop()
            }
          }), e)
        })));
        return function(t) {
          return e.apply(this, arguments)
        }
      } (), []),
      Me = (0, c.useCallback)((0, a.Z)(regeneratorRuntime.mark((function e() {
        var t, n, r, a, i, o, c, l, u, s, d, m, v, _, f, p, g, h, y, b;
        return regeneratorRuntime.wrap((function(e) {
          while (1) switch (e.prev = e.next) {
          case 0:
            if (console.log("=== markerInit"), _e && 0 !== _e.length && U.current) {
              e.next = 3;
              break
            }
            return e.abrupt("return");
          case 3:
            for (t = {},
            U.current.markers.reset((null === _e || void 0 === _e ? void 0 : _e.map((function(e) {
              var n = {
                time: e.condition_params.time,
                text: e.name,
                data: e,
                class: e.progress.status === me.w.PASS ? ge.greenMarker: ""
              };
              return t[n.time] = n,
              n
            }))) || []), H.current = t, n = U.current.el().querySelectorAll(".marker-redo"), r = 0; n && r < n.length; r++) a = n[r],
            a.addEventListener("click", Ae);
            for (i = U.current.el().querySelectorAll(".marker-continue"), o = 0; i && o < i.length; o++) c = i[o],
            c.addEventListener("click", Ae);
            for (l = U.current.el().querySelectorAll(".vjs-tip"), u = U.current.el().getBoundingClientRect(), s = u.left, d = u.right, m = 0; l && m < l.length; m++) v = l[m],
            _ = v.getBoundingClientRect(),
            f = _.left,
            p = _.right,
            g = _.width,
            h = v.querySelector(".vjs-tip-inner"),
            y = f - s,
            b = d - p,
            y < 0 && b < 0 || y > 0 && b > 0 ? h.style.position = "static": y < 0 ? (h.style.position = "relative", h.style.left = "".concat(Math.abs(y) - 2, "px"), h.style.right = "auto") : b < 0 && (h.style.position = "relative", h.style.left = "auto", h.style.right = "".concat(Math.abs(b) - 2, "px")),
            g >= 200 && (h.style.width = "200px", h.style.whiteSpace = "normal");
          case 13:
          case "end":
            return e.stop()
          }
        }), e)
      }))), [_e, U]); (0, c.useEffect)((function() {
        _e && 0 !== _e.length && X && (console.log("=== useEffect play"), Me(), U.current.on("useractive", Me), U.current.one("play", Me))
      }), [_e, X]);
      var Fe = function() {
        var e = (0, a.Z)(regeneratorRuntime.mark((function e(t, n) {
          var r, a;
          return regeneratorRuntime.wrap((function(e) {
            while (1) switch (e.prev = e.next) {
            case 0:
              if (L(null), (0, ue.eN)(), !n) {
                e.next = 6;
                break
              }
              return e.next = 5,
              me.Z.setAnswerQuestionIds(Q.id, []);
            case 5:
              ce(!1);
            case 6:
              if (Q.progress.status === me.w.PASS) {
                e.next = 16;
                break
              }
              return t ? Q.progress.status = me.w.PASS: !1 !== t && (Q.progress.status = me.w.DOING),
              e.next = 10,
              me.Z.updateOneMarkerProgress(Q.id, Q.progress);
            case 10:
              return e.next = 12,
              (0, ue.pS)({
                courseId: A,
                resourceId: O,
                markerTime: Q.condition_params.time,
                markerState: Q.progress.status === me.w.PASS ? 2 : 1
              });
            case 12:
              return e.next = 14,
              me.Z.getMarkerList();
            case 14:
              r = e.sent,
              fe(r);
            case 16:
              be(!1),
              Q.progress.status === me.w.PASS ? (U.current.ended() || U.current.play(), ne(null)) : U.current.currentTime() >= Q.condition_params.time && (a = Q.condition_params.time - 2, U.current.currentTime(a >= 0 ? a: 0)),
              G(null),
              Me();
            case 20:
            case "end":
              return e.stop()
            }
          }), e)
        })));
        return function(t, n) {
          return e.apply(this, arguments)
        }
      } (),
      Ue = function() {
        console.log("hack倍速播放检测");
		return;
        if (0 !== z.current && (z.current -= 1), !(!U.current || U.current.paused() || z.current > 0)) {
          var e = !1,
          t = U.current.currentTime(),
          n = Date.now(),
          r = 1e3 * (t - Oe.videoCurrentTime) / (n - Oe.currentTime) - F;
          F && (U.current.playbackRate() > F || r > .2) && Oe.videoCurrentTime > 1 && (e = !0),
          e ? (Re && Re.destroy(), Re = ee.Z.warn({
            content: "系统检测到倍速播放，已自动暂停学习，关闭倍速播放后可继续学习。",
            onOk: function() {
              Re = null
            },
            getContainer: function() {
              return U.current.el()
            },
            className: ge.alertModal
          }), U.current.playbackRate(1), U.current.pause()) : (Oe.currentTime = n, Oe.videoCurrentTime = t)
        }
      },
      He = function(e) {
        var t, n = function() {
          var t = (0, a.Z)(regeneratorRuntime.mark((function t() {
            var n, r, a;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
              case 0:
                return t.next = 2,
                me.Z.getMarker(e.data.id);
              case 2:
                if (a = t.sent, !(Math.ceil(U.current.currentTime()) >= (null === a || void 0 === a || null === (n = a.condition_params) || void 0 === n ? void 0 : n.time)) || null !== (r = U.current) && void 0 !== r && r.seeking()) {
                  t.next = 6;
                  break
                }
                return t.next = 6,
                Se(a);
              case 6:
              case "end":
                return t.stop()
              }
            }), t)
          })));
          return function() {
            return t.apply(this, arguments)
          }
        } ();
        null !== (t = U.current) && void 0 !== t && t.seeking() ? setTimeout(n, 1e3) : n()
      },
      ze = function(e) {
        for (var t = arguments.length,
        n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        _.apply(void 0, [e].concat(n));
        var a = Math.ceil(e);
        H.current[a] && He(H.current[a])
      },
      qe = function(e, t) {
        U.current = t,
        (0, ue.eN)(),
        t.on("seeking", (function() {
          z.current = 5
        })),
        g(e, t),
        console.log("=== handleReady"),
        B(!0)
      },
      Ve = (0, c.useCallback)((function() {
        Re && (U.current.pause(), U.current.currentTime(0))
      }), [U.current]); (0, c.useEffect)((function() {
        var e;
        return Te && clearInterval(Te),
        F && U.current && (Te = setInterval((function() {
          Ue()
        }), 1e3)),
        null === (e = U.current) || void 0 === e || e.on("play", Ve),
        function() {
          var e;
          clearInterval(Te),
          null === (e = U.current) || void 0 === e || e.off("play", Ve)
        }
      }), [F, U.current]),
      (0, c.useEffect)((function() {
        var e = function() {
          var e;
          document.hidden && (null === (e = U.current) || void 0 === e || e.pause())
        };
        return window.addEventListener("visibilitychange", e),
        function() {
          window.removeEventListener("visibilitychange", e),
          (0, ue.eN)(),
          clearInterval(Te)
        }
      }), []);
      var Xe = function(e, t) {
        Ue(),
        document.hidden && (null === t || void 0 === t || t.pause()),
        e && (Oe.videoCurrentTime = t.currentTime(), Oe.currentTime = Date.now()),
        s(e, t)
      };
      return c.createElement(c.Fragment, null, c.createElement(se.Z, {
        key: r.resource_id,
        className: "fish-ndrVideo vjs-big-play-centered",
        options: je,
        trackInfo: l,
        pageName: h,
        onReady: qe,
        aspectRatio: u,
        onPlayChange: Xe,
        onPlayFinish: d,
        onTimeUpdate: ze,
        onReload: f,
        origin: y,
        controlSeeking: b,
        maxPosition: w,
        forcedLogin: E,
        onlyone: P
      }), ye && te && c.createElement(Ee, {
        setPlayRef: L,
        questions: te,
        sessionId: "".concat(Q.id, "_").concat(N, "_").concat(te.map((function(e) {
          return e.id.substring(0, 3)
        })).join("")),
        _useLocalAnswer: ie,
        onCancel: Fe,
        libraryId: M,
        courseId: A,
        resourceId: O,
        status: null === (t = Q.progress) || void 0 === t ? void 0 : t.status,
        passed: (null === (n = Q.progress) || void 0 === n ? void 0 : n.status) === me.w.PASS,
        allowSkip: Q.allow_skip,
        completionType: Q.activity_event_behavior.setting.completion_type,
        completionDetail: Q.activity_event_behavior.setting.completion_detail,
        questionProps: {
          watermark: {
            userInfo: we
          }
        }
      }))
    }
    var Le = ["courseId", "resources", "onUploadProgress", "changeStudyStatus", "forcedLogin", "onlyone", "resourceMaxPos", "activityEvent", "reportToTrain", "from", "onPlay", "trainId", "libraryId"];
    function je(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))),
        n.push.apply(n, r)
      }
      return n
    }
    function Ae(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? je(Object(n), !0).forEach((function(t) { (0, i.Z)(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : je(Object(n)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
      }
      return e
    }
    var Me, Fe, Ue, He, ze = ce.hX.NotStart,
    qe = ce.hX.Studying,
    Ve = ce.hX.Finish,
    Xe = "endIn_",
    Be = 1e4,
    Je = !1,
    Ke = !1,
    We = 0,
    Qe = null,
    Ge = !0,
    Ye = !1,
    $e = !1,
    et = !1,
    tt = 0,
    nt = 1,
    rt = !1,
    at = 0,
    it = void 0 !== (window.rawWindow || window).orientation || /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),
    ot = function() {
      return window.location.href.indexOf("debug=1") > 0 || {
        BASE_URL: "/",
        NODE_ENV: "production",
        SDP_ENV: window.__global_env
      }.DEV ? console.log: function() {}
    } (),
    ct = (0, c.forwardRef)((function(e, t) {
      var n, r, l, u = e.courseId,
      s = e.resources,
      d = e.onUploadProgress,
      v = e.changeStudyStatus,
      _ = void 0 === v ?
      function() {}: v,
      f = e.forcedLogin,
      p = void 0 !== f && f,
      g = e.onlyone,
      y = void 0 !== g && g,
      b = e.resourceMaxPos,
      x = e.activityEvent,
      w = e.reportToTrain,
      E = void 0 === w ? (0, a.Z)(regeneratorRuntime.mark((function e() {
        return regeneratorRuntime.wrap((function(e) {
          while (1) switch (e.prev = e.next) {
          case 0:
          case "end":
            return e.stop()
          }
        }), e)
      }))) : w,
      P = e.from,
      C = e.onPlay,
      S = void 0 === C ?
      function() {}: C,
      I = e.trainId,
      N = e.libraryId,
      T = (0, te.Z)(e, Le),
      R = (0, c.useRef)(60),
      Z = (0, c.useRef)([]);
      He = T.dataSessionId;
      var O = (0, c.useRef)(null),
      D = (0, c.useState)(!1),
      L = (0, o.Z)(D, 2),
      j = L[0],
      A = L[1],
      M = (0, c.useState)(null),
      F = (0, o.Z)(M, 2),
      U = F[0],
      H = F[1],
      q = (0, c.useState)({}),
      V = (0, o.Z)(q, 2),
      B = V[0],
      K = V[1],
      Q = (0, c.useState)(!1),
      G = (0, o.Z)(Q, 2),
      ne = G[0],
      se = G[1],
      de = (0, c.useState)(!1),
      me = (0, o.Z)(de, 2),
      ve = me[0],
      _e = me[1],
      fe = (0, c.useState)(0),
      pe = (0, o.Z)(fe, 2),
      he = pe[0],
      ye = pe[1],
      be = (0, c.useContext)(oe.Z),
      xe = be.userInfo,
      we = function() {
        Z.current = []
      },
      ke = function() {
        return Z.current
      },
      Ee = function(e) {
        try {
          var t = Math.ceil(e);
          if (Z.current.includes(t)) return;
          Z.current.push(t),
          Z.current.length > R.current && Z.current.shift(),
          ot("===courseplayer=== setVideoPlayTimes", t, Z.current)
        } catch(n) {
          console.error(n)
        }
      },
      Pe = function(e) {
        var t, n = !(null === (t = T.progressConfig) || void 0 === t || !t.spi);
        if (!n) return ! 0;
        try {
          var r = Math.ceil(e),
          a = ke(),
          i = a.includes(r);
          if (!i) for (var o = Math.floor(R.current / 2), c = r - o; c <= r + o && !i; c++) i = a.includes(c);
          return ot("===courseplayer=== includeVideoPlayTime", i, r, a),
          i
        } catch(l) {
          return console.error(l),
          !1
        }
      },
      Ce = function(e, t) {
        for (var n = t,
        r = arguments.length,
        a = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) a[i - 2] = arguments[i];
        if (O.current) {
          var o = Math.ceil(O.current.duration());
          if (o > 0 && t > o && (n = o), !Pe(t) && !0 !== a[1]) return void ot("===courseplayer=== report _reportToTrain 不允许上报", t, ke())
        }
        return ot.apply(void 0, ["===courseplayer=== report _reportToTrain 允许上报", e, t].concat(a)),
        E.apply(void 0, [e, n].concat(a))
      },
      Se = function(e, t) {
        if (!O.current || Pe(t)) {
          for (var n = arguments.length,
          r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
          return ot.apply(void 0, ["===courseplayer=== report _changeStudyStatus 允许上报", e, t].concat(r)),
          _.apply(void 0, [e, t].concat(r))
        }
        ot("===courseplayer=== report _changeStudyStatus 不允许上报", t, ke())
      },
      Ie = function() {
        var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qe;
        if (t > 0) {
          var n = Math.ceil(O.current.duration());
          e = n > 0 && t >= n && Pe(t) ? Ve: qe
        } else e = ze;
        return e
      }; (0, c.useImperativeHandle)(t, (function() {
        return {
          stopVideo: function() {
            O.current && !O.current.paused() && (O.current.pause(), ee.Z.warn({
              content: "你已在其他端进入学习，本端自动暂停学习。",
              className: ge.alertModal
            }))
          },
          reportVideoBegined: function() {
            if (O.current && !O.current.paused()) {
              var e = Math.ceil(O.current.currentTime()),
              t = Math.ceil(O.current.duration());
              e > t && (e = t);
              var n = Ie(e);
              Ce(n, e, !1, !0)
            }
          }
        }
      })),
      (0, c.useEffect)((function() {
        "e_exercise_activity" === s.resource_type && se(!0),
        rt = !1
      }), [s]);
      var Ne = function() {
        var e = (0, a.Z)(regeneratorRuntime.mark((function e(t) {
          var n, r, a, i;
          return regeneratorRuntime.wrap((function(e) {
            while (1) switch (e.prev = e.next) {
            case 0:
              if (r = t.currentPage, a = t.pageCount, a) {
                e.next = 3;
                break
              }
              return e.abrupt("return");
            case 3:
              if (Je = !0, He) {
                e.next = 7;
                break
              }
              return ot("===courseplayer=== not login, document not trigger report data"),
              e.abrupt("return");
            case 7:
              i = r,
              i > a && (i = a),
              nt = i,
              ot("===courseplayer=== document trigger report data", i),
              i === a && (clearTimeout(Ue), Ce(Ve, a)),
              Ke = Math.max(null === b || void 0 === b || null === (n = b[s.resource_id]) || void 0 === n ? void 0 : n.pos, i) === a,
              d && d(),
              "prepare" !== P && (0, ue.Xq)({
                documentId: s.resource_id,
                userId: He,
                position: i
              }),
              Se(Ke ? Ve: qe, i);
            case 16:
            case "end":
              return e.stop()
            }
          }), e)
        })));
        return function(t) {
          return e.apply(this, arguments)
        }
      } (),
      Te = function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        He && (clearTimeout(Ue), Ue = setTimeout((0, a.Z)(regeneratorRuntime.mark((function t() {
          var n, r;
          return regeneratorRuntime.wrap((function(t) {
            while (1) switch (t.prev = t.next) {
            case 0:
              if (!Ke) {
                t.next = 2;
                break
              }
              return t.abrupt("return");
            case 2:
              if (t.prev = 2, "prepare" === P) {
                t.next = 7;
                break
              }
              return t.next = 6,
              Ce(qe, nt);
            case 6:
              n = t.sent;
            case 7:
              t.next = 11;
              break;
            case 9:
              t.prev = 9,
              t.t0 = t["catch"](2);
            case 11:
              "prepare" !== P && e(1e3 * ((null === (r = n) || void 0 === r ? void 0 : r.frequency) || 60));
            case 12:
            case "end":
              return t.stop()
            }
          }), t, null, [[2, 9]])
        }))), t))
      },
      Re = function() {
        return !! O.current && O.current.playbackRate() > 1
      },
      Ze = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (He && Pe(e)) {
          try {
            "prepare" !== P && (0, ue.Mz)({
              videoId: s.resource_id || s.id,
              userId: He,
              position: e,
              immediate: t
            })
          } catch(n) {}
          d && d()
        }
      },
      Oe = function e() {
        He && (clearTimeout(Me), Me = setTimeout((0, a.Z)(regeneratorRuntime.mark((function t() {
          var n;
          return regeneratorRuntime.wrap((function(t) {
            while (1) switch (t.prev = t.next) {
            case 0:
              n = Math.ceil(O.current.currentTime()),
              Ze(n, !1),
              n < Math.ceil(O.current.duration()) && e();
            case 3:
            case "end":
              return t.stop()
            }
          }), t)
        }))), Be))
      },
      je = function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        He && (clearTimeout(Fe), Fe = setTimeout((0, a.Z)(regeneratorRuntime.mark((function t() {
          var n, r, a;
          return regeneratorRuntime.wrap((function(t) {
            while (1) switch (t.prev = t.next) {
            case 0:
              if (n = Math.ceil(O.current.currentTime()), t.prev = 1, "prepare" === P) {
                t.next = 6;
                break
              }
              return t.next = 5,
              Ce(qe, n, Re());
            case 5:
              r = t.sent;
            case 6:
              t.next = 11;
              break;
            case 8:
              t.prev = 8,
              t.t0 = t["catch"](1),
              console.error(t.t0);
            case 11:
              "prepare" !== P && n < Math.ceil(O.current.duration()) && e(1e3 * ((null === (a = r) || void 0 === a ? void 0 : a.frequency) || 60));
            case 12:
            case "end":
              return t.stop()
            }
          }), t, null, [[1, 8]])
        }))), t))
      },
      ct = function() {
        clearTimeout(Me),
        clearTimeout(Fe)
      },
      lt = function() {
        if (Je) {
          var e = null,
          t = null;
          O.current && !$e ? (e = Ie(tt), t = tt) : "document" !== s.resource_type || Ke || (e = Ke ? Ve: qe, t = nt),
          null !== e && null !== t && (O.current && Ze(t, !0), "prepare" !== P && Ce(e, t), Se(e, t))
        }
        ct()
      },
      ut = function() {
        O.current && (et = !0)
      },
      st = function(e) {
        if (e) {
          $e = !0,
          ct();
          var t = Math.ceil(e.duration());
          Qe = t || 0,
          Ze(t, !0),
          "prepare" !== P && Ce(Ve, t),
          Se(Ve, t)
        }
      },
      dt = (0, m.debounce)(function() {
        var e = (0, a.Z)(regeneratorRuntime.mark((function e(t, n) {
          var r, a, i, o, c, l, u, d, m, v, _, f, p;
          return regeneratorRuntime.wrap((function(e) {
            while (1) switch (e.prev = e.next) {
            case 0:
              return Je = t,
              ot("===== onVideoPlayChange  resource_id： ".concat(s.resource_id), t, Math.ceil(n.duration()), Math.ceil(n.currentTime())),
              c = Math.max(B[s.resource_id] || 0, (null === b || void 0 === b || null === (r = b[s.resource_id]) || void 0 === r ? void 0 : r.pos) || 0),
              l = !c && 0 === Math.floor(n.currentTime()) && !(null !== (a = T.state) && void 0 !== a && a[s.resource_id]),
              u = "".concat(Xe).concat([He, s.resource_id, null === (i = T.progressConfig) || void 0 === i ? void 0 : i.source_train_id].filter(Boolean).join("_")),
              d = !!T.progressConfig.source_train_end_time && re()() >= re()(T.progressConfig.source_train_end_time),
              e.next = 8,
              (0, le.r4)(u);
            case 8:
              if (e.t0 = !e.sent, !e.t0) {
                e.next = 11;
                break
              }
              e.t0 = d;
            case 11:
              if (m = e.t0, !t || rt || null === (o = T.videoStudyConfig) || void 0 === o || !o.alert_before_study || !(m || l && !d)) {
                e.next = 20;
                break
              }
              if (!m) {
                e.next = 16;
                break
              }
              return e.next = 16,
              (0, le.t5)(u, 1);
            case 16:
              return rt = !0,
              n.pause(),
              ee.Z.info({
                title: "提示",
                icon: null,
                content: T.videoStudyConfig.alert_content || "须学习完课程的视频并完成相应测试题才可获得该课程视频的学时",
                okText: "我知道了",
                onOk: function() {
                  n.play()
                }
              }),
              e.abrupt("return");
            case 20:
              rt = !0,
              v = Math.ceil(n.currentTime()),
              _ = Math.ceil(n.duration()),
              v > _ && (v = _),
              f = Ie(v),
              !0 === t && (window.postMessage({
                type: "playStart"
              },
              "*"), S(), Ce(f, v, !1, !0), !0 === Ge && (Ge = !1, ot("===== lastPos: ".concat(We, "  maxPos: ").concat(Qe)), Qe > 0 && Qe < _ ? (n.currentTime(Qe), ot("===== seekTo: ".concat(Qe))) : We > 0 && We < _ && (n.currentTime(We), ot("===== seekTo: ".concat(We)))), ct(), Oe(), Ie() !== Ve && je(6e4), et || (p = Ie(), Se(p, v))),
              Ye || $e || t || et ? (Ye = !1, et = !1) : (ct(), Ze(v, !1), "prepare" !== P && Ce(f, v));
            case 27:
            case "end":
              return e.stop()
            }
          }), e)
        })));
        return function(t, n) {
          return e.apply(this, arguments)
        }
      } (), 300),
      mt = function(e, t) {
        O.current = t,
        t.on("seeking", (function() {
          var e, t;
          Ye = !0;
          var n = 2 !== (null === (e = T.state) || void 0 === e ? void 0 : e[s.resource_id]) && !1 === (null === (t = T.progressConfig) || void 0 === t ? void 0 : t.is_allow_drag);
          if (n) {
            at = Date.now();
            var r = ke(),
            a = r.length > 0 ? Math.max.apply(null, r) : 0;
            O.current.currentTime() - a > 1 && O.current.currentTime(a)
          }
          Oe()
        }))
      },
      vt = function(e) {
        tt = Math.ceil(e),
        !O.current || O.current.paused() || O.current.seeking() || (Je = !0, setTimeout((function() {
          if (!O.current || !O.current.paused()) {
            var e = ke(),
            t = e.length > 0 ? Math.max.apply(null, e) : 0;
            at > 0 && Date.now() - at < 6e3 ? ot("not set new time, abnormal behavior: ".concat(tt, " maxTime: ").concat(t, "   now:").concat(Date.now() / 1e3, " prevSeekOperationTime: ").concat(at / 1e3)) : (at = 0, tt <= 3 ? ot("not set new time, ignore the first x second: ".concat(tt, " maxTime: ").concat(t)) : (Ee(tt), ot("new time: ".concat(tt, " maxTime: ").concat(t))))
          }
        }), 3e3))
      }; (0, c.useEffect)((function() {
        return (0, a.Z)(regeneratorRuntime.mark((function e() {
          var t, n, r, a, o, c, l, d, m, v;
          return regeneratorRuntime.wrap((function(e) {
            while (1) switch (e.prev = e.next) {
            case 0:
              if (He) {
                e.next = 3;
                break
              }
              return A(!0),
              e.abrupt("return");
            case 3:
              if (window.addEventListener("beforeunload", lt), n = !1, r = "teacherTraining" === (null === (t = T.progressConfig) || void 0 === t ? void 0 : t.type), !(r && I && He)) {
                e.next = 11;
                break
              }
              return e.next = 9,
              (0, ue.Vh)(I, u, He);
            case 9:
              n = e.sent,
              n && ee.Z.warn({
                content: "你的学习记录被判定为异常，请重新学习课程。"
              });
            case 11:
              if ("document" !== s.resource_type) {
                e.next = 24;
                break
              }
              return ot("===courseplayer=== document init report data"),
              e.next = 15,
              (0, ue.xC)({
                documentId: s.resource_id || s.id,
                userId: He
              });
            case 15:
              if (e.t0 = e.sent, e.t0) {
                e.next = 18;
                break
              }
              e.t0 = 1;
            case 18:
              o = e.t0,
              c = (null === b || void 0 === b || null === (a = b[s.resource_id]) || void 0 === a ? void 0 : a.pos) || 1,
              l = 1,
              l = n && o > c ? c: Math.max(o, c),
              H(l),
              Te(6e4);
            case 24:
              if ("video" !== s.resource_type && "audio" !== s.resource_type && "x_video" !== s.resource_type) {
                e.next = 44;
                break
              }
              return ot("===courseplayer=== video init report data"),
              Ge = !0,
              Ye = !1,
              $e = !1,
              et = !1,
              e.next = 32,
              (0, ue.Tc)({
                videoId: s.resource_id || s.id,
                userId: He
              });
            case 32:
              if (e.t1 = e.sent, e.t1) {
                e.next = 35;
                break
              }
              e.t1 = 0;
            case 35:
              m = e.t1,
              v = (null === b || void 0 === b || null === (d = b[s.resource_id]) || void 0 === d ? void 0 : d.pos) || 0,
              n && m > v ? (We = v, Qe = v) : (We = m, Qe = Math.max(m, v)),
              K(Ae(Ae({},
              B), {},
              (0, i.Z)({},
              s.resource_id, We))),
              we(),
              Ee(We),
              Ee(Qe),
              ot("===== setVideoLastPos  lastPos：".concat(m, "  videoLastMaxPos：").concat(Qe)),
              A(!0);
            case 44:
            case "end":
              return e.stop()
            }
          }), e)
        })))(),
        function() {
          He && (lt(), window.removeEventListener("beforeunload", lt)),
          Je = !1,
          O.current = null,
          We = 0,
          Qe = null,
          Ge = !0,
          Ye = !1,
          $e = !1,
          et = !1,
          tt = 0,
          rt = !1,
          K({}),
          at = 0
        }
      }), [s, b, O]),
      (0, c.useEffect)((function() {
        if (j && s) var e = setInterval((function() {
          O.current && null !== Qe && (clearInterval(e), O.current.one("canplay", (function() {
            if ("prepare" !== P) if (Qe) {
              var e = Ie(Qe);
              Ce(e, Qe)
            } else Ce(ze, 0)
          })))
        }), 200)
      }), [s, j, O]);
      var _t = (0, c.useCallback)((0, m.debounce)((function() {
        var e, t = !(null === (e = T.progressConfig) || void 0 === e || !e.spi);
        if (t) {
          var n = document.querySelector(".course-video video");
          if (null !== n.getAttribute("style")) {
            var r = document.querySelector(".course-video").parentElement;
            r.innerText = "不支持在小窗口播放，请关闭小窗口刷新网页重试！",
            r.style.fontSize = "20px",
            r.style.lineHeight = "120px",
            r.style.textAlign = "center",
            r.style.background = "#fff"
          }
        }
      }), 200)); (0, c.useEffect)((function() {
        return window.addEventListener("resize", _t),
        function() {
          window.removeEventListener("resize", _t)
        }
      }), []);
      var ft, pt, gt, ht, yt, bt, xt, wt, kt, Et, Pt, Ct, St = (0, c.useCallback)((0, m.debounce)((function() {
        ee.Z.info({
          closable: !0,
          centered: !0,
          width: 550,
          title: "提示",
          okText: "我知道了",
          content: "请在WEB端或者APP端观看",
          afterClose: function() {
            A(!1)
          }
        })
      }), 1e3), []),
      It = !(null === (n = T.progressConfig) || void 0 === n || !n.spi);
      if (It && it) return St(),
      null;
      if (("video" === s.resource_type || "audio" === s.resource_type) && null !== (r = s.video_extend) && void 0 !== r && r.urls) return j ? c.createElement("div", {
        className: ge["course-player"]
      },
      c.createElement(De, (0, $.Z)({
        libraryId: N,
        key: s.resource_id,
        courseId: u,
        resources: null === (ft = s.video_extend) || void 0 === ft ? void 0 : ft.urls,
        poster: null !== (pt = null === (gt = s.video_extend) || void 0 === gt ? void 0 : gt.front_cover_url) && void 0 !== pt ? pt: "",
        onReady: mt,
        onPlayChange: dt,
        onPlayFinish: st,
        onReload: ut,
        onTimeUpdate: vt,
        origin: "TCH",
        activityEvent: x,
        controlSeeking: 2 !== (null === (ht = T.state) || void 0 === ht ? void 0 : ht[s.resource_id]) && !1 === (null === (yt = T.progressConfig) || void 0 === yt ? void 0 : yt.is_allow_drag),
        maxPosition: Qe,
        controlSpeed: !1 === (null === (bt = T.progressConfig) || void 0 === bt ? void 0 : bt.is_allow_speed),
        forcedLogin: p,
        onlyone: y,
        mediaType: s.resource_type,
        userId: T.dataSessionId,
        activityId: s.activity_id,
        resourceId: s.resource_id
      },
      T))) : null;
      if ("x_video" === s.resource_type && s.urls) return j ? c.createElement("div", {
        className: ge["course-player"]
      },
      c.createElement(De, (0, $.Z)({
        key: s.id,
        courseId: u,
        resources: s.urls,
        poster: null !== (xt = s.cover) && void 0 !== xt ? xt: "",
        onReady: mt,
        onPlayChange: dt,
        onPlayFinish: st,
        onReload: ut,
        origin: "TCH",
        activityEvent: x,
        controlSeeking: 2 !== (null === (wt = T.state) || void 0 === wt ? void 0 : wt[s.resource_id]) && !1 === (null === (kt = T.progressConfig) || void 0 === kt ? void 0 : kt.is_allow_drag),
        maxPosition: Qe,
        controlSpeed: !1 === (null === (Et = T.progressConfig) || void 0 === Et ? void 0 : Et.is_allow_speed),
        forcedLogin: p,
        onlyone: y,
        userId: T.dataSessionId,
        activityId: s.activity_id,
        resourceId: s.resource_id
      },
      T))) : null;
      if ("document" === s.resource_type && null !== (l = s.document_extend) && void 0 !== l && l.files) return S(),
      c.createElement(ae.Z, (0, $.Z)({
        key: s.resource_id,
        data: Ae(Ae({
          resource_id: s.resource_id
        },
        s.document_extend), {},
        {
          init_page_num: U
        }),
        beginPage: U,
        onPageChange: Ne,
        origin: "TCH",
        controlSeeking: 2 !== (null === (Pt = T.state) || void 0 === Pt ? void 0 : Pt[s.resource_id]) && ( !! T.progressConfig && !T.progressConfig.is_allow_drag),
        maxPosition: Math.max((null === b || void 0 === b || null === (Ct = b[s.resource_id]) || void 0 === Ct ? void 0 : Ct.pos) || U + 1)
      },
      T));
      if ("e_exercise_activity" === s.resource_type) {
        var Nt, Tt, Rt;
        S();
        var Zt = function(e) {
          var t;
          if (2 !== (null === (t = T.state) || void 0 === t ? void 0 : t[s.resource_id])) {
            var n = e || {},
            r = n.totalCount,
            a = void 0 === r ? 1 : r,
            i = n.correctCount,
            o = void 0 === i ? 0 : i,
            c = s.ext_info || {},
            l = c.pass_model,
            d = c.pass_value,
            m = 4 === l;
            1 === l ? m = o / a * 100 >= d: 3 === l && (m = o >= d),
            m && (Se(2, o), Ce(2, o)),
            (0, J._A)({
              eventName: "edu_Platform_exercise_submit_click",
              params: {
                channel_code: (0, W.getPageChannelCode)(),
                column_code: N,
                training_id: N,
                course_id: u,
                answer_type: (0, ce.dz)(he),
                answer_num: a,
                answer_correctly_num: o,
                exercise_type: "在线练习"
              }
            })
          }
        },
        Ot = function(e) {
          if (e) {
            var t, n = null === e || void 0 === e || null === (t = e.userExamSessionVo) || void 0 === t ? void 0 : t.status;
            ye(n)
          } else _e(!0); (0, J.XN)({
            eventName: "edu_Platform_exercise_page",
            params: {
              channel_code: (0, W.getPageChannelCode)(),
              column_code: N,
              training_id: N,
              course_id: u,
              answer_type: (0, ce.dz)(he),
              exercise_type: "在线练习"
            }
          }),
          se(!1)
        },
        Dt = function() {
          var e; (0, J._A)({
            eventName: "edu_Platform_exercise_click",
            params: {
              channel_code: (0, W.getPageChannelCode)(),
              column_code: N,
              training_id: N,
              course_id: u,
              answer_type: (0, ce.dz)(he),
              exercise_type: "在线练习"
            }
          }),
          2 !== (null === (e = T.state) || void 0 === e ? void 0 : e[s.resource_id]) && Se(1, 0)
        },
        Lt = function() { (0, J._A)({
            eventName: "edu_Platform_exercise_quit_click",
            params: {
              channel_code: (0, W.getPageChannelCode)(),
              column_code: N,
              training_id: N,
              course_id: u,
              answer_type: (0, ce.dz)(he),
              exercise_type: "在线练习"
            }
          })
        };
        return c.createElement(h.Z, {
          loading: ne,
          loadingProps: {
            delay: 0,
            withChildren: !0
          },
          empty: ve,
          emptyProps: {
            tip: "哎呀，练习不见了~"
          }
        },
        c.createElement(Y(), {
          ref: function(e) {
            return T.setPlayRef(e)
          },
          onlineExamId: s.online_exam_id,
          uc: z.uc,
          userId: He,
          env: k["default"].env || "ncet-xedu",
          passed: 2 === (null === (Nt = T.state) || void 0 === Nt ? void 0 : Nt[s.resource_id]),
          passModel: null === (Tt = s.ext_info) || void 0 === Tt ? void 0 : Tt.pass_model,
          passValue: null === (Rt = s.ext_info) || void 0 === Rt ? void 0 : Rt.pass_value,
          sdpAppParams: {
            "sdp-app-id": k["default"].app.appid
          },
          onInited: Ot,
          onSubmited: Zt,
          onStartAnswer: Dt,
          onExit: Lt,
          questionProps: {
            hosts: {
              "general-ability-common.exam.ndplayer_version": "2.0.0"
            },
            renderOptions: {
              reRenderImageAndVideo: !0
            },
            watermark: {
              userInfo: xe
            },
            videoUrl: {
              js: (0, X.$i)("/fish/video/videoplayer.min.js"),
              css: (0, X.$i)("/fish/video/videoplayer.min.css"),
              locale: (0, X.$i)("/fish/video")
            }
          }
        }))
      }
      return c.createElement(ie.Z, {
        tip: "哎呀，资源不存在",
        hideBack: !0,
        className: ge["list-empty"]
      })
    })),
    lt = n(846418),
    ut = {
      card: "index-module_card_CHp+c",
      "card-header": "index-module_card-header_YSMW6",
      "card-title": "index-module_card-title_+R5-r",
      teacher: "index-module_teacher_q0K1A",
      "teacher-name": "index-module_teacher-name_prkPS"
    };
    function st(e) {
      var t = e.data,
      n = void 0 === t ? [] : t,
      r = e.className;
      return n.length ? c.createElement("div", {
        className: d()(ut.card, r)
      },
      c.createElement("div", {
        className: ut["card-header"]
      },
      c.createElement("div", {
        className: ut["card-title"]
      },
      "授课教师")), c.createElement("div", null, n.map((function(e) {
        return c.createElement("div", {
          className: ut.teacher,
          key: e
        },
        c.createElement("div", {
          className: ut["teacher-name"]
        },
        e))
      })))) : null
    }
    var dt = n(973935),
    mt = n(935683),
    vt = n(590340),
    _t = ["onUploadProgress", "changeStudyStatus"];
    function ft(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))),
        n.push.apply(n, r)
      }
      return n
    }
    function pt(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? ft(Object(n), !0).forEach((function(t) { (0, i.Z)(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ft(Object(n)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
      }
      return e
    }
    var gt = ce.hX.NotStart,
    ht = ce.hX.Studying,
    yt = ce.hX.Finish;
    window.React = c,
    window.ReactDOM = dt;
    var bt, xt = vt.P.xEduMicroAppDetail,
    wt = xt.name,
    kt = xt.url,
    Et = 1e4,
    Pt = function(e) {
      var t = (0, c.useContext)(oe.Z),
      n = t.userInfo,
      r = t.userRole,
      i = (0, c.useRef)(),
      o = (0, c.useRef)(),
      l = (0, c.useRef)(!1),
      u = (0, c.useRef)(!1),
      s = e.onUploadProgress,
      d = e.changeStudyStatus,
      m = (0, te.Z)(e, _t),
      v = z.uc;
      if (X.ZT) {
        var _ = window.microApp.getData();
        null !== _ && void 0 !== _ && _.uc && !window.Bridge && (v = _.uc)
      }
      var f = C((0, a.Z)(regeneratorRuntime.mark((function e() {
        var t, r, a, c, l, u = arguments;
        return regeneratorRuntime.wrap((function(e) {
          while (1) switch (e.prev = e.next) {
          case 0:
            if (t = u.length > 0 && void 0 !== u[0] && u[0], r = u.length > 1 && void 0 !== u[1] && u[1], a = i.current, c = o.current, r || !a.paused() && !a.ended() && null !== n && void 0 !== n && n.user_id) {
              e.next = 6;
              break
            }
            return e.abrupt("return");
          case 6:
            l = a.currentTime(),
            (0, ue.Mz)({
              videoId: c.resource_id || c.id,
              userId: n.user_id,
              position: l,
              immediate: t
            }),
            null === s || void 0 === s || s();
          case 9:
          case "end":
            return e.stop()
          }
        }), e)
      })))),
      p = C((0, a.Z)(regeneratorRuntime.mark((function e() {
        var t;
        return regeneratorRuntime.wrap((function(e) {
          while (1) switch (e.prev = e.next) {
          case 0:
            if (t = o.current, null !== n && void 0 !== n && n.user_id && t) {
              e.next = 3;
              break
            }
            return e.abrupt("return");
          case 3:
            (0, ue.Xq)({
              documentId: t.resource_id,
              userId: n.user_id,
              position: t.currentPage
            }),
            null === s || void 0 === s || s();
          case 5:
          case "end":
            return e.stop()
          }
        }), e)
      })))),
      g = C((function(e, t) {
        for (var n = arguments.length,
        r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
        return null === d || void 0 === d ? void 0 : d.apply(void 0, [e, t].concat(r))
      })),
      h = (0, c.useCallback)((function(e) {
        var t = i.current;
        if (!l.current && !t.seeking()) {
          var n = t.currentTime() >= t.duration();
          f("dispose" === e.type || n, !0),
          l.current = n,
          g(n ? yt: ht, t.currentTime())
        }
      }), []); (0, c.useEffect)((function() {
        return function() {
          clearInterval(bt),
          o.current = null;
          var e = i.current;
          e && (e.off("play", h), e.off("pause", h), e.off("end", h), e.off("dispose", h))
        }
      }), []);
      var y = function(e) {
        var t = e.player,
        n = e.currentResource;
        clearInterval(bt),
        l.current = !1,
        u.current = !1,
        t.off("play", h),
        t.off("pause", h),
        t.off("end", h),
        t.off("abort", h),
        i.current = t,
        o.current = n;
        var r = function() {
          return f()
        };
        bt = setInterval(r, Et),
        t.one("ended", h),
        t.on("play", h),
        t.on("pause", h),
        t.one("dispose", h)
      },
      b = function() {
        clearInterval(bt);
        var e = i.current;
        if (e) {
          var t = e.currentTime(),
          n = e.duration(),
          r = gt;
          switch (!0) {
          case t > 0 && t < n: r = ht;
            break;
          case t === n: r = yt;
            break;
          default:
            break
          }
          e.off("end", h),
          e.off("play", h),
          e.off("pause", h),
          e.off("abort", h),
          f(!0),
          null === g || void 0 === g || g(r, t)
        }
      },
      x = function(e) {
        var t = e.currentResource;
        clearInterval(bt),
        i.current && f(!0, !0),
        l.current = !1,
        i.current = null,
        o.current = t
      },
      w = function(e) {
        var t, n = e.pageCount,
        r = e.currentPage;
        if (n && 0 !== r) {
          var a = r > n ? n: r,
          i = o.current;
          i.currentPage !== a && (o.current = pt(pt({},
          null !== (t = o.current) && void 0 !== t ? t: {}), {},
          {
            currentPage: a
          }), p(), g(r >= n ? yt: ht, a))
        }
      };
      return c.createElement(c.Fragment, null, c.createElement(mt.Z, {
        name: wt,
        url: kt,
        inline: !0,
        globalData: {
          uc: v
        },
        data: pt({
          loadingTransparent: !0,
          userInfo: n,
          userRole: r,
          sdpAppId: k["default"].app.appid,
          contentType: "t_course",
          onVideoPlayerReady: y,
          onVideoPlayerQuit: b,
          onDocumentPlayerEnter: x,
          onDocumentPageChange: w,
          getVideoProgress: ue.Tc
        },
        m)
      }))
    },
    Ct = n(902315),
    St = n(288061),
    It = n(289e3),
    Nt = (n(181132), n(57535)),
    Tt = (n(300268), {
      "course-detail": "index-module_course-detail_bL7S7",
      "detail-top": "index-module_detail-top_OVeDo",
      title: "index-module_title_b9nPw",
      name: "index-module_name_A1bKn",
      work_result: "index-module_work_result_LqHRt",
      extends: "index-module_extends_SpNKk",
      source: "index-module_source_JBWIu",
      learned: "index-module_learned_oDo4W",
      actions: "index-module_actions_SRWzI",
      "detail-main": "index-module_detail-main_8Msgy",
      "detail-main-content": "index-module_detail-main-content_Yr-Qr",
      "detail-main-l": "index-module_detail-main-l_0fEZ-",
      "work-wrapper": "index-module_work-wrapper_wZbym",
      "video-wrapper": "index-module_video-wrapper_r6ONu",
      "detail-main-drawer-box": "index-module_detail-main-drawer-box_bWU4o",
      "detail-main-l-work": "index-module_detail-main-l-work_QgVYD",
      "detail-main-r": "index-module_detail-main-r_CLkZZ",
      "sub-title": "index-module_sub-title_Oawjz",
      "catalog-wrapper": "index-module_catalog-wrapper_X52ZR",
      "catalog-title": "index-module_catalog-title_hdItN",
      "theme-dark": "index-module_theme-dark_89oZp",
      "detail-bottom": "index-module_detail-bottom_GoNXB",
      "related-recommend": "index-module_related-recommend_76kw1",
      "course-intro": "index-module_course-intro_ZxUDg",
      "extend-reading": "index-module_extend-reading_fV22e",
      info: "index-module_info_zjO6R",
      lecturer: "index-module_lecturer_1szL6",
      "intro-text": "index-module_intro-text_buwTy",
      lecturer_title: "index-module_lecturer_title_AMdVA",
      lecturer_name: "index-module_lecturer_name_B91Up",
      download: "index-module_download_ZT7Ah",
      "related-recommend-content": "index-module_related-recommend-content_pzUxy",
      "related-recommend-content__title": "index-module_related-recommend-content__title_Pdqio",
      "related-recommend-content__cover": "index-module_related-recommend-content__cover_Ncwmp",
      "related-recommend-content__info": "index-module_related-recommend-content__info_67kYX",
      "related-recommend-content__source": "index-module_related-recommend-content__source_1qrLR",
      "related-recommend-content__link": "index-module_related-recommend-content__link_yt9WB",
      "related-recommend-content__uv": "index-module_related-recommend-content__uv_cH+0e",
      "related-recommend-content__stat": "index-module_related-recommend-content__stat_Ibe-f",
      empty: "index-module_empty_5ofeS"
    }),
    Rt = k["default"].api;
    function Zt(e) {
      var t = e.extendReadingData,
      n = e.onDownload;
      return 0 === t.length ? null: c.createElement("div", {
        className: Tt["extend-reading"]
      },
      c.createElement("div", {
        className: Tt.title
      },
      "延伸阅读"), c.createElement(Nt.Z, null), c.createElement("ul", null, t.map((function(e, t) {
        var r = e.url;
        r.startsWith("http") || (r = "".concat(Rt.cdn).concat(Rt["cdn-prefix"]).concat(r));
        var a = e.name.substring(0, e.name.lastIndexOf("."));
        return c.createElement("li", {
          key: e.name
        },
        c.createElement("div", {
          className: Tt.name,
          title: a
        },
        a), c.createElement("div", {
          className: Tt.download
        },
        c.createElement(_e.Z, {
          type: "primary",
          onClick: n,
          href: (0, W.urlWithTheme)(r)
        },
        "下载")))
      }))))
    }
    var Ot = Zt,
    Dt = n(689591),
    Lt = n(367627),
    jt = n(892441),
    At = {
      live: "live-module_live_tXiMZ",
      container: "live-module_container_jjeGM",
      info: "live-module_info_FI4lF",
      player: "live-module_player_jQjR6",
      desc: "live-module_desc_nJz97"
    };
    function Mt(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))),
        n.push.apply(n, r)
      }
      return n
    }
    function Ft(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? Mt(Object(n), !0).forEach((function(t) { (0, i.Z)(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Mt(Object(n)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
      }
      return e
    }
    function Ut(e) {
      var t = e.liveId,
      n = e.trainId,
      r = e.courseId,
      a = e.resourceId,
      i = e.columnCode,
      o = e.channelCode,
      l = e.reportToTrain,
      u = (0, W.getUrlQuery)(),
      s = u["x-edu-theme"],
      d = ce.hX.Finish,
      m = (0, c.useContext)(oe.Z),
      v = function() {
        var e = (0, z.Zd)(),
        t = s ? "".concat(e).concat(null !== e && void 0 !== e && e.includes("?") ? "&": "?", "x-edu-theme=").concat(s) : e;
        window.location.href = t
      },
      _ = function(e) {
        console.log(e)
      },
      f = function(e) {
        console.log(e)
      },
      p = function() {},
      g = function() {
        var e = (new Date).getTime();
        l(d, e)
      },
      h = function(e) {
        var t = Ft(Ft({},
        e.params), {},
        {
          course_id: r,
          resource_id: a,
          training_id: n,
          column_code: i,
          channel_code: o
        }); (0, J._A)(Ft(Ft({},
        e), {},
        {
          params: t
        }))
      },
      y = "preproduction" === k["default"].env ? jt.PublicLiveDetail: Lt.PublicLiveDetail;
      return c.createElement("div", {
        className: At.live
      },
      c.createElement(y, {
        key: t,
        className: At.live,
        containerClassName: At.container,
        infoClassName: At.info,
        playerClassName: At.player,
        descriptionClassName: At.desc,
        liveId: t,
        appId: k["default"].appId,
        uc: z.uc,
        loginInfo: m,
        handleLogin: v,
        onOnlineCountChange: _,
        onStateChange: f,
        onReportProgress: p,
        onReportTeacherTrain: g,
        onSendSensors: h
      }))
    }
    var Ht = c.memo(Ut),
    zt = (n(339772), n(648670)),
    qt = n(230038),
    Vt = (0, qt.oJ)("@/page/tchTraining/component/Card/img/default_cover.png"),
    Xt = function(e) {
      return e && e.startsWith("http")
    };
    function Bt(e) {
      var t = e.courseDetail,
      n = e.libraryId,
      r = e.libraryTags,
      i = (0, W.getUrlQuery)(),
      u = i["x-edu-theme"],
      s = (0, l.k6)(),
      d = (0, c.useState)([]),
      v = (0, o.Z)(d, 2),
      _ = v[0],
      f = v[1]; (0, c.useEffect)((function() {
        if (t && n) {
          var e = function() {
            var e = (0, a.Z)(regeneratorRuntime.mark((function e() {
              var a, i, o, c, l, u, s, d, v, _, p, g, h;
              return regeneratorRuntime.wrap((function(e) {
                while (1) switch (e.prev = e.next) {
                case 0:
                  return e.prev = 0,
                  e.next = 3,
                  (0, F.P6)(n);
                case 3:
                  if (e.t0 = e.sent, e.t0) {
                    e.next = 6;
                    break
                  }
                  e.t0 = [];
                case 6:
                  if (a = e.t0, i = [], o = [], c = t.context_id.split("auxo-train:")[1], !c && k["default"].library.trainLibraryIDS.includes(n) && (c = n), !c) {
                    e.next = 31;
                    break
                  }
                  return e.next = 14,
                  (0, M.ye)(c);
                case 14:
                  l = e.sent,
                  u = (null === l || void 0 === l ? void 0 : l.map((function(e) {
                    return null === e || void 0 === e ? void 0 : e.course_id
                  }))) || [],
                  a = a.filter((function(e) {
                    var t;
                    return - 1 !== u.indexOf(e.unit_id) && !(null !== (t = e.extra) && void 0 !== t && t.begin_time && re()(e.extra.begin_time) > re()())
                  })),
                  s = Math.min(8, a.length - 1),
                  s <= 0 && console.log("库id".concat(n, "没有可推荐的内容")),
                  d = regeneratorRuntime.mark((function e() {
                    var n, r;
                    return regeneratorRuntime.wrap((function(e) {
                      while (1) switch (e.prev = e.next) {
                      case 0:
                        n = Math.floor(Math.random() * a.length),
                        r = a[n],
                        r.unit_id !== t.id && -1 === i.findIndex((function(e) {
                          return e.unit_id === r.unit_id
                        })) && i.push(r);
                      case 3:
                      case "end":
                        return e.stop()
                      }
                    }), e)
                  }));
                case 20:
                  if (! (s > 0 && i.length < s)) {
                    e.next = 24;
                    break
                  }
                  return e.delegateYield(d(), "t1", 22);
                case 22:
                  e.next = 20;
                  break;
                case 24:
                  if (! (i.length > 0)) {
                    e.next = 29;
                    break
                  }
                  return v = a.map((function(e) {
                    var t = e.resource_id;
                    return t
                  })),
                  e.next = 28,
                  (0, U.nC)(v);
                case 28:
                  o = e.sent;
                case 29:
                  e.next = 41;
                  break;
                case 31:
                  return p = (null === (_ = (0, m.find)(r, {
                    library_id: n
                  })) || void 0 === _ ? void 0 : _.container_id) || n,
                  e.next = 34,
                  (0, H.vr)(t.id, p, (0, W.isSpecialEdu)() ? 8 : null);
                case 34:
                  if (g = e.sent, i = (null === g || void 0 === g ? void 0 : g.items) || [], !(i.length > 0)) {
                    e.next = 41;
                    break
                  }
                  return h = i.map((function(e) {
                    var t = e.resource_id;
                    return t
                  })),
                  e.next = 40,
                  (0, U.nC)(h);
                case 40:
                  o = e.sent;
                case 41:
                  o.forEach((function(e) {
                    var t = i.find((function(t) {
                      return t.resource_id === e.id
                    }));
                    t && (t.stat = {
                      like: e.like_count,
                      uv: e.total_uv
                    })
                  })),
                  f(i),
                  e.next = 48;
                  break;
                case 45:
                  e.prev = 45,
                  e.t2 = e["catch"](0),
                  console.error(e.t2);
                case 48:
                case "end":
                  return e.stop()
                }
              }), e, null, [[0, 45]])
            })));
            return function() {
              return e.apply(this, arguments)
            }
          } ();
          e()
        }
      }), [t, n]);
      var g = (0, c.useCallback)((function(e) {
        var t, r = e.resource_type,
        a = e.resource_id;
        if (Xt(e.description)) window.open(u ? "".concat(e.description).concat(e.description.includes("?") ? "&": "?", "x-edu-theme=").concat(u) : e.description);
        else if (["x_url", "x_smarturl", "x_smartlink", "assets_url"].includes(e.resource_type) && null !== (t = e.extra) && void 0 !== t && t.url) {
          var i;
          window.open(u ? "".concat(e.extra.url).concat(null !== (i = e.extra.url) && void 0 !== i && i.includes("?") ? "&": "?", "x-edu-theme=").concat(u) : e.extra.url)
        } else {
          var o = (null === e || void 0 === e ? void 0 : e.library_id) || n;
          if ("t_course" !== r && (0, W.isSpecialEdu)()) {
            var c;
            if ((0, W.isSpecialEdu)())"special_edu_lesson" === r && (c = "".concat(window.location.origin, "/specialEdu/yearQualityCourse?courseId=").concat(a, "&libraryId=").concat(o, "&courseType=special_edu_lesson")),
            c = "".concat(window.location.origin, "/specialEdu/detail?contentType=").concat(r, "&contentId=").concat(a, "&catalogType=specialEdu&libraryId=").concat(o),
            window.location.href = c
          } else {
            var l = (e.tags[e.tags.length - 1] || {}).title || "",
            d = (0, W.getUrlQuery)(),
            m = d.channelId,
            v = void 0 === m ? "": m,
            _ = d.breadcrumb,
            f = void 0 === _ ? "": _,
            p = "".concat((0, St.Zq)(), "/courseDetail?courseId=").concat(a, "&tag=").concat(encodeURIComponent(l), "&channelId=").concat(v, "&libraryId=").concat(o, "&breadcrumb=").concat(encodeURIComponent(f)),
            g = u ? "".concat(p).concat(null !== p && void 0 !== p && p.includes("?") ? "&": "?", "x-edu-theme=").concat(u) : p;
            s.push(g)
          }
        }
      }), []),
      h = (0, c.useCallback)((function(e) {
        var t, n, r = e.item,
        a = e.onClick,
        i = void 0 === a ?
        function() {}: a;
        return c.createElement("div", {
          key: r.unit_id,
          onClick: function() {
            i(r)
          }
        },
        c.createElement("div", {
          className: Tt["related-recommend-content__cover"]
        },
        c.createElement("img", {
          src: r.cover_url ? (0, zt.Z)(r.cover_url, 240) : Vt
        })), c.createElement("div", {
          className: Tt["related-recommend-content__info"]
        },
        c.createElement("div", {
          className: Tt["related-recommend-content__title"],
          title: r.title
        },
        r.title), (null === r || void 0 === r || null === (t = r.extra) || void 0 === t ? void 0 : t.source) && c.createElement("div", {
          className: Tt["related-recommend-content__source"]
        },
        c.createElement("i", {
          className: "iconfont icon_hotel_fill"
        }), c.createElement("span", null, null === r || void 0 === r || null === (n = r.extra) || void 0 === n ? void 0 : n.source)), r.stat && !Xt(r.description) && "x_url" !== r.resource_type && "x_smarturl" !== r.resource_type && "train" !== r.resource_type && "x_smartlink" !== r.resource_type && c.createElement("div", {
          className: Tt["related-recommend-content__stat"]
        },
        c.createElement("span", {
          className: Tt["related-recommend-content__uv"]
        },
        c.createElement("i", {
          className: "iconfont web_icon_guanzhu_fill"
        }), c.createElement("span", null, (0, p.HR)(r.stat.uv || 0))), c.createElement("span", {
          className: Tt["related-recommend-content__link"]
        },
        c.createElement("i", {
          className: "iconfont web_icon_dianzan_fill"
        }), c.createElement("span", null, (0, p.mf)(r.stat.like || 0))))))
      }), []);
      return 0 === _.length ? null: c.createElement("div", {
        className: Tt["detail-bottom"]
      },
      c.createElement("div", {
        className: Tt["related-recommend"]
      },
      c.createElement("div", {
        className: Tt.title
      },
      "相关推荐"), c.createElement(Nt.Z, {
        className: "x-edu-divider"
      }), c.createElement("div", {
        className: Tt["related-recommend-content"]
      },
      _.map((function(e) {
        return c.createElement(h, {
          item: e,
          key: e.unit_id,
          onClick: g
        })
      })))))
    }
    var Jt = n(636183);
    function Kt(e, t) {
      var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
      if (!n) {
        if (Array.isArray(e) || (n = Wt(e)) || t && e && "number" === typeof e.length) {
          n && (e = n);
          var r = 0,
          a = function() {};
          return {
            s: a,
            n: function() {
              return r >= e.length ? {
                done: !0
              }: {
                done: !1,
                value: e[r++]
              }
            },
            e: function(e) {
              throw e
            },
            f: a
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var i, o = !0,
      c = !1;
      return {
        s: function() {
          n = n.call(e)
        },
        n: function() {
          var e = n.next();
          return o = e.done,
          e
        },
        e: function(e) {
          c = !0,
          i = e
        },
        f: function() {
          try {
            o || null == n.
            return || n.
            return ()
          } finally {
            if (c) throw i
          }
        }
      }
    }
    function Wt(e, t) {
      if (e) {
        if ("string" === typeof e) return Qt(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name),
        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Qt(e, t) : void 0
      }
    }
    function Qt(e, t) { (null == t || t > e.length) && (t = e.length);
      for (var n = 0,
      r = new Array(t); n < t; n++) r[n] = e[n];
      return r
    }
    function Gt(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))),
        n.push.apply(n, r)
      }
      return n
    }
    function Yt(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? Gt(Object(n), !0).forEach((function(t) { (0, i.Z)(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Gt(Object(n)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
      }
      return e
    }
    function $t() {
      var e, t, n, s, P = k["default"].api,
      S = P["zxx-web"],
      I = P.serviceName,
      N = (0, W.getUrlQuery)(),
      O = N.tag,
      D = void 0 === O ? "": O,
      G = N.libraryId,
      Y = void 0 === G ? "": G,
      $ = N.breadcrumb,
      ee = void 0 === $ ? "": $,
      te = N.firstLevel,
      ne = void 0 === te ? "": te,
      re = N.secondLevel,
      ae = void 0 === re ? "": re,
      ie = N.channelId,
      oe = void 0 === ie ? "": ie,
      ce = N.thirdLevel,
      le = void 0 === ce ? "": ce,
      se = N.courseId,
      de = N.resourceId,
      me = void 0 === de ? "": de,
      ve = N.workFlag,
      _e = void 0 === ve ? "0": ve,
      fe = (0, u.getXEduThemeName)(),
      pe = (0, c.useState)(""),
      ge = (0, o.Z)(pe, 2),
      he = ge[0],
      ye = ge[1],
      be = (0, c.useState)(null),
      xe = (0, o.Z)(be, 2),
      we = xe[0],
      ke = xe[1],
      Ee = (0, c.useState)(null),
      Pe = (0, o.Z)(Ee, 2),
      Ce = Pe[0],
      Se = Pe[1],
      Ie = (0, c.useState)(null),
      Ne = (0, o.Z)(Ie, 2),
      Te = Ne[0],
      Re = Ne[1],
      Ze = (0, c.useState)(!1),
      Oe = (0, o.Z)(Ze, 2),
      De = Oe[0],
      Le = Oe[1],
      je = (0, c.useState)(!1),
      Ae = (0, o.Z)(je, 2),
      Me = Ae[0],
      Fe = Ae[1],
      Ue = (0, c.useState)(null),
      He = (0, o.Z)(Ue, 2),
      ze = He[0],
      qe = He[1],
      Ve = (0, c.useState)(null),
      Xe = (0, o.Z)(Ve, 2),
      Be = Xe[0],
      Je = Xe[1],
      Ke = (0, c.useState)(null),
      We = (0, o.Z)(Ke, 2),
      Qe = We[0],
      Ge = We[1],
      Ye = (0, c.useState)(null),
      $e = (0, o.Z)(Ye, 2),
      et = $e[0],
      tt = $e[1],
      nt = (0, c.useState)({}),
      rt = (0, o.Z)(nt, 2),
      at = rt[0],
      it = rt[1],
      ot = (0, c.useState)([]),
      ut = (0, o.Z)(ot, 2),
      dt = ut[0],
      mt = ut[1],
      vt = (0, c.useMemo)(St.NH, []),
      _t = (0, c.useState)({}),
      ft = (0, o.Z)(_t, 2),
      pt = ft[0],
      gt = ft[1],
      ht = (0, c.useState)({}),
      yt = (0, o.Z)(ht, 2),
      bt = yt[0],
      xt = yt[1],
      wt = (0, c.useState)(!0),
      kt = (0, o.Z)(wt, 2),
      Et = kt[0],
      Nt = kt[1],
      Rt = (0, c.useState)(null),
      Zt = (0, o.Z)(Rt, 2),
      Lt = Zt[0],
      jt = Zt[1],
      At = (0, c.useState)(null),
      Mt = (0, o.Z)(At, 2),
      Ft = Mt[0],
      Ut = Mt[1],
      zt = "1" === _e,
      qt = (0, l.k6)(),
      Vt = (0, c.useRef)(),
      Xt = (0, c.useState)(null),
      Wt = (0, o.Z)(Xt, 2),
      Qt = Wt[0],
      Gt = Wt[1],
      $t = (0, c.useState)(!1),
      en = (0, o.Z)($t, 2),
      tn = en[0],
      nn = en[1],
      rn = {
        assessmentId: se,
        assessmentType: "t_course"
      },
      an = (0, Ct.Z)(rn),
      on = an.assessmentVo;
      console.log("assessmentVo", on);
      var cn = function(e, t) {
        var n = Yt({},
        et);
        n[e] = (n[e] || 0) - t > 0 ? n[e] : t,
        tt(Yt({},
        n))
      },
      ln = function() {
        var e;
        return - 1 !== (null === ze || void 0 === ze || null === (e = ze.resource_type) || void 0 === e ? void 0 : e.indexOf("video")) ? "video": "e_exercise_activity" === (null === ze || void 0 === ze ? void 0 : ze.resource_type) ? "exam": "e_live_activity" === (null === ze || void 0 === ze ? void 0 : ze.resource_type) ? "live": "doc"
      },
      un = function(e) {
        var t;
        return "e_live_activity" === (null === ze || void 0 === ze ? void 0 : ze.resource_type) ? (null === ze || void 0 === ze ? void 0 : ze.study_time) || (null === ze || void 0 === ze || null === (t = ze.ext_info) || void 0 === t ? void 0 : t.duration) || 0 : e
      },
      sn = (0, c.useCallback)(function() {
        var e = (0, a.Z)(regeneratorRuntime.mark((function e(t, n) {
          var r, a, i, o, c;
          return regeneratorRuntime.wrap((function(e) {
            while (1) switch (e.prev = e.next) {
            case 0:
              if (Te && ze && null !== R.pn && void 0 !== R.pn && R.pn.userId) {
                e.next = 2;
                break
              }
              return e.abrupt("return");
            case 2:
              return e.next = 4,
              R.pn.getProgressData(R.pn.userId, Te.id);
            case 4:
              if (a = e.sent, a) {
                e.next = 8;
                break
              }
              return console.log("课程进度不存在, 是否调用`await initProgressInfo`"),
              e.abrupt("return");
            case 8:
              if (i = (null === (r = a.ext_info.resource_progress) || void 0 === r ? void 0 : r[null === ze || void 0 === ze ? void 0 : ze.resource_id]) || 0, e.t0 = t > i && 0 !== t, !e.t0) {
                e.next = 14;
                break
              }
              return e.next = 13,
              (0, z.iT)();
            case 13:
              e.t0 = e.sent;
            case 14:
              if (!e.t0) {
                e.next = 16;
                break
              } (0, ue.bL)({
                courseId: se,
                activityId: ze.activity_id || ze.id,
                activityName: (null === (o = ze.video_extend) || void 0 === o ? void 0 : o.title) || (null === (c = ze.document_extend) || void 0 === c ? void 0 : c.title) || ze.name,
                resourceId: null === ze || void 0 === ze ? void 0 : ze.resource_id,
                studyTime: null === ze || void 0 === ze ? void 0 : ze.study_time
              });
            case 16:
              (0, ue.fJ)({
                courseId: Te.id,
                resourceId: null === ze || void 0 === ze ? void 0 : ze.resource_id,
                activityId: ze.activity_id || ze.id,
                resources: [ze],
                state: t,
                type: ln(),
                position: n
              }),
              cn(null === ze || void 0 === ze ? void 0 : ze.resource_id, t);
            case 18:
            case "end":
              return e.stop()
            }
          }), e)
        })));
        return function(t, n) {
          return e.apply(this, arguments)
        }
      } (), [ze, Te]),
      dn = function() {
        var e = (0, a.Z)(regeneratorRuntime.mark((function e(t, n) {
          var r, a, i, o, c, l, u, s, d, m, v, _, f = arguments;
          return regeneratorRuntime.wrap((function(e) {
            while (1) switch (e.prev = e.next) {
            case 0:
              if (u = f.length > 2 && void 0 !== f[2] && f[2], s = f.length > 3 && void 0 !== f[3] && f[3], null !== Te && void 0 !== Te && null !== (r = Te.ext_info) && void 0 !== r && null !== (a = r.progress_config) && void 0 !== a && a.spi && (!s || null !== Te && void 0 !== Te && null !== (i = Te.ext_info) && void 0 !== i && null !== (o = i.progress_config) && void 0 !== o && o["begin-spi"])) {
                e.next = 4;
                break
              }
              return e.abrupt("return", null);
            case 4:
              return d = "",
              "teacherTraining" === (null === (c = Te.ext_info) || void 0 === c || null === (l = c.progress_config) || void 0 === l ? void 0 : l.type) && (d = Te.ext_info.progress_config.source_train_exid),
              e.next = 8,
              (0, z.bG)();
            case 8:
              return m = e.sent,
              v = m.user_id,
              e.next = 12,
              (0, ue.EK)({
                url: Te.ext_info.progress_config.spi,
                fixUrl: Te.ext_info.progress_config.fix_spi,
                beginUrl: s ? Te.ext_info.progress_config["begin-spi"] : "",
                trainReportTokenUrlEncode: d,
                courseId: Te.id,
                resourceId: null === ze || void 0 === ze ? void 0 : ze.resource_id,
                activityId: (null === ze || void 0 === ze ? void 0 : ze.activity_id) || (null === ze || void 0 === ze ? void 0 : ze.id),
                resources: [ze],
                state: t,
                type: ln(),
                position: un(n),
                userId: v,
                trainId: Te.ext_info.source_train_id,
                ignoreHackCheck: u
              });
            case 12:
              return _ = e.sent,
              e.abrupt("return", _);
            case 14:
            case "end":
              return e.stop()
            }
          }), e)
        })));
        return function(t, n) {
          return e.apply(this, arguments)
        }
      } (),
      mn = function() {
        var e = (0, a.Z)(regeneratorRuntime.mark((function e(t, n) {
          var r, a, o, c, l, u, s, d, v, _, f, p, g, h, y, b, x, k, E, P, C, S, I = arguments;
          return regeneratorRuntime.wrap((function(e) {
            while (1) switch (e.prev = e.next) {
            case 0:
              return c = I.length > 2 && void 0 !== I[2] ? I[2] : [],
              l = null === c || void 0 === c ? void 0 : c.find((function(e) {
                return e.id === oe
              })),
              u = (0, m.get)(n, "nodes[0]", {}),
              ze && (u = {
                node_id: null === ze || void 0 === ze ? void 0 : ze.resource_id,
                node_name: (null === ze || void 0 === ze || null === (s = ze.video_extend) || void 0 === s ? void 0 : s.title) || (null === ze || void 0 === ze || null === (d = ze.document_extend) || void 0 === d ? void 0 : d.title) || (null === ze || void 0 === ze ? void 0 : ze.name)
              }),
              e.next = 6,
              (0, j.v2)(Y, [ne, ae]);
            case 6:
              v = e.sent,
              _ = v.first_tag_name,
              f = v.first_tag_id,
              p = v.first_tag_code,
              g = v.second_tag_name,
              h = v.second_tag_id,
              y = v.second_tag_code,
              b = "教师研修",
              x = "TCH_webPlatform_detail_page",
              k = (0, St.Zq)(),
              k === w.Xg.SPORT ? (b = "体育", x = "edu_webPlatform_articleDetail_SportsArt_page") : k === w.Xg.ART && (b = "美育", x = "edu_webPlatform_articleDetail_SportsArt_page"),
              E = {
                content_id: t.id,
                content_name: null === t || void 0 === t ? void 0 : t.name,
                resource_id: null === (r = u) || void 0 === r ? void 0 : r.node_id,
                resource_name: null === (a = u) || void 0 === a ? void 0 : a.node_name,
                channel_name: b,
                Subchannel_id: oe,
                channel_code: (0, W.getPageChannelCode)()
              },
              E = (0, W.isTwy)() ? Yt(Yt({},
              E), {},
              {
                column_code: p,
                column_name: _,
                first_tag_name: g,
                first_tag_id: h,
                first_tag_code: y,
                second_tag_name: "",
                second_tag_code: "",
                third_tag_name: "",
                third_tag_code: "",
                fourth_tag_code: "",
                fourth_tag_name: "",
                fifth_tag_code: "",
                fifth_tag_name: "",
                sixth_tag_code: "",
                sixth_tag_name: "",
                seventh_tag_code: "",
                seventh_tag_name: "",
                eightth_tag_code: "",
                eightth_tag_name: "",
                nineth_tag_code: "",
                nineth_tag_name: "",
                tenth_tag_code: "",
                tenth_tag_name: ""
              }) : Yt(Yt({},
              E), {},
              {
                first_tag_name: _,
                first_tag_id: f,
                first_tag_code: p,
                column_code: Y,
                column_name: ee,
                second_tag_name: g,
                second_tag_id: h,
                second_tag_code: y,
                Subchannel_name: null === l || void 0 === l ? void 0 : l.title,
                third_tag_name: "",
                third_tag_code: "",
                fourth_tag_code: "",
                fourth_tag_name: "",
                fifth_tag_code: "",
                fifth_tag_name: "",
                sixth_tag_code: "",
                sixth_tag_name: "",
                seventh_tag_code: "",
                seventh_tag_name: "",
                eightth_tag_code: "",
                eightth_tag_name: "",
                nineth_tag_code: "",
                nineth_tag_name: "",
                tenth_tag_code: "",
                tenth_tag_name: ""
              }),
              tn && (E = Yt(Yt({},
              E), {},
              {
                training_name: (null === Lt || void 0 === Lt ? void 0 : Lt.title) || "2022暑期专题培训",
                training_id: null === Lt || void 0 === Lt ? void 0 : Lt.id
              })),
              Je(Yt(Yt({},
              E), {},
              {
                course_type: "t_course",
                course_id: se,
                lesson_id: se,
                resource_id: null === ze || void 0 === ze ? void 0 : ze.resource_id,
                resource_type: null === ze || void 0 === ze ? void 0 : ze.resource_type,
                organ_id: "",
                training_id: (null === Lt || void 0 === Lt ? void 0 : Lt.id) || "",
                studio_id: "",
                column_code: (0, W.isTwy)() ? p: Y,
                channel_code: (0, W.getPageChannelCode)()
              })),
              setTimeout((function() { (0, B.hn)({
                  eventName: x,
                  params: E
                })
              }), 300),
              ("document" === (null === ze || void 0 === ze ? void 0 : ze.resource_type) && null !== ze && void 0 !== ze && null !== (o = ze.document_extend) && void 0 !== o && o.files || ["e_live_activity", "e_exercise_activity", "live"].includes(ze.resource_type)) && (S = (0, i.Z)((0, i.Z)((0, i.Z)((0, i.Z)({},
              null === ze || void 0 === ze ? void 0 : ze.resource_type, null === ze || void 0 === ze ? void 0 : ze.resource_type), "e_exercise_activity", "exercise"), "e_live_activity", "livebroadcast"), "live", "livebroadcast"), (0, J.Zk)({
                eventName: "resource_invite",
                params: {
                  resource_type: S[null === ze || void 0 === ze ? void 0 : ze.resource_type],
                  resource_id: null === ze || void 0 === ze ? void 0 : ze.resource_id,
                  content_id: null === ze || void 0 === ze ? void 0 : ze.resource_id,
                  course_id: se,
                  content_name: (null === ze || void 0 === ze || null === (P = ze.video_extend) || void 0 === P ? void 0 : P.title) || (null === ze || void 0 === ze || null === (C = ze.document_extend) || void 0 === C ? void 0 : C.title) || (null === ze || void 0 === ze ? void 0 : ze.name),
                  column_code: (0, W.isTwy)() ? p: Y,
                  channel_code: (0, W.getPageChannelCode)(),
                  training_id: (null === Lt || void 0 === Lt ? void 0 : Lt.id) || ""
                }
              }));
            case 23:
            case "end":
              return e.stop()
            }
          }), e)
        })));
        return function(t, n) {
          return e.apply(this, arguments)
        }
      } (),
      vn = function() {
        var e = (0, a.Z)(regeneratorRuntime.mark((function e(t) {
          var n, r, a, i, o, c, l, u, s, d, m, v, _, f, p, g, h, y, b, x, w, k, E, P, C, S, I, N, T, R, O, L, M, U, H = arguments;
          return regeneratorRuntime.wrap((function(e) {
            while (1) switch (e.prev = e.next) {
            case 0:
              if (c = H.length > 1 && void 0 !== H[1] ? H[1] : [], l = H.length > 2 ? H[2] : void 0, Y && 0 !== (null === (n = Y) || void 0 === n ? void 0 : n.length)) {
                e.next = 7;
                break
              }
              return e.next = 5,
              Z.Z.getTeacherCourseList(null, (function(e) {
                return e.unit_id === se
              }));
            case 5:
              u = e.sent,
              Y = null !== u && void 0 !== u && u.length && (null === (s = u[0]) || void 0 === s ? void 0 : s.library_id) || t;
            case 7:
              if (oe && 0 !== (null === (r = oe) || void 0 === r ? void 0 : r.length)) {
                e.next = 48;
                break
              }
              m = (0, W.isTwy)() ? c: c.slice(2),
              v = Kt(m),
              e.prev = 10,
              v.s();
            case 12:
              if ((_ = v.n()).done) {
                e.next = 40;
                break
              }
              return f = _.value,
              e.next = 16,
              (0, A.kR)(f.id);
            case 16:
              p = e.sent,
              g = Kt(p),
              e.prev = 18,
              g.s();
            case 20:
              if ((h = g.n()).done) {
                e.next = 27;
                break
              }
              if (y = h.value, -1 === (0, St.e0)(y).indexOf(Y)) {
                e.next = 25;
                break
              }
              return oe = f.id,
              e.abrupt("break", 27);
            case 25:
              e.next = 20;
              break;
            case 27:
              e.next = 32;
              break;
            case 29:
              e.prev = 29,
              e.t0 = e["catch"](18),
              g.e(e.t0);
            case 32:
              return e.prev = 32,
              g.f(),
              e.finish(32);
            case 35:
              if (!oe) {
                e.next = 38;
                break
              }
              return d = p,
              e.abrupt("break", 40);
            case 38:
              e.next = 12;
              break;
            case 40:
              e.next = 45;
              break;
            case 42:
              e.prev = 42,
              e.t1 = e["catch"](10),
              v.e(e.t1);
            case 45:
              return e.prev = 45,
              v.f(),
              e.finish(45);
            case 48:
              return e.prev = 48,
              e.next = 51,
              (0, F.Ug)(Y, se);
            case 51:
              return x = e.sent,
              e.next = 54,
              (0, F.aM)(Y);
            case 54:
              w = e.sent,
              b = (0, St.Nu)(x.tags, w),
              k = b,
              E = k.firstLevelCode,
              P = k.secondLevelCode,
              C = k.thirdLevelCode,
              S = k.lastLevelName,
              ne = E,
              ae = P,
              le = C,
              D = S,
              e.next = 66;
              break;
            case 63:
              e.prev = 63,
              e.t2 = e["catch"](48),
              console.log(e.t2);
            case 66:
              if (d || !oe) {
                e.next = 70;
                break
              }
              return e.next = 69,
              (0, A.kR)(oe);
            case 69:
              d = e.sent;
            case 70:
              if (I = null === (a = d) || void 0 === a ? void 0 : a.find((function(e) {
                return (0, St.e0)(e)[0] === Y
              })), N = "library_id", ne && (N = "catalog_id"), null === (i = d) || void 0 === i || i.forEach((function(e) {
                var t = (0, St.mD)(e, N).find((function(e) {
                  return e === (ne || Y)
                }));
                t && (I = e)
              })), !(0, W.isSpecialEdu)()) {
                e.next = 78;
                break
              }
              ee = (0, St.j8)(Y),
              e.next = 108;
              break;
            case 78:
              if (! (0, W.isTwy)()) {
                e.next = 86;
                break
              }
              return e.next = 81,
              (0, j.v2)(Y, [ne]);
            case 81:
              T = e.sent,
              R = T.first_tag_name,
              ee = R,
              e.next = 108;
              break;
            case 86:
              if (11 !== (null === (o = I) || void 0 === o ? void 0 : o.type)) {
                e.next = 107;
                break
              }
              O = Kt(c),
              e.prev = 88,
              O.s();
            case 90:
              if ((L = O.n()).done) {
                e.next = 97;
                break
              }
              if (M = L.value, (null === M || void 0 === M ? void 0 : M.id) !== oe) {
                e.next = 95;
                break
              }
              return ee = (null === M || void 0 === M ? void 0 : M.title) || "",
              e.abrupt("break", 97);
            case 95:
              e.next = 90;
              break;
            case 97:
              e.next = 102;
              break;
            case 99:
              e.prev = 99,
              e.t3 = e["catch"](88),
              O.e(e.t3);
            case 102:
              return e.prev = 102,
              O.f(),
              e.finish(102);
            case 105:
              e.next = 108;
              break;
            case 107:
              ee = null === (U = I) || void 0 === U ? void 0 : U.setting.data.title;
            case 108:
              if (null === l || void 0 === l || !l.title || !Y) {
                e.next = 111;
                break
              }
              return (0, j.F1)({
                courseId: se,
                libraryId: Y,
                tag: l.title,
                breadcrumb: l.title
              }),
              e.abrupt("return", l.title);
            case 111:
              return ee && (0, j.F1)({
                courseId: se,
                channelId: oe,
                breadcrumb: ee,
                libraryId: Y,
                firstLevel: ne,
                secondLevel: ae,
                thirdLevel: le,
                tag: D
              }),
              e.abrupt("return", ee);
            case 113:
            case "end":
              return e.stop()
            }
          }), e, null, [[10, 42, 45, 48], [18, 29, 32, 35], [48, 63], [88, 99, 102, 105]])
        })));
        return function(t) {
          return e.apply(this, arguments)
        }
      } (),
      _n = (0, c.useCallback)((function() {
        var e = "".concat(window.location.pathname).concat(window.location.search).concat(window.location.hash).replace("courseDetail", "courseIndex"),
        t = fe ? "".concat(e).concat(null !== e && void 0 !== e && e.includes("?") ? "&": "?", "x-edu-theme=").concat(fe) : e;
        qt.push(t)
      }), []),
      fn = (0, c.useCallback)(function() {
        var e = (0, a.Z)(regeneratorRuntime.mark((function e(t) {
          var n, r, a, i, o, c, l, u;
          return regeneratorRuntime.wrap((function(e) {
            while (1) switch (e.prev = e.next) {
            case 0:
              if (!t.action_rule_link) {
                e.next = 24;
                break
              }
              return e.next = 3,
              (0, z.iT)();
            case 3:
              if (r = e.sent, r) {
                e.next = 7;
                break
              }
              return _n(),
              e.abrupt("return", !1);
            case 7:
              return e.next = 9,
              (0, z.bG)();
            case 9:
              if (a = e.sent, i = a.user_id, o = (0, q.J_)({
                userId: i
              }), c = [E.P0.TEACHER, E.P0.ACADEMIC_STAFF, E.P0.ELECTRIC_TEACHER, E.P0.EDU_ADMIN], (0, m.includes)(c, o)) {
                e.next = 16;
                break
              }
              return _n(),
              e.abrupt("return", !1);
            case 16:
              return l = "".concat(t.action_rule_link, "&identity_code=").concat(o),
              -1 === l.indexOf("course_id") && (l = "".concat(l, "&course_id=").concat(t.id)),
              e.next = 20,
              (0, H.b8)(t.id, l, i);
            case 20:
              if (u = e.sent, u.result || !(["NOT_VERIFY_PROFILE", "NOT_ENROLL", "COURSE_NOT_START", "NOT_MATCH_AREA", "OT_TARGET_USER"].indexOf(null === (n = u.action) || void 0 === n ? void 0 : n.business_code) > -1)) {
                e.next = 24;
                break
              }
              return _n(),
              e.abrupt("return", !1);
            case 24:
              return e.abrupt("return", !0);
            case 25:
            case "end":
              return e.stop()
            }
          }), e)
        })));
        return function(t) {
          return e.apply(this, arguments)
        }
      } (), []); (0, c.useEffect)((function() {
        return (0, a.Z)(regeneratorRuntime.mark((function e() {
          var t, n, r, a, i, o, c, l, u, s, d, m, v, _, f, p, g, h, y, b, x, E, P, C, S, I, N, R, Z, O, D, L, F, q, B, K, Q, G, $, te, re, ae, ie, ce;
          return regeneratorRuntime.wrap((function(e) {
            while (1) switch (e.prev = e.next) {
            case 0:
              return window.addEventListener("beforeunload", J.di),
              window.addEventListener("visibilitychange", J.gi),
              Fe(!0),
              r = null,
              a = null,
              i = null,
              e.prev = 6,
              e.next = 9,
              (0, H.XU)(se);
            case 9:
              if (r = e.sent, P = r.course_detail.ext_info.qt_param, console.log("qt_param", P), (P || k["default"].library.trainLibraryIDS.includes(Y)) && nn(!0), 1 !== (null === (o = r) || void 0 === o ? void 0 : o.course_detail.ext_info.offline_status)) {
                e.next = 16;
                break
              }
              return _n(),
              e.abrupt("return");
            case 16:
              if (0 !== (null === (c = r) || void 0 === c || null === (l = c.course_detail) || void 0 === l ? void 0 : l.status)) {
                e.next = 20;
                break
              }
              return Le(!0),
              Fe(!1),
              e.abrupt("return");
            case 20:
              if (dt.length) {
                e.next = 24;
                break
              }
              return e.next = 23,
              (0, A.mj)();
            case 23:
              a = e.sent;
            case 24:
              return null !== (u = r) && void 0 !== u && u.course_detail.action_rule_link && (r.course_detail.action_rule_link = r.course_detail.action_rule_link.replace("${action}", "access")),
              e.next = 27,
              fn(null === (s = r) || void 0 === s ? void 0 : s.course_detail);
            case 27:
              if (e.sent) {
                e.next = 29;
                break
              }
              return e.abrupt("return");
            case 29:
              if (C = null === (d = r) || void 0 === d || null === (m = d.course_detail) || void 0 === m || null === (v = m.ext_info) || void 0 === v ? void 0 : v.smart_link, (0, W.isSpecialEdu)() && C && Y && (C = "".concat(C, "&libraryId=").concat(Y), r.course_detail.ext_info.smart_link = C), Se(r), Re(null === (_ = r) || void 0 === _ ? void 0 : _.course_detail), S = (0, St.fs)(r), Y = S, I = window.location.href, (0, W.isTwy)() && (S === k["default"].library.LibraryId.sportCourse.id && -1 === I.indexOf(w.Xg.SPORT) ? (I = "".concat(w.Xg.SPORT, "/courseDetail?courseId=").concat(se), window.location.replace(I)) : S === k["default"].library.LibraryId.art.id && -1 === I.indexOf(w.Xg.ART) && (I = "".concat(w.Xg.ART, "/courseDetail?courseId=").concat(se), window.location.replace(I))), (0, X.et)({
                smartLink: null === (f = r) || void 0 === f || null === (p = f.course_detail) || void 0 === p || null === (g = p.ext_info) || void 0 === g ? void 0 : g.smart_link
              }), !P) {
                e.next = 46;
                break
              }
              if (N = null === P || void 0 === P ? void 0 : P.training_id, !N) {
                e.next = 46;
                break
              }
              return e.next = 43,
              (0, M.N4)(N);
            case 43:
              i = e.sent,
              null !== (R = i) && void 0 !== R && null !== (Z = R.train_operation) && void 0 !== Z && Z.category_info && (F = JSON.parse(null === (O = i) || void 0 === O || null === (D = O.train_operation) || void 0 === D ? void 0 : D.category_info), null !== F && void 0 !== F && null !== (L = F.data) && void 0 !== L && L.code && Gt(F)),
              jt(i.train);
            case 46:
              if (ee) {
                e.next = 50;
                break
              }
              return e.next = 49,
              vn(S, a, null === (q = i) || void 0 === q ? void 0 : q.train);
            case 49:
              ee = e.sent;
            case 50:
              return mt(a || []),
              it({
                content_id: se,
                content_type: 0,
                content_cover: null === (h = r) || void 0 === h ? void 0 : h.course_detail.front_cover_object_url,
                content_name: null === (y = r) || void 0 === y ? void 0 : y.course_detail.name,
                content_source: (null === (b = r) || void 0 === b ? void 0 : b.course_detail.ext_info.source) || "智慧中小学",
                sub_content: {
                  sub_content_num: null === (x = r) || void 0 === x ? void 0 : x.course_detail.total_activity_count,
                  video_duration: null === (E = r) || void 0 === E ? void 0 : E.course_detail.total_time
                }
              }),
              e.next = 54,
              (0, U.JW)(se);
            case 54:
              B = e.sent,
              xt(B || {}),
              e.next = 63;
              break;
            case 58:
              e.prev = 58,
              e.t0 = e["catch"](6),
              Le(!0),
              Fe(!1),
              console.error(e.t0);
            case 63:
              return K = null === (t = r) || void 0 === t || null === (n = t.course_detail) || void 0 === n ? void 0 : n.activity_set_id,
              ye(K),
              e.next = 67,
              (0, H.z_)(K);
            case 67:
              if (Q = e.sent, Q.activity_total) {
                e.next = 72;
                break
              }
              return Le(!0),
              Fe(!1),
              e.abrupt("return");
            case 72:
              return G = {},
              e.next = 75,
              (0, z.iT)();
            case 75:
              if (!e.sent) {
                e.next = 85;
                break
              }
              return e.next = 78,
              (0, z.bG)();
            case 78:
              return ae = e.sent,
              e.next = 81,
              (0, ue.ST)({
                userId: ae.user_id,
                courseDetail: null === ($ = r) || void 0 === $ ? void 0 : $.course_detail,
                courseActiveSet: Q,
                channelId: oe.length > 0 ? oe: null === (te = r) || void 0 === te ? void 0 : te.course_detail.id,
                resourceId: me,
                tags: ee,
                libraryId: Y
              });
            case 81:
              G = e.sent,
              Ge(Yt(Yt({},
              G), {},
              {
                userId: ae.user_id
              })),
              tt(null === (re = G) || void 0 === re ? void 0 : re.resource_progress),
              i && (ie = function(e) {
                var t, n = (null === e || void 0 === e ? void 0 : e.extraFields) || {},
                r = n.device_id,
                a = n.event;
                "com.nd.sdp.traincourse/study" === a && r !== V.y && (null === (t = Vt.current) || void 0 === t || t.stopVideo())
              },
              T({
                alias: ae.user_id,
                onNewMessage: ie,
                onLogined: function() {
                  var e;
                  return null === (e = Vt.current) || void 0 === e ? void 0 : e.reportVideoBegined()
                }
              }));
            case 85:
              if (ke(Q), !(0, W.isTwy)() && !(0, W.isSpecialEdu)()) {
                e.next = 91;
                break
              }
              return e.next = 89,
              (0, j.v2)(Y, [ne]);
            case 89:
              ce = e.sent,
              gt(Yt({},
              ce));
            case 91:
              Fe(!1);
            case 92:
            case "end":
              return e.stop()
            }
          }), e, null, [[6, 58]])
        })))(),
        function() {
          window.removeEventListener("beforeunload", J.di),
          window.removeEventListener("visibilitychange", J.gi)
        }
      }), []),
      (0, c.useEffect)((function() {
        ze && we && dt.length > 0 && Te && (mn(Te, we, dt), (0, J.di)())
      }), [ze, we, dt, Te]);
      var pn = function() {
        var e = (0, a.Z)(regeneratorRuntime.mark((function e(t) {
          var n;
          return regeneratorRuntime.wrap((function(e) {
            while (1) switch (e.prev = e.next) {
            case 0:
              if (n = t.activity_remark || "", 0 !== n.indexOf("http")) {
                e.next = 4;
                break
              }
              return window.open(fe ? "".concat(n).concat(n.includes("?") ? "&": "?", "x-edu-theme=").concat(fe) : n, "_blank"),
              e.abrupt("return", !1);
            case 4:
              if (null === Ft || void 0 === Ft || !Ft.onExit) {
                e.next = 6;
                break
              }
              return e.abrupt("return", Ft.onExit());
            case 6:
              return e.abrupt("return", !0);
            case 7:
            case "end":
              return e.stop()
            }
          }), e)
        })));
        return function(t) {
          return e.apply(this, arguments)
        }
      } (),
      gn = function() {
        var e = (0, a.Z)(regeneratorRuntime.mark((function e(t, n) {
          var r, a, i, o, c, l, u, s, d;
          return regeneratorRuntime.wrap((function(e) {
            while (1) switch (e.prev = e.next) {
            case 0:
              if (n) {
                e.next = 9;
                break
              }
              return e.next = 3,
              (0, j.v2)(Y, [ne, ae]);
            case 3:
              i = e.sent,
              o = i.first_tag_code,
              (0, J.XN)({
                eventName: "edu_Platform_resourceDetail_page",
                params: {
                  course_type: "t_course",
                  parentchannel_code: "",
                  channel_code: (0, W.getPageChannelCode)(),
                  subchannel_id: oe,
                  column_code: (0, W.isTwy)() ? o: Y,
                  course_id: se,
                  lesson_id: null === t || void 0 === t ? void 0 : t.id,
                  resource_type: (0, W.isTwy)() ? "x_course": "t_course",
                  resource_id: (null === t || void 0 === t ? void 0 : t.resource_id) || "",
                  organ_id: "",
                  platform_category: "EDU"
                }
              }),
              tn && (0, J.XN)({
                eventName: "edu_Platform_training_page",
                params: {
                  training_id: Y,
                  channel_code: (0, W.getPageChannelCode)(),
                  course_id: se,
                  resource_id: (null === t || void 0 === t ? void 0 : t.resource_id) || ""
                }
              }),
              e.next = 14;
              break;
            case 9:
              return e.next = 11,
              (0, j.v2)(Y, [ne, ae]);
            case 11:
              c = e.sent,
              l = c.first_tag_code,
              (0, J._A)({
                eventName: "edu_Platform_content_click",
                params: {
                  content_type: "e_live_activity" === (null === t || void 0 === t ? void 0 : t.type) ? "publiclive_type": "t_course",
                  content_id: se,
                  channel_code: (0, W.getPageChannelCode)(),
                  first_column_code: (0, W.isTwy)() ? l: oe,
                  clickPage_type: (0, W.getPageChannelType)(),
                  content_name: Te.name,
                  page_code: (0, W.getPageCode)(),
                  locatePage_channel: (0, W.getPageChannelCode)()
                }
              });
            case 14:
              return Ut(null),
              qe(t),
              e.next = 18,
              (0, ue.bL)({
                courseId: se,
                activityId: t.activity_id || t.id,
                activityName: (null === (r = t.video_extend) || void 0 === r ? void 0 : r.title) || (null === (a = t.document_extend) || void 0 === a ? void 0 : a.title) || (null === t || void 0 === t ? void 0 : t.name),
                resourceId: null === t || void 0 === t ? void 0 : t.resource_id,
                studyTime: null === t || void 0 === t ? void 0 : t.study_time
              });
            case 18:
              Be && (d = Yt(Yt({},
              Be), {},
              {
                resource_id: null === t || void 0 === t ? void 0 : t.resource_id,
                resource_name: (null === t || void 0 === t || null === (u = t.video_extend) || void 0 === u ? void 0 : u.title) || (null === t || void 0 === t || null === (s = t.document_extend) || void 0 === s ? void 0 : s.title) || (null === t || void 0 === t ? void 0 : t.name)
              }), Je(d), (0, B.hC)({
                eventName: "document" === t.resource_type ? "TCH_webPlatform_detail_Document_switchFileList_click": "TCH_webPlatform_detail_Switchvideo_click",
                params: d
              })),
              n && 2 === (null === t || void 0 === t ? void 0 : t.complete_mode) && Mn(t);
            case 20:
            case "end":
              return e.stop()
            }
          }), e)
        })));
        return function(t, n) {
          return e.apply(this, arguments)
        }
      } (),
      hn = function() { (0, B.hC)({
          eventName: "TCH_webPlatform_detail_download_click",
          params: Be
        })
      },
      yn = C((0, a.Z)(regeneratorRuntime.mark((function e() {
        var t, n, r, a;
        return regeneratorRuntime.wrap((function(e) {
          while (1) switch (e.prev = e.next) {
          case 0:
            return t = "https://bb.basic.smartedu.cn/",
            e.next = 3,
            (0, Dt.J)();
          case 3:
            return n = e.sent,
            e.next = 6,
            (0, Dt.$)();
          case 6:
            return r = e.sent,
            a = "".concat(t, "#teach_course_id=").concat(se, "&node_id=").concat(ze.relation_node_id || ze.activity_id, "&").concat(n).concat(r),
            e.abrupt("return", a);
          case 9:
          case "end":
            return e.stop()
          }
        }), e)
      })))),
      bn = function() {
        var e = (0, a.Z)(regeneratorRuntime.mark((function e() {
          var t, n, r, a, i = arguments;
          return regeneratorRuntime.wrap((function(e) {
            while (1) switch (e.prev = e.next) {
            case 0:
              return t = !(i.length > 0 && void 0 !== i[0]) || i[0],
              e.next = 3,
              (0, j.v2)(Y, [ne, ae]);
            case 3:
              if (n = e.sent, r = n.first_tag_code, (0, J._A)({
                eventName: "edu_webPlatform_touchScreen_click",
                params: {
                  channel_code: (0, W.getPageChannelCode)(),
                  first_column_code: (0, W.isTwy)() ? r: oe,
                  content_type: null === Te || void 0 === Te ? void 0 : Te.biz_type,
                  content_id: null === Te || void 0 === Te ? void 0 : Te.id
                }
              }), t) {
                e.next = 8;
                break
              }
              return e.abrupt("return");
            case 8:
              return e.next = 10,
              (0, z.EV)({
                content: "需要登录才可以使用授课模式，是否登录？"
              });
            case 10:
              if (!e.sent) {
                e.next = 15;
                break
              }
              return e.next = 13,
              yn();
            case 13:
              a = e.sent,
              (0, W.urlJumpInElectron)(a, "_blank", "forceExternal");
            case 15:
            case "end":
              return e.stop()
            }
          }), e)
        })));
        return function() {
          return e.apply(this, arguments)
        }
      } (),
      xn = C((function() {
        var e = (0, m.cloneDeep)(jn);
        return e[e.length - 1].href = window.location.href,
        (0, K.yf)((0, W.getPageChannelCode)(), se, "t_course", e, ze.relation_node_id || ze.activity_id)
      })),
      wn = function() {
        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (e) {
          var t = (0, m.cloneDeep)(jn);
          t[t.length - 1].href = window.location.href,
          (0, K.mo)((0, W.getPageChannelCode)(), se, "t_course", t, ze.relation_node_id)
        }
      },
      kn = function() {
        var e = (0, a.Z)(regeneratorRuntime.mark((function e(t) {
          return regeneratorRuntime.wrap((function(e) {
            while (1) switch (e.prev = e.next) {
            case 0:
              (0, B.hC)({
                eventName: "edu_webPlatform_articleDetail_collect_click",
                params: {
                  content_name: Be.content_name,
                  resource_id: Be.content_id,
                  column_name: Be.column_name,
                  channel_name: Be.channel_name,
                  channel_code: Be.channel_code,
                  resource_type: "课程",
                  status: t ? "收藏": "取消收藏"
                }
              });
            case 1:
            case "end":
              return e.stop()
            }
          }), e)
        })));
        return function(t) {
          return e.apply(this, arguments)
        }
      } (),
      En = function() {
        var e = (0, a.Z)(regeneratorRuntime.mark((function e(t) {
          return regeneratorRuntime.wrap((function(e) {
            while (1) switch (e.prev = e.next) {
            case 0:
              (0, B.hC)({
                eventName: "edu_webPlatform_articleDetail_likes_click",
                params: {
                  content_name: Be.content_name,
                  resource_id: Be.content_id,
                  column_name: Be.column_name,
                  channel_name: Be.channel_name,
                  channel_code: Be.channel_code,
                  resource_type: "课程",
                  status: t ? "点赞": "取消点赞"
                }
              }),
              (0, J._A)({
                eventName: "edu_Platform_contentLikes_click",
                params: {
                  content_type: null === Te || void 0 === Te ? void 0 : Te.biz_type,
                  content_id: Be.content_id,
                  channel_code: (0, W.getPageChannelCode)(),
                  first_column_code: (0, W.isTwy)() ? Be.first_tag_id: Be.Subchannel_id,
                  status: t ? "点赞": "取消点赞"
                }
              });
            case 2:
            case "end":
              return e.stop()
            }
          }), e)
        })));
        return function(t) {
          return e.apply(this, arguments)
        }
      } (),
      Pn = Te || {},
      Cn = Pn.name,
      Sn = Pn.user_suit,
      In = Pn.introduction,
      Nn = Pn.summary,
      Tn = Pn.ext_info,
      Rn = null === Sn || void 0 === Sn || null === (e = Sn.split("、")) || void 0 === e ? void 0 : e.filter((function(e) {
        return e
      })),
      Zn = (null === Tn || void 0 === Tn ? void 0 : Tn.extend_reading) || [],
      On = (null === Tn || void 0 === Tn ? void 0 : Tn.source) || "智慧中小学",
      Dn = In || Nn,
      Ln = Sn || Dn || 0 !== Zn.length,
      jn = (0, c.useMemo)((function() {
        var e, t = (0, St.i7)();
        if (Qt && (t[1] = {
          title: Qt.data.name,
          href: "".concat(S, "/").concat(Qt.data.code)
        }), oe && (0, W.isTwy)()) {
          var n = "".concat(vt, "?channelId=").concat(oe, "&libraryId=").concat(Y, "&breadcrumb=").concat(ee);
          ne && ne.length > 0 && (n = "".concat(n, "&firstLevel=").concat(ne)),
          t = [].concat((0, r.Z)(t), [{
            title: pt.first_tag_name,
            href: n
          }])
        }
        if (oe && !(0, W.isTwy)()) {
          var a = null === dt || void 0 === dt ? void 0 : dt.find((function(e) {
            return e.id === oe
          }));
          a && (e = a.title, t = [].concat((0, r.Z)(t), [{
            title: a.title,
            href: "".concat(vt, "?channelId=").concat(oe)
          }]))
        }
        var i, o, c = t[t.length - 1]; ! Y || !ee || e === ee || D && ee === D || c && (null === c || void 0 === c ? void 0 : c.title) === ee || ((0, W.isSpecialEdu)() ? i = "".concat(window.location.origin).concat((0, St.NH)(), "/").concat((0, St.Mu)(Y), "/catalog") : (i = "".concat((0, St.NH)(), "?channelId=").concat(oe, "&libraryId=").concat(Y, "&breadcrumb=").concat(ee), ne && ne.length > 0 && (i = "".concat(i, "&firstLevel=").concat(ne)), ae && ae.length > 0 && (i = "".concat(i, "&secondLevel=").concat(ae))), t = [].concat((0, r.Z)(t), [{
          title: ee,
          href: i
        }]));
        if ((0, W.isSpecialEdu)()) {
          var l = "".concat(window.location.origin).concat((0, St.NH)(), "/").concat((0, St.Mu)(Y), "/catalog");
          ne && ne.length > 0 && (l = "".concat(l, "?firstLevel=").concat(ne)),
          t = [].concat((0, r.Z)(t), [{
            title: pt.first_tag_name,
            href: l
          }])
        }
        D && !tn && (o = (0, W.isSpecialEdu)() ? "".concat(window.location.origin).concat((0, St.NH)(), "/").concat((0, St.Mu)(Y), "/catalog") : "".concat(vt, "?channelId=").concat(oe, "&libraryId=").concat(Y, "&breadcrumb=").concat(ee), ne && ne.length > 0 && (o = "".concat(o).concat(W.isSpecialEdu ? "?": "&", "firstLevel=").concat(ne)), ae && ae.length > 0 && (o = "".concat(o, "&secondLevel=").concat(ae)), le && le.length > 0 && (o = "".concat(o, "&thirdLevel=").concat(le)), t = [].concat((0, r.Z)(t), [{
          title: D,
          href: o
        }]));
        return Lt && (t = [].concat((0, r.Z)(t), [{
          title: Lt.title,
          href: "/training/".concat(Lt.id)
        }])),
        Cn && (t = [].concat((0, r.Z)(t), [{
          title: Cn || "",
          href: "".concat(window.location.pathname.replace("courseDetail", "courseIndex")).concat(window.location.search.replace(/&resourceId=[a-z0-9-]{36}/, ""))
        },
        {
          title: "课程详情"
        }])),
        t
      }), [Y, ee, Cn, dt, pt, Lt]),
      An = (0, c.useCallback)((0, a.Z)(regeneratorRuntime.mark((function e() {
        var t, n, r;
        return regeneratorRuntime.wrap((function(e) {
          while (1) switch (e.prev = e.next) {
          case 0:
            return cn(null === ze || void 0 === ze ? void 0 : ze.resource_id, 1),
            e.next = 3,
            (0, z.bG)();
          case 3:
            if (t = e.sent, n = x.R.myCourses(null === t || void 0 === t ? void 0 : t.user_id), r = localStorage.getItem(n), r) try {
              r = JSON.parse(r)
            } catch(a) {
              r = ""
            }
            r || (r = {
              items: [],
              total: 0
            }),
            r.items = r.items.filter((function(e) {
              return e.content_id !== Te.id
            })),
            r.items.unshift({
              content_cover: Te.front_cover_object_url,
              content_id: Te.id,
              content_name: Te.name,
              content_source: Te.ext_info.source || "智慧中小学",
              content_type: 0,
              progress: 0,
              sub_content: {
                sub_content_num: Te.total_activity_count,
                video_duration: Te.total_time
              }
            }),
            r.items.length >= 8 && r.items.pop(),
            r.total = r.items.length,
            localStorage.setItem(n, JSON.stringify(r));
          case 13:
          case "end":
            return e.stop()
          }
        }), e)
      }))), [Te, ze]),
      Mn = function() {
        var e = (0, a.Z)(regeneratorRuntime.mark((function e(t) {
          var n, r;
          return regeneratorRuntime.wrap((function(e) {
            while (1) switch (e.prev = e.next) {
            case 0:
              return e.next = 2,
              (0, ue.N_)({
                courseId: Te.id,
                workId: null === (n = t || ze) || void 0 === n ? void 0 : n.work_id,
                status: 2
              });
            case 2:
              r = e.sent,
              Ge(Yt(Yt({},
              Qe), r));
            case 4:
            case "end":
              return e.stop()
            }
          }), e)
        })));
        return function(t) {
          return e.apply(this, arguments)
        }
      } (),
      Fn = function() {
        var e, t, n, r, a;
        return c.createElement("div", {
          className: Tt["video-wrapper"]
        },
        ze && c.createElement(ct, {
          key: ze.resource_id,
          ref: Vt,
          courseId: null === Te || void 0 === Te ? void 0 : Te.id,
          resources: ze,
          trackInfo: Be,
          aspectRatio: .56,
          libraryId: Y,
          dataSessionId: null === Qe || void 0 === Qe ? void 0 : Qe.userId,
          onUploadProgress: An,
          changeStudyStatus: sn,
          trainId: null === Lt || void 0 === Lt ? void 0 : Lt.id,
          progressConfig: Yt(Yt({},
          null !== (e = null === Te || void 0 === Te || null === (t = Te.ext_info) || void 0 === t ? void 0 : t.progress_config) && void 0 !== e ? e: {}), {},
          {
            source_train_end_time: null === Te || void 0 === Te || null === (n = Te.ext_info) || void 0 === n ? void 0 : n.source_train_end_time,
            source_train_id: null === Te || void 0 === Te || null === (r = Te.ext_info) || void 0 === r ? void 0 : r.source_train_id
          }),
          resourceMaxPos: null === Qe || void 0 === Qe ? void 0 : Qe.resource_max_pos,
          state: null === Qe || void 0 === Qe ? void 0 : Qe.resource_progress,
          activityEvent: null === Qe || void 0 === Qe ? void 0 : Qe.activity_event,
          reportToTrain: dn,
          forcedLogin: !0,
          onlyone: !1,
          setPlayRef: Ut,
          videoStudyConfig: null === Te || void 0 === Te || null === (a = Te.ext_info) || void 0 === a ? void 0 : a.video_study_config,
          limitPlaybackRate: Lt ? 2 : 0
        }))
      },
      Un = function() {
        var e, t;
        return c.createElement(Ht, {
          liveId: null === ze || void 0 === ze || null === (e = ze.ext_info) || void 0 === e ? void 0 : e.live_id,
          errorCover: null === ze || void 0 === ze || null === (t = ze.ext_info) || void 0 === t ? void 0 : t.cover_pic_web_url,
          trainId: null === Lt || void 0 === Lt ? void 0 : Lt.id,
          courseId: se,
          resourceId: null === ze || void 0 === ze ? void 0 : ze.resource_id,
          columnCode: Y,
          channelCode: (0, W.getPageChannelCode)(),
          reportToTrain: (0, a.Z)(regeneratorRuntime.mark((function e() {
            var t, n;
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
              case 0:
                return window.postMessage({
                  type:
                  "liveStart"
                },
                "*"),
                sn(2, un()),
                e.next = 4,
                (0, z.bG)();
              case 4:
                return t = e.sent,
                n = t.user_id,
                e.next = 8,
                (0, ue.lz)({
                  videoId: null === ze || void 0 === ze ? void 0 : ze.resource_id,
                  userId: n,
                  position: un()
                });
              case 8:
                dn(2);
              case 9:
              case "end":
                return e.stop()
              }
            }), e)
          })))
        })
      },
      Hn = function() {
        return "live" === (null === ze || void 0 === ze ? void 0 : ze.type) || "e_live_activity" === (null === ze || void 0 === ze ? void 0 : ze.type) ? Un() : Fn()
      },
      zn = c.createElement("div", {
        className: Tt.actions
      },
      Be ? c.createElement(g.Z, {
        assessmentId: rn.assessmentId,
        assessmentType: rn.assessmentType,
        channelName: Be.channel_name,
        contentName: Be.content_name,
        sendTrackStarReview: function() {},
        sendTrackSubmitStar: function(e) {
          var t = e.score; (0, B.hC)({
            eventName: "edu_webPlatform_articleDetail_submitStar_click",
            params: {
              content_name: Be.content_name,
              resource_id: Be.content_id,
              channel_name: Be.channel_name,
              channel_code: Be.channel_code,
              resource_type: "课程",
              star_number: t
            }
          })
        }
      }) : null, Te ? c.createElement(_.Z, {
        tag: ee,
        contentId: null === at || void 0 === at ? void 0 : at.content_id,
        contentType: null === Te || void 0 === Te ? void 0 : Te.biz_type,
        content: (0, St.xr)(Yt(Yt({},
        at), {},
        {
          libraryId: Y,
          introduction: Dn,
          lastTag: "".concat(ee),
          user_suit: null === Te || void 0 === Te ? void 0 : Te.user_suit
        })),
        onStatusChange: kn,
        firstColumnCode: (0, W.isTwy)() ? ne: oe
      }) : null, c.createElement(f.Z, {
        resId: se,
        onStatusChange: En
      }), Te && c.createElement(y.Z, {
        content: {
          id: Te.id,
          name: Te.name,
          type: Te.biz_type,
          channelCode: (0, W.getPageChannelCode)(),
          smartlink: null === (t = Te.ext_info) || void 0 === t ? void 0 : t.smart_link
        },
        className: "suggestion"
      })),
      qn = (0, St.Zq)(),
      Vn = qn === w.Xg.SPORT || qn === w.Xg.ART || !tn;
      return c.createElement(h.Z, {
        loading: Me,
        loadingProps: {
          delay: 0
        },
        empty: De,
        emptyProps: {
          tip: "哎呀，您查看的课程下线啦~"
        }
      },
      c.createElement("div", {
        className: Tt["course-detail"]
      },
      Vn ? null: c.createElement(v.Z, {
        config: jn,
        from: "detail",
        origin: "TCH"
      }), zt ? c.createElement(It["default"], {
        courseId: se,
        courseDetail: Te,
        socialComponents: zn,
        breadcrumb: ee,
        handleChangeCatalog: gn,
        progressData: Qe,
        sendWorkProgress: Mn,
        activitySetId: he,
        curStatData: bt
      }) : c.createElement(c.Fragment, null, Vn ? Te ? c.createElement(Pt, {
        tenantCode: (0, W.isTwy)() ? I.twyCourse: I["t-course"],
        channelCode: (0, W.getPageChannelCode)(),
        showRecommend: !0,
        showSuggestion: !0,
        getBreadCrumbConfig: function() {
          return jn
        },
        onDownLoad: hn,
        onCollectChange: function(e) {
          var t = e.isCollect;
          return kn(t)
        },
        onLikeChange: function(e) {
          var t = e.isLike;
          return En(t)
        },
        onCatalogChange: function(e) {
          var t = e.resource;
          return gn(t, null !== ze)
        },
        onPlayInBB: function() {
          return bn(!1)
        },
        showConfirmToLogin: z.EV,
        changeStudyStatus: sn,
        onUploadProgress: An,
        getJumpBBUrl: yn,
        libraryId: Y,
        getPlayInPPTUrl: xn,
        convertDataItem: function(e) {
          e.url = (0, Jt.K3)(e, N, fe)
        },
        getRecommendLibraryId: function() {
          var e;
          return (null === (e = (0, m.find)(null === Ce || void 0 === Ce ? void 0 : Ce.library_tags, {
            library_id: Y
          })) || void 0 === e ? void 0 : e.container_id) || Y
        },
        getCourseProgressParams: function(e) {
          var t = e.relativeInfo;
          return Yt(Yt(Yt({},
          t), null !== Qe && void 0 !== Qe ? Qe: {}), {},
          {
            topicType: oe.length > 0 ? oe: null === t || void 0 === t ? void 0 : t.course_detail.id
          })
        },
        getFavContentExtra: function(e) {
          var t = e.relativeInfo,
          n = (0, St.xr)(Yt(Yt({},
          t.course_detail), {},
          {
            libraryId: Y,
            lastTag: "".concat(ee)
          })),
          r = n.extra;
          return {
            sub_title: r.sub_title,
            additional_params: r.additional_params
          }
        }
      }) : null: c.createElement(c.Fragment, null, c.createElement("div", {
        className: Tt["detail-top"]
      },
      c.createElement("div", {
        className: Tt.title
      },
      c.createElement("div", {
        className: Tt.name
      },
      Cn || ""), c.createElement("div", {
        style: {
          display: "flex"
        }
      })), c.createElement("div", {
        className: Tt.extends
      },
      c.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center"
        }
      },
      c.createElement("div", {
        className: Tt.source
      },
      c.createElement("i", {
        className: "iconfont icon_hotel_fill"
      }), c.createElement("span", null, " ", On)), c.createElement("div", {
        className: Tt.learned
      },
      c.createElement("i", {
        className: "iconfont web_icon_guanzhu_fill"
      }), c.createElement("span", null, " ", (0, p.HR)((null === bt || void 0 === bt ? void 0 : bt.total_uv) || 0))), c.createElement("div", {
        className: Tt.learned
      },
      c.createElement(lt.f, {
        value: (null === on || void 0 === on ? void 0 : on.score) || 0,
        disabled: !0
      }), "".concat((null === on || void 0 === on ? void 0 : on.score) || "0.0", "分（").concat((null === on || void 0 === on ? void 0 : on.total_user_count) || 0, "个）"))), zn)), c.createElement("div", {
        className: Tt["detail-main"]
      },
      c.createElement("div", {
        className: Tt["detail-main-l"]
      },
      c.createElement("div", {
        className: Tt["detail-main-content"]
      },
      Hn(), c.createElement("div", {
        className: Tt["sub-title"]
      },
      c.createElement("span", null, "感谢所有为资源建设提供资料的单位和个人", c.createElement("br", null), "未经允许不得转载或引用"), !Lt && Te ? c.createElement(b.Z, {
        channelCode: (0, W.getPageChannelCode)(),
        firstColumnCode: (0, W.isTwy)() ? ne: oe,
        contentType: null === Te || void 0 === Te ? void 0 : Te.biz_type,
        contentId: null === at || void 0 === at ? void 0 : at.content_id,
        onJumpBB: bn,
        onJumpResourcePlatform: wn,
        defaultPlayType: "ppt"
      }) : null)), c.createElement("div", {
        className: Tt["detail-main-drawer-box"],
        onClick: function() {
          Nt(!Et)
        }
      },
      Et ? c.createElement("i", {
        className: "iconfont icon_arrowRight_linear"
      }) : c.createElement("i", {
        className: "iconfont icon_arrowLeft_linear"
      }))), c.createElement("div", {
        className: Tt["detail-main-r"],
        style: {
          display: Et ? "block": "none"
        }
      },
      c.createElement("div", {
        className: Tt["catalog-wrapper"]
      },
      c.createElement("div", {
        className: d()(Tt["catalog-title"], Tt["theme-".concat(fe)])
      },
      c.createElement("i", null), c.createElement("span", null, "目录")), c.createElement(Q.Z, {
        activitySetId: he,
        catalogData: we,
        initResourceId: me.length > 0 ? me: null === Qe || void 0 === Qe ? void 0 : Qe.activity_last_learning_resource[null === Qe || void 0 === Qe || null === (n = Qe.last_learning_activity) || void 0 === n ? void 0 : n.activity_id],
        isOpenCatalog: !0,
        newHeight: 0,
        onBeforeChangeCatalog: pn,
        onChangeCatalog: gn,
        progress: et,
        libraryId: Y,
        isDocument: "document" === (null === ze || void 0 === ze ? void 0 : ze.resource_type) && (null === ze || void 0 === ze || null === (s = ze.document_extend) || void 0 === s ? void 0 : s.files)
      })))), Ln && c.createElement("div", {
        className: Tt["detail-bottom"]
      },
      Dn ? c.createElement(L, {
        intro: Dn || ""
      }) : null, null !== Rn && void 0 !== Rn && Rn.length ? c.createElement(st, {
        className: Tt.teachers,
        data: Rn
      }) : null, c.createElement(Ot, {
        extendReadingData: Zn,
        onDownload: hn
      })), c.createElement(Bt, {
        libraryTags: null === Ce || void 0 === Ce ? void 0 : Ce.library_tags,
        courseDetail: Te,
        libraryId: Y
      })))))
    }
    var en = $t
  },
  668727 : function(e, t, n) {
    "use strict";
    n.d(t, {
      Sv: function() {
        return i
      },
      hL: function() {
        return a
      }
    });
    n(425728),
    n(260228),
    n(879288),
    n(564043),
    n(322462),
    n(634338);
    var r = n(657241),
    a = function(e) {
      var t, n;
      if (null !== e && void 0 !== e && e.document_extend || null !== e && void 0 !== e && e.files) {
        var r, a;
        e.document_extend ? (r = e.document_extend.files, a = e.document_extend.hosts) : e.files && (r = e.files, a = e.hosts);
        var i = r.find((function(e) {
          return "pdf" === e.type
        })),
        o = Number(null === (t = e.resource_id) || void 0 === t || null === (n = t.match(/\d+/)) || void 0 === n ? void 0 : n[0]) || 0,
        c = a[o % a.length];
        return "".concat(c).concat(i.file_urls[0])
      }
    },
    i = function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "pdf.pdf",
      n = function(e) {
        var n = document.createElement("a");
        n.style.display = "none",
        n.href = e,
        n.download = t,
        document.body.appendChild(n),
        n.click(),
        document.body.removeChild(n)
      };
      if ((0, r.w1)()) n(e);
      else {
        var a = new XMLHttpRequest;
        a.open("get", e),
        a.responseType = "blob",
        a.send(),
        a.onload = function(e) {
          var t = e.target,
          r = t.status,
          a = t.response;
          if (200 === r || 304 === r) {
            var i = new FileReader;
            i.readAsDataURL(a),
            i.onload = function(e) {
              n(e.target.result)
            }
          }
        }
      }
    }
  }
}]);