const isPast = require('date-fns/is_past')

const talks = [
  {
    name: 'CSS Hates You',
    event: 'Mtalks',
    date: new Date(2017, 5, 14),
    done: !!isPast(new Date(2017, 5, 14)),
    video: 'https://youtu.be/gwW36kV9TV4?t=10s',
    slides:
      'https://github.com/SaraVieira/talks/blob/master/CSS%20Hates%20You.pptx'
  },
  {
    name: "There's a whole new world offline",
    event: 'Require("lx")',
    date: new Date(2017, 6, 6),
    done: !!isPast(new Date(2017, 6, 6)),
    video: 'https://www.youtube.com/watch?v=ZvA41uuyujA&t=854s',
    slides:
      'https://docs.google.com/presentation/d/1vQ9xAijI8NjbQkFESu0LwVYEcpCxqQhcjC7ESzddMTE/edit#slide=id.p'
  },
  {
    name: 'CSS Hates You',
    event: 'Formidable & Friends Birthday Bash!',
    date: new Date(2017, 10, 9),
    done: !!isPast(new Date(2017, 10, 9)),
    slides:
      'https://drive.google.com/open?id=1lwjwVFpC_hnxZE7aUiuetgzHoEG87cxrzQ4oItdCAo4'
  },
  {
    name: 'We need to talk about Preact',
    event: 'JS Roundabout',
    date: new Date(2017, 10, 8),
    done: !!isPast(new Date(2017, 10, 8)),
    slides:
      'https://drive.google.com/open?id=1BJRGOBNySWpN7NRkr1kQVI1ul7EG9SCo5t4NSnFJrSM',
    video: 'https://www.youtube.com/watch?v=Bb3Vyj0KTd4'
  },
  {
    name: 'We need to talk about Preact',
    event: 'React Day Berlin',
    date: new Date(2017, 11, 2),
    done: !!isPast(new Date(2017, 11, 2))
  },
  {
    name: "Your brain doesn't have a --fix flag",
    event: 'Agent Conf',
    date: new Date(2018, 0, 25),
    done: !!isPast(new Date(2018, 0, 25))
  },
  {
    name: 'Testing React Applications',
    event: 'React Finland',
    date: new Date(2018, 3, 25),
    done: !!isPast(new Date(2018, 3, 25))
  },
  {
    name: 'Styleguide Driven Development',
    event: 'React Girls London',
    date: new Date(2017, 8, 26),
    done: !!isPast(new Date(2017, 8, 26)),
    slides: 'https://github.com/SaraVieira/styleguide-driven-development'
  },
  {
    name: 'Styleguide Driven Development',
    event: 'React Alicante',
    date: new Date(2017, 9, 30),
    done: !!isPast(new Date(2017, 9, 30)),
    slides: 'https://github.com/SaraVieira/styleguide-driven-development',
    video: 'https://www.youtube.com/watch?v=JjXnmhNW8Cs'
  },
  {
    name: "The Hitchhiker's Guide to the Webpack",
    event: 'Codemotion Amsterdam',
    date: new Date(2016, 4, 16),
    done: !!isPast(new Date(2016, 4, 16)),
    video: 'https://www.youtube.com/watch?v=Zor8E6_ZoVA&t=89s',
    slides:
      'https://github.com/SaraVieira/talks/blob/master/Codemotion%20Amsterdam.pptx'
  },
  {
    name: 'CSS3 Layouts: Flexbox vs CSS Grid',
    event: 'Codemotion Milan',
    date: new Date(2015, 10, 20),
    done: !!isPast(new Date(2015, 10, 20)),
    video: 'https://www.youtube.com/watch?v=b-in0QpvDiQ&t=500s',
    slides:
      'https://github.com/SaraVieira/talks/blob/master/Codemotion%20Amsterdam.pptx'
  },
  {
    name: 'CSS as a programming language',
    event: 'Front Trends',
    date: new Date(2014, 4, 20),
    done: !!isPast(new Date(2014, 4, 20)),
    video: 'https://vimeo.com/105956446',
    slides:
      'https://github.com/SaraVieira/talks/tree/master/css-as-programming-language'
  },
  {
    name: 'Front-end Tools and Workflows',
    event: 'QCon London 2015',
    date: new Date(2015, 5, 20),
    done: !!isPast(new Date(2015, 5, 20)),
    video: 'https://www.infoq.com/presentations/front-end-tools-workflows'
  }
]

module.exports = talks.sort((a, b) => (a.date > b.date ? -1 : 1))
