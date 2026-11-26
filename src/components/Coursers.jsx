
function Coursers() {

  const courses = [
    {
      name: "Web Development",
      category: "Development",
      duration: "12 Weeks",
      students: "2.5K Students",
      price: "$49",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700"
    },
    {
      name: "Python Programming",
      category: "Programming",
      duration: "10 Weeks",
      students: "1.8K Students",
      price: "$39",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=700"
    },
    {
      name: "UI/UX Design",
      category: "Design",
      duration: "8 Weeks",
      students: "1.2K Students",
      price: "$35",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=700"
    },
    {
      name: "Data Science",
      category: "Data & Analytics",
      duration: "14 Weeks",
      students: "3K Students",
      price: "$59",
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700"
    }
  ];

  return (
    <section className="courses" id="courses">

      <div className="courses-heading">
        <div>
          <span className="section-tag">OUR COURSES</span>
          <h2>Explore Our Popular Courses</h2>
          <p>
            Learn new skills with courses designed
            for your success.
          </p>
        </div>

        <a href="#contact" className="view-all">
          View All Courses →
        </a>
      </div>

      <div className="course-list">

        {courses.map((course, index) => (
          <div className="course-card" key={index}>

            <div className="course-image">
              <img
                src={course.image}
                alt={course.name}
              />

              <span className="course-category">
                {course.category}
              </span>
            </div>

            <div className="course-info">

              <div className="course-rating">
                <span>★ {course.rating}</span>
                <span>{course.students}</span>
              </div>

              <h3>{course.name}</h3>

              <div className="course-meta">
                <span>◷ {course.duration}</span>
                <span>Online Class</span>
              </div>

              <div className="course-bottom">
                <h3>{course.price}</h3>
                <button>View Course →</button>
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Coursers;
