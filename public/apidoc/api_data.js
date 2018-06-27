define({ "api": [
  {
    "type": "get",
    "url": "/activity/page",
    "title": "获取后台发布的活动",
    "name": "page",
    "group": "activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>分页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageNumber",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partyNo",
            "description": "<p>用户党组织代码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "{\"status\":true,\"data\":[{\"id\":1,\"title\":\"测试活动\",\"descs\":\"313131\",\"attachments\":[\"http://localhost:8080/27ec2e0a4f18fdb30b7b7111d21ea3c2.jpg\"],\"address\":\"瑞金路大阳沟鸿福苑小区\",\"organizer\":\"测试活动\",\"sponsor\":\"测试活动\",\"starttime\":\"2018-04-30T16:00:00.000Z\",\"endtime\":\"2018-05-09T16:00:00.000Z\",\"status\":1,\"type1\":1,\"type2\":1,\"type3\":1,\"createdAt\":\"2018-05-29T02:39:17.000Z\"}],\"sql\":\"select * from activity order by createdAt desc limit 0,10\",\"counts\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败",
          "content": "{\"status\":false}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/activity.js",
    "groupTitle": "activity"
  },
  {
    "type": "get",
    "url": "/artical/page",
    "title": "获取后台发布的文章",
    "name": "page",
    "group": "artical",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>分页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageNumber",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partyNo",
            "description": "<p>用户党组织代码，可选 不填则返回全部文章</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>文章类型 1学习资料  2学习视频  3党务公开  3支部风采  5党风建设 可选 不填则返回全部类型</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "{\"status\":true,\"data\":[{\"id\":1,\"title\":\"测试任务\",\"descs\":\"测试任务\",\"attachments\":[\"http://localhost:8080/d88f71e289b8a43f62b7d64e443ee61b.jpg\"],\"starttime\":\"2018-05-03T16:00:00.000Z\",\"endtime\":\"2018-05-08T16:00:00.000Z\",\"status\":1,\"type1\":1,\"type2\":1,\"type3\":1,\"createdAt\":\"2018-05-29T03:00:07.000Z\"}],\"sql\":\"select * from artical order by createdAt desc limit 0,10\",\"counts\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败",
          "content": "{\"status\":false}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/artical.js",
    "groupTitle": "artical"
  },
  {
    "type": "get",
    "url": "/banner/page",
    "title": "获取后台发布的轮播图",
    "name": "page",
    "group": "banner",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>分页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageNumber",
            "description": "<p>页码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "{\"status\":true,\"data\":[{\"id\":1,\"name\":\"认真学习党的思想\",\"descs\":\"认真学习党的思想，认真学习党的思想\",\"type\":1,\"orders\":1,\"imgs\":[\"http://localhost:8080/3cda636d61540a9caebb0e43abdad65f.jpg\",\"http://localhost:8080/b9f2624099244c968d3670c316e80170.jpg\",\"http://localhost:8080/53a36f4557cc784363257638a026135e.jpg\"],\"createdAt\":\"2018-06-20T03:05:43.000Z\"}],\"counts\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败",
          "content": "{\"status\":false}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/banner.js",
    "groupTitle": "banner"
  },
  {
    "type": "get",
    "url": "/djySpider/ActivitiesDetail",
    "title": "“津南党建”新闻 详情",
    "name": "ActivitiesDetail",
    "group": "djy",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cookie",
            "description": "<p>cookie</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tid",
            "description": "<p>新闻id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "{\"status\":true,\"data\":{\"imgs\":[{\"url\":\"https://file.dangjianwang.com/WebView/view?type=img&id=1840711&salt=asmw&width=900&height=506\"},{\"url\":\"https://file.dangjianwang.com/WebView/view?type=img&id=1840711&salt=asmw&width=900&height=506\"},{\"url\":\"https://file.dangjianwang.com/WebView/view?type=img&id=1840711&salt=asmw&width=900&height=506\"}],\"text\":\"区民宗办组织全体干部深入学习纪念中共中央发布“五一口号”70周年座谈会中共中央政治局常委、全国政协主席汪洋同志重要讲话及我市纪念大会上市委书记李鸿忠同志的讲话精神。通过学习，干部们更充分地理解了“五一口号”发布70年来，中国共产党与各民主党派、无党派人士勠力同心、团结奋斗，共同走过了不平凡的光辉历程；更深刻地认识了中国共产党领导的多党合作和政治协商制度是从中国土壤中生长出来的新型政党制度；更加坚定地明确了我国新型政党制度的理论特色、实践特色、时代特色。\"}}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败",
          "content": "{\n               status: false,\n               msg: \"爬取出错\"\n           }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/djySpider.js",
    "groupTitle": "djy"
  },
  {
    "type": "get",
    "url": "/djySpider/GetMoreActivities",
    "title": "党建云“津南党建”新闻",
    "name": "GetMoreActivities",
    "group": "djy",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cookie",
            "description": "<p>cookie</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>type不知道什么用，传3就行</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pg",
            "description": "<p>pg分页</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>keyword搜索词</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "{\"status\":true,\"data\":{\"source\":\"津南区级机关工作委员会-区民宗办党支部\",\"time\":\"2018-05-28\",\"browses\":\"2\",\"comments\":\"2\",\"collections\":\"0\",\"title1\":\"区民宗办组织全体干部深入学习纪念中共中央发布“五一口号”70周年座谈会精神\",\"title\":\"区民宗办组织全体干部深入学习纪念中共中央发布“五一...\",\"url\":\"/Activities/Detail?tid=560426\",\"viewed\":0,\"sign\":\"<span class=\\\"unit-name\\\"><em class=\\\"jgdzb\\\">机关党支部</em><span>|</span></span>\",\"cover\":\"https://file.dangjianwang.com/WebView/view?type=img&id=1840711&salt=asmw&width=150&height=100\",\"push_status\":0,\"push_url\":\"javascript:;\"},{\"source\":\"区市容园林委党总支-津南区渣土所党支部\",\"time\":\"2018-05-28\",\"browses\":\"7\",\"comments\":\"5\",\"collections\":\"0\",\"title1\":\"渣土所传达落实区市容园林委不担当三年行动方案布置会\",\"title\":\"渣土所传达落实区市容园林委不担当三年行动方案布置会\",\"url\":\"/Activities/Detail?tid=560323\",\"viewed\":0,\"sign\":\"<span class=\\\"unit-name\\\"><em class=\\\"jgdzb\\\">党支部</em><span>|</span></span>\",\"cover\":\"https://file.dangjianwang.com/WebView/view?type=img&id=1840382&salt=ljvi&width=150&height=100\",\"push_status\":0,\"push_url\":\"javascript:;\"}}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败",
          "content": "{\n               status: false,\n               msg: \"爬取出错\"\n           }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/djySpider.js",
    "groupTitle": "djy"
  },
  {
    "type": "get",
    "url": "/djySpider/shyk",
    "title": "三会一课",
    "name": "shyk",
    "group": "djy",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cookie",
            "description": "<p>cookie 必填</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>必填 类型 可传1~9的值对应网站上9个分类</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start",
            "description": "<p>可选 从第x条开始</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>可选 关键词</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dept_id",
            "description": "<p>可选 部门</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_time",
            "description": "<p>可选 开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_time",
            "description": "<p>可选 结束时间</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "{\"status\":true,\"data\":[[{\"text\":\"区粮贸公司机关党支部组织开展集中学习活动\"},{\"text\":\"刘悦2018-04-08\"},{\"text\":\"刘悦2018-04-08\"},{\"text\":\"已备案\"},{\"text\":\"重新备案查看个人详情\",\"id\":\"494048\"}],[{\"text\":\"组织生活会及民主评议党员\"},{\"text\":\"翟风伟2018-03-14\"},{\"text\":\"李晓岭2018-03-26\"},{\"text\":\"已备案\"},{\"text\":\"重新备案查看个人详情\",\"id\":\"465552\"}]]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败",
          "content": "{\n               status: false,\n               msg: \"爬取出错\"\n           }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/djySpider.js",
    "groupTitle": "djy"
  },
  {
    "type": "get",
    "url": "/djySpider/shyk_view",
    "title": "三会一课详情查看",
    "name": "shyk_view",
    "group": "djy",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cookie",
            "description": "<p>cookie 必填</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>必填 从shyk接口获得</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "{\"status\":true,\"data\":\"<tbody><tr><td class=\\\"text-center\\\" colspan=\\\"4\\\">党员大会会议记录</td></tr><tr><td class=\\\"text-center\\\" style=\\\"width:125px;\\\">所在组织</td><td colspan=\\\"3\\\"><input type=\\\"text\\\" style=\\\"width:650px;\\\" readonly value=\\\"粮油贸易有限公司党委 - 粮油贸易有限公司机关党支部\\\"></td></tr><tr><td class=\\\"text-center\\\" style=\\\"width:125px;\\\">会议主题</td><td colspan=\\\"3\\\"><input type=\\\"text\\\" style=\\\"width:650px;\\\" readonly value=\\\"区粮贸公司机关党支部组织开展集中学习活动\\\"></td></tr><tr><td class=\\\"text-center\\\" style=\\\"width:125px;\\\">活动时间</td><td style=\\\"width: 210px;\\\"><input type=\\\"text\\\" style=\\\"width:260px;\\\" readonly value=\\\"2018-04-08\\\"></td><td class=\\\"text-center\\\" style=\\\"width:125px;\\\">活动地点</td><td><input type=\\\"text\\\" style=\\\"width:150px;\\\" readonly value=\\\"公司党员活动室\\\"></td></tr><tr><td class=\\\"text-center\\\" style=\\\"width:125px;\\\">主持人</td><td colspan=\\\"3\\\"><input type=\\\"text\\\" style=\\\"width:650px;\\\" readonly value=\\\"李超英\\\"></td></tr><tr><td class=\\\"text-center\\\" style=\\\"width:125px;\\\">应到党员</td><td colspan=\\\"3\\\"><input type=\\\"text\\\" style=\\\"width:650px;\\\" readonly value=\\\"潘春红;孙忠荣;李金禄;闻淑龙;李超英;龚娜;刘悦;杜向臣;陈浩\\\"></td></tr><tr><td class=\\\"text-center\\\" style=\\\"width:125px;\\\">实到党员</td><td colspan=\\\"3\\\"><input type=\\\"text\\\" style=\\\"width:650px;\\\" readonly value=\\\"潘春红;孙忠荣;李金禄;闻淑龙;李超英;龚娜;刘悦;杜向臣;陈浩\\\"></td></tr><tr><td colspan=\\\"4\\\"><div>学习内容：<br><textarea style=\\\"padding:14px; border:0; outline: none; resize:none; font-size:16px; width: 780px;\\\" name=\\\"content\\\" id=\\\"\\\" cols=\\\"30\\\" rows=\\\"10\\\" readonly>区粮贸公司机关党支部组织开展集中学习活动。一是传达学习了“全国优秀组织工作干部”杨汉军同志先进事迹，号召全体党员学习他信念坚定、对党忠诚、公道正派、清正廉洁的政治品格，学习他拼搏奉献、精于业务的工匠精神，学习他生命不息、奋斗不止的扎实作风；二是组织收看了“两会”相关新闻视频，学习“两会”精神及习近平总书记讲话精神，把思想认识行动统一到习近平总书记重要讲话和“两会”精神上来，坚持以习近平新时代中国特色社会主义思想为指引，深刻领会精神实质，结合本岗工作抓好贯彻落实。</textarea></div></td></tr><tr><td colspan=\\\"4\\\"><div>图片：<br><ul class=\\\"image-list clearfix\\\"><li><img src=\\\"https://file.dangjianwang.com/WebView/view?type=img&id=1616303&salt=htpr&width=300&height=200\\\" alt=\\\"IMG_6226学习杨汉军.jpg\\\"></li><li><img src=\\\"https://file.dangjianwang.com/WebView/view?type=img&id=1616305&salt=bwcb&width=300&height=200\\\" alt=\\\"IMG_6229.JPG\\\"></li><li><img src=\\\"https://file.dangjianwang.com/WebView/view?type=img&id=1616308&salt=gevy&width=300&height=200\\\" alt=\\\"IMG_6231.JPG\\\"></li></ul></div></td></tr><tr><td colspan=\\\"4\\\"><div>附件：<br><ul class=\\\"file-list\\\"></ul></div></td></tr><tr><td class=\\\"text-center\\\" style=\\\"width:125px;\\\">填报人</td><td style=\\\"width: 180px;\\\"><input type=\\\"text\\\" style=\\\"width:260px;\\\" readonly value=\\\"刘悦\\\"></td><td class=\\\"text-center\\\" style=\\\"width:125px;\\\">填报时间</td><td><input type=\\\"text\\\" style=\\\"width:150px;\\\" readonly value=\\\"2018-04-08\\\"></td></tr><tr><td class=\\\"text-center\\\" style=\\\"width:125px;\\\">备案管理</td><td style=\\\"width: 180px;\\\"><input type=\\\"text\\\" style=\\\"width:260px;\\\" value=\\\"粮油贸易有限公司党委\\\"></td><td class=\\\"text-center\\\" style=\\\"width:125px;\\\">审核时间</td><td><input type=\\\"text\\\" style=\\\"width:150px;\\\" readonly value=\\\"2018-04-08\\\"></td></tr><tr><td class=\\\"text-center\\\" style=\\\"width:125px;\\\">备案状态</td><td colspan=\\\"3\\\"><input type=\\\"text\\\" style=\\\"width:650px;\\\" readonly value=\\\"已备案\\\"></td></tr><tr><td class=\\\"text-center\\\" style=\\\"width:125px;\\\">意见</td><td colspan=\\\"3\\\"><input type=\\\"text\\\" style=\\\"width:650px;\\\" readonly value=\\\"同意\\\"></td></tr></tbody>\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败",
          "content": "{\n               status: false,\n               msg: \"爬取出错\"\n           }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/djySpider.js",
    "groupTitle": "djy"
  },
  {
    "type": "get",
    "url": "/djySpider/userInfo",
    "title": "获取党建云用户信息",
    "name": "userInfo",
    "group": "djy",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cookie",
            "description": "<p>cookie</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "{\"status\":true,\"userInfo\":{\"username\":\"李金妹\",\"userinfo-exp\":\"2077/2500\",\"userinfo-level\":\"LV4\",\"userinfo-company\":\"区国资委党委\",\"userinfo-branch\":\"区国资委机关党支部\"}}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败",
          "content": "{\n               status: false,\n               msg: \"爬取出错\"\n           }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/djySpider.js",
    "groupTitle": "djy"
  },
  {
    "type": "get",
    "url": "/notification/page",
    "title": "获取通知",
    "name": "page",
    "group": "notification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>分页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageNumber",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>通知类型 1岗位任务通知 2个人任务通知  3其他通知 可选 不填则返回全部类型通知</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "{\"status\":true,\"data\":[{\"id\":8,\"notificationTitle\":\"你有新的任务\",\"title\":\"34535\",\"descs\":\"34535\",\"attachments\":[],\"status\":0,\"fromId\":10,\"type\":1,\"userId\":1,\"createdAt\":\"2018-06-22T07:07:34.000Z\"},{\"id\":4,\"notificationTitle\":\"你有新的任务\",\"title\":\"12313\",\"descs\":\"1313\",\"attachments\":[],\"status\":0,\"fromId\":9,\"type\":1,\"userId\":1,\"createdAt\":\"2018-06-22T06:50:56.000Z\"}],\"counts\":2}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败",
          "content": "{\"status\":false}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/notification.js",
    "groupTitle": "notification"
  },
  {
    "type": "get",
    "url": "/notification/update",
    "title": "更新通知状态为已读/未读",
    "name": "update",
    "group": "notification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>通知id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>1已读 0未读</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "{\"status\":true}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败",
          "content": "{\"status\":false}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/notification.js",
    "groupTitle": "notification"
  },
  {
    "type": "POST",
    "url": "/task/finish",
    "title": "完成任务",
    "name": "finish",
    "group": "task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>用户id 必填</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "taskId",
            "description": "<p>任务id 必填</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "period",
            "description": "<p>任务周期 对应任务的type2 必填</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>任务提交的内容 提交的json字符串 必填</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partyNo",
            "description": "<p>当前用户的党组织代码 必填</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "targetPositionId",
            "description": "<p>如果page接口有返回该字段则提交 可选</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "{\"status\":true}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败",
          "content": "{\"status\":false}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/task.js",
    "groupTitle": "task"
  },
  {
    "type": "POST",
    "url": "/task/finish_position1",
    "title": "书记完成任务",
    "name": "finish_position1",
    "group": "task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "taskId",
            "description": "<p>任务id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "partyNo",
            "description": "<p>用户党组织代码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "period",
            "description": "<p>任务周期 对应任务的type2</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>任务提交的内容 提交的json字符串</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "{\"status\":true}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败",
          "content": "{\"status\":false}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/task.js",
    "groupTitle": "task"
  },
  {
    "type": "get",
    "url": "/task/page",
    "title": "获取后台发布的任务",
    "name": "page",
    "group": "task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>分页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageNumber",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partyNo",
            "description": "<p>用户党组织代码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "positionId",
            "description": "<p>用户岗位id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type3",
            "description": "<p>任务类型 1岗位 2个人 可选</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "{\"status\":true,\"data\":[{\"id\":1,\"title\":\"测试任务\",\"descs\":[{\"element\":\"input\",\"type\":\"text\",\"title\":\"234\"},{\"element\":\"textarea\",\"type\":\"text\",\"title\":\"234324\"},{\"element\":\"input\",\"type\":\"date\",\"title\":\"2424\"}],\"attachments\":[\"http://localhost:8080/d88f71e289b8a43f62b7d64e443ee61b.jpg\"],\"starttime\":\"2018-05-03T16:00:00.000Z\",\"endtime\":\"2018-05-08T16:00:00.000Z\",\"status\":1,\"type1\":1,\"type2\":1,\"type3\":1,\"createdAt\":\"2018-05-29T03:00:07.000Z\"}],\"sql\":\"select * from task order by createdAt desc limit 0,10\",\"counts\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败",
          "content": "{\"status\":false}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/task.js",
    "groupTitle": "task"
  },
  {
    "type": "GET",
    "url": "/task/page_finished",
    "title": "获取已完成的任务提交的数据",
    "name": "page_finished",
    "group": "task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageNumber",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>用户id 必填</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "taskId",
            "description": "<p>任务id 必填</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "{\"status\":true,\"data\":[{\"id\":13,\"title\":null,\"taskId\":27,\"userId\":1,\"status\":null,\"attachments\":null,\"content\":[{\"element\":\"input\",\"type\":\"text\",\"title\":\"123213213\",\"value\":\"123213\"},{\"element\":\"input\",\"type\":\"selectperson\",\"title\":\"2131313\",\"value\":\"11,22,33,44,\"},{\"element\":\"textarea\",\"type\":\"text\",\"title\":\"123213\",\"value\":\"32132131321\"}],\"createdAt\":\"2018-06-26 19:48:20\"}],\"counts\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败",
          "content": "{\"status\":false}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/task.js",
    "groupTitle": "task"
  },
  {
    "type": "post",
    "url": "/user/bindDJY",
    "title": "绑定党建云账号",
    "name": "bindDJY",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "loginname",
            "description": "<p>先锋网用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pwd",
            "description": "<p>先锋网密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userid",
            "description": "<p>用户id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "{\"status\":true,\"msg\":\"绑定成功\",\"result\":{\"cookie\":\"PHPSESSID=h7tfiaihofn41manc6a7ikmn85\",\"userName\":\"李金妹\",\"danwei\":\"· 区国资委党委 - 区国资委机关党支部\"}}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败",
          "content": "{\"status\":false,\"msg\":\"绑定失败\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user/bindXFW",
    "title": "绑定先锋网账号",
    "name": "bindXFW",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "loginname",
            "description": "<p>先锋网用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pwd",
            "description": "<p>先锋网密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userid",
            "description": "<p>用户id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "{\"status\":true,\"msg\":\"绑定成功\",\"result\":{\"cookie\":\"JSESSIONID=8233376ABEDAEE72F6EEC1304E1B7021\"}}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败",
          "content": "{\"status\":false,\"msg\":\"绑定失败\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user/djyPoints",
    "title": "更新党建云积分",
    "name": "djyPoints",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "points",
            "description": "<p>学时</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "{\"status\":true}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败",
          "content": "{\"status\":false}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "登录接口",
    "name": "login",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "loginname",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pwd",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "{\"status\":true,\"data\":{\"id\":1,\"password\":\"111111\",\"loginname\":\"test\",\"positionName\": \"书记\",\"positionId\": 1,\"nickname\":null,\"position\":null,\"age\":null,\"gender\":null,\"phone\":null,\"email\":null,\"idcardno\":null,\"djyLoginname\":\"13642075123\",\"djyPassword\":\"123456\",\"xfwLoginname\":\"120112320000\",\"xfwPassword\":\"123456\",\"djyPoints\":null,\"xfwPoints\":null,\"partyNo\":\"001010001\"},\"djy\":{\"cookie\":\"PHPSESSID=cruiou4k1347hvs29jovvf5dm1\",\"userName\":\"李金妹\",\"danwei\":\"· 区国资委党委 - 区国资委机关党支部\"},\"xfw\":{\"cookie\":\"JSESSIONID=264A11B661F5BDF1B0A7AA555567A891\"}}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败",
          "content": "{\"status\":false,\"msg\":\"用户名或密码错误\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "user"
  },
  {
    "type": "get",
    "url": "/user/page",
    "title": "获取用户信息",
    "name": "page",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageNumber",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "{\"status\":true,\"data\":[{\"id\":1,\"password\":\"111111\",\"loginname\":\"test\",\"nickname\":null,\"positionName\":\"书记\",\"positionId\":1,\"age\":null,\"gender\":null,\"phone\":null,\"email\":null,\"idcardno\":null,\"djyLoginname\":\"13642075123\",\"djyPassword\":\"123456\",\"xfwLoginname\":\"120112320100\",\"xfwPassword\":\"123456\",\"xfwType\":0,\"djyType\":0,\"djyPoints\":\"2\",\"xfwPoints\":\"2\",\"partyNo\":\"001010001\",\"imgs\":[]}]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败",
          "content": "{\"status\":false}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user/partys",
    "title": "获取全部党组织机构",
    "name": "partys",
    "group": "user",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "{\"status\":true,\"results\":[{\"id\":1,\"partyNo\":\"001\",\"partyName\":\"中共天津市津南区人民政府国有资产监督管理委员会委员会\",\"responsibility\":\"暂无\"},{\"id\":2,\"partyNo\":\"001001\",\"partyName\":\"中共天津市津南区人民政府国有资产监督管理委员会机关党支部\",\"responsibility\":\"暂无\"},{\"id\":3,\"partyNo\":\"001002\",\"partyName\":\"中共天津市津南区粮油贸易有限公司委员会\",\"responsibility\":\"暂无\"},{\"id\":4,\"partyNo\":\"001003\",\"partyName\":\"中共天津市津南区咸水沽储运贸易有限公司支部委员会\",\"responsibility\":\"暂无\"},{\"id\":5,\"partyNo\":\"001004\",\"partyName\":\"中共天津市津南区谷星粮油加工有限公司支部委员会\",\"responsibility\":\"暂无\"},{\"id\":6,\"partyNo\":\"001005\",\"partyName\":\"中共天津市津南区军粮供应站支部委员会\",\"responsibility\":\"暂无\"},{\"id\":7,\"partyNo\":\"001006\",\"partyName\":\"中共天津市津南区粮油贸易有限公司机关支部委员会\",\"responsibility\":\"暂无\"},{\"id\":8,\"partyNo\":\"001007\",\"partyName\":\"中共天津金谷鑫农种业有限公司支部委员会\",\"responsibility\":\"暂无\"},{\"id\":9,\"partyNo\":\"001008\",\"partyName\":\"中共天津市津南区粮食购销有限公司总支委员会\",\"responsibility\":\"暂无\"},{\"id\":10,\"partyNo\":\"001009\",\"partyName\":\"中共天津市津南区粮食购销有限公司机关支部委员会\",\"responsibility\":\"暂无\"},{\"id\":11,\"partyNo\":\"001010\",\"partyName\":\"中国天津津南国家粮食储备库支部委员会\",\"responsibility\":\"暂无\"},{\"id\":12,\"partyNo\":\"001011\",\"partyName\":\"中共天津市津南区小站粮食购销有限公司支部委员会\",\"responsibility\":\"暂无\"},{\"id\":13,\"partyNo\":\"001012\",\"partyName\":\"中共天津市津南区诚信粮食销售有限公司支部委员会\",\"responsibility\":\"暂无\"},{\"id\":14,\"partyNo\":\"001013\",\"partyName\":\"中共天津市津南区诚信粮食销售有限公司支部委员会\",\"responsibility\":\"暂无\"},{\"id\":15,\"partyNo\":\"001014\",\"partyName\":\"中共天津富凯建设集团有限公司支部委员会\",\"responsibility\":\"暂无\"},{\"id\":16,\"partyNo\":\"001015\",\"partyName\":\"中共天津市津南区建设开发公司支部委员会\",\"responsibility\":\"暂无\"},{\"id\":17,\"partyNo\":\"001016\",\"partyName\":\"中共天津津南城市建设投资有限公司支部\",\"responsibility\":\"暂无\"},{\"id\":18,\"partyNo\":\"001010001\",\"partyName\":\"津南国储库第一党小组\",\"responsibility\":\"暂无\"},{\"id\":19,\"partyNo\":\"001010002\",\"partyName\":\"津南国储库第二党小组\",\"responsibility\":\"暂无\"},{\"id\":20,\"partyNo\":\"001014001\",\"partyName\":\"第一党小组\",\"responsibility\":\"暂无\"},{\"id\":21,\"partyNo\":\"001014002\",\"partyName\":\"第二党小组\",\"responsibility\":\"暂无\"},{\"id\":22,\"partyNo\":\"001014003\",\"partyName\":\"第三党小组\",\"responsibility\":\"暂无\"},{\"id\":23,\"partyNo\":\"001014004\",\"partyName\":\"第四党小组\",\"responsibility\":\"暂无\"}]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败",
          "content": "{\"status\":false}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user/positions",
    "title": "获取用户全部的岗位列表",
    "name": "positions",
    "group": "user",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "{\"status\":true,\"results\":[{\"id\":1,\"positionName\":\"书记\",\"positionDesc\":\"\"},{\"id\":2,\"positionName\":\"副书记\",\"positionDesc\":\"\"},{\"id\":3,\"positionName\":\"组织委员\",\"positionDesc\":\"\"},{\"id\":4,\"positionName\":\"宣传委员\",\"positionDesc\":\"\"},{\"id\":5,\"positionName\":\"纪检委员\",\"positionDesc\":\"\"},{\"id\":6,\"positionName\":\"党小组组长\",\"positionDesc\":\"\"},{\"id\":7,\"positionName\":\"普通党员\",\"positionDesc\":\"\"}]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败",
          "content": "{\"status\":false}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user/reg",
    "title": "注册接口",
    "name": "reg",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "loginname",
            "description": "<p>用户名 必填</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pwd",
            "description": "<p>密码 必填</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partyNo",
            "description": "<p>组织编号 必填</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "positionId",
            "description": "<p>岗位id 必填 从/user/positions接口获取</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "positionName",
            "description": "<p>岗位名称 必填 从/user/positions接口获取</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>昵称/真是姓名 选填</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "position",
            "description": "<p>职位 选填</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>年龄 选填</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>性别0/1 选填</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号 选填</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱 选填</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idcardno",
            "description": "<p>身份证号 选填</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "{\"status\":true,\"msg\":\"注册成功\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败",
          "content": "{\"status\":false,\"msg\":\"用户名或密码错误\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user/xfwPoints",
    "title": "更新先锋网学时",
    "name": "xfwPoints",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "points",
            "description": "<p>学时</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "{\"status\":true}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败",
          "content": "{\"status\":false}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user/yearassessmentAdd",
    "title": "提交年度考核",
    "name": "yearassessmentAdd",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>用户id 必填</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>总分</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "score1",
            "description": "<p>得分项</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "score2",
            "description": "<p>得分项</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "score3",
            "description": "<p>得分项</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "score4",
            "description": "<p>得分项</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "score5",
            "description": "<p>得分项</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "score6",
            "description": "<p>得分项</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "score7",
            "description": "<p>得分项</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "score8",
            "description": "<p>得分项</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "score9",
            "description": "<p>得分项</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "score10",
            "description": "<p>得分项</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "score11",
            "description": "<p>得分项</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "score12",
            "description": "<p>得分项</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "score13",
            "description": "<p>得分项</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "score14",
            "description": "<p>得分项</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "score15",
            "description": "<p>得分项</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "score16",
            "description": "<p>得分项</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "score17",
            "description": "<p>得分项</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "score18",
            "description": "<p>得分项</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "score19",
            "description": "<p>得分项</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "score20",
            "description": "<p>得分项</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "{\"status\":true}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败",
          "content": "{\"status\":false}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/xfwSpider/depts",
    "title": "党组织层级数据，搜索时用到",
    "name": "depts",
    "group": "xfwSpider",
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "{\"status\":true,\"data\":{\"id\":\"13ff00bc60d74d9eac11b2538a0cf9cc\",\"text\":\"机关党支部\"}}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败",
          "content": "{\n               status: false,\n               msg: \"爬取出错\"\n           }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/xfwSpider.js",
    "groupTitle": "xfwSpider"
  },
  {
    "type": "post",
    "url": "/xfwSpider/fileupload",
    "title": "添加会议记录时上传图片",
    "name": "fileupload",
    "group": "xfwSpider",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cookie",
            "description": "<p>cookie</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imgBase64",
            "description": "<p>base64图片</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "{\"oldname\":\"e2e4c0d3fb399f4e286458212bbc0081.jpg\",\"size\":0,\"uporder\":\"20180531125035477\",\"newname\":\"fcdc7f41dff6495aa1b089783c41cf86.jpg\",\"type\":\"jpg\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败",
          "content": "{\"status\":false,\"msg\":\"爬取出错\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/xfwSpider.js",
    "groupTitle": "xfwSpider"
  },
  {
    "type": "post",
    "url": "/xfwSpider/shyk",
    "title": "三会一课列表",
    "name": "shyk",
    "group": "xfwSpider",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cookie",
            "description": "<p>cookie 必填</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shykType",
            "description": "<p>会议类型 必填 0支部党员会 1支部委员会 2党小组会 3党课</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "createdepartmentid",
            "description": "<p>组织id 默认空即可</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "departmentname",
            "description": "<p>组织名称 默认空即可</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "departmenttype",
            "description": "<p>搜索层级 now本级 down包含下级</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cpc_user_id",
            "description": "<p>留空</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>搜索词</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shijianBegin",
            "description": "<p>搜索开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shijianEnd",
            "description": "<p>搜索结束时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageNumber",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>分页长度</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "{\"status\":true,\"data\":[[{\"text\":\"机关党支部民主评议工作\"},{\"text\":\"2018-03-16\"},{\"text\":\"已备案\"},{\"text\":\"查看修改删除个人详情\",\"id\":\"575892\"}],[{\"text\":\"十九大专题学习\"},{\"text\":\"2017-12-01\"},{\"text\":\"已备案\"},{\"text\":\"查看修改删除个人详情\",\"id\":\"499055\"}]]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败",
          "content": "{\n               status: false,\n               msg: \"爬取出错\"\n           }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/xfwSpider.js",
    "groupTitle": "xfwSpider"
  },
  {
    "type": "post",
    "url": "/xfwSpider/shyk_delete",
    "title": "删除会议记录 客户真实数据不要删除",
    "name": "shyk_delete",
    "group": "xfwSpider",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cookie",
            "description": "<p>先锋网cookie 可选 填写则提交到对应网站 两个最少填写1个</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cookie_djy",
            "description": "<p>党建云cookie 可选 填写则提交到对应网站 两个最少填写1个</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>会议记录的id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "{\"status\":true,\"msg\": \"删除成功\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败",
          "content": "{\n               \"status\": false,\n               \"msg\": \"爬取出错\"\n           }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/xfwSpider.js",
    "groupTitle": "xfwSpider"
  },
  {
    "type": "get",
    "url": "/xfwSpider/shyk_delfile",
    "title": "修改会议时删除文件",
    "name": "shyk_delfile",
    "group": "xfwSpider",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cookie",
            "description": "<p>cookie</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fid",
            "description": "<p>文件id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shykType",
            "description": "<p>会议类型 0 1 2 3</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "{\"status\":true, \"msg\": \"删除成功\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败",
          "content": "{\"status\":false, \"msg\": \"删除失败\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/xfwSpider.js",
    "groupTitle": "xfwSpider"
  },
  {
    "type": "post",
    "url": "/xfwSpider/shyk_save",
    "title": "添加会议记录",
    "name": "shyk_save",
    "group": "xfwSpider",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cookie",
            "description": "<p>先锋网cookie 可选 填写则提交到对应网站 两个最少填写1个</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cookie_djy",
            "description": "<p>党建云cookie 可选 填写则提交到对应网站 两个最少填写1个</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>app用户id  必填</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shykType",
            "description": "<p>会议类型 必填 0支部党员会 1支部委员会 2党小组会 3党课</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "others",
            "description": "<p>其他参数 按照web端实际参数上传</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "{\"status\":true}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败",
          "content": "{\n               \"status\": false,\n               \"msg\": \"爬取出错\"\n           }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/xfwSpider.js",
    "groupTitle": "xfwSpider"
  },
  {
    "type": "post",
    "url": "/xfwSpider/shyk_update",
    "title": "修改会议记录",
    "name": "shyk_update",
    "group": "xfwSpider",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cookie",
            "description": "<p>cookie</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>会议记录的id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shykType",
            "description": "<p>会议类型 必填 0支部党员会 1支部委员会 2党小组会 3党课</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "others",
            "description": "<p>其他参数 根据网页端的参数传</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "{status:true}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败",
          "content": "{\n               status: false,\n               msg: \"爬取出错\"\n           }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/xfwSpider.js",
    "groupTitle": "xfwSpider"
  },
  {
    "type": "get",
    "url": "/xfwSpider/shyk_updateparams",
    "title": "修改会议时时获取记录的参数",
    "name": "shyk_updateparams",
    "group": "xfwSpider",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cookie",
            "description": "<p>cookie</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>会议记录的id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shykType",
            "description": "<p>会议类型 0 1 2 3</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "{\"status\":true,\"data\":{\"inputs\":[{\"type\":\"hidden\",\"name\":\"id\",\"value\":\"575892\"},{\"id\":\"basePath\",\"type\":\"hidden\",\"value\":\"http://tjdyda.tjzzb.gov.cn:80/\"}],\"files\":[{\"fid\":\"325c0e33c6f141ee948a14395648ba7a\",\"fname\":\"123_副本_副本.png\",\"_fname\":\"81f0f288077e40459a4b6aa8ad0a303e.png\"},{\"fid\":\"b839f8d9ffae4067bb762e98b489a43b\",\"fname\":\"微信图片_20180408140211.jpg\",\"_fname\":\"79533a1fe9bf4f35ba8e9861a1dcbded.jpg\"}],\"users\":[{\"departmenttype\":null,\"role\":null,\"sex\":null,\"shengri\":null,\"oldpassword\":null,\"createdateString\":null,\"createdate\":null,\"sort\":null,\"type\":null,\"password\":null,\"repassword\":null,\"toplevel\":null,\"post\":null,\"shengriString\":null,\"departmentname\":null,\"contact\":null,\"idcard\":\"23202db12f744889b76d6d6803f116d9\",\"name\":\"孙兆彬\",\"banben\":null,\"id\":\"23202db12f744889b76d6d6803f116d9\",\"department\":null,\"maintype\":null},{\"departmenttype\":null,\"role\":null,\"sex\":null,\"shengri\":null,\"oldpassword\":null,\"createdateString\":null,\"createdate\":null,\"sort\":null,\"type\":null,\"password\":null,\"repassword\":null,\"toplevel\":null,\"post\":null,\"shengriString\":null,\"departmentname\":null,\"contact\":null,\"idcard\":\"15a692e5cc4340bf88a47bbc08e4570d\",\"name\":\"任美蓉\",\"banben\":null,\"id\":\"15a692e5cc4340bf88a47bbc08e4570d\",\"department\":null,\"maintype\":null}]}}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败",
          "content": "{\n               status: false,\n               msg: \"爬取出错\"\n           }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/xfwSpider.js",
    "groupTitle": "xfwSpider"
  },
  {
    "type": "get",
    "url": "/xfwSpider/shyk_view",
    "title": "三会一课详情查看",
    "name": "shyk_view",
    "group": "xfwSpider",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cookie",
            "description": "<p>cookie</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shykType",
            "description": "<p>会议类型 必填 0支部党员会 1支部委员会 2党小组会 3党课</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>详情id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "{\"status\":true,\"data\":[[{\"text\":\"机关党支部民主评议工作\"},{\"text\":\"2018-03-16\"},{\"text\":\"已备案\"},{\"text\":\"查看修改删除个人详情\",\"id\":\"575892\"}],[{\"text\":\"十九大专题学习\"},{\"text\":\"2017-12-01\"},{\"text\":\"已备案\"},{\"text\":\"查看修改删除个人详情\",\"id\":\"499055\"}]]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败",
          "content": "{\n               status: false,\n               msg: \"爬取出错\"\n           }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/xfwSpider.js",
    "groupTitle": "xfwSpider"
  },
  {
    "type": "GET",
    "url": "/xfwSpider/xueshi",
    "title": "获取学时列表",
    "name": "xueshi",
    "group": "xfwSpider",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cookie",
            "description": "<p>cookie</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "{\"status\":true,\"data\":[{\"text\":[\"序号\",\"姓名\",\"培训时间\",\"培训形式\",\"培训班次或内容\",\"累计完成学时\"],\"id\":\"\",\"id2\":\"\"},{\"text\":[\"1\",\"孙兆彬\",\"2018-06-01\",\"213\",\"213\",\"1\"],\"id\":\"23202db12f744889b76d6d6803f116d9\",\"id2\":\"315712\"},{\"text\":[\"1\",\"孙兆彬\",\"2018-06-06\",\"213\",\"213\"],\"id\":\"\",\"id2\":\"315711\"},{\"text\":[\"1\",\"孙兆彬\",\"2018-06-11\",\"aaaaaaaaa\",\"2222222222\"],\"id\":\"\",\"id2\":\"315716\"},{\"text\":[\"2\",\"任美蓉\",\"2018-06-01\",\"213\",\"213\",\"\"],\"id\":\"15a692e5cc4340bf88a47bbc08e4570d\",\"id2\":\"315713\"},{\"text\":[\"2\",\"任美蓉\",\"2018-06-11\",\"aaaaaaaaa\",\"2222222222\"],\"id\":\"\",\"id2\":\"315717\"},{\"text\":[\"3\",\"赵晓磊\",\"2018-06-01\",\"213\",\"213\",\"\"],\"id\":\"64f58cc431354e5eb8dd8dc0ba40ac64\",\"id2\":\"315714\"},{\"text\":[\"4\",\"赵荣荣\",\"2018-06-01\",\"213\",\"213\",\"\"],\"id\":\"7de8ef92cb6348248067ca7d9d1258bf\",\"id2\":\"315715\"}]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败",
          "content": "{\n               \"status\": false,\n               \"msg\": \"爬取出错\"\n           }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/xfwSpider.js",
    "groupTitle": "xfwSpider"
  },
  {
    "type": "POST",
    "url": "/xfwSpider/xueshiadd",
    "title": "新增学时记录",
    "name": "xueshiadd",
    "group": "xfwSpider",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cookie",
            "description": "<p>cookie</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nameid",
            "description": "<p>参与学习人的id 多个逗号分割,通过接口获取人名列表 23202db12f744889b76d6d6803f116d9,15a692e5cc4340bf88a47bbc08e4570d</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>参与学习的人名,多个逗号分割，孙兆彬,任美蓉,赵晓磊,赵荣荣,</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tcpcTrainConditioNtraintimeString",
            "description": "<p>学习时间 2018-06-01(tcpcTrainConditioN换成tcpcTrainCondition.)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tcpcTrainConditioNtrainway",
            "description": "<p>学习方式 (tcpcTrainConditioN换成tcpcTrainCondition.)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tcpcTrainConditioNcontent",
            "description": "<p>学习内容(tcpcTrainConditioN换成tcpcTrainCondition.)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "{\"status\":true,\"msg\":\"添加成功\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败",
          "content": "{\n               \"status\": false,\n               \"msg\": \"爬取出错\"\n           }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/xfwSpider.js",
    "groupTitle": "xfwSpider"
  },
  {
    "type": "POST",
    "url": "/xfwSpider/xueshidelete",
    "title": "删除学时记录",
    "name": "xueshidelete",
    "group": "xfwSpider",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cookie",
            "description": "<p>cookie</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>学时id  对应xueshi接口的id2参数</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "{\"status\":false,\"msg\":\"删除成功\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败",
          "content": "{\n               \"status\": false,\n               \"msg\": \"删除失败\"\n           }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/xfwSpider.js",
    "groupTitle": "xfwSpider"
  },
  {
    "type": "GET",
    "url": "/xfwSpider/xueshiparams",
    "title": "获取编辑学时的参数",
    "name": "xueshiparams",
    "group": "xfwSpider",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cookie",
            "description": "<p>cookie</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>学时id，对应xueshi接口返回的id2参数</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "{\"status\":true,\"data\":[{\"class\":\"required input-box\",\"hidden\":\"\",\"name\":\"id\",\"type\":\"text\",\"value\":\"\",\"id\":\"textfield\",\"size\":\"70\",\"title\":\"departmentid\"},{\"class\":\"required input-box\",\"hidden\":\"\",\"name\":\"trainId\",\"type\":\"text\",\"value\":\"\",\"id\":\"textfield\",\"size\":\"70\",\"title\":\"departmentid\"},{\"class\":\"required input-box\",\"hidden\":\"\",\"name\":\"departmentid\",\"type\":\"text\",\"value\":\"\",\"id\":\"textfield\",\"size\":\"70\",\"title\":\"departmentid\"},{\"class\":\"required input-box\",\"hidden\":\"\",\"name\":\"createtimeString\",\"type\":\"text\",\"onclick\":\"WdatePicker({dateFmt:'yyyy-MM-dd'})\",\"value\":\"\",\"id\":\"textfield\",\"size\":\"70\",\"style\":\"width: 150px;\",\"title\":\"createtime\"},{\"class\":\"required input-box\",\"hidden\":\"\",\"name\":\"nameId\",\"type\":\"text\",\"value\":\"\",\"id\":\"textfield\",\"size\":\"70\",\"title\":\"nameId\"},{\"class\":\"required input-box\",\"name\":\"traintimeString\",\"type\":\"text\",\"onclick\":\"WdatePicker({dateFmt:'yyyy-MM-dd'})\",\"value\":\"\",\"id\":\"textfield\",\"size\":\"70\",\"style\":\"width: 150px;\",\"title\":\"traintime\"},{\"class\":\"required input-box\",\"name\":\"trainway\",\"type\":\"text\",\"value\":\"\",\"id\":\"textfield\",\"size\":\"70\",\"title\":\"trainway\"},{\"class\":\"required input-box\",\"name\":\"content\",\"type\":\"text\",\"value\":\"\",\"id\":\"textfield\",\"size\":\"70\",\"title\":\"content\"}]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败",
          "content": "{\n               \"status\": false,\n               \"msg\": \"爬取出错\"\n           }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/xfwSpider.js",
    "groupTitle": "xfwSpider"
  },
  {
    "type": "POST",
    "url": "/xfwSpider/xueshiupdate",
    "title": "编辑学时信息",
    "name": "xueshiupdate",
    "group": "xfwSpider",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cookie",
            "description": "<p>cookie</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "others",
            "description": "<p>其他参数 根据xueshiparams接口返回的传</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "{\"status\":true,\"msg\":\"更新成功\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败",
          "content": "{\n               \"status\": false,\n               \"msg\": \"爬取出错\"\n           }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/xfwSpider.js",
    "groupTitle": "xfwSpider"
  },
  {
    "type": "POST",
    "url": "/xfwSpider/xueshiupdatetime",
    "title": "编辑学时时长",
    "name": "xueshiupdatetime",
    "group": "xfwSpider",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cookie",
            "description": "<p>cookie</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "xueshi",
            "description": "<p>时长</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userid",
            "description": "<p>不是用户id ，xueshiparams获取的id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>年份(如2018)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "{\"status\":true,\"msg\":\"更新成功\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败",
          "content": "{\n               \"status\": false,\n               \"msg\": \"爬取出错\"\n           }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/xfwSpider.js",
    "groupTitle": "xfwSpider"
  },
  {
    "type": "GET",
    "url": "/xfwSpider/xueshiusers",
    "title": "添加学时时选人的人员列表",
    "name": "xueshiusers",
    "group": "xfwSpider",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cookie",
            "description": "<p>cookie</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功",
          "content": "{\"status\":true,\"data\":[{\"departmenttype\":null,\"role\":null,\"sex\":null,\"shengri\":null,\"oldpassword\":null,\"createdateString\":null,\"createdate\":null,\"sort\":null,\"type\":null,\"password\":null,\"toplevel\":null,\"repassword\":null,\"post\":null,\"departmentname\":null,\"shengriString\":null,\"idcard\":\"23202db12f744889b76d6d6803f116d9\",\"contact\":null,\"name\":\"孙兆彬\",\"banben\":null,\"id\":\"23202db12f744889b76d6d6803f116d9\",\"department\":null,\"maintype\":null},{\"departmenttype\":null,\"role\":null,\"sex\":null,\"shengri\":null,\"oldpassword\":null,\"createdateString\":null,\"createdate\":null,\"sort\":null,\"type\":null,\"password\":null,\"toplevel\":null,\"repassword\":null,\"post\":null,\"departmentname\":null,\"shengriString\":null,\"idcard\":\"15a692e5cc4340bf88a47bbc08e4570d\",\"contact\":null,\"name\":\"任美蓉\",\"banben\":null,\"id\":\"15a692e5cc4340bf88a47bbc08e4570d\",\"department\":null,\"maintype\":null},{\"departmenttype\":null,\"role\":null,\"sex\":null,\"shengri\":null,\"oldpassword\":null,\"createdateString\":null,\"createdate\":null,\"sort\":null,\"type\":null,\"password\":null,\"toplevel\":null,\"repassword\":null,\"post\":null,\"departmentname\":null,\"shengriString\":null,\"idcard\":\"64f58cc431354e5eb8dd8dc0ba40ac64\",\"contact\":null,\"name\":\"赵晓磊\",\"banben\":null,\"id\":\"64f58cc431354e5eb8dd8dc0ba40ac64\",\"department\":null,\"maintype\":null},{\"departmenttype\":null,\"role\":null,\"sex\":null,\"shengri\":null,\"oldpassword\":null,\"createdateString\":null,\"createdate\":null,\"sort\":null,\"type\":null,\"password\":null,\"toplevel\":null,\"repassword\":null,\"post\":null,\"departmentname\":null,\"shengriString\":null,\"idcard\":\"7de8ef92cb6348248067ca7d9d1258bf\",\"contact\":null,\"name\":\"赵荣荣\",\"banben\":null,\"id\":\"7de8ef92cb6348248067ca7d9d1258bf\",\"department\":null,\"maintype\":null},{\"departmenttype\":null,\"role\":null,\"sex\":null,\"shengri\":null,\"oldpassword\":null,\"createdateString\":null,\"createdate\":null,\"sort\":null,\"type\":null,\"password\":null,\"toplevel\":null,\"repassword\":null,\"post\":null,\"departmentname\":null,\"shengriString\":null,\"idcard\":\"4a696f3bb16446beaefa1745d53b2bb2\",\"contact\":null,\"name\":\"李振\",\"banben\":null,\"id\":\"4a696f3bb16446beaefa1745d53b2bb2\",\"department\":null,\"maintype\":null},{\"departmenttype\":null,\"role\":null,\"sex\":null,\"shengri\":null,\"oldpassword\":null,\"createdateString\":null,\"createdate\":null,\"sort\":null,\"type\":null,\"password\":null,\"toplevel\":null,\"repassword\":null,\"post\":null,\"departmentname\":null,\"shengriString\":null,\"idcard\":\"16f1f12285a64481a11ed94549e9de79\",\"contact\":null,\"name\":\"李金妹\",\"banben\":null,\"id\":\"16f1f12285a64481a11ed94549e9de79\",\"department\":null,\"maintype\":null},{\"departmenttype\":null,\"role\":null,\"sex\":null,\"shengri\":null,\"oldpassword\":null,\"createdateString\":null,\"createdate\":null,\"sort\":null,\"type\":null,\"password\":null,\"toplevel\":null,\"repassword\":null,\"post\":null,\"departmentname\":null,\"shengriString\":null,\"idcard\":\"6cff235da587473e823192f517c03d91\",\"contact\":null,\"name\":\"陈炳羽\",\"banben\":null,\"id\":\"6cff235da587473e823192f517c03d91\",\"department\":null,\"maintype\":null},{\"departmenttype\":null,\"role\":null,\"sex\":null,\"shengri\":null,\"oldpassword\":null,\"createdateString\":null,\"createdate\":null,\"sort\":null,\"type\":null,\"password\":null,\"toplevel\":null,\"repassword\":null,\"post\":null,\"departmentname\":null,\"shengriString\":null,\"idcard\":\"531cbad734eb4a9592b5111b39eb66f4\",\"contact\":null,\"name\":\"刘强\",\"banben\":null,\"id\":\"531cbad734eb4a9592b5111b39eb66f4\",\"department\":null,\"maintype\":null}]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败",
          "content": "{\n               \"status\": false,\n               \"msg\": \"爬取出错\"\n           }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/xfwSpider.js",
    "groupTitle": "xfwSpider"
  }
] });
