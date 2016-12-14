$(document).ready(function(){
    var menu = [
            {"type_id":1,"name":"大菜","food":[
                                            {"food_id":1,"name":"鱼香肉丝","price":"10"},
                                            {"food_id":2,"name":"红烧肉","price":"11"},
                                            {"food_id":3,"name":"香辣粉","price":"12"}
                                            ]},
            {"type_id":2,"name":"中菜","food":[
                                            {"food_id":4,"name":"小炒肉","price":"13"},
                                            {"food_id":5,"name":"云吞","price":"14"}
                                            ]},
            {"type_id":3,"name":"小菜","food":[
                                            {"food_id":6,"name":"雪糕","price":"15"},
                                            {"food_id":7,"name":"黄瓜","price":"16"}
                                            ]}      
    ];
    dropMenu();
    function dropMenu(){
        for (var i = 0; i < menu.length; i++) {
            var a1 = $("<a href='#'></a>").text(menu[i].name);
            var span1 = $("<span></span>");
            span1.addClass("icon");
            var two_menu = $("<span></span>").text(menu[i].name);
            var span_add = $("<sapn></sapn>");
            span_add.addClass("add");
            two_menu.addClass("two-menu");
            var ul2 = $("<ul></ul>").append(two_menu,span_add);
            var li1 = $("<li></li>").append(a1,span1,ul2);
            $(".menu").append(li1);

            for(var j = 0; j < menu[i].food.length; j++){
                var span_del = $("<span></span>");
                var span_modi = $("<span></span>");
                span_del.addClass("del");
                span_modi.addClass("modifier");
                var li2 = $("<li></li>").text(menu[i].food[j].name+":"+menu[i].food[j].price);
                li2.append(span_del,span_modi);
                ul2.append(li2);
            }
        }
        $(".menu li").mouseover(function(){
            $(this).find("ul").show();
        });
        $(".menu li").mouseout(function(){
            $(this).find("ul").hide();
        });
    }
});

/*
    step 1: 根据menu的数据，动态生成一个二级联运菜单
    step 2: 实现动态增加、修改、删除菜单dom节点，同时保持dom结构与json保持同步
    step 3: 实现通过拖拽修改菜单结构（可使用jQuery插件），同时保持dom结构与json保持同步
*/