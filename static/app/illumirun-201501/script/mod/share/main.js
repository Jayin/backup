/* trace:src/app/illumirun-201501/script/mod/share/main.coffee */
(function() {
  require(['jquery', 'app', 'http://res.wx.qq.com/open/js/jweixin-1.0.0.js'], function($, app, wx) {
    var designId, frame, getUrlParameter, loadDesign, loadRanklist, need_height, templateCode;
    designId = null;
    templateCode = "sd";
    getUrlParameter = function(sParam) {
      var i, j, ref, sPageURL, sParameterName, sURLVariables;
      sPageURL = window.location.search.substring(1);
      sURLVariables = sPageURL.split('&');
      for (i = j = 0, ref = sURLVariables.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
          return sParameterName[1];
        }
      }
      return null;
    };
    loadDesign = function(designId) {
      return app.ajax.get({
        url: "web/run/design/" + designId,
        success: function(result) {
          if (!G.IS_PROTOTYPE) {
            return $(".img-preview-size").attr('src', '/' + result.data.relativePath);
          } else {
            return $(".img-preview-size").attr('src', G.CDN_ORIGIN + '/' + result.data.relativePath);
          }
        }
      });
    };
    loadRanklist = function() {
      return app.ajax.get({
        url: 'web/run/templates.json',
        success: function(result) {
          var haiyang, jiqing, modeng, shidai, total, zuanshi;
          jiqing = result.data.templates[3].number;
          haiyang = result.data.templates[2].number;
          zuanshi = result.data.templates[4].number;
          modeng = result.data.templates[0].number;
          shidai = result.data.templates[1].number;
          total = jiqing + haiyang + zuanshi + modeng + shidai;
          $('#rank-number-jiqing').text(jiqing + '');
          $('#rank-number-haiyang').text(haiyang + '');
          $('#rank-number-zuanshi').text(zuanshi + '');
          $('#rank-number-modeng').text(modeng + '');
          $('#rank-number-shidai').text(shidai + '');
          $('#rank-rating-jiqing').css('width', (jiqing / total * 100) + '%');
          $('#rank-rating-haiyang').css('width', (haiyang / total * 100) + '%');
          $('#rank-rating-zuanshi').css('width', (zuanshi / total * 100) + '%');
          $('#rank-rating-modeng').css('width', (modeng / total * 100) + '%');
          return $('#rank-rating-shidai').css('width', (shidai / total * 100) + '%');
        },
        error: function() {
          return alert('系统繁忙，请您稍后重试。');
        }
      });
    };
    designId = getUrlParameter("designId");
    templateCode = getUrlParameter("templateCode");
    frame = templateCode;
    loadDesign(designId);
    loadRanklist();
    window.onload = function() {
      return app.ajax.hideLoading();
    };
    need_height = document.body.clientWidth * 1207 / 750;
    (function() {
      $('.share-bg').css('background-size', document.body.clientWidth + 'px ' + need_height + "px");
      $('.share-bg').css('height', need_height + "px");
      $('.ranklist-bg').css('background-size', document.body.clientWidth + 'px ' + need_height + "px");
      return $('.ranklist-bg').css('height', need_height + "px");
    })();
    $(".text-slogan-" + frame).show();
    $('#btn-submit').on('click', function() {
      var name, phone, sex;
      name = $("#submit-name").val();
      phone = $("#submit-phone").val();
      sex = parseInt($("input:radio[name ='sex']:checked").val());
      if (!name) {
        alert('名字不能为空');
        return;
      }
      if (!phone) {
        alert('电话不能为空');
        return;
      }
      return app.ajax.post({
        url: "web/run/user",
        contentType: 'application/json; charset=UTF-8',
        data: JSON.stringify({
          name: name,
          phone: phone,
          sex: sex,
          templateCode: templateCode
        }),
        success: function(result) {
          $("#dialog-win").hide();
          return $("#dialog-submit-ok").show();
        },
        error: function(e) {
          return console.log(e);
        }
      });
    });
    $('#btn-ranklist-close').on('click', function() {
      $('.ranklist-bg').hide();
      return $('.share-bg').show();
    });
    return $('#btn-ranklist').on('click', function() {
      $('.ranklist-bg').show();
      return $('.share-bg').hide();
    });
  });

}).call(this);
