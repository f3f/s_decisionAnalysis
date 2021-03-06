var timeFlag = "近一年";
var parentId = "";
changeNavTo('流通追溯');
layui.use('form',function () {
  var form = layui.form();
  form.on("select(type)",function(data){
    var params = {
      parentId:data.value
    }
    myChart2();
    myChart3();
    myChart4();
    myChart5();
    // 请求下拉框数据
    getAjax("farmProSalesAnalysis/searchProType",randomSelect,params);
  });
  form.on("select(time1)",function(data){
    var params = {
      timeFlag:data.value
    };
    //流通追溯--2017年遵化农产品流向区域分析--地图
    myChart1();
    getAjax("farmProSalesAnalysis/searchProByType",myChart1,params)
  });
  form.on("select(time2)",function(data){
    var params = {
      timeFlag:data.value
    };
    myChart2();
    myChart3();
    myChart4();
    myChart5();
    //流通追溯-农产品流出品种量占比分析
    getAjax("farmProSalesAnalysis/searchProByType",myChart2,params)
    //流通追溯-2017年农产品流出量趋势分析
    getAjax("farmProSalesAnalysis/searchSubjectByType",myChart3,params)
    //流通追溯-农产品流入品种量占比分析
    getAjax("farmProSalesAnalysis/searchSalesFlow",myChart4,params)
    //流通追溯-2017年农产品流入量趋势分析
    getAjax("farmProSalesAnalysis/searchCustomerPay",myChart5,params)
  });
  form.on("select(time3)",function(data){
    var params = {
      timeFlag:data.value
    };
    //流通追溯-2017农产品流出总量企业排名
    getAjax("farmProSalesAnalysis/searchSalesFlow",myChart6,params)
    myChart6();
    //流通追溯-2017农产品流入总量企业排名
    getAjax("farmProSalesAnalysis/searchCustomerPay",myChart8,params)
    myChart8();
  });
})
// 初始化渲染页面所有图表
function randomEchart(timeFlag){
  var params = {
    timeFlag: timeFlag,

  };
  // 请求下拉框数据
  getAjax("farmProSalesAnalysis/searchProType",randomSelect);
  //流通追溯--2017年遵化农产品流向区域分析--地图
  getAjax("farmProSalesAnalysis/searchProByType",myChart1,params)
  //流通追溯-农产品流出品种量占比分析
  getAjax("farmProSalesAnalysis/searchProByType",myChart2,params)
  //流通追溯-2017年农产品流出量趋势分析
  getAjax("farmProSalesAnalysis/searchSubjectByType",myChart3,params)
  //流通追溯-农产品流入品种量占比分析
  getAjax("farmProSalesAnalysis/searchSalesFlow",myChart4,params)
  //流通追溯-2017年农产品流入量趋势分析
  getAjax("farmProSalesAnalysis/searchCustomerPay",myChart5,params)
  //流通追溯-2017农产品流出总量企业排名
  getAjax("farmProSalesAnalysis/searchSalesFlow",myChart6,params)
  //流通追溯-2017农产品流入总量企业排名
  getAjax("farmProSalesAnalysis/searchCustomerPay",myChart8,params)

}
randomEchart(timeFlag,parentId);
// 请求下拉框数据
function randomSelect(data){
  var listData = data;
  var html = '<option value="">全部</option>';
  html+=  '<option value="">全部</option>';
  listData.forEach(function(v,i){
    html+='<option value="'+v.id+'">'+v.name+'</option>'
  })
  $("#selectType").html(html);
}
myChart1();
myChart2();
myChart3();
myChart4();
myChart5();
myChart6();
myChart8();
 // 饼图
