window.onload = function() {
    if(Kernal.isLogin()) {
        initUserInfo();
    }

    // 设置监听器，点击搜索按钮后，执行对应函数
    document.getElementById('search-btn').addEventListener('click', function() {
        search();
    });

    $('#input').bind('keydown',function(event){
        if(event.keyCode == "13") {
            search();
        }
    });

    // TODO: 在此为 top-right 元素设置监听器
    // document.getElementById('top-right') ...
    document.getElementById('top-right').addEventListener('click', function() {
        clickLogin();
    });
}

function search() {
    // TODO: 搜索触发后的行为
    var inpu = document.getElementsByTagName("input")[0].value;
    if(inpu==null||inpu==""){
	window.alert("请输入搜索内容")
    }
    else{
    //window.alert(inpu);
	window.location.href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd="+inpu
    }
    console.log('');
}

function clickLogin() {
    if(!Kernal.isLogin()) {
        login();
    }
    else {
        logout();
    }
}

function initUserInfo() {
    // TODO: 修改页面显示错误的 bug，另外注意图片路径是否正确
    var username = Kernal.getUserName();
    //username=username.replace("!important","");
    var content = '<div id="user">\
                        <span id="user-img">\
                            <img src="./img/user.jpg" />\
                        </span>\
                        <span id="name">' + username+ '</span>\
                    </div>';
    document.getElementById('top-right').innerHTML = content;
}

// ============================================================ 你不需要去关注的代码

function login() {
    Kernal.login();
    location.reload();
}

function logout() {
    Kernal.logout();
    location.reload();
}