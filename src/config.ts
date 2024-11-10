export type Config = {
  github: string
  linkedin: string
  experience: {
    start: string
    end?: string
    title: string
    company: string
  }[]
  education: {
    start: string
    end?: string
    degree?: string
    school: string
  }[]
}

export type Experience = Config['experience']

export type Education = Config['education']

export const config: Config = {
  github: 'https://github.com/eric-k-chu',
  linkedin: 'https://www.linkedin.com/in/eric-k-chu',
  experience: [
    {
      start: '2024-04-08',
      title: 'Software Engineer',
      company: 'Terros',
    },
    {
      start: '2024-01-05',
      end: '2024-04-05',
      title: 'Web Development Teaching Assistant',
      company: 'LearningFuze',
    },
  ],
  education: [
    {
      start: '2023-08-28',
      end: '2024-12-08',
      school: 'LearningFuze Full Stack Web Development Bootcamp',
    },
    {
      start: '2018-08-05',
      end: '2022-08-05',
      degree: 'B.S in Computer Science',
      school: 'Califonia State University, Fullerton',
    },
  ],
}
