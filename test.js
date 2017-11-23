ViewAnswers('http://user.ppkao.com/mnkc/tiku/?id=4329027','12890')

function ViewAnswers(openUrl) {
  if ($.session.get('GetUserIPKey') == '-1') {
    tasteLogin(openUrl);
    return false
  } else {
    if ($.session.get('GetUserIPKey') == '0') {
      tasteLogin(openUrl);
      return false
    } else {
      if ($.session.get('GetUserIPKey') == '4') {
        result = openUrl;
        if (isIE()) {
          location.href = result;
          result = '';
          return false
        }
      } else {
        if ($.session.get('GetUserIPKey') == '1') {
          result = openUrl;
          if (false) {
            location.href = result;
            result = '';
            return false
          }
        } else {
          if ($.session.get('GetUserIPKey') == '3') {
            $.session.set('GetUserIPKey', '0');
            tipsDialog('您的账号在另一地点登陆，您被迫下线。如果这不是您本人操作，请注意账号安全。');
            return false
          } else {
            if ($.session.get('GetUserIPKey') == '5') {
              WXfollow(openUrl);
              return false
            } else {
              $.ajax({
                type: 'POST',
                async: false,
                cache: false,
                url: 'http://user.ppkao.com/Interface/IsLogin.ashx?action=GetUserIP',
                dataType: 'jsonp',
                crossDomain: true,
                contentType: 'application/x-www-form-urlencoded;charset=utf-8',
                jsonp: 'callback',
                jsonpCallback: 'callback',
                success: function (data) {
                  if (data.name == '-1') {
                    $.session.set('GetUserIPKey', data.name);
                    tasteLogin(openUrl);
                    return false
                  } else {
                    if (data.name == '0') {
                      $.session.set('GetUserIPKey', data.name);
                      tasteLogin(openUrl);
                      return false
                    } else {
                      if (data.name == '4') {
                        $.session.set('GetUserIPKey', data.name);
                        result = openUrl;
                        if (isIE()) {
                          location.href = result;
                          result = '';
                          return false
                        }
                      } else {
                        if (data.name == '1') {
                          $.session.set('GetUserIPKey', data.name);
                          result = openUrl;
                          if (isIE()) {
                            location.href = result;
                            result = '';
                            return false
                          }
                        } else {
                          if (data.name == '2') {
                            $.session.set('GetUserIPKey', data.name);
                            tasteLogin(openUrl);
                            return false
                          } else {
                            if (data.name == '3') {
                              $.session.set('GetUserIPKey', '0');
                              tipsDialog('您的账号在另一地点登陆，您被迫下线。如果这不是您本人操作，请注意账号安全。');
                              return false
                            } else {
                              if (data.name == '5') {
                                $.session.set('GetUserIPKey', '5');
                                WXfollow(openUrl);
                                return false
                              } else {
                                tasteLogin(openUrl, tid);
                                return false
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                  result = openUrl.replace('http://user.ppkao.com/', 'http://api.ppkao.com/');
                  if (isIE()) {
                    location.href = result;
                    result = '';
                    return false
                  }
                  return false
                }
              })
            }
          }
        }
      }
    }
  }
  setTimeout(function () {
    if (result.length > 0 && result != null && result != '') {
      window.open(result, '_blank');
      return false
    }
  }, 100)
}
