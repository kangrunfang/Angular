import express from 'express';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json());
export class Course{
    constructor(
        public id:number,
        public courseName:string,
        public images:string, 
        public task:number,
        public person:number
    ){}
}

export class Course1{
    constructor(
        public id:number,
        public courseName:string,
        public images:string, 
        public courseDetail:string,
        public task:number,
        public person:number
    ){}
  }

  export class passage{
    constructor(
        public id:number,
        public images1:string, 
        public images2:string,
        public passageName:string,
        public passageDetail:string,
        public person:string,
        public date:string
    ){}
  }


const courses = [
    new Course(1,'javascript',
    "http://usercontent.edu2act.cn/media/team/18-09-11/Ypf253J7ydMQ2CckxWf6zJ.jpg?imageView2/1/w/230/h/130",
    10,90),
    new Course(2,'混合应用',
    "http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130",
    23,100),
    new Course(3,'2016级测试',
    "http://usercontent.edu2act.cn/media/team/18-09-11/AbbCZfnQVQHxyU2GBbQ5SB.jpg?imageView2/1/w/230/h/130",
    15,97),
    new Course(4,'计算机导论',
    "http://usercontent.edu2act.cn/media/team/18-09-06/HUcdGNR48SfNpHPRjGQqXb.jpg?imageView2/1/w/230/h/130",
    30,99),
    new Course(5,'HTML5与CSS3前端开发',
    "http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130",
    5,91),
    new Course(6,'2017软件测试',
    "http://usercontent.edu2act.cn/media/team/18-09-09/jHw7UZ9hmNxJtTgCDuf9c3.jpg?imageView2/1/w/230/h/130",
    5,91),
    new Course(7,'2018信息素养',
    "http://usercontent.edu2act.cn/media/team/18-09-06/UTjLGPA9oHaKeHMLi9Ko4c.jpg?imageView2/1/w/230/h/130",
    0,12),
    new Course(8,'数据结构',
    "http://usercontent.edu2act.cn/media/team/18-09-06/bE6jL98kCfWg3Hij6gyokN.jpg?imageView2/1/w/230/h/130",
    4,401),
    new Course(9,'H5动画与游戏开发',
    "http://usercontent.edu2act.cn/media/team/18-03-05/BftwUw47KUSTFGrwepb7gd.png?imageView2/1/w/230/h/130",
    3,58),
    new Course(10,'JAVA开发',
    "http://usercontent.edu2act.cn/media/team/18-03-05/RLZ9pTwpocUfCYqRWvmACZ.jpg?imageView2/1/w/230/h/130",
    13,58),
    new Course(11,'操作系统',
    "http://usercontent.edu2act.cn/media/team/18-02-26/T6JLRm2Y9noLzWNjwAhF8X.png?imageView2/1/w/230/h/130",
    7,398),
    new Course(12,'网络原理',
    "http://usercontent.edu2act.cn/media/team/18-03-07/BGWzBhRgmujgPmLn4efeFd.png?imageView2/1/w/230/h/130",
    10,395)
]

