import '../styles/blog.css';

function Blogs() {
  return (
    <section className="blogs">
      <h1 className="blog-section-heading">Blogs</h1>
      <div className="blog">
        <div className="blog-img">
          <img src="laptop.jpg" alt="Project" />
        </div>
        <div className="blog-description">
          <h1>Blog Name</h1>
          <p>Short Descrition</p>
          <a href="" className="demo-link">
            <i class="fas fa-book"></i>
            Blog
          </a>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
