import { FaUser, FaTags, FaCalendarAlt } from 'react-icons/fa';
import Blog1 from "/blog-1.png";
import Blog2 from "/blog-2.jpg";
import Blog3 from "/blog-3.jpg";

const Blog = () => {
    return (
        <section className="blog py-16" id="blog">
            <div className="container mx-auto px-4">
                <div className="">
                    <p className="text-orange-500 flex justify-center text-lg font-bold mb-4">News & Blogs</p>
                    <h2 className="text-3xl font-extrabold flex justify-center text-gray-800 mb-10">Latest News Feeds</h2>
                </div>

                <ul className="blog-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Blog Card 1 */}
                    <li className="blog-card">
                        <div className="shadow-lg">
                            <figure className="card-banner overflow-hidden aspect-w-2 aspect-h-1.5">
                                <img src={Blog1} alt="The Most Inspiring Interior Design Of 2021" className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110" />
                            </figure>
                            <div className="blog-content p-6">
                                <div className="blog-content-top mb-4">
                                    <ul className="card-meta-list flex space-x-4 items-center mb-4">
                                        <li>
                                            <a href="#" className="card-meta-link text-gray-500 flex items-center gap-2 text-sm font-semibold">
                                                <FaUser className="text-orange-500" />
                                                <span>by: Admin</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="card-meta-link text-gray-500 flex items-center gap-2 text-sm font-semibold">
                                                <FaTags className="text-orange-500" />
                                                <span>Interior</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <h3 className="blog-title text-lg font-semibold text-gray-900">
                                        <a href="#">The Most Inspiring Interior Design Of 2021</a>
                                    </h3>
                                </div>
                                <div className="blog-content-bottom flex justify-between items-center pt-4 mt-4 border-t border-gray-200">
                                    <div className="publish-date flex items-center gap-2 text-sm text-gray-500">
                                        <FaCalendarAlt className="text-orange-500" />
                                        <time dateTime="2022-27-04">Apr 27, 2022</time>
                                    </div>
                                    <a href="#" className="read-more-btn text-orange-500 text-sm font-semibold uppercase">Read More</a>
                                </div>
                            </div>
                        </div>
                    </li>

                    {/* Blog Card 2 */}
                    <li className="blog-card">
                        <div className="shadow-lg">
                            <figure className="card-banner overflow-hidden aspect-w-2 aspect-h-1.5">
                                <img src={Blog2} alt="Recent Commercial Real Estate Transactions" className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110" />
                            </figure>
                            <div className="blog-content p-6">
                                <div className="blog-content-top mb-4">
                                    <ul className="card-meta-list flex space-x-4 items-center mb-4">
                                        <li>
                                            <a href="#" className="card-meta-link text-gray-500 flex items-center gap-2 text-sm font-semibold">
                                                <FaUser className="text-orange-500" />
                                                <span>by: Admin</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="card-meta-link text-gray-500 flex items-center gap-2 text-sm font-semibold">
                                                <FaTags className="text-orange-500" />
                                                <span>Estate</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <h3 className="blog-title text-lg font-semibold text-gray-900">
                                        <a href="#">Recent Commercial Real Estate Transactions</a>
                                    </h3>
                                </div>
                                <div className="blog-content-bottom flex justify-between items-center pt-4 mt-4 border-t border-gray-200">
                                    <div className="publish-date flex items-center gap-2 text-sm text-gray-500">
                                        <FaCalendarAlt className="text-orange-500" />
                                        <time dateTime="2022-27-04">Apr 27, 2022</time>
                                    </div>
                                    <a href="#" className="read-more-btn text-orange-500 text-sm font-semibold uppercase">Read More</a>
                                </div>
                            </div>
                        </div>
                    </li>

                    {/* Blog Card 3 */}
                    <li className="blog-card">
                        <div className="shadow-lg">
                            <figure className="card-banner overflow-hidden aspect-w-2 aspect-h-1.5">
                                <img src={Blog3} alt="Renovating a Living Room? Experts Share Their Secrets" className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110" />
                            </figure>
                            <div className="blog-content p-6">
                                <div className="blog-content-top mb-4">
                                    <ul className="card-meta-list flex space-x-4 items-center mb-4">
                                        <li>
                                            <a href="#" className="card-meta-link text-gray-500 flex items-center gap-2 text-sm font-semibold">
                                                <FaUser className="text-orange-500" />
                                                <span>by: Admin</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="card-meta-link text-gray-500 flex items-center gap-2 text-sm font-semibold">
                                                <FaTags className="text-orange-500" />
                                                <span>Room</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <h3 className="blog-title text-lg font-semibold text-gray-900">
                                        <a href="#">Renovating a Living Room? Experts Share Their Secrets</a>
                                    </h3>
                                </div>
                                <div className="blog-content-bottom flex justify-between items-center pt-4 mt-4 border-t border-gray-200">
                                    <div className="publish-date flex items-center gap-2 text-sm text-gray-500">
                                        <FaCalendarAlt className="text-orange-500" />
                                        <time dateTime="2022-27-04">Apr 27, 2022</time>
                                    </div>
                                    <a href="#" className="read-more-btn text-orange-500 text-sm font-semibold uppercase">Read More</a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Blog;
