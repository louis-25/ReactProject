import DHtube from '../imgs/jobs/DHtube.PNG'
import corona from '../imgs/jobs/114_logo.png'
import TodoList from '../imgs/jobs/TodoList.PNG'
import github from '../imgs/jobs/github_clone.PNG'
import Django from '../imgs/jobs/Django.png'
import 자취꿀팁 from '../imgs/jobs/자취꿀팁.png'
import 너굴앱 from '../imgs/jobs/너굴앱.png'
import Extension from '../imgs/jobs/extension.PNG'
import Promotion from '../imgs/jobs/promotion.PNG'

const works = [
  {
    href:'https://fs-promotion.netlify.app',
    datatype: 'front-end',
    src: Promotion,
    h3: 'React',
    span: 'Promotion Page'
  },
  {
    href:'https://chrome.google.com/webstore/detail/fireside-extension/aomiaeiilmfbakpflmboippfcenmimii?hl=ko&authuser=0',
    datatype: 'front-end',
    src: Extension,
    h3: 'Chrome Extension',
    span: '실시간 채팅연동 서비스'
  },
  {
  href:'https://dhtube.netlify.app/',
  datatype: 'front-end',
  src: DHtube,
  h3: 'React',
  span: 'DHtube'
},
{
  href:'http://124.5.187.217:9090/',
  datatype: 'back-end',
  src: corona,
  h3: 'Spring Boot',
  span: 'Corona-114'
},
{
  href:'https://github.com/louis-25/FinalProject-raspberry',
  datatype: 'back-end',
  src: "https://github.com/louis-25/FinalProject-raspberry/raw/main/md-images/image-20210615104043936.png",
  h3: 'Python',
  span: 'GiGA Genie'
},
{
  href:'https://louis-25.github.io/React.js_Study/',
  datatype: 'front-end',
  src: TodoList,
  h3: 'React.js',
  span: 'TodoList'
},
{
  href:'https://louis-25.github.io/Clone_Coding/',
  datatype: 'front-end',
  src: github,
  h3: 'HTML',
  span: 'GitHub clone-coding'
},
{
  href:'https://github.com/louis-25/Django_Practice/tree/django_shopping',
  datatype: 'back-end',
  src: Django,
  h3: 'Django',
  span: '쇼핑몰 관리자페이지'
},
{
  href:'https://drive.google.com/file/d/1SC4T2m8gadtkg33AoS_5UI04_95urheK/view?usp=sharing',
  datatype: 'mobile',
  src: 너굴앱,
  h3: 'Android',
  span: '너굴앱'
}]

export default works;