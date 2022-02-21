export interface ChildrenProp {
  children: React.ReactNode
}

export interface IExperience {
  company: string
  years: string
  designation: string
  description: string
  technologies: string[]
}

export interface IWork {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  client: string
  role: string
  technologies: string[]
}