function myChart2() {
  var pieData = {
    id:'myChart2',
    titleData:'农产品流出品种量占比分析',
    nameData:['香白杏','核桃','苹果','板栗','酸枣','山楂','其他'],
    // seriesData:[200,500,300,120,400,380,240]
    seriesData:[randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData()]
  }
  pieHover(pieData)
}
function myChart4() {
  var pieData = {
    id:'myChart4',
    titleData:'农产品流入品种量占比分析',
    nameData:['香白杏','核桃','苹果','板栗','酸枣','山楂','其他'],
    // seriesData:[200,500,300,120,400,380,240]
    seriesData:[randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData()]
  }
  pieHover(pieData)
}
 // 折线图
 function myChart3(){
   var lineData = {
     id:'myChart3',
     titleData:'2017年农产品流出量趋势分析',
     legendData:['蔬菜', '干鲜果', '畜产品', '食用菌', '水产品'],
     xAxisData:['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
     // seriesData:[
     //   [30, 50, 60, 50, 70, 80, 70, 60, 70, 65, 55, 45, 35],
     //   [20, 29, 35, 42, 29, 63, 34, 15, 20, 30, 40 ,50, 60],
     //   [12, 23, 34, 45, 39, 24, 18, 26, 34, 45, 30, 26, 18],
     //   [75, 65, 55, 45, 57, 67, 77, 80, 69, 56, 45, 59, 78],
     //   [40, 60, 50, 70, 90, 80, 60, 70, 65, 46, 57, 68, 79]
     // ]
     seriesData:[
       [randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData()],
       [randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData()],
       [randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData()],
       [randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData()],
       [randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData()]
     ]
   }
   lineRender(lineData)
 }

function myChart5(){
  var lineData = {
    id:'myChart5',
    titleData:'2017年农产品流入量趋势分析',
    legendData:['蔬菜', '干鲜果', '畜产品', '食用菌', '水产品'],
    xAxisData:['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    seriesData:[
      [randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData()],
      [randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData()],
      [randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData()],
      [randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData()],
      [randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData()]
    ]

  }
  lineRender(lineData)
}
// 随机模拟数据
function randomData() {
  return (Math.random()*100).toFixed(2);
}
//柱状横向堆积图
function myChart6() {
  var stackBarData = {
    id:'myChart6',
    titleData:'2017农产品流出总量企业排名',
    legendData:['板栗', '苹果','杏子'],
    yAxisData:['河北栗源','河北美可多','唐山蓝猫','遵化亚太','唐山广野','唐山尚禾源'],
    seriesData:[
      [randomData(), randomData(), randomData(),randomData(),randomData(),randomData()],
      [randomData(), randomData(), randomData(),randomData(),randomData(),randomData()],
      [randomData(), randomData(), randomData(),randomData(),randomData(),randomData()]

    ]
  };
  stackBar(stackBarData)
}

function myChart8() {

  // 随机模拟数据
  function randomData() {
    return (Math.random()*40).toFixed(2);
  }
  var stackBarData = {
    id:'myChart8',
    titleData:'2017农产品流入总量企业排名',
    legendData:['板栗', '苹果','杏子'],
    yAxisData:['河北栗源','河北美可多','唐山蓝猫','遵化亚太','唐山广野','唐山尚禾源'],
    seriesData:[
      [randomData(), randomData(), randomData(),randomData(),randomData(),randomData()]
    ]
  };
  stackBar(stackBarData)
}
function myChart1(){
  $('.myChart1').html('');
  var ChinaMap = ChartLib.ChinaMap;
  /*geoCoordMap是地图上各个城市地理坐标的数组，如果有新的城市添加可以按照如下格式添加进去*/
  var geoCoordMap = {
    '遵化': [117.9728,40.1953],
    '赤峰': [118.8971,42.2619],
    '上海': [121.4648,31.2891],
    '东莞': [113.8953,22.901],
    '东营': [118.7073,37.5513],
    '中山': [113.4229,22.478],
    '临汾': [111.4783,36.1615],
    '临沂': [118.3118,35.2936],
    '丹东': [124.541,40.4242],
    '丽水': [119.5642,28.1854],
    '乌鲁木齐': [87.9236,43.5883],
    '佛山': [112.8955,23.1097],
    '保定': [115.0488,39.0948],
    '兰州': [103.5901,36.3043],
    '包头': [110.3467,41.4899],
    '北京': [116.4551,40.2539],
    '北海': [109.314,21.6211],
    '南京': [118.8062,31.9208],
    '南宁': [108.479,23.1152],
    '南昌': [116.0046,28.6633],
    '南通': [121.1023,32.1625],
    '厦门': [118.1689,24.6478],
    '台州': [121.1353,28.6688],
    '合肥': [117.29,32.0581],
    '呼和浩特': [111.4124,40.4901],
    '咸阳': [108.4131,34.8706],
    '哈尔滨': [127.9688,45.368],
    '唐山': [118.4766,39.6826],
    '嘉兴': [120.9155,30.6354],
    '大同': [113.7854,39.8035],
    '大连': [122.2229,39.4409],
    '天津': [117.4219,39.4189],
    '太原': [112.3352,37.9413],
    '威海': [121.9482,37.1393],
    '宁波': [121.5967,29.6466],
    '宝鸡': [107.1826,34.3433],
    '宿迁': [118.5535,33.7775],
    '常州': [119.4543,31.5582],
    '广州': [113.5107,23.2196],
    '廊坊': [116.521,39.0509],
    '延安': [109.1052,36.4252],
    '张家口': [115.1477,40.8527],
    '徐州': [117.5208,34.3268],
    '德州': [116.6858,37.2107],
    '惠州': [114.6204,23.1647],
    '成都': [103.9526,30.7617],
    '扬州': [119.4653,32.8162],
    '承德': [117.5757,41.4075],
    '拉萨': [91.1865,30.1465],
    '无锡': [120.3442,31.5527],
    '日照': [119.2786,35.5023],
    '昆明': [102.9199,25.4663],
    '杭州': [119.5313,29.8773],
    '枣庄': [117.323,34.8926],
    '柳州': [109.3799,24.9774],
    '株洲': [113.5327,27.0319],
    '武汉': [114.3896,30.6628],
    '汕头': [117.1692,23.3405],
    '江门': [112.6318,22.1484],
    '沈阳': [123.1238,42.1216],
    '沧州': [116.8286,38.2104],
    '河源': [114.917,23.9722],
    '泉州': [118.3228,25.1147],
    '泰安': [117.0264,36.0516],
    '泰州': [120.0586,32.5525],
    '济南': [117.1582,36.8701],
    '济宁': [116.8286,35.3375],
    '海口': [110.3893,19.8516],
    '淄博': [118.0371,36.6064],
    '淮安': [118.927,33.4039],
    '深圳': [114.5435,22.5439],
    '清远': [112.9175,24.3292],
    '温州': [120.498,27.8119],
    '渭南': [109.7864,35.0299],
    '湖州': [119.8608,30.7782],
    '湘潭': [112.5439,27.7075],
    '滨州': [117.8174,37.4963],
    '潍坊': [119.0918,36.524],
    '烟台': [120.7397,37.5128],
    '玉溪': [101.9312,23.8898],
    '珠海': [113.7305,22.1155],
    '盐城': [120.2234,33.5577],
    '盘锦': [121.9482,41.0449],
    '石家庄': [114.4995,38.1006],
    '福州': [119.4543,25.9222],
    '秦皇岛': [119.2126,40.0232],
    '绍兴': [120.564,29.7565],
    '聊城': [115.9167,36.4032],
    '肇庆': [112.1265,23.5822],
    '舟山': [122.2559,30.2234],
    '苏州': [120.6519,31.3989],
    '莱芜': [117.6526,36.2714],
    '菏泽': [115.6201,35.2057],
    '营口': [122.4316,40.4297],
    '葫芦岛': [120.1575,40.578],
    '衡水': [115.8838,37.7161],
    '衢州': [118.6853,28.8666],
    '西宁': [101.4038,36.8207],
    '西安': [109.1162,34.2004],
    '贵阳': [106.6992,26.7682],
    '连云港': [119.1248,34.552],
    '邢台': [114.8071,37.2821],
    '邯郸': [114.4775,36.535],
    '郑州': [113.4668,34.6234],
    '鄂尔多斯': [108.9734,39.2487],
    '重庆': [107.7539,30.1904],
    '金华': [120.0037,29.1028],
    '铜川': [109.0393,35.1947],
    '银川': [106.3586,38.1775],
    '镇江': [119.4763,31.9702],
    '长春': [125.8154,44.2584],
    '长沙': [113.0823,28.2568],
    '长治': [112.8625,36.4746],
    '阳泉': [113.4778,38.0951],
    '青岛': [120.4651,36.3373],
    '韶关': [113.7964,24.7028]
  };
  /*组件需要的数据是如下格式的二维数组*/
  /*[
   [{name:'遵化'}, {name:'北京',value:95}],
   [{name:'遵化'}, {name:'天津',value:90}]
   ];
   每一项的第一个是中心城市，第二项是要流向的城市名字和value值或者来源城市
   */
  var fromData = [
    [{name:'遵化'}, {name:'北京',value:95}],
    [{name:'遵化'}, {name:'天津',value:90}],
    [{name:'遵化'}, {name:'德州',value:80}],
    [{name:'遵化'}, {name:'赤峰',value:70}],
    [{name:'遵化'}, {name:'哈尔滨',value:60}],
    [{name:'遵化'}, {name:'太原',value:50}],
    [{name:'遵化'}, {name:'郑州',value:40}],
    [{name:'遵化'}, {name:'沈阳',value:30}],
    [{name:'遵化'}, {name:'上海',value:20}],
    [{name:'遵化'}, {name:'长春',value:10}]
  ];
  var toData = [
    [{name:'遵化'}, {name:'天津',value:95}],
    [{name:'遵化'}, {name:'拉萨',value:90}],
    [{name:'遵化'}, {name:'济南',value:80}],
    [{name:'遵化'}, {name:'葫芦岛',value:70}],
    [{name:'遵化'}, {name:'赤峰',value:60}],
    [{name:'遵化'}, {name:'哈尔滨',value:50}],
    [{name:'遵化'}, {name:'大同',value:40}],
    [{name:'遵化'}, {name:'长春',value:30}],
    [{name:'遵化'}, {name:'郑州',value:20}],
    [{name:'遵化'}, {name:'乌鲁木齐',value:10}]
  ];
  var chinaMap = new ChinaMap({
    title:'2017年遵化农产品流向区域分析',
    geocoord: geoCoordMap
  });
//这是往组件传递数据的格式
  chinaMap.data ={
    center: {
      name: '遵化'
    },
    cityData: {
      fromData : fromData,
      toData: toData
    }
  };
//下面是获取到页面上要放置组件的盒子，然后把已经布局好的盒子的宽高传递给图表
  var mapBox = document.getElementById('map');
  chinaMap.width = mapBox.clientWidth;
  chinaMap.height = mapBox.clientHeight;
//document.body.appendChild(smallChina.domElement);
  mapBox.appendChild(chinaMap.domElement);
}

