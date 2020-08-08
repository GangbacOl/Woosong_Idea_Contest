# Auth api

## login에서 받은 token

    /api/auth/login 에서 로그인을 성공하여 받은 token 은 Authorization 헤더에 삽입

### /api/auth/register
    
    method : post
    request 방식
    {
        "account" : "guest1aaa",
        "passwd" : "a1b2csssss3",
        "passwd_repeat":"a1b2csssss3",
        "email" : "example@gmail.com",
        "name" : "홍길동",
        "nickname": "오홍홍",
        "description":"hello"
    }
    
    response - success
    {
        result : true
    }

    response - failed
    {
        "result": false,
        "message": "check { overlap with other user }"
        code : [int] // 각각의 에러에따라 코드와 메시지가 다름
        //코드가 없는경우 message 참고
    }

    codes
        1 : passwd 와 passwd_repeat가 같지 않음
        2 : account의 길이가 형식에 맞지 않음
        3 : passwd의 길이가 형식에 맞지 않음
        4 : email이 이메일 형식에 맞지 않음
        5 : description 의 길이가 너무 길음
        6 : email의 길이가 형식에 맞지않음
        7 : name의 길이가 형식에 맞지않음
        8 : nickname의 길이가 형식에 맞지않음
        9 : email이 인증되지 안음
    
### /api/auth/login

    method : post
    request 방식
    {
        "account" : "your_account",
        "passwd" : "your_passwd"
    }

    response 방식

    {
        "result" : [boolean],
        "token" : [string] // result 가 true일때
        "code" : [int] // result 가 false일때
    }

    codes
        1 : account가 없을때
        2 : 서버에러
        3 : 비밀번호 불일치 
        4 : 비밀번호 정보를 받지않음
        5 : jwt의 알 수 없는 에러 ( 백엔드개발자에게 request payload와 함께 제보바람)

### auth

    로그인이 필요한 서비스를 이용할때 로그인이 되어있지 않다면 
    
    res.redirect("/") // 토큰만료도 포함