
let data = {
    sophia : {
        id: 33, 
        study: [
            {
                primary: 
                    [
                        {school_name: "ABC primary school"},
                        {location: "Peters burg"}
                    ]
            },
            {
                secondary:
                [
                    {school_name: "ABC secondary school"},
                        {location: "St Lorence"}
                ]
            }
        ]
    }
}

const secondSchool = data.sophia.study[1].secondary[0].school_name;
console.log(secondSchool);


const a = [1,3,5,7,9]; 


const even = []; 
for (const num of a){
    const double = num + 1; 
    even.push(double);
}

console.log(even);

// const aPrint = a.map(n => {
//     for(let i = 0; i < a.length; i++)
//     {
//         if(a[i] % 2 != 0 ){
            
//             console.log(a[i]);
//         }
//         else {
//             console.log('No correction needed');
//         }
//     }
// })

const task2 = [33,55,79,78,90,101,30]
const evenBy = task2.filter(n => n % 10 === 0); 
console.log(evenBy);

const finder = task2.find(n => n % 10 === 0);
console.log(finder);

const people = [
    {name: 'meeena', age: 20},
    {name: 'reeena', age: 22},
    {name: 'teeena', age: 24},
];

// const age = []; 
for (const prop in people){
    console.log(prop);
}

