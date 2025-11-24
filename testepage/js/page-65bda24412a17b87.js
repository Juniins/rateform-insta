(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    330: (e, s, t) => {
      Promise.resolve().then(t.bind(t, 7267)),
        Promise.resolve().then(t.bind(t, 5021)),
        Promise.resolve().then(t.bind(t, 3761));
    },
    3761: (e, s, t) => {
      "use strict";
      t.d(s, { default: () => n });
      var a = t(7501);
      t(6889);
      var r = t(5386);
      function n() {
        return (0, a.jsx)("div", {
          className:
            "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4",
          children: (0, a.jsxs)(r.Zp, {
            className: "w-full max-w-md mx-auto shadow-lg",
            children: [
              (0, a.jsx)(r.aR, {
                className: "text-center",
                children: (0, a.jsx)(r.ZB, {
                  className: "text-2xl font-bold text-red-700",
                  children: "❌ Acesso Negado",
                }),
              }),
              (0, a.jsx)(r.Wu, {
                className: "text-center",
                children: (0, a.jsx)("p", {
                  className: "text-gray-600 leading-relaxed",
                  children:
                    "Voc\xea n\xe3o tem permiss\xe3o para acessar este conte\xfado.",
                }),
              }),
            ],
          }),
        });
      }
    },
    3891: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => l });
      var a = t(7501),
        r = t(8008),
        n = t(5294);
      function l(e) {
        let { onStartQuiz: s } = e;
        return (0, a.jsx)("div", {
          className:
            "min-h-screen bg-white flex flex-col items-center justify-center p-4",
          children: (0, a.jsxs)("div", {
            className: "max-w-md w-full text-center space-y-4 sm:space-y-6",
            children: [
              (0, a.jsx)("div", {
                className:
                  "flex items-center justify-center gap-2 mb-6 sm:mb-8",
                children: (0, a.jsx)(n.default, {
                  src: "/youtube.webp",
                  alt: "YouTube Logo",
                  width: 120,
                  height: 40,
                  className: "object-contain h-auto",
                }),
              }),
              (0, a.jsx)("h1", {
                className: "text-xl sm:text-2xl font-bold text-gray-900",
                children: "Earn money by rating videos",
              }),
              (0, a.jsx)("p", {
                className:
                  "text-gray-600 text-base sm:text-lg leading-relaxed px-2",
                children:
                  "Congratulations! You've just won a free license to evaluate ads in our app.",
              }),
              (0, a.jsx)("p", {
                className:
                  "text-gray-600 text-base sm:text-lg leading-relaxed px-2",
                children:
                  "Click the button below to start watching videos and claim your bonus!",
              }),
              (0, a.jsx)(r.$, {
                onClick: s,
                className:
                  "bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-7 text-base sm:text-lg font-medium w-full sm:w-auto",
                children: "Start now ▶",
              }),
            ],
          }),
        });
      }
    },
    5021: (e, s, t) => {
      "use strict";
      t.d(s, { default: () => m });
      var a = t(7501),
        r = t(6889),
        n = t(3891),
        l = t(8906),
        i = t(5294),
        o = t(8722);
      function c(e) {
        let { balance: s } = e,
          [t, n] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            n(!0);
            let e = window.location.search;
            e && console.log("UTM Parameters captured on gray final page:", e);
            let s = setTimeout(() => {
              try {
                window.fbq &&
                  (window.fbq("track", "Lead", {
                    content_name: "YouTube Video Quiz Completion - Gray",
                    value: 150,
                    currency: "USD",
                  }),
                  console.log(
                    "Facebook Pixel Lead event triggered (Gray Content)"
                  ));
              } catch (e) {
                console.warn("Facebook Pixel not available:", e);
              }
              try {
                window.utmify &&
                  (window.utmify.conversion("gray-final-page-reached"),
                  console.log("Utmify conversion event triggered (Gray)"));
              } catch (e) {
                console.warn("Utmify not available:", e);
              }
            }, 2e3);
            return (
              (0, o.b)(
                "68ac5c2e6b5c074f453c56cd",
                "ff9f6de5-a5a0-4221-9188-aae68066cbeb",
                "players"
              ).catch((e) =>
                console.error("Erro ao carregar player Vturb (Gray):", e)
              ),
              () => {
                clearTimeout(s);
              }
            );
          }, []),
          (0, a.jsxs)("div", {
            className: "min-h-screen bg-gray-50",
            children: [
              (0, a.jsx)("div", {
                className:
                  "bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10",
                children: (0, a.jsxs)("div", {
                  className:
                    "flex items-center justify-between px-3 sm:px-6 py-3 sm:py-4 max-w-7xl mx-auto",
                  children: [
                    (0, a.jsx)("div", {
                      className: "flex items-center gap-2 sm:gap-3",
                      children: (0, a.jsx)(i.default, {
                        src: "/youtube.webp",
                        alt: "YouTube Logo",
                        width: 120,
                        height: 40,
                        className: "object-contain h-auto",
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-bold text-lg sm:text-xl shadow-lg",
                      children: ["$ ", s.toFixed(2)],
                    }),
                  ],
                }),
              }),
              (0, a.jsxs)("div", {
                className: "max-w-6xl mx-auto px-3 sm:px-6 py-4 sm:py-8",
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden mb-6 sm:mb-8",
                    children: (0, a.jsx)("div", {
                      className:
                        "aspect-video relative bg-gradient-to-br from-gray-900 to-gray-800",
                      children: t
                        ? (0, a.jsx)("div", {
                            dangerouslySetInnerHTML: {
                              __html:
                                '<vturb-smartplayer id="vid-68ac5c2e6b5c074f453c56cd" style="display: block; margin: 0 auto; width: 100%; "></vturb-smartplayer>',
                            },
                          })
                        : (0, a.jsx)("div", {
                            className:
                              "flex items-center justify-center h-full",
                            children: (0, a.jsx)("div", {
                              className: "text-white text-lg",
                              children: "Loading player...",
                            }),
                          }),
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-8 mb-6 sm:mb-8",
                    children: [
                      (0, a.jsxs)("h1", {
                        className:
                          "text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight",
                        children: [
                          (0, a.jsx)("span", {
                            className: "text-amber-600",
                            children: "Premium Microtasks:",
                          }),
                          " Earned money by watching videos? To cash out and complete more microtasks, watch this 4-minute tutorial.",
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "flex flex-wrap items-center gap-3 sm:gap-6 text-gray-600 text-sm sm:text-base",
                        children: [
                          (0, a.jsx)("span", {
                            className: "font-medium",
                            children: "987,654 views",
                          }),
                          (0, a.jsx)("span", {
                            className: "hidden sm:inline",
                            children: "•",
                          }),
                          (0, a.jsx)("span", {
                            className: "font-medium",
                            children: "Dec 23, 2024",
                          }),
                          (0, a.jsx)("span", {
                            className: "hidden sm:inline",
                            children: "•",
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                              (0, a.jsx)("svg", {
                                className:
                                  "w-4 h-4 sm:w-5 sm:h-5 text-green-600",
                                fill: "currentColor",
                                viewBox: "0 0 20 20",
                                children: (0, a.jsx)("path", {
                                  fillRule: "evenodd",
                                  d: "M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",
                                  clipRule: "evenodd",
                                }),
                              }),
                              (0, a.jsx)("span", {
                                className: "font-medium text-green-600",
                                children: "95% liked this",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-8",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "flex items-center justify-between mb-6 sm:mb-8",
                        children: [
                          (0, a.jsx)("h2", {
                            className:
                              "text-xl sm:text-2xl font-bold text-gray-900",
                            children: "Comments",
                          }),
                          (0, a.jsx)("span", {
                            className:
                              "text-base sm:text-lg font-semibold text-gray-600",
                            children: "35.421",
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "space-y-4 sm:space-y-6",
                        children: [
                          {
                            username: "Sarahwilliams",
                            time: "20 min ago",
                            text: "Glad I watched until the end! \uD83D\uDE4F \uD83D\uDE4F",
                            likes: 13,
                            avatar: "/profile-1.png",
                          },
                          {
                            username: "Margaretjones",
                            time: "1 min ago",
                            text: "@Sarahwilliams: Me too, but thankfully I didn't close it beforehand.",
                            likes: 1,
                            avatar: "/profile-2.png",
                          },
                          {
                            username: "Susansmith",
                            time: "2 days ago",
                            text: "Has anyone who has tried it before can tell me if it works?",
                            likes: 3,
                            avatar: "/profile-3.png",
                          },
                          {
                            username: "mariaevans",
                            time: "2 days ago",
                            text: "@Susansmith: Yes, it does work. I tested it, and it worked!",
                            likes: 1,
                            avatar: "/profile-4.png",
                          },
                          {
                            username: "Susansmith",
                            time: "2 days ago",
                            text: "@mariaevans: Thank you, I'll give it a try then.",
                            likes: 3,
                            avatar: "/profile-3.png",
                          },
                          {
                            username: "Beneditagreen",
                            time: "20 min ago",
                            text: "Awesome, I've been doing it for 3 hours, and the balance is already going up. Thanks a lot! \uD83D\uDC96",
                            likes: 0,
                            avatar: "/profile-5.png",
                          },
                          {
                            username: "thomaslewis",
                            time: "48 min ago",
                            text: "AHH. I loved this. I never imagined making money by doing these simple reviews.",
                            likes: 35,
                            avatar: "/profile-2.png",
                          },
                          {
                            username: "lidiabernardino",
                            time: "1 day ago",
                            text: "I'm making $200 a day, VERY EASY to review these ads! Yay!",
                            likes: 0,
                            avatar: "/profile-1.png",
                          },
                          {
                            username: "nayaraazevedo",
                            time: "11 min ago",
                            text: "Watch this video until the end. It's really worth it.",
                            likes: 0,
                            avatar: "/profile-5.png",
                          },
                        ].map((e, s) =>
                          (0, a.jsxs)(
                            "div",
                            {
                              className:
                                "flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-gray-50 transition-colors",
                              children: [
                                (0, a.jsx)("div", {
                                  className: "flex-shrink-0",
                                  children: (0, a.jsx)("img", {
                                    src: e.avatar || "/placeholder.svg",
                                    alt: "".concat(e.username, " avatar"),
                                    className:
                                      "w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-gray-200",
                                  }),
                                }),
                                (0, a.jsxs)("div", {
                                  className: "flex-1 min-w-0",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className:
                                        "flex flex-wrap items-center gap-2 sm:gap-3 mb-2",
                                      children: [
                                        (0, a.jsxs)("span", {
                                          className:
                                            "font-semibold text-gray-900 text-sm sm:text-base",
                                          children: ["@", e.username],
                                        }),
                                        (0, a.jsx)("span", {
                                          className:
                                            "text-gray-500 text-xs sm:text-sm",
                                          children: e.time,
                                        }),
                                      ],
                                    }),
                                    (0, a.jsx)("p", {
                                      className:
                                        "text-gray-800 mb-2 sm:mb-3 leading-relaxed text-sm sm:text-base",
                                      children: e.text,
                                    }),
                                    (0, a.jsxs)("div", {
                                      className:
                                        "flex items-center gap-4 sm:gap-6 text-gray-500",
                                      children: [
                                        (0, a.jsxs)("button", {
                                          className:
                                            "flex items-center gap-1 sm:gap-2 hover:text-blue-600 transition-colors group text-xs sm:text-sm",
                                          children: [
                                            (0, a.jsx)("svg", {
                                              className:
                                                "w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform",
                                              fill: "none",
                                              stroke: "currentColor",
                                              viewBox: "0 0 24 24",
                                              children: (0, a.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L17 11v9m7-10h-2M7 20H5a2 2 0 00-2-2v-6a2 2 0 002-2h2.5",
                                              }),
                                            }),
                                            (0, a.jsx)("span", {
                                              className: "font-medium",
                                              children: e.likes,
                                            }),
                                          ],
                                        }),
                                        (0, a.jsx)("button", {
                                          className:
                                            "flex items-center gap-1 sm:gap-2 hover:text-red-600 transition-colors group text-xs sm:text-sm",
                                          children: (0, a.jsx)("svg", {
                                            className:
                                              "w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: (0, a.jsx)("path", {
                                              strokeLinecap: "round",
                                              strokeLinejoin: "round",
                                              strokeWidth: 2,
                                              d: "M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.737 3h4.018c.163 0 .326.02.485.06L17 4m-7 10v2a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h-2m5-10H5a2 2 0 00-2 2v6a2 2 0 002 2h2.5",
                                            }),
                                          }),
                                        }),
                                        (0, a.jsx)("button", {
                                          className:
                                            "font-medium hover:text-gray-700 transition-colors text-xs sm:text-sm",
                                          children: "Reply",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            s
                          )
                        ),
                      }),
                      (0, a.jsx)("div", {
                        className: "mt-6 sm:mt-8 text-center",
                        children: (0, a.jsx)("button", {
                          className:
                            "px-4 sm:px-6 py-2 sm:py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-colors text-sm sm:text-base",
                          children: "Load more comments",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      function d() {
        let [e, s] = (0, r.useState)("home"),
          [t, i] = (0, r.useState)(0),
          [o, d] = (0, r.useState)(9.27),
          [m, x] = (0, r.useState)("");
        (0, r.useEffect)(() => {
          x(window.location.search),
            console.log("Gray Content Flow initialized");
        }, []);
        let h = () => {
            s("quiz"), i(0), d(9.27);
          },
          u = (e) => {
            d(o + e), t < 3 ? i(t + 1) : s("final");
          },
          g = () => {
            s("final");
          };
        return (0, a.jsx)("div", {
          className: "min-h-screen",
          children: (() => {
            switch (e) {
              case "home":
              default:
                return (0, a.jsx)(n.A, { onStartQuiz: h });
              case "quiz":
                return (0, a.jsx)(l.A, {
                  currentQuizIndex: t,
                  balance: o,
                  onNextQuiz: u,
                  onGoToFinal: g,
                });
              case "final":
                return (0, a.jsx)(c, { balance: o });
            }
          })(),
        });
      }
      function m() {
        return (0, a.jsx)(d, {});
      }
    },
    5386: (e, s, t) => {
      "use strict";
      t.d(s, { Wu: () => o, ZB: () => i, Zp: () => n, aR: () => l });
      var a = t(7501);
      t(6889);
      var r = t(9543);
      function n(e) {
        let { className: s, ...t } = e;
        return (0, a.jsx)("div", {
          "data-slot": "card",
          className: (0, r.cn)(
            "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
            s
          ),
          ...t,
        });
      }
      function l(e) {
        let { className: s, ...t } = e;
        return (0, a.jsx)("div", {
          "data-slot": "card-header",
          className: (0, r.cn)(
            "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
            s
          ),
          ...t,
        });
      }
      function i(e) {
        let { className: s, ...t } = e;
        return (0, a.jsx)("div", {
          "data-slot": "card-title",
          className: (0, r.cn)("leading-none font-semibold", s),
          ...t,
        });
      }
      function o(e) {
        let { className: s, ...t } = e;
        return (0, a.jsx)("div", {
          "data-slot": "card-content",
          className: (0, r.cn)("px-6", s),
          ...t,
        });
      }
    },
    7267: (e, s, t) => {
      "use strict";
      t.d(s, { default: () => d });
      var a = t(7501),
        r = t(6889),
        n = t(3891),
        l = t(8906),
        i = t(5294),
        o = t(8722);
      function c(e) {
        let { balance: s } = e,
          [t, n] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            n(!0);
            let e = window.location.search;
            e && console.log("UTM Parameters captured on final page:", e);
            let s = setTimeout(() => {
              try {
                window.fbq &&
                  (window.fbq("track", "Lead", {
                    content_name: "YouTube Video Quiz Completion",
                    value: 213,
                    currency: "USD",
                  }),
                  console.log("Facebook Pixel Lead event triggered"));
              } catch (e) {
                console.warn("Facebook Pixel not available:", e);
              }
              try {
                window.utmify &&
                  (window.utmify.conversion("final-page-reached"),
                  console.log("Utmify conversion event triggered"));
              } catch (e) {
                console.warn("Utmify not available:", e);
              }
            }, 2e3);
            return (
              (0, o.b)(
                "691df3a97cc713fc76f3bc17",
                "bbc62d5d-3c57-49a6-b38c-a86398451924",
                "ab-test"
              ).catch((e) =>
                console.error("Erro ao carregar player Vturb:", e)
              ),
              () => {
                clearTimeout(s);
              }
            );
          }, []),
          (0, a.jsxs)("div", {
            className: "min-h-screen bg-gray-50",
            children: [
              (0, a.jsx)("div", {
                className:
                  "bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10",
                children: (0, a.jsxs)("div", {
                  className:
                    "flex items-center justify-between px-3 sm:px-6 py-3 sm:py-4 max-w-7xl mx-auto",
                  children: [
                    (0, a.jsx)("div", {
                      className: "flex items-center gap-2 sm:gap-3",
                      children: (0, a.jsx)(i.default, {
                        src: "/youtube.webp",
                        alt: "YouTube Logo",
                        width: 120,
                        height: 40,
                        className: "object-contain h-auto",
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-bold text-lg sm:text-xl shadow-lg",
                      children: ["$ ", s.toFixed(2)],
                    }),
                  ],
                }),
              }),
              (0, a.jsxs)("div", {
                className: "max-w-6xl mx-auto px-3 sm:px-6 py-4 sm:py-8",
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden mb-6 sm:mb-8",
                    children: (0, a.jsx)("div", {
                      className:
                        "aspect-video relative bg-gradient-to-br from-gray-900 to-gray-800",
                      children: t
                        ? (0, a.jsx)("div", {
                            dangerouslySetInnerHTML: {
                              __html:
                                '<vturb-smartplayer id="ab-691df3a97cc713fc76f3bc17" style="display: block; margin: 0 auto; width: 100%; "></vturb-smartplayer>',
                            },
                          })
                        : (0, a.jsx)("div", {
                            className:
                              "flex items-center justify-center h-full",
                            children: (0, a.jsx)("div", {
                              className: "text-white text-lg",
                              children: "Loading player...",
                            }),
                          }),
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-8 mb-6 sm:mb-8",
                    children: [
                      (0, a.jsxs)("h1", {
                        className:
                          "text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight",
                        children: [
                          (0, a.jsx)("span", {
                            className: "text-red-600",
                            children: "Secret Microtasks:",
                          }),
                          " Earned money by watching videos? To cash out and complete more microtasks, watch this 4-minute tutorial.",
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "flex flex-wrap items-center gap-3 sm:gap-6 text-gray-600 text-sm sm:text-base",
                        children: [
                          (0, a.jsx)("span", {
                            className: "font-medium",
                            children: "1,234,567 views",
                          }),
                          (0, a.jsx)("span", {
                            className: "hidden sm:inline",
                            children: "•",
                          }),
                          (0, a.jsx)("span", {
                            className: "font-medium",
                            children: "Dec 23, 2024",
                          }),
                          (0, a.jsx)("span", {
                            className: "hidden sm:inline",
                            children: "•",
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                              (0, a.jsx)("svg", {
                                className:
                                  "w-4 h-4 sm:w-5 sm:h-5 text-green-600",
                                fill: "currentColor",
                                viewBox: "0 0 20 20",
                                children: (0, a.jsx)("path", {
                                  fillRule: "evenodd",
                                  d: "M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",
                                  clipRule: "evenodd",
                                }),
                              }),
                              (0, a.jsx)("span", {
                                className: "font-medium text-green-600",
                                children: "98% liked this",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-8",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "flex items-center justify-between mb-6 sm:mb-8",
                        children: [
                          (0, a.jsx)("h2", {
                            className:
                              "text-xl sm:text-2xl font-bold text-gray-900",
                            children: "Comments",
                          }),
                          (0, a.jsx)("span", {
                            className:
                              "text-base sm:text-lg font-semibold text-gray-600",
                            children: "51.826",
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "space-y-4 sm:space-y-6",
                        children: [
                          {
                            username: "Sarahwilliams",
                            time: "20 min ago",
                            text: "Glad I watched until the end! \uD83D\uDE4F \uD83D\uDE4F",
                            likes: 13,
                            avatar: "/profile-1.png",
                          },
                          {
                            username: "Margaretjones",
                            time: "1 min ago",
                            text: "@Sarahwilliams: Me too, but thankfully I didn't close it beforehand.",
                            likes: 1,
                            avatar: "/profile-2.png",
                          },
                          {
                            username: "Susansmith",
                            time: "2 days ago",
                            text: "Has anyone who has tried it before can tell me if it works?",
                            likes: 3,
                            avatar: "/profile-3.png",
                          },
                          {
                            username: "mariaevans",
                            time: "2 days ago",
                            text: "@Susansmith: Yes, it does work. I tested it, and it worked!",
                            likes: 1,
                            avatar: "/profile-4.png",
                          },
                          {
                            username: "Susansmith",
                            time: "2 days ago",
                            text: "@mariaevans: Thank you, I'll give it a try then.",
                            likes: 3,
                            avatar: "/profile-3.png",
                          },
                          {
                            username: "Beneditagreen",
                            time: "20 min ago",
                            text: "Awesome, I've been doing it for 3 hours, and the balance is already going up. Thanks a lot! \uD83D\uDC96",
                            likes: 0,
                            avatar: "/profile-5.png",
                          },
                          {
                            username: "thomaslewis",
                            time: "48 min ago",
                            text: "AHH. I loved this. I never imagined making money by doing these simple reviews.",
                            likes: 35,
                            avatar: "/profile-2.png",
                          },
                          {
                            username: "lidiabernardino",
                            time: "1 day ago",
                            text: "I'm making $200 a day, VERY EASY to review these ads! Yay!",
                            likes: 0,
                            avatar: "/profile-1.png",
                          },
                          {
                            username: "nayaraazevedo",
                            time: "11 min ago",
                            text: "Watch this video until the end. It's really worth it.",
                            likes: 0,
                            avatar: "/profile-5.png",
                          },
                        ].map((e, s) =>
                          (0, a.jsxs)(
                            "div",
                            {
                              className:
                                "flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-gray-50 transition-colors",
                              children: [
                                (0, a.jsx)("div", {
                                  className: "flex-shrink-0",
                                  children: (0, a.jsx)("img", {
                                    src: e.avatar || "/placeholder.svg",
                                    alt: "".concat(e.username, " avatar"),
                                    className:
                                      "w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-gray-200",
                                  }),
                                }),
                                (0, a.jsxs)("div", {
                                  className: "flex-1 min-w-0",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className:
                                        "flex flex-wrap items-center gap-2 sm:gap-3 mb-2",
                                      children: [
                                        (0, a.jsxs)("span", {
                                          className:
                                            "font-semibold text-gray-900 text-sm sm:text-base",
                                          children: ["@", e.username],
                                        }),
                                        (0, a.jsx)("span", {
                                          className:
                                            "text-gray-500 text-xs sm:text-sm",
                                          children: e.time,
                                        }),
                                      ],
                                    }),
                                    (0, a.jsx)("p", {
                                      className:
                                        "text-gray-800 mb-2 sm:mb-3 leading-relaxed text-sm sm:text-base",
                                      children: e.text,
                                    }),
                                    (0, a.jsxs)("div", {
                                      className:
                                        "flex items-center gap-4 sm:gap-6 text-gray-500",
                                      children: [
                                        (0, a.jsxs)("button", {
                                          className:
                                            "flex items-center gap-1 sm:gap-2 hover:text-blue-600 transition-colors group text-xs sm:text-sm",
                                          children: [
                                            (0, a.jsx)("svg", {
                                              className:
                                                "w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform",
                                              fill: "none",
                                              stroke: "currentColor",
                                              viewBox: "0 0 24 24",
                                              children: (0, a.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L17 11v9m7-10h-2M7 20H5a2 2 0 00-2-2v-6a2 2 0 002-2h2.5",
                                              }),
                                            }),
                                            (0, a.jsx)("span", {
                                              className: "font-medium",
                                              children: e.likes,
                                            }),
                                          ],
                                        }),
                                        (0, a.jsx)("button", {
                                          className:
                                            "flex items-center gap-1 sm:gap-2 hover:text-red-600 transition-colors group text-xs sm:text-sm",
                                          children: (0, a.jsx)("svg", {
                                            className:
                                              "w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: (0, a.jsx)("path", {
                                              strokeLinecap: "round",
                                              strokeLinejoin: "round",
                                              strokeWidth: 2,
                                              d: "M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.737 3h4.018c.163 0 .326.02.485.06L17 4m-7 10v2a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h-2m5-10H5a2 2 0 00-2 2v6a2 2 0 002 2h2.5",
                                            }),
                                          }),
                                        }),
                                        (0, a.jsx)("button", {
                                          className:
                                            "font-medium hover:text-gray-700 transition-colors text-xs sm:text-sm",
                                          children: "Reply",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            s
                          )
                        ),
                      }),
                      (0, a.jsx)("div", {
                        className: "mt-6 sm:mt-8 text-center",
                        children: (0, a.jsx)("button", {
                          className:
                            "px-4 sm:px-6 py-2 sm:py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-colors text-sm sm:text-base",
                          children: "Load more comments",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      function d() {
        let [e, s] = (0, r.useState)("home"),
          [t, i] = (0, r.useState)(0),
          [o, d] = (0, r.useState)(9.27),
          [m, x] = (0, r.useState)("");
        (0, r.useEffect)(() => {
          x(window.location.search);
        }, []);
        let h = () => {
            s("quiz"), i(0), d(9.27);
          },
          u = (e) => {
            d(o + e), t < 3 ? i(t + 1) : s("final");
          },
          g = () => {
            s("final");
          };
        return (0, a.jsx)("div", {
          className: "min-h-screen",
          children: (() => {
            switch (e) {
              case "home":
              default:
                return (0, a.jsx)(n.A, { onStartQuiz: h });
              case "quiz":
                return (0, a.jsx)(l.A, {
                  currentQuizIndex: t,
                  balance: o,
                  onNextQuiz: u,
                  onGoToFinal: g,
                });
              case "final":
                return (0, a.jsx)(c, { balance: o });
            }
          })(),
        });
      }
    },
    8008: (e, s, t) => {
      "use strict";
      t.d(s, { $: () => o });
      var a = t(7501);
      t(6889);
      var r = t(9725),
        n = t(6476),
        l = t(9543);
      let i = (0, n.F)(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        {
          variants: {
            variant: {
              default:
                "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
              destructive:
                "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
              outline:
                "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
              secondary:
                "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
              ghost:
                "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
              link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
              default: "h-9 px-4 py-2 has-[>svg]:px-3",
              sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
              lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
              icon: "size-9",
            },
          },
          defaultVariants: { variant: "default", size: "default" },
        }
      );
      function o(e) {
        let { className: s, variant: t, size: n, asChild: o = !1, ...c } = e,
          d = o ? r.DX : "button";
        return (0, a.jsx)(d, {
          "data-slot": "button",
          className: (0, l.cn)(i({ variant: t, size: n, className: s })),
          ...c,
        });
      }
    },
    8722: (e, s, t) => {
      "use strict";
      function a(e, s) {
        let t =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : "ab-test";
        if (
          (window.vturbScriptsLoaded || (window.vturbScriptsLoaded = new Set()),
          window.vturbLoadingPromises ||
            (window.vturbLoadingPromises = new Map()),
          window.vturbScriptsLoaded.has(e))
        )
          return Promise.resolve();
        if (window.vturbLoadingPromises.has(e))
          return window.vturbLoadingPromises.get(e);
        let a = new Promise((a, r) => {
          let n = document.createElement("script");
          "ab-test" === t
            ? (n.src = "https://scripts.converteai.net/"
                .concat(s, "/ab-test/")
                .concat(e, "/player.js"))
            : (n.src = "https://scripts.converteai.net/"
                .concat(s, "/players/")
                .concat(e, "/v4/player.js")),
            (n.async = !0),
            n.setAttribute("data-vturb-player", e),
            (n.onload = () => {
              window.vturbScriptsLoaded.add(e),
                window.vturbLoadingPromises.delete(e),
                console.log(
                  "Vturb player "
                    .concat(e, " (")
                    .concat(t, ") carregado com sucesso")
                ),
                a();
            }),
            (n.onerror = (s) => {
              window.vturbLoadingPromises.delete(e),
                console.error(
                  "Erro ao carregar Vturb player "
                    .concat(e, " (")
                    .concat(t, "):"),
                  s
                ),
                r(s);
            }),
            document.head.appendChild(n);
        });
        return window.vturbLoadingPromises.set(e, a), a;
      }
      t.d(s, { b: () => a });
    },
    8906: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => k });
      var a = t(7501),
        r = t(6889),
        n = t(8008),
        l = t(5386),
        i = t(6452),
        o = t(6763),
        c = t(9543);
      function d(e) {
        let { ...s } = e;
        return (0, a.jsx)(i.bL, { "data-slot": "dialog", ...s });
      }
      function m(e) {
        let { ...s } = e;
        return (0, a.jsx)(i.ZL, { "data-slot": "dialog-portal", ...s });
      }
      function x(e) {
        let { className: s, ...t } = e;
        return (0, a.jsx)(i.hJ, {
          "data-slot": "dialog-overlay",
          className: (0, c.cn)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
            s
          ),
          ...t,
        });
      }
      function h(e) {
        let { className: s, children: t, showCloseButton: r = !0, ...n } = e;
        return (0, a.jsxs)(m, {
          "data-slot": "dialog-portal",
          children: [
            (0, a.jsx)(x, {}),
            (0, a.jsxs)(i.UC, {
              "data-slot": "dialog-content",
              className: (0, c.cn)(
                "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
                s
              ),
              ...n,
              children: [
                t,
                r &&
                  (0, a.jsxs)(i.bm, {
                    "data-slot": "dialog-close",
                    className:
                      "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                    children: [
                      (0, a.jsx)(o.A, {}),
                      (0, a.jsx)("span", {
                        className: "sr-only",
                        children: "Close",
                      }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }
      function u(e) {
        let { className: s, ...t } = e;
        return (0, a.jsx)(i.hE, {
          "data-slot": "dialog-title",
          className: (0, c.cn)("text-lg leading-none font-semibold", s),
          ...t,
        });
      }
      function g(e) {
        let { className: s, ...t } = e;
        return (0, a.jsx)(i.VY, {
          "data-slot": "dialog-description",
          className: (0, c.cn)("text-muted-foreground text-sm", s),
          ...t,
        });
      }
      var p = t(8193),
        b = t(355),
        v = t(4691),
        f = t(2850),
        j = t(9346),
        w = t(5030),
        y = t(5294);
      let N = [
        {
          id: "1",
          title: "Burgerville Big Sassy Cheeseburger",
          channel: "Burgerville",
          views: "251K views",
          timeAgo: "4 days ago",
          thumbnail: "/colorful-burger-sunglasses.png",
          channelAvatar: "/burgerville-logo.webp",
          videoUrl:
            "https://pub-08a9238104e14ed09c537e3069e470dd.r2.dev/Step_1_YouTube_Official_Site.mp4",
        },
        {
          id: "2",
          title: "Always Ultra Thin – Fear No Gush",
          channel: "Always",
          views: "1.1M views",
          timeAgo: "15 days ago",
          thumbnail: "/blue-ultra-thin-packaging.png",
          channelAvatar: "/always-logo.jpeg",
          videoUrl:
            "https://pub-08a9238104e14ed09c537e3069e470dd.r2.dev/Step_2_YouTube_Official_Site.mp4",
        },
        {
          id: "3",
          title: "Losing is Hard",
          channel: "Xumo",
          views: "45K views",
          timeAgo: "2 days ago",
          thumbnail: "/dark-tech-blue-wave.png",
          channelAvatar: "/xumo-logo.jpeg",
          videoUrl:
            "https://pub-08a9238104e14ed09c537e3069e470dd.r2.dev/Step_3_YouTube_Official_Site.mp4",
        },
        {
          id: "4",
          title: "Secret Microtasks: Earned money by watching videos?",
          channel: "MicroEarnings",
          views: "892K views",
          timeAgo: "1 day ago",
          thumbnail: "/person-dollar-overlay.png",
          channelAvatar: "/microearnings-avatar.png",
        },
      ];
      function k(e) {
        let {
            currentQuizIndex: s,
            balance: t,
            onNextQuiz: i,
            onGoToFinal: o,
          } = e,
          [c, m] = (0, r.useState)(!1),
          [x, k] = (0, r.useState)(!1),
          [L, S] = (0, r.useState)(t),
          [A, C] = (0, r.useState)(t),
          [_, z] = (0, r.useState)(0),
          [T, I] = (0, r.useState)(!0),
          E = (0, r.useRef)(null),
          P = N[s];
        (0, r.useEffect)(() => {
          let e = s + 1;
          if (e < N.length && N[e].videoUrl) {
            let s = document.createElement("link");
            return (
              (s.rel = "prefetch"),
              (s.href = N[e].videoUrl),
              (s.as = "video"),
              document.head.appendChild(s),
              () => {
                document.head.removeChild(s);
              }
            );
          }
        }, [s]),
          (0, r.useEffect)(() => {
            S(t), C(t);
          }, [t]);
        let M = () => {
            E.current &&
              (T ? (E.current.pause(), I(!1)) : (E.current.play(), I(!0)));
          },
          Y = (e) => {
            let a;
            (a =
              0 === s
                ? 67.73
                : 1 === s
                ? 68
                : 2 === s
                ? 68
                : 15 * Math.random() + 5),
              C(t),
              z(a),
              m(!0);
          };
        return ((0, r.useEffect)(() => {
          if (c && _ > 0) {
            S(A);
            let e = A + _,
              s = _ / 60,
              t = 0,
              a = setInterval(() => {
                t++,
                  S((r) => {
                    let n = A + s * t;
                    return t >= 60 ? (clearInterval(a), e) : n;
                  });
              }, 2e3 / 60);
            return () => clearInterval(a);
          }
        }, [c, _, A]),
        P)
          ? (0, a.jsxs)("div", {
              className: "min-h-screen bg-gray-50",
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "bg-white border-b px-3 sm:px-4 py-3 flex items-center justify-between",
                  children: [
                    (0, a.jsx)("div", {
                      className: "flex items-center gap-2",
                      children: (0, a.jsx)(y.default, {
                        src: "/youtube.webp",
                        alt: "YouTube Logo",
                        width: 80,
                        height: 24,
                        className: "object-contain h-auto",
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "bg-blue-100 text-blue-700 px-2 sm:px-3 py-1 rounded-lg font-semibold text-sm sm:text-base",
                      children: ["$ ", t.toFixed(2)],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "max-w-2xl mx-auto p-3 sm:p-4",
                  children: [
                    (0, a.jsxs)(l.Zp, {
                      className: "overflow-hidden",
                      children: [
                        (0, a.jsx)("div", {
                          className: "relative rounded-lg overflow-hidden",
                          children: P.videoUrl
                            ? (0, a.jsxs)("div", {
                                style: {
                                  position: "relative",
                                  width: "100%",
                                  paddingBottom: "56.25%",
                                },
                                children: [
                                  (0, a.jsx)("video", {
                                    ref: E,
                                    src: P.videoUrl,
                                    autoPlay: !0,
                                    playsInline: !0,
                                    loop: !0,
                                    preload: "metadata",
                                    poster: P.thumbnail,
                                    onPlay: () => I(!0),
                                    onPause: () => I(!1),
                                    onLoadStart: () =>
                                      console.log("Video loading started"),
                                    onCanPlay: () =>
                                      console.log("Video can start playing"),
                                    style: {
                                      position: "absolute",
                                      top: 0,
                                      left: 0,
                                      width: "100%",
                                      height: "100%",
                                      objectFit: "cover",
                                      borderRadius: "8px",
                                    },
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      "absolute inset-0 bg-transparent cursor-pointer",
                                    onClick: M,
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "absolute bottom-4 right-4",
                                    children: (0, a.jsx)("button", {
                                      onClick: M,
                                      className:
                                        "bg-black bg-opacity-60 hover:bg-opacity-80 text-white rounded-full p-3 transition-all duration-200",
                                      children: T
                                        ? (0, a.jsx)(p.A, {
                                            className: "w-6 h-6",
                                          })
                                        : (0, a.jsx)(b.A, {
                                            className: "w-6 h-6",
                                          }),
                                    }),
                                  }),
                                ],
                              })
                            : (0, a.jsxs)(a.Fragment, {
                                children: [
                                  (0, a.jsx)("img", {
                                    src: P.thumbnail || "/placeholder.svg",
                                    alt: P.title,
                                    className:
                                      "w-full h-48 object-cover rounded-lg",
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      "absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center rounded-lg",
                                    children: (0, a.jsx)(b.A, {
                                      className:
                                        "w-12 h-12 text-white opacity-80",
                                    }),
                                  }),
                                ],
                              }),
                        }),
                        (0, a.jsxs)("div", {
                          className: "p-3 sm:p-4",
                          children: [
                            (0, a.jsx)("h2", {
                              className:
                                "text-lg sm:text-xl font-semibold text-gray-900 mb-2",
                              children: P.title,
                            }),
                            (0, a.jsxs)("p", {
                              className:
                                "text-gray-600 mb-4 text-sm sm:text-base",
                              children: [P.views, " • ", P.timeAgo],
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                "flex items-center justify-between mb-4 sm:mb-6",
                              children: [
                                (0, a.jsxs)("div", {
                                  className: "flex items-center gap-2 sm:gap-3",
                                  children: [
                                    (0, a.jsx)("img", {
                                      src:
                                        P.channelAvatar || "/placeholder.svg",
                                      alt: P.channel,
                                      className:
                                        "w-8 h-8 sm:w-10 sm:h-10 rounded-full",
                                    }),
                                    (0, a.jsx)("span", {
                                      className:
                                        "font-medium text-gray-900 text-sm sm:text-base",
                                      children: P.channel,
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className:
                                    "bg-black text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm flex items-center gap-1",
                                  children: [
                                    (0, a.jsx)("span", {
                                      className: "hidden sm:inline",
                                      children: "Partner verified",
                                    }),
                                    (0, a.jsx)("span", {
                                      className: "sm:hidden",
                                      children: "Verified",
                                    }),
                                    (0, a.jsx)("div", {
                                      className:
                                        "w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full flex items-center justify-center",
                                      children: (0, a.jsx)("span", {
                                        className: "text-white text-xs",
                                        children: "✓",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                "bg-blue-50 rounded-lg p-3 sm:p-4 text-center",
                              children: [
                                (0, a.jsx)("p", {
                                  className:
                                    "text-gray-600 mb-3 text-sm sm:text-base",
                                  children: "Answer the question:",
                                }),
                                (0, a.jsx)("p", {
                                  className:
                                    "text-lg sm:text-2xl font-semibold text-gray-900 mb-4",
                                  children: "Is this video relevant to you?",
                                }),
                                (0, a.jsxs)("div", {
                                  className: "flex flex-row gap-3 w-full",
                                  children: [
                                    (0, a.jsxs)(n.$, {
                                      onClick: () => Y(!1),
                                      variant: "outline",
                                      className:
                                        "flex-1 flex items-center justify-center gap-2 px-4 py-7 text-base font-medium",
                                      children: [
                                        (0, a.jsx)(v.A, {
                                          className: "w-4 h-4",
                                        }),
                                        (0, a.jsx)("span", {
                                          className: "hidden sm:inline",
                                          children: "Not relevant",
                                        }),
                                        (0, a.jsx)("span", {
                                          className: "sm:hidden",
                                          children: "Not relevant",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)(n.$, {
                                      onClick: () => Y(!0),
                                      className:
                                        "flex-1 bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2 px-4 py-7 text-base font-medium",
                                      children: [
                                        (0, a.jsx)(f.A, {
                                          className: "w-4 h-4",
                                        }),
                                        (0, a.jsx)("span", {
                                          className: "hidden sm:inline",
                                          children: "Relevant",
                                        }),
                                        (0, a.jsx)("span", {
                                          className: "sm:hidden",
                                          children: "Relevant",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "mt-4 sm:mt-6 space-y-3 sm:space-y-4",
                      children: N.map((e, t) =>
                        t <= s
                          ? null
                          : (0, a.jsxs)(
                              l.Zp,
                              {
                                className: "overflow-hidden",
                                children: [
                                  (0, a.jsxs)("div", {
                                    className: "relative",
                                    children: [
                                      (0, a.jsx)("img", {
                                        src: e.thumbnail || "/placeholder.svg",
                                        alt: e.title,
                                        className:
                                          "w-full h-32 object-cover filter blur-sm",
                                      }),
                                      (0, a.jsx)("div", {
                                        className:
                                          "absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center",
                                        children: (0, a.jsxs)("div", {
                                          className: "text-center text-white",
                                          children: [
                                            (0, a.jsx)(j.A, {
                                              className: "w-8 h-8 mx-auto mb-2",
                                            }),
                                            (0, a.jsx)("p", {
                                              className:
                                                "font-semibold text-lg",
                                              children: "Blocked content",
                                            }),
                                            (0, a.jsx)("p", {
                                              className: "text-sm opacity-90",
                                              children:
                                                "Rate the videos selected first.",
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "p-2 sm:p-3",
                                    children: [
                                      (0, a.jsx)("h3", {
                                        className:
                                          "font-medium text-gray-900 truncate text-sm sm:text-base",
                                        children: e.title,
                                      }),
                                      (0, a.jsxs)("div", {
                                        className:
                                          "flex items-center gap-2 mt-1",
                                        children: [
                                          (0, a.jsx)("img", {
                                            src:
                                              e.channelAvatar ||
                                              "/placeholder.svg",
                                            alt: e.channel,
                                            className:
                                              "w-5 h-5 sm:w-6 sm:h-6 rounded-full",
                                          }),
                                          (0, a.jsx)("span", {
                                            className:
                                              "text-xs sm:text-sm text-gray-600",
                                            children: e.channel,
                                          }),
                                          (0, a.jsxs)("span", {
                                            className:
                                              "text-xs sm:text-sm text-gray-500",
                                            children: ["• ", e.views],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              e.id
                            )
                      ),
                    }),
                  ],
                }),
                (0, a.jsx)(d, {
                  open: c,
                  onOpenChange: m,
                  children: (0, a.jsx)(h, {
                    className:
                      "max-w-sm sm:max-w-md mx-auto my-8 p-6 sm:p-8 w-[90vw] sm:w-auto",
                    children: (0, a.jsxs)("div", {
                      className: "text-center space-y-4 sm:space-y-6",
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "flex items-center justify-center gap-2 mb-4 sm:mb-6",
                          children: (0, a.jsx)(y.default, {
                            src: "/youtube.webp",
                            alt: "YouTube Logo",
                            width: 100,
                            height: 32,
                            className: "object-contain h-auto",
                          }),
                        }),
                        (0, a.jsx)(u, {
                          className: "text-xl sm:text-2xl font-semibold",
                          children: "Thank you for your review.",
                        }),
                        (0, a.jsx)(g, {
                          className: "sr-only",
                          children:
                            "Your review has been submitted and your balance has been updated.",
                        }),
                        (0, a.jsxs)("div", {
                          className: "border-t border-b py-4 sm:py-6",
                          children: [
                            (0, a.jsx)("p", {
                              className:
                                "text-gray-600 mb-3 text-base sm:text-lg",
                              children: "Available balance",
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                "text-4xl sm:text-5xl font-bold text-blue-600",
                              children: [
                                "$",
                                L.toFixed(2),
                                _ > 0 &&
                                  (0, a.jsxs)("span", {
                                    className: "text-xl text-green-600 ml-2",
                                    children: ["+$", _.toFixed(2)],
                                  }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "flex flex-col gap-3 sm:gap-4",
                          children: [
                            (0, a.jsxs)(n.$, {
                              variant: s >= 2 ? "default" : "outline",
                              className:
                                "w-full text-base sm:text-lg py-7 sm:py-7 ".concat(
                                  s >= 2
                                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                                ),
                              onClick: () => {
                                s >= 2 && (i(_), m(!1), k(!0));
                              },
                              disabled: s < 2,
                              children: [
                                s >= 2
                                  ? null
                                  : (0, a.jsx)(j.A, {
                                      className: "w-4 h-4 mr-2",
                                    }),
                                "Withdraw $",
                              ],
                            }),
                            (0, a.jsxs)(n.$, {
                              className:
                                "w-full text-base sm:text-lg py-7 sm:py-7 ".concat(
                                  s >= 2
                                    ? "bg-gray-100 text-gray-400 cursor-not-allowed hover:bg-gray-100"
                                    : "bg-blue-600 hover:bg-blue-700"
                                ),
                              onClick:
                                s >= 2
                                  ? void 0
                                  : () => {
                                      m(!1), z(0), i(_);
                                    },
                              disabled: s >= 2,
                              children: [
                                s >= 2
                                  ? (0, a.jsx)(j.A, {
                                      className: "w-4 h-4 mr-2",
                                    })
                                  : (0, a.jsx)(w.A, {
                                      className: "w-4 h-4 mr-2",
                                    }),
                                "Watch more...",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                (0, a.jsx)(d, {
                  open: x,
                  onOpenChange: k,
                  children: (0, a.jsx)(h, {
                    className:
                      "max-w-sm sm:max-w-md mx-auto my-8 p-6 sm:p-8 w-[90vw] sm:w-auto",
                    children: (0, a.jsxs)("div", {
                      className: "text-center space-y-4 sm:space-y-6",
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "flex items-center justify-center gap-2 mb-4 sm:mb-6",
                          children: (0, a.jsx)(y.default, {
                            src: "/youtube.webp",
                            alt: "YouTube Logo",
                            width: 100,
                            height: 32,
                            className: "object-contain h-auto",
                          }),
                        }),
                        (0, a.jsx)(u, {
                          className: "text-xl sm:text-2xl font-semibold",
                          children: "Congratulations!",
                        }),
                        (0, a.jsx)(g, {
                          className: "sr-only",
                          children:
                            "You have completed the reviews. Watch the tutorial to redeem your reward.",
                        }),
                        (0, a.jsx)("p", {
                          className: "text-gray-600 text-base sm:text-lg px-2",
                          children:
                            "Watch this quick 4-minute tutorial to redeem your reward!",
                        }),
                        (0, a.jsx)("div", {
                          className:
                            "text-4xl sm:text-5xl font-bold text-blue-600",
                          children: "$ 213.00",
                        }),
                        (0, a.jsxs)(n.$, {
                          className:
                            "w-full bg-blue-600 hover:bg-blue-700 text-white py-7 text-base sm:text-lg",
                          onClick: () => {
                            k(!1), o();
                          },
                          children: [
                            (0, a.jsx)(b.A, {
                              className: "w-4 h-4 mr-2 fill-current",
                            }),
                            "Continue | 4 min",
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            })
          : (0, a.jsx)("div", { children: "Video not found" });
      }
    },
    9543: (e, s, t) => {
      "use strict";
      t.d(s, { cn: () => n });
      var a = t(4618),
        r = t(293);
      function n() {
        for (var e = arguments.length, s = Array(e), t = 0; t < e; t++)
          s[t] = arguments[t];
        return (0, r.QP)((0, a.$)(s));
      }
    },
  },
  (e) => {
    var s = (s) => e((e.s = s));
    e.O(0, [95, 932, 742, 358], () => s(330)), (_N_E = e.O());
  },
]);
