/* trace:src/app/run-201501/script/mod/index/main.coffee */
(function() {
  require(['jquery', 'app', 'fabric'], function($, app, fabric) {
    var canvas, frame_haiyang, frame_jiqing, frame_modeng, frame_shidai, frame_tmp, frame_user, frame_zuanshi, need_height, selected_item;
    window.onload = function() {
      return app.ajax.hideLoading();
    };
    need_height = document.body.clientWidth * 1207 / 750;
    (function() {
      $('.index-bg').css('background-size', document.body.clientWidth + 'px ' + need_height + "px");
      $('.index-bg').css('height', need_height + "px");
      $('.camera').css('padding-top', need_height * 0.58 + "px");
      $('.index-bg').show();
      return $('.design-bg').hide();
    })();
    canvas = new fabric.StaticCanvas('c');
    frame_user = new fabric.Image($('#frame_user')[0]);
    frame_haiyang = new fabric.Image($('#frame_haiyang')[0]);
    frame_jiqing = new fabric.Image($('#frame_jiqing')[0]);
    frame_modeng = new fabric.Image($('#frame_modeng')[0]);
    frame_shidai = new fabric.Image($('#frame_shidai')[0]);
    frame_zuanshi = new fabric.Image($('#frame_zuanshi')[0]);
    frame_tmp = frame_shidai;
    selected_item = 0;
    $('#btn-upload').on('change', function() {
      var input, reader;
      input = $(this)[0];
      if (input.files && input.files[0]) {
        reader = new FileReader();
        reader.onload = function(e) {
          var img;
          img = new Image();
          img.src = e.target.result;
          app.ajax.showLoading();
          return img.onload = function() {
            var dest_height, user_pic;
            user_pic = null;
            console.log('width' + img.naturalWidth);
            console.log('height' + img.naturalHeight);
            dest_height = canvas.height > img.naturalHeight ? canvas.height : img.naturalHeight;
            if (img.naturalHeight > img.naturalWidth) {
              user_pic = new fabric.Image(img, {
                left: 0,
                top: 0,
                width: canvas.width,
                height: img.naturalHeight * canvas.width / img.naturalWidth
              });
            } else {
              user_pic = new fabric.Image(img, {
                left: 0,
                top: 0,
                width: img.naturalWidth * canvas.height / img.naturalHeight,
                height: canvas.height
              });
            }
            console.log(user_pic);
            canvas.centerObject(user_pic);
            canvas.add(user_pic);
            canvas.add(frame_tmp);
            console.log(canvas.toDataURL());
            $('.design-bg').show();
            return $('.index-bg').hide();
          };
        };
        return reader.readAsDataURL(input.files[0]);
      }
    });
    $('#btn-shidai').on('click', function() {
      selected_item = 0;
      return canvas.remove(frame_tmp).add(frame_tmp = frame_shidai);
    });
    $('#btn-zuanshi').on('click', function() {
      selected_item = 1;
      return canvas.remove(frame_tmp).add(frame_tmp = frame_zuanshi);
    });
    $('#btn-modeng').on('click', function() {
      selected_item = 2;
      return canvas.remove(frame_tmp).add(frame_tmp = frame_modeng);
    });
    $('#btn-haiyang').on('click', function() {
      selected_item = 3;
      return canvas.remove(frame_tmp).add(frame_tmp = frame_haiyang);
    });
    $('#btn-jiqing').on('click', function() {
      selected_item = 4;
      return canvas.remove(frame_tmp).add(frame_tmp = frame_jiqing);
    });
    $('#btn-again').on('click', function() {
      canvas.dispose();
      $('.design-bg').hide();
      return $('.index-bg').show();
    });
    return $('#btn-finish').on('click', function() {
      var data_imgage;
      data_imgage = canvas.toDataURL('png');
      $.ajax({
        url: 'http://demo.createcdigital.com:8080/wechat/uploadImage/54f1b82a58f24d7d16c11e18.json',
        type: 'post',
        data: JSON.stringify({
          'imgData': data_imgage
        }),
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        error: function() {
          return alert('Error');
        },
        success: function(result) {
          return console.log(result);
        }
      });
      console.log('item you select:' + selected_item);
      return console.log(data_imgage);
    });
  });

}).call(this);
