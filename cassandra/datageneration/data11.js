const fs = require('fs');
const stringify = require('csv-stringify');
const faker = require('faker');

const instructorArr = [];

for (let i = 5000001; i <= 5500000; i++) {
  instructorArr.push({
    "courseId" : i,
    "imageUrl" : faker.image.avatar(),
    "name" : faker.name.findName(),
    "headline" : faker.lorem.sentence(),
    "body" : faker.lorem.paragraph(),
    "reviewsIcon" : "https://image.flaticon.com/icons/svg/25/25355.svg",
    "reviews" : faker.random.number(),
    "ratingIcon" : "https://www.iconsdb.com/icons/preview/black/star-xxl.png",
    "rating" : Math.floor(Math.random() * 5) + 1,
    "studentsIcon" : "http://chittagongit.com//images/person-icon-png/person-icon-png-28.jpg",
    "numOfStudents" : faker.random.number(),
    "courseIcon" : "http://semanaialumni.udd.cl/files/2017/01/play-icon-300x300.png",
    "numOfCourses" : Math.floor(Math.random() * 30) + 1
 })
}


stringify(instructorArr, (err, result) => {
  fs.appendFile('cassandra/instructor.csv', result, err => {
    if (err) {
      console.log(err);
    }
    console.log('Success')
  });
});