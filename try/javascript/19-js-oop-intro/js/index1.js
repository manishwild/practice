let person = {
    //property string
    firstName:'Manish',
    lastName: 'shahi',
    //property number
    birthYear:1986,
    job:'Developer',
    //property boolean
    married: true,
    //method
    name : function () {
        return this.firstName + ' ' +this.lastName
    },
    age: function () {
        let currentDate = new Date()
        let currentYear =currentDate.getFullYear()
        return currentYear - this.birthYear
    },
    //property arraay
    kids:['Preetish','Preethak'],
    //property object
    wife:{
        firstName:'Preety',
        lastName:'shrestha',
        birthYear: NaN,
        job:'Accountant',
        name:function () {
            return this.firstName + '  ' * this.lastName
        }
    },
      //property array of objects
      brother:[{
          firstName:'mahesh',
          lastName:'khadgi'
      },{
          firstName:'mani',
          lastName:'shahi'
      }]
}
document.write(person.kids[0]+'<br>')
document.write(person.age()+'<br>')
document.write(person.brother[1].lastName+'<br>')
document.write(person.wife.firstName)