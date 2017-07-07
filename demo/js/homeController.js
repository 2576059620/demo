app.controller('homeController',function($scope,$http,$state){
	$scope.imgList = [
		"images/4.jpg",
		"images/5.jpg",
		"images/6.jpg",
		"images/7.jpg",
		"images/8.jpg"
	];


	$scope.dataList = [];
	//通过接口获取数据，注意，如果需要使用$http,则必须注入$http服务
	function getData(){
		$http({			//后面是参数，参数与参数之间用&隔开
			url:'data/data.php?type=list&pageNo='+page+"&num="+count
		}).then(function(data){
			if (page == 1) {
				// 获取第一页，则直接更新数据
				$scope.dataList=data.data.records;

				//注意在获取数据成功以后，需要手动将刷新控件结束
				$scope.$broadcast('scroll.refreshComplete');
			}else{
				//如果是加载，则需要将新获取的数据追加到原来的数据之后
				$scope.dataList = $scope.dataList.concat(data.data.records);

				//如果当前未加载到数据，说明已经获取到全部数据，需要将加载控件移除
				if (data.data.records.length == 0) {
					$scope.haveMore = false;
				}

				// 停止加载动画
				$scope.$broadcast('scroll.infiniteScrollComplete');
			}
		},function(err){
			console.log(err);
			if (page == 1) {
				//注意在获取数据失败以后，需要手动将刷新控件结束
				$scope.$broadcast('scroll.refreshComplete');
			}else{
				// 停止加载动画
				$scope.$broadcast('scroll.infiniteScrollComplete');
			}
		});
	}
	
	// 声明一个变量，用于判断页数
	var page = 1;
	//声明一个变量，表示每一页获取多少条数据
	var count = 10;
	//声明一个变量，表示数据是否已经完全加载
	$scope.haveMore = true;

	//程序初始时，需要加载第一页
	getData(page);

 	// 下拉刷新相关的操作
 	$scope.doRefresh = function() {
 		//每次刷新，都需要将page改成第一页
 		page=1;
 		//刷新的主要操作是再次向服务器发送请求，获取最新的数据
 		getData(page);
 	}

 	// 上拉加载相关的操作
 	$scope.loadMore = function(){
 		//加载，需要页面变量自增
		page++;
		//获取页码对应的数据
		getData(page);
 	}

	$scope.gotoDetail = function (obj) {
		console.log(obj);
		$state.go('detail',{name:obj.Name,city:obj.City,country:obj.Country,age:obj.age});
	}
})