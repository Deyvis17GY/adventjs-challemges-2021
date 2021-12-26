function learn(time, courses) {
  const allCoursesInTime = courses
    .flatMap((course, index) =>
      courses.slice(index + 1).map((nextCourse, nextIndex) => ({
        total: course + nextCourse,
        pair: [index, index + nextIndex + 1] || null,
      }))
    )
    .filter(({ total }) => total <= time)
    .sort((a, b) => b?.total - a?.total);
  return allCoursesInTime[0]?.pair || null; 
}

console.log(learn(10, [2, 3, 8, 1, 4]));