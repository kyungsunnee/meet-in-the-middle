# meet-in-the-middle
![IMG_0002 2 사본.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4cfdc859-56d5-4ad5-80fb-731299ac8c4e/IMG_0002_2_사본.jpg)

### 우리 어디서 만나?

우리는 살아가며 많은 고민거리에 직면한다. '인생은 갈림길의 연속이다'라는 말 처럼 살다보면 당연 마주하게되는 고민, 결정 그 중 하나 '**약속 장소**' Meet in the middle 은 그 고민에서 시작되었다.

### 어디서? 뭐 먹지?

'어디서?' 에서 오는 **위치 추천 서비스**와 '뭐 먹지?'의 **특정 위치까지의 소요 시간을 안내** Meet in the middle은 이 두가지 서비스를 제공한다. 

### Idea List

- **약속 장소 관리 관련 웹 ✔️**
- 협업 관리 툴 웹
- 다양한 해외 문서들 해석/ 다양한 유저가 배포할 수 있는 웹
- 고민 등의 게시글을 올릴 수 있는 게시판형 웹
- 브라우저 탭을 넘나드는 문서 에디터

# Meet in the middle

### Service concept

Meet in the middle은 크게 두가지의 서비스를 제공한다.

첫째. **어디서?**
가장 합리적인 약속 장소를 제안. 

둘째. **뭐 먹지?**

특정 장소를 정하고 만나는 요즘 세대 특징 반영
정해진 장소까지 각각의 동선 / 소요시간을 나타냄

### 사용할 API

[Kakao 지도 API](https://apis.map.kakao.com/web/)

# 기능 / 페이지 리스트업

## 초기 페이지(1)

- **로고와 간단한 서비스 설명**
- **로그인 기능**
    - 이메일 - input text
    - 비밀번호 - input text
    - 로그인 - button → jwt / 권한 부여
    - 소셜 로그인 - oauth
- **회원가입 기능**
    - [modal render - button (1 - 1)](https://www.notion.so/2-SR-3d9241e8cc1445cca99e07b5c1ceb6dd?pvs=21)
- **정보 찾기 기능**
    - [modal render - text  onclick (1 - 2)](https://www.notion.so/2-SR-3d9241e8cc1445cca99e07b5c1ceb6dd?pvs=21)

### 초기 페이지 - 모달창

- **회원가입 창 (1 - 1)**
    - 이메일 - input text 
    +) 유효성 검사 : '@'
    - 비밀번호 - input text
    +) 유효성 검사
    - 비밀번호 확인 - input password
    +) 비밀번호 일치 확인
    - 이름
    - 전화번호 - input number
    - 회원가입 완료 - button → 메인페이지 Rerender
- **정보 찾기 창 (1 - 2)**
    - 이름 - input text
    - 전화번호 - input text
    - 인증 번호 받기 - button 
    → 인증번호 입력 - input / 인증번호 확인 - button → 정보 찾기

## 지도 페이지(2)

- **top bar**
    - 로고
    - 마이 페이지 
    - button (profile image or default image) → 마이 페이지 기능 - [modal render (2 - 1)](https://www.notion.so/2-SR-3d9241e8cc1445cca99e07b5c1ceb6dd?pvs=21)
    - 친구 리스트 - [modal render (2 - 2)](https://www.notion.so/2-SR-3d9241e8cc1445cca99e07b5c1ceb6dd?pvs=21)
- **side list**
    
    정보 : 이름 , 프로필 사진 - div
    
    - 내 정보
        - 내 위치 추가 / 저장 위치 사용 기능
    - 참여자 정보 리스트
        - 옵션 - botton 
        → 친구 추가 - button / 숨김 - button
    - meet 참여 초대 - button → 참여 초대 기능 - [](https://www.notion.so/2-SR-3d9241e8cc1445cca99e07b5c1ceb6dd?pvs=21)[modal render (2- 3)](https://www.notion.so/2-SR-3d9241e8cc1445cca99e07b5c1ceb6dd?pvs=21)
    - meet 실행 - button
    - meet reset - text(onclick) → '확인 문구'
    - 참여 취소 - button → '확인 문구'
- **지도**
    - 출발 위치 핀 표시
    - meet 실행 - 약속 장소 핀 / 각 출발 ~ 약속장소 간의 추천 동선 표시(서로 다른 색)

### 지도 페이지 - 모달창

- **마이페이지 창 (2 - 1)**
    - 이미지 - image
    - 이미지 수정 - button
    - 이메일 - input text 
    +) 유효성 검사 : '@'
    - 비밀번호 - input text
    +) 유효성 검사
    - 비밀번호 확인 - input password
    +) 비밀번호 일치 확인
    - 이름
    - 전화번호 - input number
    - 정보 수정 완료 - button → '수정 완료 메세지'
    - 회원 탈퇴 - text (onclick)
- **meet 참여 초대 창 (2 - 3)**
    - 전화 번호 - input number
    - 찾기 - button
- **친구 리스트 창 (2 - 2)**
    - 이미지 - image
    - 이름 - div
    - 이메일 - div
    - 친구 삭제 - button

### advanced

- 모바일 환경 구동
