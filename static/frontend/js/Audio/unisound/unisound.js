(function() {
  $(document).ready(function() {
    if (window.AdMan !== undefined) {
      var button = null;
      var playAd = true;
	  var flag_stop = true;

      var adman = new AdMan.Manager({
        admanPeriod: 60*60*24,
        admanSwf: "/demo/js/adman.swf",
        admanId: [172, 337],
        overlay: [
          {
            id: "banner",
            target: function() {
              return $(button).parent().parent();
            },
            mode: AdMan.Overlay.Mode.REPLACE,
            animate: AdMan.Overlay.Animate.OPACITY,
            content: "<div class='unisound-banner-overlay'><div class='unisound-banner ${bannerClass}'><button class='unisound-close'></button></div><div class='btn-box'><button class='unisound-social-button' data-type='facebook'></button><button class='unisound-social-button' data-type='vkontakte'></button><button class='unisound-social-button' data-type='odnoklassniki'></button></div></div>",
            showOn: ["adStarted"], closeOn: [],
            showIf: [AdMan.Condition.banner()],
            values: {
              bannerClass: "b240x400"
            }
          },
          {
            target: function() {
              return $(button).parent().parent();
            },
            mode: AdMan.Overlay.Mode.REPLACE,
            content: "<div class='unisound-overlay'><div class='grid_1 unisound-inner'><button class='unisound-play mult-buttons elem'></button><button class='unisound-pause mult-buttons elem'></button><button class='unisound-restart mult-buttons elem'></button><div class='site elem'><a target='_blank' href='http://www.unisound.net'>Реклама</a></div><div class='unisound-left elem'></div></div><div class='grid_1 progress-volume'><div class='bar-panel'><div class='unisound-progress-bar'></div><div class='unisound-progress-thumb thumb'></div></div><div class='unisound-volume-back'><span class='unisound-mute'></span><div class='volume-spectre'><span class='unisound-volume-thumb thumb'></span><span class='volume-size'></span><span class='unisound-volume-fore'></span></div></div></div><div class='grid_1 running-line'><div class='unisound-text-container'><div class='unisound-text unisound-marquee unisound-link str_wrap noStop'></div></div></div></div>",
            showOn: ["adStarted"], closeOn: ["adCompleted"]
          }
        ],
        events: {
          adNone: function() {
            playAd = false;
            $(button).trigger("click");
          },
          adCompleted: function() {
            playAd = false;
            $(".controls_toggle").css("pointer-events", "auto");
            $(button).trigger("click");
          },
          adStarted: function() {
            $(".controls_toggle").css("pointer-events", "none");
            AudioPlayer.pauseAll();

            $.each(this.overlay, function(i, overlay) {
              if (overlay.id == "banner") {
                var container = overlay.getContainer();
                if (container.parent().parent().hasClass("singleTrack")) {
                  overlay.values.bannerClass = "b728x90";
                } else {
                  overlay.values.bannerClass = "b240x400";
                }
              }
            });
          }
        }
      });

      if (isMobile.any) {
        $(".controls_toggle").one("touchstart", function() {
          AdMan.initMobileAudio();
        });
      }

      var handler = function(event)
      {
 
        if (event.target != button)
        {
		  if ($(button).hasClass("clicked"))
          {
				$(button).removeClass("clicked");
				$(button).closest(".listenSongItem")
                         .removeClass("active")
                         .find(".othersArtists, .componentWrapper .player_volume_wrapper, .componentWrapper .player_progress, .componentWrapper .item-likes-wrapper")
                         .slideUp(300);
			}
			
          button = event.target;


          if (!adman.engine.playing)
          {
              try {
                adman.start();

                event.preventDefault();
                event.stopImmediatePropagation();
              } catch(e) {
                console.log(e);
              }
		  } 
        }
      };

      var playButtons = $(".controls_toggle");
      playButtons.click(handler);
      $.each(playButtons, function(i, b)
      {
        var events = $._data(b, "events").click;
        events.sort(function(a, b) {
          return (a.handler == handler) ? -1 : 1;
        });
      });
    }	
  });
})();
