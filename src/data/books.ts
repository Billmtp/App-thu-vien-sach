export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  description: string;
  cover: string;
  year: number;
}

export const books: Book[] = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    description: "Một câu chuyện bi thương về giấc mơ Mỹ, tình yêu và sự phù phiếm trong thập niên 1920. Jay Gatsby, một triệu phú bí ẩn, tổ chức những bữa tiệc xa hoa với hy vọng giành lại tình yêu của Daisy Buchanan.",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
    year: 1925
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    description: "Một tác phẩm kinh điển về xã hội toàn trị, nơi Big Brother theo dõi mọi hành động. Winston Smith dám mơ về tự do trong thế giới bị kiểm soát hoàn toàn.",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",
    year: 1949
  },
  {
    id: 3,
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Self-help",
    description: "Hành trình của chàng chăn cừu Santiago đi tìm kho báu ở Ai Cập. Một câu chuyện về việc theo đuổi giấc mơ và lắng nghe tiếng gọi của trái tim.",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
    year: 1988
  },
  {
    id: 4,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    description: "Cậu bé Harry Potter phát hiện mình là phù thủy và bước vào thế giới ma thuật tại trường Hogwarts. Nơi đây, cậu học được về tình bạn, lòng dũng cảm và số phận của mình.",
    cover: "https://images.unsplash.com/photo-1618666012174-83b441c0bc76?w=400&h=600&fit=crop",
    year: 1997
  },
  {
    id: 5,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    description: "Câu chuyện tình yêu kinh điển giữa Elizabeth Bennet thông minh và Mr. Darcy kiêu ngạo. Một tác phẩm châm biếm xã hội và khám phá bản chất con người.",
    cover: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=400&h=600&fit=crop",
    year: 1813
  },
  {
    id: 6,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    description: "Bilbo Baggins, một hobbit yêu cuộc sống bình yên, bị cuốn vào cuộc phiêu lưu với 13 người lùn để giành lại kho báu từ rồng Smaug.",
    cover: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=400&h=600&fit=crop",
    year: 1937
  },
  {
    id: 7,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-help",
    description: "Hướng dẫn thực tế về việc xây dựng thói quen tốt và phá bỏ thói quen xấu. Những thay đổi nhỏ hàng ngày có thể tạo ra kết quả phi thường.",
    cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop",
    year: 2018
  },
  {
    id: 8,
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Dystopian",
    description: "Một xã hội tương lai nơi con người được sinh ra trong ống nghiệm và hạnh phúc được kiểm soát bằng thuốc. Liệu sự ổn định có đáng đánh đổi tự do?",
    cover: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=400&h=600&fit=crop",
    year: 1932
  },
  {
    id: 9,
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    genre: "Classic",
    description: "Câu chuyện về hoàng tử bé từ tiểu hành tinh B-612 và những bài học sâu sắc về tình yêu, tình bạn và ý nghĩa cuộc sống qua góc nhìn trẻ thơ.",
    cover: "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?w=400&h=600&fit=crop",
    year: 1943
  },
  {
    id: 10,
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    genre: "Fantasy",
    description: "Kvothe kể lại câu chuyện đời mình, từ cậu bé mồ côi đến huyền thoại. Một tác phẩm fantasy đầy thi vị về âm nhạc, ma thuật và những bí mật đen tối.",
    cover: "https://images.unsplash.com/photo-1518744386442-2d48ac47a7eb?w=400&h=600&fit=crop",
    year: 2007
  },
  {
    id: 11,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    genre: "Self-help",
    description: "Cuốn sách kinh điển về tư duy làm giàu, dựa trên nghiên cứu về những người thành công nhất thế kỷ 20. 13 nguyên tắc để đạt được mục tiêu.",
    cover: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=600&fit=crop",
    year: 1937
  },
  {
    id: 12,
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    genre: "Romance",
    description: "Cô gia sư Jane Eyre và chủ nhân bí ẩn Mr. Rochester trong câu chuyện tình yêu gothic đầy kịch tính. Một tuyên ngôn về sự độc lập và phẩm giá của phụ nữ.",
    cover: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&h=600&fit=crop",
    year: 1847
  },
  {
    id: 13,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic",
    description: "Qua góc nhìn của cô bé Scout, câu chuyện khám phá bất công chủng tộc và sự mất mát tuổi thơ ở miền Nam nước Mỹ những năm 1930.",
    cover: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=600&fit=crop",
    year: 1960
  },
  {
    id: 14,
    title: "Dune",
    author: "Frank Herbert",
    genre: "Fantasy",
    description: "Trên hành tinh sa mạc Arrakis, Paul Atreides phải đối mặt với âm mưu chính trị và khám phá số phận của mình như một nhà tiên tri.",
    cover: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop",
    year: 1965
  },
  {
    id: 15,
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen Covey",
    genre: "Self-help",
    description: "Bảy thói quen giúp bạn thay đổi tư duy và trở nên hiệu quả hơn trong công việc lẫn cuộc sống cá nhân.",
    cover: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=600&fit=crop",
    year: 1989
  },
  {
    id: 16,
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    genre: "Dystopian",
    description: "Trong xã hội tương lai nơi sách bị cấm và đốt, Guy Montag - một lính cứu hỏa - bắt đầu đặt câu hỏi về vai trò của mình.",
    cover: "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?w=400&h=600&fit=crop",
    year: 1953
  },
  {
    id: 17,
    title: "Wuthering Heights",
    author: "Emily Brontë",
    genre: "Romance",
    description: "Mối tình bi thương giữa Heathcliff và Catherine trên vùng hoang dã Yorkshire. Một kiệt tác gothic về tình yêu và sự trả thù.",
    cover: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=400&h=600&fit=crop",
    year: 1847
  },
  {
    id: 18,
    title: "A Game of Thrones",
    author: "George R.R. Martin",
    genre: "Fantasy",
    description: "Cuộc tranh giành quyền lực giữa các gia tộc quý tộc của Westeros. Một thế giới fantasy đầy mưu mô và bất ngờ.",
    cover: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=600&fit=crop",
    year: 1996
  },
  {
    id: 19,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    genre: "Self-help",
    description: "Hướng dẫn thực hành sống trong hiện tại và tìm thấy sự bình an nội tâm. Triết lý về chánh niệm và tỉnh thức.",
    cover: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400&h=600&fit=crop",
    year: 1997
  },
  {
    id: 20,
    title: "Animal Farm",
    author: "George Orwell",
    genre: "Dystopian",
    description: "Câu chuyện ngụ ngôn về cuộc cách mạng của động vật tại trang trại Manor. Một phê phán sắc bén về chủ nghĩa toàn trị.",
    cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
    year: 1945
  },
  {
    id: 21,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    genre: "Classic",
    description: "Raskolnikov, sinh viên nghèo, phạm tội giết người và trải qua hành trình đau đớn về tội lỗi và sự cứu chuộc.",
    cover: "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?w=400&h=600&fit=crop",
    year: 1866
  },
  {
    id: 22,
    title: "The Witcher: The Last Wish",
    author: "Andrzej Sapkowski",
    genre: "Fantasy",
    description: "Geralt of Rivia, thợ săn quái vật, trong những cuộc phiêu lưu đầy nguy hiểm và triết lý về thiện ác.",
    cover: "https://images.unsplash.com/photo-1535666669445-e8c15cd2e7d9?w=400&h=600&fit=crop",
    year: 1993
  },
  {
    id: 23,
    title: "Outlander",
    author: "Diana Gabaldon",
    genre: "Romance",
    description: "Claire Randall du hành thời gian về Scotland thế kỷ 18 và gặp chiến binh Jamie Fraser. Một thiên tình sử xuyên thời gian.",
    cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop",
    year: 1991
  },
  {
    id: 24,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    genre: "Self-help",
    description: "Bài học về tiền bạc và đầu tư từ hai người cha khác nhau. Thay đổi tư duy về tài chính và xây dựng sự giàu có.",
    cover: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=600&fit=crop",
    year: 1997
  }
];

export const genres = ["All", "Fantasy", "Self-help", "Dystopian", "Classic", "Romance"];
