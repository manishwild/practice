let arr = [1,3,8,2,4,6,7]
document.write(arr.toString()+'<br>')
document.write(arr.join('*')+'<br>')
arr[arr.length]=55
document.write(arr.toString()+'<br>')
arr[arr.length]=33
document.write(arr.toString()+'<br>')
arr.push(66)
document.write(arr.toString()+'<br>')
arr.pop()
document.write(arr.toString()+'<br>')
arr.shift()
document.write(arr.toString()+'<br>')
arr.unshift(100)
document.write(arr.toString()+'<br>')
arr.splice(4,2,5,3,9)
document.write(arr.toString()+'<br>')
arr.splice(1,2)
document.write(arr.toString()+'<br>')

let arr1 = [3,3,3,,3,3,3,3,3,3,5]
let arr2 = arr1.concat(arr)
document.write(arr2.toString()+'<br>')
document.write(arr.toString()+'<br>')
let ar4 = arr.slice(1,3)
document.write(ar4.toString()+ '<br>')
document.write(arr.toString()+ '<br>')
let arr5=['ahmad','tim','manish','safa','hamud']
document.write(arr5.sort()+ '<br>')
arr.sort((a,b)=>{return a-b})
document.write(arr.toString()+ '<br>')
arr.sort((a,b)=> {return b-a})
document.write(arr.toString()+ '<br>')

let arr6 = [2,9,3,-5,7,100,20]
document.write(arr6.sort()+ '<br>')
document.write(arr6.reverse()+ '<br>')