const courses2=[
    new Course1(1,'Github开源之旅视频课程',
    "http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190","完成本课程之后，能够达到以下目标:实名注册Github账户,能够在Github账户上搜索资料",
    16,3739),
    new Course1(2,'CSS3基础',
    "http://usercontent.edu2act.cn/media/cs/16-11-14/XgKaLUTcWTUsPaqF2hXSHK.png?imageView2/1/w/320/h/190",
    "CSS3在以前的基础上添加了诸多选择器和新的样式，本课程将讲解CSS3新的选择器和样式",12,2321),
    new Course1(3,'HTML5基础',
    "http://usercontent.edu2act.cn/media/cs/16-11-11/JjHN2Za86UhpyK8u6MEtsC.png?imageView2/1/w/320/h/190",
    "HTML5是最新的一项Web标准，在原有HTML4的基础上定义了一些新的标签和新的JavaScriptAPI",12,1313),
    new Course1(4,'Selenium IDE WEB自动化测试',
    "http://usercontent.edu2act.cn/media/cs/16-03-16/YVupSzK5EvQDxwktqvVsJK.png?imageView2/1/w/320/h/190",
    "上篇对自动化测试的基础知识作一些交代，为真正作自动化测试作好铺垫，然后讲解IDE工具的基本用法。",13,3794),
    new Course1(5,'扩展的ICONIX软件过程实践',
    "http://usercontent.edu2act.cn/media/cs/16-11-03/TeZqcmxukYntmh8UigEeqU.png?imageView2/1/w/320/h/190",
    "ICONIX软件过程的主体设计思路是尽早进入编码阶段，缩短分析设计周期的软件开发方法",12,2269),
    new Course1(6,'Selenium IDE WEB自动化测试',
    "http://usercontent.edu2act.cn/media/cs/16-10-28/93BLumGUzRct9BRxKQgWnn.png?imageView2/1/w/320/h/190",
    "上篇对自动化测试的基础知识作一些交代，为真正作自动化测试作好铺垫，然后讲解IDE工具的基本用法。",11,3131),
    new Course1(7,'用户模式',
    "http://usercontent.edu2act.cn/media/cs/16-07-14/Q24spSpJYpDLinhenGUNrb.png?imageView2/1/w/320/h/190",
    "本课程包括用户建模是需求捕获的相关内容。通过用户建模帮助产品设计人员了解用户真正的需求。",3,1612),
    new Course1(8,'Axure入门基础',
    "http://usercontent.edu2act.cn/media/cs/16-07-14/DRTyv6V7UqdsjzNArWP5xd.png?imageView2/1/w/320/h/190",
    "Axure软件的使用是产品工程师必需的素质，本课程旨在教产品小白可以迅速地使用Axure软件。",5,4039),
    new Course1(9,'用户头像',
    "http://usercontent.edu2act.cn/media/cs/16-07-14/ckCb5QBjSVAYLxWDQRkAwc.png?imageView2/1/w/320/h/190",
    "本课程用户画像是需求捕获的相关内容，通过给用户建模，帮助产品设计人员了解用户的真正需求。",3,1116),
    new Course1(10,'墨刀入门',
    "http://usercontent.edu2act.cn/media/cs/16-07-14/zuW3YV2EzoSoEbxVmDyrK9.png?imageView2/1/w/320/h/190",
    "本课程重点讲解一款在线快速原型设计工具——墨刀的使用方法和操作技巧，并结合具体案例进行分析。",4,4899),
    new Course1(11,'网页制作与开发',
    "http://usercontent.edu2act.cn/media/cs/16-09-22/Qrnx7yH2tp7mGGLSdbhWHc.png?imageView2/1/w/320/h/190",
    "本课程利用线上与线下相结合的授课方法，以网页开发主流软件Dreamweaver为工具，教给学生网页设计。",42,1572),
    new Course1(12,'产品&交互设计那些事儿',
    "http://usercontent.edu2act.cn/media/cs/16-09-08/DTAweqRQeVWst8N8RmH3pe.png?imageView2/1/w/320/h/190",
    "本课程是和学生一起探讨交流关于产品设计与交互的一些经验教训，并结合具体案例进行分析讲解。",5,1084)
]


