import { PullRequestType } from "../../models/PullRequestType";

const pullRequestTestData : PullRequestType[]  = [
    {
        id : 1,
        companyName : "NHN",
        prName : "#16 ingress 보안 설정 변경",
        prTimeStamp : "03 January 2023 02:47 PM", 
        status : "검사중",
    },
    {
        id : 2,
        companyName : "HNN",
        prName : "#16 ingress 보안 설정 변경",
        prTimeStamp : "03 January 2023 02:47 PM", 
        status : "위험",
        count : 15
    },
    {
        id : 3,
        companyName : "Hello",
        prName : "#16 ingress 보안 설정 변경",
        prTimeStamp : "03 January 2023 02:47 PM", 
        status : "위험",
        count : 15
    },
    {
        id : 3,
        companyName : "AllYak",
        prName : "#16 ingress 보안 설정 변경",
        prTimeStamp : "03 January 2023 02:47 PM", 
        status : "경고",
        count : 15
    }
];

 export default pullRequestTestData; 