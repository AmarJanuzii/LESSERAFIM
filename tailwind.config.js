<<<<<<< HEAD
window.addEventListener('load', function() {
  var audio = document.getElementById("myAudio");
  audio.play();
=======
$(function () {
  "use strict";
  if ("1" === loadingType)
    M(d),
      setTimeout(function () {
        M(d);
      }, 1e4);
  else {
    for (
      var s,
        e = $("img"),
        i = document.getElementsByClassName("js-loadingLogo")[0],
        t = 0,
        o = 0,
        a = 0;
      a < e.length;
      a++
    ) {
      var n = new Image();
      (n.onload = function () {
        t += 1;
      }),
        (n.onerror = function () {
          t += 1;
        }),
        (n.src = e[a].src);
    }
    var l = setInterval(function () {
      o <= t &&
        ((s = Math.floor((o / e.length) * 100)),
        (i.style.width = Math.floor(s) + "%"),
        (o += 1) == e.length &&
          ((i.style.width = "100%"),
          $("body,html").stop().animate({ scrollTop: 0 }, 0),
          setTimeout(function () {
            $(".js-loadingBg").addClass("is-hide"),
              $(".js-loadingWrap").addClass("is-hide");
          }, 100),
          clearInterval(l),
          setTimeout(function () {
            d();
          }, 600),
          setTimeout(function () {
            $(".js-loadingBg").addClass("is-end"),
              $(".js-loadingWrap").addClass("is-end");
          }, 1400)));
    }, 10);
  }
  function d() {
    var i;
    $(".js-wrap").removeClass("is-wait"),
      m(),
      (i = new IntersectionObserver(w, {
        root: null,
        rootMargin: "-50px 50px",
        threshold: 0,
      })),
      $(".js-delayView").each(function (s, e) {
        i.observe(e);
      }),
      0 < $("#movie_player1").length &&
        (jwplayer("movie_player1").play(!0),
        $(".js-mvMovie").addClass("is-show"));
  }
  function r() {
    var s = 0.01 * window.innerHeight;
    document.documentElement.style.setProperty("--vh", s + "px");
  }
  var c = window.innerWidth;
  window.addEventListener("resize", function () {
    c !== window.innerWidth &&
      (r(),
      (function () {
        if (S) return;
        $(".js-profSns.slick-slider").each(function () {
          var s = $(this);
          s.slick("unslick").addClass("is-hide"),
            (S = !0),
            setTimeout(function () {
              s.removeClass("is-hide"), I(s), (S = !1);
            }, 200);
        });
      })(),
      (c = window.innerWidth));
  }),
    r();
  var h,
    u = !1;
  function f(s, e) {
    (u = !1),
      s.removeClass("is-show"),
      e.addClass("is-hide"),
      $("body").removeClass("is-fixed"),
      e.removeClass("is-active"),
      (h = setTimeout(function () {
        $(".js-wrap").removeClass("is-opened"),
          e.removeClass("is-show is-hide");
      }, 200));
  }
  $(".js-acdBtn").on("click", function () {
    var s = $(".js-acdConts");
    return (
      u
        ? f($(this), s)
        : (clearTimeout(h),
          s.addClass("is-show"),
          setTimeout(function () {
            s.addClass("is-active");
          }, 250),
          $(this).addClass("is-show"),
          $("body").addClass("is-fixed"),
          $(".js-wrap").addClass("is-opened"),
          (u = !0)),
      !1
    );
  }),
    $(".js-switchAcdBtn").on("click", function () {
      var s = $(this).data("index"),
        e = $(this).parents(".js-switchAcd");
      $(this).hasClass("is-current")
        ? ($(this).removeClass("is-current"),
          e.find(".js-switchAcdItem").slideUp(500))
        : ($(this).siblings(".js-switchAcdBtn").removeClass("is-current"),
          $(this).addClass("is-current"),
          e.find(".js-switchAcdItem").eq(s).siblings().slideUp(200),
          e.find(".js-switchAcdItem").eq(s).slideDown(500));
    });
  var p,
    v = !1;
  document.addEventListener(
    "scroll",
    function () {
      v ||
        (requestAnimationFrame(function () {
          10 < window.scrollY
            ? $(".js-wrap").addClass("is-scroll")
            : $(".js-wrap").removeClass("is-scroll"),
            (v = !1);
        }),
        (v = !0)),
        $(".js-wrap").addClass("is-scrolling"),
        clearTimeout(p),
        (p = setTimeout(function () {
          $(".js-wrap").removeClass("is-scrolling");
        }, 200));
    },
    { passive: !0 }
  );
  var g = new IntersectionObserver(
    function (s) {
      s.forEach(function (s) {
        s.isIntersecting
          ? s.target.classList.remove("is-fixed")
          : s.target.classList.add("is-fixed");
      });
    },
    { root: null, rootMargin: "0px", threshold: 0 }
  );
  $(".js-toTopWrap").each(function (s, e) {
    g.observe(e);
  }),
    $(".js-toTop").on("click", function () {
      $("body,html").stop().animate({ scrollTop: 0 }, 300);
    });
  var m = function () {
    var i = $(window).height() - 20;
    $(".js-view").each(function (s) {
      if (i > $(this).offset().top) {
        var e = this;
        setTimeout(function () {
          $(e).addClass("is-show");
        }, 200 * s);
      } else $(this).addClass("js-delayView");
    });
  };
  function w(s, e) {
    s.forEach(function (s) {
      s.isIntersecting &&
        (s.target.classList.add("is-show"), e.unobserve(s.target));
    });
  }
  $('a[href^="#"]').click(function () {
    var s,
      e,
      i,
      t = $(this).attr("href");
    return (
      (s = $("#" == t || "" == t ? "html" : t)),
      (e = s.hasClass("js-sclSpace") ? 20 : 0),
      (i = s.length ? s.offset().top - e : 0),
      $("body,html").stop().animate({ scrollTop: i }, 500),
      !1
    );
  }),
    $(".js-modalBtn").on("click", function (s) {
      s.stopPropagation(), s.preventDefault(), $(".js-modalBg").fadeIn();
      var e = $(this).data("modal");
      $("#" + e)
        .clone(!0)
        .appendTo(".js-modalCont"),
        $(".js-modal").fadeIn(),
        $("body").addClass("is-fixed");
    }),
    $(".js-modalBg, .js-modalClose").on("click", function () {
      $(".js-modalBg, .js-modal").fadeOut(),
        $(".js-modalCont").empty(),
        $("body").removeClass("is-fixed"),
        (O = !1);
    });
  var j = !1,
    C = $(".js-shopModal"),
    y = $(".js-shopAcd"),
    k = $(".js-shopModalBg");
  $(".js-shopMenu").on("click", function () {
    if (j)
      768 < window.innerWidth
        ? (C.removeClass("is-show"),
          setTimeout(function () {
            C.addClass("is-hide"), k.fadeOut();
          }, 100))
        : (y.slideUp(), $(this).removeClass("is-open")),
        (j = !1);
    else {
      if (768 < window.innerWidth) {
        C.removeClass("is-hide"),
          k.fadeIn(),
          setTimeout(function () {
            C.addClass("is-show");
          }, 100);
        var s = $(this).offset().top;
        C.css({ top: s + "px" });
      } else y.slideDown(), $(this).addClass("is-open");
      j = !0;
    }
  }),
    $(".js-shopModalBg").on("click", function () {
      C.removeClass("is-show"),
        setTimeout(function () {
          C.addClass("is-hide"), k.fadeOut();
        }, 100),
        (j = !1);
    });
  var T = !1,
    b = $(".js-wovnAnnounce"),
    B = L();
  function x(s, e) {
    s.removeClass("is-active"), e.removeClass("is-show"), (T = !1);
  }
  function L() {
    for (var s = document.cookie.split("; "), e = 0; e < s.length; e++) {
      var i = s[e].split("=");
      if ("wovn_selected_lang" === i[0]) return i[1];
    }
    return null;
  }
  window.addEventListener("wovnApiReady", function (s) {
    var e = L(),
      i = (
        (window.navigator.languages && window.navigator.languages[0]) ||
        window.navigator.language ||
        window.navigator.userLanguage ||
        window.navigator.browserLanguage
      ).substring(0, 2);
    if (null != B) var t = B;
    else t = "ja" === e && i !== e ? "en" : e;
    WOVN.io.changeLang(t);
  }),
    $(".js-wovnBtn").on("click", function () {
      var s = $(".js-switchWovn"),
        e = $(".js-wovnListBg");
      T ? x(s, e) : (s.addClass("is-active"), e.addClass("is-show"), (T = !0));
    }),
    $(".js-wovnCloseBtn").on("click", function () {
      x($(".js-switchWovn"), $(".js-wovnListBg"));
    }),
    $(".js-wovnListBg").on("click", function () {
      x($(".js-switchWovn"), $(this));
    }),
    window.addEventListener("wovnLangChanged", function () {
      x($(".js-switchWovn"), $(".js-wovnListBg")),
        f($(".js-acdBtn"), $(".js-acdConts")),
        $(".js-loadingBg").removeClass("is-hide is-end"),
        setTimeout(function () {
          $(".js-loadingBg").addClass("is-hide");
        }, 300),
        setTimeout(function () {
          $(".js-loadingBg").addClass("is-end");
        }, 3e3),
        (u = !1);
      var s = WOVN.io.getCurrentLang();
      !(function (s) {
        var e = "JA",
          i = "";
        switch (s) {
          case "en":
            (e = "EN"), (i = s);
            break;
          case "ko":
            (e = "KO"), (i = s);
            break;
          case "zh-CHS":
            (e = "SCN"), (i = "scn");
            break;
          case "zh-CHT":
            (e = "TCN"), (i = "tcn");
            break;
          case "ja":
            (e = "JA"), (i = "ja");
        }
        $(".js-wovnCurrentLang").text(e),
          "" !== i &&
            $(".js-wovnUrl").each(function () {
              $(this).attr("href", $(this).data(i));
            });
        !(function (e) {
          $(".js-langView").each(function () {
            var s = $(this).data("lang").split(",");
            $(this).hasClass("slick-slider") && $(this).slick("unslick"),
              s.indexOf(e) < 0
                ? $(this).removeClass("is-show")
                : ($(this).addClass("is-show"),
                  $(this).hasClass("js-profSns") && I($(this)));
          });
        })(s);
      })(s.code),
        s.code !== B &&
          ("ja" !== s.code ? b.addClass("is-show") : b.removeClass("is-show"),
          (B = s.code));
    }),
    $(".js-wovnAnnounceClose").on("click", function () {
      b.removeClass("is-show");
    });
  0 < $("#movie_player1").length &&
    ((jwplayer.key = "dQBXi0oneaQyZOCfkkV6Oq5gkhFVyFHFpDDPrwIB2jg="),
    $.ajax({
      url: jsSiterootpass + "common/movie.php",
      type: "GET",
      data: { data: "/content/xg/pv_mv_04.mp4" },
      dataType: "json",
    })
      .done(function (s) {
        jwplayer("movie_player1").setup({
          file: s,
          title: "",
          width: "100%",
          aspectratio: "16:9",
          autostart: "false",
          controls: "false",
          repeat: "true",
          stretching: "fill",
          mute: "true",
        });
      })
      .fail(function (s, e, i) {
        console.log(e);
      })),
    $(".js-mvBtn").on("click", function (s) {
      $(this).hasClass("is-stop")
        ? (jwplayer("movie_player1").play(!0), $(this).removeClass("is-stop"))
        : (jwplayer("movie_player1").pause(!0), $(this).addClass("is-stop"));
    }),
    $(".js-topNews")
      .slick({
        autoplay: !0,
        speed: 500,
        autoplaySpeed: 5e3,
        dots: !0,
        arrows: !1,
      })
      .on("beforeChange", function (s, e, i) {
        var t = $(this).find('[data-slick-index="' + i + '"]'),
          o = $(this);
        t.addClass("is-change"),
          setTimeout(function () {
            t.removeClass("is-change");
          }, 500),
          setTimeout(function () {
            o.addClass("is-changed");
          }, 200);
      })
      .on("afterChange", function () {
        $(this).removeClass("is-changed");
      }),
    $(".js-tourOutline").click(function () {
      var s = $(this).next(".js-tourDetail");
      $(".js-tourOutline").not($(this)).removeClass("is-open"),
        $(".js-tourDetail")
          .not(s)
          .each(function () {
            $(this).hasClass("is-open") &&
              ($(this).removeClass("is-open"), $(this).slideToggle(250));
          }),
        $(this).hasClass("is-open")
          ? ($(this).removeClass("is-open"), s.removeClass("is-open"))
          : ($(this).addClass("is-open"), s.addClass("is-open")),
        s.slideToggle(300);
    });
  var S = !1;
  function I(s) {
    var e = s.width(),
      i = Math.floor((e - 120) / 44) + 1;
    s.slick({
      speed: 500,
      infinite: !1,
      dots: !1,
      arrows: !0,
      swipe: !1,
      slidesToShow: i,
      slidesToScroll: 1,
      variableWidth: !0,
      responsive: [
        { breakpoint: 768, settings: { swipe: !0, slidesToScroll: i } },
      ],
    });
  }
  $(".js-profSns.is-show").each(function () {
    I($(this));
  });
  var _,
    O = !1;
  function W(s, e) {
    s.forEach(function (s) {
      s.isIntersecting
        ? s.target.classList.add("is-hover")
        : s.target.classList.remove("is-hover");
    });
  }
  $(".js-ajaxShop").on("click", function (s) {
    if ((s.stopPropagation(), s.preventDefault(), O)) return !1;
    O = !0;
    var i = $(this),
      e = $(this).data("data");
    $.ajax({
      type: "POST",
      dataType: "json",
      url: jsSiterootpass + "discography/ajax.php",
      data: { data: e, mode: "mode=16" },
    })
      .done(function (s) {
        if (!0 === s.link) {
          var e = window.open("", "_blank");
          e ? (e.location.href = s.url) : (location.href = s.url), (O = !1);
        } else P(i, s.data);
      })
      .fail(function (s) {
        console.log(s);
      });
  }),
    $(".js-ajaxDigital").on("click", function (s) {
      if ((s.stopPropagation(), s.preventDefault(), O)) return !1;
      O = !0;
      var i = $(this),
        e = $(this).data("data");
      $.ajax({
        type: "POST",
        dataType: "json",
        url: jsSiterootpass + "discography/ajax.php",
        data: { data: e, mode: "mode=17" },
      })
        .done(function (s) {
          if (!0 === s.link) {
            var e = window.open("", "_blank");
            e ? (e.location.href = s.url) : (location.href = s.url), (O = !1);
          } else P(i, s.data);
        })
        .fail(function (s) {
          console.log(s);
        });
    }),
    $(document).on("click", ".modalDetail__more", function (s) {
      $(this).fadeOut(),
        $(this).next(".modalDetail__moreshopLinks").slideToggle();
    }),
    $(".js-omitBtn").on("click", function () {
      $(this).parent().removeClass("is-close");
    }),
    $(".js-omit").each(function () {
      var s = $(this).outerHeight();
      $(this).data("height") < s && $(this).addClass("is-close");
    }),
    $(".js-disc").each(function () {
      var s = $(this).find(".js-discJacket"),
        e = $(this).find(".js-discBtn"),
        i = $(this).find(".js-discPackage"),
        t = s.children().length;
      s.slick({
        autoplay: !1,
        speed: 500,
        dots: !0,
        arrows: !1,
        fade: !0,
        asNavFor: $([e[0], i[0]]),
        lazyLoad: "progressive",
        customPaging: function (s, e) {
          return (
            '<img data-lazy=" ' +
            s.$slides.eq(e).find("img").attr("data-lazy") +
            ' " class="discGroup__jacketThumb">'
          );
        },
      }),
        e.slick({ autoplay: !1, speed: 500, dots: !1, fade: !0, arrows: !1 }),
        i.slick({
          autoplay: !1,
          speed: 500,
          fade: !0,
          dots: !1,
          arrows: !1,
          draggable: !1,
          swipe: !1,
        }),
        $(this)
          .find(".js-discDetail")
          .css("transition-delay", 0.2 * t + 0.2 + "s"),
        i.css("transition-delay", 0.2 * t + 0.4 + "s");
    }),
    (_ = new IntersectionObserver(W, {
      root: null,
      rootMargin: "-50%",
      threshold: 0,
    })),
    $(".js-videoItem").each(function (s, e) {
      _.observe(e);
    });
  var A = new IntersectionObserver(
    function (s) {
      s.forEach(function (s) {
        s.isIntersecting
          ? s.target.classList.remove("is-fixed")
          : s.target.classList.add("is-fixed");
      });
    },
    { root: null, rootMargin: "-134px", threshold: 0 }
  );
  $(".js-tabList").each(function (s, e) {
    A.observe(e);
  });
  var D = !1;
  function E(s, e) {
    s.removeClass("is-active"), e.hide(), (D = !1);
  }
  function M(s) {
    $(".loader__icon").animate(
      { opacity: 0 },
      {
        duration: 200,
        easing: "linear",
        complete: function () {
          $(".loading").fadeOut(300, s);
        },
      }
    );
  }
  function P(s, e) {
    $(".js-modalBg").fadeIn();
    var i = s.data("modal"),
      t = $("#" + i);
    t.find(".js-listsWrap").html(e),
      t.clone(!0).appendTo(".js-modalCont"),
      $(".js-modal").fadeIn(),
      $("body").addClass("is-fixed");
  }
  $(".js-postSelect").each(function () {
    var i = $(this),
      s = i.children(".js-postSelectBtn"),
      t = i.children(".js-postSelectBody"),
      e = i.find(".js-postSelectClose");
    s.on("click", function () {
      if (D) E(i, t);
      else {
        i.addClass("is-active"), t.fadeIn(), (D = !0);
        var s = t.find(".js-postSelectList li").length,
          e =
            14 < s
              ? t.find(".js-postSelectList li").outerHeight() * (s - 14)
              : 0;
        t.find(".js-postSelectList").scrollTop(e);
      }
    }),
      e.on("click", function () {
        E(i, t);
      });
  });
>>>>>>> 29d204d6a5e45bff896d97994ef1c4c239726ca2
});
