const Q1 = {
    multiSelect: false,
    buttonObjects: [
        {id: 1, title: "I can volunteer time to help", nextQuestionId: 3},
        {id: 2, title: "I need some help", nextQuestionId: 2}
    ]
};

const Q2 = {
    multiSelect: false,
    buttonObjects: [
        {id: 3, title: "Acquiring PPE", nextQuestionId: 3},
        {id: 4, title: "Need Materials to Make PPE", nextQuestionId: 3},
        {id: 5, title: "Acquiring Household Goods", nextQuestionId: 3},
        {id: 6, title: "Purchasing Groceries", nextQuestionId: 3},
        {id: 7, title: "Volunteers", nextQuestionId: 3}
    ]
};

const Q3 = {
    multiSelect: true,
    buttonObjects: [
        {id: 8, title: "I have a 3D printer", nextQuestionId: 3},
        {id: 9, title: "I have a sewing machine", nextQuestionId: 3}
    ]
};

const QUESTIONNAIRE_MAP = {
    1: Q1,
    2: Q2,
    3: Q3
};