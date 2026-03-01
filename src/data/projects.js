export const projects = [
     {
          id: 1,
          title: 'E-Commerce Backend System',
          subtitle: 'Flipkart-Inspired',
          description:
               'A scalable e-commerce backend supporting users, products, cart, and order management. Features JWT authentication, relational schema design, and optimized database queries for handling entity relationships and cart/order flow.',
          tags: ['Java', 'Spring Boot', 'JPA', 'MySQL', 'JWT'],
          image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
          github: 'https://github.com/Divoke911',
          highlights: [
               'User, product, cart, order & admin modules',
               'JWT authentication & relational schema',
               'Optimized cart/order flow & DB queries',
          ],
          color: '#6c5ce7',
     },
     {
          id: 2,
          title: 'Zomato Food Delivery Backend',
          subtitle: 'API + DB Design',
          description:
               'REST APIs and database schema for a food delivery platform. Features a normalized MySQL schema for users, restaurants, dishes, and orders with browsing, ordering, delivery tracking, filters, sorting, and pagination.',
          tags: ['Spring Boot', 'MySQL', 'REST API', 'JPA'],
          image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop',
          github: 'https://github.com/Divoke911',
          highlights: [
               'Normalized database schema design',
               'Browsing, ordering & delivery tracking APIs',
               'Filters, sorting, and pagination support',
          ],
          color: '#00cec9',
     },
     {
          id: 3,
          title: 'TaskFlow',
          subtitle: 'Jira-Like To-Do Management Tool',
          description:
               'A task management tool for teams with task creation, tracking, and workflow updates. Built with React frontend and Spring Boot backend with MySQL, featuring login, task CRUD, priorities, statuses, and team assignment.',
          tags: ['React', 'Spring Boot', 'MySQL', 'REST API', 'JWT'],
          image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
          github: 'https://github.com/Divoke911',
          highlights: [
               'Full-stack React + Spring Boot application',
               'Task CRUD with priorities & statuses',
               'Role-based access & team assignment',
          ],
          color: '#fd79a8',
     },
];

export const projectFilters = ['All', 'Spring Boot', 'React', 'MySQL', 'JWT'];
