//task 1 what will this code print
// ////////////////////////////////////
//task2 what will code print
// let x = 5
// {
//     var d = 3
//     console.log(x);
// }
// console.log(d);
// it will print 5 then 3
///////////////////////////////////////
//task3 what will this code print
// const i = 6
// console.log(i);
// i = 2
// console.log(i);
// it will6 than an error because we declare using const so this variable is unchangeable
/////////////////////////////////////////////////////////////////////////
//task4 what will this code print
// const arr = [1,3,5,5]
// console.log(arr[2]);
// arr[2] = 8
// console.log(arr[2]);
// it will print 5 then 8
////////////////////////////////////////
//task5 what will code print
// let c = 3
// let y = c
// y = 7
// console.log(c);
// console.log(y);
// it will print 3 then 7
/////////////////////////////////////////
//task6 what will this code print
// let obj1 ={
//     prop1:2,
//     prop2:'dummy',
//     prop3:true
// }
// let obj2 =  obj1
// obj2.prop1 = 6
// console.log(obj2.prop1);
// console.log(obj1.prop1);
// it will print 6 then 6
//task 7
// let obj1 ={
//     prop1:2,
//     prop2:'dummy',
//     prop3:true
// }
// let prop2 = 'hello'
// console.log(obj1.prop1);
// console.log(obj1.prop2);
// answer
// it will print 2 then hello
//task 8 write the shortest code of the following which array greater than or equal to 6
let arr =[2,6,7,9,2,6,-9,3,10,12,66,-66]
//let newArr = arr.filter(item => item >=6);
//console.log(newArr);
console.log(arr.filter(item => item >=6));
//////////////////////////////////////////////////////////
//task9 using last arr 'arr'print a new array which contain the items from arr multiply by 2
//let newArr = arr.map(item=>item*2)
//console.log(newArr);
console.log(arr.map(item=>item*2));
//////////////////////////////////////////////////
//task10 combine task and 9
//let newArr = arr.filter(item => item >=6).map(item=>item*2)
//console.log(newArr);
console.log(arr.filter(item => item >=6).map(item=>item*2));







