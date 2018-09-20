angular.io
cli.angular.io

style.css은 index.html의 head부분에 자동으로 삽입됨

앵귤러는 코드를 레고블록처럼 모듈화하여 사용한다.
모듈은 다수가 있을 수 있으나, 기동 모듈은
한개만 지정할 수 있습니다.

------------------------
* package.json

```
"scripts": {
    "ng": "ng",
    "start": "ng serve",
```
= npm start

* .angular-cli.json

```
"environments": {
        "dev": "environments/environment.ts",  // 개발 시
        "prod": "environments/environment.prod.ts"  // 서비스할때
      }
```

angular는 빌드도구로 webpack을 씀


* agular.json

"sourceRoot": "src",
"index": "src/index.html",


* index.html

.ts ==.html(.js)==> Browser

이런 작업을 개발 중에는 하루에 100번 이상을 수행

개발 중에는 실제 파일은 만들지 않고
메모리에 해당 파일정보를 유지하면 보다 빠르게
브라우저에게 재배포할 수 있다.

npm start => ng serve ==> angular/cli ==> babel을 이용 트랜스파일링, webpack 빌딩(하나의 파일로 모음)
* webpack 빌딩 결과 => index에 동적할당
```
<script type="text/javascript" src="runtime.js"></script> // webpack
<script type="text/javascript" src="polyfills.js"></script> //
<script type="text/javascript" src="styles.js"></script> // css코드
<script type="text/javascript" src="vendor.js"></script> // angular 코어 코드
<script type="text/javascript" src="main.js"></script> // 개발자 코드(수십수백개의 ts를 하나로 모음)
```
==> webpack-dev-server <== http://localhost:4200/ 브라우저 접근
webpack-dev-server ==> index.html 배포 to 브라우저

main.js가 <app-root></app-root> 사이로 코드를 동적으로 밀어넣음
(개발자가 짠 코드의 시작은 main.ts)

main.ts ==> AppModule ==> AppComponent

* main.ts
environment.production // 개발이 끝났는지 아닌지 구분 스위치(true면 개발완료 후 배포한다는 뜻)

* AppModule(app.module.ts)
app.module.ts 참조.

* AppComponent(app.component.ts)
Component
1. html
2. CSS
3. JavaScript
html을 수정하면 자동으로 감지해서 브라우저에 반영함
자동으로 트랜스파일링 => 빌딩
(app.component.spec.ts : 자스민, test 담당)
(assets: 이미지 등 모아놓는 폴더)

///////////////////////////////////
홈 컴포넌트 생성
```
ng g component home
CREATE src/app/home/home.component.html (23 bytes)
CREATE src/app/home/home.component.spec.ts (614 bytes)
CREATE src/app/home/home.component.ts (261 bytes)
CREATE src/app/home/home.component.css (0 bytes)
UPDATE src/app/app.module.ts (1852 bytes)
```
app.module.ts에
```
import { HomeComponent } from './home/home.component';
```
추가됨

* home.component.ts
@Component가 밑의 클래스함수에 삽입되고
constructor ==> ngOnInit 순으로 실행됨.

* 셀렉터 이름 바꾸기
```
ng new p120 -p my
```