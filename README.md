# React

 BTS_React Study/토이 프로젝트
 -----
## start(11.09)
2시에 디스코드에서 스터디 관련 일정 계획
> ### 스터디 계획
> * 매주 월요일 디스코드를 통한 실시간 스터디
>  * 각자 스터디한 내용 공유
> * git 활용
> * 1~3주차 React 기초 이론 및 실습
> * 4주차 : 토이 프로젝트 진행(개인)
>   * 추후 팀 프로젝트 진행(예정)

<br><br>



## 1day(11.10)
#### 리액트란?
자바스크립트는 웹 애플리케이션에서 가장 핵심적인 역할을 한다.
(ex. 디스코드, 펭스북, 페이팔, 이베이 등 개발)

이러한 애플리케이션을 순수하게 자바스크립트로만 관리하기에는 어려움이 있다.
이를 위해 수많은 프레임워크를 활용하였다.

프레임워크들은 주로 MVC 아키텍처, MVVM 아키텍처를 사용한다.

MVC, MVVM, MVW의 공통점 = 모델(Model) + 뷰(View)

모델 : 애플리케이션에서 사용하는 데이터를 관리하는 영역
뷰 : 사용자에게 보이는 부분

프로그램이 사용자로부터 입력을 받으면 컨트롤러는 모델 데이터를 조회하거나 수정한 뒤, 변경된 사항을 뷰에 반영한다. 반영하는 과정에서 뷰를 변형하게 되는데, 애플리케이션 규모가 커지면 수정하기 복잡해지고 관리에 따라 성능이 떨어질 수도 있다.

페이스북 개발팀에서 이를 해결하고자 개발한 것이 리액트이다.
리액트는 기존의 뷰를 제거하고 처음부터 새로 렌더링 하는 방식이다.
-> 애플리케이션 구조가 간단하고, 작성해야할 코드양이 줄어든다는 장점이 있다.

리액트는 자바스크립트 라이브러리로 사용자 인터페이스를 만드는데 사용한다.
MVC, MVVM, MVW의 공통점인 모델(Model)과 뷰(View)가 있는 것과는 달리 리액트에서는 뷰(View)만 사용하는 라이브러리이다.



<br><br>
## 2day(11.11)
#### 리액트 설치 및 실행
설치는 node.js와 yarn을 설치했다.
셋팅 후 hello-world를 입력하는데 잘 안된다.
![오류](./img/hello-world_error.PNG)
