import PropTypes from 'prop-types';
import { useState } from 'react';
import { BookOpen } from 'lucide-react';

const BookCard = ({ title, author, review, dateRead, cover }) => (
  <div className="bg-academia-card p-6 rounded-lg shadow-md border border-academia-secondary hover:scale-105 transition-transform duration-200">
    <div className="flex items-center gap-4">
      <div className="w-[100px] h-[150px] flex-shrink-0">
        <img
          src={cover}
          alt={`Cover of ${title}`}
          className="w-full h-full object-contain rounded-md"
        />
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-academia-accent">{title}</h3>
        <p className="text-academia-secondary mb-2">by {author}</p>
        <p className="text-sm text-gray-500 mb-3 items-center flex gap-1">
        <BookOpen className="h-4 w-4 mr-2" />
        <span>Read in {dateRead}</span>
        </p>
        <blockquote className="font-sans text-sm text-gray-500 italic border-l-4 border-academia-accent pl-4">
          {review}
        </blockquote>
      </div>
    </div>
  </div>
);

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  dateRead: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired
};

const Reading = () => {
  const [filter, setFilter] = useState('all');
  
  const books = [
    {
      title: "Shatter Me",
      author: "Tahereh Mafi",
      review: "An easy, engaging read that kept me hooked from start to finish.",
      dateRead: "May 2025",
      cover: "https://m.media-amazon.com/images/I/81VpXyXk4PL._SY522_.jpg",
      genre: "fiction"
    },
    {
      title: "The Stranger",
      author: "Albert Camus",
      review: "A story that began simply, but evolved into something I didn’t expect. I still need time to comprehend the whys and hows of it all.",
      dateRead: "May 2025",
      cover: "https://m.media-amazon.com/images/I/617WkdpG8xL._SY522_.jpg",
      genre: "fiction"
    },
    {
      title: "The Mystery of the Blue Train",
      author: "Agatha Christie",
      review: "A book that took me a little time to get interested in but as the story progressed and things were revealed, I enjoyed it.",
      dateRead: "March 2025",
      cover: "https://m.media-amazon.com/images/I/817Q+SGJ2rL._SY466_.jpg",
      genre: "fiction"
    },
    {
      title: "The Autobiography of a Yogi",
      author: "Paramahansa Yogananda",
      review: "Forever grateful for the chance to read this book. A slow read, but an amazing one that added a beautiful new perspective to my life.",
      dateRead: "February 2025",
      cover: "https://m.media-amazon.com/images/I/71IDxgWwPoL._SY522_.jpg",
      genre: "non-fiction"
    },
    {
      title: "After You",
      author: "Jojo Moyes",
      review: "Reading how Lou naviagtes her life after Will's death with the introduction of new characters and the twists in the story was a delight.",
      dateRead: "February 2025",
      cover: "https://m.media-amazon.com/images/I/71rhQwIzb5L._SY522_.jpg",
      genre: "fiction"
    },
    {
      title: "Me Before You",
      author: "Jojo Moyes",
      review: "How can reading a book even when you know the story, be so beautiful and heartbreaking at the same time?",
      dateRead: "January 2025",
      cover: "https://m.media-amazon.com/images/I/41QwHl4btUL._SY445_SX342_.jpg",
      genre: "fiction"
    },
    {
      title: "Animal Farm",
      author: "George Orwell",
      review: "A story with animals as characters that convey a message and makes you think. I enjoyed reading this book.",
      dateRead: "December 2024",
      cover: "https://m.media-amazon.com/images/I/4150IkIpANL._SY445_SX342_.jpg",
      genre: "fiction"
    },
    {
      title: "Coaching, Compassion and Leadership",
      author: "Payal Jindal Khanna",
      review: "A book that made me understand about compassion, added a new perspective on leadership and helped me learn about new coaching techniques.",
      dateRead: "November 2024",
      cover: "https://m.media-amazon.com/images/I/4165LLV1JUL._SY445_SX342_.jpg",
      genre: "non-fiction"
    },
    {
      title: "The Metamorphosis",
      author: "Franz Kafka",
      review: `"Only if he could understand us ..." My heart broke for Gregor. This book added a new layer to how I see the world—and how we treat those we don’t understand.`,
      dateRead: "November 2024",
      cover: "https://m.media-amazon.com/images/I/71qR+kG+43L._SY466_.jpg",
      genre: "fiction"
    },
    {
      title: "Men Without Women",
      author: "Haruki Murakami",
      review: "Beautifully written short stories that left me thinking about the characters and their stories.",
      dateRead: "October 2024",
      cover: "https://m.media-amazon.com/images/I/41bjshLShLL._SY445_SX342_.jpg",
      genre: "fiction"
    },
    {
      title: "Verity",
      author: "Colleen Hoover",
      review: "The story felt a little stretched in the middle but the ending left me staring at the wall as I had to rethink the entire story.",
      dateRead: "October 2024",
      cover: "https://m.media-amazon.com/images/I/51B5Njjh36L._SY445_SX342_.jpg",
      genre: "fiction"
    },
    {
      title: "As Good as Dead",
      author: "Holly Jackson",
      review: "Well, I had my doubts about the killer but I was not expecting what happens. Sal and Andie deserved better and I absolutely love Pipa and Ravi.",
      dateRead: "August 2024",
      cover: "https://m.media-amazon.com/images/I/41AbThTgrrL._SY445_SX342_.jpg",
      genre: "fiction"
    },
    {
      title: "Good Girl, Bad Blood",
      author: "Holly Jackson",
      review: "New mystery, new twists and new revelations. Little did I know I would change my views on Stanley after that interview in the first book.",
      dateRead: "August 2024",
      cover: "https://m.media-amazon.com/images/I/51y7R-fapML._SY445_SX342_.jpg",
      genre: "fiction"
    },
    {
      title: "A Good Girl's Guide to Murder",
      author: "Holly Jackson",
      review: "An amazing thriller that made me feel like I was working on the case with Pipa and Ravi. My heart goes out for Sal.",
      dateRead: "June 2024",
      cover: "https://m.media-amazon.com/images/I/51wlOYeH4BL._SY445_SX342_.jpg",
      genre: "fiction"
    },
    {
      title: "Days at the Morisaki Bookstore",
      author: "Satoshi Yagisawa",
      review: "This book felt like a warm hug. It was soft and comforting, though a few moments definitely got me teary-eyed.",
      dateRead: "May 2024",
      cover: "https://m.media-amazon.com/images/I/51dGvrTpBWL._SY445_SX342_.jpg",
      genre: "fiction"
    },
    {
      title: "The Book Thief",
      author: "Markus Zusak",
      review: "It took me a little time to finish this book, but every page was worth it. A beautifully told story, narrated by Death, with Liesel and Max staying with me long after I turned the last page.",
      dateRead: "March 2024",
      cover: "https://m.media-amazon.com/images/I/51ZgLP0VkOL._SY445_SX342_.jpg",
      genre: "fiction"
    },
    {
      title: "The Kite Runner",
      author: "Khaled Hosseini",
      review: "This book had me traumatized sobbing at 3 a.m. but I will never be able to get over the story.",
      dateRead: "February 2024",
      cover: "https://m.media-amazon.com/images/I/51bt7LtryoL._SY445_SX342_.jpg",
      genre: "fiction"
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      review: "This is my absolute favourite. Mr. Darcy and Miss Bennet's love story is an abosulte delight to read.",
      dateRead: "September 2023",
      cover: "https://m.media-amazon.com/images/I/81GycRlG1dL._AC_UY327_FMwebp_QL65_.jpg",
      genre: "fiction"
    },
    {
      title: "The Palace of Illusions",
      author: "Chitra Banerjee Divakaruni",
      review: "I started reading this book when I was in school (before I liked reading). It took me a long time to finish this one but I am glad I did.",
      dateRead: "2019 - September 2023",
      cover: "https://m.media-amazon.com/images/I/51v2j9bqQlL._SY445_SX342_.jpg",
      genre: "fiction"
    },
    {
      title: "Ram: Scion of Ikshvaku",
      author: "Amish Tripathi",
      review: "Any story centered around Lord Ram holds a special place in my heart. This book was a delight to read.",
      dateRead: "September 2023",
      cover: "https://m.media-amazon.com/images/I/51Vu-AQZYPL._SY445_SX342_.jpg",
      genre: "fiction"
    },
    {
      title: "The Secret of the Nagas",
      author: "Amish Tripathi",
      review: "While reading this book, I was completely engrossed in the story and I could not put it down. For someone who had just started reading, I finished it quickly.",
      dateRead: "August 2023",
      cover: "https://m.media-amazon.com/images/I/81R5xrntmdL._SY466_.jpg",
      genre: "fiction"
    },
    {
      title: "Sita - Warrior of Mithila",
      author: "Amish Tripathi",
      review: "Before reading this book, I never enjoyed reading. This book  made me fall in love with reading.",
      dateRead: "August 2023",
      cover: "https://m.media-amazon.com/images/I/612jmvVF6TL.jpg",
      genre: "fiction"
    },
  ];

  const filteredBooks = filter === 'all' 
    ? books 
    : books.filter(book => book.genre === filter);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-center text-academia-text">Reading List</h2>
      
      <div className="flex justify-center mb-8">
        <div className="text-gray-600 inline-flex rounded-md shadow-sm">
          {['all', 'fiction', 'non-fiction'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 text-sm font-medium border border-academia-secondary ${
                filter === category
                  ? 'bg-academia-secondary text-academia-accent'
                  : 'bg-academia-primary text-academia-text hover:bg-academia-dark'
              } ${
                category === 'all' ? 'rounded-l-lg' : ''
              } ${
                category === 'non-fiction' ? 'rounded-r-lg' : ''
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-8">
        {filteredBooks.map((book) => (
          <BookCard key={book.title} {...book} />
        ))}
      </div>
    </div>
  );
};

export default Reading;
