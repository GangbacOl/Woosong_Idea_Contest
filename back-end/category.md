# Category

> 관련된 데이터 베이스 : category, request_category, post
> 아래 모든 내용은 access token 이 필요한 요청

### /api/category/get_categories
    
    comment : 사용자에게 카테고리 목록을 리턴
    method : get
    request 방식 
    
    /api/category/get_categories

    response 방식 // []안은 데이터 형
    {
        result : [boolean],
        categories : [list], // 카테고리 리스트
        code : [int]    // 에러 사유 // result가 true면 안써됨
    }

    // categories : [list]
    categories 리스트에 저장되는 값
    {
        idx : [int] // db의 pk값,
        category_name : [string] //카테고리 이름,
        description : [string] // 카테고리 설명,
        post_count : [int] // 해당 카테고리에 올라온 포스트들의 개수
    }
    //post_count 는 post 데이터베이스에서 카테고리가 해당하는 포스트들의 갯수를 구한다.
    codes 
        1 : 등록된 카테고리가 없음 
    
### /api/category/get_category

    comment : 사용자가 카테고리하나의 정보를 요청시 사용
    method : get

    request 방식
    {
        category_name : [string] // 카테고리 이름
    }

    ex) /api/category/get_category/IT

    response 방식
    {
        idx : [int] // db의 pk값,
        category_name : [string] //카테고리 이름,
        description : [string] // 카테고리 설명,
        post_count : [int] // 해당 카테고리에 올라온 포스트들의 개수
    }

### /api/category/put_category
    
    중요!!!!!! : 로컬에서 요청해야됨
    // 로컬이 아닐시 res.status(404).send('Not found');

    comment : 어드민이 category를 추가할때 사용
    method : put

    request 방식
    {
        category_name : "example", // 카테고리 이름
        description : "example description" // 카테고리 설명
    }

    response 방식
    {
        result : [boolean], // 성공 : true, 실패 : false
        code : [int] // result 가 false일때
    }

    codes
        1 : 이미 같은 이름의 카테고리가 있음
        2 : description의 길이가 너무 긺
        3 : category_name 이 너무 긺

### /api/category/request_category

    comment : 사용자가 관리자에게 카테고리를 요청할때 사용
    method : post
    
    request 방식
    {
        category_name : [string], // 카테고리의 이름
        description : [string], // 카테고리의 설명
        reason : [string] // 왜 그런 카테고리가 있어야 하는지 어드민에게 보고서 작성
    }

    response 방식
    {
        result : [boolean], 
        code : [int]
    }

    codes
        1 : description이 너무 긺
        2 : reason 이 너무 긺
        3 : category_name이 너무 긺

### /api/category/delete_category

    중요!!!! : 로컬에서의 요청만 처리
    // 로컬이 아닐시 put_category와 같이 처리
    comment : 어드민이 카테고리를 삭제할때 사용
    method : delete
    
    request 방식
    {
        category_name : [string] // category의 idx
    }

    response 방식
    {
        result : [boolean],
        code : [int]
    }

    codes
        1 : 해당 카테고리가 없음

### /api/category/update

    중요!!!! : 로컬에서의 요청만 처리
    comment : 어드민이 카테고리의 정보를 수정할때 사용
    method : patch

    request 방식
    {
        category_name : [string], // 바꾸고싶은 카테고리의 이름
        new_category_name : [string], // 새로운 카테고리의 이름
        new_description : [string] // 새로운 카테고리 설명
    }

    response 방식
    {
        result : [boolean],
        code : [int]
    }

    codes
        1 : 해당 카테고리 이름이 없음
        2 : 바꾼 카테고리 이름이 너무 긺
        3 : 바꾼 설명이 너무 긺