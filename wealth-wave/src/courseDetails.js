const courseArray = [{
    id:"price_1PyfWN12LfZKuF5w7F4Thbvq",
    title: 'Ace Excel',
    instructor: "Chetan Sharma",
    description: "Masterclass on Ace the Excel and save your time!",
    price: 499
},
{
    id:"price_1PyfWi12LfZKuF5wr7jHYm72",
    title: 'Personal Finance',
    instructor: "Mahesh Parikh",
    description: "Masterclass on planning of your personal finance in 7 steps!",
    price: 999
},
{
    id:"price_1PyfX312LfZKuF5w0bL7KCa9",
    title: 'Learn Systemetic Investment',
    instructor: "Rohan Kohli",
    description: "Ultimate Workshop on how to investing and all the statics!",
    price: 1999
}
]

function getCourseData(id){
    const courseData = courseArray.find((course)=>course.id === id
    )

    if(courseData === undefined){
        console.log("Course data does not match for existing id "+id)
        return undefined
    }
   return courseData
}

export {courseArray,getCourseData}