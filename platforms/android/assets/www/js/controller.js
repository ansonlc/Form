function InfoListCtrl($scope, $http) {
    $scope.infomations = [
        {
            "item": "Training Session",
            "value": "Ansys Project Knowledge Sharing - OpenUI Issues"
        },
        {
            "item": "Instructor",
            "value": "Leon Wang Yuki Xu"
        },
        {
            "item": "Date",
            "value": "16-Dec"
        },
        {
            "item": "Time",
            "value": "12:30-13:30"
        }
];
    $scope.rates = [
        {
            "ID": "1",
            "item": "Objective",
            "rating": "The objectives for the training were clearly explained.",
            "grade": ""
        },
        {
            "ID": "2",
            "item": "Scope",
            "rating": "The amount of information covered was:",
            "grade": ""
        },
        {
            "ID": "3",
            "item": "Content",
            "rating": "The information (slides and presentation) was presented in a logical and understandable manner.",
            "grade": ""
        },
        {
            "ID": "4",
            "item": "Length",
            "rating": "The length of the training was:",
            "grade": ""
        },
        {
            "ID": "5",
            "item": "Pace",
            "rating": "The pace of the training was:",
            "grade": ""
        },
        {
            "ID": "6",
            "item": "Instructors",
            "rating": "The instructors knew the material well and prepared a lot:",
            "grade": ""
        },
        {
            "ID": "7",
            "item": "Interaction",
            "rating": "The instructor used an appropriate way to hold a discussion and other interactions.",
            "grade": ""
        },
        {
            "ID": "8",
            "item": "Readiness",
            "rating": "After the training, I feel comfort to apply it in the daily work.",
            "grade": ""
        },
        {
            "ID": "9",
            "item": "Promotion",
            "rating": "The training coordinate sent out the invitation with general idea and informed the attendees before training starts.",
            "grade": ""
        },
        {
            "ID": "10",
            "item": "Facilities",
            "rating": "The training environment (such as microphone, projector, air conditioner etc.)  impacted the training value:",
            "grade": ""
        }
        ];
    $scope.questions = [
        {
            "ID": "1",
            "item": "What did you like the most about this training?",
            "answer": ""
        },
        {
            "ID": "2",
            "item": "What did you like the least about this training?",
            "answer": ""
        },
        {
            "ID": "3",
            "item": "Is there anything else you would like the training to have been covered?",
            "answer": ""
        },
        {
            "ID": "4",
            "item": "Please provide any other comments or suggestion below:",
            "answer": ""
        }
        ];


    $scope.submit = function () {
        console.log("review the value of the scope", $scope);

        $http.post("login.do", {
            rates: $scope.rates,
            questions: $scope.questions
        }).success(function (data, status, headers, config) {
            $scope.data = data;
            alert("success");
        }).error(function (data, status, headers, config) {
            alert("error");
            $scope.data = data;
        });
    };

    $scope.getinfo = function () {
        $http.get("http://www.mocky.io/v2/52d4e17ff844153c01c4bc4f").success(function (data, status) {
            $scope.status = status;
            $scope.data = data;
        });
    };

}