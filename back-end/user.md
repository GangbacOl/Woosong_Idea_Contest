# User

### /api/user/get_info/:idx
    
    comment : 유저의 정보 반환
    method : get

    ! : login필요

    example request : /api/user/getinfo/1

    response 방식
    {
        result : [boolean]],
        idx ; [int],
        profile_image : [string],
        email : [string],
        name : [string],
        nickname : [string],
        description : [description],
        createdAt : [date] //ex ) 2020-08-11T05:03:13.000Z
    }

### /api/user/search_with_nickname/:nickname

    comment : 닉네임을 이용해 유저를 검색할때
    method : get
    
    ! : login 필요 없음

    example request : /api/user/search_with_nickname/admin

    response 방식
    {
        result : [boolean]
        idx : [string],
        nickname : [string],
        profile_image : [string],
        description : [string]
    }

    만약 result 가 false라면
    {
        result : false,
        code : [int]
    }

    codes 
        1 : 유저가 존재하지 않음
        2 : 파라미터(nickname) 이 제대로 전달되지않음
        3 : 예측하지 못한 에러 api개발자에게 문의  ㄱㄱ
    