const passages=[
    new passage(1,"http://usercontent.edu2act.cn/media/userheader/18-04-28/MHsG2fvR989uTfkLRZxDCY.jpeg?imageView2/1/w/256/h/256",
    "http://usercontent.edu2act.cn/media/ckeditor/upload2018/1020/ySftMWD6MCnGSFbdqZia4U.png","链栈的表示及基本操作的实现","写了一点链栈的基本操作，第一次发文，如发现错误之处请大家及时指正。<br/>// 补充：链栈的基本操作 #include <stdio.h> #include <stdlib.h> typedef int ElemType",
    "2-马增来","2018-10-21  17:26"),
    new passage(2,"http://usercontent.edu2act.cn/media/userheader/18-06-11/hcnaQiW74323X9xzQNu8pR.jpg?imageView2/1/w/120/h/120",
    "http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/c67LLKXLBdRtuxNueeRshN.jpg","类定义关键字详情","JAVA类与对象（三）----类定义关键字详解 static 表示静态，它可以修饰属性，方法和代码块。1.static修饰属性（类变量），那么这个属性就可以用类名.属性名来",
    "3-张馨元","2018-10-9  19:21"),
    new passage(3,"http://usercontent.edu2act.cn/media/userheader/17-07-18/KbeV987Y2GWmTnUD76Jzan.jpg?imageView2/1/w/120/h/120",
    "http://usercontent.edu2act.cn/media/team/18-09-06/bE6jL98kCfWg3Hij6gyokN.jpg?imageView2/1/w/230/h/130","数据结构——线性表的经典应用","1. 一元多项式的表示和相加 在数学上，一个一元多项式\(P_{n}(x)\)可升序写成：\(P_{n}(x) = p_{0}+p_{1}x^1+p_{2}x^2+...++p_{n}x^n\)它由n+1个系数唯一确定。",
    "杨伟彬","2018-10-8  16:28"),
    new passage(4,"http://usercontent.edu2act.cn/media/userheader/15-11-10/8pt3Ph9aDFbAveubDWgN5Y.jpg?imageView2/1/w/256/h/256",
    "http://usercontent.edu2act.cn/media/ckeditor/upload2018/0921/RWcUSnA6qeiKBmf5KK96K9.jpg","WEB开发二——字符串类型","在C语言中的数据类型中没有字符串类型，字符串是字符数组，那么字符串可以遍历。在前端JavaScript中数组和字符串是两种数据类型，也就是字符串类型是存",
    "刘孟祎","2018-10-8  16:28"),
    new passage(5,"http://usercontent.edu2act.cn/media/userheader/18-06-27/qaxwRNWziva8oHjepZHiga.jpg?imageView2/1/w/256/h/256",
    "http://usercontent.edu2act.cn/media/ckeditor/upload2018/0921/4WEdTfxE8Ww5TNJHEQokEV.jpg","数据结构——快速排序","快速排序是C.R.A.Hoare于1962年提出的一种划分交换排序。它采用了一种分治的策略，通常称其为分治法(Divide-and-ConquerMethod)。 分治法的基本思想",
    "张玉茹","2018-10-8  16:28"),
    new passage(6,"http://usercontent.edu2act.cn/media/userheader/17-08-21/3ZhbH44vcqrHhidpqxrejJ.png?imageView2/1/w/256/h/256",
    "http://usercontent.edu2act.cn/media/ckeditor/upload2018/0921/YrRncuw8TTWhCd9ZyrJd3K.png","创建视频课程的方法说明","教师用户登录后访问 http://www.edu2act.net/trainer/course/list/ 可以创建视频课程。具体操作流程如下：1. 通过上面的链接，进入所有课程页面点击左侧菜单",
    "雪梨教育","2018-9-21  16:36")
]

app.use('/',express.static('angulardemo00'));

app.get('/api/courses2', function (req, res) {
    res.json(courses2);
});
app.get('/api/courses2/:id', function (req, res) {
    res.json(courses2.find(function (ele) { return ele.id == req.params.id; }));
});
app.post('/api', function (req, res) {
    console.log(req.body);
    res.json(courses2);});



// app.get('/api',(req,res)=>{
//     res.json(courses);
// });
app.get('/api/courses',(req,res)=>{
    res.json(courses);
});
app.get('/api/courses/:id',(req,res)=>{
    res.json(courses.find((ele)=>ele.id == req.params.id));
});
app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json(courses);
});


app.get('/api/passages', function (req, res) {
    res.json(passages);
});
app.get('/api/passages/:id', function (req, res) {
    res.json(passages.find(function (ele) { return ele.id == req.params.id; }));
});
app.post('/api', function (req, res) {
    console.log(req.body);
    res.json(passages);});

app.listen(8000);