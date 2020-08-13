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
