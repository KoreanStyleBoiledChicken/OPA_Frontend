import { PullRequestType } from "../../models/PullRequestType";

const pullRequestTestData : PullRequestType[]  = [
    {
        id : 1,
        companyName : "NHH",
        prName : "#121 e2e: avoid redundant labels in JUnit file",
        prTimeStamp : "03 January 2023 02:47 PM", 
        status : "검사중",
    },
    {
        id : 2,
        companyName : "NHH",
        prName : "#120 Set the initial length of set[T] in sets.KeySet ",
        prTimeStamp : "03 January 2023 02:47 PM", 
        status : "검사중",
    },
    {
        id : 3,
        companyName : "NHH",
        prName : "#119 gofmt fix Error string should not be capitalized or end with punctuation",
        prTimeStamp : "03 January 2023 02:47 PM", 
        status : "검사중",
    },
    {
        id : 4,
        companyName : "NHH",
        prName : "#118 kubeadm: change SystemPrivilegedGroup in apiserve-kubelet-client.crt",
        prTimeStamp : "03 January 2023 02:47 PM", 
        status : "검사중",
    },
    {
        id : 5,
        companyName : "AllYak",
        prName : "#121 e2e: avoid redundant labels in JUnit file",
        prTimeStamp : "03 January 2023 02:47 PM", 
        status : "경고",
        count : 4,
    },
    {
        id : 6,
        companyName : "AllYak",
        prName : "#120 Set the initial length of set[T] in sets.KeySet ",
        prTimeStamp : "03 January 2023 02:47 PM", 
        status : "위험",
        count : 4,
    },
    {
        id : 7,
        companyName : "AllYak",
        prName : "#119 gofmt fix Error string should not be capitalized or end with punctuation",
        prTimeStamp : "03 January 2023 02:47 PM", 
        status : "위험",
        count : 8
    },
    {
        id : 8,
        companyName : "NHH",
        prName : "#118 kubeadm: change SystemPrivilegedGroup in apiserve-kubelet-client.crt",
        prTimeStamp : "03 January 2023 02:47 PM", 
        status : "경고",
        count : 4
    },
    {
        id : 9,
        companyName : "NHH",
        prName : "#119 gofmt fix Error string should not be capitalized or end with punctuation",
        prTimeStamp : "03 January 2023 02:47 PM", 
        status : "위험",
        count : 7
    },
    {
        id : 10,
        companyName : "NHH",
        prName : "#118 kubeadm: change SystemPrivilegedGroup in apiserve-kubelet-client.crt",
        prTimeStamp : "03 January 2023 02:47 PM", 
        status : "경고",
        count : 423
    }
];

 export default pullRequestTestData; 