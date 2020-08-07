# Auth api

### /api/auth/register
    // 0807 기준 이메일 인증이 구현돼지 않음
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
