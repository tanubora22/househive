import { IoLocationSharp, IoCameraOutline, IoFilmOutline, IoBedOutline, IoManOutline, IoResizeOutline, IoHeartOutline, IoAddCircleOutline } from 'react-icons/io5';
import "../App.css";

const PropertyCard = ({ property }) => {
  return (
    <div className="border border-gray-200 shadow-lg transition-transform duration-300 transform hover:scale-105 w-96" >
      <div className="relative">
        <a href="/">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-56 object-cover transition-transform duration-500  hover:object-center"
          />
        </a>
        <span
          className={`absolute top-4 left-4 px-3 py-1 text-white text-sm rounded ${property.status === 'For Rent' ? 'bg-green-500' : 'bg-orange-500'}`}
        >
          {property.status}
        </span>
        <div className="absolute bottom-4 left-4 right-4 flex justify-between text-white text-sm">
          <div className="flex items-center gap-2">
            <IoLocationSharp />
            <span>{property.location}</span>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-1">
              <IoCameraOutline />
              <span>{property.photos}</span>
            </div>
            <div className="flex items-center gap-1">
              <IoFilmOutline />
              <span>{property.videos}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="text-orange-500 text-lg font-semibold mb-2">
          <strong>${property.price}</strong>/Month
        </div>
        <h3 className="text-lg font-semibold mb-2 hover:text-orange-500">
          <a href="#">{property.title}</a>
        </h3>
        <p className="text-gray-600 mb-4">{property.description}</p>
        <ul className="flex gap-6 text-gray-600 text-sm">
          <li className="flex items-center gap-2">
            <IoBedOutline />
            <span>{property.bedrooms} Bedrooms</span>
          </li>
          <li className="flex items-center gap-2">
            <IoManOutline />
            <span>{property.bathrooms} Bathrooms</span>
          </li>
          <li className="flex items-center gap-2">
            <IoResizeOutline />
            <span>{property.squareFeet} Sq Ft</span>
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-between p-4 border-t">
        <div className="flex items-center gap-4 ">
          <img
            src={property.authorImage}
            alt={property.author}
            className="w-10 h-10 rounded-full "
          />
          <div>
            <p className="font-semibold">{property.author}</p>
            <p className="text-gray-500 text-sm">{property.authorTitle}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="p-2 bg-gray-200 hover:bg-orange-500 hover:text-white rounded">
            <IoResizeOutline />
          </button>
          <button className="p-2 bg-gray-200 hover:bg-orange-500 hover:text-white rounded">
            <IoHeartOutline />
          </button>
          <button className="p-2 bg-gray-200 hover:bg-orange-500 hover:text-white rounded">
            <IoAddCircleOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

const PropertyList = () => {
  const properties = [
    {
      image: '/property-1.jpg',
      status: 'For Rent',
      location: 'Belmont Gardens, Chicago',
      photos: 4,
      videos: 2,
      price: '34,900',
      title: 'New Apartment Nice View',
      description:
        'Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood',
      bedrooms: 3,
      bathrooms: 2,
      squareFeet: 3450,
      author: 'William Seklo',
      authorTitle: 'Estate Agents',
      authorImage: '/author.jpg',
    },
  ];

  return (
    <section className="p-6">
      <div className="container mx-auto">
        {/* <h2 className="text-2xl font-semibold mb-4">Featured Listings</h2> */}
        <div className='flex justify-center' id='property'>
        <p className="text-orange-500 text-3xl font-bold mb-4">Featured Listings</p>
        </div>
        <div className="relative">
          <div className="overflow-x-auto scroll-smooth pb-4">
            <div className="flex gap-8">
              {properties.map((property, index) => (
                <PropertyCard key={index} property={property} />
              ))}
              {properties.map((property, index) => (
                <PropertyCard key={index} property={property} />
              ))}
              {properties.map((property, index) => (
                <PropertyCard key={index} property={property} />
              ))}
              {properties.map((property, index) => (
                <PropertyCard key={index} property={property} />
              ))}
              {properties.map((property, index) => (
                <PropertyCard key={index} property={property} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyList;
