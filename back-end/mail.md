# Mail
### /api/mail/send_auth_mail

    comment : 사용자가 이메일인증코드를 요청할때 사용, 재사용대기시간 : 15초

    method : get
    request 방식 
    /api/mail/send_auth_mail/:email
    
    response 방식
    {
        result : [boolean],
        code : [int]
    }
    성공시 result : true

    codes
        1 : 이메일 형식이 아님
        2 : 이메일을 보내는데 실패
        3 : 이메일을 보낸 후 DB에 저장 실패
        4 : 쿨타임 ( 15초 ) 

### /api/mail/cmp_auth_code
    
    comment : 사용자는 이 경로를 이용해 이메일인증코드를 보내면 인증결과를 리턴
    method : post
    request 방식
    {
        "email" : "example@gmail.com",
        "auth_key" : "메일로 보낸 authkey"
    }

    response 방식 // result가 true시 code는 리턴 x
    {
        result : [boolean],
        code : [int]
    }

    codes
        1 : 인증요청을 한 적이 없음
        2 : auth key 가 같지 않음
        3 : 인증키가 같지만 서버에 오류가 있음
        4 : 이미 인증됨